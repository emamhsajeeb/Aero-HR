import{t as $,c as k,m as E,u as R,o as x,f as C}from"./App-DJVeLFFD.js";import{r as b,w as B}from"./vendor-C3l6kYDa.js";var D=["data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],L=["data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],z=$({base:[],variants:{orientation:{vertical:["overflow-y-auto",...D],horizontal:["overflow-x-auto",...L]},hideScrollBar:{true:"scrollbar-hide",false:""}},defaultVariants:{orientation:"vertical",hideScrollBar:!1}});function N(d={}){const{domRef:i,isEnabled:v=!0,overflowCheck:r="vertical",visibility:o="auto",offset:f=0,onVisibilityChange:h,updateDeps:m=[]}=d,p=b.useRef(o);b.useEffect(()=>{const t=i==null?void 0:i.current;if(!t||!v)return;const _=(s,e,c,a,l)=>{if(o==="auto"){const n=`${a}${k(l)}Scroll`;e&&c?(t.dataset[n]="true",t.removeAttribute(`data-${a}-scroll`),t.removeAttribute(`data-${l}-scroll`)):(t.dataset[`${a}Scroll`]=e.toString(),t.dataset[`${l}Scroll`]=c.toString(),t.removeAttribute(`data-${a}-${l}-scroll`))}else{const n=e&&c?"both":e?a:c?l:"none";n!==p.current&&(h==null||h(n),p.current=n)}},u=()=>{const s=[{type:"vertical",prefix:"top",suffix:"bottom"},{type:"horizontal",prefix:"left",suffix:"right"}];for(const{type:e,prefix:c,suffix:a}of s)if(r===e||r==="both"){const l=e==="vertical"?t.scrollTop>f:t.scrollLeft>f,n=e==="vertical"?t.scrollTop+t.clientHeight+f<t.scrollHeight:t.scrollLeft+t.clientWidth+f<t.scrollWidth;_(e,l,n,c,a)}},g=()=>{["top","bottom","top-bottom","left","right","left-right"].forEach(s=>{t.removeAttribute(`data-${s}-scroll`)})};return u(),t.addEventListener("scroll",u),o!=="auto"&&(g(),o==="both"?(t.dataset.topBottomScroll=String(r==="vertical"),t.dataset.leftRightScroll=String(r==="horizontal")):(t.dataset.topBottomScroll="false",t.dataset.leftRightScroll="false",["top","bottom","left","right"].forEach(s=>{t.dataset[`${s}Scroll`]=String(o===s)}))),()=>{t.removeEventListener("scroll",u),g()}},[...m,v,o,r,h,i])}function O(d){var i;const[v,r]=E(d,z.variantKeys),{ref:o,as:f,children:h,className:m,style:p,size:t=40,offset:_=0,visibility:u="auto",isEnabled:g=!0,onVisibilityChange:s,...e}=v,c=f||"div",a=R(o);N({domRef:a,offset:_,visibility:u,isEnabled:g,onVisibilityChange:s,updateDeps:[h],overflowCheck:(i=d.orientation)!=null?i:"vertical"});const l=b.useMemo(()=>z({...r,className:m}),[x(r),m]);return{Component:c,styles:l,domRef:a,children:h,getBaseProps:(w={})=>{var S;return{ref:a,className:l,"data-orientation":(S=d.orientation)!=null?S:"vertical",style:{"--scroll-shadow-size":`${t}px`,...p,...w.style},...e,...w}}}}var y=C((d,i)=>{const{Component:v,children:r,getBaseProps:o}=O({...d,ref:i});return B.jsx(v,{...o(),children:r})});y.displayName="NextUI.ScrollShadow";var j=y;export{j as s};
