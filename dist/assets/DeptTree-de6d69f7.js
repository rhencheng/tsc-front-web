var p=(a,r,e)=>new Promise((s,o)=>{var n=t=>{try{i(e.next(t))}catch(l){o(l)}},c=t=>{try{i(e.throw(t))}catch(l){o(l)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(n,c);i((e=e.apply(a,r)).next())});import{_ as m}from"./index-903e78de.js";import{a as f}from"./system-ff6b78c1.js";import{d,f as u,o as _,a6 as h,Z as D,_ as T,l as v}from"./vue-b9806415.js";import{_ as w}from"./index.js";import"./antd-57936705.js";import"./useContextMenu-c56b6f78.js";const B=d({name:"DeptTree",components:{BasicTree:m},emits:["select"],setup(a,{emit:r}){const e=u([]);function s(){return p(this,null,function*(){e.value=yield f()})}function o(n){r("select",n[0])}return _(()=>{s()}),{treeData:e,handleSelect:o}}}),$={class:"m-4 mr-0 overflow-hidden bg-white"};function k(a,r,e,s,o,n){const c=h("BasicTree");return D(),T("div",$,[v(c,{title:"部门列表",toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:a.treeData,fieldNames:{key:"id",title:"deptName"},onSelect:a.handleSelect},null,8,["treeData","onSelect"])])}const y=w(B,[["render",k]]);export{y as default};
