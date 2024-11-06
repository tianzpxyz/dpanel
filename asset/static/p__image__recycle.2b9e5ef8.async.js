"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4202],{45742:function(K,D,e){e.d(D,{Z:function(){return P}});var I=e(87462),i=e(67294),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0zm0 144a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"profile",theme:"outlined"},_=E,c=e(84089),v=function(a,C){return i.createElement(c.Z,(0,I.Z)({},a,{ref:C,icon:_}))},R=i.forwardRef(v),P=R},80821:function(K,D,e){e.d(D,{Z:function(){return h}});var I=e(5574),i=e.n(I),E=e(24963),_=e(86738),c=e(14726),v=e(83062),R=e(67294),P=e(85893);function h(a){var C=(0,R.useState)(!1),u=i()(C,2),A=u[0],t=u[1],l=(0,R.useContext)(E.Z),T=l.lang,O=l.notice,W=l.message,x=function(){t(!0),a.action().then(function(g){if(t(!1),typeof a.onSuccess=="function"&&a.onSuccess(g),a.messageSuccess){var f="";typeof a.messageSuccess=="function"?f=a.messageSuccess(g):f=a.messageSuccess,f.indexOf(".")>-1&&(f=T(f)),a.asynced?W.info(f):W.success(f)}}).catch(function(g){t(!1),typeof a.onError=="function"&&a.onError(g)})};return a.confirm?(0,P.jsx)(_.Z,{style:{width:500},title:a.confirmTitle?a.confirmTitle:T("notification.title.tip"),description:a.confirm,onConfirm:x,okText:"Yes",cancelText:"No",children:(0,P.jsx)(c.ZP,{disabled:a.disabled,icon:a.icon,loading:A,danger:a.danger,type:a.type,children:a.children})}):(0,P.jsx)(v.Z,{title:a.tips,children:(0,P.jsx)(c.ZP,{disabled:a.disabled,icon:a.icon,loading:A,onClick:x,danger:a.danger,type:a.type,children:a.children})})}},94359:function(K,D,e){e.d(D,{Z:function(){return A}});var I=e(67294),i=e(3089),E=e(98165),_=e(18429),c=e(8751),v=e(14313),R=e(30159),P=e(87740),h=e(66309),a=e(83062),C=e(54006),u=e(85893);function A(t){var l=(0,u.jsx)(u.Fragment,{});if(t.status=="0"&&(l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(i.Z,{}),color:"default",children:"waiting"})),t.status=="10"&&(l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(E.Z,{spin:!0}),color:"processing",children:"processing"})),t.status=="20"&&(l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(_.Z,{}),color:"error",children:"error"})),t.status=="30"&&(l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(c.Z,{}),color:"success",children:"success"})),t.status=="running"){var T,O;l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(v.Z,{}),color:"success",children:(T=t.message)!==null&&T!==void 0&&T.showInTag?(O=t.message)===null||O===void 0?void 0:O.content:t.status})}if(t.status=="paused"){var W,x;l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(R.Z,{}),children:(W=t.message)!==null&&W!==void 0&&W.showInTag?(x=t.message)===null||x===void 0?void 0:x.content:t.status})}if(t.status=="waiting"){var U,g;l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(P.Z,{}),children:(U=t.message)!==null&&U!==void 0&&U.showInTag?(g=t.message)===null||g===void 0?void 0:g.content:t.status})}if(t.status=="exited"||t.status=="dead"||t.status=="removing"||t.status=="restarting"||t.status=="created"){var f,m;l=(0,u.jsx)(h.Z,{icon:(0,u.jsx)(_.Z,{}),color:"warning",children:(f=t.message)!==null&&f!==void 0&&f.showInTag?(m=t.message)===null||m===void 0?void 0:m.content:t.status})}return t.link&&(l=(0,u.jsx)(C.Link,{to:t.link,children:l})),t.message&&(l=(0,u.jsx)(a.Z,{placement:t.message.placement,title:t.message.content,children:l})),(0,u.jsx)(u.Fragment,{children:l})}},74344:function(K,D,e){var I=e(5574),i=e.n(I),E=e(37476),_=e(38345),c=e(54006),v=e(67294),R=e(54964),P=e(85893),h=(0,v.forwardRef)(function(a,C){(0,v.useImperativeHandle)(C,function(){return{start:function(){for(var m=arguments.length,r=new Array(m),j=0;j<m;j++)r[j]=arguments[j];x(r.join(":")),l(!0)},reset:function(){var m;(m=g.current)===null||m===void 0||m.clear()},show:function(m){var r,j;(r=g.current)===null||r===void 0||r.clear(),(j=g.current)===null||j===void 0||j.write(m),l(!0)}}});var u=(0,v.useState)(!1),A=i()(u,2),t=A[0],l=A[1],T=(0,v.useState)(""),O=i()(T,2),W=O[0],x=O[1],U=(0,c.useModel)("subscriber"),g=(0,v.useRef)();return U.addDataHandler("image:"+W,function(f){var m;(m=g.current)===null||m===void 0||m.write(f.data)}),(0,v.useEffect)(function(){var f;(f=g.current)===null||f===void 0||f.fit()},[]),(0,P.jsx)(E.Y,{modalProps:{forceRender:!0},title:"\u6784\u5EFA\u65E5\u5FD7",submitter:!1,width:1e3,onOpenChange:function(m){if(l(m),m){var r,j;(r=g.current)===null||r===void 0||r.clear(),(j=g.current)===null||j===void 0||j.fit()}},open:t,children:(0,P.jsx)(_.Z,{ghost:!0,children:(0,P.jsx)(R.Z,{showInModal:!0,width:"960px",height:"500px",ref:g})})})});D.Z=h},78451:function(K,D,e){e.d(D,{Z:function(){return E}});var I=e(67294),i=e(85893);function E(_){return(0,i.jsx)("span",{style:{wordBreak:"break-word"},children:_.content})}},54964:function(K,D,e){var I=e(78267),i=e.n(I),E=e(75458),_=e.n(E),c=e(67294),v=e(12320),R=e.n(v),P=e(89629),h=e(85893),a=new v.Terminal({convertEol:!0,fontFamily:'Menlo, Monaco, "Courier New", monospace',fontWeight:400,fontSize:16,cursorStyle:"block",cursorBlink:!0,theme:{foreground:"#bfbfbf",cursor:"gray",selectionForeground:"#ffffff"}}),C=new E.SearchAddon,u=new I.FitAddon,A=(0,c.forwardRef)(function(t,l){return(0,c.useEffect)(function(){window.addEventListener("resize",function(){t.showInModal||u.fit()}),a.loadAddon(u),a.loadAddon(C),a.open(document.getElementById("terminal-container")),u.fit()},[]),(0,c.useImperativeHandle)(l,function(){return{write:function(O){a.write(O)},clear:function(){a.clear()},getTerminal:function(){return a},findNext:function(O){C.findNext(O)},findPrev:function(O){C.findPrevious(O)},fit:function(){u.fit()},onData:function(O){a.onData(O)}}}),(0,h.jsx)("div",{id:"terminal-container",style:{width:t.width?t.width:"100%",height:t.height?t.height:"500px"}})});D.Z=A},24963:function(K,D,e){var I=e(67294),i=(0,I.createContext)({});D.Z=i},52548:function(K,D,e){e.r(D),e.d(D,{default:function(){return j}});var I=e(15009),i=e.n(I),E=e(99289),_=e.n(E),c=e(90078),v=e(10641),R=e(14726),P=e(42075),h=e(83062),a=e(66309),C=e(96074),u=e(60922),A=e(50136),t=e(54006),l=e(18148),T=e(94359),O=e(43425),W=e(45742),x=e(80821),U=e(67294),g=e(67255),f=e(78451),m=e(74344),r=e(85893);function j(){var s=(0,U.useRef)(),M=(0,U.useRef)();return(0,r.jsxs)(c._z,{header:{extra:[(0,r.jsx)(R.ZP,{type:"primary",children:(0,r.jsx)(t.Link,{to:"/image/create",children:"\u521B\u5EFA\u955C\u50CF"})},"create"),(0,r.jsx)(R.ZP,{children:"\u62C9\u53D6\u955C\u50CF"},"pull")]},children:[(0,r.jsx)(v.Z,{scroll:{x:"max-content"},actionRef:s,rowKey:"id",columns:[{title:"\u540D\u79F0",render:function(n,d,y,B){return(0,r.jsx)(P.Z,{direction:"vertical",style:{textAlign:"left"},children:d.imageInfo&&d.imageInfo.info.Id?(0,r.jsx)(t.Link,{to:"/image/detail/".concat(d.imageInfo.info.Id),children:(0,r.jsxs)(h.Z,{title:"\u67E5\u770B\u955C\u50CF",children:[" ",d.title]})},"detail"):d.title},d.id)}},{title:"\u6700\u65B0Tag",dataIndex:"tag",search:!1,render:function(n,d,y,B){return d.imageInfo?d.imageInfo.info.Id==""?(0,r.jsx)(a.Z,{children:"none"},"none"):(0,r.jsx)(P.Z,{direction:"vertical",style:{textAlign:"left"},children:d.imageInfo.info.RepoTags.map(function(L,Z){return(0,r.jsx)(a.Z,{color:"#2db7f5",children:L},Z)})},d.id):(0,r.jsx)(a.Z,{color:"#2db7f5",children:d.tag},d.id)}},{title:"\u955C\u50CFId",search:!1,copyable:!0,width:300,render:function(n,d,y,B,L){return(0,r.jsx)(f.Z,{content:d.imageInfo&&d.imageInfo.info.Id})}},{title:"\u6784\u5EFA\u72B6\u6001",width:150,ellipsis:!0,search:!1,render:function(n,d,y,B){return[(0,r.jsx)("div",{children:(0,r.jsx)(T.Z,{status:d.status},d.id)},d.id)]}},{title:"\u64CD\u4F5C",valueType:"option",key:"option",width:150,render:function(n,d,y,B){return(0,r.jsxs)(P.Z,{split:(0,r.jsx)(C.Z,{type:"vertical"}),children:[(0,r.jsx)(t.Link,{to:"/image/create?id="+d.id,type:"link",children:(0,r.jsx)(h.Z,{title:"\u518D\u6B21\u6784\u5EFA",children:(0,r.jsx)(O.Z,{})})},"rebuild"),(0,r.jsx)(u.Z.Link,{onClick:function(){var Z;(Z=M.current)===null||Z===void 0||Z.show(d.message)},children:(0,r.jsx)(h.Z,{title:"\u6784\u5EFA\u65E5\u5FD7",children:(0,r.jsx)(W.Z,{})})},"logs")]})}}],request:function(){var o=_()(i()().mark(function n(d,y,B){var L,Z,b;return i()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,(0,l.Xn)({page:(L=d.current)!==null&&L!==void 0?L:1,pageSize:(Z=d.pageSize)!==null&&Z!==void 0?Z:10});case 2:return b=S.sent,S.abrupt("return",{data:b.data.list,success:!0,total:b.data.total});case 4:case"end":return S.stop()}},n)}));return function(n,d,y){return o.apply(this,arguments)}}(),pagination:(0,g.O)(),search:{collapsed:!1},rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0},tableAlertOptionRender:function(n){var d=n.selectedRowKeys;return(0,r.jsx)(P.Z,{size:16,children:(0,r.jsx)(x.Z,{danger:!0,type:"primary",action:function(){return(0,l.$q)({id:d})},onSuccess:function(){var B,L;return!((B=s.current)===null||B===void 0)&&B.reloadAndRest&&((L=s.current)===null||L===void 0||L.reloadAndRest()),!0},onError:function(){var B,L;return!((B=s.current)===null||B===void 0)&&B.reset&&((L=s.current)===null||L===void 0||L.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",children:"\u6279\u91CF\u5220\u9664"})})},tableExtraRender:function(){return(0,r.jsx)(A.Z,{mode:"horizontal",selectedKeys:["build"],items:[{label:(0,r.jsx)(t.Link,{to:"/image/list",replace:!0,children:"\u5168\u90E8\u955C\u50CF"}),key:"all"},{label:(0,r.jsx)(t.Link,{to:"/image/list/build",replace:!0,children:"\u6784\u5EFA\u4EFB\u52A1"}),key:"build"}]})}}),(0,r.jsx)(m.Z,{ref:M})]})}},18148:function(K,D,e){e.d(D,{$q:function(){return t},Fj:function(){return f},KG:function(){return v},KX:function(){return r},T8:function(){return u},Xn:function(){return a},ao:function(){return T},c5:function(){return U},c7:function(){return W}});var I=e(15009),i=e.n(I),E=e(99289),_=e.n(E),c=e(54006);function v(s){return R.apply(this,arguments)}function R(){return R=_()(i()().mark(function s(M){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.request)("/api/app/image/get-list",{method:"POST",data:M}));case 1:case"end":return n.stop()}},s)})),R.apply(this,arguments)}function P(s){return h.apply(this,arguments)}function h(){return h=_asyncToGenerator(_regeneratorRuntime().mark(function s(M){return _regeneratorRuntime().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,request("/api/app/log/image-build",{method:"POST",data:M});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},s)})),h.apply(this,arguments)}function a(s){return C.apply(this,arguments)}function C(){return C=_()(i()().mark(function s(M){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.request)("/api/app/image/get-list-build",{method:"POST",data:M}));case 1:case"end":return n.stop()}},s)})),C.apply(this,arguments)}function u(s){return A.apply(this,arguments)}function A(){return A=_()(i()().mark(function s(M){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.request)("/api/app/image/get-build-task",{method:"POST",data:M});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},s)})),A.apply(this,arguments)}function t(s){return l.apply(this,arguments)}function l(){return l=_()(i()().mark(function s(M){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.request)("/api/app/image/delete-build-task",{method:"POST",data:M});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},s)})),l.apply(this,arguments)}function T(s){return O.apply(this,arguments)}function O(){return O=_()(i()().mark(function s(M){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.request)("/api/app/image/image-delete",{method:"POST",data:M});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},s)})),O.apply(this,arguments)}function W(){return x.apply(this,arguments)}function x(){return x=_()(i()().mark(function s(){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,c.request)("/api/app/image/image-prune",{method:"POST"});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},s)})),x.apply(this,arguments)}function U(){return g.apply(this,arguments)}function g(){return g=_()(i()().mark(function s(){return i()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,(0,c.request)("/api/app/image/build-prune",{method:"POST"});case 2:return o.abrupt("return",o.sent);case 3:case"end":return o.stop()}},s)})),g.apply(this,arguments)}function f(s){return m.apply(this,arguments)}function m(){return m=_()(i()().mark(function s(M){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.request)("/api/app/image/update-title",{method:"POST",data:M});case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}},s)})),m.apply(this,arguments)}function r(s){return j.apply(this,arguments)}function j(){return j=_()(i()().mark(function s(M){return i()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,c.request)("/api/app/image/tag-sync",{method:"POST",data:M}));case 1:case"end":return n.stop()}},s)})),j.apply(this,arguments)}},67255:function(K,D,e){e.d(D,{O:function(){return I},j:function(){return i}});function I(){var E,_=parseInt((E=localStorage.getItem("dpanel-pagesize"))!==null&&E!==void 0?E:"0");return{showSizeChanger:!0,defaultPageSize:_!=null?_:20}}function i(E){var _="dpanel-table-column-".concat(E),c={};if(localStorage.getItem(_)){var v;c=JSON.parse((v=localStorage.getItem(_))!==null&&v!==void 0?v:"{}")}return{defaultValue:c,onChange:function(P){localStorage.setItem("dpanel-table-column-".concat(E),JSON.stringify(P))}}}}}]);
