(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1184],{78445:function(e,r,t){"use strict";t.d(r,{Z:function(){return b}});var n=t(63366),a=t(87462),s=t(67294),i=t(63961),o=t(58510),c=t(15861),l=t(71657),u=t(90948),d=t(1977),h=t(8027);function p(e){return(0,h.ZP)("MuiCardHeader",e)}var m=(0,d.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=t(85893);const Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],f=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:(e,r)=>(0,a.Z)({[`& .${m.title}`]:r.title,[`& .${m.subheader}`]:r.subheader},r.root)})({display:"flex",alignItems:"center",padding:16}),v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:(e,r)=>r.avatar})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:(e,r)=>r.action})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:(e,r)=>r.content})({flex:"1 1 auto"});var b=s.forwardRef((function(e,r){const t=(0,l.Z)({props:e,name:"MuiCardHeader"}),{action:s,avatar:u,className:d,component:h="div",disableTypography:m=!1,subheader:b,subheaderTypographyProps:y,title:w,titleTypographyProps:C}=t,N=(0,n.Z)(t,Z),P=(0,a.Z)({},t,{component:h,disableTypography:m}),_=(e=>{const{classes:r}=e;return(0,o.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,r)})(P);let S=w;null==S||S.type===c.Z||m||(S=(0,x.jsx)(c.Z,(0,a.Z)({variant:u?"body2":"h5",className:_.title,component:"span",display:"block"},C,{children:S})));let A=b;return null==A||A.type===c.Z||m||(A=(0,x.jsx)(c.Z,(0,a.Z)({variant:u?"body2":"body1",className:_.subheader,color:"text.secondary",component:"span",display:"block"},y,{children:A}))),(0,x.jsxs)(f,(0,a.Z)({className:(0,i.Z)(_.root,d),as:h,ref:r,ownerState:P},N,{children:[u&&(0,x.jsx)(v,{className:_.avatar,ownerState:P,children:u}),(0,x.jsxs)(g,{className:_.content,ownerState:P,children:[S,A]}),s&&(0,x.jsx)(j,{className:_.action,ownerState:P,children:s})]}))}))},9963:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dispense",function(){return t(18259)}])},86078:function(e,r,t){"use strict";var n=t(47568),a=t(97582),s=t(85893),i=t(11163),o=t(67294),c=t(5121);r.Z=function(e){var r=e.children,t=(0,i.useRouter)();return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,r,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(!(e=sessionStorage.getItem("token")))return t.push("/login"),[2];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,c.Z.get("".concat("http://localhost:5000","/api/public/user-type"),{headers:{Authorization:"Bearer ".concat(e)},withCredentials:!0})];case 2:return r=a.sent(),console.log(r.data),"false"===r.data?t.push("/login"):"member"===r.data&&t.push("/user"),[3,4];case 3:return n=a.sent(),console.error("Error checking authentication:",n),t.push("/login"),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,s.jsx)(s.Fragment,{children:r})}},18259:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return D}});var n=t(47568),a=t(97582),s=t(85893),i=t(67294),o=t(5121),c=t(86886),l=t(50135),u=t(87109),d=t(66242),h=t(15861),p=t(78445),m=t(44267),x=t(69417),Z=t(86078),f=t(41664),v=t.n(f),j=t(90629),g=t(7906),b=t(53816),y=t(53184),w=t(295),C=t(98102),N=t(72882),P=function(e){if(!e||isNaN(new Date(e)))return"";return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"})},_=function(e){var r=new Date(e),t=new Date,n=t.getFullYear()-r.getFullYear(),a=t.getMonth()-r.getMonth();return a<0||0===a&&t.getDate()<r.getDate()?n-1:n},S=function(e){var r=e.data;return r&&Array.isArray(r)&&0!==r.length?(0,s.jsx)(N.Z,{component:j.Z,children:(0,s.jsxs)(g.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,s.jsx)(y.Z,{children:(0,s.jsxs)(b.Z,{children:[(0,s.jsx)(C.Z,{children:"ID"}),(0,s.jsx)(C.Z,{children:"First Name"}),(0,s.jsx)(C.Z,{children:"Last Name"}),(0,s.jsx)(C.Z,{children:"Credits"}),(0,s.jsx)(C.Z,{children:"Gender"}),(0,s.jsx)(C.Z,{children:"Registered"}),(0,s.jsx)(C.Z,{children:"Age"}),(0,s.jsx)(C.Z,{children:"ID Number"}),(0,s.jsx)(C.Z,{children:"User Role"}),(0,s.jsx)(C.Z,{children:"Email"}),(0,s.jsx)(C.Z,{children:"Expiry"})]})}),(0,s.jsx)(w.Z,{children:r.map((function(e){var r,t,n;return(0,s.jsx)(v(),{href:"/dispense/".concat(e.memberCode),passHref:!0,children:(0,s.jsxs)(b.Z,{component:"a",sx:{cursor:"pointer",textDecoration:"none","&:hover":{backgroundColor:"#f5f5f5"},"&:last-of-type td, &:last-of-type th":{border:0}},children:[(0,s.jsx)(C.Z,{component:"th",scope:"row",children:e.memberCode}),(0,s.jsx)(C.Z,{children:e.firstName}),(0,s.jsx)(C.Z,{children:e.lastName}),(0,s.jsx)(C.Z,{children:e.credits}),(0,s.jsx)(C.Z,{children:e.gender}),(0,s.jsx)(C.Z,{children:P(null===(r=e.userInfo[0])||void 0===r?void 0:r.createdAt)}),(0,s.jsx)(C.Z,{children:_(e.dateOfBirth)}),(0,s.jsx)(C.Z,{children:e.idNumber}),(0,s.jsx)(C.Z,{children:null===(t=e.userInfo[0])||void 0===t?void 0:t.userRole}),(0,s.jsx)(C.Z,{children:null===(n=e.userInfo[0])||void 0===n?void 0:n.email}),(0,s.jsx)(C.Z,{children:P(e.expiryDate)})]})},e.memberCode)}))})]})}):(0,s.jsx)("p",{children:"No data available."})},A=t(69497),D=function(){var e=(0,i.useState)(""),r=e[0],t=e[1],f=(0,i.useState)(""),v=f[0],j=f[1],g=(0,i.useState)([]),b=(g[0],g[1],(0,i.useState)([])),y=b[0],w=b[1],C="undefined"!==typeof sessionStorage?sessionStorage.getItem("token"):null;(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,r;return(0,a.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),[4,o.Z.get("".concat("http://localhost:5000","/api/protected/members"),{headers:{Authorization:"Bearer ".concat(C)},withCredentials:!0})];case 1:return e=t.sent(),w(e.data),[3,3];case 2:return r=t.sent(),console.error("Error fetching data:",r),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]);var N=function(){var e=(0,n.Z)((function(e){var t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:e.preventDefault(),a.label=1;case 1:return a.trys.push([1,6,,7]),""!==r.trim()?[3,3]:[4,o.Z.get("".concat("http://localhost:5000","/api/protected/members"),{headers:{Authorization:"Bearer ".concat(C)},withCredentials:!0})];case 2:return t=a.sent(),[3,5];case 3:return[4,o.Z.get("".concat("http://localhost:5000","/api/protected/members/search"),{headers:{Authorization:"Bearer ".concat(C)},params:{name:r},withCredentials:!0})];case 4:t=a.sent(),a.label=5;case 5:return w(t.data),j(""),[3,7];case 6:return n=a.sent(),console.error("Error while searching members:",n),[3,7];case 7:return[2]}}))}));return function(r){return e.apply(this,arguments)}}(),P=function(){var e=(0,n.Z)((function(e){var r,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:e.preventDefault(),a.label=1;case 1:return a.trys.push([1,6,,7]),""!==v.trim()?[3,3]:[4,o.Z.get("".concat("http://localhost:5000","/api/protected/members"),{headers:{Authorization:"Bearer ".concat(C)},withCredentials:!0})];case 2:return r=a.sent(),[3,5];case 3:return[4,o.Z.get("".concat("http://localhost:5000","/api/protected/members/searchbyid"),{params:{id:v},headers:{Authorization:"Bearer ".concat(C)},withCredentials:!0})];case 4:r=a.sent(),a.label=5;case 5:return w(r.data),t(""),[3,7];case 6:return n=a.sent(),console.error("Error while searching members:",n),[3,7];case 7:return[2]}}))}));return function(r){return e.apply(this,arguments)}}();return(0,s.jsx)(Z.Z,{children:(0,s.jsxs)(c.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(c.ZP,{item:!0,xs:12,children:(0,s.jsx)(h.Z,{variant:"h5",children:"Members"})}),(0,s.jsx)(c.ZP,{item:!0,xs:12,children:(0,s.jsx)(d.Z,{children:(0,s.jsx)(m.Z,{children:(0,s.jsxs)(c.ZP,{container:!0,spacing:5,children:[(0,s.jsx)(c.ZP,{item:!0,xs:6,children:(0,s.jsxs)("form",{onSubmit:P,children:[(0,s.jsx)(l.Z,{fullWidth:!0,label:"SCAN CHIP/CARD",placeholder:"ID Number",value:v,onChange:function(e){return j(e.target.value)},InputProps:{startAdornment:(0,s.jsx)(u.Z,{position:"start",children:(0,s.jsx)(A.Z,{})})}}),(0,s.jsx)(x.Z,{type:"submit",variant:"contained",size:"large",sx:{mt:4},children:"Search by id"})]})}),(0,s.jsx)(c.ZP,{item:!0,xs:6,children:(0,s.jsxs)("form",{onSubmit:N,children:[(0,s.jsx)(l.Z,{fullWidth:!0,label:"Search",placeholder:"Name",value:r,onChange:function(e){return t(e.target.value)},InputProps:{startAdornment:(0,s.jsx)(u.Z,{position:"start",children:(0,s.jsx)(A.Z,{})})}}),(0,s.jsx)(x.Z,{type:"submit",variant:"contained",size:"large",sx:{mt:4},children:"Search by name"})]})}),(0,s.jsx)(c.ZP,{item:!0,xs:12})]})})})}),(0,s.jsx)(c.ZP,{item:!0,xs:12,children:(0,s.jsxs)(d.Z,{sx:{p:5},children:[(0,s.jsx)(p.Z,{title:"Members",titleTypographyProps:{variant:"h6"}}),(0,s.jsx)(S,{data:y})]})})]})})}}},function(e){e.O(0,[2657,7709,8360,3678,9254,5345,9774,2888,179],(function(){return r=9963,e(e.s=r);var r}));var r=e.O();_N_E=r}]);