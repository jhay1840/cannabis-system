(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3977],{46408:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/products/edit/[productCode]",function(){return r(37172)}])},86078:function(e,t,r){"use strict";var n=r(47568),a=r(97582),i=r(85893),s=r(11163),c=r(67294),u=r(5121);t.Z=function(e){var t=e.children,r=(0,s.useRouter)();return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,t,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(!(e=sessionStorage.getItem("token")))return r.push("/login"),[2];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,u.Z.get("".concat("http://localhost:5000","/api/public/user-type"),{headers:{Authorization:"Bearer ".concat(e)},withCredentials:!0})];case 2:return t=a.sent(),console.log(t.data),"false"===t.data?r.push("/login"):"member"===t.data&&r.push("/user"),[3,4];case 3:return n=a.sent(),console.error("Error checking authentication:",n),r.push("/login"),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,i.jsx)(i.Fragment,{children:t})}},37172:function(e,t,r){"use strict";r.r(t);var n=r(47568),a=r(14924),i=r(97582),s=r(85893),c=r(67294),u=r(86078),l=r(87536),o=r(5121),d=r(41664),h=r.n(d),p=r(11163),g=r(86886),f=r(50135),m=r(66242),x=r(15861),v=r(78445),Z=r(67720),j=r(44267),b=r(69417),P=r(94054),y=r(18360),C=r(47312),S=r(22224),w=r(90948),_=r(5616),I=(0,w.ZP)(b.Z)((function(e){var t=e.theme;return(0,a.Z)({},t.breakpoints.down("sm"),{width:"100%",textAlign:"center"})})),B=(0,w.ZP)("img")((function(e){var t=e.theme;return{width:120,height:120,marginRight:t.spacing(6.25),borderRadius:t.shape.borderRadius}})),R=(0,w.ZP)(b.Z)((function(e){var t=e.theme;return(0,a.Z)({marginLeft:t.spacing(4.5)},t.breakpoints.down("sm"),{width:"100%",marginLeft:0,textAlign:"center",marginTop:t.spacing(4)})}));t.default=function(){var e=(0,c.useState)(""),t=e[0],r=e[1],a=(0,c.useState)(""),d=a[0],w=a[1],T=(0,c.useState)(""),A=T[0],D=T[1],E=(0,c.useState)(""),W=E[0],k=E[1],N=(0,c.useState)(""),L=N[0],z=N[1],H=(0,c.useState)(""),U=H[0],q=H[1],F=(0,c.useState)(""),M=F[0],O=F[1],G=(0,c.useState)(""),V=G[0],X=G[1],J=(0,c.useState)(""),K=J[0],Q=J[1],Y=(0,c.useState)(""),$=Y[0],ee=Y[1],te=(0,c.useState)(""),re=te[0],ne=te[1],ae=(0,c.useState)(""),ie=ae[0],se=ae[1],ce=(0,c.useState)("first"),ue=ce[0],le=ce[1],oe=(0,c.useState)(""),de=oe[0],he=oe[1],pe=(0,c.useState)(""),ge=pe[0],fe=pe[1],me=(0,c.useState)("/images/avatars/cannabis-product-default.jpg"),xe=me[0],ve=me[1],Ze=(0,c.useState)(null),je=Ze[0],be=Ze[1],Pe=(0,c.useState)(null),ye=Pe[0],Ce=Pe[1],Se=(0,p.useRouter)(),we="undefined"!==typeof sessionStorage?sessionStorage.getItem("token"):null,_e=function(){var e=(0,n.Z)((function(e){var t,r,n;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:(t=new FormData).append("productImage",e),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.Z.post("".concat("http://localhost:5000","/api/protected/upload/product/").concat(d),t,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(we)},withCredentials:!0})];case 2:return r=a.sent(),console.log(r.data),""==r.data?[2,""]:[2,r.data];case 3:return n=a.sent(),console.error(n),[3,4];case 4:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),Ie=function(){var e=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,_e(ie)];case 1:return t=e.sent(),le(""==t?"nochange":t),[3,3];case 2:return r=e.sent(),console.error(r),[3,3];case 3:return[2]}}))}));return function(t){return e.apply(this,arguments)}}(),Be=(0,l.cI)(),Re=(Be.register,Be.handleSubmit);Be.reset;return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,t,n;return(0,i.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),(e=Se.query.productCode)?(Ce(e),[4,o.Z.get("".concat("http://localhost:5000","/api/protected/cannabisProducts/").concat(e),{headers:{Authorization:"Bearer ".concat(we)},withCredentials:!0})]):[2];case 1:return(t=a.sent()).data&&(be(t.data),r(t.data._id),w(t.data.name),O(t.data.CBDpercent),X(t.data.CBNpercent),q(t.data.THCpercent),ne(t.data.category),fe(t.data.costPrice),Q(t.data.description),ee(t.data.medDescription),he(t.data.salePrice),z(t.data.sativaPercent),D(t.data.secondBreed),k(t.data.type),ve("string"===typeof(i=t.data.imageURL)?""===i?"/images/avatars/cannabis-product-default.jpg":i.replace(/\\/g,"/"):(console.error("Image URL must be a string."),null))),[3,3];case 2:return n=a.sent(),console.error("Error fetching product data:",n),[3,3];case 3:return[2]}var i}))}));return function(){return e.apply(this,arguments)}}();e()}),[Se.query.productCode]),(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e;return(0,i.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,5,,6]),"first"!==ue?[3,1]:(le(""),[3,4]);case 1:return"nochange"!==ue?[3,2]:(le(ye.imageURL),[3,4]);case 2:return[4,o.Z.post("".concat("http://localhost:5000","/api/protected/updateProduct"),{id:t,name:d,secondBreed:A,type:W,sativa:L,thc:U,cbd:M,cbn:V,description:K,medicalDescription:$,category:re,productImageUrl:ue,salePrice:de,costPrice:ge},{headers:{Authorization:"Bearer ".concat(we)},withCredentials:!0})];case 3:201===r.sent().status?Se.push("/products/".concat(ye)):console.error("Failed to add product"),r.label=4;case 4:return[3,6];case 5:return e=r.sent(),console.error(e),[3,6];case 6:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[ue]),je?(0,s.jsx)(u.Z,{children:(0,s.jsx)(g.ZP,{container:!0,spacing:6,children:(0,s.jsx)(g.ZP,{item:!0,xs:12,children:(0,s.jsxs)(m.Z,{sx:{p:4},children:[(0,s.jsx)(v.Z,{title:"Edit Product",titleTypographyProps:{variant:"h6"}}),(0,s.jsx)(Z.Z,{sx:{margin:0}}),(0,s.jsxs)(j.Z,{children:[(0,s.jsxs)(_.Z,{sx:{display:"flex",alignItems:"center",pb:5},children:[(0,s.jsx)(B,{src:xe,alt:"Profile Pic"}),(0,s.jsxs)(_.Z,{children:[(0,s.jsxs)(I,{component:"label",variant:"outlined",htmlFor:"new-product-upload-image",children:["Upload Product Image",(0,s.jsx)("input",{hidden:!0,type:"file",onChange:function(e){var t=new FileReader,r=e.target.files;r&&0!==r.length&&(t.onload=function(){return ve(t.result)},t.readAsDataURL(r[0]),se(r[0]))},accept:"image/png, image/jpeg",id:"new-product-upload-image",name:"productImage"})]}),(0,s.jsx)(R,{color:"error",variant:"outlined",onClick:function(){return ve("/images/avatars/cannabis-product-default.jpg")},children:"Reset"}),(0,s.jsx)(x.Z,{variant:"body2",sx:{marginTop:5},children:"Allowed PNG or JPEG"})]})]}),(0,s.jsx)("form",{onSubmit:Re(Ie),children:(0,s.jsxs)(g.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"Name",placeholder:"Product name",value:d,onChange:function(e){return w(e.target.value)},required:!0})}),(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"Second Breed",placeholder:"Second Breed",value:A,onChange:function(e){return D(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsxs)(P.Z,{fullWidth:!0,children:[(0,s.jsx)(C.Z,{children:"Type"}),(0,s.jsxs)(y.Z,{label:"Type",value:W,onChange:function(e){return k(e.target.value)},required:!0,children:[(0,s.jsx)(S.Z,{value:"Indica",children:"Indica"}),(0,s.jsx)(S.Z,{value:"Sativa",children:"Sativa"}),(0,s.jsx)(S.Z,{value:"Hybrid",children:"Hybrid"})]})]})}),(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsxs)(P.Z,{fullWidth:!0,children:[(0,s.jsx)(C.Z,{children:"Category"}),(0,s.jsxs)(y.Z,{label:"Type",value:re,onChange:function(e){return ne(e.target.value)},required:!0,children:[(0,s.jsx)(S.Z,{value:"test",children:"test"}),(0,s.jsx)(S.Z,{value:"test2",children:"tes2"}),(0,s.jsx)(S.Z,{value:"test3",children:"test3"})]})]})}),(0,s.jsx)(g.ZP,{item:!0,xs:3,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"% SATIVA",placeholder:"% SATIVA",type:"number",value:L,onChange:function(e){return z(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:3,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"% THC",placeholder:"% THC",type:"number",value:U,onChange:function(e){return q(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:3,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"% CBD",placeholder:"% CBD",type:"number",value:M,onChange:function(e){return O(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:3,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"% CBN",placeholder:"% CBN",type:"number",value:V,onChange:function(e){return X(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"Description",placeholder:"Description",multiline:!0,value:K,sx:{"& .MuiOutlinedInput-root":{alignItems:"baseline"}},minRows:3,onChange:function(e){return Q(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"Medical Description",placeholder:"Medical Description",multiline:!0,value:$,sx:{"& .MuiOutlinedInput-root":{alignItems:"baseline"}},minRows:3,onChange:function(e){return ee(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"Sale Price",placeholder:"Sale Price",type:"number",value:de,onChange:function(e){return he(e.target.value)}})}),(0,s.jsx)(g.ZP,{item:!0,xs:6,children:(0,s.jsx)(f.Z,{fullWidth:!0,label:"Cost Price",placeholder:"Cost Price",type:"number",value:ge,onChange:function(e){return fe(e.target.value)}})}),(0,s.jsxs)(g.ZP,{item:!0,xs:12,children:[(0,s.jsx)(b.Z,{size:"large",variant:"contained",sx:{marginBottom:7,marginRight:2},type:"submit",children:"Save Changes"}),(0,s.jsx)(h(),{href:"/products/".concat(ye),passHref:!0,children:(0,s.jsx)(b.Z,{size:"large",variant:"outlined",sx:{marginBottom:7},type:"submit",children:"Discard Changes"})})]})]})})]})]})})})}):(0,s.jsx)("p",{children:"Loading..."})}}},function(e){e.O(0,[2657,7709,8360,3678,7364,1117,9774,2888,179],(function(){return t=46408,e(e.s=t);var t}));var t=e.O();_N_E=t}]);