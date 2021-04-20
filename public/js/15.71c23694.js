(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{f3e7:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"bg-grey-3"},[r("div",{staticClass:"q-pa-md"},[r("q-table",{attrs:{dense:"",title:"Покупатели",data:e.data,columns:e.columns,"row-key":"index",filter:e.filter,loading:e.loading,separator:"cell",pagination:e.pagination,"rows-per-page-options":[0],"pagination-label":function(e,t,r){return e+"-"+t+" из "+r}},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"body-cell-actions",fn:function(t){return[r("q-td",{attrs:{props:t}},[r("q-btn",{attrs:{dense:"",round:"",flat:"",color:"grey",icon:"edit"}}),r("q-btn",{attrs:{dense:"",round:"",flat:"",color:"grey",to:{name:"history-info",params:{id:t.row.id}},icon:"fas fa-info-circle"}}),"Непринято"==t.row.is_received?r("q-btn",{attrs:{dense:"",round:"",flat:"",color:"grey",icon:"delete"},on:{click:function(r){return e.deleteRow(t)}}}):e._e()],1)]}},{key:"top",fn:function(t){return[r("span",{staticClass:"text-h6"},[e._v("История приходов")]),r("q-space"),r("q-input",{staticStyle:{border:"1px solid silver",padding:"0px 5px","border-radius":"5px"},attrs:{borderless:"",dense:"",debounce:"300",color:"primary",placeholder:"Искать"},scopedSlots:e._u([{key:"append",fn:function(){return[r("q-icon",{attrs:{name:"search"}})]},proxy:!0}],null,!0),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),r("q-btn",{staticClass:"q-ml-md",attrs:{flat:"",round:"",dense:"",icon:"fas fa-sync-alt",color:e.rColor,size:"sm"},on:{click:e.refresh}}),r("q-btn",{staticClass:"q-ml-sm",attrs:{flat:"",round:"",dense:"",icon:t.inFullscreen?"fullscreen_exit":"fullscreen"},on:{click:t.toggleFullscreen}})]}}])})],1),r("q-dialog",{model:{value:e.deleteRowVar,callback:function(t){e.deleteRowVar=t},expression:"deleteRowVar"}},[r("q-card",[r("q-card-section",{staticClass:"bg-negative"},[r("div",{staticClass:"text-h6 text-white"},[e._v("Удаление")])]),r("q-separator"),r("q-card-section",{staticClass:"q-pt-none q-pa-lg"},[e._v("\n             - Вы уверены, что хотите удалить историю?\n           ")]),r("q-separator"),r("q-card-actions",{staticClass:"bg-white text-teal",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Нет"}}),r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Да"},on:{click:e.deleteArrival}})],1)],1)],1)],1)},n=[],o=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("c47a")),l=r.n(o),i=r("967e"),s=r.n(i),c=(r("96cf"),r("fa84")),d=r.n(c),u=r("2f62");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={data:function(){return{rColor:"grey",pagination:{rowsPerPage:8,sortBy:"added_at",descending:!0},loading:!1,rowDelete:{},deleteRowVar:!1,filter:"",columns:[{name:"id",align:"center",label:"Идентификатор",field:"id",sortable:!0},{name:"branch_name",align:"center",label:"Филиал",field:"branch_name",sortable:!0},{name:"is_received",align:"center",label:"Получено",field:"is_received",sortable:!0},{name:"added_at",align:"center",label:"Добавлено в",field:"added_at",sortable:!0},{name:"received_at",align:"center",label:"Получено в",field:"received_at",sortable:!0},{name:"actions",label:"Действия",field:"",align:"left"}],data:[]}},watch:{},mounted:function(){var e=this;return d()(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.refresh();case 2:case"end":return t.stop()}}),t)})))()},computed:f({},Object(u["c"])(["getArrivalAll"])),methods:f(f({},Object(u["b"])(["GET_ARRIVAL_ALL","DELETE_ARRIVAL_FROM_HISTORY"])),{},{refresh:function(){var e=this;return d()(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.rColor="blue",e.loading=!0,t.next=4,e.GET_ARRIVAL_ALL();case 4:return t.next=6,e.getArrivalAll;case 6:e.data=t.sent,e.loading=!1,e.rColor="grey";case 9:case"end":return t.stop()}}),t)})))()},deleteRow:function(e){this.rowDelete=e.row,this.deleteRowVar=!this.deleteRowVar},deleteArrival:function(){var e=this;return d()(s.a.mark((function t(){var r;return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.DELETE_ARRIVAL_FROM_HISTORY({arrival_id:e.rowDelete.id});case 2:return r=t.sent,console.log(r),1==r.success?e.$q.notify({message:"Успешно удалено!",color:"green"}):e.$q.notify({message:"Ошибка!",color:"negative"}),e.data=[],t.next=8,e.GET_ARRIVAL_ALL();case 8:e.data=t.sent;case 9:case"end":return t.stop()}}),t)})))()}})},g=b,w=r("2877"),m=Object(w["a"])(g,a,n,!1,null,"4ca7ebe1",null);t["default"]=m.exports}}]);