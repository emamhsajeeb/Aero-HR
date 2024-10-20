import{q as $,a as e,j as s,F as R}from"./app-3jVpfI5f.js";import{u as L,r as a,G as o,e as F,g as I,T as m,a as U,B as d,h as j,i as ue,f as he}from"./vendor-C3l6kYDa.js";import{G}from"./App-DJVeLFFD.js";import{d as z}from"./dayjs.min-wr2KJnV_.js";import{d as pe,p as xe}from"./Search-yZC4YMpp.js";import{s as ge}from"./chunk-NCVCYSZZ-DyTDxb4p.js";import{a as fe,u as Se}from"./chunk-TLBGAR4N-DEplQQhR.js";import{i as N}from"./chunk-IR2E3HZF-CZMLw7v6.js";import{t as ye,a as _e,b as be,c as ve,d as we,e as u}from"./chunk-YRZGWF2W-BNoeVdcp.js";const Ce=({handleDateChange:O,selectedDate:p})=>{const{auth:g}=$().props,{url:l}=$();L("(max-width: 640px)");const Y=L("(min-width: 641px) and (max-width: 1024px)"),B=L("(min-width: 1025px)"),[V,W]=a.useState([]),[q,Q]=a.useState([]),[f,P]=a.useState([]),[E,J]=a.useState(""),[K,X]=a.useState(0),[Z,ee]=a.useState(0),[k,Me]=a.useState(10),[b,te]=a.useState(1),[v,re]=a.useState(""),[S,ne]=a.useState({currentMonth:z().format("YYYY-MM")}),ae=t=>{const n=t.target.value.toLowerCase();re(n)},[w,D]=a.useState(2),C=a.useRef(null),M=a.useRef(null),T=()=>{if(C.current&&M.current){const t=C.current.clientHeight,n=M.current.clientHeight,r=t-150,h=Math.floor(r/n);D(h)}},se=()=>{D(t=>t+2)},ie=t=>q.find(n=>String(n.user_id)===String(t)),oe=async(t,n,r,h,c)=>{var y,A,x,_;const H=l!=="/attendance-employee"?route("getAllUsersAttendanceForDate"):route("getCurrentUserAttendanceForDate");try{const i=await axios.get(H,{params:{page:n,perPage:r,employee:h,date:t,currentYear:c.currentMonth?z(c.currentMonth).year():"",currentMonth:c.currentMonth?z(c.currentMonth).format("MM"):""}});i.status===200&&(W(i.data.attendances),Q(i.data.leaves),P(i.data.absent_users),X(i.data.total),ee(i.data.last_page))}catch(i){console.error("Error fetching attendance data:",i),J(((A=(y=i.response)==null?void 0:y.data)==null?void 0:A.message)||"An error occurred while retrieving attendance data."),P((_=(x=i.response)==null?void 0:x.data)==null?void 0:_.absent_users)}},le=(t,n)=>{var r,h,c;switch(n){case"date":return e(u,{className:"text-xs sm:text-sm md:text-base lg:text-lg",children:new Date(t.date).toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric"})});case"employee":return e(u,{className:"whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg",children:e(Se,{avatarProps:{radius:"lg",size:B||Y?"md":"sm",src:(r=t.user)==null?void 0:r.profile_image},description:(h=t.user)==null?void 0:h.phone,name:(c=t.user)==null?void 0:c.name})});case"clockin_time":return e(u,{className:"text-xs sm:text-sm md:text-base lg:text-lg",children:t.punchin_time?new Date(`2024-06-04T${t.punchin_time}`).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}):"N/A"});case"clockout_time":return e(u,{className:"text-xs sm:text-sm md:text-base lg:text-lg",children:t.punchout_time?new Date(`2024-06-04T${t.punchout_time}`).toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}):"N/A"});case"production_time":if(t.punchin_time&&t.punchout_time){const y=new Date(`2024-06-04T${t.punchin_time}`),x=new Date(`2024-06-04T${t.punchout_time}`)-y,_=Math.floor(x/(1e3*60*60)),i=Math.floor(x%(1e3*60*60)/(1e3*60));return e(u,{className:"text-xs sm:text-sm md:text-base lg:text-lg",children:`${_}h ${i}m`})}return e(u,{className:"text-xs sm:text-sm md:text-base lg:text-lg",children:"N/A"});default:return e(u,{className:"text-xs sm:text-sm md:text-base lg:text-lg",children:"N/A"})}},ce=[{name:"Date",uid:"date"},...g.roles.includes("Administrator")&&l!=="/attendance-employee"?[{name:"Employee",uid:"employee"}]:[],{name:"Clockin Time",uid:"clockin_time"},{name:"Clockout Time",uid:"clockout_time"},{name:"Production Time",uid:"production_time"}],me=t=>{te(t)},de=a.useCallback((t,n)=>{ne(r=>({...r,[t]:n}))},[]);return a.useEffect(()=>(setTimeout(()=>{T()},500),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)),[]),a.useEffect(()=>{oe(p,b,k,v,S)},[p,b,k,v,S]),e(d,{sx:{display:"flex",justifyContent:"center",p:2},children:s(o,{container:!0,spacing:2,children:[e(o,{item:!0,xs:12,md:l!=="/attendance-employee"?9:12,children:e(F,{in:!0,children:s(G,{children:[e(I,{title:e(m,{sx:{fontSize:{xs:"1.0rem",sm:"1.4rem",md:"1.8rem"}},children:l==="/attendance-employee"?"Timesheet for the month of "+new Date(S.currentMonth).toLocaleString("en-US",{month:"long",year:"numeric"}):"Timesheet of "+new Date(p).toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric"})}),sx:{padding:"24px"}}),e(U,{children:e(d,{children:s(o,{container:!0,spacing:2,children:[g.roles.includes("Administrator")&&l!=="/attendance-employee"&&s(R,{children:[e(o,{item:!0,xs:12,sm:6,md:4,children:e(N,{label:"Search",type:"text",fullWidth:!0,variant:"bordered",placeholder:"Employee...",value:v,onChange:ae,endContent:e(pe,{})})}),e(o,{item:!0,xs:12,sm:6,md:4,children:e(N,{label:"Select Date",type:"date",variant:"bordered",onChange:O,value:new Date(p).toISOString().slice(0,10)||""})})]}),g.roles.includes("Employee")&&l==="/attendance-employee"&&e(o,{item:!0,xs:12,sm:6,md:4,children:e(N,{label:"Current Month",type:"month",fullWidth:!0,variant:"bordered",placeholder:"Month...",value:S.currentMonth,onChange:t=>de("currentMonth",t.target.value)})})]})})}),e(U,{children:E?e(m,{color:"error",children:E}):s("div",{style:{maxHeight:"84vh"},children:[e(ge,{orientation:"horizontal",className:"overflow-y-hidden",children:s(ye,{isStriped:!0,selectionMode:"multiple",selectionBehavior:"toggle",isCompact:!0,removeWrapper:!0,"aria-label":"Attendance Table",isHeaderSticky:!0,children:[e(_e,{columns:ce,children:t=>e(be,{align:"start",children:t.name},t.uid)}),e(ve,{items:V,children:t=>e(we,{children:n=>le(t,n)},t.id)})]})}),K>=10&&e("div",{className:"py-2 px-2 flex justify-center items-end",style:{height:"100%"},children:e(xe,{initialPage:1,isCompact:!0,showControls:!0,showShadow:!0,color:"primary",variant:"bordered",page:b,total:Z,onChange:me})})]})})]})})}),g.roles.includes("Administrator")&&l!=="/attendance-employee"&&f.length>0&&e(o,{item:!0,xs:12,md:3,children:e(F,{in:!0,children:s(G,{ref:C,children:[e(I,{title:s(d,{sx:{display:"flex",alignItems:"center"},children:[e(m,{sx:{fontSize:{xs:"1.0rem",sm:"1.4rem",md:"1.8rem"}},children:"Absent on "+new Date(p).toLocaleString("en-US",{month:"long",day:"numeric",year:"numeric"})}),e(j,{sx:{ml:1,fontSize:{xs:"0.8rem",sm:"1.1rem",md:"1.4rem"}},label:f.length,variant:"outlined",color:"error",size:"small"})]})}),e(U,{children:s(d,{children:[f.slice(0,w).map((t,n)=>{const r=ie(t.id);return e(ue,{in:n<w,timeout:"auto",unmountOnExit:!0,children:e(d,{ref:M,sx:{mb:2,p:2,border:"1px solid #e0e0e0",borderRadius:2},children:s(o,{container:!0,alignItems:"center",children:[e(o,{item:!0,xs:12,children:s(d,{sx:{display:"flex",alignItems:"center"},children:[e(fe,{src:t.profile_image,alt:t.name}),e(m,{sx:{m:2,fontSize:{xs:"1.0rem",sm:"1.2rem",md:"1.4rem"}},children:t.name})]})}),r?s(R,{children:[s(o,{item:!0,xs:6,children:[e(m,{sx:{fontSize:{xs:"1.0rem",sm:"1.2rem",md:"1.4rem"}},children:r.from_date===r.to_date?r.from_date:`${r.from_date} to ${r.to_date}`}),e(m,{sx:{fontSize:{xs:"0.8rem",sm:"1.0rem",md:"1.2rem"}},color:"textSecondary",children:"On "+r.leave_type+" Leave"})]}),e(o,{item:!0,xs:6,sx:{textAlign:"right"},children:e(j,{label:r.status,variant:"outlined",color:r.status==="Pending"?"error":"success",size:"small"})})]}):e(o,{item:!0,xs:12,children:e(m,{color:"error",sx:{fontSize:{xs:"1.0rem",sm:"1.2rem",md:"1.4rem"}},children:"Absent without Leave"})})]})})},n)}),w<f.length&&e(d,{textAlign:"center",children:e(he,{variant:"outlined",onClick:se,children:"Load More"})})]})})]})})})]})})},De=Ce;export{De as T};
