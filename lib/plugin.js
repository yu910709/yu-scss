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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @description 通用样式表（自带normalize.css和bootstrap-grid）其他可配置项详见demo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {object[]} option -  默认内部样式和脚本都不启用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option[].log = false] - 是否在控制台打印相关信息 默认否
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option[].bootCDN = true] - 是否启用BootCDN 默认尽量使用BootCDN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option[].fontawesome||option[].fa] - 是否启用fontawesome
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {object[]} [option[].iconfont||option[].if] - 是否启用iconfont
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {string} [option[].iconfont[].font||option[].if[].font] - iconfont 字体图标 url
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {string} [option[].iconfont[].svg||option[].if[].svg] - iconfont svg url
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option[].bootstrap||option[].bs] - 是否启用bootstrap 默认不启用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option[].bootstrapJs||option[].bsJs] - 是否启用bootstrap的插件脚本 默认不启用 暂不支持
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option[].element||option[].el] - 是否启用element 默认不启用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {boolean} [option[].elementJs||option[].elJs] - 是否启用element的插件脚本 默认不启用 暂不支持
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


__webpack_require__(1);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YuScss = function () {
    function YuScss(props) {
        _classCallCheck(this, YuScss);

        this.option = props;
        this.init();
    }

    /**
     * @description 初始化方法
     */


    _createClass(YuScss, [{
        key: 'init',
        value: function init() {
            if (this.option.log) {
                console.warn('\u672C\u811A\u672C\u81EA\u5E26normalize.css,bootstrap-grid,\u5E76\u53EF\u914D\u7F6E\u4EE5AMD\u6A21\u5F0F\u52A0\u8F7Dfontawesome,iconfont,bootstrap\u7B49\u7B49\uFF0C\u5176\u4ED6\u6837\u5F0F\u5E93\u6B63\u5728\u79EF\u6781\u5173\u8054\u4E2D...');
            }
            //参数合理性判断
            var allowParams = new Set(['log', 'bootCDN', 'fontawesome', 'fa', 'iconfont', 'if', 'bootstrap', 'bs', 'bootstrapJs', 'bsJs', 'element', 'el', 'elementJs', 'elJs']);
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
            //默认使用bootCDN
            if (this.option.bootCDN === undefined) {
                this.option.bootCDN = true;
            }
            //fontawesome
            if (this.option.fontawesome || this.option.fa) {
                if (this.option.bootCDN) {
                    var styleFa = document.createElement('link');
                    styleFa.setAttribute("rel", "stylesheet");
                    styleFa.setAttribute("href", 'https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css');
                    document.getElementsByTagName("head")[0].appendChild(styleFa);
                    if (this.option.log) {
                        console.warn('\u6210\u529F\u5F15\u5165 fontawesome : 4.7.0');
                    }
                } else {
                    var scriptFa = document.createElement('script');
                    scriptFa.setAttribute("type", "text/javascript");
                    scriptFa.setAttribute("src", 'https://use.fontawesome.com/1cda83aa79.js');
                    document.getElementsByTagName("head")[0].appendChild(scriptFa);
                    if (this.option.log) {
                        console.warn('\u6210\u529F\u5F15\u5165 fontawesome : 4.7.0');
                    }
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
                    if (this.option.log) {
                        console.warn('\u6210\u529F\u5F15\u5165 iconfont font\u56FE\u6807');
                    }
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
                    if (this.option.log) {
                        console.warn('\u6210\u529F\u5F15\u5165 iconfont svg');
                    }
                } else {
                    console.warn('lose option.iconfont(if).svg -- yu-scss');
                }
            }
            //bootstrap
            if (this.option.bootstrap || this.option.bs) {
                var styleBs = document.createElement('link');
                styleBs.setAttribute("rel", "stylesheet");
                styleBs.setAttribute("href", 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css');
                document.getElementsByTagName("head")[0].appendChild(styleBs);
                if (this.option.log) {
                    console.warn('\u6210\u529F\u5F15\u5165 bootstrap : 3.3.7');
                }
            }
            if (this.option.bootstrapJs || this.option.bsJs) {
                console.warn('\u6682\u4E0D\u652F\u6301\u5BFC\u5165bootstrap\u811A\u672C\uFF0C\u56E0\u4E3A\u5176\u6709\u4F9D\u8D56\u4E8Ejquery,\u8BF7\u5220\u9664\u76F8\u5173\u914D\u7F6E\u9879\u3002');
            }
            //element-ui
            if (this.option.element || this.option.el) {
                if (this.option.bootCDN) {
                    var styleEl = document.createElement('link');
                    styleEl.setAttribute("rel", "stylesheet");
                    styleEl.setAttribute("href", 'https://cdn.bootcss.com/element-ui/1.4.6/theme-default/index.css');
                    document.getElementsByTagName("head")[0].appendChild(styleEl);
                    if (this.option.log) {
                        console.warn('\u6210\u529F\u5F15\u5165 element : 1.4.6');
                    }
                } else {
                    var _styleEl = document.createElement('link');
                    _styleEl.setAttribute("rel", "stylesheet");
                    _styleEl.setAttribute("href", 'https://unpkg.com/element-ui/lib/theme-chalk/index.css');
                    document.getElementsByTagName("head")[0].appendChild(_styleEl);
                    if (this.option.log) {
                        console.warn('\u6210\u529F\u5F15\u5165 element : 2.0.0');
                    }
                }
            }
            if (this.option.elementJs || this.option.elJs) {
                console.warn('\u6682\u4E0D\u652F\u6301\u5BFC\u5165element\u811A\u672C,\u8BF7\u5220\u9664\u76F8\u5173\u914D\u7F6E\u9879\u3002');
            }
        }
    }]);

    return YuScss;
}();

exports.default = YuScss;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=plugin.js.map
