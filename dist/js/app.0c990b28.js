(function(){"use strict";var e={1704:function(e,t,n){var i=n(6369),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("a-tabs",{attrs:{"tab-position":"left"},on:{change:e.handleTabChange},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[e._l(e.gptList,(function(n,i){return t("a-tab-pane",{key:n.label},[e.isPhone?t("span",{staticClass:"phone-label",attrs:{slot:"tab",title:n.label},slot:"tab"},[e._v(e._s(i+1))]):t("span",{staticClass:"normal-label",attrs:{slot:"tab",title:n.label},slot:"tab"},[n.icon?t("a-icon",{class:n.icon,attrs:{type:n.icon}}):e._e(),e._v(e._s(n.label))],1),t("iframe",{staticClass:"iframe",attrs:{src:n.url,frameborder:"0"}})])})),t("a-tab-pane",{key:"免责声明"},[t("span",{class:[e.isPhone?"phone-label qq-label":"normal-label"],attrs:{slot:"tab",title:"免责声明"},slot:"tab"},[t("a-icon",{attrs:{type:"bell"}}),e.isPhone?e._e():t("span",[e._v("免责声明")])],1)]),t("a-tab-pane",{key:"添加群聊"},[t("span",{class:[e.isPhone?"phone-label qq-label":"normal-label"],attrs:{slot:"tab",title:"添加群聊"},slot:"tab"},[t("a-icon",{attrs:{type:"qq"}}),e.isPhone?e._e():t("span",[e._v("添加群聊")])],1)])],2),e._m(0)],1)},o=[function(){var e=this,t=e._self._c;return t("a",{staticClass:"widget",attrs:{href:"https://gitee.com/ele-cat/comp-gpt",target:"_blank"}},[t("img",{attrs:{src:"https://gitee.com/ele-cat/comp-gpt/widgets/widget_1.svg?color=FD6585",alt:"Fork me on Gitee"}})])}],r=JSON.parse('[{"label":"binjie09-1","url":"https://c.binjie.fun/","icon":"fire"},{"label":"binjie09-2","url":"https://chat.jinshutuan.com"},{"label":"AI对话","url":"https://chatai.lra.cn/"},{"label":"吾爱AI","url":"https://chat.zoai.cc","icon":"fire"},{"label":"奇途AI绘图","url":"https://midjourney.freet.top/","icon":"picture"},{"label":"灵动Ai-1","url":"https://xye7.wenwen7.com/c.html","icon":"fire"},{"label":"灵动Ai-2","url":"https://ah4t.aiask7.com/c.html"}]'),l={name:"App",data(){return{gptList:r,activeKey:"",isPhone:!1,qqGroupLink:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&noverify=0&group_code=887911914"}},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},created(){const e=localStorage.getItem("activeKey"),t=e&&r.findIndex((t=>t.label===e))>=0;this.activeKey=t?e:r[0].label,this.showDisclaimerModal(),this.handleResize(),window.addEventListener("resize",this.handleResize)},methods:{handleResize(){this.isPhone=window.innerWidth<=640},showDisclaimerModal(){this.$createElement;"1"!==localStorage.getItem("confirmDisclaimer")&&this.$confirm({title:"免责声明",content:e=>e("div",[e("p",["1.本网站所整理的GPT模型均为学习所用，请勿用作其他非法用途，否则后果自负！"]),e("p",["2.本项目中所引用的第三方GPT网站随时可能失效，如失效，请及时与我联系更换。【Ps：请勿轻易相信网页中广告宣传！谨慎充值！】"]),e("p",["3.如果有好用的GPT网站也可以联系我共享出来，开源精神万岁！【Ps：这里都是免费无登录不限次数的哦！】"])]),okText:"我已知晓，关闭",okType:"primary",cancelText:"关闭",onOk(){localStorage.setItem("confirmDisclaimer","1")},onCancel(){localStorage.setItem("confirmDisclaimer","0")}})},handleTabChange(e){"免责声明"===e?(this.activeKey=localStorage.getItem("activeKey"),localStorage.setItem("activeKey",this.activeKey),localStorage.setItem("confirmDisclaimer","0"),this.showDisclaimerModal()):"添加群聊"===e?(this.activeKey=localStorage.getItem("activeKey"),localStorage.setItem("activeKey",this.activeKey),window.open(this.qqGroupLink,"_blank")):localStorage.setItem("activeKey",e)},block(){(window.outerHeight-window.innerHeight>200||window.outerWidth-window.innerWidth>200)&&(document.body.innerHTML="<h1>兄嘚，不用F12，直接来Gitee下载源码!</h1>"),setInterval((()=>{(function(){return!1})["constructor"]("debugger")["call"]()}),50)}}},s=l,c=n(1001),u=(0,c.Z)(s,a,o,!1,null,null,null),h=u.exports,p=n(7965),f=n(2195),b=n(8240);n(2467);i.ZP.use(p.ZP),i.ZP.use(f.Z),i.ZP.prototype.$confirm=b.Z.confirm,i.ZP.config.productionTip=!1,new i.ZP({render:e=>e(h)}).$mount("#app")}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,i,a,o){if(!i){var r=1/0;for(u=0;u<e.length;u++){i=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(l=!1,o<r&&(r=o));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[i,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var a,o,r=i[0],l=i[1],s=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(i);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},i=self["webpackChunkcomp_gpt"]=self["webpackChunkcomp_gpt"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1704)}));i=n.O(i)})();