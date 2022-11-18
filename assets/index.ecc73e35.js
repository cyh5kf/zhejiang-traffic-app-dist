import"./index.b865c194.js";import{N as h}from"./index.14c1bd1c.js";import{_ as g}from"./index.32a4ad68.js";import{_,d as p,P as I,o as n,b as t,e as v,f as o,t as s,p as x,l as $,v as L,g as D,u as P,h as m,F as u,i as T,j as w,c as N}from"./index.4447ae21.js";import{u as S}from"./area.a9d102b3.js";const y=e=>(x("data-v-2a34b64e"),e=e(),$(),e),q=["src"],C={key:1,class:"no_img_container"},R={class:"detail"},j={class:"name"},E={class:"text"},O={class:"value"},z={class:"text"},A=y(()=>o("span",{class:"key"},"\u8425\u4E1A\u65F6\u95F4\uFF1A",-1)),F={class:"value"},J={class:"text"},M=y(()=>o("span",{class:"key"},"\u8BA2\u4F4D\u7535\u8BDD\uFF1A",-1)),B={class:"value"},G=_(p({__name:"index",props:{info:Object},setup(e){const r=I();return(d,i)=>{var a;return n(),t("div",{class:"tipItem",onClick:i[0]||(i[0]=b=>{return l=e.info,localStorage.setItem("foodDetailData",JSON.stringify(l)),void r.push("/foodDetail");var l})},[((a=e.info.foodLinkPic)==null?void 0:a.length)>0?(n(),t("img",{key:0,src:e.info.foodLinkPic[0].url,alt:"",class:"tip_img"},null,8,q)):(n(),t("div",C,[v(g)])),o("div",R,[o("p",j,s(e.info.foodName),1),o("div",E,[o("span",O,s(e.info.consumption)+"/\u4EBA",1)]),o("div",z,[A,o("span",F,s(e.info.businessTimeStart)+"-"+s(e.info.businessTimeEnd),1)]),o("div",J,[M,o("span",B,s(e.info.phone),1)])])])}}}),[["__scopeId","data-v-2a34b64e"]]),H={class:"container"},X=_(p({__name:"index",setup(e){L(()=>{localStorage.removeItem("foodDetailData")});const r=()=>history.back(),d=S(),i=D(()=>({limit:10,offset:0,order_by:{createTime:"desc"},where:{isDel:{_eq:0},foodLinkRoute:{organizationCode:{_eq:d.currentArea.code}}}})),{data:a}=P({query:`query ($limit: Int = 10, $offset: Int = 10, $order_by: [traffic_tourism_route_food_order_by!]!, $where: traffic_tourism_route_food_bool_exp!) {
  list: traffic_tourism_route_food(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    address
    businessTimeEnd
    businessTimeStart
    consumption
    foodName
    id
    introduce
    otherInfo
    phone
    relationPicType
    routeManageId
    foodLinkPic {
      url
      type
      name
    }
    foodLinkRecommend {
      recommendName
      foodRecommendLinkPic {
        url
        type
        name
      }
    }
  }
}`,variables:i});return(b,l)=>{var c;const k=h;return n(),t(u,null,[v(k,{title:"\u7F8E\u98DF","left-text":"","left-arrow":"",onClickLeft:r}),o("div",H,[((c=m(a))==null?void 0:c.list.length)>0?(n(!0),t(u,{key:0},T(m(a).list,f=>(n(),N(G,{info:f,key:f.name},null,8,["info"]))),128)):w("",!0)])],64)}}}),[["__scopeId","data-v-64acb476"]]);export{X as default};
