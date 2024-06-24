(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9572],{70767:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirm-email/[confirmCode]",function(){return t(74150)}])},15064:function(e,r,t){"use strict";var n=t(85893),i=t(90948),a=t(5616),o=(0,i.ZP)(a.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));r.Z=function(e){var r=e.children;return(0,n.jsx)(o,{className:"layout-wrapper",children:(0,n.jsx)(a.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:r})})}},74150:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return F}});var n=t(47568),i=t(97582),a=t(85893),o=t(67294),s=t(11163),c=t(5121),l=t(15064),u=t(63366),d=t(87462),f=t(63961),h=t(58510),m=t(70917),v=t(98216),p=t(71657),g=t(90948),k=t(1977),x=t(8027);function y(e){return(0,x.ZP)("MuiCircularProgress",e)}(0,k.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Z=["className","color","disableShrink","size","style","thickness","value","variant"];let w,S,b,C,P=e=>e;const _=44,N=(0,m.F4)(w||(w=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),j=(0,m.F4)(S||(S=P`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),E=(0,g.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,v.Z)(t.color)}`]]}})((({ownerState:e,theme:r})=>(0,d.Z)({display:"inline-block"},"determinate"===e.variant&&{transition:r.transitions.create("transform")},"inherit"!==e.color&&{color:(r.vars||r).palette[e.color].main})),(({ownerState:e})=>"indeterminate"===e.variant&&(0,m.iv)(b||(b=P`
      animation: ${0} 1.4s linear infinite;
    `),N))),D=(0,g.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),M=(0,g.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,v.Z)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((({ownerState:e,theme:r})=>(0,d.Z)({stroke:"currentColor"},"determinate"===e.variant&&{transition:r.transitions.create("stroke-dashoffset")},"indeterminate"===e.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink&&(0,m.iv)(C||(C=P`
      animation: ${0} 1.4s ease-in-out infinite;
    `),j)));var $=o.forwardRef((function(e,r){const t=(0,p.Z)({props:e,name:"MuiCircularProgress"}),{className:n,color:i="primary",disableShrink:o=!1,size:s=40,style:c,thickness:l=3.6,value:m=0,variant:g="indeterminate"}=t,k=(0,u.Z)(t,Z),x=(0,d.Z)({},t,{color:i,disableShrink:o,size:s,thickness:l,value:m,variant:g}),w=(e=>{const{classes:r,variant:t,color:n,disableShrink:i}=e,a={root:["root",t,`color${(0,v.Z)(n)}`],svg:["svg"],circle:["circle",`circle${(0,v.Z)(t)}`,i&&"circleDisableShrink"]};return(0,h.Z)(a,y,r)})(x),S={},b={},C={};if("determinate"===g){const e=2*Math.PI*((_-l)/2);S.strokeDasharray=e.toFixed(3),C["aria-valuenow"]=Math.round(m),S.strokeDashoffset=`${((100-m)/100*e).toFixed(3)}px`,b.transform="rotate(-90deg)"}return(0,a.jsx)(E,(0,d.Z)({className:(0,f.Z)(w.root,n),style:(0,d.Z)({width:s,height:s},b,c),ownerState:x,ref:r,role:"progressbar"},C,k,{children:(0,a.jsx)(D,{className:w.svg,ownerState:x,viewBox:"22 22 44 44",children:(0,a.jsx)(M,{className:w.circle,style:S,ownerState:x,cx:_,cy:_,r:(_-l)/2,fill:"none",strokeWidth:l})})}))})),R=t(15861),z=function(){var e=(0,s.useRouter)(),r=e.query.confirmCode;return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)((function(){var r,t,n;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:if(!(r=e.query.confirmCode))return console.error("confirmation code is missing."),[2];if(!r)return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,c.Z.get("".concat("http://3.83.33.251:5000","/api/confirm-email/").concat(r))];case 2:return t=i.sent(),console.log(t.data),"Email confirmed and password reset link sent"===t.data&&e.push("/login"),[3,4];case 3:return n=i.sent(),console.error("Error confirming email:",n),[3,4];case 4:return[2]}}))}));return function(){return r.apply(this,arguments)}}();r()}),[r,e]),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"80vh"},children:[(0,a.jsx)($,{size:40}),(0,a.jsx)(R.Z,{variant:"body1",style:{marginLeft:"10px"},children:"Confirming Email..."})]})};z.getLayout=function(e){return(0,a.jsx)(l.Z,{children:e})};var F=z}},function(e){e.O(0,[9774,2888,179],(function(){return r=70767,e(e.s=r);var r}));var r=e.O();_N_E=r}]);