(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8872],{44267:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(87462),i=n(63366),s=n(67294),a=n(63961),o=n(58510),c=n(90948),l=n(71657),d=n(1977),u=n(8027);function h(e){return(0,u.ZP)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var x=n(85893);const p=["className","component"],Z=(0,c.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})((()=>({padding:16,"&:last-child":{paddingBottom:24}})));var m=s.forwardRef((function(e,t){const n=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:s,component:c="div"}=n,d=(0,i.Z)(n,p),u=(0,r.Z)({},n,{component:c}),m=(e=>{const{classes:t}=e;return(0,o.Z)({root:["root"]},h,t)})(u);return(0,x.jsx)(Z,(0,r.Z)({as:c,className:(0,a.Z)(m.root,s),ownerState:u,ref:t},d))}))},57922:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(63366),i=n(87462),s=n(67294),a=n(63961),o=n(8662),c=n(39192),l=n(58510),d=n(90948),u=n(71657),h=n(96067),x=n(30577),p=n(2734),Z=n(51705),m=n(1977),f=n(8027);function g(e){return(0,f.ZP)("MuiCollapse",e)}(0,m.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var j=n(85893);const v=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],y=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((({theme:e,ownerState:t})=>(0,i.Z)({height:0,overflow:"hidden",transition:e.transitions.create("height")},"horizontal"===t.orientation&&{height:"auto",width:0,transition:e.transitions.create("width")},"entered"===t.state&&(0,i.Z)({height:"auto",overflow:"visible"},"horizontal"===t.orientation&&{width:"auto"}),"exited"===t.state&&!t.in&&"0px"===t.collapsedSize&&{visibility:"hidden"}))),b=(0,d.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})((({ownerState:e})=>(0,i.Z)({display:"flex",width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),w=(0,d.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(e,t)=>t.wrapperInner})((({ownerState:e})=>(0,i.Z)({width:"100%"},"horizontal"===e.orientation&&{width:"auto",height:"100%"}))),C=s.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiCollapse"}),{addEndListener:d,children:m,className:f,collapsedSize:C="0px",component:P,easing:N,in:E,onEnter:D,onEntered:S,onEntering:_,onExit:I,onExited:A,onExiting:B,orientation:L="vertical",style:z,timeout:M=h.x9.standard,TransitionComponent:T=o.ZP}=n,R=(0,r.Z)(n,v),W=(0,i.Z)({},n,{orientation:L,collapsedSize:C}),k=(e=>{const{orientation:t,classes:n}=e,r={root:["root",`${t}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${t}`],wrapperInner:["wrapperInner",`${t}`]};return(0,l.Z)(r,g,n)})(W),H=(0,p.Z)(),$=(0,c.Z)(),V=s.useRef(null),F=s.useRef(),O="number"===typeof C?`${C}px`:C,X="horizontal"===L,G=X?"width":"height",q=s.useRef(null),U=(0,Z.Z)(t,q),Y=e=>t=>{if(e){const n=q.current;void 0===t?e(n):e(n,t)}},J=()=>V.current?V.current[X?"clientWidth":"clientHeight"]:0,K=Y(((e,t)=>{V.current&&X&&(V.current.style.position="absolute"),e.style[G]=O,D&&D(e,t)})),Q=Y(((e,t)=>{const n=J();V.current&&X&&(V.current.style.position="");const{duration:r,easing:i}=(0,x.C)({style:z,timeout:M,easing:N},{mode:"enter"});if("auto"===M){const t=H.transitions.getAutoHeightDuration(n);e.style.transitionDuration=`${t}ms`,F.current=t}else e.style.transitionDuration="string"===typeof r?r:`${r}ms`;e.style[G]=`${n}px`,e.style.transitionTimingFunction=i,_&&_(e,t)})),ee=Y(((e,t)=>{e.style[G]="auto",S&&S(e,t)})),te=Y((e=>{e.style[G]=`${J()}px`,I&&I(e)})),ne=Y(A),re=Y((e=>{const t=J(),{duration:n,easing:r}=(0,x.C)({style:z,timeout:M,easing:N},{mode:"exit"});if("auto"===M){const n=H.transitions.getAutoHeightDuration(t);e.style.transitionDuration=`${n}ms`,F.current=n}else e.style.transitionDuration="string"===typeof n?n:`${n}ms`;e.style[G]=O,e.style.transitionTimingFunction=r,B&&B(e)}));return(0,j.jsx)(T,(0,i.Z)({in:E,onEnter:K,onEntered:ee,onEntering:Q,onExit:te,onExited:ne,onExiting:re,addEndListener:e=>{"auto"===M&&$.start(F.current||0,e),d&&d(q.current,e)},nodeRef:q,timeout:"auto"===M?null:M},R,{children:(e,t)=>(0,j.jsx)(y,(0,i.Z)({as:P,className:(0,a.Z)(k.root,f,{entered:k.entered,exited:!E&&"0px"===O&&k.hidden}[e]),style:(0,i.Z)({[X?"minWidth":"minHeight"]:O},z),ref:U},t,{ownerState:(0,i.Z)({},W,{state:e}),children:(0,j.jsx)(b,{ownerState:(0,i.Z)({},W,{state:e}),className:k.wrapper,ref:V,children:(0,j.jsx)(w,{ownerState:(0,i.Z)({},W,{state:e}),className:k.wrapperInner,children:m})})}))}))}));C.muiSupportAuto=!0;var P=C},36847:function(e,t,n){"use strict";t.Z=void 0;var r,i=(r=n(65129))&&r.__esModule?r:{default:r};t.Z=(0,i.default)("M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z","Account")},22875:function(e,t,n){"use strict";t.Z=void 0;var r,i=(r=n(65129))&&r.__esModule?r:{default:r};t.Z=(0,i.default)("M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z","ChevronDown")},23246:function(e,t,n){"use strict";t.Z=void 0;var r,i=(r=n(65129))&&r.__esModule?r:{default:r};t.Z=(0,i.default)("M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z","ChevronUp")},99657:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/profile",function(){return n(33754)}])},15064:function(e,t,n){"use strict";var r=n(85893),i=n(90948),s=n(5616),a=(0,i.ZP)(s.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));t.Z=function(e){var t=e.children;return(0,r.jsx)(a,{className:"layout-wrapper",children:(0,r.jsx)(s.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:t})})}},60851:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(47568),i=n(97582),s=n(85893),a=n(11163),o=n(67294),c=n(5121),l=n(61730),d=n(14924),u=n(26042),h=n(58032),x=n(90948),p=n(5616),Z=n(26317),m=n(25193),f=n(50362),g=n(64232),j=n(74397),v=n(25708),y=n(8745),b=(0,x.ZP)("div")({height:"100%",display:"flex"}),w=(0,x.ZP)(p.Z)({flexGrow:1,minWidth:0,display:"flex",minHeight:"100vh",flexDirection:"column"}),C=(0,x.ZP)("main")((function(e){var t=e.theme;return(0,d.Z)({flexGrow:1,width:"100%",padding:t.spacing(6),transition:"padding .25s ease-in-out"},t.breakpoints.down("sm"),{paddingLeft:t.spacing(4),paddingRight:t.spacing(4)})})),P=function(e){var t=e.settings,n=e.children,r=e.scrollToTop,i=t.contentWidth,a=m.Z.navigationSize,c=(0,o.useState)(!1),l=c[0],d=c[1],x=function(){return d(!l)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(b,{className:"layout-wrapper",children:[(0,s.jsx)(g.Z,(0,u.Z)({navWidth:a,navVisible:l,setNavVisible:d,toggleNavVisibility:x},e)),(0,s.jsxs)(w,{className:"layout-content-wrapper",children:[(0,s.jsx)(f.Z,(0,u.Z)({toggleNavVisibility:x},e)),(0,s.jsx)(C,{className:"layout-page-content",sx:(0,u.Z)({},"boxed"===i&&{mx:"auto","@media (min-width:1440px)":{maxWidth:1440},"@media (min-width:1200px)":{maxWidth:"100%"}}),children:n}),(0,s.jsx)(j.Z,(0,u.Z)({},e)),(0,s.jsx)(y.Z,{sx:{zIndex:11},children:(0,s.jsx)(p.Z,{id:"react-datepicker-portal"})})]})]}),r?r(e):(0,s.jsx)(v.Z,{className:"mui-fixed",children:(0,s.jsx)(h.Z,{color:"primary",size:"small","aria-label":"scroll back to top",children:(0,s.jsx)(Z.Z,{})})})]})},N=n(36847),E=n(99238),D=function(){return[{title:"Dashboard",icon:E.Z,path:"/user/"},{title:"Profile",icon:N.Z,path:"/user/profile"}]},S=n(15045),_=n(88073),I=function(e){var t=e.children,n=(0,_.r)(),d=n.settings,u=n.saveSettings,h=(0,a.useRouter)(),x=(0,l.Z)((function(e){return e.breakpoints.down("lg")}));return(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)((function(){var e,t,n;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:if(!(e=sessionStorage.getItem("token")))return h.push("/login"),[2];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/public/user-type"),{headers:{Authorization:"Bearer ".concat(e)},withCredentials:!0})];case 2:return t=r.sent(),console.log(t.data),"member"!==t.data&&h.push("/login"),[3,4];case 3:return n=r.sent(),console.error("Error checking authentication:",n),h.push("/login"),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[h]),(0,s.jsx)(P,{hidden:x,settings:"boxed",saveSettings:u,verticalNavItems:D(),verticalAppBarContent:function(e){return(0,s.jsx)(S.Z,{hidden:x,settings:d,saveSettings:u,toggleNavVisibility:e.toggleNavVisibility})},children:t})}},33754:function(e,t,n){"use strict";n.r(t);var r=n(47568),i=n(14924),s=n(97582),a=n(85893),o=n(67294),c=n(5121),l=n(11163),d=(n(41664),n(86886)),u=n(66242),h=n(15861),x=n(44267),p=n(69417),Z=n(5616),m=n(90948),f=n(15064),g=n(94429),j=n(44960),v=n(4026),y=n(60851),b=((0,m.ZP)("img")((function(e){var t=e.theme;return{width:150,height:150,marginRight:t.spacing(6.25),borderRadius:t.shape.borderRadius}})),(0,m.ZP)(p.Z)((function(e){var t=e.theme;return(0,i.Z)({},t.breakpoints.down("sm"),{width:"100%",textAlign:"center"})})),function(e){if(!e||isNaN(new Date(e)))return"";return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"})}),w=function(e){var t=new Date(e),n=new Date,r=n.getFullYear()-t.getFullYear(),i=n.getMonth()-t.getMonth();return i<0||0===i&&n.getDate()<t.getDate()?r-1:r},C=function(){var e,t,n,i,m,f=(0,o.useState)([]),C=f[0],P=f[1],N=(0,o.useState)([]),E=N[0],D=N[1],S=(0,o.useState)(null),_=S[0],I=S[1],A=(0,o.useState)(null),B=A[0],L=A[1],z=((0,l.useRouter)(),"undefined"!==typeof sessionStorage?sessionStorage.getItem("token"):null),M=function(){var e=(0,r.Z)((function(e){var t,n;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/user/protected/creditTransactions"),{params:{memberId:e},headers:{Authorization:"Bearer ".concat(z)},withCredentials:!0})];case 1:return(t=r.sent()).data&&P(t.data),[3,3];case 2:return n=r.sent(),console.error("Error fetching transaction data:",n),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=(0,r.Z)((function(e){var t,n;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/user/protected/dispenseTransactions"),{params:{memberId:e},headers:{Authorization:"Bearer ".concat(z)},withCredentials:!0})];case 1:return(t=r.sent()).data&&D(t.data),[3,3];case 2:return n=r.sent(),console.error("Error fetching transaction data:",n),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=(0,r.Z)((function(e){var t,n;return(0,s.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/user/protected/members/").concat(e),{headers:{Authorization:"Bearer ".concat(z)},withCredentials:!0})];case 1:return(t=r.sent()).data&&I(t.data[0]),[3,3];case 2:return n=r.sent(),console.error("Error fetching member data:",n),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=(0,r.Z)((function(){var e,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),console.log("Fetching user data..."),[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/user/protected/user"),{headers:{Authorization:"Bearer ".concat(z)},withCredentials:!0})];case 1:return(e=n.sent()).data&&e.data.memberCode?L(e.data.memberCode):console.error("No member code found in user data"),[3,3];case 2:return t=n.sent(),console.error("Error fetching user data:",t),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){W()}),[]),(0,o.useEffect)((function(){B&&(R(B),M(B),T(B))}),[B]),_?(0,a.jsx)(y.Z,{children:(0,a.jsxs)(d.ZP,{container:!0,spacing:6,children:[(0,a.jsx)(d.ZP,{item:!0,xs:12,children:(0,a.jsx)(u.Z,{sx:{p:5},children:(0,a.jsx)(x.Z,{children:(0,a.jsxs)(d.ZP,{container:!0,spacing:5,children:[(0,a.jsx)(d.ZP,{item:!0,xs:12,children:(0,a.jsx)(h.Z,{variant:"h5",children:"Personal Information"})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,sx:{marginTop:4.8,marginBottom:3},children:(0,a.jsxs)(Z.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,a.jsx)(v.Z,{qrLink:"/members/profile/".concat(B)}),(0,a.jsxs)(Z.Z,{children:[(0,a.jsxs)(h.Z,{variant:"h6",children:[_.firstName," ",_.lastName]}),(0,a.jsxs)(h.Z,{variant:"subtitle1",children:["Credits: ",_.credits]}),(0,a.jsxs)(h.Z,{variant:"body2",children:[w(_.dateOfBirth)," y.o"]})]})]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,sx:{marginTop:4.8,marginBottom:3},children:(0,a.jsx)(Z.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,a.jsx)(p.Z,{sx:{ml:5},size:"large",variant:"contained",children:"Edit Profile"})})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Member Code:"})," ",_.memberCode]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Expiry:"})," ",b(null===(e=_.userInfo[0])||void 0===e?void 0:e.expiryDate)]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Email:"})," ",null===(t=_.userInfo[0])||void 0===t?void 0:t.email]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"User Role:"})," ",null===(n=_.userInfo[0])||void 0===n?void 0:n.userRole]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Preferred Name:"})," ",null===(i=_.userInfo[0])||void 0===i?void 0:i.userName]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Phone Number:"})," ",_.phoneNumber]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Registration Date:"})," ",b(null===(m=_.userInfo[0])||void 0===m?void 0:m.createdAt)]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Passport Number:"})," ",_.idNumber]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Date of Birth:"})," ",b(_.dateOfBirth)]})}),(0,a.jsx)(d.ZP,{item:!0,xs:6,children:(0,a.jsxs)(h.Z,{variant:"body1",children:[(0,a.jsx)(Z.Z,{component:"span",sx:{fontWeight:600,color:"text.primary"},children:"Gender:"})," ",_.gender]})})]})})})}),(0,a.jsx)(d.ZP,{item:!0,xs:12,children:(0,a.jsx)(u.Z,{sx:{p:5},children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(h.Z,{variant:"h5",children:"Dispense History"}),(0,a.jsx)(j.Z,{data:E})]})})}),(0,a.jsx)(d.ZP,{item:!0,xs:12,children:(0,a.jsx)(u.Z,{sx:{p:5},children:(0,a.jsxs)(x.Z,{children:[(0,a.jsx)(h.Z,{variant:"h5",children:"Donation History"}),(0,a.jsx)(g.Z,{data:C})]})})})]})}):(0,a.jsx)("p",{children:"Loading..."})};C.getLayout=function(e){return(0,a.jsx)(f.Z,{children:e})},t.default=C},4026:function(e,t,n){"use strict";var r=n(85893),i=n(59496);t.Z=function(e){var t=e.qrLink,n=(0,i.y)().Canvas;return(0,r.jsx)(n,{text:t,options:{level:"M",margin:3,scale:4,width:200,color:{dark:"#000000",light:"#ffffff"}}})}},44960:function(e,t,n){"use strict";var r=n(85893),i=n(67294),s=n(5616),a=n(90629),o=n(7906),c=n(57922),l=n(53816),d=n(53184),u=n(295),h=n(98102),x=n(15861),p=n(93946),Z=n(72882),m=n(23246),f=n(22875),g=function(e){var t=e.row,n=(0,i.useState)(!1),a=n[0],Z=n[1];return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)(l.Z,{sx:{"& > *":{borderBottom:"unset"}},children:[(0,r.jsx)(h.Z,{children:(0,r.jsx)(p.Z,{"aria-label":"expand row",size:"small",onClick:function(){return Z(!a)},children:a?(0,r.jsx)(m.Z,{}):(0,r.jsx)(f.Z,{})})}),(0,r.jsx)(h.Z,{children:t.transactionId}),(0,r.jsx)(h.Z,{align:"center",children:t.memberCode}),(0,r.jsx)(h.Z,{align:"center",children:t.transactionType}),(0,r.jsx)(h.Z,{align:"center",children:t.amountTotal}),(0,r.jsx)(h.Z,{align:"center",children:new Date(t.checkoutDate).toLocaleDateString()}),(0,r.jsx)(h.Z,{align:"center",children:t.createdBy})]}),(0,r.jsx)(l.Z,{sx:{background:"#fafafa"},children:(0,r.jsx)(h.Z,{colSpan:7,sx:{py:"0 !important"},children:(0,r.jsx)(c.Z,{in:a,timeout:"auto",unmountOnExit:!0,children:(0,r.jsxs)(s.Z,{sx:{m:2,pb:6},children:[(0,r.jsx)(x.Z,{variant:"body1",gutterBottom:!0,component:"div",sx:{py:2},children:"Products Dispensed"}),(0,r.jsxs)(o.Z,{size:"small","aria-label":"products",children:[(0,r.jsx)(d.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(h.Z,{align:"center",children:"Name"}),(0,r.jsx)(h.Z,{align:"center",children:"Category"}),(0,r.jsx)(h.Z,{align:"center",children:"Sale Price"}),(0,r.jsx)(h.Z,{align:"center",children:"Weight"}),(0,r.jsx)(h.Z,{align:"center",children:"Subtotal"})]})}),(0,r.jsx)(u.Z,{children:t.products.map((function(e,t){return(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(h.Z,{align:"center",children:e.name}),(0,r.jsx)(h.Z,{align:"center",children:e.category}),(0,r.jsx)(h.Z,{align:"center",children:e.salePrice}),(0,r.jsx)(h.Z,{align:"center",children:e.weight}),(0,r.jsx)(h.Z,{align:"center",children:e.subtotal})]},t)}))})]}),(0,r.jsx)(x.Z,{variant:"body1",gutterBottom:!0,component:"div",sx:{py:2,mt:4},children:"Comments"}),(0,r.jsx)(x.Z,{variant:"body2",children:t.comments})]})})})})]})};t.Z=function(e){var t=e.data;return t&&Array.isArray(t)&&0!==t.length?(0,r.jsx)(Z.Z,{component:a.Z,children:(0,r.jsxs)(o.Z,{"aria-label":"collapsible table",children:[(0,r.jsx)(d.Z,{children:(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(h.Z,{}),(0,r.jsx)(h.Z,{children:"Transaction ID"}),(0,r.jsx)(h.Z,{align:"center",children:"Member Code"}),(0,r.jsx)(h.Z,{align:"center",children:"Transaction Type"}),(0,r.jsx)(h.Z,{align:"center",children:"Amount Total"}),(0,r.jsx)(h.Z,{align:"center",children:"Checkout Date"}),(0,r.jsx)(h.Z,{align:"center",children:"Created By"})]})}),(0,r.jsx)(u.Z,{children:t.map((function(e){return(0,r.jsx)(g,{row:e},e._id.$oid)}))})]})}):(0,r.jsx)("p",{children:"No data available."})}},94429:function(e,t,n){"use strict";var r=n(85893),i=(n(67294),n(41664),n(90629)),s=n(7906),a=n(53816),o=n(53184),c=n(295),l=n(98102),d=n(72882),u=function(e){if(!e||isNaN(new Date(e)))return"";return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"})};t.Z=function(e){var t=e.data;return t&&Array.isArray(t)&&0!==t.length?(0,r.jsx)(d.Z,{component:i.Z,children:(0,r.jsxs)(s.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,r.jsx)(o.Z,{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(l.Z,{children:"ID"}),(0,r.jsx)(l.Z,{children:"Transaction Type"}),(0,r.jsx)(l.Z,{children:"Paid By"}),(0,r.jsx)(l.Z,{children:"Amount"}),(0,r.jsx)(l.Z,{children:"Credit Before"}),(0,r.jsx)(l.Z,{children:"Credit After"}),(0,r.jsx)(l.Z,{children:"Comments"}),(0,r.jsx)(l.Z,{children:"Created By"}),(0,r.jsx)(l.Z,{children:"Transaction Date"})]})}),(0,r.jsx)(c.Z,{children:t.map((function(e){return(0,r.jsxs)(a.Z,{component:"tr",sx:{cursor:"pointer",textDecoration:"none","&:hover":{backgroundColor:"#f5f5f5"},"&:first-of-type td, &:first-of-type th":{border:0}},children:[(0,r.jsx)(l.Z,{component:"th",scope:"row",children:e.transactionId}),(0,r.jsx)(l.Z,{children:e.transactionType}),(0,r.jsx)(l.Z,{children:e.paidBy}),(0,r.jsx)(l.Z,{children:e.amount}),(0,r.jsx)(l.Z,{children:e.creditBefore}),(0,r.jsx)(l.Z,{children:e.creditAfter}),(0,r.jsx)(l.Z,{children:e.comments}),(0,r.jsx)(l.Z,{children:e.createdBy}),(0,r.jsx)(l.Z,{children:u(e.transactionDate)})]},e.transactionId)}))})]})}):(0,r.jsx)("p",{children:"No data available."})}}},function(e){e.O(0,[2657,9254,7028,9774,2888,179],(function(){return t=99657,e(e.s=t);var t}));var t=e.O();_N_E=t}]);