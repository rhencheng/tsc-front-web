import{B as f,a as b}from"./index-11efed09.js";import{B as v}from"./BasicForm-152e2559.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import{u as g}from"./useForm-4dc53c5d.js";import{d as _,a6 as t,Z as w,a7 as B,a8 as l,$ as n,l as i,E as h,ab as D}from"./vue-b9806415.js";import{e as A}from"./antd-57936705.js";import{_ as P}from"./index.js";import"./index-7caba1aa.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-456abdd7.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-acb772bd.js";const c=[{field:"Organization",component:"Select",label:"Organization",colProps:{span:24},componentProps:{mode:"multiple",options:[{label:"Hospital of Delaware",value:"1"},{label:"Google",value:"2"},{label:"Amazon",value:"3"},{label:"Delaware Healthcare Association",value:"4"},{label:"Addiction Treatment Center",value:"5"},{label:"Apple",value:"6"},{label:"Microsoft",value:"7"},{label:"IBM",value:"8"}]}},{field:"Services",component:"Select",label:"Services",colProps:{span:24},componentProps:{mode:"multiple",options:[{label:"Training",value:"1"},{label:"Education",value:"2"},{label:"Healthcare",value:"3"},{label:"Addiction Treatment",value:"4"},{label:"Provide Job",value:"5"}]}},{field:"target",component:"InputTextArea",label:"Description",colProps:{span:24},componentProps:{placeholder:"Navigator Suggestion...",rows:4}}],C=_({components:{BasicDrawer:f,BasicForm:v},setup(){const[e,{setFieldsValue:s}]=g({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r,{closeDrawer:o}]=b(a=>{s({field2:a.data,field1:a.info})});return{register:r,closeDrawer:o,schemas:c,registerForm:e,success:()=>{o(),A.success("save new plan successfully!",10)}}}});function F(e,s,r,o,p,a){const m=t("BasicForm"),u=t("a-button"),d=t("BasicDrawer");return w(),B(d,D(e.$attrs,{onRegister:e.register,title:"Assign Organization",width:"50%"}),{default:l(()=>[n("div",null,[i(m,{onRegister:e.registerForm},null,8,["onRegister"])]),n("div",null,[i(u,{type:"primary",onClick:e.success},{default:l(()=>[h(" Submit ")]),_:1},8,["onClick"])])]),_:1},16,["onRegister"])}const G=P(C,[["render",F]]);export{G as default};