(function(){"use strict";var t={5287:function(t,e,n){var i=n(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("a-tabs",{attrs:{"tab-position":"left"},on:{change:t.handleTabChange},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.gptList,(function(n,i){return e("a-tab-pane",{key:n.label},[t.isPhone?e("span",{staticClass:"phone-label",attrs:{slot:"tab",title:n.label},slot:"tab"},[t._v(t._s(i+1))]):e("span",{staticClass:"normal-label",attrs:{slot:"tab",title:n.label},slot:"tab"},[n.icon?e("a-icon",{class:n.icon,attrs:{type:n.icon}}):t._e(),t._v(t._s(n.label))],1),e("iframe",{staticClass:"iframe",attrs:{src:n.url,frameborder:"0"}})])})),1),e("div",{staticClass:"intro"},[t._l(t.infoList,(function(n){return e("div",{key:n.value,staticClass:"intro-item",on:{click:function(e){return t.handleIntro(n)}}},[e("a-icon",{class:[t.isPhone?"phone-label qq-label":"normal-label"],attrs:{type:n.value}}),t.isPhone?t._e():e("span",[t._v(t._s(n.label))])],1)})),e("img",{staticStyle:{height:"18px","object-fit":"contain"},attrs:{src:"https://visitor-badge.laobi.icu/badge?page_id=comp-gpt.visitor-badge&right_color=%23fd6585",alt:""}})],2)],1)},o=[];const r=[{label:"GPT公益站",url:"https://nx.chkzh.com/",icon:"fire"},{label:"binjie",url:"https://chat18.aichatos.xyz",icon:"fire"},{label:"创想AI",url:"https://ideaiai.com/",icon:"fire"},{label:"在问",url:"https://www.zaiwen.top/#/chat/working-edition",icon:"fire"},{label:"AI法律助手",url:"https://meta.law/",icon:"fire"},{label:"心态不好勿用",url:"https://onima.oksocool.com/"},{label:"Chat01",url:"https://yopygr.aitianhu1.top"},{label:"Chat02",url:"https://f1.001.lat/#/chat/1002"},{label:"Chat03",url:"https://chat04.a1r.cc/#/chat/1002"},{label:"Free2gpt",url:"https://chatz.free2gpt.xyz/"},{label:"迅捷01",url:"http://chat.letdata.net/ichat/s2wftazc9fq",icon:"logout"}];var l=r,c={name:"App",data(){return{gptList:l,activeKey:"",isPhone:!1,infoList:[{label:"免责声明",value:"bell",url:""},{label:"添加群聊",value:"qq",url:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FBr4JIxIckrUqgDK-rbdMkoQYfJT4BCs&authKey=Dl1dUP8%2BXRNefHTYG38DyEi3CAOf20Pc8yyIJwKQ7HlP5WX7nYhURs2vVtmttNHX&noverify=0&group_code=887911914"},{label:"关注B站",value:"home",url:"https://space.bilibili.com/376288070"}]}},beforeDestroy(){window.removeEventListener("resize",this.handleResize)},created(){const t=localStorage.getItem("activeKey"),e=t&&l.findIndex((e=>e.label===t))>=0;this.activeKey=e?t:l[0]["label"],this.showDisclaimerModal(),this.handleResize(),window.addEventListener("resize",this.handleResize)},methods:{handleResize(){this.isPhone=window.innerWidth<=640},showDisclaimerModal(){this.$createElement;"1"!==localStorage.getItem("confirmDisclaimer")&&this.$confirm({title:"免责声明",content:t=>t("div",[t("p",["1.本网站所整理的GPT模型均为学习所用，请勿用作其他非法用途，否则后果自负！"]),t("p",["2.本项目中所引用的第三方GPT网站随时可能失效，如失效，请及时与我联系更换。【Ps：请勿轻易相信网页中广告宣传！谨慎充值！】"]),t("p",["3.如果有好用的GPT网站也可以联系我共享出来，开源精神万岁！【Ps：这里都是免费无登录不限次数的哦！】"])]),okText:"我已知晓，不再弹出",okType:"primary",cancelText:"关闭",onOk(){localStorage.setItem("confirmDisclaimer","1")},onCancel(){localStorage.setItem("confirmDisclaimer","0")}})},handleTabChange(t){const e=l.find((e=>e.label===t));if("logout"===e.icon)return window.open(e.url,"_blank"),void(this.activeKey=localStorage.getItem("activeKey"));localStorage.setItem("activeKey",t)},handleIntro(t){"bell"===t.value?(localStorage.setItem("confirmDisclaimer","0"),this.showDisclaimerModal()):window.open(t.url,"_blank")},block(){(window.outerHeight-window.innerHeight>200||window.outerWidth-window.innerWidth>200)&&(document.body.innerHTML="<h1>兄嘚，不用F12，直接来Github下载源码!</h1>"),setInterval((()=>{(function(){return!1})["constructor"]("debugger")["call"]()}),50)}}},s=c,u=n(1001),h=(0,u.Z)(s,a,o,!1,null,null,null),f=h.exports,p=n(7965),b=n(2195),d=n(8240);n(2467);i.ZP.use(p.ZP),i.ZP.use(b.Z),i.ZP.prototype.$confirm=d.Z.confirm,i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(f)}).$mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,o){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],o=t[u][2];for(var l=!0,c=0;c<i.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(l=!1,o<r&&(r=o));if(l){t.splice(u--,1);var s=a();void 0!==s&&(e=s)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,r=i[0],l=i[1],c=i[2],s=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var u=c(n)}for(e&&e(i);s<r.length;s++)o=r[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunkcomp_gpt"]=self["webpackChunkcomp_gpt"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5287)}));i=n.O(i)})();