import{C as e}from"./index.799b046a.js";const u={to:[String,Object],url:String,replace:Boolean};function a({to:o,url:n,replace:r,$router:t}){o&&t?t[r?"replace":"push"](o):n&&(r?location.replace(n):location.href=n)}function i(){const o=e().proxy;return()=>a(o)}let c=0;function p(){const o=e(),{name:n="unknown"}=(o==null?void 0:o.type)||{};return`${n}-${++c}`}export{p as a,a as b,u as r,i as u};