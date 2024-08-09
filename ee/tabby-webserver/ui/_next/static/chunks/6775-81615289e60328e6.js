"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6775],{72657:function(e,n,l){l.d(n,{K:function(){return o}});var t=l(36164);l(3546);var s=l(12624),r=l(74248),a=l(31458),i=l(81565);function o(e){let{className:n,container:l,offset:o,...d}=e,c=(0,s.e)(o||0,l);return(0,t.jsxs)(a.z,{variant:"outline",size:"icon",className:(0,r.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",c?"opacity-0":"opacity-100",n),onClick:()=>{l?l.scrollTo({top:l.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},...d,children:[(0,t.jsx)(i.IconArrowDown,{}),(0,t.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}},62817:function(e,n,l){l.d(n,{e:function(){return U},p:function(){return W}});var t=l(36164),s=l(3546),r=l(78613),a=l(24449),i=l(16784),o=l(63484),d=l(74248),c=l(49142),u=l(90379),m=l(31458),v=l(81565),x=l(72657),h=l(45391),f=l(34021),p=l(21454),g=l(3765),j=l(84942),b=l(29),w=l(24685),N=l(74630),y=l(16234),C=l(23455),k=l(82394);let E=s.createContext({}),S=j.xp,I=s.forwardRef((e,n)=>(0,t.jsx)(j.tW,{...e,ref:n}));I.displayName="SearchableSelectAnchor";let R=s.forwardRef((e,n)=>{let{getInputProps:l}=s.useContext(E),{onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,...c}=e;return(0,t.jsx)(C.Z,{...l((0,y.Z)({onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,ref:n},N.Z)),...c})});R.displayName="SearchableSelectTextarea";let _=s.forwardRef((e,n)=>{let{getInputProps:l}=s.useContext(E),{onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,...c}=e;return(0,t.jsx)(k.I,{...l((0,y.Z)({onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,ref:n},N.Z)),...c})});_.displayName="SearchableSelectInput";let z=s.forwardRef((e,n)=>{let{children:l,style:r,popupMatchAnchorWidth:a,...i}=e,{getMenuProps:o,anchorRef:d}=s.useContext(E),c=s.useRef(void 0);return s.useLayoutEffect(()=>{if(a){let e=d.current;if(e){let n=e.getBoundingClientRect();c.current=n.width}}},[]),(0,t.jsx)(j.i9,{children:(0,t.jsx)(j.yk,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:c.current,...r},...o({ref:n},{suppressRefError:!0}),...i,children:l})})});z.displayName="SearchableSelectContent";let Z=s.forwardRef((e,n)=>{let{item:l,index:r,className:a,children:i,disabled:o,...c}=e,{highlightedIndex:u,selectedItem:m,getItemProps:v}=s.useContext(E),x=u===r,h=m===l;return(0,t.jsx)(S,{asChild:!0,children:(0,t.jsx)("div",{className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",x&&"bg-accent text-accent-foreground",h&&"font-bold",o&&"pointer-events-none opacity-50",a),...v({item:l,index:r,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof i?i({highlighted:x,selected:h}):i})},l.id)});function L(e){let{options:n,onSelect:l,children:r,open:a,onOpenChange:i,stayOpenOnInputClick:o}=e,d=s.useRef(null),c=s.useCallback((e,n)=>{let{type:l,changes:t}=n;switch(l){case w.Kb.stateChangeTypes.MenuMouseLeave:return{...t,highlightedIndex:e.highlightedIndex};case w.Kb.stateChangeTypes.InputClick:let s=!!o||t.isOpen;return{...t,isOpen:s};default:return t}},[o]),u=(0,w.Kb)({items:null!=n?n:[],defaultIsOpen:a,onSelectedItemChange(e){let{selectedItem:n}=e;n&&(null==l||l(n),null==i||i(!1))},onIsOpenChange:e=>{let{isOpen:n}=e;null==i||i(!!n)},stateReducer:c}),{setHighlightedIndex:m,highlightedIndex:v}=u,x=(0,N.Z)(a)?u.isOpen:u.isOpen&&a;s.useEffect(()=>{x&&(null==n?void 0:n.length)&&-1===v&&m(0)},[x,n]);let h=s.useMemo(()=>({...u,open:x,anchorRef:d}),[u,x,d]);return(0,t.jsx)(E.Provider,{value:h,children:(0,t.jsx)(j.J2,{open:x,children:"function"==typeof r?r(h):r})})}Z.displayName="SearchableSelectOption";let M=s.forwardRef(function(e,n){let{onSubmit:l,input:r,setInput:a,isLoading:i}=e,{formRef:o,onKeyDown:c}=function(){let e=(0,s.useRef)(null);return{formRef:e,onKeyDown:n=>{if("Enter"===n.key&&!n.shiftKey&&!n.nativeEvent.isComposing){var l;null===(l=e.current)||void 0===l||l.requestSubmit(),n.preventDefault()}}}}(),[u,x]=s.useState(null),[w,N]=s.useState(!1),y=s.useRef(null),C=s.useRef(),k=s.useRef(),[E,S]=s.useState([]),[_,M]=s.useState({}),{data:O}=(0,p.ZP)(u,g.Z,{revalidateOnFocus:!1,dedupingInterval:0,errorRetryCount:0});s.useEffect(()=>{var e;let n=null!==(e=null==O?void 0:O.hits)&&void 0!==e?e:[];S(n),N(!!(null==n?void 0:n.length))},[null==O?void 0:O.hits]),s.useImperativeHandle(n,()=>({focus:()=>{var e;null===(e=y.current)||void 0===e||e.focus()}})),s.useEffect(()=>{r&&y.current&&y.current!==document.activeElement&&y.current.focus()},[r]),s.useLayoutEffect(()=>{var e,n,l;(null===(e=k.current)||void 0===e?void 0:e.length)&&(null===(l=y.current)||void 0===l||null===(n=l.setSelectionRange)||void 0===n||n.call(l,k.current[0],k.current[1]),k.current=void 0)}),s.useMemo(()=>(0,h.Z)(e=>{var n,l,t,s;let r=null!==(t=null===(n=e.target)||void 0===n?void 0:n.value)&&void 0!==t?t:"",a=null!==(s=null===(l=e.target)||void 0===l?void 0:l.selectionEnd)&&void 0!==s?s:0,i=F(r,a),o=null==i?void 0:i[1];if(o){let e=encodeURIComponent("name:".concat(o," AND kind:function")),n="/v1beta/search?q=".concat(e);x(n)}else S([]),N(!1)},200),[]);let T=async e=>{if(e.preventDefault(),!(null==r?void 0:r.trim())||i)return;let n=r;Object.keys(_).forEach(e=>{var l,t,s;let r=_[e];(null==r?void 0:r.doc)&&(n=n.replaceAll(e,"\n```".concat(null!==(t=null===(l=r.doc)||void 0===l?void 0:l.language)&&void 0!==t?t:"","\n").concat(null!==(s=r.doc.body)&&void 0!==s?s:"","\n","```","\n")))}),a(""),await l(n)},A=(e,n)=>{"Enter"===e.key&&n?e.preventDefault():n&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?(S([]),N(!1)):(n||(e.preventDownshiftDefault=!0),c(e))};return(0,t.jsx)("form",{onSubmit:T,ref:o,children:(0,t.jsx)(L,{options:E,onSelect:e=>{var n,l,t;let s=null!==(n=C.current)&&void 0!==n?n:0,i=F(r,s);if(i){M({..._,["@".concat(null===(l=e.doc)||void 0===l?void 0:l.name)]:e});let n="@".concat(null==e?void 0:null===(t=e.doc)||void 0===t?void 0:t.name," "),o=r.substring(0,s).replace(new RegExp(i[0]),""),d=o.length+n.length;k.current=[d,d],a(o+n+r.slice(s))}S([]),N(!1)},open:w,onOpenChange:e=>{e&&(null==E?void 0:E.length)?N(e):(N(!1),S([]))},children:e=>{var n,l,s,o;let{open:c,highlightedIndex:u}=e,x=null==E?void 0:E[u];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I,{children:(0,t.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,t.jsx)("span",{className:(0,d.cn)((0,m.d)({size:"sm",variant:"ghost"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 hover:bg-background sm:left-4"),children:(0,t.jsx)(v.IconEdit,{})}),(0,t.jsx)(R,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none",value:r,ref:y,onChange:e=>{(0,f.Z)(e,"target.value")?(C.current=e.target.selectionEnd,a(e.target.value)):C.current=void 0},onKeyDown:e=>A(e,c)}),(0,t.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,t.jsxs)(b.u,{children:[(0,t.jsx)(b.aJ,{asChild:!0,children:(0,t.jsxs)(m.z,{type:"submit",size:"icon",disabled:i||""===r,children:[(0,t.jsx)(v.IconArrowElbow,{}),(0,t.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,t.jsx)(b._v,{children:"Send message"})]})})]})}),(0,t.jsx)(z,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,t.jsxs)(j.J2,{open:c&&!!x,children:[(0,t.jsx)(j.tW,{asChild:!0,children:(0,t.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:c&&!!(null==E?void 0:E.length)&&E.map((e,n)=>{var l,s,r;return(0,t.jsx)(Z,{item:e,index:n,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1",children:[(0,t.jsx)(D,{kind:null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.kind}),(0,t.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.name,"(...)"]})]}),(0,t.jsx)("div",{className:"flex-1 truncate text-right text-sm text-muted-foreground",children:null==e?void 0:null===(r=e.doc)||void 0===r?void 0:r.body})]})},null==e?void 0:e.id)})})}),(0,t.jsx)(j.yk,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,t.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,t.jsxs)("div",{className:"mb-2",children:[(null==x?void 0:null===(n=x.doc)||void 0===n?void 0:n.kind)?"(".concat(null==x?void 0:null===(l=x.doc)||void 0===l?void 0:l.kind,") "):"",null==x?void 0:null===(s=x.doc)||void 0===s?void 0:s.name]}),(0,t.jsx)("div",{className:"flex-1 whitespace-pre-wrap break-all text-muted-foreground",children:null==x?void 0:null===(o=x.doc)||void 0===o?void 0:o.body})]})})]})})]})}})})});function F(e,n){let l=e.substring(0,n),t=/@(\w+)$/.exec(l);return t}function D(e){let{kind:n,...l}=e;return(0,t.jsx)(v.IconSymbolFunction,{...l})}function O(e){let{href:n,children:l}=e;return(0,t.jsxs)("a",{href:n,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,t.jsx)("span",{children:l}),(0,t.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,t.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function T(e){let{className:n,...l}=e;return(0,t.jsxs)("p",{className:(0,d.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",n),...l,children:[(0,t.jsx)(O,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}let A=s.forwardRef(function(e,n){let{stop:l,reload:r,input:a,setInput:i,className:o,onSubmit:d,chatMaxWidthClass:c}=e,u=s.useRef(null),{container:h,onClearMessages:f,qaPairs:p,isLoading:g}=s.useContext(W);return s.useImperativeHandle(n,()=>({focus:()=>{var e;null===(e=u.current)||void 0===e||e.focus()}}),[]),(0,t.jsxs)("div",{className:o,children:[(0,t.jsx)(x.K,{container:h}),(0,t.jsxs)("div",{className:"mx-auto md:px-4 ".concat(c),children:[(0,t.jsxs)("div",{className:"flex h-10 items-center justify-center gap-2",children:[g?(0,t.jsxs)(m.z,{variant:"outline",onClick:()=>l(),className:"bg-background",children:[(0,t.jsx)(v.IconStop,{className:"mr-2"}),"Stop generating"]}):(null==p?void 0:p.length)>0&&(0,t.jsxs)(m.z,{variant:"outline",onClick:()=>r(),className:"bg-background",children:[(0,t.jsx)(v.IconRefresh,{className:"mr-2"}),"Regenerate response"]}),(null==p?void 0:p.length)>0&&(0,t.jsxs)(m.z,{variant:"outline",onClick:f,className:"bg-background lg:hidden",children:[(0,t.jsx)(v.IconTrash,{className:"mr-2"}),"Clear"]})]}),(0,t.jsxs)("div",{className:"space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4",children:[(0,t.jsx)(M,{ref:u,onSubmit:d,input:a,setInput:i,isLoading:g}),(0,t.jsx)(T,{className:"hidden sm:block"})]})]})]})});var H=l(76297),q=l(12624);function P(e){let{trackVisibility:n}=e,{container:l}=s.useContext(W),r=(0,q.e)(100,l),{ref:a,entry:i,inView:o}=(0,H.YD)({trackVisibility:n,delay:100,rootMargin:"0px 0px -150px 0px",root:l});return s.useEffect(()=>{r&&n&&!o&&(null==i||i.target.scrollIntoView({block:"start"}))},[o,i,r,n]),(0,t.jsx)("div",{ref:a,className:"h-px w-full"})}let J=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function Y(e){let{setInput:n,chatMaxWidthClass:l,welcomeMessage:s}=e;return(0,t.jsx)("div",{className:"mx-auto px-4 ".concat(l),children:(0,t.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,t.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:s||"Welcome"}),(0,t.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,t.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:J.map((e,l)=>(0,t.jsxs)(m.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>n(e.message),children:[(0,t.jsx)(v.IconArrowRight,{className:"mr-2 text-muted-foreground"}),(0,t.jsx)("p",{className:"text-left",children:e.heading})]},l))})]})})}var K=l(80054);let W=s.createContext({}),U=s.forwardRef(function(e,n){let{className:l,chatId:m,initialMessages:v,headers:x,api:h="/v1beta/answer",onLoaded:f,onThreadUpdates:p,onNavigateToContext:g,container:j,fetcher:b,docQuery:w,generateRelevantQuestions:N,maxWidth:y,welcomeMessage:C,promptFormClassname:k,onCopyContent:E,client:S,onSubmitMessage:I,onApplyInEditor:R}=e,[_,z]=s.useState(!1),Z=s.useRef(!1),[L,M]=s.useState(null!=v?v:[]),[F,D]=s.useState(""),O=s.useRef(null),{triggerRequest:T,isLoading:H,error:q,answer:J,stop:U}=(0,c.t)({api:h,headers:x,fetcher:b}),V=async e=>{U();let n=L.filter(n=>n.user.id!==e);M(n)},B=async e=>{let n=(0,r.Z)(L,n=>n.user.id===e);if(n>-1){var l;let e=L[n],t=[...L.slice(0,n),{...e,assistant:{...e.assistant,id:(null===(l=e.assistant)||void 0===l?void 0:l.id)||(0,d.x0)(),message:"",error:void 0}}];return M(t),T(Q(t))}},$=async()=>{if(!(null==L?void 0:L.length))return;let e=L[L.length-1].user.id;return B(e)};s.useEffect(()=>{if(!H||!(null==L?void 0:L.length)||!J)return;let e=L[L.length-1];M(n=>{var l;let t=n[n.length-1].assistant,s={...t,id:(null==t?void 0:t.id)||(0,d.x0)(),message:null!==(l=J.answer_delta)&&void 0!==l?l:"",error:void 0,relevant_code:null==J?void 0:J.relevant_code};return[...n.slice(0,n.length-1),{...e,assistant:s}]})},[J,H]);let G=(0,a.S)(()=>{j?j.scrollTo({top:j.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},100);s.useLayoutEffect(()=>{H&&G.run()},[H]),s.useEffect(()=>{q&&(null==L?void 0:L.length)&&M(e=>{var n,l,t;let s=e[e.length-1];return[...e.slice(0,e.length-1),{...s,assistant:{...s.assistant,id:(null===(n=s.assistant)||void 0===n?void 0:n.id)||(0,d.x0)(),message:null!==(t=null===(l=s.assistant)||void 0===l?void 0:l.message)&&void 0!==t?t:"",error:(null==q?void 0:q.message)==="401"?"Unauthorized":"Fail to fetch"}}]})},[q]);let Q=e=>{var n,l,t;let s=e[e.length-1].user,r=(null==s?void 0:s.selectContext)||(null==s?void 0:null===(n=s.relevantContext)||void 0===n?void 0:n[0]),a=r?{content:null!==(l=r.content)&&void 0!==l?l:"",filepath:r.filepath,language:r.filepath&&(0,o.U$)(r.filepath)[0]||"text",git_url:null!==(t=null==r?void 0:r.git_url)&&void 0!==t?t:""}:void 0;return{messages:(function(e){if(!(null==e?void 0:e.length))return[];let n=[],l=e.length;for(let t=0;t<e.length;t++){let s=e[t],{user:r,assistant:a}=s;r&&n.push(function(e,n){let{includeTransformedSelectContext:l}=n,{message:t,id:s}=e;return{id:s,role:"user",content:l?t+function(e){var n;if(!e||!e.content)return"";let{content:l,filepath:t}=e,s=null===(n=(0,o.U$)(t))||void 0===n?void 0:n[0];return"\n```".concat(null!=s?s:"","\n").concat(null!=l?l:"","\n","```","\n")}(e.selectContext):t}}(r,{includeTransformedSelectContext:l>1&&t!==l-1})),a&&n.push({role:"assistant",id:a.id,content:a.message})}return n})(e).slice(0,-1),code_query:a,doc_query:!!w,generate_relevant_questions:!!N}},X=(0,i.d)(async e=>{var n;if(H)return;let l={...e,id:null!==(n=e.id)&&void 0!==n?n:(0,d.x0)()},t=[...L,{user:l,assistant:{id:(0,d.x0)(),message:"",error:void 0}}];return M(t),T(Q(t))}),ee=async e=>{var n;return null===(n=X.current)||void 0===n?void 0:n.call(X,e)},en=async e=>I?I(e):ee({message:e});s.useEffect(()=>{Z.current&&p(L)},[L]),s.useImperativeHandle(n,()=>({sendUserChat:ee,stop:U,isLoading:H,focus:()=>{var e;return null===(e=O.current)||void 0===e?void 0:e.focus()}}),[]),s.useEffect(()=>{Z.current||(Z.current=!0,null==f||f(),z(!0))},[]);let el=y?"max-w-".concat(y):"max-w-2xl";return _?(0,t.jsx)(W.Provider,{value:{isLoading:H,qaPairs:L,onNavigateToContext:g,handleMessageAction:(e,n)=>{switch(n){case"delete":V(e);break;case"regenerate":B(e)}},onClearMessages:()=>{U(),M([])},container:j,onCopyContent:E,client:S,onApplyInEditor:R},children:(0,t.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,t.jsxs)("div",{className:"w-full px-4 ".concat(el),children:[(0,t.jsxs)("div",{className:(0,d.cn)("pb-[200px] pt-4 md:pt-10",l),children:[(null==L?void 0:L.length)?(0,t.jsx)(K.w,{messages:L,chatMaxWidthClass:el}):(0,t.jsx)(Y,{setInput:D,chatMaxWidthClass:el,welcomeMessage:C}),(0,t.jsx)(P,{trackVisibility:H})]}),(0,t.jsx)(A,{onSubmit:en,className:(0,d.cn)("fixed inset-x-0 bottom-0",k),id:m,stop:()=>{U()},reload:$,input:F,setInput:D,chatMaxWidthClass:el,ref:O})]})})}):(0,t.jsx)(u.cg,{className:"".concat(el," mx-auto pt-4 md:pt-10")})})},80054:function(e,n,l){l.d(n,{q:function(){return q},w:function(){return _}});var t=l(36164),s=l(3546),r=l(42891),a=l.n(r),i=l(23342),o=l(74630),d=l(64148),c=l(93668),u=l(98454),m=l(63484),v=l(74248),x=l(90958),h=l(29),f=l(73033),p=l(48537),g=l(43739),j=l(14079);let b=g.fC,w=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(g.ck,{ref:n,className:(0,v.cn)("border-b",l),...s})});w.displayName="AccordionItem";let N=s.forwardRef((e,n)=>{let{className:l,children:s,...r}=e;return(0,t.jsxs)(g.xz,{ref:n,className:(0,v.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",l),...r,children:[s,(0,t.jsx)(j.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})});N.displayName=g.xz.displayName;let y=s.forwardRef((e,n)=>{let{className:l,children:s,...r}=e;return(0,t.jsx)(g.VY,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:(0,t.jsx)("div",{className:(0,v.cn)("pb-4 pt-0",l),children:s})})});y.displayName=g.VY.displayName;var C=l(31458),k=l(81565),E=l(11208),S=l(3448),I=l(52569),R=l(62817);function _(e){let{messages:n,chatMaxWidthClass:l}=e,{isLoading:r}=s.useContext(R.p);return(0,t.jsx)("div",{className:"relative mx-auto px-4 ".concat(l),children:null==n?void 0:n.map((e,l)=>{let a=l===n.length-1;return(0,t.jsxs)(s.Fragment,{children:[(0,t.jsx)(z,{isLoading:!!a&&r,message:e}),!a&&(0,t.jsx)(E.Z,{className:"my-4 md:my-8"})]},e.user.id)})})}function z(e){let{message:n,isLoading:l}=e,{user:s,assistant:r}=n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z,{message:s}),!!r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(E.Z,{className:"my-4 md:my-8"}),(0,t.jsx)(M,{message:r,userMessage:s,isLoading:l,userMessageId:s.id})]})]})}function Z(e){var n,l,r,a;let{message:i}=e,[{data:d}]=(0,u.P)(),c=i.selectContext,{onNavigateToContext:x,client:h}=s.useContext(R.p),f=s.useMemo(()=>{var e,n;if(!(null==c?void 0:c.content))return"";let l=(null==c?void 0:c.filepath)&&null!==(e=(0,m.U$)(null==c?void 0:c.filepath)[0])&&void 0!==e?e:"";return"\n```".concat(l,"\n").concat(null!==(n=null==c?void 0:c.content)&&void 0!==n?n:"","\n","```","\n")},[c]),p=null;if(f&&i.selectContext){let{range:e,filepath:n}=i.selectContext;p={filepath:n,isMultiLine:!(0,o.Z)(null==e?void 0:e.start)&&!(0,o.Z)(null==e?void 0:e.end)&&e.start<e.end}}return(0,t.jsxs)("div",{className:(0,v.cn)("group relative mb-4 flex flex-col items-start gap-y-2 md:-ml-4 md:flex-row"),...e,children:[(0,t.jsxs)("div",{className:(0,v.cn)("flex w-full items-center justify-between md:w-auto",{"hidden md:flex":!(null==d?void 0:d.me.name)}),children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,t.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,t.jsx)(I.Y,{className:"h-6 w-6 md:h-8 md:w-8",fallback:(0,t.jsx)("div",{className:"flex h-6 w-6 items-center justify-center md:h-8 md:w-8",children:(0,t.jsx)(k.IconUser,{className:"h-6 w-6"})})})}),(0,t.jsx)("p",{className:"block text-xs font-bold md:hidden",children:null==d?void 0:d.me.name})]}),(0,t.jsx)("div",{className:"block opacity-0 transition-opacity group-hover:opacity-100 md:hidden",children:(0,t.jsx)(L,{...e})})]}),(0,t.jsxs)("div",{className:"group relative flex w-full justify-between gap-x-2",children:[(0,t.jsxs)("div",{className:"flex-1 space-y-2 overflow-hidden px-1 md:ml-4",children:[(0,t.jsx)(D,{message:i.message}),!!f&&(0,t.jsx)(D,{message:f}),(0,t.jsx)("div",{className:"hidden md:block",children:(0,t.jsx)(L,{...e})}),p&&i.selectContext&&(0,t.jsxs)("div",{className:"flex cursor-pointer items-center gap-1 overflow-x-auto text-xs text-muted-foreground hover:underline",onClick:()=>null==x?void 0:x(i.selectContext,{openInEditor:"vscode"===h}),children:[(0,t.jsx)(k.IconFile,{className:"h-3 w-3"}),(0,t.jsxs)("p",{className:"flex-1 truncate pr-1",children:[(0,t.jsx)("span",{children:p.filepath}),(null===(l=i.selectContext)||void 0===l?void 0:null===(n=l.range)||void 0===n?void 0:n.start)&&(0,t.jsxs)("span",{children:[":",null===(r=i.selectContext)||void 0===r?void 0:r.range.start]}),p.isMultiLine&&(0,t.jsxs)("span",{children:["-",null===(a=i.selectContext)||void 0===a?void 0:a.range.end]})]})]})]}),!(null==d?void 0:d.me.name)&&(0,t.jsx)("div",{className:"editor-bg absolute right-0 top-0 -mt-0.5 block opacity-0 transition-opacity group-hover:opacity-100 md:hidden",children:(0,t.jsx)(L,{...e})})]})]})}function L(e){let{message:n}=e,{handleMessageAction:l}=s.useContext(R.p);return(0,t.jsx)(H,{children:(0,t.jsxs)(C.z,{variant:"ghost",size:"icon",onClick:e=>null==l?void 0:l(n.id,"delete"),children:[(0,t.jsx)(k.IconTrash,{}),(0,t.jsx)("span",{className:"sr-only",children:"Delete message"})]})})}function M(e){let{message:n,userMessage:l,isLoading:r,userMessageId:a,...i}=e,{onNavigateToContext:o,client:d}=s.useContext(R.p),c=s.useMemo(()=>{var e,l;return null!==(l=null==n?void 0:null===(e=n.relevant_code)||void 0===e?void 0:e.map(e=>{var n,l;let t=null!==(l=null===(n=e.doc)||void 0===n?void 0:n.start_line)&&void 0!==l?l:0,s=e.doc.body.split("\n").length;return{kind:"file",range:{start:t,end:t+s-1},filepath:e.doc.filepath,content:e.doc.body,git_url:e.doc.git_url}}))&&void 0!==l?l:[]},[null==n?void 0:n.relevant_code]);return(0,t.jsxs)("div",{className:(0,v.cn)("group relative mb-4 flex flex-col items-start gap-y-2 md:-ml-4 md:flex-row"),...i,children:[(0,t.jsxs)("div",{className:"flex w-full items-center justify-between md:w-auto",children:[(0,t.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,t.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,t.jsx)(A,{className:"h-6 w-6 md:h-8 md:w-8"})}),(0,t.jsx)("p",{className:"block text-xs font-bold md:hidden",children:"Tabby"})]}),(0,t.jsx)("div",{className:"block opacity-0 transition-opacity group-hover:opacity-100 md:hidden",children:(0,t.jsx)(F,{message:n,userMessageId:a})})]}),(0,t.jsxs)("div",{className:"w-full flex-1 space-y-2 overflow-hidden px-1 md:ml-4",children:[(0,t.jsx)(q,{contexts:c,userContexts:l.relevantContext,onContextClick:(e,n)=>{null==o||o(e,{openInEditor:"vscode"===d&&n})},isExternalLink:!!d}),!r||(null==n?void 0:n.message)?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{message:n.message}),!!n.error&&(0,t.jsx)(O,{error:n.error})]}):(0,t.jsx)(T,{}),(0,t.jsx)("div",{className:"hidden md:block",children:(0,t.jsx)(F,{message:n,userMessageId:a})})]})]})}function F(e){let{handleMessageAction:n,isLoading:l,onCopyContent:r}=s.useContext(R.p),{message:a,userMessageId:i}=e;return(0,t.jsxs)(H,{children:[!l&&(0,t.jsxs)(C.z,{variant:"ghost",size:"icon",onClick:e=>n(i,"regenerate"),children:[(0,t.jsx)(k.IconRefresh,{}),(0,t.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,t.jsx)(p.q,{value:a.message,onCopyContent:r})]})}function D(e){let{message:n}=e,{onCopyContent:l,onApplyInEditor:r}=s.useContext(R.p);return(0,t.jsx)(f.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[d.Z,c.Z],components:{p(e){let{children:n}=e;return(0,t.jsx)("p",{className:"mb-2 last:mb-0",children:n})},code(e){var n;let{node:s,inline:a,className:i,children:o,...d}=e;if(o.length){if("▍"==o[0])return(0,t.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});o[0]=o[0].replace("`▍`","▍")}let c=/language-(\w+)/.exec(i||""),u=function(e){let n={};if(!e)return n;let l=e.split(" ");return l.forEach(e=>{let[l,t]=e.split("=");n[l]=t}),n}(null===(n=s.data)||void 0===n?void 0:n.meta),m=(null==u?void 0:u.is_reference)==="1";return m?null:a?(0,t.jsx)("code",{className:i,...d,children:o}):(0,t.jsx)(x.dn,{language:c&&c[1]||"",value:String(o).replace(/\n$/,""),onCopyContent:l,onApplyInEditor:r,...d},Math.random())}},children:n})}function O(e){let{error:n="Fail to fetch"}=e,l=s.useMemo(()=>"```\n"+JSON.stringify({error:!0,message:n},null,2)+"\n```",[n]);return(0,t.jsx)(f.s,{className:"prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[d.Z,c.Z],components:{code(e){let{node:n,inline:l,className:s,children:r,...a}=e;return(0,t.jsx)("div",{...a,className:(0,v.cn)(s,"bg-zinc-950 p-2"),children:r})}},children:l})}function T(){return(0,t.jsxs)("div",{className:"space-y-2 py-2 md:px-1 md:py-0",children:[(0,t.jsx)(S.O,{className:"h-3 w-full"}),(0,t.jsx)(S.O,{className:"h-3 w-full"})]})}function A(e){let{className:n}=e;return(0,t.jsx)(a(),{style:{backgroundColor:"#E8E2D2"},className:(0,v.cn)("rounded-full p-0.5",n),src:i.Z,alt:"tabby"})}function H(e){let{className:n,...l}=e;return(0,t.jsx)("div",{className:(0,v.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",n),...l})}let q=e=>{let{contexts:n,userContexts:l,className:s,onContextClick:r,defaultOpen:a,enableTooltip:i,onTooltipClick:o,isExternalLink:d}=e,c=((null==l?void 0:l.length)||0)+n.length;return 0===c?null:(0,t.jsx)(b,{type:"single",collapsible:!0,className:(0,v.cn)("bg-transparent text-foreground",s),defaultValue:a?"references":void 0,children:(0,t.jsxs)(w,{value:"references",className:"my-0 border-0",children:[(0,t.jsx)(N,{className:"my-0 py-2 font-semibold",children:(0,t.jsx)("span",{className:"mr-2",children:"Read ".concat(c," file").concat(c>1?"s":"")})}),(0,t.jsxs)(y,{className:"space-y-2",children:[null==l?void 0:l.map((e,n)=>(0,t.jsx)(P,{context:e,onContextClick:e=>null==r?void 0:r(e,!0)},"user-".concat(n))),n.map((e,n)=>(0,t.jsx)(P,{context:e,onContextClick:e=>null==r?void 0:r(e,!1),enableTooltip:i,onTooltipClick:o,isExternalLink:d},"assistant-".concat(n)))]})]})})};function P(e){var n,l,r,a;let{context:i,clickable:d=!0,onContextClick:c,enableTooltip:u,onTooltipClick:m,isExternalLink:x}=e,[f,p]=(0,s.useState)(!1),g=!(0,o.Z)(null===(n=i.range)||void 0===n?void 0:n.start)&&!(0,o.Z)(null===(l=i.range)||void 0===l?void 0:l.end)&&i.range.start<i.range.end,j=i.filepath.split("/"),b=j[j.length-1],w=j.slice(0,j.length-1).join("/"),N=null==i?void 0:null===(r=i.extra)||void 0===r?void 0:r.scores;return(0,t.jsxs)(h.u,{open:f,onOpenChange:e=>{u&&N&&p(e)},delayDuration:0,children:[(0,t.jsx)(h.aJ,{asChild:!0,children:(0,t.jsx)("div",{className:(0,v.cn)("rounded-md border p-2",{"cursor-pointer hover:bg-accent":d,"cursor-default pointer-events-auto":!d}),onClick:e=>d&&(null==c?void 0:c(i)),children:(0,t.jsxs)("div",{className:"flex items-center gap-1 overflow-hidden",children:[(0,t.jsx)(k.IconFile,{className:"shrink-0"}),(0,t.jsxs)("div",{className:"flex-1 truncate",title:i.filepath,children:[(0,t.jsx)("span",{children:b}),(null===(a=i.range)||void 0===a?void 0:a.start)&&(0,t.jsxs)("span",{className:"text-muted-foreground",children:[":",i.range.start]}),g&&(0,t.jsxs)("span",{className:"text-muted-foreground",children:["-",i.range.end]}),(0,t.jsx)("span",{className:"ml-2 text-xs text-muted-foreground",children:w})]}),x&&(0,t.jsx)(k.IconExternalLink,{className:"shrink-0 text-muted-foreground"})]})})}),(0,t.jsx)(h._v,{align:"start",onClick:m,className:"cursor-pointer p-2",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"mb-2 font-semibold",children:"Scores"}),(0,t.jsxs)("div",{className:"space-y-1",children:[(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("span",{className:"w-20",children:"rrf:"}),null==N?void 0:N.rrf]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("span",{className:"w-20",children:"bm25:"}),null==N?void 0:N.bm25]}),(0,t.jsxs)("div",{className:"flex",children:[(0,t.jsx)("span",{className:"w-20",children:"embedding:"}),null==N?void 0:N.embedding]})]})]})})]})}},73033:function(e,n,l){l.d(n,{s:function(){return r}});var t=l(3546),s=l(52991);let r=(0,t.memo)(s.D,(e,n)=>e.children===n.children&&e.className===n.className)},90958:function(e,n,l){l.d(n,{dn:function(){return u}});var t=l(36164),s=l(3546),r=l(73162),a=l(83008),i=l(28312),o=l(31458),d=l(81565),c=l(29);let u=(0,s.memo)(e=>{let{language:n,value:l,onCopyContent:s,onApplyInEditor:u}=e,{isCopied:m,copyToClipboard:v}=(0,i.m)({timeout:2e3,onCopyContent:s});return(0,t.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,t.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,t.jsx)("span",{className:"text-xs lowercase",children:n}),(0,t.jsxs)("div",{className:"flex items-center space-x-1",children:[u&&(0,t.jsxs)(c.u,{children:[(0,t.jsx)(c.aJ,{asChild:!0,children:(0,t.jsxs)(o.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:u.bind(null,l),children:[(0,t.jsx)(d.IconApplyInEditor,{}),(0,t.jsx)("span",{className:"sr-only",children:"Apply in Editor"})]})}),(0,t.jsx)(c._v,{children:(0,t.jsx)("p",{className:"m-0",children:"Apply in Editor"})})]}),(0,t.jsxs)(c.u,{children:[(0,t.jsx)(c.aJ,{asChild:!0,children:(0,t.jsxs)(o.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{m||v(l)},children:[m?(0,t.jsx)(d.IconCheck,{}):(0,t.jsx)(d.IconCopy,{}),(0,t.jsx)("span",{className:"sr-only",children:"Copy"})]})}),(0,t.jsx)(c._v,{children:(0,t.jsx)("p",{className:"m-0",children:"Copy"})})]})]})]}),(0,t.jsx)(r.Z,{language:"toml"===n?"bash":n,style:a.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:l})]})});u.displayName="CodeBlock"},52569:function(e,n,l){l.d(n,{Y:function(){return j},n:function(){return b}});var t=l(36164),s=l(3546),r=l(87782),a=l(21454),i=l(36327),o=l(98454),d=l(3765),c=l(74248),u=l(66612);let m=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(u.fC,{ref:n,className:(0,c.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",l),...s})});m.displayName=u.fC.displayName;let v=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(u.Ee,{ref:n,className:(0,c.cn)("aspect-square h-full w-full",l),...s})});v.displayName=u.Ee.displayName;let x=s.forwardRef((e,n)=>{let{className:l,...s}=e;return(0,t.jsx)(u.NY,{ref:n,className:(0,c.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",l),...s})});x.displayName=u.NY.displayName;var h=l(3448),f=l(30410).lW;let p="not_found",g=!0;function j(e){var n,l,a,u;let{className:j,fallback:b}=e,[{data:w}]=(0,o.P)(),N=null==w?void 0:w.me.id,y=N&&"/avatar/".concat(w.me.id)||null,{data:C,isLoading:k,error:E}=(0,i.Z)(y,e=>{if(g)return(0,d.Z)(e,{responseFormatter:async e=>{let n=await e.blob(),l=f.from(await n.arrayBuffer());return"data:image/png;base64,".concat(l.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(p)}})}),S=s.useMemo(()=>{var e;if(null==w?void 0:null===(e=w.me)||void 0===e?void 0:e.email)return(0,r.B)(w.me.email)},[null==w?void 0:null===(n=w.me)||void 0===n?void 0:n.email]);return k?(0,t.jsx)(h.O,{className:(0,c.cn)("h-16 w-16 rounded-full",j)}):((null==E?void 0:E.message)===p&&(g=!1),C||S||!b)?!C&&S?(0,t.jsx)(r.Z,{className:(0,c.cn)("h-16 w-16",j),...S}):(0,t.jsxs)(m,{className:(0,c.cn)("h-16 w-16",j),children:[(0,t.jsx)(v,{src:C,alt:null==w?void 0:null===(l=w.me)||void 0===l?void 0:l.email,className:"object-cover"}),(0,t.jsx)(x,{children:null==w?void 0:null===(u=w.me)||void 0===u?void 0:null===(a=u.email)||void 0===a?void 0:a.substring(0,2)})]}):b}let b=e=>{g=!0,(0,a.JG)("/avatar/".concat(e))}},12624:function(e,n,l){l.d(n,{e:function(){return r}});var t=l(3546),s=l(62940);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,[l,r]=t.useState(!1);return t.useEffect(()=>{if(n)return;let l=(0,s.Z)(()=>{r(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)},100,{leading:!0});return window.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l,{passive:!0}),l(),()=>{window.removeEventListener("scroll",l),window.removeEventListener("resize",l)}},[e,n]),t.useEffect(()=>{if(!n)return;let l=(0,s.Z)(()=>{let{scrollTop:l,clientHeight:t,scrollHeight:s}=n;r(l+t>=s-e)},100,{leading:!0});return n.addEventListener("scroll",l,{passive:!0}),n.addEventListener("resize",l,{passive:!0}),l(),()=>{n.removeEventListener("scroll",l),n.removeEventListener("resize",l)}},[e,n]),l}},49142:function(e,n,l){l.d(n,{t:function(){return r}});var t=l(3546),s=l(15696);function r(e){let{api:n="/v1beta/answer",onError:l,headers:r,fetcher:a}=e,[i,o]=t.useState(!1),[d,c]=t.useState(),[u,m]=t.useState(),v=t.useRef(null),x=e=>{if("event"===e.type&&"data"in e){let n=JSON.parse(e.data);n&&c(e=>h(e,n))}},h=(e,n)=>{var l,t;return e?{...e,answer_delta:"".concat(null!==(l=null==e?void 0:e.answer_delta)&&void 0!==l?l:"").concat(null!==(t=null==n?void 0:n.answer_delta)&&void 0!==t?t:""),relevant_documents:(null==n?void 0:n.relevant_documents)||e.relevant_documents,relevant_questions:(null==n?void 0:n.relevant_questions)||e.relevant_questions}:n},f=async e=>{try{o(!0),m(void 0),c(void 0);let l=new AbortController;v.current=l;let i=null!=a?a:window.fetch,d=await i(n,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",...r},signal:null==l?void 0:l.signal}).catch(e=>{throw e});if(!(null==d?void 0:d.ok))throw Error(String(d.status));if(null==d.body)throw Error("The response body is empty");let u=d.body.pipeThrough(new TextDecoderStream).pipeThrough(new s.m).getReader();for(;;){var t;let{done:e,value:n}=await u.read();if(e||(null===(t=l.signal)||void 0===t?void 0:t.aborted))break;x(n)}}catch(e){if((null==e?void 0:e.name)==="AbortError")return v.current=null,null;l&&e instanceof Error&&l(e),m(e)}finally{o(!1)}};return{isLoading:i,answer:d,error:u,setError:m,triggerRequest:f,stop:()=>{v.current&&(v.current.abort(),v.current=null)}}}}}]);