import{r as ie,q as ee,a as e,j as l,F as _,B as L}from"./app-tJhKMS6f.js";import{s as de,q as ce,r as m,u as $,k as ue,l as J,m as i,n as pe,B as U,V as z,T as B,F as G,S as O,M as E,c as j,j as he,i as me,o as V,N as re,G as S,h as K,W as Q,b as I,O as ae,P as te,X as ge,f as Z}from"./vendor-BBvAslwD.js";import{d as be}from"./Edit-B9pfGxvs.js";import{d as ye}from"./Delete-BdH_DLTn.js";import{d as xe,G as oe}from"./GlassDialog-BtcboFTL.js";import{L as fe}from"./LoadingButton-DHZxIi3J.js";var X={},Ce=de;Object.defineProperty(X,"__esModule",{value:!0});var H=X.default=void 0,we=Ce(ie()),Se=ce;H=X.default=(0,we.default)((0,Se.jsx)("path",{d:"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5m0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"}),"RadioButtonChecked");const Be=({allLeaves:P,allUsers:g,handleClickOpen:b,setCurrentLeave:x,openModal:p,setLeavesData:o})=>{const{auth:k}=ee().props,[f,n]=m.useState(null),a=$(),W=r=>{n(r.currentTarget)},C=()=>{n(null)},A=async(r,s)=>{C(),await T(r,"status",s)},T=async(r,s,F)=>{const N=new Promise(async(D,w)=>{try{const d=await axios.post(route("leave-add"),{route:route().current(),user_id:r.user_id,id:r.id,leaveType:r.leave_type,fromDate:r.from_date,toDate:r.to_date,daysCount:r.no_of_days,leaveReason:r.reason,[s]:F});d.status===200&&(o(d.data.leavesData),D([d.data.message||"Leave status updated successfully"]))}catch(d){d.response?(d.response.status===422?w(d.response.statusText||"Failed to update leave status"):w("An unexpected error occurred. Please try again later."),console.error(d.response)):d.request?(w("No response received from the server. Please check your internet connection."),console.error(d.request)):(w("An error occurred while setting up the request."),console.error("Error",d.message))}});L.promise(N,{pending:{render(){return l("div",{style:{display:"flex",alignItems:"center"},children:[e(V,{}),e("span",{style:{marginLeft:"8px"},children:"Updating leave status..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:D}){return e(_,{children:D.map((w,d)=>e("div",{children:w},d))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:D}){return e(_,{children:D})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})},q=r=>{switch(r){case"New":return a.palette.primary.main;case"Pending":return a.palette.warning.main;case"Approved":return a.palette.success.main;case"Declined":return a.palette.error.main;default:return a.palette.text.primary}};return e(me,{style:{maxHeight:"84vh",overflowY:"auto"},children:l(he,{size:"small",children:[e(ue,{children:l(J,{children:[k.roles.includes("admin")&&route().current()==="leaves"&&e(i,{sx:{whiteSpace:"nowrap"},children:"Employee"}),e(i,{sx:{whiteSpace:"nowrap"},children:"Leave Type"}),e(i,{sx:{whiteSpace:"nowrap"},children:"From"}),e(i,{sx:{whiteSpace:"nowrap"},children:"To"}),e(i,{sx:{whiteSpace:"nowrap"},children:"No of Days"}),e(i,{sx:{whiteSpace:"nowrap"},children:"Reason"}),e(i,{sx:{whiteSpace:"nowrap"},children:"Status"}),e(i,{sx:{whiteSpace:"nowrap"},children:"Approved/Declined by"}),e(i,{sx:{whiteSpace:"nowrap"},align:"center",children:"Actions"})]})}),e(pe,{children:P.map(r=>l(J,{children:[k.roles.includes("admin")&&route().current()==="leaves"&&e(i,{children:e(U,{sx:{display:"flex",alignItems:"center"},children:(()=>{const s=g.find(F=>String(F.id)===String(r.user_id));return s?l(_,{children:[e(z,{src:s.profile_image,alt:s.name}),e(B,{sx:{marginLeft:"10px",fontWeight:"bold"},children:s.name})]}):e(B,{children:"No User Found"})})()})}),e(i,{sx:{whiteSpace:"nowrap"},children:r.leave_type}),e(i,{sx:{whiteSpace:"nowrap"},children:new Date(r.from_date).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}),e(i,{sx:{whiteSpace:"nowrap"},children:new Date(r.to_date).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"})}),e(i,{sx:{whiteSpace:"nowrap"},children:r.no_of_days}),e(i,{sx:{whiteSpace:"nowrap"},children:r.reason}),e(i,{sx:{whiteSpace:"nowrap"},children:e(G,{fullWidth:!0,children:e(O,{disabled:!k.roles.includes("admin")&&route().current()!=="leaves",variant:"outlined",color:"primary",size:"small",margin:"0",onClick:W,startIcon:e(H,{}),value:r.status,onChange:s=>A(r,s.target.value),sx:{border:a.glassCard.border,borderRadius:"50px"},MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,borderRadius:2,boxShadow:a.glassCard.boxShadow}}},children:["New","Pending","Approved","Declined"].map(s=>e(E,{value:s,sx:{display:"flex",alignItems:"center","&:hover":{backgroundColor:a.palette.action.hover}},children:l(U,{sx:{display:"flex"},children:[e(H,{sx:{marginRight:1,color:q(s)}}),s]})},s))})})}),e(i,{sx:{whiteSpace:"nowrap"},children:r.approved_by?l(B,{sx:{display:"flex",alignItems:"center",whiteSpace:"nowrap"},children:[e(z,{src:g.find(s=>s.id===r.approved_by).profile_image,alt:g.find(s=>s.id===r.approved_by).name}),e(B,{sx:{marginLeft:"10px",fontWeight:"bold"},children:g.find(s=>s.id===r.approved_by).name})]}):null}),l(i,{sx:{whiteSpace:"nowrap"},align:"center",children:[e(j,{sx:{m:1},variant:"outlined",color:"success",size:"small",onClick:()=>{x(r),p("edit_leave")},children:e(be,{})}),e(j,{sx:{m:1},variant:"outlined",color:"error",size:"small",onClick:()=>b(r.id,"delete_leave"),children:e(ye,{})})]})]},r.id))})]})})},Ee=({open:P,closeModal:g,leaveTypes:b,leaveCounts:x,setLeavesData:p,currentLeave:o,allUsers:k})=>{const{auth:f}=ee().props,n=$(),[a,W]=m.useState((o==null?void 0:o.user_id)||f.user.id),[C,A]=m.useState((o==null?void 0:o.leave_type)||(b.length>0?b[0].type:""));console.log("leave type: ",C),console.log("leave counts: ",x);const[T,q]=m.useState((o==null?void 0:o.from_date)||""),[r,s]=m.useState((o==null?void 0:o.to_date)||""),[F,N]=m.useState((o==null?void 0:o.no_of_days)||""),[D,w]=m.useState(""),[d,se]=m.useState((o==null?void 0:o.reason)||""),[u,le]=m.useState({}),[Y,M]=m.useState(!1),[ke,ne]=m.useState("");return m.useEffect(()=>{var y;const t=((y=x==null?void 0:x.find(h=>h.leave_type===C))==null?void 0:y.days_used)||0;ne(t);const v=b==null?void 0:b.find(h=>h.type===C);v&&w(v.days-t)},[C,x,b]),m.useEffect(()=>{N(((v,y)=>{if(!v||!y)return"";const h=new Date(v),c=new Date(y);if(h>c)return"";const R=c.getTime()-h.getTime();return Math.ceil(R/(1e3*3600*24))+1})(T,r))},[T,r]),l(oe,{open:P,onClose:g,fullWidth:!0,maxWidth:"sm",children:[l(re,{sx:{display:"flex",alignItems:"center"},children:[e(B,{variant:"h6",children:"Add Leave"}),e(j,{onClick:g,sx:{position:"absolute",top:8,right:16},children:e(xe,{})})]}),l("form",{onSubmit:async t=>{t.preventDefault(),M(!0);const v=new Promise(async(y,h)=>{try{const c={route:route().current(),user_id:a,leaveType:C,fromDate:T,toDate:r,daysCount:F,leaveReason:d};o&&(c.id=o.id);const R=await axios.post(route("leave-add"),c);R.status===200&&(p(R.data.leavesData),y([R.data.message||"Leave application submitted successfully"]),g())}catch(c){M(!1),c.response?(c.response.status===422?(le(c.response.data.errors||{}),h(c.response.statusText||"Failed to submit leave application")):h("An unexpected error occurred. Please try again later."),console.error(c.response)):c.request?(h("No response received from the server. Please check your internet connection."),console.error(c.request)):(h("An error occurred while setting up the request."),console.error("Error",c.message))}finally{M(!1)}});L.promise(v,{pending:{render(){return l("div",{style:{display:"flex",alignItems:"center"},children:[e(V,{}),e("span",{style:{marginLeft:"8px"},children:"Submitting leave application..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:n.glassCard.backgroundColor,border:n.glassCard.border,color:n.palette.text.primary}},success:{render({data:y}){return e(_,{children:y.map((h,c)=>e("div",{children:h},c))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:n.glassCard.backgroundColor,border:n.glassCard.border,color:n.palette.text.primary}},error:{render({data:y}){return e(_,{children:y})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:n.glassCard.backgroundColor,border:n.glassCard.border,color:n.palette.text.primary}}})},children:[e(ae,{children:l(S,{container:!0,spacing:2,children:[e(S,{item:!0,xs:12,md:6,children:l(G,{fullWidth:!0,children:[e(K,{id:"leave-type-label",children:"Leave Type"}),l(O,{labelId:"leave-type-label",value:C,onChange:t=>A(t.target.value),label:"Leave Type",error:!!u.leaveType,MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:n.glassCard.backgroundColor,border:n.glassCard.border,borderRadius:2,boxShadow:n.glassCard.boxShadow}}},children:[e(E,{value:"",disabled:!0,children:"Select Leave Type"}),b.map(t=>l(E,{value:t.type,children:[t.type," ",t.days," Days"]},t.id))]}),e(Q,{children:u.leaveType})]})}),e(S,{item:!0,xs:12,md:6,children:e(I,{label:"From",type:"date",fullWidth:!0,value:T,onChange:t=>q(t.target.value),InputLabelProps:{shrink:!0},error:!!u.fromDate,helperText:u.fromDate})}),e(S,{item:!0,xs:12,md:6,children:e(I,{label:"To",type:"date",fullWidth:!0,value:r,onChange:t=>s(t.target.value),InputLabelProps:{shrink:!0},error:!!u.toDate,helperText:u.toDate})}),e(S,{item:!0,xs:12,md:6,children:e(I,{label:"Number of days",type:"text",fullWidth:!0,value:F,InputProps:{readOnly:!0},error:!!u.daysCount,helperText:u.daysCount})}),e(S,{item:!0,xs:12,md:6,children:e(I,{label:"Remaining Leaves",type:"text",fullWidth:!0,value:D,InputProps:{readOnly:!0},error:!!u.remainingLeaves,helperText:u.remainingLeaves})}),f.roles.includes("admin")&&route().current()==="leaves"&&e(S,{item:!0,xs:12,md:6,children:l(G,{fullWidth:!0,children:[e(K,{id:"leave-employee-label",children:"Employee"}),l(O,{variant:"outlined",fullWidth:!0,labelId:"leave-employee-label",value:a||"na",error:!!u.user_id,onChange:t=>W(t.target.value),label:"Employee",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:n.glassCard.backgroundColor,border:n.glassCard.border,borderRadius:2,boxShadow:n.glassCard.boxShadow}}},children:[e(E,{value:"na",disabled:!0,children:"Please select"}),k.map(t=>e(E,{value:t.id,children:l(U,{sx:{display:"flex"},children:[e(z,{src:t.profile_image,alt:t.name||"Not assigned",sx:{borderRadius:"50%",width:23,height:23,display:"flex",mr:1}}),t.name]})},t.id))]}),e(Q,{children:u.user_id})]})}),e(S,{item:!0,xs:12,children:e(I,{label:"Leave Reason",multiline:!0,rows:4,fullWidth:!0,value:d,onChange:t=>se(t.target.value),error:!!u.leaveReason,helperText:u.leaveReason})})]})}),e(te,{sx:{padding:"16px",justifyContent:"center"},children:e(fe,{type:"submit",variant:"outlined",color:"primary",loading:Y,disabled:Y,sx:{borderRadius:"50px"},children:"Submit"})})]})]})},We=({open:P,handleClose:g,leaveIdToDelete:b,setLeavesData:x})=>{const p=$();return l(oe,{open:P,onClose:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(re,{id:"alert-dialog-title",children:"Confirm Deletion"}),e(ae,{children:e(ge,{id:"alert-dialog-description",children:"Are you sure you want to delete this leave? This action cannot be undone."})}),l(te,{children:[e(Z,{onClick:g,color:"primary",children:"Cancel"}),e(Z,{onClick:()=>{const k=new Promise(async(f,n)=>{try{const a=await axios.delete(route("leave-delete",{id:b}));a.status===200&&(x(a.data.leavesData),f("Leave application deleted successfully"))}catch(a){console.error("Error deleting task:",a),n(a.response.data.error||"Failed to delete leave application")}finally{g()}});L.promise(k,{pending:{render(){return l("div",{style:{display:"flex",alignItems:"center"},children:[e(V,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting leave application..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:p.glassCard.backgroundColor,border:p.glassCard.border,color:p.palette.text.primary}},success:{render({data:f}){return e(_,{children:f})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:p.glassCard.backgroundColor,border:p.glassCard.border,color:p.palette.text.primary}},error:{render({data:f}){return e(_,{children:f})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:p.glassCard.backgroundColor,border:p.glassCard.border,color:p.palette.text.primary}}})},color:"error",autoFocus:!0,children:"Delete"})]})]})};export{We as D,Ee as L,Be as a};
