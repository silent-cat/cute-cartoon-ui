(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{306:function(t,e,o){},311:function(t,e,o){"use strict";o(306)},312:function(t,e,o){"use strict";var n={components:{"c-icon":o(314).a},props:{icon:{},loading:{type:Boolean,default:!1},size:{type:String,default:"medium"},circle:{type:Boolean,default:!1},type:{type:String,default:"primary"},iconPosition:{type:String,default:"left",validator:function(t){return"left"===t||"right"===t}}},data:function(){return{show:!1}}},i=(o(311),o(46)),s=Object(i.a)(n,(function(){var t,e=this,o=e.$createElement,n=e._self._c||o;return n("button",{staticClass:"cube-button",class:(t={},t["cube-button-"+e.size]=!0,t["cube-button-"+e.type]=!0,t["cube-icon-"+e.iconPosition]=!0,t),attrs:{circle:e.circle},on:{click:function(t){return e.$emit("click")}}},[e.icon&&!e.loading?n("c-icon",{staticClass:"icon",attrs:{name:e.icon}}):e._e(),e._v(" "),e.loading?n("c-icon",{staticClass:"cube-icon loading",attrs:{name:"loading"}}):e._e(),e._v(" "),n("div",{staticClass:"cube-content"},[e._t("default")],2)],1)}),[],!1,null,null,null);e.a=s.exports},382:function(t,e,o){},422:function(t,e,o){"use strict";o(382)},434:function(t,e,o){"use strict";o.r(e);o(165);var n={props:{position:{type:String,default:"top",validator:function(t){return["top","bottom","left","right"].indexOf(t)>=-1}},trigger:{type:String,default:"click",validator:function(t){return["click","hover"].indexOf(t)>=-1}}},data:function(){return{visible:!1}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.close))},destroyed:function(){"click"===this.trigger?this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover.removeEventListener("mouseleave",this.close))},computed:{openEvent:function(){return"click"===this.trigger?"click":"mouseenter"},closeEvent:function(){return"click"===this.trigger?"click":"mouseleave"}},methods:{positionContent:function(){var t=this.$refs,e=t.contentWrapper,o=t.triggerWrapper;document.body.appendChild(e);var n=o.getBoundingClientRect(),i=n.width,s=n.height,c=n.top,r=n.left,l=e.getBoundingClientRect().height,p={top:{top:c+window.scrollY,left:r+window.scrollX},bottom:{top:c+s+window.scrollY,left:r+window.scrollX},left:{top:c+window.scrollY+(s-l)/2,left:r+window.scrollX},right:{top:c+window.scrollY+(s-l)/2,left:r+window.scrollX+i}};e.style.left=p[this.position].left+"px",e.style.top=p[this.position].top+"px"},onClickDocument:function(t){this.$refs.popover&&(this.$refs.popover===t.target||this.$refs.popover.contains(t.target))||this.close()},open:function(){var t=this;this.visible=!0,this.$nextTick((function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)}))},close:function(){this.visible=!1,document&&document.removeEventListener("click",this.onClickDocument)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(!0===this.visible?this.close():this.open())}}},i=(o(422),o(46)),s={components:{"c-popover":Object(i.a)(n,(function(){var t,e=this.$createElement,o=this._self._c||e;return o("div",{ref:"popover",staticClass:"cube-popover"},[this.visible?o("div",{ref:"contentWrapper",staticClass:"cube-popover-content-wrapper",class:(t={},t["cube-position-"+this.position]=!0,t)},[this._t("content",null,{close:this.close})],2):this._e(),this._v(" "),o("span",{ref:"triggerWrapper",staticClass:"cube-popover-trigger-wrapper"},[this._t("default")],2)])}),[],!1,null,"d4ad1042",null).exports,"c-button":o(312).a}},c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popover-wrapper"},[o("c-popover",{attrs:{position:"left"}},[o("template",{slot:"content"},[t._v("\n      popover 中的内容\n    ")]),t._v(" "),o("c-button",[t._v("左方")])],2),t._v(" "),o("c-popover",[o("c-button",[t._v("click")]),t._v(" "),o("template",{slot:"content"},[t._v("\n      popover 中的内容\n    ")])],2),t._v(" "),o("c-popover",{attrs:{trigger:"hover"}},[o("template",{slot:"content"},[t._v("\n      popover 中的内容\n    ")]),t._v(" "),o("c-button",[t._v("hover")])],2)],1)}),[],!1,null,"0de85c4c",null);e.default=c.exports}}]);