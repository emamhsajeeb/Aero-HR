import{W as h,j as s,a as r,Y as w}from"./app-B9rziZni.js";import{r as i,B as a,G as o,T as d,C as x,a as y,b as C,I as b,c as g,d as v}from"./vendor-B94fZjj7.js";import{d as P,a as j}from"./VisibilityOff-Ckq7G1GL.js";import{A}from"./App-Bkemlx0v.js";import{L as T}from"./LoadingButton-KJsHQzfX.js";function G(){const[t,l]=i.useState(!1),{data:c,setData:p,post:u,processing:m,errors:n,reset:f}=h({password:""});return i.useEffect(()=>()=>{f("password")},[]),s(A,{children:[r(w,{title:"Confirm Password"}),r(v,{maxWidth:"sm",children:r(a,{sx:{display:"flex",justifyContent:"center",p:2},children:s(o,{container:!0,spacing:2,justifyContent:"center",children:[s(o,{item:!0,xs:12,textAlign:"center",children:[r(d,{variant:"h5",color:"primary",children:"Confirm Password"}),r(d,{variant:"body2",color:"text.secondary",className:"mb-4",children:"This is a secure area of the application. Please confirm your password before continuing."})]}),r(o,{item:!0,xs:12,children:r(x,{children:r(y,{children:s("form",{onSubmit:e=>{e.preventDefault(),u(route("password.confirm"))},children:[r(a,{mb:3,children:r(C,{label:"Password",variant:"outlined",type:t?"text":"password",id:"password",name:"password",value:c.password,onChange:e=>p("password",e.target.value),required:!0,fullWidth:!0,error:!!n.password,helperText:n.password,InputProps:{endAdornment:r(b,{position:"end",children:r(g,{"aria-label":"toggle password visibility",onClick:()=>l(!t),onMouseDown:e=>e.preventDefault(),edge:"end",children:t?r(P,{}):r(j,{})})})}})}),r(a,{mt:4,display:"flex",justifyContent:"flex-end",children:r(T,{variant:"contained",color:"primary",type:"submit",loading:m,children:"Confirm"})})]})})})})]})})})]})}export{G as default};
