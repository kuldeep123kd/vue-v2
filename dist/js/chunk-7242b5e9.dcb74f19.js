(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7242b5e9"],{"95c9":function(t,e,s){},c99c:function(t,e,s){"use strict";s("95c9")},ee4b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticClass:"color-red"},[t._v("New page")]),s("h1",[t._v(t._s(t.$route.query.plan))]),s("button",{staticClass:"btn btn-primary",on:{click:t.replaceRoute}},[t._v(" Replace Route ")]),s("button",{staticClass:"btn btn-success",on:{click:t.goBack}},[t._v(" Go Back ")]),s("button",{staticClass:"btn btn-danger",on:{click:t.goFroward}},[t._v(" Go Forward ")]),s("div",{staticClass:"container"},[s("div",{staticClass:"row mt-5"},t._l(t.user_data,(function(e,a){return s("div",{key:a,staticClass:"col-lg-12 mb-3"},[s("div",{staticClass:"d-flex align-items-center ms-auto me-auto",staticStyle:{"max-width":"300px"}},[s("div",{staticClass:"image"},[s("img",{staticStyle:{"border-radius":"50%"},attrs:{src:e.avatar,alt:"images",width:"50",height:"50"}})]),s("div",{staticClass:"ms-2"},[s("h1",{staticClass:"heading-name"},[t._v(" "+t._s(e.first_name)+" "+t._s(e.last_name)+" ")]),s("h1",{staticClass:"heading-email mb-0"},[t._v(" "+t._s(e.email)+" ")])])])])})),0)])])},n=[],r=s("1da1"),c=(s("96cf"),s("1b77")),o={mixins:[c["a"]],data:function(){return{}},methods:{getUsersData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.fetchUsersData();case 3:s=e.sent,console.log(s),a=s.data,console.log(a),t.$store.commit("usersData",a),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),t.$store.commit("errorMessage",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},replaceRoute:function(){this.$router.push({path:"/",replace:!0})},goBack:function(){this.$router.go(-1)},goFroward:function(){this.$router.go(1)}},computed:{user_data:function(){return this.$store.getters.getUsersData}},mounted:function(){var t=this;this.getUsersData(),setTimeout((function(){console.log(t.user_data)}),1e3),console.log(this.$route.hash)}},i=o,u=(s("c99c"),s("2877")),l=Object(u["a"])(i,a,n,!1,null,"290b3591",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7242b5e9.dcb74f19.js.map