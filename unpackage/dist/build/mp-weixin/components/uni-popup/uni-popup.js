(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-popup/uni-popup"],{"0b1c":function(t,n,i){},5864:function(t,n,i){"use strict";var o=i("0b1c"),e=i.n(o);e.a},"6b2c":function(t,n,i){"use strict";i.r(n);var o=i("cd81"),e=i("cf05");for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);i("5864");var u,c=i("f0c5"),a=Object(c["a"])(e["default"],o["b"],o["c"],!1,null,"21dec862",null,!1,o["a"],u);n["default"]=a.exports},c11c:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e(i("4340"));function e(t){return t&&t.__esModule?t:{default:t}}var s=function(){i.e("components/uni-transition/uni-transition").then(function(){return resolve(i("1049"))}.bind(null,i)).catch(i.oe)},u={name:"UniPopup",components:{uniTransition:s},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},provide:function(){return{popup:this}},mixins:[o.default],watch:{type:{handler:function(t){this[this.config[t]]()},immediate:!0},maskClick:function(t){this.mkclick=t}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:"top"}},created:function(){this.mkclick=this.maskClick,this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick((function(){new Promise((function(n){clearTimeout(t.timer),t.timer=setTimeout((function(){t.showTrans=!0,t.$nextTick((function(){n()}))}),50)})).then((function(n){clearTimeout(t.msgtimer),t.msgtimer=setTimeout((function(){t.customOpen&&t.customOpen()}),100),t.$emit("change",{show:!0,type:t.type})}))}))},close:function(t){var n=this;this.showTrans=!1,this.$nextTick((function(){n.$emit("change",{show:!1,type:n.type}),clearTimeout(n.timer),n.customOpen&&n.customClose(),n.timer=setTimeout((function(){n.showPopup=!1}),300)}))},onTap:function(){this.mkclick&&this.close()},top:function(){this.popupstyle="top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0}},bottom:function(){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0}},center:function(){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"}}}};n.default=u},cd81:function(t,n,i){"use strict";var o={uniTransition:function(){return i.e("components/uni-transition/uni-transition").then(i.bind(null,"1049"))}},e=function(){var t=this,n=t.$createElement;t._self._c},s=[];i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return o}))},cf05:function(t,n,i){"use strict";i.r(n);var o=i("c11c"),e=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(n,t,(function(){return o[t]}))}(s);n["default"]=e.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-popup/uni-popup-create-component',
    {
        'components/uni-popup/uni-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6b2c"))
        })
    },
    [['components/uni-popup/uni-popup-create-component']]
]);
