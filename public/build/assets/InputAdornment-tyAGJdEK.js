import{g as y,f as C,s as I,_ as c,u as A,h as j,j as L,F as z,k as R,T as F,m,n as T}from"./App-Kc2xTeD7.js";import{r as b,c as a}from"./app-Dc6aPoa1.js";function _(n){return C("MuiInputAdornment",n)}const f=y("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var g;const $=["children","className","component","disablePointerEvents","disableTypography","position","variant"],M=(n,t)=>{const{ownerState:e}=n;return[t.root,t[`position${m(e.position)}`],e.disablePointerEvents===!0&&t.disablePointerEvents,t[e.variant]]},N=n=>{const{classes:t,disablePointerEvents:e,hiddenLabel:o,position:s,size:r,variant:l}=n,d={root:["root",e&&"disablePointerEvents",s&&`position${m(s)}`,l,o&&"hiddenLabel",r&&`size${m(r)}`]};return T(d,_,t)},U=I("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:M})(({theme:n,ownerState:t})=>c({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(n.vars||n).palette.action.active},t.variant==="filled"&&{[`&.${f.positionStart}&:not(.${f.hiddenLabel})`]:{marginTop:16}},t.position==="start"&&{marginRight:8},t.position==="end"&&{marginLeft:8},t.disablePointerEvents===!0&&{pointerEvents:"none"})),k=b.forwardRef(function(t,e){const o=A({props:t,name:"MuiInputAdornment"}),{children:s,className:r,component:l="div",disablePointerEvents:d=!1,disableTypography:x=!1,position:u,variant:v}=o,E=j(o,$),i=L()||{};let p=v;v&&i.variant,i&&!p&&(p=i.variant);const h=c({},o,{hiddenLabel:i.hiddenLabel,size:i.size,disablePointerEvents:d,position:u,variant:p}),P=N(h);return a.jsx(z.Provider,{value:null,children:a.jsx(U,c({as:l,ownerState:h,className:R(P.root,r),ref:e},E,{children:typeof s=="string"&&!x?a.jsx(F,{color:"text.secondary",children:s}):a.jsxs(b.Fragment,{children:[u==="start"?g||(g=a.jsx("span",{className:"notranslate",children:"​"})):null,s]})}))})});export{k as I};
