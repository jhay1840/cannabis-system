(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4672],{76278:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add-member",function(){return r(75411)}])},86078:function(e,t,r){"use strict";var n=r(47568),a=r(97582),s=r(85893),i=r(11163),l=r(67294),o=r(5121);t.Z=function(e){var t=e.children,r=(0,i.useRouter)();return(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(!(e=sessionStorage.getItem("token")))return r.push("/login"),[2];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.Z.get("".concat("http://3.83.33.251:5000","/api/public/user-type"),{headers:{Authorization:"Bearer ".concat(e)},withCredentials:!0})];case 2:return t=a.sent(),console.log(t.data),"false"===t.data?r.push("/login"):"member"===t.data&&r.push("/user"),[3,4];case 3:return n=a.sent(),console.error("Error checking authentication:",n),r.push("/login"),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,s.jsx)(s.Fragment,{children:t})}},75411:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return A}});var n=r(47568),a=r(14924),s=r(97582),i=r(85893),l=r(67294),o=r(86078),u=r(58877),c=r.n(u),d=function(e){var t=e.onSignatureSave,r=(0,l.useRef)(null);return(0,i.jsxs)("div",{children:[(0,i.jsx)(c(),{ref:r,canvasProps:{width:500,height:250,className:"signatureCanvas",style:{backgroundColor:"#f5f5f5",height:"250px"}}}),(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{onClick:function(e){e.preventDefault();var n=r.current.toDataURL();t(n)},style:{margin:"5px"},children:"Save Signature"}),(0,i.jsx)("button",{onClick:function(e){e.preventDefault(),r.current.clear()},style:{margin:"5px"},children:"Reset Signature"})]})]})},h=r(90948),p=r(69417),x=((0,h.ZP)(p.Z)((function(e){var t=e.theme;return(0,a.Z)({},t.breakpoints.down("sm"),{width:"100%",textAlign:"center"})})),r(5121)),m=r(86886),f=r(50135),g=r(87109),Z=r(66242),j=r(15861),v=r(78445),b=r(67720),y=r(44267),P=r(94054),w=r(18360),S=r(47312),C=r(22224),k=r(60856),B=r(69368),_=r(11163),N=r.n(_),A=((0,h.ZP)(p.Z)((function(e){var t=e.theme;return(0,a.Z)({},t.breakpoints.down("sm"),{width:"100%",textAlign:"center"})})),function(){var e=(0,l.useState)(""),t=e[0],r=e[1],a=(0,l.useState)(""),u=a[0],c=a[1],h=(0,l.useState)(""),_=h[0],A=h[1],W=(0,l.useState)(""),D=W[0],q=W[1],E=(0,l.useState)(""),I=E[0],T=E[1],R=(0,l.useState)(""),M=R[0],z=R[1],O=(0,l.useState)(""),U=O[0],F=O[1],L=(0,l.useState)(""),V=L[0],G=L[1],J=(0,l.useState)(null),X=J[0],H=J[1],K=(0,l.useState)(""),Q=K[0],Y=K[1],$=(0,l.useState)(""),ee=$[0],te=$[1],re=(0,l.useState)(!1),ne=re[0],ae=re[1],se=(0,l.useState)(!1),ie=se[0],le=se[1],oe=(0,l.useState)(!1),ue=oe[0],ce=oe[1],de=(0,l.useState)(""),he=de[0],pe=de[1],xe=(0,l.useState)([]),me=xe[0],fe=xe[1],ge=(0,l.useState)([]),Ze=ge[0],je=ge[1],ve=(0,l.useState)(""),be=ve[0],ye=ve[1],Pe=(0,l.useState)(""),we=Pe[0],Se=Pe[1],Ce=(0,l.useState)(!1),ke=Ce[0],Be=Ce[1],_e="undefined"!==typeof sessionStorage?sessionStorage.getItem("token"):null;(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,t,r;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,x.Z.get("".concat("http://3.83.33.251:5000","/api/protected/getMemberOptions"),{headers:{Authorization:"Bearer ".concat(_e)},withCredentials:!0})];case 1:return e=n.sent(),t=e.data,fe(t.idTypes),je(t.estimatedConsumption),[3,3];case 2:return r=n.sent(),console.error("Error fetching data:",r),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[]);var Ne=function(){var e=(0,n.Z)((function(e){var r,n,a,i,l,o,c,d;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:if(e.preventDefault(),!X&&"member"===Q)return alert("Signature image is missing. Please save the signature first."),[2];Be(!0),r={email:_},s.label=1;case 1:return s.trys.push([1,8,9,10]),[4,x.Z.post("".concat("http://3.83.33.251:5000","/api/protected/check_email"),r,{headers:{Authorization:"Bearer ".concat(_e)},withCredentials:!0})];case 2:return 204===s.sent().status?(q("Email already exists"),window.scrollTo({top:0,behavior:"smooth"}),Be(!1),[2]):(n={firstName:t,lastName:u,email:_,phone:I,preferredName:M,dateOfBirth:U,idOrPassportNumber:V,userRole:Q,gender:ee,subscribeToNewsletter:ie,receiveUpdates:ne,nationality:be,agreement:ue,idType:he,consumption:we},[4,x.Z.post("".concat("http://3.83.33.251:5000","/api/protected/register"),n,{headers:{Authorization:"Bearer ".concat(_e)},withCredentials:!0})]);case 3:return a=s.sent(),i=a.data.id,201!==a.status?[3,6]:X?(l=new FormData,o=Ae(X),l.append("upload",o,"signature.png"),[4,x.Z.post("".concat("http://3.83.33.251:5000","/api/upload/signature/").concat(i),l,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(_e)},withCredentials:!0})]):[3,5];case 4:s.sent(),s.label=5;case 5:return console.log("Account created successfully:",a.data),c=a.data.memberCode,N().push("/members/profile/".concat(c)),[3,7];case 6:console.error("User creation failed:",a.data),s.label=7;case 7:return[3,10];case 8:return d=s.sent(),console.error("Error during account creation:",d),[3,10];case 9:return Be(!1),[7];case 10:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),Ae=function(e){for(var t=atob(e.split(",")[1]),r=e.split(",")[0].split(":")[1].split(";")[0],n=new ArrayBuffer(t.length),a=new Uint8Array(n),s=0;s<t.length;s++)a[s]=t.charCodeAt(s);return new Blob([n],{type:r})};return(0,i.jsx)(o.Z,{children:(0,i.jsx)(m.ZP,{container:!0,spacing:6,children:(0,i.jsx)(m.ZP,{item:!0,xs:12,children:(0,i.jsxs)(Z.Z,{sx:{p:4},children:[(0,i.jsx)(v.Z,{title:"Add New Member",titleTypographyProps:{variant:"h6"}}),(0,i.jsx)(b.Z,{sx:{margin:0}}),(0,i.jsx)(y.Z,{children:ke?(0,i.jsx)(j.Z,{children:"Loading..."}):(0,i.jsxs)("form",{onSubmit:Ne,children:[(0,i.jsx)(m.ZP,{item:!0,xs:12,children:(0,i.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600,pb:4},children:"1. Account Details"})}),(0,i.jsxs)(m.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(f.Z,{fullWidth:!0,label:"First Name",placeholder:"John",value:t,onChange:function(e){return r(e.target.value)},required:!0})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(f.Z,{fullWidth:!0,label:"Last Name",placeholder:"Doe",value:u,onChange:function(e){return c(e.target.value)},required:!0})}),(0,i.jsxs)(m.ZP,{item:!0,xs:6,children:[(0,i.jsx)(f.Z,{fullWidth:!0,label:"Email",placeholder:"john@example.com",value:_,onChange:function(e){return A(e.target.value)},required:!0}),D&&(0,i.jsx)("div",{style:{color:"red"},children:D})]}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(f.Z,{fullWidth:!0,label:"Phone",type:"number",placeholder:"+1-123-456-8790",value:I,onChange:function(e){return T(e.target.value)},required:!0})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(f.Z,{fullWidth:!0,label:"Preferred Name",placeholder:"Johnny",value:M,onChange:function(e){return z(e.target.value)},required:!0})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(f.Z,{fullWidth:!0,label:"Date of Birth",type:"date",value:U,onChange:function(e){return F(e.target.value)},InputProps:{startAdornment:(0,i.jsx)(g.Z,{position:"start"})},required:!0})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsxs)(P.Z,{fullWidth:!0,children:[(0,i.jsx)(S.Z,{children:"Gender"}),(0,i.jsxs)(w.Z,{label:"Gender",value:ee,onChange:function(e){return te(e.target.value)},required:!0,children:[(0,i.jsx)(C.Z,{value:"male",children:"Male"}),(0,i.jsx)(C.Z,{value:"female",children:"Female"}),(0,i.jsx)(C.Z,{value:"other",children:"Other"})]})]})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(f.Z,{fullWidth:!0,label:"Nationality",placeholder:"Nationality",value:be,onChange:function(e){return ye(e.target.value)},required:!0})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsxs)(P.Z,{fullWidth:!0,children:[(0,i.jsx)(S.Z,{id:"form-layouts-separator-select-label",children:"ID Type"}),(0,i.jsx)(w.Z,{label:"Role",defaultValue:"ID",id:"form-layouts-separator-select",labelId:"form-layouts-separator-select-label",value:he,onChange:function(e){return pe(e.target.value)},required:!0,children:me.map((function(e,t){return(0,i.jsx)(C.Z,{value:e,children:e},t)}))})]})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(f.Z,{fullWidth:!0,label:"Please add your [ID] number here",placeholder:"Please add your [ID] number here",value:V,onChange:function(e){return G(e.target.value)},required:!0})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsxs)(P.Z,{fullWidth:!0,children:[(0,i.jsx)(S.Z,{id:"form-layouts-separator-select-label",children:"User Role"}),(0,i.jsxs)(w.Z,{label:"Role",defaultValue:"member",id:"form-layouts-separator-select",labelId:"form-layouts-separator-select-label",value:Q,onChange:function(e){return Y(e.target.value)},required:!0,children:[(0,i.jsx)(C.Z,{value:"member",children:"Member"}),(0,i.jsx)(C.Z,{value:"admin",children:"Admin"})]})]})}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsxs)(P.Z,{fullWidth:!0,children:[(0,i.jsx)(S.Z,{id:"form-layouts-separator-select-label",children:"What is your estimated consumption from Born High per month?"}),(0,i.jsx)(w.Z,{label:"Role",defaultValue:"20g",id:"form-layouts-separator-select",labelId:"form-layouts-separator-select-label",value:we,onChange:function(e){return Se(e.target.value)},required:!0,children:Ze.map((function(e,t){return(0,i.jsx)(C.Z,{value:e,children:e},t)}))})]})}),(0,i.jsx)(m.ZP,{item:!0,xs:12,children:(0,i.jsx)(b.Z,{sx:{marginBottom:0}})}),(0,i.jsxs)(m.ZP,{item:!0,xs:12,children:[(0,i.jsx)(j.Z,{variant:"body2",sx:{fontWeight:600,pb:2},children:"Signature"}),(0,i.jsx)(d,{onSignatureSave:function(e){H(e)}}),X&&(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Preview Signature:"}),(0,i.jsx)("img",{src:X,alt:"Signature Preview"})]})]}),(0,i.jsx)(m.ZP,{item:!0,xs:12,children:(0,i.jsx)(k.Z,{label:"Do you agree to the terms and conditions as set out by the user agreement?",control:(0,i.jsx)(B.Z,{name:"checkbox-agreement"}),checked:ue,onChange:function(){return ce(!ue)},sx:{"& .MuiButtonBase-root":{paddingTop:0,paddingBottom:0}}})}),(0,i.jsxs)(m.ZP,{item:!0,xs:12,children:[(0,i.jsx)(k.Z,{label:"I would like to be updated via whatsapp",control:(0,i.jsx)(B.Z,{name:"checkbox-whatsapp"}),checked:ne,onChange:function(){return ae(!ne)},sx:{"& .MuiButtonBase-root":{paddingTop:0,paddingBottom:0}}}),(0,i.jsx)(k.Z,{label:"I would like to sign up to the newsletter",control:(0,i.jsx)(B.Z,{name:"checkbox-newsletter"}),checked:ie,onChange:function(){return le(!ie)},sx:{"& .MuiButtonBase-root":{paddingTop:0,paddingBottom:0}}})]}),(0,i.jsx)(m.ZP,{item:!0,xs:6,children:(0,i.jsx)(p.Z,{size:"large",variant:"contained",sx:{marginBottom:7},type:"submit",children:"Create an account"})})]})]})})]})})})})})}},function(e){e.O(0,[2657,7709,8360,3678,1620,8682,7485,9774,2888,179],(function(){return t=76278,e(e.s=t);var t}));var t=e.O();_N_E=t}]);