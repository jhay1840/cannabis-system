(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{75557:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(23486)}])},23486:function(t,e,r){"use strict";r.r(e);var n=r(47568),a=r(97582),s=r(85893),i=r(67294),c=r(5121),o=r(41664),u=r.n(o),d=r(86886),l=r(15861),h=r(66242),g=r(44267),p=r(69417),f=r(90948),x=r(2734),m=(r(56077),r(86078)),v=r(61238),Z=r(73119),w=r(64895),S=(0,f.ZP)("img")({right:0,bottom:0,height:170,position:"absolute"}),j=(0,f.ZP)("img")({right:36,bottom:20,height:98,position:"absolute"});e.default=function(){var t=(0,i.useState)([]),e=t[0],r=t[1],o=(0,i.useState)([]),f=o[0],y=o[1],_=(0,i.useState)(function(){var t=new Date,e=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return"".concat(e,"-").concat(r,"-").concat(n)}()),D=_[0],b=(_[1],(0,i.useState)("")),E=b[0],P=b[1],k=(0,i.useState)(""),I=(k[0],k[1],(0,i.useState)("")),O=I[0],N=I[1],T=(0,i.useState)(!0),C=T[0],z=T[1],A=(0,i.useState)(null),B=(A[0],A[1]),F=(0,i.useState)(""),Q=F[0],X=F[1],H="light"===(0,x.Z)().palette.mode?"triangle-light.png":"triangle-dark.png",L="undefined"!==typeof sessionStorage?sessionStorage.getItem("token"):null;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)((function(){var t,e;return(0,a.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,3,4]),z(!0),[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/protected/overview"),{headers:{Authorization:"Bearer ".concat(L)},withCredentials:!0})];case 1:return t=r.sent(),y(t.data),[3,4];case 2:return e=r.sent(),console.error("Error fetching overview data:",e),B("Failed to fetch overview data."),[3,4];case 3:return z(!1),[7];case 4:return[2]}}))}));return function(){return t.apply(this,arguments)}}(),e=function(){var t=(0,n.Z)((function(){var t,e,n,s,i,o,u,d,l,h,g,p;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),X("N/A"),N("/products"),P("0"),t=new Date(D),e=(7-t.getDay())%7,n=new Date(t.getTime()+24*e*60*60*1e3),s=n.toISOString().split("T")[0],(i=new Date(D)).setDate(i.getDate()-(i.getDay()+6)%7-42),o=i.toISOString().split("T")[0],[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/protected/reports"),{headers:{Authorization:"Bearer ".concat(L)},params:{startDate:o,endDate:s},withCredentials:!0})];case 1:return u=a.sent(),r(u.data),d={},u.data.forEach((function(t){var e=t.startOfDayQty-t.endOfDayQty;d[t.productId]||(d[t.productId]={id:t.productId,name:t.name,usage:0}),d[t.productId].usage+=e})),(l=Object.values(d)).sort((function(t,e){return e.usage-t.usage})),h=l[0],g=l.reduce((function(t,e){return e===h?t+e.usage:t}),0),X(h.name),N(h.id),P(g.toFixed(0)),[3,3];case 2:return p=a.sent(),console.error("Error fetching barData:",p),[3,3];case 3:return[2]}}))}));return function(){return t.apply(this,arguments)}}();e(),t()}),[D]),C?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsx)(m.Z,{children:(0,s.jsx)(w.Z,{children:(0,s.jsxs)(d.ZP,{container:!0,spacing:6,children:[(0,s.jsx)(d.ZP,{item:!0,xs:12,md:4,children:(0,s.jsx)(h.Z,{sx:{position:"relative"},children:(0,s.jsxs)(g.Z,{children:[(0,s.jsxs)(l.Z,{variant:"h6",children:[Q," \ud83e\udd73"]}),(0,s.jsx)(l.Z,{variant:"body2",sx:{letterSpacing:"0.25px"},children:"Best seller for the past few weeks"}),(0,s.jsxs)(l.Z,{variant:"h5",sx:{my:4,color:"primary.main"},children:[E," gr"]}),(0,s.jsx)(u(),{href:"/products/".concat(O),passHref:!0,children:(0,s.jsx)(p.Z,{size:"small",variant:"contained",children:"View Product"})}),(0,s.jsx)(S,{alt:"triangle background",src:"/images/misc/".concat(H)}),(0,s.jsx)(j,{alt:"trophy",src:"/images/misc/trophy.png"})]})})}),(0,s.jsx)(d.ZP,{item:!0,xs:12,md:8,children:(0,s.jsx)(Z.Z,{data:f})}),(0,s.jsx)(d.ZP,{item:!0,xs:12,children:(0,s.jsx)(v.Z,{data:e,closeDate:D})})]})})})}}},function(t){t.O(0,[2657,1181,8545,7622,9774,2888,179],(function(){return e=75557,t(t.s=e);var e}));var e=t.O();_N_E=e}]);