(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{33:
/*!*******************************************************************************!*\
  !*** D:/Project/HBuilderProjects/繁星/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \*******************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){t(/*! uni-pages */4);s(t(/*! vue */2));var n=s(t(/*! ./pages/login/login.vue */34));function s(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */1)["createPage"])},34:
/*!************************************************************!*\
  !*** D:/Project/HBuilderProjects/繁星/pages/login/login.vue ***!
  \************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var s=t(/*! ./login.vue?vue&type=template&id=b237504c& */35),o=t(/*! ./login.vue?vue&type=script&lang=js& */37);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);t(/*! ./login.vue?vue&type=style&index=0&lang=css& */39);var r,u=t(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */10),c=Object(u["default"])(o["default"],s["render"],s["staticRenderFns"],!1,null,null,null,!1,s["components"],r);c.options.__file="pages/login/login.vue",n["default"]=c.exports},35:
/*!*******************************************************************************************!*\
  !*** D:/Project/HBuilderProjects/繁星/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,t){"use strict";t.r(n);var s=t(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=template&id=b237504c& */36);t.d(n,"render",(function(){return s["render"]})),t.d(n,"staticRenderFns",(function(){return s["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return s["recyclableRender"]})),t.d(n,"components",(function(){return s["components"]}))},36:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Project/HBuilderProjects/繁星/pages/login/login.vue?vue&type=template&id=b237504c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */function(e,n,t){"use strict";t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return r})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return s}));var s={wLoading:function(){return t.e(/*! import() | components/w-loading/w-loading */"components/w-loading/w-loading").then(t.bind(null,/*! @/components/w-loading/w-loading.vue */49))},uniPopup:function(){return Promise.all(/*! import() | components/uni-popup/uni-popup */[t.e("common/vendor"),t.e("components/uni-popup/uni-popup")]).then(t.bind(null,/*! @/components/uni-popup/uni-popup.vue */56))}},o=function(){var e=this,n=e.$createElement;e._self._c},a=!1,r=[];o._withStripped=!0},37:
/*!*************************************************************************************!*\
  !*** D:/Project/HBuilderProjects/繁星/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var s=t(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=script&lang=js& */38),o=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(n,e,(function(){return s[e]}))}(a);n["default"]=o.a},38:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Project/HBuilderProjects/繁星/pages/login/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=getApp(),s={data:function(){return{useVPN:t.globalData.settings.useVPN,message:"发生了错误"}},methods:{handleSubmit:function(n){var s=this;this.$refs.loading.open();var o=n.detail.value;console.log(o);var a=o.username,r=o.password,u="",c=new Date,i=c.getFullYear(),l=c.getMonth()+1;u=l>=8?"".concat(i,"-").concat(i+1,"-1"):"".concat(i-1,"-").concat(i,"-2"),console.log("开课学期 ".concat(u));var d={username:a,password:r,vpn_username:"",vpn_password:"",xsfs:"",kksj:u};o.semester&&(d.kksj=o.semester);var f=t.globalData.host;if(this.useVPN){var g=o.vpnusername,p=o.vpnpassword;d.vpn_username=g,d.vpn_password=p,f+="/vpn"}else f+="/just";f+="/course";try{e.request({url:f,data:d,method:"GET",success:function(n){console.log(n),s.$refs.loading.close();var o=n.data;200!==o.code?(console.log(o.message),s.message=o.message,s.$refs.message.open()):(e.setStorage({key:"login_key",data:d}),e.setStorage({key:"course_key",data:o.data}),t.globalData.course=o.data,t.globalData.settings.currentSemester=d.kksj,t.globalData.settings.scoreQuerySemester=d.kksj,e.setStorage({key:"settings_key",data:t.globalData.settings}),console.log("login success"),e.switchTab({url:"../index/index"}))},fail:function(e){s.$refs.loading.close(),s.message="发生了错误",s.$refs.message.open()}})}catch(n){console.log(n),this.$refs.loading.close(),this.message="发生了错误",this.$refs.message.open()}}}};n.default=s}).call(this,t(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */1)["default"])},39:
