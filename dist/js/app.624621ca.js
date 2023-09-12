(function(){"use strict";var t={8131:function(t,e,n){var i=n(6369),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("a-tabs",{attrs:{"tab-position":"left"},on:{change:t.handleTabChange},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},[t._l(t.gptList,(function(n,i){return e("a-tab-pane",{key:n.label},[t.isPhone?e("span",{staticClass:"phone-label",attrs:{slot:"tab",title:n.label},slot:"tab"},[t._v(t._s(i+1))]):e("span",{staticClass:"normal-label",attrs:{slot:"tab",title:n.label},slot:"tab"},[n.icon?e("a-icon",{class:n.icon,attrs:{type:n.icon}}):t._e(),t._v(t._s(n.label))],1),e("iframe",{staticClass:"iframe",attrs:{src:n.url,frameborder:"0"}})])})),e("a-tab-pane",{key:"添加群聊"},[e("span",{class:[t.isPhone?"phone-label qq-label":"normal-label"],attrs:{slot:"tab",title:"添加群聊"},slot:"tab"},[e("a-icon",{attrs:{type:"qq"}}),t.isPhone?t._e():e("span",[t._v("添加群聊")])],1)])],2),t._m(0)],1)},a=[function(){var t=this,e=t._self._c;return e("a",{staticClass:"widget",attrs:{href:"https://gitee.com/ele-cat/comp-gpt",target:"_blank"}},[e("img",{attrs:{src:"https://gitee.com/ele-cat/comp-gpt/widgets/widget_1.svg?color=FD6585",alt:"Fork me on Gitee"}})])}],o=JSON.parse('[{"label":"binjie09-1","url":"https://c.binjie.fun/","icon":"fire"},{"label":"binjie09-2","url":"https://chat.jinshutuan.com"},{"label":"AI对话","url":"https://chatai.lra.cn/"},{"label":"吾爱AI","url":"https://chat.zoai.cc","icon":"fire"},{"label":"奇途AI绘图","url":"https://midjourney.freet.top/","icon":"picture"},{"label":"灵动Ai-1","url":"https://xye7.wenwen7.com/c.html","icon":"fire"},{"label":"灵动Ai-2","url":"https://ah4t.aiask7.com/c.html"}]'),l={name:"App",data(){return{gptList:o,activeKey:"",isPhone:!1,qqGroupLink:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&noverify=0&group_code=887911914"}},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},created(){const t=localStorage.getItem("activeKey"),e=t&&o.findIndex((e=>e.label===t))>=0;this.activeKey=e?t:o[0].label,this.showDisclaimerModal(),this.handleResize(),window.addEventListener("resize",this.handleResize)},methods:{handleResize(){this.isPhone=window.innerWidth<=640},showDisclaimerModal(){this.$createElement;"1"!==localStorage.getItem("confirmDisclaimer")&&this.$confirm({title:"免责声明",content:t=>t("div",[t("p",["1.本网站所整理的GPT模型均为学习所用，请勿用作其他非法用途，否则后果自负！"]),t("p",["2.本项目中所引用的第三方GPT网站随时可能失效，如失效，请及时与我联系更换。【Ps：请勿轻易相信网页中广告宣传！谨慎充值！】"]),t("p",["3.如果有好用的GPT网站也可以联系我共享出来，开源精神万岁！【Ps：这里都是免费无登录不限次数的哦！】"])]),okText:"我已知晓，关闭",okType:"primary",cancelText:"关闭",onOk(){localStorage.setItem("confirmDisclaimer","1")},onCancel(){localStorage.setItem("confirmDisclaimer","0")}})},handleTabChange(t){"添加群聊"===t?(this.activeKey=localStorage.getItem("activeKey"),localStorage.setItem("activeKey",this.activeKey),window.open(this.qqGroupLink,"_blank")):localStorage.setItem("activeKey",t)},block(){(window.outerHeight-window.innerHeight>200||window.outerWidth-window.innerWidth>200)&&(document.body.innerHTML="<h1>兄嘚，不用F12，直接来Gitee下载源码!</h1>"),setInterval((()=>{(function(){return!1})["constructor"]("debugger")["call"]()}),50)}}},c=l,s=n(1001),u=(0,s.Z)(c,r,a,!1,null,null,null),h=u.exports,p=n(7965),f=n(2195),b=n(8240);n(2467);i.ZP.use(p.ZP),i.ZP.use(f.Z),i.ZP.prototype.$confirm=b.Z.confirm,i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(h)}).$mount("#app")}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,r,a){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],r=t[u][1],a=t[u][2];for(var l=!0,c=0;c<i.length;c++)(!1&a||o>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(l=!1,a<o&&(o=a));if(l){t.splice(u--,1);var s=r();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var r,a,o=i[0],l=i[1],c=i[2],s=0;if(o.some((function(e){return 0!==t[e]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(c)var u=c(n)}for(e&&e(i);s<o.length;s++)a=o[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},i=self["webpackChunkcomp_gpt"]=self["webpackChunkcomp_gpt"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(8131)}));i=n.O(i)})();