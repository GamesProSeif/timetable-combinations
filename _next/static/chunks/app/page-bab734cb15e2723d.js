(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5241:(e,t,s)=>{Promise.resolve().then(s.bind(s,1862))},1862:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>e1});var a=s(5155),r=s(2115),n=s(9606),l=s(2679),i=s(4085),o=s(5910),c=s(2361),d=s(1680),u=s(4511),m=s(7926),x=s(6758),f=s(6625),p=s(2317),h=s(9602),j=s(6195),b=s(1027);let y=(0,b.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),g=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(j.b,{ref:t,className:(0,h.cn)(y(),s),...r})});g.displayName=j.b.displayName;let v=n.Op,N=r.createContext({}),w=e=>{let{...t}=e;return(0,a.jsx)(N.Provider,{value:{name:t.name},children:(0,a.jsx)(n.xI,{...t})})},S=()=>{let e=r.useContext(N),t=r.useContext(C),{getFieldState:s,formState:a}=(0,n.xW)(),l=s(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...l}},C=r.createContext({}),z=r.forwardRef((e,t)=>{let{className:s,...n}=e,l=r.useId();return(0,a.jsx)(C.Provider,{value:{id:l},children:(0,a.jsx)("div",{ref:t,className:(0,h.cn)("space-y-2",s),...n})})});z.displayName="FormItem";let k=r.forwardRef((e,t)=>{let{className:s,...r}=e,{error:n,formItemId:l}=S();return(0,a.jsx)(g,{ref:t,className:(0,h.cn)(n&&"text-destructive",s),htmlFor:l,...r})});k.displayName="FormLabel";let A=r.forwardRef((e,t)=>{let{...s}=e,{error:r,formItemId:n,formDescriptionId:l,formMessageId:i}=S();return(0,a.jsx)(p.DX,{ref:t,id:n,"aria-describedby":r?"".concat(l," ").concat(i):"".concat(l),"aria-invalid":!!r,...s})});A.displayName="FormControl";let T=r.forwardRef((e,t)=>{let{className:s,...r}=e,{formDescriptionId:n}=S();return(0,a.jsx)("p",{ref:t,id:n,className:(0,h.cn)("text-sm text-muted-foreground",s),...r})});T.displayName="FormDescription";let E=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e,{error:l,formMessageId:i}=S(),o=l?String(null==l?void 0:l.message):r;return o?(0,a.jsx)("p",{ref:t,id:i,className:(0,h.cn)("text-sm font-medium text-destructive",s),...n,children:o}):null});E.displayName="FormMessage";var R=s(434);let I=r.forwardRef((e,t)=>{let{className:s,orientation:r="horizontal",decorative:n=!0,...l}=e;return(0,a.jsx)(R.b,{ref:t,decorative:n,orientation:r,className:(0,h.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",s),...l})});I.displayName=R.b.displayName;var P=s(9710);let F=P.Kq,D=P.bL,V=P.l9,O=r.forwardRef((e,t)=>{let{className:s,sideOffset:r=4,...n}=e;return(0,a.jsx)(P.UC,{ref:t,sideOffset:r,className:(0,h.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",s),...n})});function M(e){let{icon:t,onClick:s,tooltipText:r,className:n}=e;return(0,a.jsx)(F,{children:(0,a.jsxs)(D,{children:[(0,a.jsxs)(V,{className:(0,h.cn)("w-full h-14 flex items-center gap-4 group",n),onClick:s,type:"button",children:[(0,a.jsx)(I,{className:"flex-1 bg-border group-hover:bg-primary transition-colors"}),(0,a.jsx)(t,{className:"text-border group-hover:text-primary transition-colors"}),(0,a.jsx)(I,{className:"flex-1 bg-border group-hover:bg-primary transition-colors"})]}),(0,a.jsx)(O,{children:(0,a.jsx)("p",{children:r})})]})})}O.displayName=P.UC.displayName;var _=s(3415);let U=_.z.object({type:_.z.enum(["lecture","section","lab"],{message:"Type is required"}),group:_.z.string().min(1).max(4),day:_.z.coerce.number().min(0).max(6),start:_.z.coerce.number().min(1),end:_.z.coerce.number().min(1),hide:_.z.boolean()}).refine(e=>e.start<=e.end,{message:"Start time must not exceed end time",path:["end"]}),L=_.z.object({name:_.z.string().min(2).max(20),elective:_.z.boolean(),slots:_.z.array(U)}),$=_.z.discriminatedUnion("name",[_.z.object({name:_.z.literal("no-clash")}),_.z.object({name:_.z.literal("no-gap")}),_.z.object({name:_.z.literal("no-single-day")}),_.z.object({name:_.z.literal("min-days"),days:_.z.coerce.number().min(1).max(7)}),_.z.object({name:_.z.literal("max-days"),days:_.z.coerce.number().min(1).max(7)}),_.z.object({name:_.z.literal("empty-day"),day:_.z.coerce.number().min(0).max(6)}),_.z.object({name:_.z.literal("busy-day"),day:_.z.coerce.number().min(0).max(6)}),_.z.object({name:_.z.literal("empty-slot"),day:_.z.coerce.number().min(0).max(6),slot:_.z.coerce.number().min(1)}),_.z.object({name:_.z.literal("busy-slot"),day:_.z.coerce.number().min(0).max(6),slot:_.z.coerce.number().min(1)})]),B=_.z.object({subjects:_.z.array(L),electivesCount:_.z.coerce.number().min(0),filters:_.z.array($)}),G={type:"lecture",group:"A",day:0,start:1,end:2,hide:!1},J={name:"",elective:!1,slots:[G]},q={name:"no-clash"};var Z=s(8369);let H=Z.bL,X=Z.R6,W=Z.Ke;var Y=s(2413);let K=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(Y.bL,{className:(0,h.cn)("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",s),...r,ref:t,children:(0,a.jsx)(Y.zi,{className:(0,h.cn)("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})})});K.displayName=Y.bL.displayName;var Q=s(2715),ee=s(8346);let et=r.forwardRef((e,t)=>{let{className:s,type:r,...n}=e;return(0,a.jsx)("input",{type:r,className:(0,h.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...n})});et.displayName="Input";var es=s(5713),ea=s(1014),er=s(2645),en=s(2488),el=s(7193);let ei=ea.bL;ea.YJ;let eo=ea.WT,ec=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(ea.l9,{ref:t,className:(0,h.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",s),...n,children:[r,(0,a.jsx)(ea.In,{asChild:!0,children:(0,a.jsx)(er.A,{className:"h-4 w-4 opacity-50"})})]})});ec.displayName=ea.l9.displayName;let ed=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(ea.PP,{ref:t,className:(0,h.cn)("flex cursor-default items-center justify-center py-1",s),...r,children:(0,a.jsx)(en.A,{className:"h-4 w-4"})})});ed.displayName=ea.PP.displayName;let eu=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(ea.wn,{ref:t,className:(0,h.cn)("flex cursor-default items-center justify-center py-1",s),...r,children:(0,a.jsx)(er.A,{className:"h-4 w-4"})})});eu.displayName=ea.wn.displayName;let em=r.forwardRef((e,t)=>{let{className:s,children:r,position:n="popper",...l}=e;return(0,a.jsx)(ea.ZL,{children:(0,a.jsxs)(ea.UC,{ref:t,className:(0,h.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",s),position:n,...l,children:[(0,a.jsx)(ed,{}),(0,a.jsx)(ea.LM,{className:(0,h.cn)("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r}),(0,a.jsx)(eu,{})]})})});em.displayName=ea.UC.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(ea.JU,{ref:t,className:(0,h.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",s),...r})}).displayName=ea.JU.displayName;let ex=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(ea.q7,{ref:t,className:(0,h.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",s),...n,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(ea.VF,{children:(0,a.jsx)(el.A,{className:"h-4 w-4"})})}),(0,a.jsx)(ea.p4,{children:r})]})});function ef(e){let{subjectIndex:t,control:s,getValues:n,slotIndex:l,removeSlot:o}=e,[c,d]=(0,r.useState)(n("subjects.".concat(t,".slots.").concat(l,".type"))||"lecture"),[u,m]=(0,r.useState)(n("subjects.".concat(t,".slots.").concat(l,".group"))||"");return(0,a.jsxs)(H,{className:"border p-4 rounded-md space-y-4",defaultOpen:!0,children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)("p",{className:"flex-1",children:u?"".concat((0,h.Z)(c)," ").concat(u.toUpperCase()):"Slot ".concat(l+1)}),(0,a.jsx)(i.$,{variant:"outline",onClick:()=>o(l),className:"hover:bg-destructive hover:text-white text-destructive border-none w-10 h-10",children:(0,a.jsx)(Q.A,{})}),(0,a.jsx)(X,{asChild:!0,children:(0,a.jsx)(i.$,{variant:"ghost",className:"w-10 h-10 hover:text-white",children:(0,a.jsx)(ee.A,{})})})]}),(0,a.jsxs)(W,{className:"grid grid-cols-6 gap-4",children:[(0,a.jsx)("hr",{className:"col-span-6"}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".slots.").concat(l,".type"),render:e=>{let{field:s}=e;return(0,a.jsxs)(z,{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)(k,{children:"Type"}),(0,a.jsxs)(ei,{name:"subjects.".concat(t,".slots.").concat(l,".type"),onValueChange:e=>{s.onChange(e),d(e)},defaultValue:s.value,children:[(0,a.jsx)(A,{children:(0,a.jsx)(ec,{children:(0,a.jsx)(eo,{placeholder:"Select a type"})})}),(0,a.jsxs)(em,{children:[(0,a.jsx)(ex,{value:"lecture",children:"Lecture"}),(0,a.jsx)(ex,{value:"section",children:"Section"}),(0,a.jsx)(ex,{value:"lab",children:"Lab"})]})]}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".slots.").concat(l,".group"),render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{className:"col-span-6 sm:col-span-3",children:[(0,a.jsx)(F,{children:(0,a.jsxs)(D,{children:[(0,a.jsx)(V,{style:{cursor:"default"},children:(0,a.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,a.jsx)(k,{children:"Group"}),(0,a.jsx)(es.A,{className:"w-4 h-4 text-gray-400"})]})}),(0,a.jsx)(O,{className:"max-w-sm md:max-w-full",children:'The group or class of the slot (eg. "A"). If a slot is for multiple classes, type "AB" for example.'})]})}),(0,a.jsx)(A,{children:(0,a.jsx)(et,{placeholder:"AB",...t,onBlur:e=>{m(e.target.value),t.onBlur()}})}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".slots.").concat(l,".day"),render:e=>{let{field:s}=e;return(0,a.jsxs)(z,{className:"col-span-2",children:[(0,a.jsx)(k,{children:"Day"}),(0,a.jsxs)(ei,{name:"subjects.".concat(t,".slots.").concat(l,".day"),onValueChange:s.onChange,defaultValue:s.value.toString(),children:[(0,a.jsx)(A,{children:(0,a.jsx)(ec,{children:(0,a.jsx)(eo,{placeholder:"Select a day"})})}),(0,a.jsxs)(em,{children:[(0,a.jsx)(ex,{value:"0",children:"Sat"}),(0,a.jsx)(ex,{value:"1",children:"Sun"}),(0,a.jsx)(ex,{value:"2",children:"Mon"}),(0,a.jsx)(ex,{value:"3",children:"Tue"}),(0,a.jsx)(ex,{value:"4",children:"Wed"}),(0,a.jsx)(ex,{value:"5",children:"Thu"}),(0,a.jsx)(ex,{value:"6",children:"Fri"})]})]}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".slots.").concat(l,".start"),render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{className:"col-span-2",children:[(0,a.jsx)(k,{children:"Start"}),(0,a.jsx)(A,{children:(0,a.jsx)(et,{type:"number",placeholder:"Enter slot start time",...t})}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".slots.").concat(l,".end"),render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{className:"col-span-2",children:[(0,a.jsx)(k,{children:"End"}),(0,a.jsx)(A,{children:(0,a.jsx)(et,{type:"number",placeholder:"Enter slot end time",...t})}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".slots.").concat(l,".hide"),render:e=>{let{field:s}=e;return(0,a.jsxs)(z,{className:"col-span-6 flex gap-2 space-y-0",children:[(0,a.jsx)(A,{children:(0,a.jsx)(K,{name:"subjects.".concat(t,".slots.").concat(l,".hide"),checked:s.value,onCheckedChange:s.onChange})}),(0,a.jsx)(F,{children:(0,a.jsxs)(D,{children:[(0,a.jsx)(V,{style:{cursor:"default"},children:(0,a.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,a.jsx)(k,{children:"Hide"}),(0,a.jsx)(es.A,{className:"w-4 h-4 text-gray-400"})]})}),(0,a.jsx)(O,{className:"max-w-sm md:max-w-full",children:"Hiding a slot will not include it in timetable generation."})]})})]})}})]})]})}ex.displayName=ea.q7.displayName,r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(ea.wv,{ref:t,className:(0,h.cn)("-mx-1 my-1 h-px bg-muted",s),...r})}).displayName=ea.wv.displayName;let ep=(0,b.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function eh(e){let{className:t,variant:s,...r}=e;return(0,a.jsx)("div",{className:(0,h.cn)(ep({variant:s}),t),...r})}function ej(e){let{subjectIndex:t,control:s,getValues:l,setFocus:c,removeSubject:d}=e,{fields:u,append:m,remove:x}=(0,n.jz)({control:s,name:"subjects.".concat(t,".slots")}),[f,p]=(0,r.useState)(l("subjects.".concat(t,".name"))||""),[h,j]=(0,r.useState)(l("subjects.".concat(t,".elective"))||J.elective);return(0,a.jsxs)(H,{className:"border p-4 rounded-md space-y-4",defaultOpen:!0,children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("div",{className:"flex-1 flex gap-2",children:[(0,a.jsx)("p",{children:f||"Subject ".concat(t+1)}),h&&(0,a.jsx)(eh,{children:"Elective"})]}),(0,a.jsx)(i.$,{variant:"outline",onClick:()=>d(t),className:"hover:bg-destructive hover:text-white text-destructive border-none w-10 h-10",children:(0,a.jsx)(Q.A,{})}),(0,a.jsx)(X,{asChild:!0,children:(0,a.jsx)(i.$,{variant:"ghost",className:"w-10 h-10 hover:text-white",children:(0,a.jsx)(ee.A,{})})})]}),(0,a.jsxs)(W,{className:"space-y-4",children:[(0,a.jsx)("hr",{}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".name"),render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{children:[(0,a.jsx)(k,{children:"Subject Name"}),(0,a.jsx)(A,{children:(0,a.jsx)(et,{placeholder:"Enter subject name",...t,onBlur:e=>{p(e.target.value),t.onBlur()}})}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(w,{control:s,name:"subjects.".concat(t,".elective"),render:e=>{let{field:s}=e;return(0,a.jsxs)(z,{className:"col-span-6 flex items-center gap-2 space-y-0 justify-start",children:[(0,a.jsx)(A,{children:(0,a.jsx)(K,{name:"subjects.".concat(t,".elective"),checked:s.value,onCheckedChange:e=>{s.onChange(e),j(e)}})}),(0,a.jsx)(k,{children:"Elective"})]})}}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium leading-none",children:"Slots"}),(0,a.jsx)(T,{className:"mb-2",children:"Add the subject slots below."}),(0,a.jsx)("div",{className:"space-y-4",children:u.map((e,r)=>(0,a.jsx)(ef,{control:s,getValues:l,subjectIndex:t,slotIndex:r,removeSlot:x},e.id))}),(0,a.jsx)(M,{onClick:function(){let e=u.length;m(G),setTimeout(()=>c("subjects.".concat(t,".slots.").concat(e,".type")),0)},tooltipText:"Add slot",icon:o.A,className:"mt-4"})]})]})]})}var eb=s(6217),ey=s(689);let eg=eb.bL,ev=eb.l9,eN=eb.ZL;eb.bm;let ew=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(eb.hJ,{ref:t,className:(0,h.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",s),...r})});ew.displayName=eb.hJ.displayName;let eS=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsxs)(eN,{children:[(0,a.jsx)(ew,{}),(0,a.jsxs)(eb.UC,{ref:t,className:(0,h.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",s),...n,children:[r,(0,a.jsxs)(eb.bm,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(ey.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});eS.displayName=eb.UC.displayName;let eC=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,h.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...s})};eC.displayName="DialogHeader";let ez=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(eb.hE,{ref:t,className:(0,h.cn)("text-lg font-semibold leading-none tracking-tight",s),...r})});ez.displayName=eb.hE.displayName;let ek=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(eb.VY,{ref:t,className:(0,h.cn)("text-sm text-muted-foreground",s),...r})});ek.displayName=eb.VY.displayName;var eA=s(241);let eT=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("textarea",{className:(0,h.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",s),ref:t,...r})});eT.displayName="Textarea";let eE=[{value:"no-clash",name:"No Clash",description:"No clashing slots.",hasParameters:!1},{value:"no-gap",name:"No Gap",description:"No gaps between slots.",hasParameters:!1},{value:"no-single-day",name:"No Single Day",description:"No day with single slots.",hasParameters:!1},{value:"min-days",name:"Min Days",description:"Ensure schedule has minimum occupied days.",hasParameters:!0,parameters:[{display:"Days",name:"days",type:"number",default:1}]},{value:"max-days",name:"Max Days",description:"Ensure schedule has maximum occupied days.",hasParameters:!0,parameters:[{display:"Days",name:"days",type:"number",default:1}]},{value:"empty-day",name:"Empty Day",description:"Ensure this day is empty.",hasParameters:!0,parameters:[{display:"Day",name:"day",type:"day",default:0}]},{value:"busy-day",name:"Busy Day",description:"Ensure this day is busy.",hasParameters:!0,parameters:[{display:"Day",name:"day",type:"day",default:0}]},{value:"empty-slot",name:"Empty Slot",description:"Ensure this slot is empty.",hasParameters:!0,parameters:[{display:"Day",name:"day",type:"day",default:0},{display:"Slot",name:"slot",type:"number",default:1}]},{value:"busy-slot",name:"Busy Slot",description:"Ensure this slot is busy.",hasParameters:!0,parameters:[{display:"Day",name:"day",type:"day",default:0},{display:"Slot",name:"slot",type:"number",default:1}]}];function eR(e){let{filterIndex:t,control:s,removeFilter:n,getValues:l,setValue:o}=e,[c,d]=(0,r.useState)(eE[0]);return(0,a.jsxs)("div",{className:"border p-4 rounded-md space-y-4",children:[(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(w,{control:s,name:"filters.".concat(t,".name"),render:e=>{let{field:s}=e;return(0,a.jsxs)(z,{className:"flex-1",children:[(0,a.jsxs)(k,{children:["Filter ",t+1]}),(0,a.jsxs)(ei,{name:"filters.".concat(t,".name"),onValueChange:e=>{s.onChange(e),function(e){let s=eE.find(t=>t.value===e);if(s.hasParameters)for(let e of s.parameters){let s=e.default;c.hasParameters&&c.parameters.find(t=>t.name===e.name)&&(s=l("filters.".concat(t,".").concat(e.name))),o("filters.".concat(t,".").concat(e.name),s)}d(s)}(e)},defaultValue:s.value,children:[(0,a.jsx)(A,{children:(0,a.jsx)(ec,{children:(0,a.jsx)(eo,{placeholder:"Select a filter"})})}),(0,a.jsx)(em,{children:eE.map((e,t)=>(0,a.jsx)(ex,{value:e.value,children:e.name},t))})]}),(0,a.jsx)(T,{children:c.description}),(0,a.jsx)(E,{})]})}}),(0,a.jsx)(i.$,{variant:"outline",onClick:()=>n(t),className:"hover:bg-destructive hover:text-white text-destructive border-none w-10 h-10 mt-8",children:(0,a.jsx)(Q.A,{})})]}),c.hasParameters&&(0,a.jsx)("div",{className:"flex gap-2",children:c.parameters.map((e,r)=>"number"===e.type?(0,a.jsx)(eI,{control:s,filterIndex:t,name:e.name,display:e.display,number:"number"===e.type,className:"flex-1"},r):(0,a.jsx)(eP,{control:s,filterIndex:t,name:e.name,display:e.display,className:"flex-1"},r))})]})}function eI(e){let{control:t,filterIndex:s,name:r,display:n,number:l=!1,className:i}=e;return(0,a.jsx)(w,{control:t,name:"filters.".concat(s,".").concat(r),render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{className:i,children:[(0,a.jsx)(k,{children:n}),(0,a.jsx)(A,{children:(0,a.jsx)(et,{type:l?"number":"text",placeholder:"Enter slot start time",...t})}),(0,a.jsx)(E,{})]})}})}function eP(e){let{control:t,filterIndex:s,name:r,display:n,className:l}=e;return(0,a.jsx)(w,{control:t,name:"filters.".concat(s,".").concat(r),render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{className:l,children:[(0,a.jsx)(k,{children:n}),(0,a.jsxs)(ei,{name:"filters.".concat(s,".").concat(r),onValueChange:t.onChange,defaultValue:t.value.toString(),children:[(0,a.jsx)(A,{children:(0,a.jsx)(ec,{children:(0,a.jsx)(eo,{placeholder:"Select a day"})})}),(0,a.jsxs)(em,{children:[(0,a.jsx)(ex,{value:"0",children:"Sat"}),(0,a.jsx)(ex,{value:"1",children:"Sun"}),(0,a.jsx)(ex,{value:"2",children:"Mon"}),(0,a.jsx)(ex,{value:"3",children:"Tue"}),(0,a.jsx)(ex,{value:"4",children:"Wed"}),(0,a.jsx)(ex,{value:"5",children:"Thu"}),(0,a.jsx)(ex,{value:"6",children:"Fri"})]})]}),(0,a.jsx)(E,{})]})}})}function eF(e){let{onSubmit:t}=e,{toast:s}=(0,eA.dj)(),[p,h]=(0,r.useState)(""),[j,b]=(0,r.useState)(!1),[y,g]=(0,r.useState)(""),[N,S]=(0,r.useState)(!1),C=(0,n.mN)({resolver:(0,l.u)(B),defaultValues:{subjects:[J],electivesCount:2,filters:[q]}});async function R(){try{let e=await navigator.clipboard.readText();P(e),s({title:"Pasted clipboard!"})}catch(e){s({title:"Could not paste clipboard."})}}function I(){let e=C.getValues();h(JSON.stringify(e));try{B.parse(e),b(!1)}catch(e){b(!0)}}function P(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];g(e);try{let a=JSON.parse(e),r=B.parse(a);S(!1),t&&(C.setValue("subjects",r.subjects),C.setValue("electivesCount",r.electivesCount),C.setValue("filters",r.filters),s({title:"Successfully imported setup."}))}catch(e){e instanceof SyntaxError||_.G,S(!0)}}let{fields:F,append:D,remove:V}=(0,n.jz)({control:C.control,name:"subjects"}),{fields:O,append:U,remove:L}=(0,n.jz)({control:C.control,name:"filters"});return(0,a.jsx)(v,{...C,children:(0,a.jsxs)("form",{onSubmit:C.handleSubmit(t),className:"space-y-4 p-4 border rounded-md",children:[(0,a.jsx)(w,{control:C.control,name:"electivesCount",render:e=>{let{field:t}=e;return(0,a.jsxs)(z,{className:"col-span-2",children:[(0,a.jsx)(k,{children:"Electives Count"}),(0,a.jsx)(A,{children:(0,a.jsx)(et,{type:"number",placeholder:"Enter electives count",required:!0,...t})}),(0,a.jsx)(T,{children:"Number of elective subjects required this semester."}),(0,a.jsx)(E,{})]})}}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium leading-none",children:"Subjects"}),(0,a.jsx)(T,{className:"mb-2",children:"Add your desired subjects below."})]}),F.map((e,t)=>(0,a.jsx)(ej,{subjectIndex:t,control:C.control,getValues:C.getValues,setFocus:C.setFocus,removeSubject:V},e.id)),(0,a.jsx)(M,{onClick:()=>D(J),icon:o.A,tooltipText:"Add subject"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium leading-none",children:"Filters"}),(0,a.jsx)(T,{className:"mb-2",children:"Add filters to narrow down generated timetables."})]}),O.map((e,t)=>(0,a.jsx)(eR,{filterIndex:t,control:C.control,removeFilter:L,getValues:C.getValues,setValue:C.setValue},e.id)),(0,a.jsx)(M,{onClick:()=>U(q),icon:o.A,tooltipText:"Add filter"}),(0,a.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:[(0,a.jsxs)(eg,{children:[(0,a.jsx)(ev,{asChild:!0,children:(0,a.jsxs)(i.$,{variant:"outline",onClick:()=>I(),children:[(0,a.jsx)(c.A,{}),"Import Setup"]})}),(0,a.jsxs)(eS,{children:[(0,a.jsxs)(eC,{children:[(0,a.jsx)(ez,{children:"Import Setup"}),(0,a.jsx)(ek,{children:"Import settings from an existing setup."})]}),(0,a.jsx)(eT,{id:"importSetup",name:"importSetup",placeholder:"Paste setup here",value:y,onChange:e=>P(e.target.value),rows:7}),N&&(0,a.jsxs)("div",{className:"text-destructive flex items-center rounded-md gap-2 text-sm",children:[(0,a.jsx)(d.A,{}),(0,a.jsx)("p",{children:"Invalid setup input"})]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsxs)(i.$,{variant:"outline",className:"w-full",onClick:R,children:[(0,a.jsx)(u.A,{}),"Paste"]}),(0,a.jsxs)(i.$,{className:"w-full",onClick:()=>P(y,!0),disabled:N,children:[(0,a.jsx)(c.A,{}),"Import"]})]})]})]}),(0,a.jsxs)(eg,{children:[(0,a.jsx)(ev,{asChild:!0,children:(0,a.jsxs)(i.$,{variant:"outline",onClick:()=>I(),children:[(0,a.jsx)(m.A,{}),"Export Setup"]})}),(0,a.jsxs)(eS,{children:[(0,a.jsxs)(eC,{children:[(0,a.jsx)(ez,{children:"Export Setup"}),(0,a.jsx)(ek,{children:"Export current setup settings. Useful for sharing setup with others."})]}),(0,a.jsx)("div",{className:"border rounded-md p-4 overflow-scroll max-h-[200px]",children:(0,a.jsx)("code",{className:"text-sm",children:p})}),j&&(0,a.jsxs)("div",{className:"text-destructive flex items-center rounded-md gap-2 text-sm",children:[(0,a.jsx)(d.A,{}),(0,a.jsx)("p",{children:"This setup has errors and will not be loaded correctly if imported."})]}),(0,a.jsxs)(i.$,{onClick:function(){try{navigator.clipboard.writeText(p),s({title:"Copied to clipboard!"})}catch(e){s({title:"Could not copy to clipboard."})}},children:[(0,a.jsx)(x.A,{}),"Copy"]})]})]}),(0,a.jsxs)(i.$,{type:"submit",className:"col-span-2 md:col-span-1",children:[(0,a.jsx)(f.A,{}),"Generate"]})]})]})})}class eD{generate(e){this.data=e;let t=e.subjects.map((e,t)=>({id:t,...e,slots:e.slots.map((e,s)=>({id:"".concat(t,".").concat(s),...e}))})),s=t.filter(e=>!e.elective).map(e=>e.id),a=t.filter(e=>e.elective).map(e=>e.id),r=t.map(e=>{let t=this.groupBy(e.slots.filter(e=>!e.hide),"type",e=>e.id);return this.product(...Object.values(t))}),n=this.combinations(a,Math.min(e.electivesCount,a.length));return(a.length>0?n.map(e=>[...s,...e]):[s]).map(e=>this.product(...e.map(e=>r[e]))).flat().map(e=>e.flat().map(e=>this.getSlot(t,e)))}getSlot(e,t){let[s,a]=t.split(".").map(e=>parseInt(e));return{subjectName:e[s].name,...e[s].slots[a]}}combinations(e,t){return t>e.length||t<=0?[]:function s(a,r){if(r.length===t)return[r];let n=[];for(let t=a;t<e.length;t++)n=n.concat(s(t+1,[...r,e[t]]));return n}(0,[])}product(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return 0===t.length?[[]]:t.reduce((e,t)=>e.flatMap(e=>t.map(t=>[...e,t])),[[]])}groupBy(e,t,s){return e.reduce((e,a)=>{let r=a[t];return e[r]||(e[r]=[]),e[r].push(s(a)),e},{})}}let eV=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("div",{className:"relative w-full overflow-auto",children:(0,a.jsx)("table",{ref:t,className:(0,h.cn)("w-full caption-bottom text-sm",s),...r})})});eV.displayName="Table";let eO=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("thead",{ref:t,className:(0,h.cn)("[&_tr]:border-b",s),...r})});eO.displayName="TableHeader";let eM=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tbody",{ref:t,className:(0,h.cn)("[&_tr:last-child]:border-0",s),...r})});eM.displayName="TableBody",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tfoot",{ref:t,className:(0,h.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",s),...r})}).displayName="TableFooter";let e_=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("tr",{ref:t,className:(0,h.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",s),...r})});e_.displayName="TableRow";let eU=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("th",{ref:t,className:(0,h.cn)("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",s),...r})});eU.displayName="TableHead";let eL=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("td",{ref:t,className:(0,h.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0",s),...r})});eL.displayName="TableCell",r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("caption",{ref:t,className:(0,h.cn)("mt-4 text-sm text-muted-foreground",s),...r})}).displayName="TableCaption";var e$=s(8884);function eB(e){let{slots:t}=e,s=Math.max(t.reduce((e,t)=>Math.max(e,t.end),1),6);function r(e){let{day:s,time:r}=e,n=t.filter(e=>e.day===s&&r>=e.start&&r<=e.end);return 0===n.length?(0,a.jsx)(eL,{className:"border last:border-r-0 "+(6===s?"border-b-0":"")}):(0,a.jsx)(eL,{className:"border last:border-r-0 "+(6===s?"border-b-0":""),children:(0,a.jsxs)("div",{className:"flex gap-2 items-center",children:[n.length>1&&(0,a.jsx)(e$.A,{className:"text-destructive"})," ",n.map(e=>"".concat(e.subjectName," ").concat((0,h.Z)(e.type).slice(0,3)," ").concat(e.group)).join("\n")]})})}return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"border rounded-md",children:(0,a.jsxs)(eV,{children:[(0,a.jsx)(eO,{children:(0,a.jsxs)(e_,{children:[(0,a.jsx)(eU,{className:"border border-t-0 border-l-0",children:"Day\\Slot"}),Array.from({length:s},(e,t)=>t+1).map(e=>(0,a.jsx)(eU,{className:"border border-t-0 text-center last:border-r-0",children:e},e))]})}),(0,a.jsx)(eM,{children:Array.from({length:7},(e,t)=>t).map(e=>(0,a.jsxs)(e_,{children:[(0,a.jsx)(eU,{className:"border border-l-0 "+(6===e?"border-b-0":""),children:(0,h.Z)((0,h.X)(e))}),Array.from({length:s},(e,t)=>t+1).map(t=>(0,a.jsx)(r,{day:e,time:t},t))]},e))})]})})})}var eG=s(5012),eJ=s(5325),eq=s(368);let eZ=e=>{let{className:t,...s}=e;return(0,a.jsx)("nav",{role:"navigation","aria-label":"pagination",className:(0,h.cn)("mx-auto flex w-full justify-center",t),...s})};eZ.displayName="Pagination";let eH=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("ul",{ref:t,className:(0,h.cn)("flex flex-row items-center gap-1",s),...r})});eH.displayName="PaginationContent";let eX=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)("li",{ref:t,className:(0,h.cn)("",s),...r})});eX.displayName="PaginationItem";let eW=e=>{let{className:t,isActive:s,size:r="icon",...n}=e;return(0,a.jsx)("a",{"aria-current":s?"page":void 0,className:(0,h.cn)((0,i.r)({variant:s?"outline":"ghost",size:r}),t),...n})};eW.displayName="PaginationLink";let eY=e=>{let{className:t,...s}=e;return(0,a.jsxs)(eW,{"aria-label":"Go to previous page",size:"default",className:(0,h.cn)("gap-1 pl-2.5",t),...s,children:[(0,a.jsx)(eG.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{children:"Previous"})]})};eY.displayName="PaginationPrevious";let eK=e=>{let{className:t,...s}=e;return(0,a.jsxs)(eW,{"aria-label":"Go to next page",size:"default",className:(0,h.cn)("gap-1 pr-2.5",t),...s,children:[(0,a.jsx)("span",{children:"Next"}),(0,a.jsx)(eJ.A,{className:"h-4 w-4"})]})};eK.displayName="PaginationNext";let eQ=e=>{let{className:t,...s}=e;return(0,a.jsxs)("span",{"aria-hidden":!0,className:(0,h.cn)("flex h-9 w-9 items-center justify-center",t),...s,children:[(0,a.jsx)(eq.A,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"More pages"})]})};function e0(e){let{generatedSlots:t}=e,s=Math.ceil(t.length/5),[n,l]=(0,r.useState)(1),i=Math.max(n-2,1),o=Math.min(n+2,s);function c(){1!==n&&l(e=>e-1)}function d(){n!==s&&l(e=>e+1)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{className:"my-16 text-2xl text-center",children:"Generated Timetables"}),(0,a.jsx)("div",{className:"space-y-4 mt-4",children:t.filter((e,t)=>t<5*n&&t>=5*n-5).map((e,t)=>(0,a.jsxs)(r.Fragment,{children:[(0,a.jsxs)("h3",{className:"text-lg",children:["Option ",(n-1)*5+t+1]}),(0,a.jsx)(eB,{slots:e}),(0,a.jsx)("hr",{})]},t))}),(0,a.jsx)(eZ,{className:"mt-4",children:(0,a.jsxs)(eH,{children:[1!==n&&(0,a.jsx)(eX,{className:"hidden md:list-item",children:(0,a.jsx)(eY,{className:"cursor-pointer",onClick:c})}),1!==i&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(eX,{className:"hidden md:list-item",children:(0,a.jsx)(eW,{className:"cursor-pointer",onClick:()=>l(1),children:"1"})}),(0,a.jsx)(eX,{className:"hidden md:list-item",children:(0,a.jsx)(eQ,{})})]}),Array.from({length:o-i+1},(e,t)=>i+t).map(e=>(0,a.jsx)(eX,{children:(0,a.jsx)(eW,{className:"cursor-pointer",onClick:()=>l(e),isActive:n===e,children:e})},e)),o!==s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(eX,{className:"hidden md:list-item",children:(0,a.jsx)(eQ,{})}),(0,a.jsx)(eX,{className:"hidden md:list-item",children:(0,a.jsx)(eW,{className:"cursor-pointer",onClick:()=>l(s),children:s})})]}),n!==s&&(0,a.jsx)(eX,{className:"hidden md:list-item",children:(0,a.jsx)(eK,{className:"cursor-pointer",onClick:d})})]})}),(0,a.jsxs)("div",{className:"flex md:hidden justify-center mt-1",children:[1!==n&&(0,a.jsx)("div",{children:(0,a.jsx)(eY,{className:"cursor-pointer w-full",onClick:c})}),n!==s&&(0,a.jsx)("div",{children:(0,a.jsx)(eK,{className:"cursor-pointer w-full",onClick:d})})]})]})}function e1(){let{toast:e}=(0,eA.dj)(),[t,s]=(0,r.useState)([]),n=new eD;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"container px-10 py-4 mx-auto max-w-4xl",children:[(0,a.jsx)("h2",{className:"my-4 text-2xl text-center",children:"Subjects Form"}),(0,a.jsx)(eF,{onSubmit:function(t){let a=n.generate(t),r=function(e,t){let s=[...e];for(let e of t)switch(e.name){case"no-clash":s=s.filter(e=>(function(e){for(let t=0;t<e.length;t++)for(let s=t+1;s<e.length;s++){let a=e[t],r=e[s];if(a.day===r.day&&a.start<=r.end&&r.start<=a.end)return!1}return!0})(e));break;case"no-gap":s=s.filter(e=>(function(e){let t={};for(let s of e)t[s.day]||(t[s.day]=[]),t[s.day].push(s);for(let e in t){let s=t[Number(e)];s.sort((e,t)=>e.start-t.start);for(let e=0;e<s.length-1;e++)if(s[e].end<s[e+1].start-1)return!1}return!0})(e));break;case"no-single-day":s=s.filter(e=>(function(e){let t={};for(let s of e)t[s.day]=(t[s.day]||0)+1;return!Object.values(t).includes(1)})(e));break;case"min-days":s=s.filter(t=>(function(e,t){let s={};for(let t of e)s[t.day]=(s[t.day]||0)+1;return Object.values(s).filter(e=>e>0).length>=t})(t,e.days));break;case"max-days":s=s.filter(t=>(function(e,t){let s={};for(let t of e)s[t.day]=(s[t.day]||0)+1;return Object.values(s).filter(e=>e>0).length<=t})(t,e.days));break;case"empty-day":s=s.filter(t=>(function(e,t){for(let s of e)if(s.day===t)return!1;return!0})(t,e.day));break;case"busy-day":s=s.filter(t=>(function(e,t){for(let s of e)if(s.day===t)return!0;return!1})(t,e.day));break;case"empty-slot":s=s.filter(t=>(function(e,t,s){for(let a of e)if(a.day===t&&a.start<=s&&a.end>=s)return!1;return!0})(t,e.day,e.slot));break;case"busy-slot":s=s.filter(t=>(function(e,t,s){for(let a of e)if(a.day===t&&a.start<=s&&a.end>=s)return!0;return!1})(t,e.day,e.slot))}return s}(a,t.filters);e({title:"Generated ".concat(a.length," timetable").concat(1!==a.length?"s":"","."),description:"Your filters narrowed down the results to ".concat(r.length," timetable").concat(1!==r.length?"s":"",".")}),s(r)}})]}),(0,a.jsx)("div",{className:"container px-10 py-4 mx-auto max-w-6xl",children:t.length>0&&(0,a.jsx)(e0,{generatedSlots:t})})]})}eQ.displayName="PaginationEllipsis"},4085:(e,t,s)=>{"use strict";s.d(t,{$:()=>c,r:()=>o});var a=s(5155),r=s(2115),n=s(2317),l=s(1027),i=s(9602);let o=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=r.forwardRef((e,t)=>{let{className:s,variant:r,size:l,asChild:c=!1,...d}=e,u=c?n.DX:"button";return(0,a.jsx)(u,{className:(0,i.cn)(o({variant:r,size:l,className:s})),ref:t,...d})});c.displayName="Button"},241:(e,t,s)=>{"use strict";s.d(t,{dj:()=>m});var a=s(2115);let r=0,n=new Map,l=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:s}=t;return s?l(s):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function d(e){c=i(c,e),o.forEach(e=>{e(c)})}function u(e){let{...t}=e,s=(r=(r+1)%Number.MAX_SAFE_INTEGER).toString(),a=()=>d({type:"DISMISS_TOAST",toastId:s});return d({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||a()}}}),{id:s,dismiss:a,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:s}})}}function m(){let[e,t]=a.useState(c);return a.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},9602:(e,t,s)=>{"use strict";s.d(t,{X:()=>i,Z:()=>l,cn:()=>n});var a=s(3463),r=s(9795);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.QP)((0,a.$)(t))}function l(e){return e?e.charAt(0).toUpperCase()+e.slice(1):""}function i(e){return["sat","sun","mon","tue","wed","thu","fri"][e]}}},e=>{var t=t=>e(e.s=t);e.O(0,[238,506,441,517,358],()=>t(5241)),_N_E=e.O()}]);