package controller

import (
	"errors"
	"github.com/donknap/dpanel/app/common/logic"
	"github.com/donknap/dpanel/common/accessor"
	"github.com/donknap/dpanel/common/dao"
	"github.com/donknap/dpanel/common/entity"
	"github.com/donknap/dpanel/common/service/family"
	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	"github.com/pquerna/otp/totp"
	"github.com/we7coreteam/w7-rangine-go/v2/pkg/support/facade"
	"github.com/we7coreteam/w7-rangine-go/v2/src/http/controller"
	"time"
)

type User struct {
	controller.Abstract
}

func (self User) Login(http *gin.Context) {
	type ParamsValidate struct {
		Username        string `json:"username" binding:"required"`
		Password        string `json:"password" binding:"required"`
		ConfirmPassword string `json:"confirmPassword"`
		AutoLogin       bool   `json:"autoLogin"`
		Code            string `json:"code"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	setting, err := logic.Setting{}.GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingTwoFa)
	if err == nil && setting != nil && setting.Value.TwoFa.Enable {
		if params.Code == "" {
			self.JsonResponseWithError(http, errors.New("请输入双因素验证码"), 500)
			return
		}
		if !totp.Validate(params.Code, setting.Value.TwoFa.Secret) {
			self.JsonResponseWithError(http, errors.New("验证码错误"), 500)
			return
		}
	}

	if params.ConfirmPassword != "" {
		founder, _ := logic.Setting{}.GetValue(logic.SettingGroupUser, logic.SettingGroupUserFounder)
		if founder != nil {
			self.JsonResponseWithError(http, errors.New("管理员配置已经存在，无法初始化。请去系统设置中修改"), 500)
			return
		}
		if params.Password != params.ConfirmPassword {
			self.JsonResponseWithError(http, errors.New("两次输入密码不一致"), 500)
			return
		}
		err := dao.Setting.Create(&entity.Setting{
			GroupName: logic.SettingGroupUser,
			Name:      logic.SettingGroupUserFounder,
			Value: &accessor.SettingValueOption{
				Password: logic.User{}.GetMd5Password(params.Password, params.Username),
				Username: params.Username,
			},
		})
		if err != nil {
			self.JsonResponseWithError(http, err, 500)
			return
		}
	}
	var expireAddTime time.Duration
	if params.AutoLogin {
		expireAddTime = time.Hour * 24 * 30
	} else {
		expireAddTime = time.Hour * 24
	}

	currentUser, err := logic.Setting{}.GetValue(logic.SettingGroupUser, logic.SettingGroupUserFounder)
	if err != nil {
		self.JsonResponseWithError(http, errors.New("创始人配置不存在，请重新安装"+err.Error()), 500)
		return
	}
	password := logic.User{}.GetMd5Password(params.Password, params.Username)
	if params.Username == currentUser.Value.Username && currentUser.Value.Password == password {
		jwtSecret := logic.User{}.GetJwtSecret()
		jwtClaims := jwt.NewWithClaims(jwt.SigningMethodHS256, logic.UserInfo{
			UserId:       currentUser.ID,
			Username:     currentUser.Value.Username,
			RoleIdentity: currentUser.Name,
			RegisteredClaims: jwt.RegisteredClaims{
				ExpiresAt: jwt.NewNumericDate(time.Now().Add(expireAddTime)),
			},
		})
		code, err := jwtClaims.SignedString(jwtSecret)
		if err != nil {
			self.JsonResponseWithError(http, err, 500)
			return
		}
		self.JsonResponseWithoutError(http, gin.H{
			"accessToken": code,
		})
		return
	} else {
		self.JsonResponseWithError(http, errors.New("用户名密码错误"), 500)
		return
	}
}

func (self User) GetUserInfo(http *gin.Context) {
	result := gin.H{}

	data, exists := http.Get("userInfo")
	if !exists {
		self.JsonResponseWithError(http, errors.New("请先登录"), 401)
		http.AbortWithStatus(401)
		return
	}
	result["user"] = data.(logic.UserInfo)

	feature := []string{
		"composeStore",
	}
	if facade.GetConfig().GetString("app.env") != "lite" {
		feature = append(feature, "containerDomain")
	}
	result["feature"] = append(feature, family.Provider{}.Feature()...)

	if setting, err := new(logic.Setting).GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingTheme); err == nil && setting.Value != nil && setting.Value.Theme != nil {
		result["theme"] = setting.Value.Theme
	}

	self.JsonResponseWithoutError(http, result)
	return
}

func (self User) LoginInfo(http *gin.Context) {
	result := gin.H{
		"showRegister":  false,
		"showBuildName": true,
		"version":       facade.GetConfig().GetString("app.version"),
		"family":        facade.GetConfig().GetString("app.env"),
	}
	_, err := logic.Setting{}.GetDPanelInfo()
	if err == nil {
		result["showBuildName"] = false
	}
	founder, err := logic.Setting{}.GetValue(logic.SettingGroupUser, logic.SettingGroupUserFounder)
	if err != nil || founder == nil {
		result["showRegister"] = true
	}
	setting, err := logic.Setting{}.GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingTwoFa)
	if err == nil && setting != nil && setting.Value.TwoFa.Enable {
		result["showTwoFa"] = true
	}
	if setting, err = new(logic.Setting).GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingTheme); err == nil && setting.Value != nil && setting.Value.Theme != nil {
		result["theme"] = setting.Value.Theme
	}
	self.JsonResponseWithoutError(http, result)
	return
}

func (self User) Theme(http *gin.Context) {
	type ParamsValidate struct {
		MainMenu        string `json:"mainMenu"`
		Algorithm       string `json:"algorithm"`
		Compact         string `json:"compact"`
		FontSize        int    `json:"fontSize"`
		FontSizeConsole int    `json:"fontSizeConsole"`
		SideMenu        string `json:"sideMenu"`
		TablePageSize   string `json:"tablePageSize"`
	}
	params := ParamsValidate{}
	if !self.Validate(http, &params) {
		return
	}
	setting, err := new(logic.Setting).GetValue(logic.SettingGroupSetting, logic.SettingGroupSettingTheme)
	if err != nil || setting == nil || setting.Value == nil || setting.Value.Theme == nil {
		setting = &entity.Setting{
			GroupName: logic.SettingGroupSetting,
			Name:      logic.SettingGroupSettingTheme,
			Value: &accessor.SettingValueOption{
				Theme: &accessor.Theme{},
			},
		}
	}
	if params.MainMenu != "" {
		setting.Value.Theme.MainMenu = params.MainMenu
	}
	if params.Algorithm != "" {
		setting.Value.Theme.Algorithm = params.Algorithm
	}
	if params.Compact != "" {
		setting.Value.Theme.Compact = params.Compact
	}
	if params.FontSizeConsole > 0 {
		setting.Value.Theme.FontSizeConsole = params.FontSizeConsole
	}
	if params.FontSize > 0 {
		setting.Value.Theme.FontSize = params.FontSize
	}
	if params.SideMenu != "" {
		setting.Value.Theme.SideMenu = params.SideMenu
	}
	if params.TablePageSize != "" {
		setting.Value.Theme.TablePageSize = params.TablePageSize
	}
	err = logic.Setting{}.Save(setting)
	if err != nil {
		self.JsonResponseWithError(http, err, 500)
		return
	}
	self.JsonSuccessResponse(http)
	return
}
