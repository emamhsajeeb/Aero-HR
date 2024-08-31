import{W as I,j as t,a as e,Y as _,b as g}from"./app-B9rziZni.js";import{r as k,G as n,T as o,e as B,C as E,a as T,B as a,b as l,I as f,c as x,f as W,d as j}from"./vendor-B94fZjj7.js";import{d as w,a as b}from"./VisibilityOff-Ckq7G1GL.js";import{l as R,A as D}from"./App-Bkemlx0v.js";function N(c){var m,u;const{data:s,setData:d,post:y,processing:v,errors:i,reset:C}=I({name:"",email:"",password:"",password_confirmation:""});k.useEffect(()=>()=>{C("password","password_confirmation")},[]);const A=r=>{r.preventDefault(),y(route("register"))},p=r=>{const h=document.getElementById(r);h.type=h.type==="password"?"text":"password"};return t(D,{children:[e(_,{title:"Register"}),e(a,{sx:{display:"flex",justifyContent:"center",p:2},children:t(n,{container:!0,spacing:2,justifyContent:"center",children:[t(n,{item:!0,xs:12,textAlign:"center",children:[e(g,{style:{alignItems:"center",display:"inline-flex"},href:route("dashboard"),className:"mt-3 d-inline-block auth-logo",children:e("img",{src:R,alt:"Logo",height:"100"})}),e(o,{variant:"h6",className:"mt-3",color:"text.secondary",children:"Daily Task Management"})]}),e(n,{item:!0,xs:12,md:8,lg:6,xl:5,children:e(B,{in:!0,children:e(E,{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:"rgba(17, 25, 40, 0.5)",border:"1px solid rgba(255, 255, 255, 0.125)",p:"20px",display:"flex",flexDirection:"column",position:"relative",borderRadius:"20px",minWidth:"0px",wordWrap:"break-word",bg:mode("#ffffff","navy.800")(c),boxShadow:mode("14px 17px 40px 4px rgba(112, 144, 176, 0.08)","unset")(c),backgroundClip:"border-box"},children:t(T,{children:[t(a,{textAlign:"center",children:[e(o,{variant:"h5",color:"primary",textAlign:"center",children:"Register"}),e(o,{variant:"body2",color:"text.secondary",textAlign:"center",children:"Access to our dashboard"})]}),t(a,{mt:4,children:[t("form",{onSubmit:A,children:[e(a,{mb:3,children:e(l,{label:"Email",variant:"outlined",type:"email",id:"email",name:"email",value:s.email,onChange:r=>d("email",r.target.value),required:!0,fullWidth:!0,error:!!i.email,helperText:i.email})}),e(a,{mb:3,children:e(l,{label:"Password",variant:"outlined",type:"password",id:"password",name:"password",value:s.password,onChange:r=>d("password",r.target.value),required:!0,fullWidth:!0,error:!!i.password,helperText:i.password,InputProps:{endAdornment:e(f,{position:"end",children:e(x,{"aria-label":"toggle password visibility",onClick:()=>p("password"),children:((m=document.getElementById("password"))==null?void 0:m.type)==="password"?e(w,{}):e(b,{})})})}})}),e(a,{mb:3,children:e(l,{label:"Repeat Password",variant:"outlined",type:"password",id:"repeat-password",name:"password_confirmation",value:s.password_confirmation,onChange:r=>d("password_confirmation",r.target.value),required:!0,fullWidth:!0,error:!!i.password_confirmation,helperText:i.password_confirmation,InputProps:{endAdornment:e(f,{position:"end",children:e(x,{"aria-label":"toggle password visibility",onClick:()=>p("repeat-password"),children:((u=document.getElementById("repeat-password"))==null?void 0:u.type)==="password"?e(w,{}):e(b,{})})})}})}),e(a,{mt:4,children:e(W,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",disabled:v,children:"Register"})})]}),e(a,{mt:3,textAlign:"center",children:t(o,{variant:"body2",children:["Already have an account? ",e(g,{href:"/login",children:"Login"})]})})]})]})})})})]})}),e("footer",{children:e(j,{children:e(n,{container:!0,justifyContent:"center",children:e(n,{item:!0,xs:12,textAlign:"center",children:t(o,{variant:"body2",color:"text.secondary",children:["© ",new Date().getFullYear()," Emam Hosen. Crafted with ",e("i",{className:"mdi mdi-heart text-danger"})]})})})})})]})}export{N as default};
