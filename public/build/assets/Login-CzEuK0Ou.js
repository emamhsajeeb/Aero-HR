import{W as b,j as a,a as e,Y as y,b as u}from"./app-DAwfjGjc.js";import{i as v,j as C,v as w,r as j,G as n,e as F,a as I,B as t,T as d,F as L,b as m,I as _,c as B,w as D,x as S,d as k}from"./vendor-B94fZjj7.js";import{d as q,a as A}from"./VisibilityOff-BUXfBHML.js";import{r as T,G as W,l as E,A as G}from"./App-C7zh6FW_.js";import{L as P}from"./LoadingButton-KJsHQzfX.js";var c={},R=v;Object.defineProperty(c,"__esModule",{value:!0});var h=c.default=void 0,M=R(T()),H=C;h=c.default=(0,M.default)((0,H.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"}),"FavoriteBorder");const J=()=>{w();const[i,p]=j.useState(!1),{data:l,setData:s,post:f,processing:g,errors:o}=b({email:"",password:"",remember:!1}),x=r=>{r.preventDefault(),f("/login",{})};return a(G,{children:[e(y,{title:"Login"}),e(t,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",p:2},children:e(n,{container:!0,spacing:2,justifyContent:"center",children:e(n,{item:!0,xs:12,md:8,lg:6,xl:5,children:e(F,{in:!0,children:e(W,{children:a(I,{children:[a(t,{textAlign:"center",children:[e(u,{style:{alignItems:"center",display:"inline-flex"},href:route("dashboard"),className:"mt-3 d-inline-block auth-logo",children:e("img",{src:E,alt:"Logo",height:"100"})}),e(d,{variant:"h5",color:"primary",children:"Welcome Back!"}),e(d,{variant:"body2",color:"text.secondary",children:"Sign in to continue"})]}),e(t,{mt:4,children:a("form",{onSubmit:x,children:[e(t,{mb:3,children:e(L,{fullWidth:!0,children:e(m,{label:"Email",variant:"outlined",type:"email",id:"email",name:"email",value:l.email,onChange:r=>s("email",r.target.value),required:!0,autoFocus:!0,fullWidth:!0,error:!!o.email,helperText:o.email})})}),a(t,{mb:3,children:[e(m,{fullWidth:!0,id:"password",label:"Password",type:i?"text":"password",value:l.password,onChange:r=>s("password",r.target.value),required:!0,error:!!o.password,helperText:o.password,InputProps:{endAdornment:e(_,{position:"end",children:e(B,{"aria-label":"toggle password visibility",onClick:()=>p(!i),onMouseDown:r=>r.preventDefault(),edge:"end",children:i?e(q,{}):e(A,{})})})}}),e(t,{display:"flex",justifyContent:"space-between",alignItems:"center",children:e(u,{href:route("password.request"),variant:"body2",color:"text.secondary",children:"Forgot your password?"})})]}),e(D,{control:e(S,{name:"remember",checked:l.remember,onChange:r=>s("remember",r.target.checked),color:"primary"}),label:"Remember me"}),e(t,{mt:4,children:e(P,{fullWidth:!0,variant:"outlined",color:"primary",type:"submit",loading:g,children:"Log in"})})]})})]})})})})})}),e(t,{sx:{left:0,right:0,bottom:10,position:"fixed"},children:e(k,{children:e(n,{container:!0,justifyContent:"center",children:e(n,{item:!0,xs:12,textAlign:"center",children:a(d,{sx:{bottom:0,display:"flex",justifyContent:"center"},color:"text.secondary",children:["© ",new Date().getFullYear()," Emam Hosen. Crafted with",e(h,{})]})})})})})]})};export{J as default};
