import{d as p,a6 as a,Z as i,_ as m,l as e,a8 as t,E as s,$ as f}from"./vue-b9806415.js";import{R as l,O as o}from"./antd-57936705.js";import{_ as D}from"./index.js";const B=p({components:{[l.name]:l,[o.name]:o,[o.Item.name]:o.Item},emits:["redo"],setup(n,{emit:_}){return{redo:()=>{_("redo")}}}});const C={class:"step3"},E={class:"desc-wrap"};function b(n,_,x,v,F,y){const c=a("a-button"),r=a("a-result"),u=a("a-descriptions-item"),d=a("a-descriptions");return i(),m("div",C,[e(r,{status:"success",title:"操作成功","sub-title":"预计两小时内到账"},{extra:t(()=>[e(c,{type:"primary",onClick:n.redo},{default:t(()=>[s(" 再转一笔 ")]),_:1},8,["onClick"]),e(c,null,{default:t(()=>[s(" 查看账单 ")]),_:1})]),_:1}),f("div",E,[e(d,{column:1,class:"mt-5"},{default:t(()=>[e(u,{label:"付款账户"},{default:t(()=>[s(" ant-design@alipay.com ")]),_:1}),e(u,{label:"收款账户"},{default:t(()=>[s(" test@example.com ")]),_:1}),e(u,{label:"收款人姓名"},{default:t(()=>[s(" Vben ")]),_:1}),e(u,{label:"转账金额"},{default:t(()=>[s(" 500元 ")]),_:1})]),_:1})])])}const V=D(B,[["render",b],["__scopeId","data-v-5f18471a"]]);export{V as default};
