import{s as Pt,j as Ct,a4 as Mt,r as k,a5 as it,a6 as lt,a7 as Tt,u as _t,e as Nt,a8 as Et,a9 as Ot}from"./vendor-BkBzn7Rm.js";import{r as Xt}from"./App-CN7_cQW_.js";import{a as q}from"./app-D3fM7yDT.js";var j={},Yt=Pt;Object.defineProperty(j,"__esModule",{value:!0});var Rt=j.default=void 0,Wt=Yt(Xt()),Ut=Ct;Rt=j.default=(0,Wt.default)((0,Ut.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear");var I={exports:{}},ut={};function ct(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=ct(t[e]))&&(n&&(n+=" "),n+=r);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function at(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=ct(t))&&(n&&(n+=" "),n+=e);return n}const Ft=Object.freeze(Object.defineProperty({__proto__:null,clsx:at,default:at},Symbol.toStringTag,{value:"Module"})),It=Mt(Ft);var h={},P={};Object.defineProperty(P,"__esModule",{value:!0});P.dontSetMe=Ht;P.findInArray=At;P.int=Lt;P.isFunction=$t;P.isNum=Bt;function At(t,e){for(let r=0,n=t.length;r<n;r++)if(e.apply(e,[t[r],r,t]))return t[r]}function $t(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Function]"}function Bt(t){return typeof t=="number"&&!isNaN(t)}function Lt(t){return parseInt(t,10)}function Ht(t,e,r){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(r," - do not set this, set it on the child."))}var N={};Object.defineProperty(N,"__esModule",{value:!0});N.browserPrefixToKey=ft;N.browserPrefixToStyle=Gt;N.default=void 0;N.getPrefix=dt;const H=["Moz","Webkit","O","ms"];function dt(){var t;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const r=(t=window.document)===null||t===void 0||(t=t.documentElement)===null||t===void 0?void 0:t.style;if(!r||e in r)return"";for(let n=0;n<H.length;n++)if(ft(e,H[n])in r)return H[n];return""}function ft(t,e){return e?"".concat(e).concat(Vt(t)):t}function Gt(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t}function Vt(t){let e="",r=!0;for(let n=0;n<t.length;n++)r?(e+=t[n].toUpperCase(),r=!1):t[n]==="-"?r=!0:e+=t[n];return e}N.default=dt();Object.defineProperty(h,"__esModule",{value:!0});h.addClassName=gt;h.addEvent=jt;h.addUserSelectStyles=ae;h.createCSSTransform=ee;h.createSVGTransform=re;h.getTouch=ne;h.getTouchIdentifier=oe;h.getTranslation=z;h.innerHeight=Qt;h.innerWidth=Zt;h.matchesSelector=ht;h.matchesSelectorAndParentsTo=kt;h.offsetXYFromParent=te;h.outerHeight=Kt;h.outerWidth=Jt;h.removeClassName=mt;h.removeEvent=zt;h.removeUserSelectStyles=se;var b=P,st=qt(N);function pt(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(pt=function(n){return n?r:e})(t)}function qt(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=pt(e);if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)){var c=o?Object.getOwnPropertyDescriptor(t,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}let F="";function ht(t,e){return F||(F=(0,b.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(r){return(0,b.isFunction)(t[r])})),(0,b.isFunction)(t[F])?t[F](e):!1}function kt(t,e,r){let n=t;do{if(ht(n,e))return!0;if(n===r)return!1;n=n.parentNode}while(n);return!1}function jt(t,e,r,n){if(!t)return;const o={capture:!0,...n};t.addEventListener?t.addEventListener(e,r,o):t.attachEvent?t.attachEvent("on"+e,r):t["on"+e]=r}function zt(t,e,r,n){if(!t)return;const o={capture:!0,...n};t.removeEventListener?t.removeEventListener(e,r,o):t.detachEvent?t.detachEvent("on"+e,r):t["on"+e]=null}function Kt(t){let e=t.clientHeight;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,b.int)(r.borderTopWidth),e+=(0,b.int)(r.borderBottomWidth),e}function Jt(t){let e=t.clientWidth;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e+=(0,b.int)(r.borderLeftWidth),e+=(0,b.int)(r.borderRightWidth),e}function Qt(t){let e=t.clientHeight;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,b.int)(r.paddingTop),e-=(0,b.int)(r.paddingBottom),e}function Zt(t){let e=t.clientWidth;const r=t.ownerDocument.defaultView.getComputedStyle(t);return e-=(0,b.int)(r.paddingLeft),e-=(0,b.int)(r.paddingRight),e}function te(t,e,r){const o=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),a=(t.clientX+e.scrollLeft-o.left)/r,c=(t.clientY+e.scrollTop-o.top)/r;return{x:a,y:c}}function ee(t,e){const r=z(t,e,"px");return{[(0,st.browserPrefixToKey)("transform",st.default)]:r}}function re(t,e){return z(t,e,"")}function z(t,e,r){let{x:n,y:o}=t,a="translate(".concat(n).concat(r,",").concat(o).concat(r,")");if(e){const c="".concat(typeof e.x=="string"?e.x:e.x+r),f="".concat(typeof e.y=="string"?e.y:e.y+r);a="translate(".concat(c,", ").concat(f,")")+a}return a}function ne(t,e){return t.targetTouches&&(0,b.findInArray)(t.targetTouches,r=>e===r.identifier)||t.changedTouches&&(0,b.findInArray)(t.changedTouches,r=>e===r.identifier)}function oe(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier}function ae(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,e.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,t.getElementsByTagName("head")[0].appendChild(e)),t.body&&gt(t.body,"react-draggable-transparent-selection")}function se(t){if(t)try{if(t.body&&mt(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&e.type!=="Caret"&&e.removeAllRanges()}}catch{}}function gt(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function mt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}var C={};Object.defineProperty(C,"__esModule",{value:!0});C.canDragX=ue;C.canDragY=ce;C.createCoreData=fe;C.createDraggableData=pe;C.getBoundPosition=ie;C.getControlPosition=de;C.snapToGrid=le;var S=P,X=h;function ie(t,e,r){if(!t.props.bounds)return[e,r];let{bounds:n}=t.props;n=typeof n=="string"?n:he(n);const o=K(t);if(typeof n=="string"){const{ownerDocument:a}=o,c=a.defaultView;let f;if(n==="parent"?f=o.parentNode:f=a.querySelector(n),!(f instanceof c.HTMLElement))throw new Error('Bounds selector "'+n+'" could not find an element.');const p=f,y=c.getComputedStyle(o),x=c.getComputedStyle(p);n={left:-o.offsetLeft+(0,S.int)(x.paddingLeft)+(0,S.int)(y.marginLeft),top:-o.offsetTop+(0,S.int)(x.paddingTop)+(0,S.int)(y.marginTop),right:(0,X.innerWidth)(p)-(0,X.outerWidth)(o)-o.offsetLeft+(0,S.int)(x.paddingRight)-(0,S.int)(y.marginRight),bottom:(0,X.innerHeight)(p)-(0,X.outerHeight)(o)-o.offsetTop+(0,S.int)(x.paddingBottom)-(0,S.int)(y.marginBottom)}}return(0,S.isNum)(n.right)&&(e=Math.min(e,n.right)),(0,S.isNum)(n.bottom)&&(r=Math.min(r,n.bottom)),(0,S.isNum)(n.left)&&(e=Math.max(e,n.left)),(0,S.isNum)(n.top)&&(r=Math.max(r,n.top)),[e,r]}function le(t,e,r){const n=Math.round(e/t[0])*t[0],o=Math.round(r/t[1])*t[1];return[n,o]}function ue(t){return t.props.axis==="both"||t.props.axis==="x"}function ce(t){return t.props.axis==="both"||t.props.axis==="y"}function de(t,e,r){const n=typeof e=="number"?(0,X.getTouch)(t,e):null;if(typeof e=="number"&&!n)return null;const o=K(r),a=r.props.offsetParent||o.offsetParent||o.ownerDocument.body;return(0,X.offsetXYFromParent)(n||t,a,r.props.scale)}function fe(t,e,r){const n=!(0,S.isNum)(t.lastX),o=K(t);return n?{node:o,deltaX:0,deltaY:0,lastX:e,lastY:r,x:e,y:r}:{node:o,deltaX:e-t.lastX,deltaY:r-t.lastY,lastX:t.lastX,lastY:t.lastY,x:e,y:r}}function pe(t,e){const r=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/r,y:t.state.y+e.deltaY/r,deltaX:e.deltaX/r,deltaY:e.deltaY/r,lastX:t.state.x,lastY:t.state.y}}function he(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}function K(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}var A={},$={};Object.defineProperty($,"__esModule",{value:!0});$.default=ge;function ge(){}Object.defineProperty(A,"__esModule",{value:!0});A.default=void 0;var G=ve(k),D=J(it),me=J(lt),m=h,T=C,V=P,R=J($);function J(t){return t&&t.__esModule?t:{default:t}}function vt(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,r=new WeakMap;return(vt=function(n){return n?r:e})(t)}function ve(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=vt(e);if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if(a!=="default"&&Object.prototype.hasOwnProperty.call(t,a)){var c=o?Object.getOwnPropertyDescriptor(t,a):null;c&&(c.get||c.set)?Object.defineProperty(n,a,c):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}function v(t,e,r){return e=ye(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ye(t){var e=De(t,"string");return typeof e=="symbol"?e:String(e)}function De(t,e){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}const w={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let _=w.mouse,B=class extends G.Component{constructor(){super(...arguments),v(this,"dragging",!1),v(this,"lastX",NaN),v(this,"lastY",NaN),v(this,"touchIdentifier",null),v(this,"mounted",!1),v(this,"handleDragStart",e=>{if(this.props.onMouseDown(e),!this.props.allowAnyClick&&typeof e.button=="number"&&e.button!==0)return!1;const r=this.findDOMNode();if(!r||!r.ownerDocument||!r.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=r;if(this.props.disabled||!(e.target instanceof n.defaultView.Node)||this.props.handle&&!(0,m.matchesSelectorAndParentsTo)(e.target,this.props.handle,r)||this.props.cancel&&(0,m.matchesSelectorAndParentsTo)(e.target,this.props.cancel,r))return;e.type==="touchstart"&&e.preventDefault();const o=(0,m.getTouchIdentifier)(e);this.touchIdentifier=o;const a=(0,T.getControlPosition)(e,o,this);if(a==null)return;const{x:c,y:f}=a,p=(0,T.createCoreData)(this,c,f);(0,R.default)("DraggableCore: handleDragStart: %j",p),(0,R.default)("calling",this.props.onStart),!(this.props.onStart(e,p)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,m.addUserSelectStyles)(n),this.dragging=!0,this.lastX=c,this.lastY=f,(0,m.addEvent)(n,_.move,this.handleDrag),(0,m.addEvent)(n,_.stop,this.handleDragStop))}),v(this,"handleDrag",e=>{const r=(0,T.getControlPosition)(e,this.touchIdentifier,this);if(r==null)return;let{x:n,y:o}=r;if(Array.isArray(this.props.grid)){let f=n-this.lastX,p=o-this.lastY;if([f,p]=(0,T.snapToGrid)(this.props.grid,f,p),!f&&!p)return;n=this.lastX+f,o=this.lastY+p}const a=(0,T.createCoreData)(this,n,o);if((0,R.default)("DraggableCore: handleDrag: %j",a),this.props.onDrag(e,a)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const p=document.createEvent("MouseEvents");p.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(p)}return}this.lastX=n,this.lastY=o}),v(this,"handleDragStop",e=>{if(!this.dragging)return;const r=(0,T.getControlPosition)(e,this.touchIdentifier,this);if(r==null)return;let{x:n,y:o}=r;if(Array.isArray(this.props.grid)){let p=n-this.lastX||0,y=o-this.lastY||0;[p,y]=(0,T.snapToGrid)(this.props.grid,p,y),n=this.lastX+p,o=this.lastY+y}const a=(0,T.createCoreData)(this,n,o);if(this.props.onStop(e,a)===!1||this.mounted===!1)return!1;const f=this.findDOMNode();f&&this.props.enableUserSelectHack&&(0,m.removeUserSelectStyles)(f.ownerDocument),(0,R.default)("DraggableCore: handleDragStop: %j",a),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,f&&((0,R.default)("DraggableCore: Removing handlers"),(0,m.removeEvent)(f.ownerDocument,_.move,this.handleDrag),(0,m.removeEvent)(f.ownerDocument,_.stop,this.handleDragStop))}),v(this,"onMouseDown",e=>(_=w.mouse,this.handleDragStart(e))),v(this,"onMouseUp",e=>(_=w.mouse,this.handleDragStop(e))),v(this,"onTouchStart",e=>(_=w.touch,this.handleDragStart(e))),v(this,"onTouchEnd",e=>(_=w.touch,this.handleDragStop(e)))}componentDidMount(){this.mounted=!0;const e=this.findDOMNode();e&&(0,m.addEvent)(e,w.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const e=this.findDOMNode();if(e){const{ownerDocument:r}=e;(0,m.removeEvent)(r,w.mouse.move,this.handleDrag),(0,m.removeEvent)(r,w.touch.move,this.handleDrag),(0,m.removeEvent)(r,w.mouse.stop,this.handleDragStop),(0,m.removeEvent)(r,w.touch.stop,this.handleDragStop),(0,m.removeEvent)(e,w.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,m.removeUserSelectStyles)(r)}}findDOMNode(){var e,r;return(e=this.props)!==null&&e!==void 0&&e.nodeRef?(r=this.props)===null||r===void 0||(r=r.nodeRef)===null||r===void 0?void 0:r.current:me.default.findDOMNode(this)}render(){return G.cloneElement(G.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};A.default=B;v(B,"displayName","DraggableCore");v(B,"propTypes",{allowAnyClick:D.default.bool,children:D.default.node.isRequired,disabled:D.default.bool,enableUserSelectHack:D.default.bool,offsetParent:function(t,e){if(t[e]&&t[e].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:D.default.arrayOf(D.default.number),handle:D.default.string,cancel:D.default.string,nodeRef:D.default.object,onStart:D.default.func,onDrag:D.default.func,onStop:D.default.func,onMouseDown:D.default.func,scale:D.default.number,className:V.dontSetMe,style:V.dontSetMe,transform:V.dontSetMe});v(B,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return p.default}}),t.default=void 0;var e=Dt(k),r=x(it),n=x(lt),o=x(It),a=h,c=C,f=P,p=x(A),y=x($);function x(s){return s&&s.__esModule?s:{default:s}}function Q(s){if(typeof WeakMap!="function")return null;var i=new WeakMap,u=new WeakMap;return(Q=function(l){return l?u:i})(s)}function Dt(s,i){if(s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var u=Q(i);if(u&&u.has(s))return u.get(s);var l={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in s)if(d!=="default"&&Object.prototype.hasOwnProperty.call(s,d)){var M=g?Object.getOwnPropertyDescriptor(s,d):null;M&&(M.get||M.set)?Object.defineProperty(l,d,M):l[d]=s[d]}return l.default=s,u&&u.set(s,l),l}function L(){return L=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var u=arguments[i];for(var l in u)Object.prototype.hasOwnProperty.call(u,l)&&(s[l]=u[l])}return s},L.apply(this,arguments)}function E(s,i,u){return i=St(i),i in s?Object.defineProperty(s,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):s[i]=u,s}function St(s){var i=bt(s,"string");return typeof i=="symbol"?i:String(i)}function bt(s,i){if(typeof s!="object"||s===null)return s;var u=s[Symbol.toPrimitive];if(u!==void 0){var l=u.call(s,i||"default");if(typeof l!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(s)}class W extends e.Component{static getDerivedStateFromProps(i,u){let{position:l}=i,{prevPropsPosition:g}=u;return l&&(!g||l.x!==g.x||l.y!==g.y)?((0,y.default)("Draggable: getDerivedStateFromProps %j",{position:l,prevPropsPosition:g}),{x:l.x,y:l.y,prevPropsPosition:{...l}}):null}constructor(i){super(i),E(this,"onDragStart",(u,l)=>{if((0,y.default)("Draggable: onDragStart: %j",l),this.props.onStart(u,(0,c.createDraggableData)(this,l))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),E(this,"onDrag",(u,l)=>{if(!this.state.dragging)return!1;(0,y.default)("Draggable: onDrag: %j",l);const g=(0,c.createDraggableData)(this,l),d={x:g.x,y:g.y,slackX:0,slackY:0};if(this.props.bounds){const{x:Y,y:O}=d;d.x+=this.state.slackX,d.y+=this.state.slackY;const[U,Z]=(0,c.getBoundPosition)(this,d.x,d.y);d.x=U,d.y=Z,d.slackX=this.state.slackX+(Y-d.x),d.slackY=this.state.slackY+(O-d.y),g.x=d.x,g.y=d.y,g.deltaX=d.x-this.state.x,g.deltaY=d.y-this.state.y}if(this.props.onDrag(u,g)===!1)return!1;this.setState(d)}),E(this,"onDragStop",(u,l)=>{if(!this.state.dragging||this.props.onStop(u,(0,c.createDraggableData)(this,l))===!1)return!1;(0,y.default)("Draggable: onDragStop: %j",l);const d={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:Y,y:O}=this.props.position;d.x=Y,d.y=O}this.setState(d)}),this.state={dragging:!1,dragged:!1,x:i.position?i.position.x:i.defaultPosition.x,y:i.position?i.position.y:i.defaultPosition.y,prevPropsPosition:{...i.position},slackX:0,slackY:0,isElementSVG:!1},i.position&&!(i.onDrag||i.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var i,u;return(i=(u=this.props)===null||u===void 0||(u=u.nodeRef)===null||u===void 0?void 0:u.current)!==null&&i!==void 0?i:n.default.findDOMNode(this)}render(){const{axis:i,bounds:u,children:l,defaultPosition:g,defaultClassName:d,defaultClassNameDragging:M,defaultClassNameDragged:Y,position:O,positionOffset:U,scale:Z,...wt}=this.props;let tt={},et=null;const rt=!!!O||this.state.dragging,nt=O||g,ot={x:(0,c.canDragX)(this)&&rt?this.state.x:nt.x,y:(0,c.canDragY)(this)&&rt?this.state.y:nt.y};this.state.isElementSVG?et=(0,a.createSVGTransform)(ot,U):tt=(0,a.createCSSTransform)(ot,U);const xt=(0,o.default)(l.props.className||"",d,{[M]:this.state.dragging,[Y]:this.state.dragged});return e.createElement(p.default,L({},wt,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),e.cloneElement(e.Children.only(l),{className:xt,style:{...l.props.style,...tt},transform:et}))}}t.default=W,E(W,"displayName","Draggable"),E(W,"propTypes",{...p.default.propTypes,axis:r.default.oneOf(["both","x","y","none"]),bounds:r.default.oneOfType([r.default.shape({left:r.default.number,right:r.default.number,top:r.default.number,bottom:r.default.number}),r.default.string,r.default.oneOf([!1])]),defaultClassName:r.default.string,defaultClassNameDragging:r.default.string,defaultClassNameDragged:r.default.string,defaultPosition:r.default.shape({x:r.default.number,y:r.default.number}),positionOffset:r.default.shape({x:r.default.oneOfType([r.default.number,r.default.string]),y:r.default.oneOfType([r.default.number,r.default.string])}),position:r.default.shape({x:r.default.number,y:r.default.number}),className:f.dontSetMe,style:f.dontSetMe,transform:f.dontSetMe}),E(W,"defaultProps",{...p.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(ut);const{default:yt,DraggableCore:Se}=ut;I.exports=yt;I.exports.default=yt;I.exports.DraggableCore=Se;var be=I.exports;const we=Tt(be),xe=t=>q(we,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:q(Ot,{...t})}),Ne=k.forwardRef(({open:t,closeModal:e,children:r,...n},o)=>{const a=_t();return q(Et,{...n,ref:o,open:t,onClose:e,maxWidth:"md",TransitionComponent:Nt,PaperComponent:xe,"aria-labelledby":"draggable-dialog-title",PaperProps:{sx:{backdropFilter:"blur(16px) saturate(200%)",backgroundColor:a.glassCard.backgroundColor,border:a.glassCard.border,display:"flex",flexDirection:"column",position:"relative",borderRadius:"20px",boxShadow:a.palette.mode==="light"?"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)":"unset",backgroundClip:"border-box"}},children:r})});export{Ne as G,Rt as d};
