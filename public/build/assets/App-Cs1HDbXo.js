import{r as _,q as I,j as l,a as e,b as x,d as z,c as A,G as q,g as T,e as N,u as F,f as w,Q as P,H as V,h as G,F as Q}from"./app-DiUR1eCC.js";import{p as D,q as g,s as E,u as j,r,Z as k,$ as U,g as Z,c as J,a0 as L,a1 as C,a2 as M,a3 as S,a4 as K,B as b,U as W,a5 as X,a6 as Y}from"./vendor-D_oqeI5X.js";const ee=D(g.jsx("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),te=D(g.jsx("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");var y={},ne=E;Object.defineProperty(y,"__esModule",{value:!0});var H=y.default=void 0,oe=ne(_()),re=g;H=y.default=(0,oe.default)((0,re.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4z"}),"AddBox");var B={},ae=E;Object.defineProperty(B,"__esModule",{value:!0});var O=B.default=void 0,se=ae(_()),ie=g;O=B.default=(0,se.default)((0,ie.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20"}),"AccountCircle");const le=({auth:d,contentRef:i,setBottomNavHeight:m})=>{const c=j(),{url:a}=I(),[p,n]=r.useState(0),u=r.useRef(null),s=()=>{if(u.current){const f=u.current.clientHeight;m(f)}};r.useEffect(()=>(s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)),[]),r.useEffect(()=>{a.includes("/daily-works")?n(1):a.includes("/dashboard")?n(0):a.includes(`/profile/${d.user.id}`)&&n(2)},[a,d.user.id]);const h=(f,v)=>{n(v)};return l(U,{ref:u,sx:{position:"fixed",bottom:0,left:0,right:0,zIndex:1200,display:{xs:"flex",md:"none"},backdropFilter:"blur(16px) saturate(200%)",backgroundColor:c.glassCard.backgroundColor},elevation:3,showLabels:!0,value:p,onChange:h,children:[e(k,{component:x,href:"/dashboard",label:"Home",icon:e(z,{})}),e(k,{component:x,href:"/daily-works",label:"Tasks",icon:e(H,{})}),e(k,{component:x,href:route("profile",{user:d.user.id}),label:"Profile",icon:e(O,{})})]})},ce=({toggleSideBar:d})=>{const i=j(),{auth:m,url:c}=I().props,a=m.roles.includes("admin"),p=T(a),[n,u]=r.useState(null),[s,h]=r.useState(c),f=t=>{u(o=>o===t?null:t)},v=t=>{h(t),f(t)};return e(b,{sx:{p:2,height:"100%"},children:l(q,{children:[e(Z,{}),e(J,{sx:{position:"absolute",zIndex:1,top:8,right:8,color:i.palette.text.primary},size:"large",onClick:d,children:e(A,{})}),e(L,{children:p.map(t=>t.subMenu?l("div",{children:[l(C,{button:!0,onClick:()=>v(t.name),sx:{backgroundColor:s===t.name?i.palette.action.selected:"transparent"},children:[e(M,{children:t.icon}),e(S,{primary:t.name}),t.subMenu?n===t.name?e(ee,{}):e(te,{}):null]}),t.subMenu&&e(K,{in:n===t.name,timeout:"auto",unmountOnExit:!0,children:e(L,{component:"div",disablePadding:!0,children:t.subMenu.map(o=>e(x,{as:"a",href:route(o.route),method:o.method||void 0,style:{alignItems:"center",color:i.palette.text.primary,textDecoration:"none"},children:l(C,{onClick:()=>h(o.name),sx:{pl:3,backgroundColor:s===o.name?i.palette.action.selected:"transparent"},button:!0,children:[e(M,{children:o.icon}),e(S,{primary:o.name})]})},o.name))})})]},t.name):e(x,{as:"a",href:route(t.route),method:t.method||void 0,style:{alignItems:"center",color:i.palette.text.primary,textDecoration:"none"},children:l(C,{button:!0,onClick:()=>h(t.name),sx:{backgroundColor:s===t.name?i.palette.action.selected:"transparent"},children:[e(M,{children:t.icon}),e(S,{primary:t.name})]})},t.name))})]})})},de=()=>e("div",{className:"spinner-container",children:e(N.Dots,{animation:"fade",background:"rgba(0, 0, 0, 0.5)",color:"#3498db",size:60})});function me({children:d}){const[i,m]=r.useState(),{auth:c}=I().props,[a,p]=r.useState(!1),[n,u]=r.useState(()=>localStorage.getItem("darkMode")==="true"),s=r.useRef(null),[h,f]=r.useState(0);r.useEffect(()=>{localStorage.setItem("darkMode",n)},[n]);const v=()=>{u(!n),console.log(n)},t=()=>{p(!a)},o=F(n),R=W(o.breakpoints.down("md"));return w.Inertia.on("start",()=>{m(!0)}),w.Inertia.on("finish",$=>{m(!1)}),l(Y,{theme:o,children:[e(P,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"}),e(X,{}),i&&e(de,{}),l(b,{sx:{display:"flex",flexDirection:"row",height:"100vh"},children:[e(b,{sx:{display:{xs:"none",md:"block"},height:"100vh",width:a?260:0,transition:"width 0.3s ease-in-out",flexDirection:"column",overflow:"hidden"},children:e(ce,{toggleSideBar:t})}),l(b,{ref:s,sx:{pb:`${h}px`,display:"flex",flex:1,flexDirection:"column",height:"100vh",overflow:"auto"},children:[c.user&&e(V,{darkMode:n,toggleDarkMode:v,sideBarOpen:a,toggleSideBar:t}),c.user&&e(G,{}),d,c.user&&R&&e(le,{setBottomNavHeight:f,contentRef:s,auth:c})]})]}),e(Q,{})]})}export{me as A};
