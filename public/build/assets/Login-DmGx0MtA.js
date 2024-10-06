import{r as d,W as H,j as l,a as e,Y as L,G as S,b as x,l as P,g as $}from"./app-DmQz1dGO.js";import{v as u,q as c,u as q,r as I,G as s,e as M,a as E,B as t,T as i,d as N}from"./vendor-CaUsQwso.js";import{d as R,a as z}from"./VisibilityOff-DrDr085l.js";import{A as D}from"./App-DMAM_XZo.js";import{i as v}from"./chunk-IR2E3HZF-C61U1WHR.js";import"./useFormValidationState-BAF8a-iD.js";import"./useLabel-DPrBl2Q7.js";var m={},k=u;Object.defineProperty(m,"__esModule",{value:!0});var g=m.default=void 0,B=k(d()),F=c;g=m.default=(0,B.default)((0,F.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"}),"Email");var h={},G=u;Object.defineProperty(h,"__esModule",{value:!0});var b=h.default=void 0,A=G(d()),W=c;b=h.default=(0,A.default)((0,W.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder");var p={},O=u;Object.defineProperty(p,"__esModule",{value:!0});var y=p.default=void 0,T=O(d()),V=c;y=p.default=(0,T.default)((0,V.jsx)("path",{d:"M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48 1.3-.75-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7 4 8.47 3.15 7l-1.3.75.85 1.47H1v1.5h1.7l-.85 1.48zm6.7-.75 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H15v-1.5h-1.7l.85-1.47-1.3-.75L12 8.47 11.15 7l-1.3.75.85 1.47H9v1.5h1.7zM23 9.22h-1.7l.85-1.47-1.3-.75L20 8.47 19.15 7l-1.3.75.85 1.47H17v1.5h1.7l-.85 1.48 1.3.75.85-1.48.85 1.48 1.3-.75-.85-1.48H23z"}),"Password");const ee=()=>{q();const[o,C]=I.useState(!1),{data:f,setData:n,post:_,processing:w,errors:r}=H({email:"",password:"",remember:!1}),j=a=>{a.preventDefault(),_("/login",{})};return console.log(r),l(D,{children:[e(L,{title:"Login"}),e(t,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",p:2},children:e(s,{container:!0,spacing:2,justifyContent:"center",children:e(s,{item:!0,xs:12,md:8,lg:6,xl:5,children:e(M,{in:!0,children:e(S,{children:l(E,{children:[l(t,{textAlign:"center",children:[e(x,{style:{alignItems:"center",display:"inline-flex"},href:route("dashboard"),className:"d-inline-block auth-logo",children:e("img",{src:P,alt:"Logo",className:"h-24 md:h-40 sm:h-40 xs:h-10"})}),e(i,{color:"primary",sx:{fontSize:{xs:"0.750rem",sm:"1.0rem",md:"1.25rem"}},children:"Welcome Back!"}),e(i,{color:"text.secondary",sx:{fontSize:{xs:"0.75rem",sm:"0.875rem",md:"1rem"}},children:"Sign in to continue"})]}),e(t,{mt:4,children:l("form",{onSubmit:j,children:[e(t,{mb:4,children:e(v,{isClearable:!0,type:"email",label:"Email",variant:"bordered",id:"email",name:"email",value:f.email,onChange:a=>{n("email",a.target.value)},onClear:()=>n("email",""),required:!0,autoFocus:!0,fullWidth:!0,isInvalid:!!r.email,errorMessage:r.email,placeholder:"you@example.com",labelPlacement:"outside",startContent:e(g,{className:"text-2xl text-default-400 pointer-events-none flex-shrink-0"})})}),e(t,{mb:4,children:e(v,{label:"Password",variant:"bordered",placeholder:"Enter your password",startContent:e(y,{className:"text-2xl text-default-400 pointer-events-none flex-shrink-0"}),endContent:e("button",{className:"focus:outline-none",type:"button",onClick:()=>C(!o),"aria-label":"toggle password visibility",children:o?e(R,{className:"text-2xl text-default-400 pointer-events-none"}):e(z,{className:"text-2xl text-default-400 pointer-events-none"})}),type:o?"text":"password",value:f.password,onChange:a=>n("password",a.target.value),required:!0,isInvalid:!!r.password,errorMessage:r.password,labelPlacement:"outside"})}),e(t,{children:e($,{fullWidth:!0,variant:"bordered",type:"submit",color:"primary",isLoading:w,children:"Login"})}),e(t,{display:"flex",justifyContent:"center",alignItems:"center",mt:2,children:e(x,{href:route("password.request"),className:"text-sm mx-auto text-primary",children:"Forgot password?"})})]})})]})})})})})}),e(t,{sx:{left:0,right:0,bottom:10,position:"fixed"},children:e(N,{children:e(s,{container:!0,justifyContent:"center",children:e(s,{item:!0,xs:12,textAlign:"center",children:l(i,{sx:{bottom:0,display:"flex",justifyContent:"center"},color:"text.secondary",children:["© ",new Date().getFullYear()," Emam Hosen. Crafted with",e(b,{})]})})})})})]})};export{ee as default};
