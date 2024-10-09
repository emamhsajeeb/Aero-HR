import{q as J,a as e,j as n,B as L,F}from"./app-CvaTrDkj.js";import{d as se}from"./App-B6XQIiZx.js";import{d as oe}from"./Delete-R1TOtnNC.js";import{r as d,j as M,t as G,W as K,T as le,c as ne,G as k,F as O,k as Y,S as z,M as R,U as V,b as I,B as ie,X as de,Y as Q,Z as j,$ as ce,f as X}from"./vendor-B6hDaovV.js";import{l as ue,s as pe}from"./chunk-QEQ4EHOG-eMxO4R3a.js";import{a as me,b as he,c as ge,d as ye,e as be,t as fe}from"./chunk-YRZGWF2W-DDyifUwU.js";import{t as Z}from"./chunk-KQ7OR4H5-CJSJ8qoT.js";import{u as xe}from"./chunk-TLBGAR4N-B9pBUz5E.js";import{d as Ce,G as ee}from"./GlassDialog-CnZPaKdx.js";import{L as ve}from"./LoadingButton-C0YP_PU8.js";var _e={name:"inyrtd",styles:"width:110px"};const Ne=({allLeaves:P,allUsers:b,handleClickOpen:f,setCurrentLeave:B,openModal:r,setLeavesData:A})=>{const{auth:x}=J().props,[s,C]=d.useState(null),o=M(),y=x.roles.includes("Administrator");x.roles.includes("Supervision Engineer");const W=()=>{C(null)},T=async(t,m)=>{W(),await N(t,"status",m)},N=async(t,m,v)=>{const l=new Promise(async(u,_)=>{try{const c=await axios.post(route("leave-add"),{route:route().current(),user_id:t.user_id,id:t.id,leaveType:t.leave_type,fromDate:t.from_date,toDate:t.to_date,daysCount:t.no_of_days,leaveReason:t.reason,[m]:v});c.status===200&&(A(c.data.leavesData),u([c.data.message||"Leave status updated successfully"]))}catch(c){c.response?(c.response.status===422?_(c.response.statusText||"Failed to update leave status"):_("An unexpected error occurred. Please try again later."),console.error(c.response)):c.request?(_("No response received from the server. Please check your internet connection."),console.error(c.request)):(_("An error occurred while setting up the request."),console.error("Error",c.message))}});L.promise(l,{pending:{render(){return n("div",{style:{display:"flex",alignItems:"center"},children:[e(G,{}),e("span",{style:{marginLeft:"8px"},children:"Updating leave status..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:o.glassCard.backgroundColor,border:o.glassCard.border,color:o.palette.text.primary}},success:{render({data:u}){return e(F,{children:u.map((_,c)=>e("div",{children:_},c))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:o.glassCard.backgroundColor,border:o.glassCard.border,color:o.palette.text.primary}},error:{render({data:u}){return e(F,{children:u})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:o.glassCard.backgroundColor,border:o.glassCard.border,color:o.palette.text.primary}}})},D=t=>{switch(t){case"New":return"primary";case"Pending":return"secondary";case"Approved":return"success";case"Declined":return"danger";default:return"primary"}},U=(t,m)=>{const v=t[m];switch(m){case"employee":const l=b.find(u=>String(u.id)===String(t.user_id));return e(xe,{avatarProps:{radius:"lg",src:l==null?void 0:l.profile_image},description:l==null?void 0:l.phone,name:l==null?void 0:l.name,children:l==null?void 0:l.email});case"leave_type":return v;case"from_date":return new Date(v).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"});case"to_date":return new Date(v).toLocaleDateString("en-US",{day:"numeric",month:"short",year:"numeric"});case"status":return e(pe,{isDisabled:!x.roles.includes("Administrator")&&route().current()!=="leaves","aria-label":"Leave Status",color:D(t.status),placeholder:"Select status",size:"sm",selectedKeys:[t.status],onChange:u=>T(t,u.target.value),css:_e,children:["New","Pending","Approved","Declined"].map(u=>e(ue,{value:t.status,children:u},u))});case"actions":return n("div",{className:"relative flex items-center gap-2",children:[e(Z,{content:"Edit Leave",children:e("span",{className:"text-lg text-default-400 cursor-pointer active:opacity-50",onClick:()=>{B(t),r("edit_leave")},children:e(se,{})})}),e(Z,{content:"Delete Leave",color:"danger",children:e("span",{className:"text-lg text-danger cursor-pointer active:opacity-50",onClick:()=>f(t.id,"delete_leave"),children:e(oe,{})})})]});default:return v}},w=[...y?[{name:"Employee",uid:"employee"}]:[],{name:"Leave Type",uid:"leave_type"},{name:"From Date",uid:"from_date"},{name:"To Date",uid:"to_date"},{name:"Status",uid:"status"},{name:"Reason",uid:"reason"},...y?[{name:"Actions",uid:"actions"}]:[]];return e("div",{style:{maxHeight:"84vh",overflowY:"auto"},children:n(fe,{isStriped:!0,selectionMode:"multiple",selectionBehavior:"toggle",isCompact:!0,isHeaderSticky:!0,removeWrapper:!0,"aria-label":"Leave Employee Table",children:[e(me,{columns:w,children:t=>e(he,{align:t.uid==="actions"?"center":"start",children:t.name},t.uid)}),e(ge,{items:P,children:t=>e(ye,{children:m=>e(be,{style:{whiteSpace:"nowrap"},children:U(t,m)})},t.id)})]})})},Ue=({open:P,closeModal:b,leavesData:f,setLeavesData:B,currentLeave:r,allUsers:A})=>{const{auth:x}=J().props,s=M(),[C,o]=d.useState((r==null?void 0:r.user_id)||x.user.id),[y,W]=d.useState(f.leaveTypes||[]),[T,N]=d.useState([]),[D,U]=d.useState((r==null?void 0:r.leave_type)||(y.length>0?y[0].type:"")),[w,t]=d.useState((r==null?void 0:r.from_date)||""),[m,v]=d.useState((r==null?void 0:r.to_date)||""),[l,u]=d.useState((r==null?void 0:r.no_of_days)||""),[_,c]=d.useState(""),[H,re]=d.useState((r==null?void 0:r.reason)||""),[p,te]=d.useState({}),[$,q]=d.useState(!1),[ke,ae]=d.useState("");return d.useEffect(()=>{f&&(W(f.leaveTypes||[]),N(f.leaveCountsByUser[C]||[]))},[f,C]),d.useEffect(()=>{var g;const a=((g=T==null?void 0:T.find(h=>h.leave_type===D))==null?void 0:g.days_used)||0;ae(a);const S=y==null?void 0:y.find(h=>h.type===D);S&&c(S.days-a)},[D,T,y]),d.useEffect(()=>{u(((S,g)=>{if(!S||!g)return"";const h=new Date(S),i=new Date(g);if(h>i)return"";const E=i.getTime()-h.getTime();return Math.ceil(E/(1e3*3600*24))+1})(w,m))},[w,m]),n(ee,{open:P,onClose:b,fullWidth:!0,maxWidth:"sm",children:[n(K,{sx:{display:"flex",alignItems:"center"},children:[e(le,{variant:"h6",children:"Add Leave"}),e(ne,{onClick:b,sx:{position:"absolute",top:8,right:16},children:e(Ce,{})})]}),n("form",{onSubmit:async a=>{a.preventDefault(),q(!0);const S=new Promise(async(g,h)=>{try{const i={route:route().current(),user_id:C,leaveType:D,fromDate:w,toDate:m,daysCount:l,leaveReason:H};r&&(i.id=r.id);const E=await axios.post(route("leave-add"),i);E.status===200&&(B(E.data.leavesData),g([E.data.message||"Leave application submitted successfully"]),b())}catch(i){q(!1),i.response?(i.response.status===422?(te(i.response.data.errors||{}),h(i.response.statusText||"Failed to submit leave application")):h("An unexpected error occurred. Please try again later."),console.error(i.response)):i.request?(h("No response received from the server. Please check your internet connection."),console.error(i.request)):(h("An error occurred while setting up the request."),console.error("Error",i.message))}finally{q(!1)}});L.promise(S,{pending:{render(){return n("div",{style:{display:"flex",alignItems:"center"},children:[e(G,{}),e("span",{style:{marginLeft:"8px"},children:"Submitting leave application..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:s.glassCard.backgroundColor,border:s.glassCard.border,color:s.palette.text.primary}},success:{render({data:g}){return e(F,{children:g.map((h,i)=>e("div",{children:h},i))})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:s.glassCard.backgroundColor,border:s.glassCard.border,color:s.palette.text.primary}},error:{render({data:g}){return e(F,{children:g})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:s.glassCard.backgroundColor,border:s.glassCard.border,color:s.palette.text.primary}}})},children:[e(Q,{children:n(k,{container:!0,spacing:2,children:[e(k,{item:!0,xs:12,md:6,children:n(O,{fullWidth:!0,children:[e(Y,{id:"leave-type-label",children:"Leave Type"}),n(z,{labelId:"leave-type-label",value:D,onChange:a=>U(a.target.value),label:"Leave Type",error:!!p.leaveType,MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:s.glassCard.backgroundColor,border:s.glassCard.border,borderRadius:2,boxShadow:s.glassCard.boxShadow}}},children:[e(R,{value:"",disabled:!0,children:"Select Leave Type"}),y.map(a=>n(R,{value:a.type,children:[a.type," ",a.days," Days"]},a.id))]}),e(V,{children:p.leaveType})]})}),e(k,{item:!0,xs:12,md:6,children:e(I,{label:"From",type:"date",fullWidth:!0,value:w,onChange:a=>t(a.target.value),InputLabelProps:{shrink:!0},error:!!p.fromDate,helperText:p.fromDate})}),e(k,{item:!0,xs:12,md:6,children:e(I,{label:"To",type:"date",fullWidth:!0,value:m,onChange:a=>v(a.target.value),InputLabelProps:{shrink:!0},error:!!p.toDate,helperText:p.toDate})}),e(k,{item:!0,xs:12,md:6,children:e(I,{label:"Number of days",type:"text",fullWidth:!0,value:l,InputProps:{readOnly:!0},error:!!p.daysCount,helperText:p.daysCount})}),e(k,{item:!0,xs:12,md:6,children:e(I,{label:"Remaining Leaves",type:"text",fullWidth:!0,value:_,InputProps:{readOnly:!0},error:!!p.remainingLeaves,helperText:p.remainingLeaves})}),x.roles.includes("Administrator")&&route().current()==="leaves"&&e(k,{item:!0,xs:12,md:6,children:n(O,{fullWidth:!0,children:[e(Y,{id:"leave-employee-label",children:"Employee"}),n(z,{variant:"outlined",fullWidth:!0,labelId:"leave-employee-label",value:C||"na",error:!!p.user_id,onChange:a=>o(a.target.value),label:"Employee",MenuProps:{PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:s.glassCard.backgroundColor,border:s.glassCard.border,borderRadius:2,boxShadow:s.glassCard.boxShadow}}},children:[e(R,{value:"na",disabled:!0,children:"Please select"}),A.map(a=>e(R,{value:a.id,children:n(ie,{sx:{display:"flex"},children:[e(de,{src:a.profile_image,alt:a.name||"Not assigned",sx:{borderRadius:"50%",width:23,height:23,display:"flex",mr:1}}),a.name]})},a.id))]}),e(V,{children:p.user_id})]})}),e(k,{item:!0,xs:12,children:e(I,{label:"Leave Reason",multiline:!0,rows:4,fullWidth:!0,value:H,onChange:a=>re(a.target.value),error:!!p.leaveReason,helperText:p.leaveReason})})]})}),e(j,{sx:{padding:"16px",justifyContent:"center"},children:e(ve,{type:"submit",variant:"outlined",color:"primary",loading:$,disabled:$,sx:{borderRadius:"50px"},children:"Submit"})})]})]})},qe=({open:P,handleClose:b,leaveIdToDelete:f,setLeavesData:B})=>{const r=M();return n(ee,{open:P,onClose:b,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(K,{id:"alert-dialog-title",children:"Confirm Deletion"}),e(Q,{children:e(ce,{id:"alert-dialog-description",children:"Are you sure you want to delete this leave? This action cannot be undone."})}),n(j,{children:[e(X,{onClick:b,color:"primary",children:"Cancel"}),e(X,{onClick:()=>{const x=new Promise(async(s,C)=>{try{const o=await axios.delete(route("leave-delete",{id:f,route:route().current()}));o.status===200&&(B(o.data.leavesData),s("Leave application deleted successfully"))}catch(o){console.error("Error deleting task:",o),C(o.response.data.error||"Failed to delete leave application")}finally{b()}});L.promise(x,{pending:{render(){return n("div",{style:{display:"flex",alignItems:"center"},children:[e(G,{}),e("span",{style:{marginLeft:"8px"},children:"Deleting leave application..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:r.glassCard.backgroundColor,border:r.glassCard.border,color:r.palette.text.primary}},success:{render({data:s}){return e(F,{children:s})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:r.glassCard.backgroundColor,border:r.glassCard.border,color:r.palette.text.primary}},error:{render({data:s}){return e(F,{children:s})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:r.glassCard.backgroundColor,border:r.glassCard.border,color:r.palette.text.primary}}})},color:"error",autoFocus:!0,children:"Delete"})]})]})};export{qe as D,Ue as L,Ne as a};
