(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{306:function(t,n,c){},311:function(t,n,c){"use strict";c(306)},312:function(t,n,c){"use strict";var e={components:{"c-icon":c(314).a},props:{icon:{},loading:{type:Boolean,default:!1},size:{type:String,default:"medium"},circle:{type:Boolean,default:!1},type:{type:String,default:"primary"},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}},data:function(){return{show:!1}}},i=(c(311),c(46)),o=Object(i.a)(e,(function(){var t,n=this,c=n.$createElement,e=n._self._c||c;return e("button",{staticClass:"cube-button",class:(t={},t["cube-button-"+n.size]=!0,t["cube-button-"+n.type]=!0,t["cube-icon-"+n.iconPosition]=!0,t),attrs:{circle:n.circle},on:{click:function(t){return n.$emit("click")}}},[n.icon&&!n.loading?e("c-icon",{staticClass:"icon",attrs:{name:n.icon}}):n._e(),n._v(" "),n.loading?e("c-icon",{staticClass:"cube-icon loading",attrs:{name:"loading"}}):n._e(),n._v(" "),e("div",{staticClass:"cube-content"},[n._t("default")],2)],1)}),[],!1,null,null,null);n.a=o.exports},437:function(t,n,c){"use strict";c.r(n);var e={components:{"c-button":c(312).a},methods:{clickEvent:function(){alert("触发按钮的点击事件")}},data:function(){return{}}},i=c(46),o=Object(i.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("c-button",{on:{click:this.clickEvent}},[this._v("点击")])],1)}),[],!1,null,null,null);n.default=o.exports}}]);