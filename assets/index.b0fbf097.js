import"./index.2a5ab20d.js";import{N as k}from"./index.ffdeb533.js";import{_ as b}from"./index.d8bb262a.js";import{_ as m,d as u,P as I,o,b as s,e as h,f as t,t as i,p as $,l as w,v as x,g as L,u as D,h as p,F as _,i as N,j as P,c as q}from"./index.799b046a.js";import{u as T}from"./area.d94846d3.js";const y=e=>($("data-v-17ff5db4"),e=e(),w(),e),C=["src"],S={key:1,class:"no_img_container"},j={class:"hotel_type"},H={class:"detail"},M={class:"name"},O={class:"text"},z=y(()=>t("span",{class:"key"},"\u4EF7\u683C\u8303\u56F4\uFF1A",-1)),A={class:"value"},F={class:"text"},J=y(()=>t("span",{class:"key"},"\u8054\u7CFB\u65B9\u5F0F\uFF1A",-1)),Q={class:"value"},R=m(u({__name:"index",props:{info:Object},setup(e){const r=I();return(c,n)=>{var a;return o(),s("div",{class:"tipItem",onClick:n[0]||(n[0]=v=>{return l=e.info,localStorage.setItem("hotelDetailData",JSON.stringify(l)),void r.push("/hotelDetail");var l})},[((a=e.info.hotelLinkPic)==null?void 0:a.length)>0?(o(),s("img",{key:0,src:e.info.hotelLinkPic[0].url,alt:"",class:"tip_img"},null,8,C)):(o(),s("div",S,[h(b)])),t("div",j,i(e.info.hotelType),1),t("div",H,[t("p",M,i(e.info.hotelName),1),t("div",O,[z,t("span",A,i(e.info.priceLow)+"-"+i(e.info.priceHigh),1)]),t("div",F,[J,t("span",Q,i(e.info.phone),1)])])])}}}),[["__scopeId","data-v-17ff5db4"]]),B={class:"container"},W=m(u({__name:"index",setup(e){x(()=>{localStorage.removeItem("hotelDetailData")});const r=()=>history.back(),c=T(),n=L(()=>({limit:10,offset:0,order_by:{createTime:"desc"},where:{isDel:{_eq:0},hotelLinkRoute:{organizationCode:{_eq:c.currentArea.code}}}})),{data:a}=D({query:`query MyQuery($limit: Int = 10, $offset: Int = 10, $order_by: [traffic_tourism_route_hotel_order_by!]!, $where: traffic_tourism_route_hotel_bool_exp!) {
  list: traffic_tourism_route_hotel(limit: $limit, offset: $offset, order_by: $order_by, where: $where) {
    id
    address
    hotelName
    hotelType
    instructions
    introduce
    otherInfo
    phone
    priceHigh
    priceLow
    relationPicType
    room
    routeManageId
    specification
    hotelLinkPic {
      url
      type
    }
  }
}`,variables:n});return(v,l)=>{var f;const g=k;return o(),s(_,null,[h(g,{title:"\u9152\u5E97\xB7\u6C11\u5BBF","left-text":"","left-arrow":"",onClickLeft:r}),t("div",B,[((f=p(a))==null?void 0:f.list.length)>0?(o(!0),s(_,{key:0},N(p(a).list,d=>(o(),q(R,{key:d.hotelName,info:d},null,8,["info"]))),128)):P("",!0)])],64)}}}),[["__scopeId","data-v-e6479178"]]);export{W as default};
