/*!
 * Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Autocomplete @ Version 0.0.3,
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Vue2Autocomplete=e():t.Vue2Autocomplete=e()}(this,function(){return function(t){function e(n){if(s[n])return s[n].exports;var o=s[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var s={};return e.m=t,e.c=s,e.p="../dist/",e(0)}([function(t,e,s){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=s(2),i=n(o);t.exports=i.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
	* Licensed Under MIT (http://opensource.org/licenses/MIT)
	*
	* Vue 2 Autocomplete @ Version 0.0.1
	*
	*/
/*!
	*  javascript-debounce 1.0.0
	*
	*  A lightweight, dependency-free JavaScript module for debouncing functions based on David Walsh's debounce function.
	*
	*  Source code available at: https://github.com/jgarber623/javascript-debounce
	*
	*  (c) 2015-present Jason Garber (http://sixtwothree.org)
	*
	*  javascript-debounce may be freely distributed under the MIT license.
	*/
var s=function(t,e){var s;return function(){var n=this,o=arguments;clearTimeout(s),s=setTimeout(function(){t.apply(n,o)},e)}};e.default={props:{id:String,className:String,placeholder:String,initValue:{type:String,default:""},anchor:{type:String,required:!0},label:String,debounce:Number,url:{type:String,required:!0},param:{type:String,default:"q"},customParams:Object,min:{type:Number,default:0},process:Function,onInput:Function,onShow:Function,onBlur:Function,onHide:Function,onFocus:Function,onSelect:Function,onBeforeAjax:Function,onAjaxProgress:Function,onAjaxLoaded:Function},data:function(){return{showList:!1,type:"",json:[],focusList:""}},methods:{clearInput:function(){this.showList=!1,this.type="",this.json=[],this.focusList=""},cleanUp:function(t){return JSON.parse(JSON.stringify(t))},input:function(t){this.showList=!0,this.onInput?this.onInput(t):null,this.debouncedGetData&&this.debounce===this.oldDebounce||(this.oldDebounce=this.debounce,this.debouncedGetData=this.debounce?s(this.getData.bind(this),this.debounce):this.getData),this.debouncedGetData(t)},showAll:function(){this.json=[],this.getData(""),this.onShow?this.onShow():null,this.showList=!0},hideAll:function(t){var e=this;this.onBlur?this.onBlur(t):null,setTimeout(function(){e.onHide?e.onHide():null,e.showList=!1},250)},focus:function(t){this.focusList=0,this.onFocus?this.onFocus(t):null},mousemove:function(t){this.focusList=t},keydown:function(t){var e=t.keyCode;if(this.showList){switch(e){case 40:this.focusList++,t.preventDefault();break;case 38:this.focusList--,t.preventDefault();break;case 13:this.selectList(this.json[this.focusList]),this.showList=!1,console.log("happenign"),t.preventDefault();break;case 27:this.showList=!1,t.preventDefault()}var s=this.json.length-1;this.focusList=this.focusList>s?0:this.focusList<0?s:this.focusList}},activeClass:function(t){return{"focus-list":t==this.focusList}},selectList:function(t){var e=this.cleanUp(t);this.type=e[this.anchor],this.showList=!1,this.onSelect?this.onSelect(e):null},getData:function(t){var e=this,s=this;if(!(t.length<this.min)&&null!=this.url){this.onBeforeAjax?this.onBeforeAjax(t):null;var n=new XMLHttpRequest,o="";this.customParams&&Object.keys(this.customParams).forEach(function(t){o+="&"+t+"="+e.customParams[t]}),n.open("GET",this.url+"?"+this.param+"="+t+o,!0),n.send(),n.addEventListener("progress",function(t){t.lengthComputable&&(this.onAjaxProgress?this.onAjaxProgress(t):null)}),n.addEventListener("loadend",function(t){var e=JSON.parse(this.responseText);this.onAjaxLoaded?this.onAjaxLoaded(e):null,s.json=s.process?s.process(e):e})}},setValue:function(t){this.type=t}},created:function(){this.type=this.initValue?this.initValue:null}}},function(t,e,s){var n=s(3)(s(1),s(4),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,s,n){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),s&&(a._scopeId=s),n){var c=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}})}return{esModule:o,exports:i,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:(t.className?t.className+"-wrapper ":"")+"autocomplete-wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],class:(t.className?t.className+"-input ":"")+"autocomplete-input",attrs:{type:"text",id:t.id,placeholder:t.placeholder,autocomplete:"off"},domProps:{value:t._s(t.type)},on:{input:[function(e){e.target.composing||(t.type=e.target.value)},function(e){t.input(t.type)}],dblclick:t.showAll,blur:t.hideAll,keydown:t.keydown,focus:t.focus}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],class:(t.className?t.className+"-list ":"")+"autocomplete transition autocomplete-list"},[s("ul",t._l(t.json,function(e,n){return s("li",{class:t.activeClass(n),attrs:{transition:"showAll"}},[s("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.selectList(e)},mousemove:function(e){t.mousemove(n)}}},[s("b",{staticClass:"autocomplete-anchor-text"},[t._v(t._s(e[t.anchor]))]),t._v(" "),s("span",{staticClass:"autocomplete-anchor-label"},[t._v(t._s(e[t.label]))])])])}))])])},staticRenderFns:[]}}])});