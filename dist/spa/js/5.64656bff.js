(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"3d22":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"flex column",staticStyle:{"align-items":"center"}},[i("section",[e._v("\n        SerialPort: "+e._s(e.SerialPort)+"\n    ")]),i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"list ports"},on:{click:function(t){return e.listPorts()}}}),i("section",{staticClass:"q-mt-md"},e._l(e.deviceList,(function(t,s){return i("div",{key:s},[i("pre",[e._v(e._s(t))])])})),0)],1)},r=[],o=(i("ddb0"),{name:"SerialList",data(){return{deviceList:[{comName:"dummyResponder"}]}},methods:{listPorts(){if(console.group("listPorts()"),SerialPort)try{SerialPort.list().then((e=>{console.log("ports",e),this.deviceList=[],this.deviceList.push(...e)}),(e=>{console.error("serialport.list:",e)}))}catch(e){console.error("SerialPort.list() failed:\n",e)}else this.deviceList=[],console.log("SerialPort not available.");console.groupEnd()}},mounted:function(){this.listPorts()}}),l=o,n=i("2877"),a=i("9989"),c=i("9c40"),d=i("714f"),p=i("eebe"),u=i.n(p),m=Object(n["a"])(l,s,r,!1,null,null,null);t["default"]=m.exports;u()(m,"components",{QPage:a["a"],QBtn:c["a"]}),u()(m,"directives",{Ripple:d["a"]})}}]);