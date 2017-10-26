/******/ module.exports = (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description 通用样式表（自带基础栅栏和bs分栏布局，类名和bs一样）此包为AMD模式 不能接受的请单独导包
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {object} option 默认内部样式和脚本都不启用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option.cdnOfficial] 是否使用官方CDN 默认尽量使用国内CDN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option.fontawesome||option.fa] 是否启用fontawesome
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {object} [option.iconfont||option.if] 是否启用iconfont
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {string} [option.iconfont.font||option.if.font] iconfont 字体图标 url
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {string} [option.iconfont.svg||option.if.svg] iconfont svg url
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option.bs||option.bootstrap] 是否启用bootstrap 默认不启用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option.bsJs||option.bootstrapJs] 是否启用bootstrap的插件脚本 默认不启用 依赖jquery
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var plugin = function () {
    function plugin(props) {
        _classCallCheck(this, plugin);

        this.option = props;
        this.init();
    }

    /**
     * @description 初始化方法
     */


    _createClass(plugin, [{
        key: 'init',
        value: function init() {
            //参数合理性判断
            var allowParams = new Set(['all', 'fontawesome', 'fa', 'iconfont', 'if', 'bootstrap', 'bs', 'bootstrapJs', 'bsJs']);
            var userParams = new Set();
            for (var i in this.option) {
                userParams.add(i);
            }
            var difference = new Set([].concat(_toConsumableArray(userParams)).filter(function (x) {
                return !allowParams.has(x);
            })); //计算用户的参数和允许参数的差集
            if (difference.size > 0) {
                //有未定的参数键值对
                console.warn('\'' + Array.from(difference) + '\' are not allowed , param \'option\' can only accept these configuration : \'' + Array.from(allowParams) + '\' -- yu-scss');
            }
            //fontawesome
            if (this.option.fontawesome || this.option.fa) {
                if (this.option.cdnOfficial) {
                    var scriptFa = document.createElement('script');
                    scriptFa.setAttribute("type", "text/javascript");
                    scriptFa.setAttribute("src", 'https://use.fontawesome.com/1cda83aa79.js');
                    document.getElementsByTagName("head")[0].appendChild(scriptFa);
                } else {
                    var styleFa = document.createElement('link');
                    styleFa.setAttribute("rel", "stylesheet");
                    styleFa.setAttribute("href", 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
                    document.getElementsByTagName("head")[0].appendChild(styleFa);
                }
            }
            //iconfont
            if (this.option.iconfont || this.option.if) {
                //font
                if (this.option.iconfont.font || this.option.if.font) {
                    var url = this.option.iconfont.font || this.option.if.font;
                    var styleIf = document.createElement('link');
                    styleIf.setAttribute("rel", "stylesheet");
                    styleIf.setAttribute("href", url);
                    document.getElementsByTagName("head")[0].appendChild(styleIf);
                } else {
                    console.warn('lose option.iconfont(if).font -- yu-scss');
                }
                //svg
                if (this.option.iconfont.svg || this.option.if.svg) {
                    var _url = this.option.iconfont.svg || this.option.if.svg;
                    var scriptIf = document.createElement('script');
                    scriptIf.setAttribute("type", "text/javascript");
                    scriptIf.setAttribute("src", _url);
                    document.getElementsByTagName("head")[0].appendChild(scriptIf);
                } else {
                    console.warn('lose option.iconfont(if).svg -- yu-scss');
                }
            }
            //bootstrap
            if (this.option.bootstrap || this.option.bs) {
                var styleBs = document.createElement('link');
                styleBs.setAttribute("rel", "stylesheet");
                styleBs.setAttribute("href", 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css');
                styleBs.setAttribute("integrity", 'sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u');
                styleBs.setAttribute("crossorigin", 'anonymous');
                document.getElementsByTagName("head")[0].appendChild(styleBs);
            }
            if (this.option.bootstrapJs || this.option.bsJs) {
                console.warn('\u6682\u4E0D\u652F\u6301\u5BFC\u5165bootstrap\u811A\u672C\uFF0C\u56E0\u4E3A\u5176\u6709\u4F9D\u8D56\u4E8Ejquery,\u8BF7\u5220\u9664\u76F8\u5173\u914D\u7F6E\u9879\u3002');
            }
        }
    }]);

    return plugin;
}();

exports.default = plugin;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_postcss-loader@2.0.8@postcss-loader/lib/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./plugin.scss", function() {
			var newContent = require("!!../../node_modules/_css-loader@0.28.7@css-loader/index.js!../../node_modules/_postcss-loader@2.0.8@postcss-loader/lib/index.js!../../node_modules/_sass-loader@6.0.6@sass-loader/lib/loader.js!./plugin.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers (opinionated).\n */\nbody {\n  margin: 0; }\n\n/**\n * Add the correct display in IE 9-.\n */\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\nfigcaption,\nfigure,\nmain {\n  /* 1 */\n  display: block; }\n\n/**\n * Add the correct margin in IE 8.\n */\nfigure {\n  margin: 1em 40px; }\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\na {\n  background-color: transparent;\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n  /* 2 */ }\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\nb,\nstrong {\n  font-weight: inherit; }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font style in Android 4.3-.\n */\ndfn {\n  font-style: italic; }\n\n/**\n * Add the correct background and color in IE 9-.\n */\nmark {\n  background-color: #ff0;\n  color: #000; }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\naudio,\nvideo {\n  display: inline-block; }\n\n/**\n * Add the correct display in iOS 4-7.\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\nimg {\n  border-style: none; }\n\n/**\n * Hide the overflow in IE.\n */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */ }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\ndetails,\nmenu {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Scripting\n   ========================================================================== */\n/**\n * Add the correct display in IE 9-.\n */\ncanvas {\n  display: inline-block; }\n\n/**\n * Add the correct display in IE.\n */\ntemplate {\n  display: none; }\n\n/* Hidden\n   ========================================================================== */\n/**\n * Add the correct display in IE 10-.\n */\n[hidden] {\n  display: none; }\n\n/*reset css*/\n/*-----------------------------------------------------------------------------------\n\n\tCss Name: yu-scss\n\tDescription: watanabeyu's style sheet\n\tAuthor: WatanabeYu\n\n----------------------------------------------------------------------*/\n/* ----------------------------------------------------------------\n\tlibflexible\n-----------------------------------------------------------------*/\n/* ----------------------------------------------------------------\n\t参数\n-----------------------------------------------------------------*/\n/*定义色彩 LV越小(越高) 颜色越正*/\n/*下边距*/\n.mb-5 {\n  margin-bottom: 5px; }\n\n.mb-10 {\n  margin-bottom: 10px; }\n\n.mb-15 {\n  margin-bottom: 15px; }\n\n.mb-20 {\n  margin-bottom: 20px; }\n\n.mb-25 {\n  margin-bottom: 25px; }\n\n.mb-30 {\n  margin-bottom: 30px; }\n\n.mb-35 {\n  margin-bottom: 35px; }\n\n.mb-40 {\n  margin-bottom: 40px; }\n\n.mb-45 {\n  margin-bottom: 45px; }\n\n.mb-50 {\n  margin-bottom: 50px; }\n\n.mb-55 {\n  margin-bottom: 55px; }\n\n.mb-60 {\n  margin-bottom: 60px; }\n\n.mb-65 {\n  margin-bottom: 65px; }\n\n.mb-70 {\n  margin-bottom: 70px; }\n\n/* ----------------------------------------------------------------\n    功能样式\n-----------------------------------------------------------------*/\n* {\n  box-sizing: border-box; }\n\nul, ol, li {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  color: #333;\n  word-break: break-all; }\n\nh1 {\n  font-size: 36px; }\n\nh2 {\n  font-size: 30px; }\n\nh3 {\n  font-size: 24px; }\n\nh4 {\n  font-size: 18px; }\n\nh5, body, button, input, optgroup, select, textarea {\n  font-size: 14px; }\n\nh6 {\n  font-size: 12px; }\n\np {\n  line-height: 1.5;\n  color: #666;\n  word-break: break-all; }\n  p.muted {\n    color: #a6a6a6; }\n\n.muted {\n  color: #a6a6a6; }\n\nem {\n  color: #FA4D24;\n  font-weight: normal;\n  font-style: normal; }\n\nb {\n  color: #333;\n  font-weight: bolder; }\n\na {\n  color: #666; }\n  a, a:active, a:focus, a:visited, a:hover {\n    text-decoration: none; }\n\n.text-primary {\n  color: #3888FB; }\n\n.text-success {\n  color: #09AA09; }\n\n.text-info {\n  color: #2dbbed; }\n\n.text-warning {\n  color: #ff8400; }\n\n.text-danger {\n  color: #FA4D24; }\n\n.display-none {\n  display: none !important; }\n\n.display-inline-block {\n  display: inline-block !important; }\n\n.display-block {\n  display: block !important; }\n\n.container, .container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n\n.row {\n  margin-right: -15px;\n  margin-left: -15px; }\n\n.clearfix::after, .btns::after, .btns .btn::after {\n  display: block;\n  content: \"\";\n  clear: both; }\n\n.clearfix .l, .btns .l {\n  float: left; }\n\n.clearfix .r, .btns .r {\n  float: right; }\n\n.display-table {\n  display: table !important;\n  width: 100%; }\n  .display-table > * {\n    display: table-cell !important;\n    vertical-align: middle !important; }\n    .display-table > *.l, .display-table > *.r {\n      float: none; }\n\n.icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden; }\n\n/* ----------------------------------------------------------------\n\tUI样式\n-----------------------------------------------------------------*/\n/*按钮*/\n.btn {\n  border: 1px solid transparent;\n  display: inline-block;\n  line-height: 1.5;\n  color: #666;\n  background: #ebebeb;\n  border-radius: 5px;\n  padding: 10px 15px;\n  margin: 0;\n  cursor: pointer;\n  text-align: center;\n  font-size: 14px; }\n  .btn.btn-block {\n    width: 100%;\n    margin: 0 auto 15px;\n    display: block; }\n  .btn.btn-sm {\n    padding: 3px 5px;\n    border-radius: 3px; }\n  .btn.btn-md {\n    padding: 8px 15px;\n    border-radius: 5px; }\n  .btn.btn-lg {\n    padding: 15px 30px;\n    border-radius: 8px; }\n  .btn.btn-br-no {\n    border-radius: 0; }\n  .btn.btn-br-sm {\n    border-radius: 3px; }\n  .btn.btn-br-md {\n    border-radius: 5px; }\n  .btn.btn-br-lg {\n    border-radius: 8px; }\n  .btn:hover:not(.unable), .btn:active:not(.unable), .btn:focus:not(.unable) {\n    opacity: .8; }\n  .btn.btn-primary {\n    background: #3888FB;\n    color: #fff; }\n    .btn.btn-primary:disabled, .btn.btn-primary[disabled], .btn.btn-primary.unable {\n      color: #6aa6fc;\n      cursor: not-allowed; }\n      .btn.btn-primary:disabled:hover, .btn.btn-primary:disabled:active, .btn.btn-primary:disabled:focus, .btn.btn-primary[disabled]:hover, .btn.btn-primary[disabled]:active, .btn.btn-primary[disabled]:focus, .btn.btn-primary.unable:hover, .btn.btn-primary.unable:active, .btn.btn-primary.unable:focus {\n        opacity: 1; }\n    .btn.btn-primary.btn-border {\n      border: 1px solid #3888FB;\n      color: #3888FB;\n      background: none; }\n  .btn.btn-info {\n    background: #2dbbed;\n    color: #fff; }\n    .btn.btn-info:disabled, .btn.btn-info[disabled], .btn.btn-info.unable {\n      color: #5ccaf1;\n      cursor: not-allowed; }\n      .btn.btn-info:disabled:hover, .btn.btn-info:disabled:active, .btn.btn-info:disabled:focus, .btn.btn-info[disabled]:hover, .btn.btn-info[disabled]:active, .btn.btn-info[disabled]:focus, .btn.btn-info.unable:hover, .btn.btn-info.unable:active, .btn.btn-info.unable:focus {\n        opacity: 1; }\n    .btn.btn-info.btn-border {\n      border: 1px solid #2dbbed;\n      color: #2dbbed;\n      background: none; }\n  .btn.btn-warning {\n    background: #ff8400;\n    color: #fff; }\n    .btn.btn-warning:disabled, .btn.btn-warning[disabled], .btn.btn-warning.unable {\n      color: #ff9d33;\n      cursor: not-allowed; }\n      .btn.btn-warning:disabled:hover, .btn.btn-warning:disabled:active, .btn.btn-warning:disabled:focus, .btn.btn-warning[disabled]:hover, .btn.btn-warning[disabled]:active, .btn.btn-warning[disabled]:focus, .btn.btn-warning.unable:hover, .btn.btn-warning.unable:active, .btn.btn-warning.unable:focus {\n        opacity: 1; }\n    .btn.btn-warning.btn-border {\n      border: 1px solid #ff8400;\n      color: #ff8400;\n      background: none; }\n  .btn.btn-success {\n    background: #09AA09;\n    color: #fff; }\n    .btn.btn-success:disabled, .btn.btn-success[disabled], .btn.btn-success.unable {\n      color: #0cda0c;\n      cursor: not-allowed; }\n      .btn.btn-success:disabled:hover, .btn.btn-success:disabled:active, .btn.btn-success:disabled:focus, .btn.btn-success[disabled]:hover, .btn.btn-success[disabled]:active, .btn.btn-success[disabled]:focus, .btn.btn-success.unable:hover, .btn.btn-success.unable:active, .btn.btn-success.unable:focus {\n        opacity: 1; }\n    .btn.btn-success.btn-border {\n      border: 1px solid #09AA09;\n      color: #09AA09;\n      background: none; }\n  .btn.btn-danger {\n    background: #FA4D24;\n    color: #fff; }\n    .btn.btn-danger:disabled, .btn.btn-danger[disabled], .btn.btn-danger.unable {\n      color: #fb7656;\n      cursor: not-allowed; }\n      .btn.btn-danger:disabled:hover, .btn.btn-danger:disabled:active, .btn.btn-danger:disabled:focus, .btn.btn-danger[disabled]:hover, .btn.btn-danger[disabled]:active, .btn.btn-danger[disabled]:focus, .btn.btn-danger.unable:hover, .btn.btn-danger.unable:active, .btn.btn-danger.unable:focus {\n        opacity: 1; }\n    .btn.btn-danger.btn-border {\n      border: 1px solid #FA4D24;\n      color: #FA4D24;\n      background: none; }\n  .btn.unable, .btn:disabled, .btn[disabled] {\n    cursor: not-allowed;\n    border: 1px solid #ebebeb !important;\n    background: #ddd !important;\n    color: #a6a6a6 !important; }\n    .btn.unable:hover, .btn.unable:active, .btn.unable:focus, .btn:disabled:hover, .btn:disabled:active, .btn:disabled:focus, .btn[disabled]:hover, .btn[disabled]:active, .btn[disabled]:focus {\n      opacity: 100; }\n\n/*按钮组*/\n.btns .btn {\n  margin-left: -1px;\n  border-radius: 0;\n  float: left;\n  position: relative; }\n  .btns .btn:first-of-type {\n    margin-left: 0; }\n    .btns .btn:first-of-type.btn-br-sm {\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px; }\n    .btns .btn:first-of-type.btn-br-md {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\n    .btns .btn:first-of-type.btn-br-lg {\n      border-top-left-radius: 8px;\n      border-bottom-left-radius: 8px; }\n  .btns .btn:last-of-type.btn-br-sm {\n    border-top-right-radius: 3px;\n    border-bottom-right-radius: 3px; }\n  .btns .btn:last-of-type.btn-br-md {\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px; }\n  .btns .btn:last-of-type.btn-br-lg {\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px; }\n\n/*按钮组合，均等大小排列*/\n.btn-groups > * {\n  padding: 0 10px; }\n  .btn-groups > *:first-child {\n    padding-left: 0; }\n  .btn-groups > *:last-child {\n    padding-right: 0; }\n\n/* ----------------------------------------------------------------\n\t定义代码片段 前缀hack已用autoprefixer-loader代替\n-----------------------------------------------------------------*/\n/*媒体查询*/\n/*省略显示点点点,移动端通用*/\n/*flex*/\n.flex-box, .btn-groups {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n  .flex-box.flex-v, .flex-v.btn-groups {\n    -webkit-box-orient: vertical;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n\n.flex-inner.flex-1, .btn-groups > * {\n  -webkit-box-flex: 1;\n  -ms-flex: 1;\n  flex: 1; }\n\n.flex-inner.flex-2, .btn-groups > .flex-2 {\n  -webkit-box-flex: 2;\n  -ms-flex: 2;\n  flex: 2; }\n\n.flex-inner.flex-3, .btn-groups > .flex-3 {\n  -webkit-box-flex: 3;\n  -ms-flex: 3;\n  flex: 3; }\n\n.flex-inner.flex-4, .btn-groups > .flex-4 {\n  -webkit-box-flex: 4;\n  -ms-flex: 4;\n  flex: 4; }\n\n.flex-inner.flex-5, .btn-groups > .flex-5 {\n  -webkit-box-flex: 5;\n  -ms-flex: 5;\n  flex: 5; }\n\n.flex-inner.flex-6, .btn-groups > .flex-6 {\n  -webkit-box-flex: 6;\n  -ms-flex: 6;\n  flex: 6; }\n\n.flex-inner.flex-7, .btn-groups > .flex-7 {\n  -webkit-box-flex: 7;\n  -ms-flex: 7;\n  flex: 7; }\n\n.flex-inner.flex-8, .btn-groups > .flex-8 {\n  -webkit-box-flex: 8;\n  -ms-flex: 8;\n  flex: 8; }\n\n.flex-inner.flex-9, .btn-groups > .flex-9 {\n  -webkit-box-flex: 9;\n  -ms-flex: 9;\n  flex: 9; }\n\n.flex-inner.flex-10, .btn-groups > .flex-10 {\n  -webkit-box-flex: 10;\n  -ms-flex: 10;\n  flex: 10; }\n\n.flex-inner.flex-11, .btn-groups > .flex-11 {\n  -webkit-box-flex: 11;\n  -ms-flex: 11;\n  flex: 11; }\n\n.flex-inner.flex-12, .btn-groups > .flex-12 {\n  -webkit-box-flex: 12;\n  -ms-flex: 12;\n  flex: 12; }\n\n.flex-inner.flex-align-center, .btn-groups > .flex-align-center {\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center; }\n\n.flex-inner.flex-pack-center, .btn-groups > .flex-pack-center {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.flex-inner.flex-pack-justify, .btn-groups > .flex-pack-justify {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n/* ----------------------------------------------------------------\n\t手机端仿原生样式\n-----------------------------------------------------------------*/\n@media only screen and (max-device-width: 768px) {\n  /*去掉点击链接和文本框对象的半透明覆盖（iOS）或者虚框（Android）*/\n  a, h1, h2, h3, h4, h5, h6, span, b, i, input, textarea, select, label {\n    -webkit-tap-hightlight-color: transparent !important; }\n  /*禁用长按页面时弹出菜单（iOS下有效）*/\n  body {\n    -webkit-touch-callout: none !important; }\n  /*消除原生外观，在iOS上加上这个属性才能给按钮和输入框自定义样式：*/\n  button, input, textarea, select, label {\n    -webkit-apperance: none !important; }\n  /*点击效果去除高光*/\n  i, span, div, li {\n    -webkit-tap-highlight-color: transparent !important; }\n  /*动画开启GPU渲染*/\n  .action {\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n    -webkit-backface-visibility: hidden;\n    backface-visibility: hidden;\n    -webkit-perspective: 1000;\n    -ms-perspective: 1000;\n    perspective: 1000;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0); } }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=plugin.js.map
