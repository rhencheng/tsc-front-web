import{B as p,a as m}from"./index-11efed09.js";import{B as c}from"./BasicForm-152e2559.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c66020c.js";import{u as l}from"./useForm-4dc53c5d.js";import{d as f,a6 as s,Z as d,a7 as u,a8 as B,$ as _,l as g,ab as w}from"./vue-b9806415.js";import{_ as F}from"./index.js";import"./antd-57936705.js";import"./index-7caba1aa.js";import"./useWindowSizeFn-da6b5cad.js";import"./index-456abdd7.js";import"./uuid-31b8b5a4.js";import"./download-9ecd0762.js";import"./base64Conver-39fc0d26.js";import"./index-acb772bd.js";const a=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}],h=f({components:{BasicDrawer:p,BasicForm:c},setup(){const[e,{setFieldsValue:r}]=l({labelWidth:120,schemas:a,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=m(o=>{r({field2:o.data,field1:o.info})});return{register:t,schemas:a,registerForm:e}}});function D(e,r,t,o,$,b){const i=s("BasicForm"),n=s("BasicDrawer");return d(),u(n,w(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:B(()=>[_("div",null,[g(i,{onRegister:e.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}const Z=F(h,[["render",D]]);export{Z as default};