/*!*********************************************************************************************!*\
  !*** D:/Project/HBuilderProjects/繁星/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */function(e,n,t){"use strict";t.r(n);var s=t(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./login.vue?vue&type=style&index=0&lang=css& */40),o=t.n(s);for(var a in s)"default"!==a&&function(e){t.d(n,e,(function(){return s[e]}))}(a);n["default"]=o.a},40:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/Project/HBuilderProjects/繁星/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,t){}},[[33,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovUHJvamVjdC9IQnVpbGRlclByb2plY3RzL+e5geaYny9wYWdlcy9sb2dpbi9sb2dpbi52dWU/ZDI5NCIsIndlYnBhY2s6Ly8vRDovUHJvamVjdC9IQnVpbGRlclByb2plY3RzL+e5geaYny9wYWdlcy9sb2dpbi9sb2dpbi52dWU/Y2JkYiIsIndlYnBhY2s6Ly8vRDovUHJvamVjdC9IQnVpbGRlclByb2plY3RzL+e5geaYny9wYWdlcy9sb2dpbi9sb2dpbi52dWU/NDc0NiIsIndlYnBhY2s6Ly8vRDovUHJvamVjdC9IQnVpbGRlclByb2plY3RzL+e5geaYny9wYWdlcy9sb2dpbi9sb2dpbi52dWU/NmNhMSIsInVuaS1hcHA6Ly8vcGFnZXMvbG9naW4vbG9naW4udnVlIiwid2VicGFjazovLy9EOi9Qcm9qZWN0L0hCdWlsZGVyUHJvamVjdHMv57mB5pifL3BhZ2VzL2xvZ2luL2xvZ2luLnZ1ZT85YmEwIl0sIm5hbWVzIjpbImNyZWF0ZVBhZ2UiLCJQYWdlIiwicmVuZGVyanMiLCJjb21wb25lbnQiLCJvcHRpb25zIiwiX19maWxlIiwiY29tcG9uZW50cyIsIndMb2FkaW5nIiwidW5pUG9wdXAiLCJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9zZWxmIiwiX2MiLCJyZWN5Y2xhYmxlUmVuZGVyIiwic3RhdGljUmVuZGVyRm5zIiwiX3dpdGhTdHJpcHBlZCJdLCJtYXBwaW5ncyI6Ijs7Ozt3RUFBQSxxQkFDQSxzQkFDQSx5QyxtREFDQUEsRUFBV0MsYTs7OzsyRENIWCxxUUFDSUMsRUFESixpSEFTSUMsRUFBWSxxQkFDZCxhQUNBLFlBQ0Esc0JBQ0EsRUFDQSxLQUNBLEtBQ0EsTUFDQSxFQUNBLGdCQUNBRCxHQUdGQyxFQUFVQyxRQUFRQyxPQUFTLHdCQUNaLGFBQUFGLEU7Ozs7MkdDdkJmLGl6Qjs7OzsyR0NBQSw4TEFBSUcsRUFBYSxDQUNmQyxTQUFVLFdBQ1IsT0FBTyx3SkFJVEMsU0FBVSxXQUNSLE9BQU8sNkxBS1BDLEVBQVMsV0FDWCxJQUFJQyxFQUFNQyxLQUNOQyxFQUFLRixFQUFJRyxlQUNKSCxFQUFJSSxNQUFNQyxJQUVqQkMsR0FBbUIsRUFDbkJDLEVBQWtCLEdBQ3RCUixFQUFPUyxlQUFnQixHOzs7OzJEQ25CdkIscWVBQXF3QixlQUFHLEc7Ozs7MElDcUJ4d0IsZSxFQUNBLENBQ0EsS0FEQSxXQUVBLE9BQ0Esb0NBQ0Esa0JBR0EsU0FDQSxhQURBLFNBQ0EsY0FFQSwwQkFDQSxxQkFDQSxlQUNBLGlCQUNBLGFBQ0EsS0FDQSxXQUNBLGtCQUNBLGlCQUVBLEVBREEsS0FDQSxrQ0FFQSxrQ0FFQSwrQkFDQSxPQUNBLFdBQ0EsV0FDQSxnQkFDQSxnQkFDQSxRQUNBLFFBRUEsYUFDQSxtQkFFQSx3QkFDQSxnQkFDQSxvQkFDQSxnQkFDQSxpQkFDQSxpQkFDQSxlQUVBLFdBRUEsYUFDQSxJQUNBLFdBQ0EsTUFDQSxPQUNBLGFBQ0Esb0JBQ0EsZUFDQSx3QkFDQSxhQUNBLGNBQ0EsdUJBQ0Esb0JBQ0EseUJBRUEsY0FDQSxnQkFDQSxTQUVBLGNBQ0EsaUJBQ0EsY0FFQSwyQkFDQSw2Q0FDQSxnREFDQSxjQUNBLG1CQUNBLDZCQUVBLDZCQUNBLGFBQ0EseUJBSUEsaUJBQ0Esd0JBQ0Esa0JBQ0EsMEJBR0EsU0FDQSxlQUNBLDJCQUNBLHFCQUNBLDhCOzs7OzJEQ2xIQSwwcUJBQW1sQyxlQUFHLEciLCJmaWxlIjoicGFnZXMvbG9naW4vbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvbG9naW4vbG9naW4udnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIyMzc1MDRjJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvbG9naW4vbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHRlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTE2LTAhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcdGVtcGxhdGUuanMhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXVuaS1hcHAtbG9hZGVyXFxcXHBhZ2UtbWV0YS5qcyFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9sb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjIzNzUwNGMmXCIiLCJ2YXIgY29tcG9uZW50cyA9IHtcbiAgd0xvYWRpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImNvbXBvbmVudHMvdy1sb2FkaW5nL3ctbG9hZGluZ1wiICovIFwiQC9jb21wb25lbnRzL3ctbG9hZGluZy93LWxvYWRpbmcudnVlXCJcbiAgICApXG4gIH0sXG4gIHVuaVBvcHVwOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJjb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXBcIiAqLyBcIkAvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZVwiXG4gICAgKVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGJhYmVsLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanMhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTEyLTEhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc2NyaXB0LmpzIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8Zm9ybSBAc3VibWl0PVwiaGFuZGxlU3VibWl0XCI+XHJcblx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIuaVmeWKoeezu+e7n+i0puWPt1wiIG5hbWU9XCJ1c2VybmFtZVwiIGNsYXNzPVwidXNlcm5hbWVcIj48L2lucHV0PlxyXG5cdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCLmlZnliqHns7vnu5/lr4bnoIFcIiBuYW1lPVwicGFzc3dvcmRcIiBwYXNzd29yZCBjbGFzcz1cInBhc3N3b3JkXCI+PC9pbnB1dD5cclxuXHRcdFx0PGlucHV0IHYtaWY9XCJ1c2VWUE5cIiBuYW1lPVwidnBudXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIuagoeWbree9kei0puWPt1wiIGNsYXNzPVwidnBuLXVzZXJuYW1lXCI+PC9pbnB1dD5cclxuXHRcdFx0PGlucHV0IHYtaWY9XCJ1c2VWUE5cIiBuYW1lPVwidnBucGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIuagoeWbree9keWvhueggVwiIHBhc3N3b3JkIGNsYXNzPVwidnBuLXBhc3N3b3JkXCI+PC9pbnB1dD5cclxuXHRcdFx0PGlucHV0IG5hbWU9XCJzZW1lc3RlclwiIHBsYWNlaG9sZGVyPVwi5a2m5pyfKOmdnuW/hemhuyDmoLzlvI8gMjAxOS0yMDIwLTEpXCIgLz5cclxuXHRcdFx0PGJ1dHRvbiBmb3JtLXR5cGU9XCJzdWJtaXRcIiB0eXBlPVwicHJpbWFyeVwiPumqjOivgTwvYnV0dG9uPlxyXG5cdFx0PC9mb3JtPlxyXG5cdFx0PHctbG9hZGluZyBjbGljaz1cImZhbHNlXCIgcmVmPVwibG9hZGluZ1wiPjwvdy1sb2FkaW5nPlxyXG5cdFx0PHVuaS1wb3B1cCB0eXBlPVwidG9wXCIgcmVmPVwibWVzc2FnZVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1lc3NhZ2VcIj5cclxuXHRcdFx0XHR7e21lc3NhZ2V9fVxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3VuaS1wb3B1cD5cclxuXHRcdDx0ZXh0IGNsYXNzPVwiY29weS1yaWdodFwiPkNvcHlyaWdodCDCqSAyMDIxIG1kcmVhbWZldmVyLCBhbGwgcmlnaHRzIHJlc2VydmVkLjwvdGV4dD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IGFwcCA9IGdldEFwcCgpXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR1c2VWUE46IGFwcC5nbG9iYWxEYXRhLnNldHRpbmdzLnVzZVZQTixcclxuXHRcdFx0XHRtZXNzYWdlOiBcIuWPkeeUn+S6humUmeivr1wiLFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRoYW5kbGVTdWJtaXQoZSkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0dGhpcy4kcmVmcy5sb2FkaW5nLm9wZW4oKVxyXG5cdFx0XHRcdGxldCB2YWx1ZSA9IGUuZGV0YWlsLnZhbHVlXHJcblx0XHRcdFx0Y29uc29sZS5sb2codmFsdWUpXHJcblx0XHRcdFx0bGV0IHVzZXJuYW1lID0gdmFsdWUudXNlcm5hbWVcclxuXHRcdFx0XHRsZXQgcGFzc293cmQgPSB2YWx1ZS5wYXNzd29yZFxyXG5cdFx0XHRcdGxldCBra3NqID0gXCJcIlxyXG5cdFx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoKVxyXG5cdFx0XHRcdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcblx0XHRcdFx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG5cdFx0XHRcdGlmIChtb250aCA+PSA4KSB7XHJcblx0XHRcdFx0XHRra3NqID0gYCR7eWVhcn0tJHt5ZWFyKzF9LTFgXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGtrc2ogPSBgJHt5ZWFyLTF9LSR7eWVhcn0tMmBcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coYOW8gOivvuWtpuacnyAke2trc2p9YClcclxuXHRcdFx0XHRsZXQgbG9naW5EYXRhID0ge1xyXG5cdFx0XHRcdFx0XCJ1c2VybmFtZVwiOiB1c2VybmFtZSxcclxuXHRcdFx0XHRcdFwicGFzc3dvcmRcIjogcGFzc293cmQsXHJcblx0XHRcdFx0XHRcInZwbl91c2VybmFtZVwiOiBcIlwiLFxyXG5cdFx0XHRcdFx0XCJ2cG5fcGFzc3dvcmRcIjogXCJcIixcclxuXHRcdFx0XHRcdFwieHNmc1wiOiBcIlwiLFxyXG5cdFx0XHRcdFx0XCJra3NqXCI6IGtrc2pcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHZhbHVlLnNlbWVzdGVyKSB7XHJcblx0XHRcdFx0XHRsb2dpbkRhdGEua2tzaiA9IHZhbHVlLnNlbWVzdGVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCB1cmwgPSBhcHAuZ2xvYmFsRGF0YS5ob3N0XHJcblx0XHRcdFx0aWYgKHRoaXMudXNlVlBOKSB7XHJcblx0XHRcdFx0XHRsZXQgdnBudXNlcm5hbWUgPSB2YWx1ZS52cG51c2VybmFtZVxyXG5cdFx0XHRcdFx0bGV0IHZwbnBhc3N3b3JkID0gdmFsdWUudnBucGFzc3dvcmRcclxuXHRcdFx0XHRcdGxvZ2luRGF0YS52cG5fdXNlcm5hbWUgPSB2cG51c2VybmFtZVxyXG5cdFx0XHRcdFx0bG9naW5EYXRhLnZwbl9wYXNzd29yZCA9IHZwbnBhc3N3b3JkXHJcblx0XHRcdFx0XHR1cmwgKz0gXCIvdnBuXCJcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsICs9IFwiL2p1c3RcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1cmwgKz0gXCIvY291cnNlXCJcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHRcdFx0XHR1cmw6IHVybCxcclxuXHRcdFx0XHRcdFx0ZGF0YTogbG9naW5EYXRhLFxyXG5cdFx0XHRcdFx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHRcdFx0dGhpcy4kcmVmcy5sb2FkaW5nLmNsb3NlKClcclxuXHRcdFx0XHRcdFx0XHRsZXQgcmVzcG9uc2UgPSByZXMuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXNwb25zZS5jb2RlICE9PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlLm1lc3NhZ2UpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm1lc3NhZ2UgPSByZXNwb25zZS5tZXNzYWdlXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiRyZWZzLm1lc3NhZ2Uub3BlbigpXHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5OiBcImxvZ2luX2tleVwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiBsb2dpbkRhdGFcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleTogXCJjb3Vyc2Vfa2V5XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0YXBwLmdsb2JhbERhdGEuY291cnNlID0gcmVzcG9uc2UuZGF0YVxyXG5cdFx0XHRcdFx0XHRcdFx0YXBwLmdsb2JhbERhdGEuc2V0dGluZ3MuY3VycmVudFNlbWVzdGVyID0gbG9naW5EYXRhLmtrc2pcclxuXHRcdFx0XHRcdFx0XHRcdGFwcC5nbG9iYWxEYXRhLnNldHRpbmdzLnNjb3JlUXVlcnlTZW1lc3RlciA9IGxvZ2luRGF0YS5ra3NqXHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleTogXCJzZXR0aW5nc19rZXlcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YTogYXBwLmdsb2JhbERhdGEuc2V0dGluZ3NcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcImxvZ2luIHN1Y2Nlc3NcIilcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmw6IFwiLi4vaW5kZXgvaW5kZXhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGZhaWw6IChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRyZWZzLmxvYWRpbmcuY2xvc2UoKVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMubWVzc2FnZSA9IFwi5Y+R55Sf5LqG6ZSZ6K+vXCJcclxuXHRcdFx0XHRcdFx0XHR0aGlzLiRyZWZzLm1lc3NhZ2Uub3BlbigpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRcdHRoaXMuJHJlZnMubG9hZGluZy5jbG9zZSgpXHJcblx0XHRcdFx0XHR0aGlzLm1lc3NhZ2UgPSBcIuWPkeeUn+S6humUmeivr1wiXHJcblx0XHRcdFx0XHR0aGlzLiRyZWZzLm1lc3NhZ2Uub3BlbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHRpbnB1dCB7XHJcblx0XHRtYXJnaW46IDIwcnB4O1xyXG5cdFx0cGFkZGluZzogMjBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBycHg7XHJcblx0XHRmb250LXNpemU6IC44ZW07XHJcblx0fVxyXG5cclxuXHRidXR0b24ge1xyXG5cdFx0bWFyZ2luOiAyMHJweDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tNi1vbmVPZi0xLTEhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXFxcXGRpc3RcXFxcbG9hZGVyLmpzPz9yZWYtLTYtb25lT2YtMS0wIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXGNzcy1sb2FkZXJcXFxcZGlzdFxcXFxjanMuanM/P3JlZi0tNi1vbmVPZi0xLTEhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxsb2FkZXJzXFxcXHN0eWxlUG9zdExvYWRlci5qcyFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTIhQzpcXFxcVXNlcnNcXFxcZHJlYW1mZXZlclxcXFxEb3dubG9hZHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxccG9zdGNzcy1sb2FkZXJcXFxcc3JjXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0zIUM6XFxcXFVzZXJzXFxcXGRyZWFtZmV2ZXJcXFxcRG93bmxvYWRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyFDOlxcXFxVc2Vyc1xcXFxkcmVhbWZldmVyXFxcXERvd25sb2Fkc1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzdHlsZS5qcyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==