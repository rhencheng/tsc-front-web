import{ab as k,e as B,a5 as g,u as A,_ as b}from"./index.js";import{P as T}from"./index-c8f3d3c2.js";import{w as E,a7 as D}from"./antd-57936705.js";import{d as h,f as v,a6 as r,Z as _,a7 as $,a8 as a,l as e,$ as P,E as s,_ as w,F as y,a9 as L,a0 as N}from"./vue-b9806415.js";import"./useContentViewHeight-bbdf3bf4.js";import"./useWindowSizeFn-da6b5cad.js";import"./onMountedOrActivated-b65981ee.js";const V=h({name:"TabsDemo",components:{CollapseContainer:k,PageWrapper:T,[E.name]:E,[D.name]:D},setup(){const u=B(),l=v(""),{closeAll:p,closeLeft:C,closeRight:f,closeOther:F,closeCurrent:c,refreshPage:t,setTitle:i}=g(),{createMessage:n}=A();function m(){l.value?i(l.value):n.error("请输入要设置的Tab标题！")}function o(d){u(`/feat/tabs/detail/${d}`)}return{closeAll:p,closeLeft:C,closeRight:f,closeOther:F,closeCurrent:c,toDetail:o,refreshPage:t,setTabTitle:m,title:l}}}),W={class:"mt-2 flex flex-grow-0"};function M(u,l,p,C,f,F){const c=r("a-alert"),t=r("a-button"),i=r("a-input"),n=r("CollapseContainer"),m=r("PageWrapper");return _(),$(m,{title:"标签页操作示例"},{default:a(()=>[e(n,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:a(()=>[e(c,{banner:"",message:"该操作不会影响页面标题，仅修改Tab标题"}),P("div",W,[e(t,{class:"mr-2",onClick:u.setTabTitle,type:"primary"},{default:a(()=>[s(" 设置Tab标题 ")]),_:1},8,["onClick"]),e(i,{placeholder:"请输入",value:u.title,"onUpdate:value":l[0]||(l[0]=o=>u.title=o),class:"mr-4 w-12"},null,8,["value"])])]),_:1}),e(n,{class:"mt-4",title:"标签页操作"},{default:a(()=>[e(t,{class:"mr-2",onClick:u.closeAll},{default:a(()=>[s(" 关闭所有 ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:u.closeLeft},{default:a(()=>[s(" 关闭左侧 ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:u.closeRight},{default:a(()=>[s(" 关闭右侧 ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:u.closeOther},{default:a(()=>[s(" 关闭其他 ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:u.closeCurrent},{default:a(()=>[s(" 关闭当前 ")]),_:1},8,["onClick"]),e(t,{class:"mr-2",onClick:u.refreshPage},{default:a(()=>[s(" 刷新当前 ")]),_:1},8,["onClick"])]),_:1}),e(n,{class:"mt-4",title:"标签页复用超出限制自动关闭(使用场景: 动态路由)"},{default:a(()=>[(_(),w(y,null,L(6,o=>e(t,{key:o,class:"mr-2",onClick:d=>u.toDetail(o)},{default:a(()=>[s(" 打开"+N(o)+"详情页 ",1)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1})}const j=b(V,[["render",M]]);export{j as default};
