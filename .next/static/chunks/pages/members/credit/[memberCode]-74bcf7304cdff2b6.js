(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5335],{52511:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members/credit/[memberCode]",function(){return t(39088)}])},86078:function(e,r,t){"use strict";var n=t(47568),a=t(97582),s=t(85893),i=t(11163),c=t(67294),o=t(5121);r.Z=function(e){var r=e.children,t=(0,i.useRouter)();return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,r,n;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:if(!(e=sessionStorage.getItem("token")))return t.push("/login"),[2];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.Z.get("".concat("http://3.83.33.251:5000","/api/public/user-type"),{headers:{Authorization:"Bearer ".concat(e)},withCredentials:!0})];case 2:return r=a.sent(),console.log(r.data),"false"===r.data?t.push("/login"):"member"===r.data&&t.push("/user"),[3,4];case 3:return n=a.sent(),console.error("Error checking authentication:",n),t.push("/login"),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,s.jsx)(s.Fragment,{children:r})}},39088:function(e,r,t){"use strict";t.r(r);var n=t(47568),a=t(14924),s=t(97582),i=t(85893),c=t(67294),o=t(5121),l=t(11163),u=t(41664),d=t.n(u),h=t(86886),m=t(50135),x=t(94054),p=t(18360),f=t(47312),Z=t(22224),j=t(66242),g=t(15861),v=t(44267),b=t(69417),y=t(5616),C=t(90948),w=t(94429),P=t(86078),_=(0,C.ZP)("img")((function(e){var r=e.theme;return{width:150,height:150,marginRight:r.spacing(6.25),borderRadius:r.shape.borderRadius}})),B=((0,C.ZP)(b.Z)((function(e){var r=e.theme;return(0,a.Z)({},r.breakpoints.down("sm"),{width:"100%",textAlign:"center"})})),function(e){var r=new Date(e),t=new Date,n=t.getFullYear()-r.getFullYear(),a=t.getMonth()-r.getMonth();return a<0||0===a&&t.getDate()<r.getDate()?n-1:n});r.default=function(){var e=(0,c.useState)([]),r=e[0],t=e[1],a=(0,c.useState)("/images/avatars/1.png"),u=a[0],C=(a[1],(0,c.useState)(null)),D=C[0],S=C[1],k=(0,c.useState)(null),A=k[0],E=k[1],N=(0,c.useState)(""),I=N[0],T=N[1],z=(0,c.useState)(""),R=z[0],q=z[1],M=(0,c.useState)(""),W=M[0],O=M[1],F=(0,c.useState)(null),H=F[0],L=F[1],X=(0,l.useRouter)(),Y="undefined"!==typeof sessionStorage?sessionStorage.getItem("token"):null,G=function(){var e=(0,n.Z)((function(e){var r;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:e.preventDefault(),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,o.Z.post("".concat("http://3.83.33.251:5000","/api/protected/updateCredits"),{memberCode:A,amount:Number(I),comments:W,paidBy:R},{headers:{Authorization:"Bearer ".concat(Y)},withCredentials:!0})];case 2:return t.sent(),T(""),q(""),O(""),X.push("/dispense/".concat(A)),[3,4];case 3:return r=t.sent(),console.error("Error making donation:",r),L(r.response.data.error),[3,4];case 4:return[2]}}))}));return function(r){return e.apply(this,arguments)}}(),J=function(){var e=(0,n.Z)((function(){var e,r,n,a;return(0,s.__generator)(this,(function(s){switch(s.label){case 0:e=X.query.memberCode,r=e,console.log(r),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,o.Z.get("".concat("http://3.83.33.251:5000","/api/protected/creditTransactions"),{params:{memberId:r},headers:{Authorization:"Bearer ".concat(Y)},withCredentials:!0})];case 2:return(n=s.sent()).data&&n.data.length>0&&t(n.data),console.log(n.data),[3,4];case 3:return a=s.sent(),console.error("Error fetching transaction data:",a),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)((function(){var e,r,t;return(0,s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=X.query.memberCode,[4,o.Z.get("".concat("http://3.83.33.251:5000","/api/protected/members/").concat(e),{headers:{Authorization:"Bearer ".concat(Y)},withCredentials:!0})];case 1:return(r=n.sent()).data&&r.data.length>0&&(S(r.data[0]),E(e)),[3,3];case 2:return t=n.sent(),console.error("Error fetching member data:",t),[3,3];case 3:return[2]}}))}));return function(){return e.apply(this,arguments)}}();e(),J()}),[X.query.memberCode]),D?H?(0,i.jsxs)("p",{children:["Error: ",H]}):(0,i.jsx)(P.Z,{children:(0,i.jsxs)(h.ZP,{container:!0,spacing:6,children:[(0,i.jsx)(h.ZP,{item:!0,xs:12,children:(0,i.jsx)(j.Z,{sx:{p:5},children:(0,i.jsx)(v.Z,{children:(0,i.jsxs)(h.ZP,{container:!0,spacing:5,children:[(0,i.jsx)(h.ZP,{item:!0,xs:12,children:(0,i.jsx)(g.Z,{variant:"h5",children:"Make a donation"})}),(0,i.jsx)(h.ZP,{item:!0,xs:6,sx:{marginTop:4.8,marginBottom:10},children:(0,i.jsxs)(y.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(_,{src:u,alt:"Profile Pic"}),(0,i.jsxs)(y.Z,{children:[(0,i.jsxs)(g.Z,{variant:"h6",children:[D.firstName," ",D.lastName]}),(0,i.jsxs)(g.Z,{variant:"subtitle1",children:["Credits: ",D.credits]}),(0,i.jsxs)(g.Z,{variant:"body2",children:[B(D.dateOfBirth)," y.o"]})]})]})}),(0,i.jsx)(h.ZP,{item:!0,xs:6,sx:{marginTop:4.8,marginBottom:3},children:(0,i.jsx)(y.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,i.jsx)(d(),{href:"/members/profile/".concat(A),passHref:!0,children:(0,i.jsx)(b.Z,{size:"large",variant:"outlined",color:"error",children:"Cancel"})})})}),(0,i.jsx)(h.ZP,{item:!0,sm:12,children:(0,i.jsxs)("form",{onSubmit:G,style:{display:"flex",gap:"1em",flexWrap:"wrap"},children:[(0,i.jsx)(h.ZP,{item:!0,xs:12,sm:4,children:(0,i.jsx)(m.Z,{fullWidth:!0,label:"Amount",placeholder:"Amount",type:"number",value:I,onChange:function(e){return T(e.target.value)},required:!0})}),(0,i.jsx)(h.ZP,{item:!0,xs:12,sm:4,children:(0,i.jsxs)(x.Z,{fullWidth:!0,children:[(0,i.jsx)(f.Z,{children:"Paid by"}),(0,i.jsxs)(p.Z,{label:"Paid By",value:R,onChange:function(e){return q(e.target.value)},required:!0,children:[(0,i.jsx)(Z.Z,{value:"Cash",children:"Cash"}),(0,i.jsx)(Z.Z,{value:"Card",children:"Card"})]})]})}),(0,i.jsx)(h.ZP,{item:!0,xs:8,children:(0,i.jsx)(m.Z,{fullWidth:!0,label:"Comment",placeholder:"Comment",multiline:!0,value:W,sx:{"& .MuiOutlinedInput-root":{alignItems:"baseline"}},minRows:3,onChange:function(e){return O(e.target.value)}})}),(0,i.jsx)(h.ZP,{item:!0,sm:12,children:(0,i.jsx)(b.Z,{size:"large",variant:"contained",sx:{marginBottom:7},type:"submit",children:"Make Donation"})})]})})]})})})}),(0,i.jsx)(h.ZP,{item:!0,xs:12,children:(0,i.jsx)(j.Z,{sx:{p:5},children:(0,i.jsxs)(v.Z,{children:[(0,i.jsx)(g.Z,{variant:"h5",children:"Donation History"}),(0,i.jsx)(w.Z,{data:r})]})})})]})}):(0,i.jsx)("p",{children:"Loading..."})}},94429:function(e,r,t){"use strict";var n=t(85893),a=(t(67294),t(41664),t(90629)),s=t(7906),i=t(53816),c=t(53184),o=t(295),l=t(98102),u=t(72882),d=function(e){if(!e||isNaN(new Date(e)))return"";return new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"numeric",day:"numeric"})};r.Z=function(e){var r=e.data;return r&&Array.isArray(r)&&0!==r.length?(0,n.jsx)(u.Z,{component:a.Z,children:(0,n.jsxs)(s.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,n.jsx)(c.Z,{children:(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(l.Z,{children:"ID"}),(0,n.jsx)(l.Z,{children:"Transaction Type"}),(0,n.jsx)(l.Z,{children:"Paid By"}),(0,n.jsx)(l.Z,{children:"Amount"}),(0,n.jsx)(l.Z,{children:"Credit Before"}),(0,n.jsx)(l.Z,{children:"Credit After"}),(0,n.jsx)(l.Z,{children:"Comments"}),(0,n.jsx)(l.Z,{children:"Created By"}),(0,n.jsx)(l.Z,{children:"Transaction Date"})]})}),(0,n.jsx)(o.Z,{children:r.map((function(e){return(0,n.jsxs)(i.Z,{component:"tr",sx:{cursor:"pointer",textDecoration:"none","&:hover":{backgroundColor:"#f5f5f5"},"&:first-of-type td, &:first-of-type th":{border:0}},children:[(0,n.jsx)(l.Z,{component:"th",scope:"row",children:e.transactionId}),(0,n.jsx)(l.Z,{children:e.transactionType}),(0,n.jsx)(l.Z,{children:e.paidBy}),(0,n.jsx)(l.Z,{children:e.amount}),(0,n.jsx)(l.Z,{children:e.creditBefore}),(0,n.jsx)(l.Z,{children:e.creditAfter}),(0,n.jsx)(l.Z,{children:e.comments}),(0,n.jsx)(l.Z,{children:e.createdBy}),(0,n.jsx)(l.Z,{children:d(e.transactionDate)})]},e.transactionId)}))})]})}):(0,n.jsx)("p",{children:"No data available."})}}},function(e){e.O(0,[2657,7709,8360,3678,9254,874,9774,2888,179],(function(){return r=52511,e(e.s=r);var r}));var r=e.O();_N_E=r}]);