import"./index.2a5ab20d.js";import{o as p,A as c}from"./index.6be73c28.js";import{d as i,o as l,c as r,A as h}from"./index.799b046a.js";const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAAAXNSR0IArs4c6QAAAUhJREFUKFNVz8FLFAEUx/HvbwRhIRA8Fp28hSzaSiQFRQYLgrCXFIL6F+oQgbsrDbhrECT+DebBdQ9eFLSDgtRtJwY6VHiRumZ08CCuM7/Y0an2wePB4wPv/cRlTS67cHZKA3iMGQI+JPAyrinuEeWw1PQOUEYcYX4Ad4ETxK2oqq8ZnFj0fQfsGw5/dSkehTqdaDo0vBKsdWp6ksFS08+AFcxWVNdMtltyBbOJ+RzVVczgzdeeU8o6cG54roBDUt4Co4j3UVXlDN4IfaUwyDfM1fznvzNgNppX+1+Yhh8hNvqg2IuqmupLnf3V8DZi+hKfOWXs04K+/Aet8SYPAnjKRSPxxuYg6fIxDvU7T90Ceid2ZYYtRpXy0AO0SLmGuZ3D70AHsUrATxJKgYgTuCNTE1Qu4KJHCHgB3DNcFwwCx4KOzbuorvYf1V534jgLyZEAAAAASUVORK5CYII=",g=i({__name:"index",props:{show:{type:Boolean,default:!1},info:{type:Object,default:{}},closeMap:{type:Function,default:()=>{}}},setup(o){const a=o,n=t=>{a.closeMap();const{position:A,name:e}=a.info;p(A[1],A[0],e,t.value)},s=[{name:"\u9AD8\u5FB7",value:"amap"},{name:"\u817E\u8BAF",value:"tencentmap"},{name:"\u767E\u5EA6",value:"baidumap"}];return(t,A)=>{const e=c;return l(),r(e,{show:o.show,"onUpdate:show":A[0]||(A[0]=u=>h(show)?show.value=u:null),actions:s,onSelect:n},null,8,["show"])}}});export{g as _,f as a};