import{j as p,a as e,q as ne,Y as oe,G as le,F as C,c as se,B as K}from"./app-COlRSZSH.js";import{p as ce,q as de,o as U,B as P,Q as ie,u as ue,r as l,U as he,e as pe,g as me,c as ye,f as ge,a as Q,G as Y,b as T,I as z}from"./vendor-Dul5qjIJ.js";import{A as be}from"./App-OYkIIhWA.js";import{d as M}from"./dayjs.min-B75L56Ne.js";import{t as fe,a as xe,b as Ce,c as ke,d as S,e as ve}from"./chunk-YRZGWF2W-BuWUa-EF.js";import{u as Me}from"./chunk-TLBGAR4N-BrBoeMFg.js";import{d as _e,p as Ae}from"./Search-qG9pxPEi.js";import{D as J,u as $,w as we}from"./xlsx-C1FC9ofm.js";const O=ce(de.jsx("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"}),"CalendarMonth"),Ye=({allUsers:k,attendanceData:g,currentYear:a,currentMonth:_,leaveTypes:b,leaveCounts:H})=>{if(!g||g.length===0)return p(P,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",children:[e(U,{})," "]});const A=M(`${a}-${_}-01`).daysInMonth(),w=[{label:"Sl",key:"sl"},{label:"Name",key:"name"},...Array.from({length:A},(t,s)=>{const u=s+1;return{label:`${u}`,key:`day-${u}`}}),...b.map(t=>({label:t.type,key:t.type}))];console.log(w);const E=t=>b.map(s=>{var f;const u=((f=H[t])==null?void 0:f[s])||0;return e(S,{align:"center",children:u},s)}),F=t=>{const s=g.find(u=>u.user_id===t);return Array.from({length:A},(u,f)=>{const x=f+1,I=M(`${a}-${_}-${x}`).format("YYYY-MM-DD"),D=s?s[I]:"▼";return e(S,{align:"center",children:D},`day-${x}`)})};return e("div",{style:{maxHeight:"84vh",overflowY:"auto"},children:p(ve,{isStriped:!0,selectionMode:"multiple",selectionBehavior:"toggle",isCompact:!0,isHeaderSticky:!0,removeWrapper:!0,"aria-label":"Attendance Table",children:[e(fe,{columns:w,children:t=>e(xe,{align:"center",children:t.label},t.key)}),e(Ce,{children:k.map((t,s)=>p(ke,{children:[e(S,{children:s+1}),e(S,{style:{whiteSpace:"nowrap",textAlign:"start"},children:e(Me,{avatarProps:{radius:"lg",src:t.profile_image},name:t.name})}),F(t.id),E(t.id)]},t.id))})]})})},Se=ie.memo(({title:k,allUsers:g})=>{const a=ue(),{auth:_}=ne().props,[b,H]=l.useState([]),[A,w]=l.useState([]),[E,F]=l.useState([]),[t,s]=l.useState(0),[u,f]=l.useState(0),[x,I]=l.useState(""),D=he(a.breakpoints.down("md")),[L,$e]=l.useState(30),[j,X]=l.useState(1);l.useState(null);const[o,Z]=l.useState({currentYear:new Date().getFullYear(),currentMonth:new Date().getMonth()+1}),B=M(`${o.currentYear}-${o.currentMonth}-01`).daysInMonth(),W=l.useCallback((n,c)=>{Z(h=>({...h,[n]:c}))},[]),ee=async(n,c,h)=>{try{const d=await se.get(route("attendancesAdmin.paginate"),{params:{page:n,perPage:c,employee:x,currentYear:h.currentYear!=="all"?h.currentYear:"",currentMonth:h.currentMonth!=="all"?h.currentMonth:""}});H(d.data.data),s(d.data.total),f(d.data.last_page),F(d.data.leaveTypes),w(d.data.leaveCounts)}catch(d){console.log(d),K.error("Failed to fetch data.",{icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}})}},te=n=>{const c=n.target.value.toLowerCase();I(c)};l.useEffect(()=>{ee(j,L,o)},[j,L,o,x]);const ae=n=>{X(n)},G=async()=>{const n=new Promise((c,h)=>{try{const d=g.map((r,v)=>{const m=b.find(y=>y.user_id===r.id)||{},i={sl:v+1,name:r.name};for(let y=0;y<B;y++){const q=y+1,re=M(`${o.currentYear}-${o.currentMonth}-${q}`).format("YYYY-MM-DD");i[`day-${q}`]=m[re]==="present"?"√":"▼"}return i.absence=r.absence||"-",i.personal=r.personal||"-",i.sick=r.sick||"-",i.marital=r.marital||"-",i.funeral=r.funeral||"-",i.maternity=r.maternity||"-",i.annualHoliday=r.annualHoliday||"-",i.festivalHoliday=r.festivalHoliday||"-",i}),R=[{label:"Sl",key:"sl"},{label:"Name",key:"name"},...Array.from({length:B},(r,v)=>{const m=v+1,y=M(`${o.currentYear}-${o.currentMonth}-${m}`).format("ddd");return{label:`${m}
${y}`,key:`day-${m}`}}),{label:"Absence",key:"absence"},{label:"Personal",key:"personal"},{label:"Sick",key:"sick"},{label:"Marital",key:"marital"},{label:"Funeral",key:"funeral"},{label:"Maternity",key:"maternity"},{label:"Annual Holiday",key:"annualHoliday"},{label:"Festival Holiday",key:"festivalHoliday"}],V=$.json_to_sheet(d,{header:R.map(r=>r.key)});R.forEach((r,v)=>{const m=$.encode_cell({c:v,r:0});V[m].v=r.label});const N=$.book_new();$.book_append_sheet(N,V,"Attendance"),we(N,"AttendanceData.xlsx"),c("Export successful!")}catch(d){h("Failed to export data. Please try again."),console.error("Error exporting data to Excel:",d)}});K.promise(n,{pending:{render(){return p("div",{style:{display:"flex",alignItems:"center"},children:[e(U,{}),e("span",{style:{marginLeft:"8px"},children:"Exporting data to Excel ..."})]})},icon:!1,style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},success:{render({data:c}){return e(C,{children:c})},icon:"🟢",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}},error:{render({data:c}){return e(C,{children:c})},icon:"🔴",style:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,color:a.palette.text.primary}}})};return console.log(b),p(C,{children:[e(oe,{title:k}),e(P,{sx:{display:"flex",justifyContent:"center",p:2},children:e(pe,{in:!0,children:p(le,{children:[e(me,{title:"Attendances",sx:{padding:"24px"},action:e(P,{display:"flex",gap:2,children:_.roles.includes("Administrator")&&e(C,{children:D?e(C,{children:e(ye,{title:"Export Daily Works",color:"success",onClick:G,children:e(J,{})})}):e(C,{children:e(ge,{title:"Export Daily Works",variant:"outlined",color:"success",startIcon:e(J,{}),onClick:G,children:"Export"})})})})}),e(Q,{children:e(P,{children:p(Y,{container:!0,spacing:2,children:[e(Y,{item:!0,xs:12,sm:6,md:3,children:e(T,{label:"Employee",fullWidth:!0,variant:"outlined",placeholder:"Employee...",value:x,onChange:te,InputProps:{startAdornment:e(z,{position:"start",children:e(_e,{})})}})}),e(Y,{item:!0,xs:6,sm:4,md:3,children:e(T,{label:"Current Month",type:"month",fullWidth:!0,variant:"outlined",placeholder:"Month...",value:o.currentMonth,onChange:n=>W("currentMonth",n.target.value),InputProps:{startAdornment:e(z,{position:"start",children:e(O,{})})}})}),e(Y,{item:!0,xs:6,sm:4,md:3,children:e(T,{label:"Current Year",type:"year",fullWidth:!0,variant:"outlined",placeholder:"Year...",value:o.currentYear,onChange:n=>W("currentYear",n.target.value),InputProps:{startAdornment:e(z,{position:"start",children:e(O,{})})}})})]})})}),p(Q,{children:[e(Ye,{allUsers:g,attendanceData:b,currentYear:o.currentYear,currentMonth:o.currentMonth,leaveTypes:E,leaveCounts:A}),t>=30&&e("div",{className:"py-2 px-2 flex justify-center items-center",children:e(Ae,{initialPage:1,isCompact:!0,showControls:!0,showShadow:!0,color:"primary",variant:"bordered",page:j,total:u,onChange:ae})})]})]})})})]})});Se.layout=k=>e(be,{children:k});export{Se as default};
