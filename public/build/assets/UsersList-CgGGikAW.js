import{a as e,j as i,b as C,B as x,F as p,Y as N,G as L}from"./app-BRB7VxQz.js";import{r as k,u as q,c as v,N as R,h as T,M as D,O as I,S as U,F as B,o as f,e as G,g as H,B as w,f as M,a as O}from"./vendor-DCms5gaY.js";import{A as W}from"./App-DCfbDYrf.js";import{E as z,D as V}from"./Edit-B9SuTb9g.js";import{t as Y,a as J,b as X,c as j,d as K,e as Q,u as Z}from"./chunk-YRZGWF2W-BFQlxVzV.js";import{t as y}from"./chunk-KQ7OR4H5-BaD0E43f.js";import{A as $}from"./Add-CXZ10KKk.js";const ee=({allUsers:u,roles:g})=>{const[m,h]=k.useState(u);console.info(m);const a=q(),[ae,E]=k.useState({});async function A(r,d,n){const t=new Promise(async(s,o)=>{try{const l=await axios.post(route("user.updateRole",{id:d}),{[r]:n});l.status===200&&(h(c=>c.map(b=>b.id===d?{...b,[r]:n}:b)),s([l.data.messages||"Role updated successfully"]))}catch(l){l.response?(l.response.status===422?o(l.response.data.errors||["Failed to update user role."]):o("An unexpected error occurred. Please try again later."),console.error(l.response)):l.request?(o("No response received from the server. Please check your internet connection."),console.error(l.request)):(o("An error occurred while setting up the request."),console.error("Error",l.message))}});x.promise(t,{pending:{render(){return i("div",{style:{display:"flex",alignItems:"center"},children:[e(f,{}),i("span",{style:{marginLeft:"8px"},children:["Updating employee ",r,"..."]})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:s}){return e(p,{children:s.map((o,l)=>e("div",{children:o},l))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:s}){return e(p,{children:s})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})}const F=async(r,d)=>{const n=new Promise(async(t,s)=>{try{const o=await axios.put(route("user.toggleStatus",{id:r}),{active:d});o.status===200&&(h(l=>l.map(c=>c.id===r?{...c,active:d}:c)),t([o.data.message||"User status updated successfully"]))}catch(o){o.response?(o.response.status===422?s(o.response.data.errors||["Failed to update user status."]):s("An unexpected error occurred. Please try again later."),console.error(o.response)):o.request?(s("No response received from the server. Please check your internet connection."),console.error(o.request)):(s("An error occurred while setting up the request."),console.error("Error",o.message))}});x.promise(n,{pending:{render(){return i("div",{style:{display:"flex",alignItems:"center"},children:[e(f,{}),e("span",{style:{marginLeft:"8px"},children:"Updating user status..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:t}){return e(p,{children:t.map((s,o)=>e("div",{children:s},o))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:t}){return e(p,{children:t})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},S=async r=>{const d=new Promise(async(n,t)=>{try{const s=await fetch(route("profile.delete"),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({user_id:r})}),o=await s.json();s.ok?(h(l=>l.filter(c=>c.id!==r)),n([o.message])):t([o.message])}catch(s){console.error("Error deleting user:",s),t(["An error occurred while deleting user. Please try again."])}});x.promise(d,{pending:{render(){return i("div",{style:{display:"flex",alignItems:"center"},children:[e(f,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting user..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:n}){return e(p,{children:n.map((t,s)=>e("div",{children:t},s))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:n}){return e(p,{children:n.map((t,s)=>e("div",{children:t},s))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},_=r=>{E(d=>({...d,[r]:null}))},P=(r,d)=>{const n=r[d];switch(d){case"name":return e(Z,{avatarProps:{radius:"lg",src:r==null?void 0:r.profile_image},name:r==null?void 0:r.name,children:r==null?void 0:r.email});case"email":return n;case"phone":return n;case"created_at":return n||"N/A";case"role":return i(B,{size:"small",fullWidth:!0,children:[e(T,{id:"role",children:"Role"}),e(U,{labelId:"role",id:"role",multiple:!0,value:r.roles,onChange:t=>A("roles",r.id,t.target.value),label:"Role",variant:"outlined",renderValue:t=>t.join(", "),MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:g.map(t=>i(D,{value:t.name,children:[e(I,{size:"small",checked:r.roles.includes(t.name)}),t.name]},t.name))})]});case"actions":return i("div",{className:"relative flex items-center gap-2",children:[e(y,{content:"Edit Leave",children:e(v,{className:"text-lg text-default-400 cursor-pointer active:opacity-50",component:C,href:route("profile",{user:r.id}),onClick:()=>{_(r.id)},children:e(z,{})})}),e(y,{content:"Delete Leave",color:"danger",children:i(v,{className:"text-lg text-danger cursor-pointer active:opacity-50",component:C,href:route("profile",{user:r.id}),onClick:()=>{S(r.id)},children:[e(V,{})," "]})}),e(y,{content:"Set Active Status",color:"danger",children:e(R,{checked:r.active,onChange:()=>F(r.id,!r.active)})})]});default:return"N/A"}};return e("div",{style:{maxHeight:"84vh",overflowY:"auto"},children:i(Q,{fullWidth:!0,isStriped:!0,isCompact:!0,isHeaderSticky:!0,removeWrapper:!0,"aria-label":"Employees Table",children:[e(Y,{columns:[{name:"Name",uid:"name"},{name:"Email",uid:"email"},{name:"Phone",uid:"phone"},{name:"Created At",uid:"created_at"},{name:"Role",uid:"role"},{name:"Action",uid:"actions"}],children:r=>e(J,{align:r.uid==="actions"?"center":"start",children:r.name},r.uid)}),e(X,{items:m,children:r=>e(j,{children:d=>e(K,{style:{whiteSpace:"nowrap"},children:P(r,d)})},r.id)})]},m)})},re=({title:u,allUsers:g,roles:m})=>i(p,{children:[e(N,{title:u}),e(w,{sx:{display:"flex",justifyContent:"center",p:2},children:e(G,{in:!0,children:i(L,{children:[e(H,{title:"Employees",sx:{padding:"24px"},action:e(w,{display:"flex",gap:2,children:e(M,{title:"Add Employee",variant:"outlined",color:"success",startIcon:e($,{}),children:"Add Employee"})})}),e(O,{children:e(ee,{allUsers:g,roles:m})})]})})})]});re.layout=u=>e(W,{children:u});export{re as default};
