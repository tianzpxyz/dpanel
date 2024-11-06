"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4037],{63434:function(le,z,e){var a=e(1413),f=e(45987),A=e(22270),D=e(84567),B=e(67294),w=e(90789),b=e(73552),O=e(85893),j=["options","fieldProps","proFieldProps","valueEnum"],g=B.forwardRef(function(s,K){var $=s.options,x=s.fieldProps,Q=s.proFieldProps,v=s.valueEnum,d=(0,f.Z)(s,j);return(0,O.jsx)(b.Z,(0,a.Z)({ref:K,valueType:"checkbox",valueEnum:(0,A.h)(v,void 0),fieldProps:(0,a.Z)({options:$},x),lightProps:(0,a.Z)({labelFormatter:function(){return(0,O.jsx)(b.Z,(0,a.Z)({ref:K,valueType:"checkbox",mode:"read",valueEnum:(0,A.h)(v,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,a.Z)({options:$},x),proFieldProps:Q},d))}},d.lightProps),proFieldProps:Q},d))}),c=B.forwardRef(function(s,K){var $=s.fieldProps,x=s.children;return(0,O.jsx)(D.Z,(0,a.Z)((0,a.Z)({ref:K},$),{},{children:x}))}),M=(0,w.G)(c,{valuePropName:"checked"}),I=M;I.Group=g,z.Z=I},5966:function(le,z,e){var a=e(97685),f=e(1413),A=e(45987),D=e(21770),B=e(72723),w=e(55241),b=e(97435),O=e(67294),j=e(73552),g=e(85893),c=["fieldProps","proFieldProps"],M=["fieldProps","proFieldProps"],I="text",s=function(v){var d=v.fieldProps,F=v.proFieldProps,R=(0,A.Z)(v,c);return(0,g.jsx)(j.Z,(0,f.Z)({valueType:I,fieldProps:d,filedConfig:{valueType:I},proFieldProps:F},R))},K=function(v){var d=(0,D.Z)(v.open||!1,{value:v.open,onChange:v.onOpenChange}),F=(0,a.Z)(d,2),R=F[0],J=F[1];return(0,g.jsx)(B.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(k){var h,q=k.getFieldValue(v.name||[]);return(0,g.jsx)(w.Z,(0,f.Z)((0,f.Z)({getPopupContainer:function(P){return P&&P.parentNode?P.parentNode:P},onOpenChange:function(P){return J(P)},content:(0,g.jsxs)("div",{style:{padding:"4px 0"},children:[(h=v.statusRender)===null||h===void 0?void 0:h.call(v,q),v.strengthText?(0,g.jsx)("div",{style:{marginTop:10},children:(0,g.jsx)("span",{children:v.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},v.popoverProps),{},{open:R,children:v.children}))}})},$=function(v){var d=v.fieldProps,F=v.proFieldProps,R=(0,A.Z)(v,M),J=(0,O.useState)(!1),_=(0,a.Z)(J,2),k=_[0],h=_[1];return d!=null&&d.statusRender&&R.name?(0,g.jsx)(K,{name:R.name,statusRender:d==null?void 0:d.statusRender,popoverProps:d==null?void 0:d.popoverProps,strengthText:d==null?void 0:d.strengthText,open:k,onOpenChange:h,children:(0,g.jsx)("div",{children:(0,g.jsx)(j.Z,(0,f.Z)({valueType:"password",fieldProps:(0,f.Z)((0,f.Z)({},(0,b.Z)(d,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(H){var P;d==null||(P=d.onBlur)===null||P===void 0||P.call(d,H),h(!1)},onClick:function(H){var P;d==null||(P=d.onClick)===null||P===void 0||P.call(d,H),h(!0)}}),proFieldProps:F,filedConfig:{valueType:I}},R))})}):(0,g.jsx)(j.Z,(0,f.Z)({valueType:"password",fieldProps:d,proFieldProps:F,filedConfig:{valueType:I}},R))},x=s;x.Password=$,x.displayName="ProFormComponent",z.Z=x},89492:function(le,z,e){e.r(z),e.d(z,{default:function(){return l}});var a=e(15009),f=e.n(a),A=e(99289),D=e.n(A),B=e(5574),w=e.n(B),b=e(2831),O=e(31418),j=e(40056),g=e(67294),c=e(85893),M={name:{show:!1,message:"\u60A8\u521B\u5EFA\u7684\u9762\u677F\u5BB9\u5668\u540D\u79F0\u975E\u9ED8\u8BA4\u7684 dpanel \uFF0C\u8BF7\u91CD\u5EFA\u5E76\u901A\u8FC7\u73AF\u5883\u53D8\u91CF APP_NAME \u6307\u5B9A\u65B0\u7684\u540D\u79F0\u3002"}};function I(){var n=O.Z.useApp(),r=(0,g.useState)(""),u=w()(r,2),p=u[0],E=u[1];return(0,g.useEffect)(function(){(0,b.aF)().then(function(y){!y.data.dpanel.containerInfo.Id&&y.data.dpanel.family!="lite"&&E(M.name.message)})},[]),(0,c.jsx)(c.Fragment,{children:p&&(0,c.jsx)(j.Z,{type:"error",message:p,banner:!0})})}var s=e(54006);function K(n){return $.apply(this,arguments)}function $(){return $=D()(f()().mark(function n(r){return f()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.abrupt("return",(0,s.request)("/api/common/user/login",{method:"POST",data:r}));case 1:case"end":return p.stop()}},n)})),$.apply(this,arguments)}var x=e(87547),Q=e(87462),v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},d=v,F=e(84089),R=function(r,u){return g.createElement(F.Z,(0,Q.Z)({},r,{ref:u,icon:d}))},J=g.forwardRef(R),_=J,k=e(10915),h=e(1413),q=e(45987),H=e(28459),P=e(93967),me=e.n(P),ie=e(97269),ne=e(4942),pe=e(98082),ve=function(r){return(0,ne.Z)((0,ne.Z)({},r.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:r.colorTextSecondary,fontSize:r.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),"@media (min-width: @screen-md-min)",(0,ne.Z)({},"".concat(r.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}))};function fe(n){return(0,pe.Xj)("LoginForm",function(r){var u=(0,h.Z)((0,h.Z)({},r),{},{componentCls:".".concat(n)});return[ve(u)]})}var Ce=["logo","message","contentStyle","title","subTitle","actions","children","containerStyle","otherStyle"];function ge(n){var r,u=n.logo,p=n.message,E=n.contentStyle,y=n.title,S=n.subTitle,L=n.actions,G=n.children,V=n.containerStyle,W=n.otherStyle,m=(0,q.Z)(n,Ce),N=(0,k.YB)(),X=m.submitter===!1?!1:(0,h.Z)((0,h.Z)({searchConfig:{submitText:N.getMessage("loginForm.submitText","\u767B\u5F55")}},m.submitter),{},{submitButtonProps:(0,h.Z)({size:"large",style:{width:"100%"}},(r=m.submitter)===null||r===void 0?void 0:r.submitButtonProps),render:function(i,C){var ae,ye=C.pop();if(typeof(m==null||(ae=m.submitter)===null||ae===void 0?void 0:ae.render)=="function"){var ee,se;return m==null||(ee=m.submitter)===null||ee===void 0||(se=ee.render)===null||se===void 0?void 0:se.call(ee,i,C)}return ye}}),T=(0,g.useContext)(H.ZP.ConfigContext),ce=T.getPrefixCls("pro-form-login"),de=fe(ce),ue=de.wrapSSR,oe=de.hashId,U=function(i){return"".concat(ce,"-").concat(i," ").concat(oe)},re=(0,g.useMemo)(function(){return u?typeof u=="string"?(0,c.jsx)("img",{src:u}):u:null},[u]);return ue((0,c.jsxs)("div",{className:me()(U("container"),oe),style:V,children:[(0,c.jsxs)("div",{className:"".concat(U("top")," ").concat(oe).trim(),children:[y||re?(0,c.jsxs)("div",{className:"".concat(U("header")),children:[re?(0,c.jsx)("span",{className:U("logo"),children:re}):null,y?(0,c.jsx)("span",{className:U("title"),children:y}):null]}):null,S?(0,c.jsx)("div",{className:U("desc"),children:S}):null]}),(0,c.jsxs)("div",{className:U("main"),style:(0,h.Z)({width:328},E),children:[(0,c.jsxs)(ie.A,(0,h.Z)((0,h.Z)({isKeyPressSubmit:!0},m),{},{submitter:X,children:[p,G]})),L?(0,c.jsx)("div",{className:U("main-other"),style:W,children:L}):null]})]}))}var te=e(5966),he=e(63434),t=e(9361),o=e(92398),l=function(){var n=t.Z.useToken(),r=n.token,u=O.Z.useApp(),p=(0,s.useModel)("@@initialState"),E=p.initialState,y=p.loading,S=p.error,L=p.refresh,G=p.setInitialState;return(0,c.jsxs)("div",{children:[(0,c.jsx)(I,{}),(0,c.jsx)(k._Y,{hashed:!1,children:(0,c.jsx)("div",{style:{backgroundColor:r.colorBgContainer,height:"100vh",paddingTop:"200px"},children:(0,c.jsxs)(ge,{onFinish:function(){var V=D()(f()().mark(function W(m){var N;return f()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,K({username:m.username,password:m.password,autoLogin:m.autoLogin});case 2:if(N=T.sent,!N.data.accessToken){T.next=10;break}return localStorage.setItem("token",N.data.accessToken),L(),window.location.href="/dpanel/ui/home",T.abrupt("return");case 10:return T.abrupt("return",!1);case 11:case"end":return T.stop()}},W)}));return function(W){return V.apply(this,arguments)}}(),logo:"",title:"Docker Panel",subTitle:"Docker \u90E8\u7F72&\u7BA1\u7406\u53EF\u89C6\u5316\u9762\u677F",children:[(0,c.jsx)(o.Z,{centered:!0,items:[{key:"account",label:"\u8D26\u53F7\u5BC6\u7801\u767B\u5F55",children:[(0,c.jsx)(te.Z,{name:"username",fieldProps:{size:"large",prefix:(0,c.jsx)(x.Z,{className:"prefixIcon"})},placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"}]},"username"),(0,c.jsx)(te.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,c.jsx)(_,{className:"prefixIcon"})},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]},"password")]}]}),(0,c.jsx)("div",{style:{marginBlockEnd:24},children:(0,c.jsx)(he.Z,{noStyle:!0,name:"autoLogin",initialValue:!0,children:"\u4FDD\u6301\u767B\u5F55\u72B6\u6001"})})]})})})]})}},2831:function(le,z,e){e.d(z,{Ll:function(){return O},aF:function(){return w},d6:function(){return g}});var a=e(15009),f=e.n(a),A=e(99289),D=e.n(A),B=e(54006);function w(){return b.apply(this,arguments)}function b(){return b=D()(f()().mark(function M(){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,B.request)("/api/common/home/info",{method:"POST"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},M)})),b.apply(this,arguments)}function O(){return j.apply(this,arguments)}function j(){return j=D()(f()().mark(function M(){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,B.request)("/api/common/home/usage",{method:"POST"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},M)})),j.apply(this,arguments)}function g(){return c.apply(this,arguments)}function c(){return c=D()(f()().mark(function M(){return f()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,B.request)("/api/common/home/upgrade-script",{method:"POST"});case 2:return s.abrupt("return",s.sent);case 3:case"end":return s.stop()}},M)})),c.apply(this,arguments)}},40056:function(le,z,e){e.d(z,{Z:function(){return he}});var a=e(67294),f=e(89739),A=e(4340),D=e(97937),B=e(21640),w=e(78860),b=e(93967),O=e.n(b),j=e(29372),g=e(64217),c=e(42550),M=e(96159),I=e(53124),s=e(11568),K=e(14747),$=e(83559);const x=(t,o,l,n,r)=>({background:t,border:`${(0,s.bf)(n.lineWidth)} ${n.lineType} ${o}`,[`${r}-icon`]:{color:l}}),Q=t=>{const{componentCls:o,motionDurationSlow:l,marginXS:n,marginSM:r,fontSize:u,fontSizeLG:p,lineHeight:E,borderRadiusLG:y,motionEaseInOutCirc:S,withDescriptionIconSize:L,colorText:G,colorTextHeading:V,withDescriptionPadding:W,defaultPadding:m}=t;return{[o]:Object.assign(Object.assign({},(0,K.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:m,wordWrap:"break-word",borderRadius:y,[`&${o}-rtl`]:{direction:"rtl"},[`${o}-content`]:{flex:1,minWidth:0},[`${o}-icon`]:{marginInlineEnd:n,lineHeight:0},"&-description":{display:"none",fontSize:u,lineHeight:E},"&-message":{color:V},[`&${o}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${l} ${S}, opacity ${l} ${S},
        padding-top ${l} ${S}, padding-bottom ${l} ${S},
        margin-bottom ${l} ${S}`},[`&${o}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${o}-with-description`]:{alignItems:"flex-start",padding:W,[`${o}-icon`]:{marginInlineEnd:r,fontSize:L,lineHeight:0},[`${o}-message`]:{display:"block",marginBottom:n,color:V,fontSize:p},[`${o}-description`]:{display:"block",color:G}},[`${o}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},v=t=>{const{componentCls:o,colorSuccess:l,colorSuccessBorder:n,colorSuccessBg:r,colorWarning:u,colorWarningBorder:p,colorWarningBg:E,colorError:y,colorErrorBorder:S,colorErrorBg:L,colorInfo:G,colorInfoBorder:V,colorInfoBg:W}=t;return{[o]:{"&-success":x(r,n,l,t,o),"&-info":x(W,V,G,t,o),"&-warning":x(E,p,u,t,o),"&-error":Object.assign(Object.assign({},x(L,S,y,t,o)),{[`${o}-description > pre`]:{margin:0,padding:0}})}}},d=t=>{const{componentCls:o,iconCls:l,motionDurationMid:n,marginXS:r,fontSizeIcon:u,colorIcon:p,colorIconHover:E}=t;return{[o]:{"&-action":{marginInlineStart:r},[`${o}-close-icon`]:{marginInlineStart:r,padding:0,overflow:"hidden",fontSize:u,lineHeight:(0,s.bf)(u),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${l}-close`]:{color:p,transition:`color ${n}`,"&:hover":{color:E}}},"&-close-text":{color:p,transition:`color ${n}`,"&:hover":{color:E}}}}},F=t=>({withDescriptionIconSize:t.fontSizeHeading3,defaultPadding:`${t.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${t.paddingMD}px ${t.paddingContentHorizontalLG}px`});var R=(0,$.I$)("Alert",t=>[Q(t),v(t),d(t)],F),J=function(t,o){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&o.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)o.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(l[n[r]]=t[n[r]]);return l};const _={success:f.Z,info:w.Z,error:A.Z,warning:B.Z},k=t=>{const{icon:o,prefixCls:l,type:n}=t,r=_[n]||null;return o?(0,M.wm)(o,a.createElement("span",{className:`${l}-icon`},o),()=>({className:O()(`${l}-icon`,{[o.props.className]:o.props.className})})):a.createElement(r,{className:`${l}-icon`})},h=t=>{const{isClosable:o,prefixCls:l,closeIcon:n,handleClose:r,ariaProps:u}=t,p=n===!0||n===void 0?a.createElement(D.Z,null):n;return o?a.createElement("button",Object.assign({type:"button",onClick:r,className:`${l}-close-icon`,tabIndex:0},u),p):null};var H=a.forwardRef((t,o)=>{const{description:l,prefixCls:n,message:r,banner:u,className:p,rootClassName:E,style:y,onMouseEnter:S,onMouseLeave:L,onClick:G,afterClose:V,showIcon:W,closable:m,closeText:N,closeIcon:X,action:T,id:ce}=t,de=J(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action","id"]),[ue,oe]=a.useState(!1),U=a.useRef(null);a.useImperativeHandle(o,()=>({nativeElement:U.current}));const{getPrefixCls:re,direction:Pe,alert:i}=a.useContext(I.E_),C=re("alert",n),[ae,ye,ee]=R(C),se=Z=>{var Y;oe(!0),(Y=t.onClose)===null||Y===void 0||Y.call(t,Z)},Ee=a.useMemo(()=>t.type!==void 0?t.type:u?"warning":"info",[t.type,u]),Oe=a.useMemo(()=>typeof m=="object"&&m.closeIcon||N?!0:typeof m=="boolean"?m:X!==!1&&X!==null&&X!==void 0?!0:!!(i!=null&&i.closable),[N,X,m,i==null?void 0:i.closable]),xe=u&&W===void 0?!0:W,Ie=O()(C,`${C}-${Ee}`,{[`${C}-with-description`]:!!l,[`${C}-no-icon`]:!xe,[`${C}-banner`]:!!u,[`${C}-rtl`]:Pe==="rtl"},i==null?void 0:i.className,p,E,ee,ye),je=(0,g.Z)(de,{aria:!0,data:!0}),Me=a.useMemo(()=>{var Z,Y;return typeof m=="object"&&m.closeIcon?m.closeIcon:N||(X!==void 0?X:typeof(i==null?void 0:i.closable)=="object"&&(!((Z=i==null?void 0:i.closable)===null||Z===void 0)&&Z.closeIcon)?(Y=i==null?void 0:i.closable)===null||Y===void 0?void 0:Y.closeIcon:i==null?void 0:i.closeIcon)},[X,m,N,i==null?void 0:i.closeIcon]),Te=a.useMemo(()=>{const Z=m!=null?m:i==null?void 0:i.closable;if(typeof Z=="object"){const{closeIcon:Y}=Z;return J(Z,["closeIcon"])}return{}},[m,i==null?void 0:i.closable]);return ae(a.createElement(j.ZP,{visible:!ue,motionName:`${C}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:Z=>({maxHeight:Z.offsetHeight}),onLeaveEnd:V},(Z,Y)=>{let{className:Se,style:Ze}=Z;return a.createElement("div",Object.assign({id:ce,ref:(0,c.sQ)(U,Y),"data-show":!ue,className:O()(Ie,Se),style:Object.assign(Object.assign(Object.assign({},i==null?void 0:i.style),y),Ze),onMouseEnter:S,onMouseLeave:L,onClick:G,role:"alert"},je),xe?a.createElement(k,{description:l,icon:t.icon,prefixCls:C,type:Ee}):null,a.createElement("div",{className:`${C}-content`},r?a.createElement("div",{className:`${C}-message`},r):null,l?a.createElement("div",{className:`${C}-description`},l):null),T?a.createElement("div",{className:`${C}-action`},T):null,a.createElement(h,{isClosable:Oe,prefixCls:C,closeIcon:Me,handleClose:se,ariaProps:Te}))}))}),P=e(15671),me=e(43144),ie=e(61120),ne=e(78814),pe=e(82963);function ve(t,o,l){return o=(0,ie.Z)(o),(0,pe.Z)(t,(0,ne.Z)()?Reflect.construct(o,l||[],(0,ie.Z)(t).constructor):o.apply(t,l))}var fe=e(60136),ge=function(t){function o(){var l;return(0,P.Z)(this,o),l=ve(this,o,arguments),l.state={error:void 0,info:{componentStack:""}},l}return(0,fe.Z)(o,t),(0,me.Z)(o,[{key:"componentDidCatch",value:function(n,r){this.setState({error:n,info:r})}},{key:"render",value:function(){const{message:n,description:r,id:u,children:p}=this.props,{error:E,info:y}=this.state,S=(y==null?void 0:y.componentStack)||null,L=typeof n=="undefined"?(E||"").toString():n,G=typeof r=="undefined"?S:r;return E?a.createElement(H,{id:u,type:"error",message:L,description:a.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},G)}):p}}])}(a.Component);const te=H;te.ErrorBoundary=ge;var he=te}}]);
