import{q as C,j as r,a as e,Y as U,F as b}from"./app-3jVpfI5f.js";import{r as s,e as k,g as E,B as n,f as F,a as u,G as L,T as v,D as M}from"./vendor-C3l6kYDa.js";import{G as g,A as O}from"./App-DJVeLFFD.js";import{L as _,D as q,a as w}from"./DeleteLeaveForm-BFLQbPGK.js";import{A as H}from"./Add-DaW4YIc7.js";import"./Delete-b8fSL0xB.js";import"./chunk-QEQ4EHOG-CGqfmuzY.js";import"./DOMLayoutDelegate-DGbsLr1w.js";import"./useFormValidationState-BmapQcqq.js";import"./useLabel-CKojuclN.js";import"./chunk-NCVCYSZZ-DyTDxb4p.js";import"./chunk-YRZGWF2W-BNoeVdcp.js";import"./chunk-KQ7OR4H5-CL9YlPH-.js";import"./chunk-TLBGAR4N-DEplQQhR.js";import"./GlassDialog-DwNuoc62.js";import"./LoadingButton-qORoMCQd.js";const R=({title:p,allUsers:D})=>{const{auth:i}=C().props,[l,o]=s.useState(null),[a,d]=s.useState(C().props.leavesData),[A,B]=s.useState(a.allLeaves),[I,h]=s.useState(null),[j,G]=s.useState();s.useEffect(()=>{B(a.allLeaves)},[a]);const y=t=>{o(t)},S=s.useCallback((t,c)=>{h(t),o(c)},[]),T=s.useCallback(()=>{o(null),h(null)},[]),f=()=>{o(null)};return r(b,{children:[e(U,{title:p}),l==="add_leave"&&e(_,{open:l==="add_leave",setLeavesData:d,closeModal:f,leavesData:a}),l==="edit_leave"&&e(_,{open:l==="edit_leave",setLeavesData:d,closeModal:f,leavesData:a,currentLeave:j}),l==="delete_leave"&&e(q,{open:l==="delete_leave",handleClose:T,leaveIdToDelete:I,setLeavesData:d}),e(n,{sx:{display:"flex",justifyContent:"center",p:2},children:e(k,{in:!0,children:r(g,{children:[e(E,{title:"Leaves",sx:{padding:"24px"},action:e(n,{display:"flex",gap:2,children:e(F,{title:"Add Leave",variant:"outlined",color:"success",startIcon:e(H,{}),onClick:()=>y("add_leave"),children:"Add Leave"})})}),e(u,{children:e(L,{container:!0,spacing:2,children:a.leaveTypes.map(t=>{var c,x;return e(L,{item:!0,xs:6,sm:6,md:3,children:e(g,{children:e(u,{children:r(n,{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",textAlign:"center",children:[e(v,{variant:"h6",sx:{mb:2},children:t.type})," ",r(n,{display:"flex",alignItems:"center",children:[r(n,{children:["Used:",e(v,{variant:"h4",children:a.leaveCountsByUser[i.user.id]?(c=a.leaveCountsByUser[i.user.id].find(m=>m.leave_type===t.type))==null?void 0:c.days_used:0})]}),e(M,{orientation:"vertical",flexItem:!0,sx:{mx:2}})," ",r(n,{children:["Remaining:",e(v,{variant:"h4",children:a.leaveCountsByUser[i.user.id]?(x=a.leaveCountsByUser[i.user.id].find(m=>m.leave_type===t.type))==null?void 0:x.remaining_days:0})]})]})]})})})},t.type)})})}),e(u,{children:e(w,{setLeavesData:d,handleClickOpen:S,setCurrentLeave:G,openModal:y,allLeaves:A,allUsers:D})})]})})})]})};R.layout=p=>e(O,{children:p});export{R as default};
