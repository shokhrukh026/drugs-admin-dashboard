(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"713b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",{staticClass:"bg-green"},[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),n("q-toolbar-title",[n("router-link",{staticClass:"cursor-pointer",attrs:{to:"/main",tag:"div"}},[t._v("\n          UzPos Аналитика\n        ")])],1),n("q-space"),n("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[n("q-btn",{attrs:{round:"",flat:"",to:"/shopping-cart"}},[n("q-icon",{attrs:{name:"shopping_cart"}}),t.cart>0?n("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.cart))]):t._e(),n("q-tooltip",[t._v("Корзина")])],1),n("q-btn",{attrs:{round:"",flat:""}},[n("q-avatar",{attrs:{size:"26px"}},[n("q-icon",{attrs:{name:"fas fa-user-circle"}})],1),n("q-menu",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"}},[n("q-list",{staticStyle:{"min-width":"100px"}},[n("q-item",{attrs:{clickable:"",to:"/branches"}},[n("q-item-section",[t._v("Филиалы")])],1),n("q-separator"),n("q-item",{attrs:{clickable:""}},[n("q-item-section",[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"blue",label:"Выход",push:"",size:"sm",to:"/"},on:{click:t.logout}})],1)],1)],1)],1),n("q-tooltip",[t._v("Пользователь")])],1)],1)],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-green text-white column"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("q-list",[n("router-link",{staticClass:"q-pa-sm cursor-pointer",attrs:{to:"/main",tag:"div"}},[n("q-img",{attrs:{src:r("a522")}})],1),t._l(t.sideBar,(function(e,r){return n("q-item",{key:r,attrs:{to:e.url,"active-class":"q-item-no-link-highlighting"}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(e.title))])],1)],1)}))],2),n("q-space"),n("q-list",[n("q-item",[n("q-item-section",[t._v("\n          Version: 1.0.0\n        ")])],1)],1)],1),n("q-page-container",{staticClass:"bg-grey-2"},[n("router-view",{on:{medicines:t.distributeMedicines}})],1)],1)},a=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),s=r.n(i),c=r("967e"),o=r.n(c),l=(r("96cf"),r("fa84")),u=r.n(l),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-item",{attrs:{clickable:"",to:t.link}},[t.icon?r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{name:t.icon}})],1):t._e(),r("q-item-section",[r("q-item-label",[t._v(t._s(t.title))]),r("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)],1)},f=[],m={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},b=m,d=r("2877"),q=Object(d["a"])(b,p,f,!1,null,null,null),h=q.exports,g=r("2f62");function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"MainLayout",components:{EssentialLink:h},meta:function(){return{title:"UzPos Pharmacy"}},data:function(){return{cart:"0",leftDrawerOpen:!1,sideBar:[{title:"Главная",icon:"dashboard",url:"/main"},{title:"Филиалы",icon:"fas fa-building",url:"/branches"},{title:"Лекарства",icon:"fas fa-box-open",url:"/medicines"},{title:"Возврат",icon:"fas fa-exchange-alt",url:"/return-branches"},{title:"История",icon:"fas fa-history",url:"/history"}]}},watch:{},mounted:function(){var t=this;return u()(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.GET_SHOPPING_CART_MEDICINES();case 2:t.cart=t.getShoppingCartMedicines.length;case 3:case"end":return e.stop()}}),e)})))()},computed:v({},Object(g["c"])(["getShoppingCartMedicines"])),methods:v(v({},Object(g["b"])(["GET_SHOPPING_CART_MEDICINES"])),{},{logout:function(){var t=this;return u()(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("LOGOUT");case 2:case"end":return e.stop()}}),e)})))()},distributeMedicines:function(t){var e=this;return u()(o.a.mark((function r(){return o.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:1==t?e.cart++:0==t?e.cart--:"distribute_all"==t&&(e.cart=0);case 1:case"end":return r.stop()}}),r)})))()}})},_=O,y=Object(d["a"])(_,n,a,!1,null,null,null);e["default"]=y.exports},a522:function(t,e,r){t.exports=r.p+"img/Uzpos_logo_rectangle.1ccd6e86.png"}}]);