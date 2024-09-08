import{a as e,j as o,b as g,A as H,B as D,F as h,Y as O,G as J}from"./app-cy64eEmW.js";import{g as R,j as L,r as T,w as U,E as V,H as F,J as n,K as G,U as K,T as W,F as N,Q as P,S as j,R as u,c as S,A as q,V as X,v as I,e as Y,P as $,B as M,f as Q,a as Z}from"./vendor-DBPnoEsI.js";import{A as ee}from"./App-xMF9w5zq.js";import{A as re}from"./Add-DxGFZRiZ.js";const ae=R(L.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),te=R(L.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),ne=({allUsers:p,departments:b,designations:m})=>{const[C,k]=T.useState(p),a=U(),[le,_]=T.useState({});async function v(r,d,t){const c=new Promise(async(l,s)=>{try{const i=t.target.value,f=r==="department"?"user.updateDepartment":"user.updateDesignation",E=await fetch(route(f,{id:d}),{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({[r]:i})}),y=await E.json();E.ok?(k(B=>B.map(x=>{if(x.id===d){const w={...x};return r==="department"&&x.department!==i&&(w.designation=null),w[r]=i,w}return x})),l(y.messages)):(s(y.messages||"Failed to update profile information."),console.error(y.errors))}catch(i){console.log(i),s(["An unexpected error occurred."])}});D.promise(c,{pending:{render(){return o("div",{style:{display:"flex",alignItems:"center"},children:[e(I,{}),o("span",{style:{marginLeft:"8px"},children:["Updating employee ",r,"..."]})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:l}){return e(h,{children:l.map((s,i)=>e("div",{children:s},i))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:l}){return e(h,{children:l.map((s,i)=>e("div",{children:s},i))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})}const z=async r=>{const d=new Promise(async(t,c)=>{try{const l=await fetch(route("profile.delete"),{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.head.querySelector('meta[name="csrf-token"]').content},body:JSON.stringify({user_id:r})}),s=await l.json();l.ok?(k(i=>i.filter(f=>f.id!==r)),t([s.message])):c([s.message])}catch(l){console.error("Error deleting user:",l),c(["An error occurred while deleting user. Please try again."])}});D.promise(d,{pending:{render(){return o("div",{style:{display:"flex",alignItems:"center"},children:[e(I,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting user..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:t}){return e(h,{children:t.map((c,l)=>e("div",{children:c},l))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:t}){return e(h,{children:t.map((c,l)=>e("div",{children:c},l))})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},A=r=>{_(d=>({...d,[r]:null}))};return e(X,{style:{maxHeight:"84vh",overflowY:"auto"},children:o(q,{"aria-label":"employee table",children:[e(V,{children:o(F,{children:[e(n,{sx:{whiteSpace:"nowrap"},children:"Employee ID"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Name"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Mobile"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Email"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Join Date"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Department"}),e(n,{sx:{whiteSpace:"nowrap"},children:"Role"}),e(n,{sx:{whiteSpace:"nowrap"},align:"right",children:"Action"})]})}),e(G,{children:C.map(r=>{var d;return o(F,{children:[e(n,{sx:{whiteSpace:"nowrap"},children:r.employee_id||"N/A"}),o(n,{sx:{display:"flex",alignItems:"center",whiteSpace:"nowrap"},children:[e(K,{src:r.profile_image,alt:r.first_name}),o(W,{sx:{marginLeft:"10px"},children:[e(g,{style:{textDecoration:"none",color:a.palette.text.primary,fontWeight:"bold"},href:route("profile",{user:r.id}),children:r.name||"N/A"}),e("br",{}),((d=m.find(t=>t.id===r.designation))==null?void 0:d.title)||"N/A"]})]}),e(n,{sx:{whiteSpace:"nowrap"},children:r.phone||"N/A"}),e(n,{sx:{whiteSpace:"nowrap"},children:r.email||"N/A"}),e(n,{sx:{whiteSpace:"nowrap"},children:r.date_of_joining||"N/A"}),e(n,{sx:{whiteSpace:"nowrap"},children:o(N,{size:"small",fullWidth:!0,children:[e(P,{id:"department",children:"Department"}),o(j,{labelId:"department",id:`department-select-${r.id}`,value:r.department||"na",onChange:t=>v("department",r.id,t),label:"Department",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(u,{value:"na",disabled:!0,children:"Select Department"}),b.map(t=>e(u,{value:t.id,children:t.name},t.id))]})]})}),e(n,{sx:{whiteSpace:"nowrap"},children:o(N,{size:"small",fullWidth:!0,children:[e(P,{id:"designation",children:"Designation"}),o(j,{labelId:"designation",id:`designation-select-${r.id}`,value:r.designation||"na",onChange:t=>v("designation",r.id,t),disabled:!r.department,label:"Designation",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px"}}},children:[e(u,{value:"na",disabled:!0,children:"Select Designation"}),m.filter(t=>t.department_id===r.department).map(t=>e(u,{value:t.id,children:t.title},t.id))]})]})}),o(n,{sx:{whiteSpace:"nowrap"},align:"right",children:[e(S,{component:g,href:route("profile",{user:r.id}),onClick:()=>{A(r.id)},children:e(H,{})}),e(S,{component:g,href:route("profile",{user:r.id}),onClick:()=>{A(r.id)},children:e(te,{})}),o(S,{component:g,href:route("profile",{user:r.id}),onClick:()=>{z(r.id)},children:[e(ae,{})," "]})]})]},r.id)})})]})})},oe=({title:p,allUsers:b,departments:m,designations:C})=>o(h,{children:[e(O,{title:p}),e(M,{sx:{display:"flex",justifyContent:"center",p:2},children:e(Y,{in:!0,children:o(J,{children:[e($,{title:"Employees",sx:{padding:"24px"},action:e(M,{display:"flex",gap:2,children:e(Q,{title:"Add Employee",variant:"outlined",color:"success",startIcon:e(re,{}),children:"Add Employee"})})}),e(Z,{children:e(ne,{allUsers:b,departments:m,designations:C})})]})})})]});oe.layout=p=>e(ee,{children:p});export{oe as default};
