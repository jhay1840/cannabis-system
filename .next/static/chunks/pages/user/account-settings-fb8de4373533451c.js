(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9891],{36847:function(e,n,t){"use strict";n.Z=void 0;var i,s=(i=t(65129))&&i.__esModule?i:{default:i};n.Z=(0,s.default)("M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z","Account")},10526:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/account-settings",function(){return t(91137)}])},15064:function(e,n,t){"use strict";var i=t(85893),s=t(90948),r=t(5616),a=(0,s.ZP)(r.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));n.Z=function(e){var n=e.children;return(0,i.jsx)(a,{className:"layout-wrapper",children:(0,i.jsx)(r.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:n})})}},60851:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var i=t(47568),s=t(97582),r=t(85893),a=t(11163),c=t(67294),o=t(5121),l=t(61730),u=t(14924),d=t(26042),h=t(58032),x=t(90948),p=t(5616),f=t(26317),g=t(25193),Z=t(50362),v=t(64232),m=t(74397),j=t(25708),b=t(8745),y=(0,x.ZP)("div")({height:"100%",display:"flex"}),w=(0,x.ZP)(p.Z)({flexGrow:1,minWidth:0,display:"flex",minHeight:"100vh",flexDirection:"column"}),N=(0,x.ZP)("main")((function(e){var n=e.theme;return(0,u.Z)({flexGrow:1,width:"100%",padding:n.spacing(6),transition:"padding .25s ease-in-out"},n.breakpoints.down("sm"),{paddingLeft:n.spacing(4),paddingRight:n.spacing(4)})})),_=function(e){var n=e.settings,t=e.children,i=e.scrollToTop,s=n.contentWidth,a=g.Z.navigationSize,o=(0,c.useState)(!1),l=o[0],u=o[1],x=function(){return u(!l)};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y,{className:"layout-wrapper",children:[(0,r.jsx)(v.Z,(0,d.Z)({navWidth:a,navVisible:l,setNavVisible:u,toggleNavVisibility:x},e)),(0,r.jsxs)(w,{className:"layout-content-wrapper",children:[(0,r.jsx)(Z.Z,(0,d.Z)({toggleNavVisibility:x},e)),(0,r.jsx)(N,{className:"layout-page-content",sx:(0,d.Z)({},"boxed"===s&&{mx:"auto","@media (min-width:1440px)":{maxWidth:1440},"@media (min-width:1200px)":{maxWidth:"100%"}}),children:t}),(0,r.jsx)(m.Z,(0,d.Z)({},e)),(0,r.jsx)(b.Z,{sx:{zIndex:11},children:(0,r.jsx)(p.Z,{id:"react-datepicker-portal"})})]})]}),i?i(e):(0,r.jsx)(j.Z,{className:"mui-fixed",children:(0,r.jsx)(h.Z,{color:"primary",size:"small","aria-label":"scroll back to top",children:(0,r.jsx)(f.Z,{})})})]})},k=t(36847),P=t(99238),S=function(){return[{title:"Dashboard",icon:P.Z,path:"/user/"},{title:"Profile",icon:k.Z,path:"/user/profile"}]},A=t(15045),C=t(88073),I=function(e){var n=e.children,t=(0,C.r)(),u=t.settings,d=t.saveSettings,h=(0,a.useRouter)(),x=(0,l.Z)((function(e){return e.breakpoints.down("lg")}));return(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((function(){var e,n,t;return(0,s.__generator)(this,(function(i){switch(i.label){case 0:if(!(e=sessionStorage.getItem("token")))return h.push("/login"),[2];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,o.Z.get("".concat("http://3.83.33.251:5000","/api/public/user-type"),{headers:{Authorization:"Bearer ".concat(e)},withCredentials:!0})];case 2:return n=i.sent(),console.log(n.data),"member"!==n.data&&h.push("/login"),[3,4];case 3:return t=i.sent(),console.error("Error checking authentication:",t),h.push("/login"),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,r.jsx)(_,{hidden:x,settings:"boxed",saveSettings:d,verticalNavItems:S(),verticalAppBarContent:function(e){return(0,r.jsx)(A.Z,{hidden:x,settings:u,saveSettings:d,toggleNavVisibility:e.toggleNavVisibility})},children:n})}},91137:function(e,n,t){"use strict";t.r(n);var i=t(14924),s=t(85893),r=t(67294),a=t(5616),c=t(66242),o=t(57610),l=t(63144),u=t(45670),d=t(90948),h=t(40044),x=t(99642),p=t(41036),f=t(74496),g=t(9210),Z=t(51953),v=t(88313),m=t(15064),j=t(60851),b=(t(18698),(0,d.ZP)(h.Z)((function(e){var n,t=e.theme;return n={},(0,i.Z)(n,t.breakpoints.down("md"),{minWidth:100}),(0,i.Z)(n,t.breakpoints.down("sm"),{minWidth:67}),n}))),y=(0,d.ZP)("span")((function(e){var n=e.theme;return(0,i.Z)({lineHeight:1.71,fontSize:"0.875rem",marginLeft:n.spacing(2.4)},n.breakpoints.down("md"),{display:"none"})})),w=function(){var e=(0,r.useState)("account"),n=e[0],t=e[1];return(0,s.jsx)(j.Z,{children:(0,s.jsx)(c.Z,{children:(0,s.jsxs)(u.ZP,{value:n,children:[(0,s.jsxs)(o.Z,{onChange:function(e,n){t(n)},"aria-label":"account-settings tabs",sx:{borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:[(0,s.jsx)(b,{value:"account",label:(0,s.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(x.Z,{}),(0,s.jsx)(y,{children:"Account"})]})}),(0,s.jsx)(b,{value:"security",label:(0,s.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(p.Z,{}),(0,s.jsx)(y,{children:"Security"})]})}),(0,s.jsx)(b,{value:"info",label:(0,s.jsxs)(a.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,s.jsx)(f.Z,{}),(0,s.jsx)(y,{children:"Info"})]})})]}),(0,s.jsx)(l.Z,{sx:{p:0},value:"account",children:(0,s.jsx)(Z.Z,{})}),(0,s.jsx)(l.Z,{sx:{p:0},value:"security",children:(0,s.jsx)(v.Z,{})}),(0,s.jsx)(l.Z,{sx:{p:0},value:"info",children:(0,s.jsx)(g.Z,{})})]})})})};w.getLayout=function(e){return(0,s.jsx)(m.Z,{children:e})},n.default=w}},function(e){e.O(0,[2657,7709,8360,3678,1620,8682,5551,200,696,8722,661,6148,9774,2888,179],(function(){return n=10526,e(e.s=n);var n}));var n=e.O();_N_E=n}]);