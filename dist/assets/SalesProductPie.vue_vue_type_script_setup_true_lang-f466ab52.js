import{u as o}from"./useECharts-18648c3e.js";import{K as s}from"./antd-57936705.js";import{d as l,f as u,w as c,Z as d,a7 as m,a8 as h,$ as f,ae as p,u as g}from"./vue-b9806415.js";const x=l({__name:"SalesProductPie",props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=e,t=u(null),{setOptions:r}=o(t);return c(()=>a.loading,()=>{a.loading||r({tooltip:{trigger:"item"},series:[{name:"has permanently housed",type:"pie",radius:"80%",center:["50%","50%"],color:["#5ab1ef","#b6a2de","#67e0e3","#2ec7c9"],data:[{value:11,name:"has permanently housed"},{value:109,name:"In Process"}].sort(function(n,i){return n.value-i.value}),animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*400}}]})},{immediate:!0}),(n,i)=>(d(),m(g(s),{title:"Achievement rate",loading:e.loading},{default:h(()=>[f("div",{ref_key:"chartRef",ref:t,style:p({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"]))}});export{x as _};