import{a as e,j as o,b,F as u,Y as B}from"./app-DK-sU0Sm.js";import{g as M,j as L,r as A,v as H,y as O,z as D,A as n,D as J,E as G,T as K,F as T,H as F,S as j,M as C,c as S,J as U,K as V,t as N,e as W,L as q,B as P,f as X,a as Y}from"./vendor-B94fZjj7.js";import{a as $,B as I,G as Q,A as Z}from"./App-CpAeWdO8.js";import{A as ee}from"./Add-LM_D6ea3.js";const re=M(L.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),ae=M(L.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),te=({allUsers:y,departments:f,designations:p})=>{const[h,k]=A.useState(y);console.log(h);const a=H();console.log(a);const[ne,z]=A.useState({});async function v(r,d,t){const c=new Promise(async(l,s)=>{try{const i=t.target.value,g=await fetch(route("profile.update"),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({id:d,[r]:i})}),m=await g.json();g.ok?(k(_=>_.map(x=>{if(x.id===d){const w={...x};return r==="department"&&x.department!==i&&(w.designation=null),w[r]=i,w}return x})),l([...m.messages]),console.log(m.messages)):(s(m.messages),console.error(m.messages))}catch(i){console.log(i),s(["An unexpected error occurred."])}});I.promise(c,{pending:{render(){return o("div",{style:{display:"flex",alignItems:"center"},children:[e(N,{}),o("span",{style:{marginLeft:"8px"},children:["Updating employee ",r,"..."]})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:l}){return e(u,{children:l.map((s,i)=>e("div",{children:s},i))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:l}){return e(u,{children:l.map((s,i)=>e("div",{children:s},i))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})}const R=async r=>{const d=new Promise(async(t,c)=>{try{const l=await fetch(route("profile.delete"),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({user_id:r})}),s=await l.json();l.ok?(k(i=>i.filter(g=>g.id!==r)),t([s.message])):c([s.message])}catch(l){console.error("Error deleting user:",l),c(["An error occurred while deleting user. Please try again."])}});I.promise(d,{pending:{render(){return o("div",{style:{display:"flex",alignItems:"center"},children:[e(N,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting user..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:t}){return e(u,{children:t.map((c,l)=>e("div",{children:c},l))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:t}){return e(u,{children:t.map((c,l)=>e("div",{children:c},l))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},E=r=>{z(d=>({...d,[r]:null}))};return e(V,{style:{maxHeight:"70vh",overflowY:"auto"},children:o(U,{"aria-label":"employee table",children:[e(O,{children:o(D,{children:[e(n,{sx:{whiteSpace:"nowrap"},children:"Employee ID"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Name"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Email"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Mobile"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Join Date"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Department"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Role"}),e(n,{sx:{whiteSpace:"nowrap"},align:"right",children:"Action"})]})}),e(J,{children:h.map(r=>{var d;return o(D,{children:[e(n,{sx:{whiteSpace:"nowrap"},children:r.employee_id||"N/A"}),o(n,{sx:{display:"flex",alignItems:"center",whiteSpace:"nowrap"},children:[e(G,{src:r.profile_image,alt:r.first_name}),o(K,{sx:{marginLeft:"10px"},children:[e(b,{style:{textDecoration:"none",color:a.palette.text.primary,fontWeight:"bold"},href:route("profile",{user:r.id}),children:r.name||"N/A"}),e("br",{}),((d=p.find(t=>t.id===r.designation))==null?void 0:d.title)||"N/A"]})]}),e(n,{sx:{whiteSpace:"nowrap"},children:r.phone||"N/A"}),e(n,{sx:{whiteSpace:"nowrap"},children:r.email||"N/A"}),e(n,{sx:{whiteSpace:"nowrap"},children:r.date_of_joining||"N/A"}),e(n,{sx:{whiteSpace:"nowrap"},children:o(T,{size:"small",fullWidth:!0,children:[e(F,{id:"department",children:"Department"}),o(j,{labelId:"department",id:`department-select-${r.id}`,value:r.department||"na",onChange:t=>v("department",r.id,t),label:"Department",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(C,{value:"na",disabled:!0,children:"Select Department"}),f.map(t=>e(C,{value:t.id,children:t.name},t.id))]})]})}),e(n,{sx:{whiteSpace:"nowrap"},children:o(T,{size:"small",fullWidth:!0,children:[e(F,{id:"designation",children:"Designation"}),o(j,{labelId:"designation",id:`designation-select-${r.id}`,value:r.designation||"na",onChange:t=>v("designation",r.id,t),disabled:!r.department,label:"Designation",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(C,{value:"na",disabled:!0,children:"Select Designation"}),p.filter(t=>t.department_id===r.department).map(t=>e(C,{value:t.id,children:t.title},t.id))]})]})}),o(n,{sx:{whiteSpace:"nowrap"},align:"right",children:[e(S,{component:b,href:route("profile",{user:r.id}),onClick:()=>{E(r.id)},children:e($,{})}),e(S,{component:b,href:route("profile",{user:r.id}),onClick:()=>{E(r.id)},children:e(ae,{})}),o(S,{component:b,href:route("profile",{user:r.id}),onClick:()=>{R(r.id)},children:[e(re,{})," "]})]})]},r.id)})})]})})},se=({title:y,allUsers:f,departments:p,designations:h})=>o(Z,{children:[e(B,{title:y}),e(P,{sx:{display:"flex",justifyContent:"center",p:2},children:e(W,{in:!0,children:o(Q,{children:[e(q,{title:"Employees",sx:{padding:"24px"},action:e(P,{display:"flex",gap:2,children:e(X,{title:"Add Employee",variant:"outlined",color:"success",startIcon:e(ee,{}),children:"Add Employee"})})}),e(Y,{children:e(te,{allUsers:f,departments:p,designations:h})})]})})})]});export{se as default};
