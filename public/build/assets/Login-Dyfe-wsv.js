import{r as b,W as y,j as a,a as e,Y as v,G as C,b as u,l as w}from"./app-LP2nfF-O.js";import{s as j,t as F,u as I,r as L,G as n,e as _,a as q,B as t,T as d,F as B,b as m,I as D,c as S,V as k,P as A,d as P}from"./vendor-Cloz3j8S.js";import{d as T,a as W}from"./VisibilityOff-BrAgppgw.js";import{A as G}from"./App-B_vJWvOL.js";import{L as R}from"./LoadingButton-GREKY8hz.js";var c={},E=F;Object.defineProperty(c,"__esModule",{value:!0});var h=c.default=void 0,M=E(b()),H=j();h=c.default=(0,M.default)((0,H.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder");const V=()=>{I();const[i,p]=L.useState(!1),{data:l,setData:s,post:f,processing:g,errors:o}=y({email:"",password:"",remember:!1}),x=r=>{r.preventDefault(),f("/login",{})};return a(G,{children:[e(v,{title:"Login"}),e(t,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",p:2},children:e(n,{container:!0,spacing:2,justifyContent:"center",children:e(n,{item:!0,xs:12,md:8,lg:6,xl:5,children:e(_,{in:!0,children:e(C,{children:a(q,{children:[a(t,{textAlign:"center",children:[e(u,{style:{alignItems:"center",display:"inline-flex"},href:route("dashboard"),className:"mt-3 d-inline-block auth-logo",children:e("img",{src:w,alt:"Logo",height:"100"})}),e(d,{variant:"h5",color:"primary",children:"Welcome Back!"}),e(d,{variant:"body2",color:"text.secondary",children:"Sign in to continue"})]}),e(t,{mt:4,children:a("form",{onSubmit:x,children:[e(t,{mb:3,children:e(B,{fullWidth:!0,children:e(m,{label:"Email",variant:"outlined",type:"email",id:"email",name:"email",value:l.email,onChange:r=>s("email",r.target.value),required:!0,autoFocus:!0,fullWidth:!0,error:!!o.email,helperText:o.email})})}),a(t,{mb:3,children:[e(m,{fullWidth:!0,id:"password",label:"Password",type:i?"text":"password",value:l.password,onChange:r=>s("password",r.target.value),required:!0,error:!!o.password,helperText:o.password,InputProps:{endAdornment:e(D,{position:"end",children:e(S,{"aria-label":"toggle password visibility",onClick:()=>p(!i),onMouseDown:r=>r.preventDefault(),edge:"end",children:i?e(T,{}):e(W,{})})})}}),e(t,{display:"flex",justifyContent:"space-between",alignItems:"center",children:e(u,{href:route("password.request"),variant:"body2",color:"text.secondary",children:"Forgot your password?"})})]}),e(k,{control:e(A,{name:"remember",checked:l.remember,onChange:r=>s("remember",r.target.checked),color:"primary"}),label:"Remember me"}),e(t,{mt:4,children:e(R,{fullWidth:!0,variant:"outlined",color:"primary",type:"submit",loading:g,children:"Log in"})})]})})]})})})})})}),e(t,{sx:{left:0,right:0,bottom:10,position:"fixed"},children:e(P,{children:e(n,{container:!0,justifyContent:"center",children:e(n,{item:!0,xs:12,textAlign:"center",children:a(d,{sx:{bottom:0,display:"flex",justifyContent:"center"},color:"text.secondary",children:["© ",new Date().getFullYear()," Emam Hosen. Crafted with",e(h,{})]})})})})})]})};export{V as default};
