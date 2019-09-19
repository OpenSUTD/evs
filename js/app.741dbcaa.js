(function(t){function e(e){for(var s,i,l=e[0],o=e[1],c=e[2],d=0,f=[];d<l.length;d++)i=l[d],n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0007":function(t,e,a){let s=a("30ef"),n=a("c1df");function r(t,e){let a=n(t),s=n(e);return s.diff(a,"days")}function i(t,e){let a=[],s=[];for(let n=1;n<e.length;n++){let i=t[n-1],l=t[n],o=r(i,l);if(1!=o)continue;let c=e[n-1]-e[n];c<0||(c=Math.round(100*c)/100,s.push(c),a.push(t[n]))}return{filteredDates:a,usages:s}}function l(t,e,a){return{title:{text:t,display:!0},legend:{display:!1},scales:{xAxes:[{type:"time",time:{unit:a,displayFormats:{week:"D MMM YY",day:"D MMM YY"}}}],yAxes:[{scaleLabel:{display:!0,labelString:e}}]},tooltips:{callbacks:{title:(t,e)=>{let a=t[0],s=Date.parse(a.xLabel),r=n(s).format("D MMM YY");return r},label:(t,e)=>{let a=t.yLabel,s="$"+a.toFixed(2);return s}}}}}t.exports={balanceTimeSeries:(t,e,a)=>{let n="Credit balance history",r="Credit balance ($)",i=e.length>=32?"week":"day",o=document.getElementById(t).getContext("2d"),c={labels:e,datasets:[{data:a,backgroundColor:"rgba(54, 162, 235, 0.3)"}]},u=l(n,r,i),d=new s(o,{type:"line",data:c,options:u});return d},usageTimeSeries:(t,e,a)=>{let{filteredDates:n,usages:r}=i(e,a),o="Usage history",c="Usage amount ($)",u=e.length>=32?"week":"day",d=document.getElementById(t).getContext("2d"),f={labels:n,datasets:[{data:r,backgroundColor:"rgba(54, 162, 235, 0.3)"}]},p=l(o,c,u),b=new s(d,{type:"line",data:f,options:p});return b},usagePie:(t,e,a)=>{let{filteredDates:n,usages:r}=i(e,a),l=0;for(let s=0;s<r.length;s++)r[s]>0&&l++;let o=[l,r.length-l],c=document.getElementById(t).getContext("2d"),u={labels:["Used","Not used"],datasets:[{data:o,backgroundColor:["#ff6384","#36a2eb"]}]},d={maintainAspectRatio:!1,title:{text:"Number of days of air-con used",display:!0}},f=new s(c,{type:"pie",data:u,options:d});return f},usageHist:(t,e,a)=>{let{filteredDates:n,usages:r}=i(e,a),l=10,o=Array(l+1).fill(0);for(let s=0;s<r.length;s++){let t=r[s],e=Math.round(t/.1);e>l?o[l]++:o[e]++}let c=[];for(let s=0;s<l;s++)c.push((.1*s).toFixed(1));c.push(`≥ ${(.1*l).toFixed(1)}`),c=c.slice(1),o=o.slice(1);let u=document.getElementById(t).getContext("2d"),d={labels:c,datasets:[{label:"Daily usage amount ($)",data:o,backgroundColor:"#ffce56"}]},f={title:{text:"Amount of credit used per day",display:!0},legend:{display:!1},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Daily usage amount ($)"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Counts"}}]},tooltips:{callbacks:{title:(t,e)=>{let a=t[0];return a.yLabel},label:(t,e)=>{let a=t.xLabel,s=e.datasets[0].label;return`${s}: ${a}`}}}},p=new s(u,{type:"bar",data:d,options:f});return p}}},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"374a":function(t,e,a){},4253:function(t,e){function a(t){let e=t[t.length-1],a=e[0];return new Date(a)}function s(t,e){let a=t=>Date.parse(t[0])>=e;return t.filter(a)}t.exports={getPastWeekBalances:t=>{let e=a(t);return e.setHours(0,0,0,0),e.setDate(e.getDate()-7),s(t,e)},getPastMonthBalances:t=>{let e=a(t);return e.setHours(0,0,0,0),e.setMonth(e.getMonth()-1),s(t,e)},separateBalanceTuples:t=>{let e=t.map(t=>t[0]).map(t=>Date.parse(t)),a=t.map(t=>t[1]);return{dates:e,amounts:a}}}},4302:function(t,e,a){"use strict";var s=a("a2ff"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return a(e)}function r(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=a("ce5b"),r=a.n(n),i=(a("bf40"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[t.showNav?a("NavigationDrawer"):t._e(),a("router-view")],1)}),l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{"mini-variant":t.mini,permanent:"",touchless:""}},[a("v-toolbar",{attrs:{flat:""}},[a("v-list",[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("dashboard")])],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"title"},[t._v("\n            EVS Dashboard\n          ")])],1)],1)],1)],1),a("v-divider"),a("v-list",{staticClass:"pt-0"},[t._l(t.pages,function(e,s){return a("v-list-tile",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,attrs:{to:e.path}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}),a("v-divider"),a("v-list-tile",{directives:[{name:"ripple",rawName:"v-ripple"}],on:{click:t.logout}},[a("v-list-tile-action",[a("v-icon",[t._v("exit_to_app")])],1),a("v-list-tile-content",[a("v-list-tile-title",[t._v("Logout")])],1)],1)],2)],1)},c=[];let u=[{title:"Daily Balance",icon:"credit_card",path:"/balance"},{title:"Usage History",icon:"timeline",path:"/usage"},{title:"Topup Statistics",icon:"autorenew",path:"/topup"},{title:"Notifications",icon:"announcement",path:"/notifications"}];var d={name:"NavigationDrawer",data(){return{pages:u}},computed:{mini(){let t=this.$vuetify.breakpoint.smAndDown;return t}},methods:{logout(){this.$store.dispatch("logout"),this.$router.push("/login")}}},f=d,p=(a("7c83"),a("2877")),b=Object(p["a"])(f,o,c,!1,null,"819e9e1c",null),h=b.exports,m={name:"app",components:{NavigationDrawer:h},computed:{showNav(){return"/login"!==this.$route.path}}},g=m,v=(a("034f"),Object(p["a"])(g,i,l,!1,null,null,null)),j=v.exports,y=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("v-form",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}}},[a("v-text-field",{attrs:{"prepend-icon":"person",name:"username",label:"Username",placeholder:"20000xxx",type:"text",autocomplete:"username",autofocus:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",autocomplete:"current-password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-btn",{attrs:{loading:t.loading.normal},on:{click:t.login}},[t._v("\n      Login\n    ")]),a("v-btn",{staticClass:"ma-4",attrs:{flat:"",outline:"",loading:t.loading.demo},on:{click:t.demo}},[t._v("\n      Demo\n    ")]),t.failed?a("p",{staticClass:"mt-2 red--text"},[t._v("\n      Login failed. Please try again.\n    ")]):t._e()],1)],1)},k=[],_={name:"Login",data(){return{username:"",password:"",loading:{normal:!1,demo:!1},failed:!1}},methods:{login(){this.loading.normal=!0;let t={username:this.username,password:this.password};this.$store.dispatch("login",t).then(()=>{this.$router.push("/balance")}).catch(()=>{this.failed=!0,this.password=""}).finally(()=>{this.loading.normal=!1})},demo(){this.loading.demo=!0,this.$store.dispatch("demo").then(()=>{this.$router.push("/balance")}).finally(()=>{this.loading.demo=!1})}}},w=_,C=(a("9c85"),Object(p["a"])(w,x,k,!1,null,"03c45a73",null)),D=C.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"balance"}},[a("h1",{staticClass:"mb-3"},[t._v("Balance")]),a("v-btn-toggle",{attrs:{mandatory:"",id:"toggleDates"}},[a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.plotAll()}}},[t._v("All")]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.plotMonth()}}},[t._v("Past Month")]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.plotWeek()}}},[t._v("Past Week")])],1),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-container",{staticClass:"chartContainer",attrs:{"elevation-2":""}},[a("canvas",{attrs:{id:"balanceTimeSeries"}})])],1)],1)],1)],1)},M=[],S=a("2f62"),$=a("4253"),E=a("0007"),T={name:"Balance",data(){return{charts:[]}},computed:{...Object(S["b"])(["balances"])},methods:{plot(t){this.destroyExistingCharts();let{dates:e,amounts:a}=Object($["separateBalanceTuples"])(t),s=Object(E["balanceTimeSeries"])("balanceTimeSeries",e,a);this.charts=[s]},plotAll(){this.plot(this.balances)},plotMonth(){let t=Object($["getPastMonthBalances"])(this.balances);this.plot(t)},plotWeek(){let t=Object($["getPastWeekBalances"])(this.balances);this.plot(t)},destroyExistingCharts(){for(let t of this.charts)t.destroy()}},mounted(){this.balances&&this.plotAll()},watch:{balances:function(){this.plotAll()}}},P=T,z=(a("879a"),Object(p["a"])(P,O,M,!1,null,"11feede2",null)),A=z.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"usage"}},[a("h1",{staticClass:"mb-3"},[t._v("Usage")]),a("v-btn-toggle",{attrs:{mandatory:"",id:"toggleDates"}},[a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.plotAll()}}},[t._v("All")]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.plotMonth()}}},[t._v("Past Month")]),a("v-btn",{attrs:{flat:""},on:{click:function(e){return t.plotWeek()}}},[t._v("Past Week")])],1),a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-container",{staticClass:"chartContainer",attrs:{"elevation-2":""}},[a("canvas",{attrs:{id:"usageTimeSeries"}})])],1)],1),a("v-layout",t._b({attrs:{row:""}},"v-layout",t.binding,!1),[a("v-flex",{attrs:{xs8:""}},[a("v-container",{staticClass:"chartContainer",attrs:{"elevation-2":""}},[a("canvas",{attrs:{id:"usageHist"}})])],1),a("v-flex",{attrs:{xs4:""}},[a("v-container",{staticClass:"chartContainer",attrs:{"elevation-2":""}},[a("canvas",{attrs:{id:"usagePie"}})])],1)],1)],1)],1)},N=[],Y={name:"Usage",data(){return{charts:[]}},computed:{...Object(S["b"])(["balances"]),binding(){let t={};return this.$vuetify.breakpoint.xs&&(t.column=!0),t}},methods:{plot(t){this.destroyExistingCharts();let{dates:e,amounts:a}=Object($["separateBalanceTuples"])(t),s=Object(E["usageTimeSeries"])("usageTimeSeries",e,a),n=Object(E["usagePie"])("usagePie",e,a),r=Object(E["usageHist"])("usageHist",e,a);this.charts=[s,n,r]},plotAll(){this.plot(this.balances)},plotMonth(){let t=Object($["getPastMonthBalances"])(this.balances);this.plot(t)},plotWeek(){let t=Object($["getPastWeekBalances"])(this.balances);this.plot(t)},destroyExistingCharts(){for(let t of this.charts)t.destroy()}},mounted(){this.balances&&this.plotAll()},watch:{balances:function(){this.plotAll()},binding:function(){this.plotAll()}}},L=Y,F=(a("8ee5"),Object(p["a"])(L,B,N,!1,null,"16cccf68",null)),U=F.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"topup"}},[a("h1",{staticClass:"mb-3"},[t._v("Topup")]),a("v-data-table",{staticClass:"elevation-1",attrs:{id:"table",headers:t.headers,items:t.tableItems},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-left",on:{click:function(e){t.dateFormat=!t.dateFormat}}},[t._v("\n        "+t._s(t.formatDate(e.item.date))+"\n      ")]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.amount.toFixed(2)))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.daysSinceTopup))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.dailyAvg.toFixed(2)))])]}}])})],1)},H=[],I=a("c1df"),J=a.n(I),q={name:"Topup",data(){return{headers:[{text:"Date of topup",sortable:!1},{text:"Topup amount ($)",sortable:!1,align:"right"},{text:"Days since last topup",sortable:!1,align:"right"},{text:"Daily average ($)",sortable:!1,align:"right"}],dateFormat:!0}},computed:{...Object(S["b"])(["transactions"]),tableItems(){let t=this.transactions,e=[];for(let a=0;a<t.length-1;a++){let s=Date.parse(t[a].date),n=Date.parse(t[a+1].date),r=J()(s).diff(n,"days"),i=t[a+1].amount/r;e.push({date:t[a].date,amount:t[a].amount,daysSinceTopup:r,dailyAvg:i})}return e}},methods:{formatDate(t){return J()(t).format(this.dateFormat?"DD MMM YYYY":"DD-MM-YYYY")}}},G=q,R=(a("4302"),Object(p["a"])(G,W,H,!1,null,"03de27da",null)),V=R.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"notifications"}},[a("h1",{staticClass:"mb-3"},[t._v("Notifications")]),a("p",[t._v("Set up Telegram notifications when your credit balance falls below a preset threshold.")]),a("a",{staticClass:"ma-3",attrs:{href:"https://t.me/evs_notification_bot"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(t){var e=t.hover;return a("img",{class:"elevation-"+(e?4:0),attrs:{src:"https://telegram.org/img/t_logo.png"}})}}])})],1)])},Q=[],X={name:"Notifications"},Z=X,tt=(a("b47f"),Object(p["a"])(Z,K,Q,!1,null,"52681fc5",null)),et=tt.exports;s["default"].use(S["a"]);const at="https://gabrielwong159.pythonanywhere.com";var st=new S["a"].Store({state:{balances:null,transactions:null,authenticated:!1},getters:{authenticated:t=>t.authenticated},actions:{login({commit:t},{username:e,password:a}){let s=`${at}/info`,n={"Content-Type":"application/json"},r=JSON.stringify({username:e,password:a});return fetch(s,{method:"POST",headers:n,body:r}).then(t=>{if(t.ok)return t.json();throw new Error}).then(e=>{t("loginSuccess",e)})},logout({commit:t}){t("logout")},demo({commit:t}){let e=`${at}/info/demo`;return fetch(e).then(t=>t.json()).then(e=>{t("loginSuccess",e)})}},mutations:{loginSuccess(t,{balances:e,transactions:a}){t.balances=e,t.transactions=a,t.authenticated=!0},logout(t){t.balances=null,t.transactions=null,t.authenticated=!1}}});function nt(t,e,a){st.getters.authenticated?a(e.path):a()}function rt(t,e,a){st.getters.authenticated?a():a("/login")}s["default"].use(y["a"]);const it=new y["a"]({routes:[{path:"/login",name:"Login",component:D,beforeEnter:nt},{path:"/balance",name:"Balance",component:A,beforeEnter:rt},{path:"/usage",name:"Usage",component:U,beforeEnter:rt},{path:"/topup",name:"Topup",component:V,beforeEnter:rt},{path:"/notifications",name:"Notifications",component:et,beforeEnter:rt},{path:"*",redirect:"/login"}]});var lt=it;s["default"].use(r.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(j)},router:lt,store:st}).$mount("#app"),lt.afterEach((t,e)=>{ga("set","page","/evs"+t.path),ga("send","pageview")})},"64a9":function(t,e,a){},6930:function(t,e,a){},7615:function(t,e,a){},"7c83":function(t,e,a){"use strict";var s=a("374a"),n=a.n(s);n.a},"879a":function(t,e,a){"use strict";var s=a("6930"),n=a.n(s);n.a},"8ee5":function(t,e,a){"use strict";var s=a("7615"),n=a.n(s);n.a},"9c85":function(t,e,a){"use strict";var s=a("db0a"),n=a.n(s);n.a},"9cac":function(t,e,a){},a2ff:function(t,e,a){},b47f:function(t,e,a){"use strict";var s=a("9cac"),n=a.n(s);n.a},db0a:function(t,e,a){}});
//# sourceMappingURL=app.741dbcaa.js.map