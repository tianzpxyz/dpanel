"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7667],{99861:function(N,B,e){var R=e(15009),i=e.n(R),I=e(64599),p=e.n(I),g=e(99289),C=e.n(g),E=e(5574),L=e.n(E),_=e(42119),l=e(67294),O=e(92754),s=e(3393),y=e(184),t=e(38345),a=e(85893),h=(0,l.forwardRef)(function(u,D){(0,l.useImperativeHandle)(D,function(){return{start:function(){z(!0)}}});var o=(0,l.useState)(0),S=L()(o,2),T=S[0],A=S[1],j=(0,l.useRef)(),V=(0,l.useState)(!1),G=L()(V,2),k=G[0],z=G[1];return(0,a.jsxs)(y.a,{trigger:u.trigger,width:800,open:k,submitter:!1,title:"\u4E00\u952E\u62C9\u53D6\u955C\u50CF",onOpenChange:function(){var H=C()(i()().mark(function w(v){var f,c,n,F,K,$,J;return i()().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:if(z(v),!v){W.next=26;break}c=0,n=p()(u.image),W.prev=4,n.s();case 6:if((F=n.n()).done){W.next=16;break}return $=F.value,A(c),(K=j.current)===null||K===void 0||K.setStart($),W.next=12,(0,s.Gb)({tag:$,type:"pull"});case 12:J=W.sent,c++;case 14:W.next=6;break;case 16:W.next=21;break;case 18:W.prev=18,W.t0=W.catch(4),n.e(W.t0);case 21:return W.prev=21,n.f(),W.finish(21);case 24:(f=j.current)===null||f===void 0||f.setFinish(),A(c);case 26:case"end":return W.stop()}},w,null,[[4,18,21,24]])}));return function(w){return H.apply(this,arguments)}}(),children:[(0,a.jsx)(t.Z,{children:(0,a.jsx)(_.Z,{current:T,items:u.image.map(function(H,w){return{title:H,key:w}})})}),(0,a.jsx)(t.Z,{children:(0,a.jsx)(O.Z,{ref:j})})]})});B.Z=h},91058:function(N,B,e){var R=e(5574),i=e.n(R),I=e(89035),p=e(38345),g=e(17186),C=e(24739),E=e(5966),L=e(42075),_=e(14726),l=e(85576),O=e(67294),s=e(95089),y=e(89063),t=e(85893),a="docker-image",h=(0,O.forwardRef)(function(u,D){var o=(0,O.useState)(a),S=i()(o,2),T=S[0],A=S[1],j=(0,O.useRef)(),V=(0,O.useState)(""),G=i()(V,2),k=G[0],z=G[1],H=function(){T!="code"?A("code"):A(a)};(0,O.useImperativeHandle)(D,function(){return{addEnvItem:function(c,n){var F,K=(F=j.current)===null||F===void 0?void 0:F.getList(),$=!1;if(K==null||K.map(function(q){if(q.name==c){$=!0;return}}),!$){var J;(J=j.current)===null||J===void 0||J.add({name:c,value:n})}},clear:function(){var c;(c=j.current)===null||c===void 0||(c=c.getList())===null||c===void 0||c.map(function(n,F){var K;(K=j.current)===null||K===void 0||K.remove(F)})}}});function w(f){try{var c,n;f==""&&(f=v());for(var F=(c=(n=j.current)===null||n===void 0||(n=n.getList())===null||n===void 0?void 0:n.length)!==null&&c!==void 0?c:0,K=F;K>=0;K--){var $;($=j.current)===null||$===void 0||$.remove(K)}var J=f.split(`
`),q=0;J.map(function(W){var le,ie=W.split("=");ie.length<2||((le=j.current)===null||le===void 0||le.add({name:ie[0],value:ie.slice(1).join("=")},q),q++)})}catch(W){console.log(W)}}function v(){if(j&&j.current&&j.current.getList){var f,c=(f=j.current)===null||f===void 0?void 0:f.getList();if(c){var n=[];return c.map(function(F){n.push("".concat(F.name,"=").concat(F.value))}),n.join(`
`)}else return""}else return""}return(0,t.jsxs)(p.Z,{ghost:u.showCardGhost,title:"\u73AF\u5883\u53D8\u91CF",headerBordered:!0,extra:(0,t.jsxs)(L.Z,{children:[u.showImportButton&&(0,t.jsx)("div",{style:{marginBottom:"-25px"},children:(0,t.jsx)(y.Z,{title:"\u5BFC\u5165 env \u6587\u4EF6",onImport:function(c){return w(c),!0},onLoad:function(c){if(c.indexOf("=")<0)throw new Error("\u5BFC\u5165env\u6587\u4EF6\u9519\u8BEF");return!0}})}),(0,t.jsx)(_.ZP,{icon:(0,t.jsx)(I.Z,{}),type:T=="code"?"primary":"default",onClick:H,children:"\u4EE3\u7801\u6A21\u5F0F"},"code")]}),children:[(0,t.jsx)(g.u,{name:u.name?u.name:"environment",actionRef:j,creatorButtonProps:u.showAddButton?{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u73AF\u5883\u53D8\u91CF"}:!1,copyIconProps:!1,min:0,children:(0,t.jsxs)(C.UW,{children:[(0,t.jsx)(E.Z,{width:u.showInDrawer?"sm":"md",name:"name",label:"\u53D8\u91CF\u540D",required:!0,rules:[{required:!0}],disabled:u.showDisableName,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D\u79F0"}),(0,t.jsx)(E.Z,{width:u.showInDrawer?"sm":"md",name:"value",label:"\u53D8\u91CF\u503C",rules:[{required:!!u.requireValue}],placeholder:"\u8F93\u5165\u53D8\u91CF\u503C\uFF0C\u53EF\u4EE5\u4E3A\u7A7A"})]})}),(0,t.jsx)(l.Z,{width:"800px",open:T=="code",onCancel:function(){return A("docker-image")},onOk:function(){w(k),A("docker-image")},children:(0,t.jsx)(s.ZP,{onChange:function(c){return z(c)},value:v(),height:"680px",theme:"light"})})]})});B.Z=h},80821:function(N,B,e){e.d(B,{Z:function(){return _}});var R=e(5574),i=e.n(R),I=e(24963),p=e(86738),g=e(14726),C=e(83062),E=e(67294),L=e(85893);function _(l){var O=(0,E.useState)(!1),s=i()(O,2),y=s[0],t=s[1],a=(0,E.useContext)(I.Z),h=a.lang,u=a.notice,D=a.message,o=function(){t(!0),l.action().then(function(T){if(t(!1),typeof l.onSuccess=="function"&&l.onSuccess(T),l.messageSuccess){var A="";typeof l.messageSuccess=="function"?A=l.messageSuccess(T):A=l.messageSuccess,A.indexOf(".")>-1&&(A=h(A)),l.asynced?D.info(A):D.success(A)}}).catch(function(T){t(!1),typeof l.onError=="function"&&l.onError(T)})};return l.confirm?(0,L.jsx)(p.Z,{style:{width:500},title:l.confirmTitle?l.confirmTitle:h("notification.title.tip"),description:l.confirm,onConfirm:o,okText:"Yes",cancelText:"No",children:(0,L.jsx)(g.ZP,{disabled:l.disabled,icon:l.icon,loading:y,danger:l.danger,type:l.type,children:l.children})}):(0,L.jsx)(C.Z,{title:l.tips,children:(0,L.jsx)(g.ZP,{disabled:l.disabled,icon:l.icon,loading:y,onClick:o,danger:l.danger,type:l.type,children:l.children})})}},37413:function(N,B,e){e.d(B,{Z:function(){return y}});var R=e(19632),i=e.n(R),I=e(27496),p=e(35995),g=e(99611),C=e(29158),E=e(38345),L=e(55241),_=e(42075),l=e(66309),O=e(67294),s=e(85893);function y(t){return(0,s.jsx)(L.Z,{placement:"right",content:(0,s.jsxs)(E.Z,{direction:"column",style:{width:500},ghost:!0,children:[(0,s.jsx)(E.Z,{title:"\u7AEF\u53E3",children:[].concat(i()(t.publicPort),i()(t.privatePort)).map(function(a,h){var u=t.serverIp;return u!=""&&u.indexOf(":")>-1&&(u="[".concat(u,"]")),u==""&&a.IP=="::"&&(u="[::1]"),u==""&&a.IP=="0.0.0.0"&&(u="127.0.0.1"),u==""&&(u=a.IP),(0,s.jsx)(_.Z,{size:"large",wrap:!0,children:(0,s.jsx)(l.Z,{color:a.PublicPort?"#2db7f5":"warning",icon:a.PublicPort?(0,s.jsx)(I.Z,{}):"",style:{marginBottom:5,width:210},children:a.PublicPort?(0,s.jsx)("a",{href:"http://".concat(u,":").concat(a.PublicPort),target:"_blank",children:"".concat(a.PublicPort?a.IP+":"+a.PublicPort+" -> ":"").concat(a.PrivatePort,"/").concat(a.Type)},"link".concat(h)):"".concat(a.PrivatePort,"/").concat(a.Type)})},"space".concat(h))})}),t.domain.length>0&&(0,s.jsx)(E.Z,{title:"\u57DF\u540D",children:(0,s.jsx)(_.Z,{direction:"vertical",style:{textAlign:"left"},children:t.domain.map(function(a,h){return(0,s.jsx)(l.Z,{color:"blue",icon:(0,s.jsx)(I.Z,{}),children:(0,s.jsx)("a",{href:a,target:"_blank",children:a})},"domain".concat(h))})})})]}),children:(0,s.jsxs)(_.Z,{direction:"vertical",children:[t.privatePort.length>0&&(0,s.jsxs)(l.Z,{color:"warning",icon:(0,s.jsx)(p.Z,{}),children:["\u5185\u90E8\u7AEF\u53E3: ",t.privatePort.length]}),t.publicPort.length>0&&(0,s.jsxs)(l.Z,{color:"#2db7f5",icon:(0,s.jsx)(g.Z,{}),children:["\u5BF9\u5916\u7AEF\u53E3: ",t.publicPort.length]}),t.domain.length>0&&(0,s.jsxs)(l.Z,{color:"blue",icon:(0,s.jsx)(C.Z,{}),children:["\u7ED1\u5B9A\u57DF\u540D: ",t.domain.length]})]})})}},94359:function(N,B,e){e.d(B,{Z:function(){return y}});var R=e(67294),i=e(3089),I=e(98165),p=e(18429),g=e(8751),C=e(14313),E=e(30159),L=e(87740),_=e(66309),l=e(83062),O=e(54006),s=e(85893);function y(t){var a=(0,s.jsx)(s.Fragment,{});if(t.status=="0"&&(a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(i.Z,{}),color:"default",children:"waiting"})),t.status=="10"&&(a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(I.Z,{spin:!0}),color:"processing",children:"processing"})),t.status=="20"&&(a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(p.Z,{}),color:"error",children:"error"})),t.status=="30"&&(a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(g.Z,{}),color:"success",children:"success"})),t.status=="running"){var h,u;a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(C.Z,{}),color:"success",children:(h=t.message)!==null&&h!==void 0&&h.showInTag?(u=t.message)===null||u===void 0?void 0:u.content:t.status})}if(t.status=="paused"){var D,o;a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(E.Z,{}),children:(D=t.message)!==null&&D!==void 0&&D.showInTag?(o=t.message)===null||o===void 0?void 0:o.content:t.status})}if(t.status=="waiting"){var S,T;a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(L.Z,{}),children:(S=t.message)!==null&&S!==void 0&&S.showInTag?(T=t.message)===null||T===void 0?void 0:T.content:t.status})}if(t.status=="exited"||t.status=="dead"||t.status=="removing"||t.status=="restarting"||t.status=="created"){var A,j;a=(0,s.jsx)(_.Z,{icon:(0,s.jsx)(p.Z,{}),color:"warning",children:(A=t.message)!==null&&A!==void 0&&A.showInTag?(j=t.message)===null||j===void 0?void 0:j.content:t.status})}return t.link&&(a=(0,s.jsx)(O.Link,{to:t.link,children:a})),t.message&&(a=(0,s.jsx)(l.Z,{placement:t.message.placement,title:t.message.content,children:a})),(0,s.jsx)(s.Fragment,{children:a})}},89063:function(N,B,e){e.d(B,{Z:function(){return L}});var R=e(24963),i=e(88484),I=e(31418),p=e(72723),g=e(14726),C=e(67294),E=e(85893);function L(_){var l=(0,C.useContext)(R.Z),O=l.message,s=l.notice,y=l.lang,t=(0,C.useRef)(null),a=I.Z.useApp(),h=function(){t.current&&(t.current.click(),t.current.onchange=function(D){if(!D||!D.target)return"";var o=new FileReader;o.onload=function(T){var A,j,V=(A=T.target)===null||A===void 0?void 0:A.result;if(_.onLoad)try{_.onLoad&&_.onLoad(V)}catch(G){s.error(G);return}typeof _.onImport=="function"&&_.onImport(V),(j=t.current)!==null&&j!==void 0&&j.value&&(t.current.value="")};var S=D.target;if(S.files)try{o.readAsText(S.files[0])}catch(T){s.error("\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(p.Z.Item,{name:"importFile",label:_.label,children:(0,E.jsx)(g.ZP,{icon:(0,E.jsx)(i.Z,{}),block:!0,onClick:h,children:_.title})}),(0,E.jsx)("input",{style:{display:"none"},type:"file",ref:t,name:"importFileInput"})]})}},92754:function(N,B,e){var R=e(5574),i=e.n(R),I=e(67294),p=e(54006),g=e(38703),C=e(85893),E=(0,I.forwardRef)(function(L,_){var l=(0,I.useState)(""),O=i()(l,2),s=O[0],y=O[1];(0,I.useImperativeHandle)(_,function(){return{setFinish:function(){D({finish:{downloading:100,extracting:100}})},setStart:function(S){S&&y(S),D({start:{downloading:0,extracting:0}})}}});var t=(0,p.useModel)("subscriber");t.addDataHandler("image:pull:"+s,function(o){D(o.data)});var a=(0,I.useState)(),h=i()(a,2),u=h[0],D=h[1];return(0,I.useEffect)(function(){D({start:{downloading:0,extracting:0}})},[]),(0,C.jsx)(C.Fragment,{children:u&&Object.keys(u).map(function(o){return(0,C.jsx)(g.Z,{percent:u[o].downloading,success:{percent:u[o].extracting}},o)})})});B.Z=E},54964:function(N,B,e){e.d(B,{a:function(){return l}});var R=e(78267),i=e.n(R),I=e(75458),p=e.n(I),g=e(67294),C=e(12320),E=e.n(C),L=e(89629),_=e(85893),l={convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}},O=new C.Terminal(l),s=new I.SearchAddon,y=new R.FitAddon,t=(0,g.forwardRef)(function(a,h){return(0,g.useEffect)(function(){window.addEventListener("resize",function(){a.showInModal||y.fit()}),a.style&&a.style.fontSize&&(O.options.fontSize=a.style.fontSize),O.loadAddon(y),O.loadAddon(s),O.open(document.getElementById("terminal-container")),y.fit()},[]),(0,g.useImperativeHandle)(h,function(){return{write:function(D){O.write(D)},clear:function(){O.clear()},getTerminal:function(){return O},findNext:function(D){s.findNext(D)},findPrev:function(D){s.findPrevious(D)},fit:function(){y.fit()},onData:function(D){O.onData(D)}}}),(0,_.jsx)("div",{id:"terminal-container",style:{width:a.width?a.width:"100%",height:a.height?a.height:"500px"}})});B.Z=t},24963:function(N,B,e){var R=e(67294),i=(0,R.createContext)({});B.Z=i},9740:function(N,B,e){e.r(B),e.d(B,{default:function(){return Be}});var R=e(15009),i=e.n(R),I=e(99289),p=e.n(I),g=e(5574),C=e.n(g),E=e(80821),L=e(54964),_=e(90098),l=e(43425),O=e(74842),s=e(33160),y=e(87784),t=e(30159),a=e(48689),h=e(86548),u=e(89035),D=e(45742),o=e(38345),S=e(97269),T=e(54006),A=e(72269),j=e(42075),V=e(96074),G=e(14726),k=e(60922),z=e(84567),H=e(40056),w=e(63490),v=e(83062),f=e(92398),c=e(67294),n=e(99861),F=e(1272),K=e(95089),$=e(95213),J=e(24963),q=e(91058),W=e(12320),le=e(89629),ie=e(78267),r=e(85893),de=new W.Terminal(L.a),ce=new ie.FitAddon;function Te(ee){var re=(0,T.useModel)("subscriber");return re.addDataHandler("compose:log:"+ee.id,function(ue){de.write(ue.data)}),(0,c.useEffect)(function(){return window.addEventListener("resize",function(){ce.fit()}),de.options.fontSize=12,de.loadAddon(ce),de.open(document.getElementById("terminal-log")),ce.fit(),function(){re.progress.close("compose:log:"+ee.id)}},[ee.id]),(0,r.jsx)("div",{id:"terminal-log",style:{width:"100%",height:"500px"}})}var ye=e(37413),Ie=e(87662),Ae=e(94359);function Be(){var ee,re,ue,me=(0,c.useContext)(J.Z),fe=me.loading,Le=me.lang,oe=(0,T.useParams)(),Re=(0,T.useNavigate)(),Ue=(0,c.useState)(),ve=C()(Ue,2),d=ve[0],Ze=ve[1],We=(0,c.useState)({deleteVolume:!1,deleteImage:!1,deleteData:!1}),he=C()(We,2),se=he[0],Ee=he[1],Q=(0,c.useRef)(),Se=(0,c.useState)(0),ge=C()(Se,2),X=ge[0],ne=ge[1],Ke=(0,c.useState)("default"),Pe=C()(Ke,2),Fe=Pe[0],te=Pe[1],ae=(0,c.useRef)(),pe=(0,T.useModel)("subscriber"),be=(0,c.useState)([]),De=C()(be,2),Ge=De[0],we=De[1],Ve=(0,c.useState)(""),Oe=C()(Ve,2),$e=Oe[0],Ne=Oe[1],ze=(0,c.useState)("default"),je=C()(ze,2),Ce=je[0],Me=je[1];return pe.addDataHandler("compose:"+oe.id,function(M){var m;(m=Q.current)===null||m===void 0||m.write(M.data)}),(0,c.useEffect)(function(){var M;return fe.show(),(0,_.Pn)({id:parseInt((M=oe.id)!==null&&M!==void 0?M:"")}).then(function(m){var P,x=m.data.detail;if(x.setting.status&&x.setting.status.indexOf("running")>-1&&(x.isRunning=!0),x.setting.status&&x.setting.status.indexOf("paused")>-1&&(x.isPaused=!0),x.setting.status&&x.setting.status.indexOf("exited")>-1&&(x.isExited=!0),x.setting.status&&x.setting.status=="waiting"?x.isDeploy=!1:x.isDeploy=!0,x.yaml){var Y=F.ZP.load(x.yaml);x.imageList=Object.keys(Y.services).map(function(Z){var b;return(b=Y.services[Z].image)!==null&&b!==void 0?b:""})}Ze(x),m.data.containerList&&((0,Ie.pe)({groupName:"setting",name:"server"}).then(function(Z){Z.data.setting.value.serverIp&&Ne(Z.data.setting.value.serverIp)}),we(m.data.containerList));var U=m.data.project;U!=null&&U.services&&Object.keys(U.services).map(function(Z){var b=[];if(U.services&&U.services[Z]&&(U.services[Z].environment&&Object.keys(U.services[Z].environment).map(function(xe){U.services[Z].environment&&b.push({name:xe,value:U.services[Z].environment[xe]})}),b.length!=0)){var _e;(_e=ae.current)===null||_e===void 0||_e.setFieldValue(["environment",Z],b)}}),(0,_.VN)({id:parseInt((P=oe.id)!==null&&P!==void 0?P:"")})}).catch(function(){Re("/compose/list")}).finally(function(){fe.destroy()}),function(){pe.progress.close("compose:log:"+oe.id)}},[X]),(0,r.jsxs)(o.Z,{direction:"column",ghost:!0,gutter:[10,10],children:[(0,r.jsx)(o.Z,{title:(0,r.jsx)(l.Z,{}),subTitle:"\u64CD\u4F5C - "+(d==null?void 0:d.name),bordered:!0,extra:(0,r.jsx)(r.Fragment,{children:d&&d.imageList&&d.imageList.length>0&&(0,r.jsx)(n.Z,{image:d.imageList,trigger:(0,r.jsx)(A.Z,{checkedChildren:"\u4F7F\u7528\u9762\u677F\u62C9\u53D6\u955C\u50CF",unCheckedChildren:"\u4F7F\u7528\u7CFB\u7EDF\u62C9\u53D6\u955C\u50CF",value:Ce!="default",onChange:function(m){Me(m?"dpanel":"default")}})})}),headerBordered:!0,children:d!=null&&d.yaml?(0,r.jsxs)(j.Z,{wrap:!0,children:[(0,r.jsx)(E.Z,{icon:(0,r.jsx)(O.Z,{}),type:"primary",action:p()(i()().mark(function M(){var m,P,x,Y,U;return i()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:if(te("deploy"),(m=Q.current)===null||m===void 0||m.clear(),Y={id:(P=d==null?void 0:d.id)!==null&&P!==void 0?P:0},Y.environment=(x=ae.current)===null||x===void 0?void 0:x.getFieldValue("environment"),!(d!=null&&d.isDeploy)){b.next=8;break}if(Ce!="default"){b.next=8;break}return b.next=8,(0,_.GG)({id:(U=d==null?void 0:d.id)!==null&&U!==void 0?U:0,op:"pull"});case 8:return b.next=10,(0,_.Oh)(Y);case 10:ne(X+1);case 11:case"end":return b.stop()}},M)})),children:d.isDeploy?"\u66F4\u65B0":"\u542F\u52A8"},"create"),d.isDeploy&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.Z,{icon:(0,r.jsx)(s.Z,{}),action:p()(i()().mark(function M(){var m;return i()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return te("crtl"),x.next=3,(0,_.GG)({id:(m=d==null?void 0:d.id)!==null&&m!==void 0?m:0,op:"restart"});case 3:ne(X+1);case 4:case"end":return x.stop()}},M)})),children:"\u91CD\u542F"},"restart"),(0,r.jsx)(E.Z,{action:function(){var m,P;return(m=Q.current)===null||m===void 0||m.clear(),te("crtl"),(0,_.GG)({id:(P=d==null?void 0:d.id)!==null&&P!==void 0?P:0,op:"stop"})},messageSuccess:"\u505C\u6B62\u6210\u529F",icon:(0,r.jsx)(y.Z,{}),disabled:d.isExited,onSuccess:function(){ne(X+1)},children:"\u505C\u6B62"}),d.isPaused&&(0,r.jsx)(E.Z,{action:function(){var m,P;return te("crtl"),(m=Q.current)===null||m===void 0||m.clear(),(0,_.GG)({id:(P=d==null?void 0:d.id)!==null&&P!==void 0?P:0,op:"unpause"})},messageSuccess:"\u6062\u590D\u6210\u529F",onSuccess:function(){ne(X+1)},icon:(0,r.jsx)(O.Z,{}),children:"\u6062\u590D"}),!d.isPaused&&(0,r.jsx)(E.Z,{action:function(){var m,P;return te("crtl"),(m=Q.current)===null||m===void 0||m.clear(),(0,_.GG)({id:(P=d==null?void 0:d.id)!==null&&P!==void 0?P:0,op:"pause"})},onSuccess:function(){ne(X+1)},messageSuccess:"\u6682\u505C\u6210\u529F",icon:(0,r.jsx)(t.Z,{}),disabled:!d.isRunning,children:"\u6682\u505C"}),(0,r.jsx)(E.Z,{action:function(){var m,P;return(m=Q.current)===null||m===void 0||m.clear(),te("destory"),(0,_.mg)({id:(P=d==null?void 0:d.id)!==null&&P!==void 0?P:0,deleteImage:!1,deleteData:!1,deleteVolume:!1})},onSuccess:function(){ne(X+1)},confirm:"\u662F\u5426\u8981\u9500\u6BC1\u5BB9\u5668\uFF1F",type:"primary",danger:!0,messageSuccess:"\u9500\u6BC1\u6210\u529F",icon:(0,r.jsx)(a.Z,{}),children:"\u9500\u6BC1"}),(0,r.jsx)(V.Z,{type:"vertical"})]}),(0,r.jsx)(V.Z,{type:"vertical"}),d.id>0&&(0,r.jsx)(T.Link,{to:"/compose/create?id="+d.id,children:(0,r.jsx)(G.ZP,{icon:(0,r.jsx)(h.Z,{}),children:"\u7F16\u8F91\u4EFB\u52A1"})}),d.isDeploy&&(0,r.jsx)(E.Z,{type:"primary",action:p()(i()().mark(function M(){var m,P,x;return i()().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return(m=Q.current)===null||m===void 0||m.clear(),te("destory"),U.next=4,(0,_.mg)({id:(P=d==null?void 0:d.id)!==null&&P!==void 0?P:0,deleteImage:se.deleteImage,deleteData:!0,deleteVolume:se.deleteVolume});case 4:x=U.sent;case 5:case"end":return U.stop()}},M)})),danger:!0,confirm:(0,r.jsxs)(j.Z,{style:{width:280},direction:"vertical",children:[(0,r.jsx)(k.Z.Text,{children:"\u5220\u9664\u5BB9\u5668\u540E\u65E0\u6CD5\u6062\u590D,\u786E\u8BA4\u5417\uFF1F"}),(0,r.jsx)(z.Z,{name:"deleteImage",onChange:function(m){return Ee({deleteImage:m.target.checked,deleteData:se.deleteData,deleteVolume:se.deleteVolume})},children:"\u5220\u9664\u955C\u50CF\uFF1F"}),(0,r.jsx)(z.Z,{name:"deleteVolume",onChange:function(m){return Ee({deleteData:se.deleteImage,deleteImage:se.deleteImage,deleteVolume:m.target.checked})},children:"\u5220\u9664\u5B58\u50A8\u5377\uFF1F"})]}),children:"\u5220\u9664\u4EFB\u52A1"})]}):(0,r.jsx)(H.Z,{showIcon:!0,type:"info",message:(0,r.jsxs)(r.Fragment,{children:["\u65E0\u6CD5\u83B7\u53D6\u8BE5\u4EFB\u52A1\u7684 compose.yaml \u6587\u4EF6\uFF0C\u65E0\u7BA1\u7406\u6743\u9650\u3002",(0,r.jsx)("a",{target:"_blank",href:"https://dpanel.cc/#/zh-cn/manual/compose/external",children:"\u5982\u4F55\u7BA1\u7406\u5916\u90E8\u4EFB\u52A1\uFF1F"})]})})},"operator"),(0,r.jsxs)(o.Z,{split:"vertical",children:[(0,r.jsxs)(o.Z,{colSpan:"45%",direction:"column",split:"horizontal",style:{padding:10},children:[Fe!="default"&&(0,r.jsx)(o.Z,{title:(0,r.jsx)(u.Z,{}),subTitle:"\u63A7\u5236\u53F0",extra:(0,r.jsx)(j.Z,{children:(0,r.jsx)(E.Z,{action:function(){var m;return(m=Q.current)===null||m===void 0||m.clear(),(0,_.U_)({})},icon:(0,r.jsx)(a.Z,{}),danger:!0,onSuccess:function(){ne(X+1)},children:"\u4E2D\u6B62\u6267\u884C"},"kill")}),children:(0,r.jsx)(L.Z,{width:"100%",height:"300px",showInModal:!0,style:{fontSize:12},ref:Q})}),d&&(0,r.jsx)(o.Z,{children:(0,r.jsx)(w.Z,{rowKey:"name",pagination:!1,columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u7AEF\u53E3",render:function(m,P,x){var Y=[],U=[];return P.publishers&&P.publishers.map(function(Z){Z.publishedPort?Y.push({PrivatePort:Z.targetPort,Type:Z.protocol,IP:Z.url,PublicPort:Z.publishedPort}):Z.publishedPort&&U.push({PrivatePort:Z.targetPort,Type:Z.protocol,IP:Z.url,PublicPort:Z.publishedPort})}),(0,r.jsx)(ye.Z,{publicPort:Y,privatePort:U,domain:[],serverIp:$e})}},{title:"\u72B6\u6001",render:function(m,P,x){return(0,r.jsx)(Ae.Z,{status:P.state,message:{content:Le("container.".concat(P.state)),placement:"top",showInTag:!0}},P.name)}},{title:"\u64CD\u4F5C",render:function(m,P,x){return(0,r.jsxs)(j.Z,{split:(0,r.jsx)(V.Z,{type:"vertical"}),children:[(0,r.jsx)(T.Link,{to:"/app/detail/edit/"+P.name,children:(0,r.jsx)(v.Z,{title:"\u7BA1\u7406\u5BB9\u5668",children:(0,r.jsx)(l.Z,{})})},"edit"),P.state=="running"&&(0,r.jsx)(T.Link,{target:"_blank",to:"/console/"+P.name,children:(0,r.jsx)(v.Z,{title:"\u7EC8\u7AEF",children:(0,r.jsx)(u.Z,{})})},"console")]})}}],dataSource:Ge})}),(0,r.jsx)(o.Z,{style:{margin:"10px 10px"},children:(0,r.jsx)(S.A,{formRef:ae,submitter:!1,children:!(d!=null&&d.isDeploy)&&(0,r.jsx)(f.Z,{indicator:{align:"center"},items:ae&&ae.current&&((ee=ae.current)===null||ee===void 0?void 0:ee.getFieldValue("environment"))&&Object.keys((re=ae.current)===null||re===void 0?void 0:re.getFieldValue("environment")).map(function(M){return{label:M,key:M,children:(0,r.jsx)(q.Z,{showCardGhost:!0,name:["environment",M],showDisableName:!0,showInDrawer:!0,requireValue:!0})}})})})})]}),d&&!d.isDeploy&&(0,r.jsx)(o.Z,{title:(0,r.jsx)(D.Z,{}),subTitle:"Yaml",colSpan:"55%",children:(0,r.jsx)(K.ZP,{theme:"dark",minHeight:"550px",value:d.yaml,extensions:[$.RI.yaml()]})}),d&&d.isDeploy&&(0,r.jsx)(o.Z,{title:(0,r.jsx)(D.Z,{}),subTitle:"\u65E5\u5FD7",colSpan:"55%",children:(0,r.jsx)(Te,{id:(ue=oe.id)!==null&&ue!==void 0?ue:""})})]})]})}},90098:function(N,B,e){e.d(B,{CT:function(){return s},GG:function(){return S},MG:function(){return k},Oh:function(){return h},Pn:function(){return l},U_:function(){return V},VN:function(){return A},ik:function(){return t},im:function(){return C},mg:function(){return D},pm:function(){return L},xC:function(){return H}});var R=e(15009),i=e.n(R),I=e(99289),p=e.n(I),g=e(54006);function C(v){return E.apply(this,arguments)}function E(){return E=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/create",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),E.apply(this,arguments)}function L(v){return _.apply(this,arguments)}function _(){return _=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/get-list",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),_.apply(this,arguments)}function l(v){return O.apply(this,arguments)}function O(){return O=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/get-task",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),O.apply(this,arguments)}function s(v){return y.apply(this,arguments)}function y(){return y=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/get-detail",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),y.apply(this,arguments)}function t(v){return a.apply(this,arguments)}function a(){return a=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/delete",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),a.apply(this,arguments)}function h(v){return u.apply(this,arguments)}function u(){return u=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/container-deploy",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),u.apply(this,arguments)}function D(v){return o.apply(this,arguments)}function o(){return o=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/container-destroy",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),o.apply(this,arguments)}function S(v){return T.apply(this,arguments)}function T(){return T=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/container-ctrl",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),T.apply(this,arguments)}function A(v){return j.apply(this,arguments)}function j(){return j=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/container-log",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),j.apply(this,arguments)}function V(v){return G.apply(this,arguments)}function G(){return G=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/container-process-kill",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),G.apply(this,arguments)}function k(v){return z.apply(this,arguments)}function z(){return z=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/get-from-uri",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),z.apply(this,arguments)}function H(v){return w.apply(this,arguments)}function w(){return w=p()(i()().mark(function v(f){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,g.request)("/api/app/compose/parse",{method:"POST",data:f}));case 1:case"end":return n.stop()}},v)})),w.apply(this,arguments)}},3393:function(N,B,e){e.d(B,{Gb:function(){return L},Pn:function(){return s},Rb:function(){return t},YU:function(){return C},_U:function(){return l}});var R=e(15009),i=e.n(R),I=e(99289),p=e.n(I),g=e(54006);function C(h){return E.apply(this,arguments)}function E(){return E=p()(i()().mark(function h(u){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,g.request)("/api/app/image/get-detail",{method:"POST",data:u}));case 1:case"end":return o.stop()}},h)})),E.apply(this,arguments)}function L(h){return _.apply(this,arguments)}function _(){return _=p()(i()().mark(function h(u){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,g.request)("/api/app/image/tag-remote",{method:"POST",data:u}));case 1:case"end":return o.stop()}},h)})),_.apply(this,arguments)}function l(h){return O.apply(this,arguments)}function O(){return O=p()(i()().mark(function h(u){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,g.request)("/api/app/image/tag-add",{method:"POST",data:u}));case 1:case"end":return o.stop()}},h)})),O.apply(this,arguments)}function s(h){return y.apply(this,arguments)}function y(){return y=p()(i()().mark(function h(u){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,g.request)("/api/app/image/tag-delete",{method:"POST",data:u}));case 1:case"end":return o.stop()}},h)})),y.apply(this,arguments)}function t(h){return a.apply(this,arguments)}function a(){return a=p()(i()().mark(function h(u){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",(0,g.request)("/api/app/image/export",{method:"POST",data:u,responseType:"blob"}));case 1:case"end":return o.stop()}},h)})),a.apply(this,arguments)}}}]);
