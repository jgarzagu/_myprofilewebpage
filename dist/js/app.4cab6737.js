(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"02e7":function(t,e,a){t.exports=a.p+"img/3.8b905b20.png"},"0b1d":function(t,e,a){t.exports=a.p+"img/hackaton.7975d8c1.jpg"},"0f6d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",t._b({staticClass:"v-card--material",class:t.classes},"v-card",t.$attrs,!1),[a("div",{staticClass:"d-flex grow flex-wrap"},[t.avatar?a("v-avatar",{staticClass:"mx-auto v-card--material__avatar elevation-6",attrs:{size:"180",color:"grey"}},[a("v-img",{attrs:{src:t.avatar}})],1):a("v-sheet",{staticClass:"text-start v-card--material__heading mb-n6",class:{"pa-7":!t.$slots.image},attrs:{color:t.color,"max-height":t.icon?90:void 0,width:t.icon?"auto":"100%",elevation:"6",dark:""}},[t.$slots.heading?t._t("heading"):t.$slots.image?t._t("image"):t.title&&!t.icon?a("div",{staticClass:"display-1 font-weight-light",domProps:{textContent:t._s(t.title)}}):t.icon?a("v-icon",{attrs:{size:"32"},domProps:{textContent:t._s(t.icon)}}):t._e(),t.text?a("div",{staticClass:"headline font-weight-thin",domProps:{textContent:t._s(t.text)}}):t._e()],2),t.$slots["after-heading"]?a("div",{staticClass:"ml-6"},[t._t("after-heading")],2):t.icon&&t.title?a("div",{staticClass:"ml-4"},[a("div",{staticClass:"card-title font-weight-light",domProps:{textContent:t._s(t.title)}})]):t._e()],1),t._t("default"),t.$slots.actions?[a("v-divider",{staticClass:"mt-2"}),a("v-card-actions",{staticClass:"pb-0"},[t._t("actions")],2)]:t._e()],2)},n=[],r={name:"MaterialCard",props:{avatar:{type:String,default:""},color:{type:String,default:"success"},icon:{type:String,default:void 0},image:{type:Boolean,default:!1},text:{type:String,default:""},title:{type:String,default:""}},computed:{classes:function(){return{"v-card--material--has-heading":this.hasHeading}},hasHeading:function(){return Boolean(this.$slots.heading||this.title||this.icon)},hasAltHeading:function(){return Boolean(this.$slots.heading||this.title&&this.icon)}}},i=r,o=(a("d868"),a("2877")),c=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=c.exports},1219:function(t,e,a){t.exports=a.p+"img/4.93b428e2.jpg"},1647:function(t,e,a){t.exports=a.p+"img/2.eeac816e.png"},"2e1b":function(t,e,a){t.exports=a.p+"img/3.176ec63f.jpg"},"345f":function(t,e,a){t.exports=a.p+"img/1.cf9f7ad6.png"},"35a6":function(t,e,a){var s={"./App":"3dfd","./App.vue":"3dfd","./assets/JessicaGarza.jpg":"4ed8","./assets/amalgam/1.png":"ccf8","./assets/amalgam/2.png":"598a","./assets/amalgam/3.png":"7868","./assets/appliancizer/1.png":"345f","./assets/appliancizer/2.png":"a397","./assets/appliancizer/3.png":"f645","./assets/artik/1.jpg":"981b","./assets/artik/2.jpg":"dbd6","./assets/artik/3.jpg":"f4c4","./assets/cselogo.gif":"40b0","./assets/customIC/1.png":"ded9","./assets/customIC/2.png":"1647","./assets/customIC/3.png":"fbe2","./assets/echidna/1.png":"bb9c","./assets/echidna/2.png":"b76f","./assets/echidna/3.png":"02e7","./assets/linuxduino/1.png":"d6a6","./assets/linuxduino/2.png":"86ea","./assets/linuxduino/3.png":"be30","./assets/logo.png":"cf05","./assets/logo.svg":"9b19","./assets/news/hackaton.jpg":"0b1d","./assets/news/mentees.jpg":"dcff","./assets/profilepic.jpg":"6416","./assets/quadClass/1.jpg":"6473","./assets/quadClass/2.jpg":"4a82","./assets/quadClass/3.jpg":"4aba","./assets/quadClass/4.jpg":"dfa8","./assets/quadClass/5.jpg":"3ef7","./assets/torrey/1.png":"9b64","./assets/torrey/3.jpg":"2e1b","./assets/torrey/4.jpg":"1219","./assets/torrey/5.jpg":"54c4","./assets/torrey/6.jpg":"4fba","./assets/ucsdcse.JPG":"77f5","./assets/ucsdcse.png":"386e","./components/MaterialCard":"0f6d","./components/MaterialCard.vue":"0f6d","./main":"56d7","./main.js":"56d7","./plugins/vuetify":"402c","./plugins/vuetify.js":"402c","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./store":"4360","./store/":"4360","./store/index":"4360","./store/index.js":"4360","./views/About":"f820","./views/About.vue":"f820","./views/Home":"bb51","./views/Home.vue":"bb51"};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="35a6"},"386e":function(t,e,a){t.exports=a.p+"img/ucsdcse.f2f3fe34.png"},"3dfd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-img",{staticStyle:{position:"absolute",width:"100%",height:"400px"},attrs:{alt:"Background Image",src:a("6416")}}),s("v-app-bar",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{id:"appBar",app:"",color:t.appBarColor,dark:t.appBarTheme,dense:""}},[s("v-toolbar-title",[s("v-btn",{attrs:{href:"#",text:""}},[s("span",{staticClass:"navButtonFont font-weight-bold"},[t._v(" Ph.D. Jorge Garza ")])])],1),s("div",{staticClass:"d-flex justify-center",staticStyle:{width:"80%"}},[s("v-btn",{attrs:{href:"#aboutme",text:""}},[s("span",{staticClass:"navButtonFont"},[t._v(" ABOUT ME ")])]),s("v-btn",{attrs:{href:"#publications",text:""}},[s("span",{staticClass:"navButtonFont"},[t._v(" Publications ")])]),s("v-btn",{attrs:{href:"#teaching",text:""}},[s("span",{staticClass:"navButtonFont"},[t._v(" Teaching ")])]),s("v-btn",{attrs:{href:"#work",text:""}},[s("span",{staticClass:"navButtonFont"},[t._v(" Work ")])]),s("v-btn",{attrs:{href:"#projects",text:""}},[s("span",{staticClass:"navButtonFont"},[t._v(" Projects ")])]),s("v-btn",{attrs:{href:"#news",text:""}},[s("span",{staticClass:"navButtonFont"},[t._v(" News ")])])],1)],1),s("v-content",{staticStyle:{"background-color":"#E8E8E8"},attrs:{id:"content"}},[s("v-container",[s("material-card",{staticClass:"v-card-profile",staticStyle:{"margin-top":"15%"},attrs:{id:"materialCard",raised:"",avatar:a("4ed8")}},[s("v-card-text",{attrs:{id:"cardText"}},[s("v-container",{staticClass:"px-12"},[s("div",{staticClass:"text-center"},[s("h1",{staticClass:"display-1 font-weight-light mb-3 black--text"},[t._v(" Jorge Garza ")]),s("h1",{staticClass:"display-1 font-weight-light mb-3 black--text"},[t._v(" Computer Science Ph.D. Student at "),s("a",{attrs:{href:"https://cse.ucsd.edu/",target:"_blank"}},[t._v("UCSD")])]),s("p",{staticClass:"body-1 font-weight-light"},[t._v(" (Email: jgarzagu at eng.ucsd.edu) ")])]),s("br"),s("br"),s("h1",{staticClass:"display-1 font-weight-light pt-12 black--text",attrs:{id:"aboutme"}},[t._v(" About me ")]),s("v-container",{staticClass:"px-12"},[s("p",{staticClass:"body-1 black--text"},[t._v(" I am a Ph.D. candidate in the Department of Computer Science and Engineering ("),s("a",{attrs:{href:"https://cse.ucsd.edu/",target:"_blank"}},[t._v("UCSD")]),t._v(") at the University of California, San Diego ("),s("a",{attrs:{href:"https://ucsd.edu/",target:"_blank"}},[t._v("UCSD")]),t._v("). I am a member of the Non-Volatile Systems Laboratory ("),s("a",{attrs:{href:"http://nvsl.ucsd.edu/",target:"_blank"}},[t._v("NVSL")]),t._v(") and the Center for Networking Systems ("),s("a",{attrs:{href:"https://cns.ucsd.edu/",target:"_blank"}},[t._v("CNS")]),t._v("), and currently working with Professor "),s("a",{attrs:{href:"http://swanson.ucsd.edu/",target:"_blank"}},[t._v("Steven Swanson")]),t._v(". My research interests are web interfaces, human computer interaction, computer architecture, and embedded systems. My research objective is to facilitate the design of electronic devices by creating Computer-aided design (CAD) tools. A CAD I'm currently working at is a novel tool that can transform web pages into actual physical devices by making HTML DOM elements interact with the physical domain. ")])]),s("h1",{staticClass:"display-1 font-weight-light pt-12 black--text",attrs:{id:"publications"}},[t._v(" Publications "),s("span",{staticClass:"body-1 font-weight-light"},[s("a",{attrs:{href:"https://scholar.google.com/citations?user=i_AcsFMAAAAJ&hl=en",target:"_blank"}},[t._v("Google Scholar")])])]),s("v-container",{staticClass:"px-12"},t._l(t.publications,(function(e,n){return s("v-card",{key:n,staticClass:"mt-6",attrs:{elevation:"6"}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"6"}},[s("v-container",[s("p",{staticClass:"body-1 black--text pb-0 mb-0"},[t._v(" "+t._s(e.title)+" ")]),s("p",{staticClass:"body-2 font-weight-light"},[t._v(" "+t._s(e.authors)+" "),s("br"),s("a",{attrs:{href:e.conferenceLink,target:"_blank"}},[t._v(" "+t._s(e.conference)+" ")])])])],1),s("v-col",{attrs:{cols:"6"}},[s("v-carousel",{attrs:{continuous:!1,cycle:!1,"show-arrows":!0,"hide-delimiters":!0,height:t.publications_carouselHeight}},t._l(e.paperImages,(function(e,n){return s("v-carousel-item",{key:n},[s("v-img",{attrs:{src:a("35a6")(""+e.src),contain:"",height:t.publications_carouselHeight}})],1)})),1)],1)],1)],1)})),1),s("br"),s("br"),s("h1",{staticClass:"display-1 font-weight-light pt-12 black--text",attrs:{id:"teaching"}},[t._v(" Teaching ")]),s("v-container",{staticClass:"px-12"},t._l(t.teachings,(function(e,n){return s("v-card",{key:n,staticClass:"mt-6",attrs:{elevation:"6"}},[s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"6"}},[s("v-container",[s("p",{staticClass:"body-1 black--text"},[t._v(" "+t._s(e.title)+" ")]),s("p",{staticClass:"body-2 font-italic font-weight-regular"},[t._v(" "+t._s(e.about)+" ")]),s("p",{staticClass:"body-2 font-weight-light mb-0"},[t._v(" "+t._s(e.years)+" "),s("br"),s("a",{attrs:{href:e.webPageLink,target:"_blank"}},[t._v(" "+t._s(e.webPage)+" ")])])])],1),s("v-col",{attrs:{cols:"6"}},[s("v-carousel",{attrs:{continuous:!1,cycle:!1,"show-arrows":!0,"hide-delimiters":!0,height:t.teachings_carouselHeight}},t._l(e.teachingImages,(function(e,n){return s("v-carousel-item",{key:n},[s("v-img",{attrs:{src:a("35a6")(""+e.src),contain:"",height:t.teachings_carouselHeight}})],1)})),1)],1)],1)],1)})),1),s("br"),s("br"),s("h1",{staticClass:"display-1 font-weight-light pt-12 black--text",attrs:{id:"work"}},[t._v(" Work Experience ")]),s("v-container",{staticClass:"px-12"},t._l(t.works,(function(e,n){return s("v-card",{key:n,staticClass:"mt-6",attrs:{elevation:"6"}},[0!=e.workImages.length?s("v-row",{attrs:{dense:""}},[s("v-col",{attrs:{cols:"6"}},[s("v-container",[s("p",{staticClass:"body-1 black--text pb-0 mb-0"},[t._v(" "+t._s(e.title)+" ")]),s("p",{staticClass:"body-2 font-weight-light"},[t._v(" "+t._s(e.years)+" ")])])],1),s("v-col",{attrs:{cols:"6"}},[s("v-carousel",{attrs:{continuous:!1,cycle:!1,"show-arrows":!0,"hide-delimiters":!0,height:t.works_carouselHeight}},t._l(e.workImages,(function(e,n){return s("v-carousel-item",{key:n},[s("v-img",{attrs:{src:a("35a6")(""+e.src),contain:"",height:t.works_carouselHeight}})],1)})),1)],1)],1):s("v-container",[s("p",{staticClass:"body-1 black--text pb-0 mb-0"},[t._v(" "+t._s(e.title)+" ")]),s("p",{staticClass:"body-2 font-weight-light"},[t._v(" "+t._s(e.years)+" ")])]),s("v-expansion-panels",[s("v-expansion-panel",[s("v-expansion-panel-header",[t._v("About")]),s("v-expansion-panel-content",[s("p",{staticClass:"body-1 font-weight-light"},[t._v(' "'+t._s(e.about)+'" ')])])],1)],1)],1)})),1),s("br"),s("br"),s("h1",{staticClass:"display-1 font-weight-light pt-12 black--text",attrs:{id:"projects"}},[t._v(" Projects ")]),s("v-container",{staticClass:"px-12",attrs:{fluid:""}},t._l(t.projects,(function(e,n){return s("div",{key:n},[s("v-card",{staticClass:"ml-6 mb-4 float-right",attrs:{elevation:"6",width:"400px"}},[s("v-carousel",{attrs:{continuous:!1,cycle:!1,"show-arrows":!0,"hide-delimiters":!0,height:t.projects_carouselHeight}},t._l(e.images,(function(e,n){return s("v-carousel-item",{key:n},[s("v-img",{attrs:{src:a("35a6")(""+e.src),contain:"",height:t.projects_carouselHeight}})],1)})),1)],1),s("v-card-title",[t._v(t._s(e.title))]),s("p",{staticClass:"body-1 font-weight-light ma-4 text-warp"},[1==e.haslink?s("span",[t._v(" Project Link: "),s("a",{attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.link)+" ")]),s("br"),s("br")]):t._e(),t._v(" "+t._s(e.about)+" ")])],1)})),0),s("br"),s("br"),s("h1",{staticClass:"display-1 font-weight-light pt-12 black--text",attrs:{id:"news"}},[t._v(" News ")]),s("v-container",{staticClass:"px-12"},t._l(t.news,(function(e,n){return s("v-timeline",{key:n,attrs:{dense:""}},[s("v-timeline-item",{attrs:{color:e.color}},[s("v-card",{staticClass:"elevation-2"},[void 0!=e.image?s("v-row",{attrs:{align:"center",dense:""}},[s("v-col",{attrs:{cols:"8"}},[s("v-card-subtitle",{domProps:{innerHTML:t._s(e.about)}})],1),s("v-col",{attrs:{cols:"4"}},[s("v-img",{attrs:{src:a("35a6")(""+e.image),contain:"",height:"100px"}})],1)],1):s("v-card-subtitle",{domProps:{innerHTML:t._s(e.about)}})],1)],1)],1)})),1)],1)],1)],1)],1)],1),s("v-footer",{attrs:{padless:!0}},[s("v-card",{staticClass:"white lighten-1 text-center",attrs:{flat:"",tile:"",width:"100%"}},[s("v-card-text",[t._v(" This is a open source profile page designed by me using "),s("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v(" Vuejs ")]),t._v(" and "),s("a",{attrs:{href:"http://vuetifyjs.com/",target:"_blank"}},[t._v(" Veutify. ")]),s("br"),t._v(" Source: "),s("a",{attrs:{href:"https://github.com/Guardado/vuemyprofilepage",target:"_blank"}},[t._v(" github ")])]),s("v-divider"),s("v-card-text",{staticClass:"black--text"},[t._v(" @ "+t._s((new Date).getFullYear())+" "),s("strong",[t._v("Jorge Garza")])])],1)],1)],1)},n=[],r=a("0f6d"),i={name:"App",components:{MaterialCard:r["default"]},data:function(){return{appBarColor:"transparent",appBarTheme:!0,publications_carouselHeight:"120px",publications:[{title:"Amalgam: Hardware Hacking for Web Developers with Style (Sheets)",authors:"Jorge Garza, Devon J. Merrill, Steven Swanson",conference:"ICWE 2019",conferenceLink:"https://link.springer.com/chapter/10.1007%2F978-3-030-19274-7_23",paperImages:[{src:"./assets/amalgam/1.png"},{src:"./assets/amalgam/2.png"},{src:"./assets/amalgam/3.png"}]},{title:"Echidna: mixed-domain computational implementation via decision trees",authors:"Devon J. Merrill, Jorge Garza, Steven Swanson",conference:"SCF 2019",conferenceLink:"https://dl.acm.org/doi/10.1145/3328939.3329004",paperImages:[{src:"./assets/echidna/1.png"},{src:"./assets/echidna/2.png"},{src:"./assets/echidna/3.png"}]}],teachings_carouselHeight:"200px",teachings:[{title:"Graduate Teaching Assistant (CSE176e/276e: Robotic System Design and Implementation)",about:'"Teach and help students build their own quadcopters from scratch. "',years:"Years: Spring 2015 & 2016",webPage:"The Quadcopter Class",webPageLink:"https://sites.google.com/a/eng.ucsd.edu/quadcopterclass/home?authuser=0",teachingImages:[{src:"./assets/quadClass/5.jpg"},{src:"./assets/quadClass/4.jpg"},{src:"./assets/quadClass/3.jpg"},{src:"./assets/quadClass/1.jpg"},{src:"./assets/quadClass/2.jpg"}]}],works_carouselHeight:"200px",works:[{title:"Jr. Embedded Linux Software Engineer / Product Engineer at Torrey",about:"Responsible for developing and integrating Linux Device Drivers for the \n          integrated circuits that were added to the WLS scale, a labeling weight scale developed\n          at the company for comercial use. Also responsible for some of the UI designs. \n          At the same time, developed a Bluetooth Low Energy digital temperature controller (PCB and firmware) \n          for use in fridges and coolers and a Android app to be use with it.",years:"Years: Jan 2013 to July 2014",workImages:[{src:"./assets/torrey/1.png"},{src:"./assets/torrey/3.jpg"},{src:"./assets/torrey/4.jpg"},{src:"./assets/torrey/5.jpg"},{src:"./assets/torrey/6.jpg"}]},{title:"Research Asistant at ITESM",about:"Worked in a Tele-medicine project building and integrating the IEE 802.15.4 protocol (Zigbee stack) \n        to Android. This to research the medical applications that could exist with medical device sensors \n        connected to smart phones under the Zigbee mesh network.",years:"Years: Jun 2012 to Dec 2012",workImages:[]},{title:"Jr. Tester at Texas Instruments",about:"Test of Andorid applications and Linux OS integrity for the OMAP 4 processors\n         family. Most of my responsibilities were assisting senior testers running\n        processor-software integrity tests. I worked with Linux bash CLI, shell scripting \n        and ptl (TI internal language) to find defects and failures in applications.",years:"Years: Jan 2012 to May 2012",workImages:[]}],projects_carouselHeight:"200px",projects:[{title:"Appliancizer",about:"Appliancizer is an online synthesis tool for circuits which targets\n         embedded processors. Our tool allows automatic generation of PCB layout designs\n        and hardware interfacing code from web programming languages. \n        Compared to previoustools, Appliancizer allows synthesis without requiring \n        adding hardware specifications into the programming language used for hardware \n        description. Therefore, with our tool, existing web program applications can be \n        transformed into electronic devices with minimal effort.",haslink:!0,link:"https://appliancizer.com/",images:[{src:"./assets/appliancizer/2.png"},{src:"./assets/appliancizer/1.png"},{src:"./assets/appliancizer/3.png"}]},{title:"Open Hardware ARTIK530 Carrier Board",about:"An open source carrier board PCB for the Artik 530 System On Module \n        (SOM) designed by me :D. I also designed a battery charger and a sound/mic codec \n        for the carrier board.",haslink:!0,link:"https://github.com/Guardado/OpenSource_ARTIK530_DevelopmentBoard",images:[{src:"./assets/artik/1.jpg"},{src:"./assets/artik/3.jpg"},{src:"./assets/artik/2.jpg"}]},{title:"Linuxduino",about:"Linuxduino is a C++/Javascript library port of the Arduino Programing language for embedded \n        systems running Linux (e.g., Raspberry PI, DragonBoard 410c, even your own Linux Computer). \n        Linuxduino was ported to JavaScript using WebAssembly. Soon comming with\n        a test board (see it at the end of the pics).",haslink:!0,link:"https://nvsl.github.io/Linuxduino/",images:[{src:"./assets/linuxduino/1.png"},{src:"./assets/linuxduino/2.png"},{src:"./assets/linuxduino/3.png"}]},{title:"Full custom design of a 0.5um Integrated Circuit ",about:"Designed a 8-bit Parallel to \n        Serial and Serial to Parallel IC using Electric VLSI CAD and LT Spice for\n        layout simulation and Proteus ISIS for schematic and digital simulation. \n        In the design 14 different gates cells where made with different drive \n        strengths to improve the speed of the IC and optimize the critical paths.",haslink:!1,images:[{src:"./assets/customIC/2.png"},{src:"./assets/customIC/1.png"},{src:"./assets/customIC/3.png"}]}],news:[{about:"Congratulations to my mentees Elsa Taylor, Sachin, and Heather \n        for wining second place in the 2019 Fall quarter IEEE projects! They designed\n        a IoT smart weight scale that measures calories for different products \n        placed on the scale.",image:"./assets/news/mentees.jpg",color:"cyan"},{about:'First place at \n          <a href="https://www.96boards.org/go/san19-community/" target="_blank">\n            SAN19 Linaro Connect Hackaton\n          </a> (Embedded Hackaton).',image:"./assets/news/hackaton.jpg",color:"green"},{about:"Finish my thesis proposal!",color:"pink"}]}},mounted:function(){var t={root:document.querySelector("#app"),rootMargin:"-90px",threshold:0},e=new window.IntersectionObserver(this.onIntersection,t),a=document.querySelector("#cardText");e.observe(a)},methods:{getImgUrl:function(t){return a("4fe4")(t)},onScroll:function(t){var e=t.target.documentElement.scrollTop,a=document.querySelector("#materialCard");e>a.offsetTop?(this.appBarColor="white",this.appBarTheme=!1):e<a.offsetTop&&(this.appBarColor="transparent",this.appBarTheme=!0)}}},o=i,c=(a("fa08"),a("2877")),l=Object(c["a"])(o,s,n,!1,null,"716aae8f",null);e["default"]=l.exports},"3ef7":function(t,e,a){t.exports=a.p+"img/5.c64c8d05.jpg"},"402c":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=a("ce5b"),r=a.n(n);a("bf40");s["default"].use(r.a),e["default"]=new r.a({theme:{themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}})},"40b0":function(t,e,a){t.exports=a.p+"img/cselogo.31a9d1da.gif"},4360:function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=a("2f62");s["default"].use(n["a"]),e["default"]=new n["a"].Store({state:{},mutations:{},actions:{},modules:{}})},"4a82":function(t,e,a){t.exports=a.p+"img/2.c73adde0.jpg"},"4aba":function(t,e,a){t.exports=a.p+"img/3.1eea464e.jpg"},"4ed8":function(t,e,a){t.exports=a.p+"img/JessicaGarza.7cb81843.jpg"},"4fba":function(t,e,a){t.exports=a.p+"img/6.dca067cf.jpg"},"4fe4":function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="4fe4"},5170:function(t,e,a){},"54c4":function(t,e,a){t.exports=a.p+"img/5.d6349d24.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("3dfd"),r=a("a18c"),i=a("4360"),o=a("402c");a("d5e8"),a("5363");s["default"].config.productionTip=!1,new s["default"]({router:r["default"],store:i["default"],vuetify:o["default"],render:function(t){return t(n["default"])}}).$mount("#app")},"598a":function(t,e,a){t.exports=a.p+"img/2.730f1d60.png"},6416:function(t,e,a){t.exports=a.p+"img/profilepic.3b3fb65f.jpg"},6473:function(t,e,a){t.exports=a.p+"img/1.70987d8e.jpg"},"77f5":function(t,e){throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)")},7868:function(t,e,a){t.exports=a.p+"img/3.d8dff732.png"},"86ea":function(t,e,a){t.exports=a.p+"img/2.f522c83e.png"},"981b":function(t,e,a){t.exports=a.p+"img/1.60f4df44.jpg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},"9b64":function(t,e,a){t.exports=a.p+"img/1.c5f539b7.png"},a18c:function(t,e,a){"use strict";a.r(e);a("d3b7");var s=a("2b0e"),n=a("8c4f"),r=a("bb51");s["default"].use(n["a"]);var i=[{path:"/",name:"Home",component:r["default"]},{path:"/about",name:"About",component:function(){return Promise.resolve().then(a.bind(null,"f820"))}}],o=new n["a"]({mode:"history",base:"/",routes:i});e["default"]=o},a397:function(t,e,a){t.exports=a.p+"img/2.61d305aa.png"},b13d:function(t,e,a){},b76f:function(t,e,a){t.exports=a.p+"img/2.1b751ba5.png"},bb51:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("img",{attrs:{alt:"Vue logo",src:a("cf05")}})])}],r={name:"Home"},i=r,o=a("2877"),c=Object(o["a"])(i,s,n,!1,null,null,null);e["default"]=c.exports},bb9c:function(t,e,a){t.exports=a.p+"img/1.ce2f25af.png"},be30:function(t,e,a){t.exports=a.p+"img/3.20f4915b.png"},ccf8:function(t,e,a){t.exports=a.p+"img/1.763888fe.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d6a6:function(t,e,a){t.exports=a.p+"img/1.d32335e5.png"},d868:function(t,e,a){"use strict";var s=a("5170"),n=a.n(s);n.a},dbd6:function(t,e,a){t.exports=a.p+"img/2.40ae5c28.jpg"},dcff:function(t,e,a){t.exports=a.p+"img/mentees.fb21ec7d.jpg"},ded9:function(t,e,a){t.exports=a.p+"img/1.ea447087.png"},dfa8:function(t,e,a){t.exports=a.p+"img/4.1cb564ae.jpg"},f4c4:function(t,e,a){t.exports=a.p+"img/3.8db25cac.jpg"},f645:function(t,e,a){t.exports=a.p+"img/3.49e3601a.png"},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],r=a("2877"),i={},o=Object(r["a"])(i,s,n,!1,null,null,null);e["default"]=o.exports},fa08:function(t,e,a){"use strict";var s=a("b13d"),n=a.n(s);n.a},fbe2:function(t,e,a){t.exports=a.p+"img/3.4bdf93d4.png"}});
//# sourceMappingURL=app.4cab6737.js.map