(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "3d22":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Serial.vue?vue&type=template&id=62aab0d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"flex column",staticStyle:{"align-items":"center"}},[_c('section',[_vm._v("\n        SerialPort: "+_vm._s(_vm.SerialPort)+"\n    ")]),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"list ports"},on:{"click":function($event){return _vm.listPorts()}}}),_c('section',{staticClass:"q-mt-md"},_vm._l((_vm.deviceList),function(device,index){return _c('div',{key:index},[_c('pre',[_vm._v(_vm._s(device))])])}),0)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Serial.vue?vue&type=template&id=62aab0d0&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("4db1");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Serial.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* eslint no-console: ["error", { allow: ["log", "group", "groupEnd", "warn", "error"] }] */
/* harmony default export */ var Serialvue_type_script_lang_js_ = ({
  name: 'SerialList',
  data: function data() {
    return {
      deviceList: [{
        comName: 'dummyResponder'
      }]
    };
  },
  methods: {
    listPorts: function listPorts() {
      var _this = this;

      console.group('listPorts()');

      if (SerialPort) {
        try {
          SerialPort.list().then(function (ports) {
            var _this$deviceList;

            console.log('ports', ports);
            _this.deviceList = [];

            (_this$deviceList = _this.deviceList).push.apply(_this$deviceList, toConsumableArray_default()(ports));
          }, function (err) {
            console.error('serialport.list:', err);
          });
        } catch (e) {
          console.error('SerialPort.list() failed:\n', e);
        }
      } else {
        this.deviceList = [];
        console.log('SerialPort not available.');
      }

      console.groupEnd();
    }
  },
  mounted: function mounted() {
    this.listPorts();
  }
});
// CONCATENATED MODULE: ./src/pages/Serial.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Serialvue_type_script_lang_js_ = (Serialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/pages/Serial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Serialvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Serial = __webpack_exports__["default"] = (component.exports);

/***/ })

}]);
//# sourceMappingURL=6.05e26796.js.map