import{L as c}from"./localeText-DgEvbt12.js";import{d as n}from"./dayjs.min-BfBaVRGN.js";import{_ as d,a as r,c as m,b as s,d as i,f as t,t as e,n as l,j as _}from"./index-CP9pHThw.js";const p={name:"message",methods:{dayjs:n},components:{LocaleText:c},props:{message:Object},mounted(){setTimeout(()=>{this.message.show=!1},5e3)}},g=["id"],h={class:"card-body"},f={class:"d-flex"},x={class:"fw-bold d-block",style:{"text-transform":"uppercase"}},u={class:"ms-auto"};function b(y,v,w,T,j,a){const o=_("LocaleText");return r(),m("div",{class:l(["card shadow rounded-3 position-relative message ms-auto",{"text-bg-danger":this.message.type==="danger","text-bg-success":this.message.type==="success","text-bg-warning":this.message.type==="warning"}]),id:this.message.id},[s("div",h,[s("div",f,[s("small",x,[i(o,{t:"FROM "}),t(" "+e(this.message.from),1)]),s("small",u,e(a.dayjs().format("hh:mm A")),1)]),t(" "+e(this.message.content),1)])],10,g)}const M=d(p,[["render",b],["__scopeId","data-v-f50b8f0c"]]);export{M};
