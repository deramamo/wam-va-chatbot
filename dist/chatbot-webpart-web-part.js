define("cc4a1c17-c5a6-4b9b-b025-4b8adde89008_0.0.1", ["@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "DLWU");
/******/ })
/************************************************************************/
/******/ ({

/***/ "6/mk":
/*!**************************************************************************!*\
  !*** ./lib/webparts/chatbotWebpart/components/ChatbotWebpart.module.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./ChatbotWebpart.module.css */ "8uO2");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "8uO2":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/chatbotWebpart/components/ChatbotWebpart.module.css ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js */ "Z+AG")(false);
// Module
exports.push([module.i, ".chatbotWebpart_daa38f0d .container_daa38f0d{max-width:700px;margin:0 auto}.chatbotWebpart_daa38f0d .row_daa38f0d{margin:0 -8px;box-sizing:border-box;color:#fff;padding:20px}.chatbotWebpart_daa38f0d .row_daa38f0d:after,.chatbotWebpart_daa38f0d .row_daa38f0d:before{display:table;content:\"\";line-height:0}.chatbotWebpart_daa38f0d .row_daa38f0d:after{clear:both}.chatbotWebpart_daa38f0d .column_daa38f0d{position:relative;min-height:1px;padding-left:8px;padding-right:8px;box-sizing:border-box}[dir=ltr] .chatbotWebpart_daa38f0d .column_daa38f0d{float:left}[dir=rtl] .chatbotWebpart_daa38f0d .column_daa38f0d{float:right}.chatbotWebpart_daa38f0d .column_daa38f0d .ms-Grid_daa38f0d{padding:0}@media (min-width:640px){.chatbotWebpart_daa38f0d .column_daa38f0d{width:83.3333333333%}}@media (min-width:1024px){.chatbotWebpart_daa38f0d .column_daa38f0d{width:66.6666666667%}}@media (min-width:1024px){[dir=ltr] .chatbotWebpart_daa38f0d .column_daa38f0d{left:16.6666666667%}[dir=rtl] .chatbotWebpart_daa38f0d .column_daa38f0d{right:16.6666666667%}}@media (min-width:640px){[dir=ltr] .chatbotWebpart_daa38f0d .column_daa38f0d{left:8.3333333333%}[dir=rtl] .chatbotWebpart_daa38f0d .column_daa38f0d{right:8.3333333333%}}.chatbotWebpart_daa38f0d .title_daa38f0d{font-size:21px;font-weight:100;color:#fff}.chatbotWebpart_daa38f0d .description_daa38f0d,.chatbotWebpart_daa38f0d .subTitle_daa38f0d{font-size:17px;font-weight:300;color:#fff}.chatbotWebpart_daa38f0d .button_daa38f0d{text-decoration:none;height:32px;min-width:80px;background-color:#0078d4;border-color:#0078d4;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.chatbotWebpart_daa38f0d .button_daa38f0d .label_daa38f0d{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}.chatbotWebpart_daa38f0d body,.chatbotWebpart_daa38f0d html{height:100%}.chatbotWebpart_daa38f0d body{margin:0}.chatbotWebpart_daa38f0d h1{font-size:16px;font-family:Segoe UI;line-height:20px;color:#f5f5f5;display:table-cell;padding:13px 0 0 20px}.chatbotWebpart_daa38f0d .heading_daa38f0d{background-color:#000;height:50px}.chatbotWebpart_daa38f0d div[role=form]{background-color:#0056bc}.chatbotWebpart_daa38f0d .webchat_daa38f0d{height:calc(100% - 50px);width:100%;top:50px}.chatbotWebpart_daa38f0d .mfp-bg_daa38f0d{top:0;left:0;width:100%;height:100%;z-index:1042;overflow:hidden;position:fixed;background:#0b0b0b;opacity:.8}.chatbotWebpart_daa38f0d .mfp-wrap_daa38f0d{top:0;left:0;width:100%;height:100%;z-index:1043;position:fixed;outline:0!important;-webkit-backface-visibility:hidden}.chatbotWebpart_daa38f0d .mfp-container_daa38f0d{text-align:center;position:absolute;width:100%;height:100%;left:0;top:0;padding:0 8px;box-sizing:border-box}.chatbotWebpart_daa38f0d .mfp-container_daa38f0d:before{content:\"\";display:inline-block;height:100%;vertical-align:middle}.chatbotWebpart_daa38f0d .mfp-align-top_daa38f0d .mfp-container_daa38f0d:before{display:none}.chatbotWebpart_daa38f0d .mfp-content_daa38f0d{position:relative;display:inline-block;vertical-align:middle;margin:0 auto;text-align:left;z-index:1045}.chatbotWebpart_daa38f0d .mfp-ajax-holder_daa38f0d .mfp-content_daa38f0d,.chatbotWebpart_daa38f0d .mfp-inline-holder_daa38f0d .mfp-content_daa38f0d{width:100%;cursor:auto}.chatbotWebpart_daa38f0d .mfp-ajax-cur_daa38f0d{cursor:progress}.chatbotWebpart_daa38f0d .mfp-zoom-out-cur_daa38f0d,.chatbotWebpart_daa38f0d .mfp-zoom-out-cur_daa38f0d .mfp-image-holder_daa38f0d .mfp-close_daa38f0d{cursor:zoom-out}.chatbotWebpart_daa38f0d .mfp-zoom_daa38f0d{cursor:pointer;cursor:zoom-in}.chatbotWebpart_daa38f0d .mfp-auto-cursor_daa38f0d .mfp-content_daa38f0d{cursor:auto}.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d,.chatbotWebpart_daa38f0d .mfp-close_daa38f0d,.chatbotWebpart_daa38f0d .mfp-counter_daa38f0d,.chatbotWebpart_daa38f0d .mfp-preloader_daa38f0d{-webkit-user-select:none;-ms-user-select:none;user-select:none}.chatbotWebpart_daa38f0d .mfp-loading_daa38f0d.mfp-figure_daa38f0d{display:none}.chatbotWebpart_daa38f0d .mfp-hide_daa38f0d{display:none!important}.chatbotWebpart_daa38f0d .mfp-preloader_daa38f0d{color:#ccc;position:absolute;top:50%;width:auto;text-align:center;margin-top:-.8em;left:8px;right:8px;z-index:1044}.chatbotWebpart_daa38f0d .mfp-preloader_daa38f0d a{color:#ccc}.chatbotWebpart_daa38f0d .mfp-preloader_daa38f0d a:hover{color:#fff}.chatbotWebpart_daa38f0d .mfp-s-error_daa38f0d .mfp-content_daa38f0d,.chatbotWebpart_daa38f0d .mfp-s-ready_daa38f0d .mfp-preloader_daa38f0d{display:none}.chatbotWebpart_daa38f0d button.mfp-arrow_daa38f0d,.chatbotWebpart_daa38f0d button.mfp-close_daa38f0d{overflow:visible;cursor:pointer;background:0 0;border:0;-webkit-appearance:none;display:block;outline:0;padding:0;z-index:1046;box-shadow:none;-ms-touch-action:manipulation;touch-action:manipulation}.chatbotWebpart_daa38f0d button::-moz-focus-inner{padding:0;border:0}.chatbotWebpart_daa38f0d .mfp-close_daa38f0d{width:44px;height:44px;line-height:44px;position:absolute;right:0;top:0;text-decoration:none;text-align:center;opacity:.65;padding:0 0 18px 10px;color:#fff;font-style:normal;font-size:28px;font-family:Arial,Baskerville,monospace}.chatbotWebpart_daa38f0d .mfp-close_daa38f0d:focus,.chatbotWebpart_daa38f0d .mfp-close_daa38f0d:hover{opacity:1}.chatbotWebpart_daa38f0d .mfp-close_daa38f0d:active{top:1px}.chatbotWebpart_daa38f0d .mfp-close-btn-in_daa38f0d .mfp-close_daa38f0d{color:#333}.chatbotWebpart_daa38f0d .mfp-iframe-holder_daa38f0d .mfp-close_daa38f0d,.chatbotWebpart_daa38f0d .mfp-image-holder_daa38f0d .mfp-close_daa38f0d{color:#fff;right:-6px;text-align:right;padding-right:6px;width:100%}.chatbotWebpart_daa38f0d .mfp-counter_daa38f0d{position:absolute;top:0;right:0;color:#ccc;font-size:12px;line-height:18px;white-space:nowrap}.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d{position:absolute;opacity:.65;margin:0;top:50%;margin-top:-55px;padding:0;width:90px;height:110px;-webkit-tap-highlight-color:transparent}.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d:active{margin-top:-54px}.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d:focus,.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d:hover{opacity:1}.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d:after,.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d:before{content:\"\";display:block;width:0;height:0;position:absolute;left:0;top:0;margin-top:35px;margin-left:35px;border:medium inset transparent}.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d:after{border-top-width:13px;border-bottom-width:13px;top:8px}.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d:before{border-top-width:21px;border-bottom-width:21px;opacity:.7}.chatbotWebpart_daa38f0d .mfp-arrow-left_daa38f0d{left:0}.chatbotWebpart_daa38f0d .mfp-arrow-left_daa38f0d:after{border-right:17px solid #fff;margin-left:31px}.chatbotWebpart_daa38f0d .mfp-arrow-left_daa38f0d:before{margin-left:25px;border-right:27px solid #3f3f3f}.chatbotWebpart_daa38f0d .mfp-arrow-right_daa38f0d{right:0}.chatbotWebpart_daa38f0d .mfp-arrow-right_daa38f0d:after{border-left:17px solid #fff;margin-left:39px}.chatbotWebpart_daa38f0d .mfp-arrow-right_daa38f0d:before{border-left:27px solid #3f3f3f}.chatbotWebpart_daa38f0d .mfp-iframe-holder_daa38f0d{padding-top:40px;padding-bottom:40px}.chatbotWebpart_daa38f0d .mfp-iframe-holder_daa38f0d .mfp-content_daa38f0d{line-height:0;width:100%;max-width:900px}.chatbotWebpart_daa38f0d .mfp-iframe-holder_daa38f0d .mfp-close_daa38f0d{top:-40px}.chatbotWebpart_daa38f0d .mfp-iframe-scaler_daa38f0d{width:100%;height:0;overflow:hidden;padding-top:56.25%}.chatbotWebpart_daa38f0d .mfp-iframe-scaler_daa38f0d iframe{position:absolute;display:block;top:0;left:0;width:100%;height:100%;box-shadow:0 0 8px rgba(0,0,0,.6);background:#000}.chatbotWebpart_daa38f0d img.mfp-img_daa38f0d{width:auto;max-width:100%;height:auto;display:block;line-height:0;box-sizing:border-box;padding:40px 0 40px;margin:0 auto}.chatbotWebpart_daa38f0d .mfp-figure_daa38f0d{line-height:0}.chatbotWebpart_daa38f0d .mfp-figure_daa38f0d:after{content:\"\";position:absolute;left:0;top:40px;bottom:40px;display:block;right:0;width:auto;height:auto;z-index:-1;box-shadow:0 0 8px rgba(0,0,0,.6);background:#444}.chatbotWebpart_daa38f0d .mfp-figure_daa38f0d small{color:#bdbdbd;display:block;font-size:12px;line-height:14px}.chatbotWebpart_daa38f0d .mfp-figure_daa38f0d figure{margin:0}.chatbotWebpart_daa38f0d .mfp-bottom-bar_daa38f0d{margin-top:-36px;position:absolute;top:100%;left:0;width:100%;cursor:auto}.chatbotWebpart_daa38f0d .mfp-title_daa38f0d{text-align:left;line-height:18px;color:#f3f3f3;word-wrap:break-word;padding-right:36px}.chatbotWebpart_daa38f0d .mfp-image-holder_daa38f0d .mfp-content_daa38f0d{max-width:100%}.chatbotWebpart_daa38f0d .mfp-gallery_daa38f0d .mfp-image-holder_daa38f0d .mfp-figure_daa38f0d{cursor:pointer}@media screen and (max-height:300px),screen and (max-width:800px) and (orientation:landscape){.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d .mfp-image-holder_daa38f0d{padding-left:0;padding-right:0}.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d img.mfp-img_daa38f0d{padding:0}.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d .mfp-figure_daa38f0d:after{top:0;bottom:0}.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d .mfp-figure_daa38f0d small{display:inline;margin-left:5px}.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d .mfp-bottom-bar_daa38f0d{background:rgba(0,0,0,.6);bottom:0;margin:0;top:auto;padding:3px 5px;position:fixed;box-sizing:border-box}.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d .mfp-bottom-bar_daa38f0d:empty{padding:0}.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d .mfp-counter_daa38f0d{right:5px;top:3px}.chatbotWebpart_daa38f0d .mfp-img-mobile_daa38f0d .mfp-close_daa38f0d{top:0;right:0;width:35px;height:35px;line-height:35px;background:rgba(0,0,0,.6);position:fixed;text-align:center;padding:0}}@media (max-width:900px){.chatbotWebpart_daa38f0d .mfp-arrow_daa38f0d{transform:scale(.75)}.chatbotWebpart_daa38f0d .mfp-arrow-left_daa38f0d{transform-origin:0 0}.chatbotWebpart_daa38f0d .mfp-arrow-right_daa38f0d{transform-origin:100%}.chatbotWebpart_daa38f0d .mfp-container_daa38f0d{padding-left:6px;padding-right:6px}}.chatbotWebpart_daa38f0d #bot-modal_daa38f0d{border-radius:20px;padding:0;max-width:395px;bottom:25px;height:435px;right:25px;transform:translateZ(0);position:fixed}.chatbotWebpart_daa38f0d .webchat_daa38f0d .from-user_daa38f0d p{color:#000}.chatbotWebpart_daa38f0d .webchat_daa38f0d form{margin:0}.chatbotWebpart_daa38f0d .webchat_daa38f0d form input{margin:0;padding:0}.chatbotWebpart_daa38f0d .chatbot_image_daa38f0d{position:relative;margin-right:15px}.chatbotWebpart_daa38f0d .bot-frame_daa38f0d{overflow:hidden;width:100%;height:100%;border:none}.chatbotWebpart_daa38f0d .collapsible_button_daa38f0d{background-color:#b13555;color:#fff;cursor:pointer;padding:13px;width:450px;border:0 solid #a9a9a9;border-radius:0;border-color:#a9a9a9;text-align:center;font-size:15px;position:fixed;bottom:0;right:0;z-index:1000}.chatbotWebpart_daa38f0d .active_daa38f0d,.chatbotWebpart_daa38f0d .collapsible_button_daa38f0d:hover{border:1px solid #009ac7;background-color:#b13555}.chatbotWebpart_daa38f0d .collapsible_content_daa38f0d{display:none;overflow:hidden;width:450px;position:fixed;bottom:50px;right:0;background-color:#f1f1f1;z-index:1000}.chatbotWebpart_daa38f0d .botdiv_daa38f0d{display:none;overflow:hidden;position:fixed;bottom:0;right:0;width:450px}.chatbotWebpart_daa38f0d a.bot-trigger_daa38f0d.open-popup-link_daa38f0d.button_daa38f0d{border-radius:50px 50px 0 0;padding:0}.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d{position:fixed;bottom:70px;right:0;z-index:999}.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d .bot-container_daa38f0d{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;height:60px;padding:10px 25px;border-radius:50px 50px 0 0}.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d .bot-container_daa38f0d .bot-img_daa38f0d{position:relative;margin-right:15px}.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d .bot-container_daa38f0d .bot-img_daa38f0d .status_daa38f0d{background:#b13555;position:absolute;width:8px;height:8px;bottom:4px;right:0;border-radius:10px;box-shadow:.5px 0 0 0 #fff,0 .5px 0 0 #fff,.5px .5px 0 0 #fff,inset .5px 0 0 0 #fff,inset 0 .5px 0 0 #fff}.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d .bot-container_daa38f0d .bot-message_daa38f0d{display:block}.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d .bot-container_daa38f0d .bot-message_daa38f0d span{font-weight:700}.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d .bot-container_daa38f0d .bot-message_daa38f0d p,.chatbotWebpart_daa38f0d .bot-trigger_daa38f0d .bot-container_daa38f0d .bot-message_daa38f0d span{display:inline;color:#fff;font-size:16px}.chatbotWebpart_daa38f0d .white-popup_daa38f0d{position:relative;background:#fff;padding:20px;width:auto;margin:20px auto;border-radius:10px}.chatbotWebpart_daa38f0d .bot-modal-container_daa38f0d{float:right;height:99vh;width:585px!important;margin:0;padding:0;border-radius:0}.chatbotWebpart_daa38f0d .bot-modal-container_daa38f0d button.mfp-close_daa38f0d{color:#fff;font-size:20px;font-weight:300;width:21px;height:22px;right:-18px;top:-18px;position:absolute;border:2px solid #fff;border-radius:50%;line-height:1}.chatbotWebpart_daa38f0d .header_daa38f0d{background-color:#0078d4;height:auto;width:585px;overflow:hidden;position:fixed;z-index:99;border-radius:5px 5px 0 0;top:62px;max-width:395px}.chatbotWebpart_daa38f0d .header_content_container_daa38f0d{height:auto;margin:5px 0;display:inline}.chatbotWebpart_daa38f0d .header_image_container_daa38f0d{float:left;width:auto;text-align:center;padding:4px 8px 0 10px}.chatbotWebpart_daa38f0d .header_image_daa38f0d{width:30px}.chatbotWebpart_daa38f0d .header_title_container_daa38f0d{white-space:nowrap}.chatbotWebpart_daa38f0d .close_daa38f0d{float:right;padding:5px 10px 0 0}.chatbotWebpart_daa38f0d .botimage_container_daa38f0d{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;height:60px;padding:10px 25px;border-radius:50px 50px 0 0;position:fixed;bottom:70px;right:0;z-index:999;transition:all .5s}.chatbotWebpart_daa38f0d span.title_text_daa38f0d{font-size:15px;margin-top:7px;display:inline-block}.chatbotWebpart_daa38f0d .header_title_daa38f0d{font-size:18px;font-family:Segoe UI,Selawik,Tahoma,Verdana,Arial,sans-serif;font-weight:600;color:#f3f2f1;letter-spacing:.005em}.chatbotWebpart_daa38f0d .header_subtitle_daa38f0d{font-size:10px;font-family:Segoe UI,Selawik,Tahoma,Verdana,Arial,sans-serif;line-height:12px;color:#ffd9e3}.chatbotWebpart_daa38f0d .css-1abghdv_daa38f0d{background-color:#d2cbe0}.chatbotWebpart_daa38f0d .main_daa38f0d{margin:18px;border-radius:4px}.chatbotWebpart_daa38f0d div[role=form]{background-color:#0057b8}.chatbotWebpart_daa38f0d .webchat_daa38f0d{position:fixed;height:calc(100% - 140px);width:585px!important;top:100px;z-index:90000;overflow:hidden;max-width:395px}.chatbotWebpart_daa38f0d .webchat_daa38f0d .css-1t62idy_daa38f0d,.chatbotWebpart_daa38f0d .webchat_daa38f0d .css-eycyw2_daa38f0d{border-radius:0 0 5px 5px}.chatbotWebpart_daa38f0d .share_social_daa38f0d{float:right;margin-right:10px;margin-top:3px}.chatbotWebpart_daa38f0d .share_social_daa38f0d a{color:#fff;vertical-align:middle;margin:0 3px;opacity:.7;display:inline-block;font-size:18px;margin:0 6px}.chatbotWebpart_daa38f0d .share_social_daa38f0d a:hover{opacity:1}@media only screen and (max-width:767px){.chatbotWebpart_daa38f0d .header_daa38f0d,.chatbotWebpart_daa38f0d .webchat_daa38f0d{width:100%!important;max-width:inherit}.chatbotWebpart_daa38f0d .bot-modal-container_daa38f0d{width:92%!important}.chatbotWebpart_daa38f0d .mfp-container_daa38f0d{padding:0}.chatbotWebpart_daa38f0d #bot-modal_daa38f0d{border:0;right:0!important;bottom:0!important;margin:5px auto;left:0;max-width:inherit;border-radius:6px}.chatbotWebpart_daa38f0d .header_image_daa38f0d{width:26px}.chatbotWebpart_daa38f0d .share_social_daa38f0d{margin-right:35px}.chatbotWebpart_daa38f0d .share_social_daa38f0d a{font-size:16px}.chatbotWebpart_daa38f0d .bot-modal-container_daa38f0d button.mfp-close_daa38f0d{top:6px;right:9px;color:#000;background-color:#fff;width:19px;height:19px;line-height:.8}}.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d li,.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d ul{margin:2px;padding:0}.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d>p{margin-bottom:0}.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d>p+p,.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d>ul+p{margin-top:5px}.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d a{color:#6495ed;text-decoration:underline}.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d a:hover{color:#00008b}.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d li{margin-left:30px;list-style:disc}.chatbotWebpart_daa38f0d .webchat_daa38f0d .markdown_daa38f0d li li{margin-left:20px;list-style:circle}.chatbotWebpart_daa38f0d .webchat_daa38f0d button{background:0 0}.chatbotWebpart_daa38f0d .webchat_daa38f0d li button{background:#fff}.chatbotWebpart_daa38f0d .webchat_daa38f0d .webchat__scrollToEndButton_daa38f0d{background-color:rgba(0,0,0,.6)}", ""]);


/***/ }),

/***/ "DLWU":
/*!**************************************************************!*\
  !*** ./lib/webparts/chatbotWebpart/ChatbotWebpartWebPart.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ChatbotWebpart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ChatbotWebpart */ "sQFi");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var ChatbotWebpartWebPart = /** @class */ (function (_super) {
    __extends(ChatbotWebpartWebPart, _super);
    function ChatbotWebpartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChatbotWebpartWebPart.prototype.render = function () {
        var element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ChatbotWebpart__WEBPACK_IMPORTED_MODULE_4__["default"], {
            botid: this.properties.botid,
            botname: this.properties.botname,
            botimage: this.properties.botimage,
            botlogo: this.properties.botlogo
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    };
    ChatbotWebpartWebPart.prototype.onDispose = function () {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    };
    Object.defineProperty(ChatbotWebpartWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ChatbotWebpartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    // header: {
                    //   description: strings.PropertyPaneDescription
                    // },
                    groups: [
                        {
                            groupName: "Bot Settings",
                            groupFields: [
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('botid', {
                                    label: "BOT ID"
                                }),
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('botname', {
                                    label: "BOT Name"
                                }),
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('botlogo', {
                                    label: "BOT Logo"
                                }),
                                Object(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('botimage', {
                                    label: "BOT Image"
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ChatbotWebpartWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_3__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (ChatbotWebpartWebPart);


/***/ }),

/***/ "Lep1":
/*!******************************************************************************!*\
  !*** ./lib/webparts/chatbotWebpart/components/ChatbotWebpart.module.scss.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./ChatbotWebpart.module.css */ "6/mk");
var styles = {
    chatbotWebpart: 'chatbotWebpart_daa38f0d',
    container: 'container_daa38f0d',
    row: 'row_daa38f0d',
    column: 'column_daa38f0d',
    'ms-Grid': 'ms-Grid_daa38f0d',
    title: 'title_daa38f0d',
    subTitle: 'subTitle_daa38f0d',
    description: 'description_daa38f0d',
    button: 'button_daa38f0d',
    label: 'label_daa38f0d',
    heading: 'heading_daa38f0d',
    main: 'main_daa38f0d',
    webchat: 'webchat_daa38f0d',
    'mfp-bg': 'mfp-bg_daa38f0d',
    'mfp-wrap': 'mfp-wrap_daa38f0d',
    'mfp-container': 'mfp-container_daa38f0d',
    'mfp-align-top': 'mfp-align-top_daa38f0d',
    'mfp-content': 'mfp-content_daa38f0d',
    'mfp-ajax-holder': 'mfp-ajax-holder_daa38f0d',
    'mfp-inline-holder': 'mfp-inline-holder_daa38f0d',
    'mfp-ajax-cur': 'mfp-ajax-cur_daa38f0d',
    'mfp-zoom-out-cur': 'mfp-zoom-out-cur_daa38f0d',
    'mfp-image-holder': 'mfp-image-holder_daa38f0d',
    'mfp-close': 'mfp-close_daa38f0d',
    'mfp-zoom': 'mfp-zoom_daa38f0d',
    'mfp-auto-cursor': 'mfp-auto-cursor_daa38f0d',
    'mfp-arrow': 'mfp-arrow_daa38f0d',
    'mfp-counter': 'mfp-counter_daa38f0d',
    'mfp-preloader': 'mfp-preloader_daa38f0d',
    'mfp-loading': 'mfp-loading_daa38f0d',
    'mfp-figure': 'mfp-figure_daa38f0d',
    'mfp-hide': 'mfp-hide_daa38f0d',
    'mfp-s-ready': 'mfp-s-ready_daa38f0d',
    'mfp-s-error': 'mfp-s-error_daa38f0d',
    'mfp-close-btn-in': 'mfp-close-btn-in_daa38f0d',
    'mfp-iframe-holder': 'mfp-iframe-holder_daa38f0d',
    'mfp-arrow-left': 'mfp-arrow-left_daa38f0d',
    'mfp-arrow-right': 'mfp-arrow-right_daa38f0d',
    'mfp-iframe-scaler': 'mfp-iframe-scaler_daa38f0d',
    'mfp-img': 'mfp-img_daa38f0d',
    'mfp-bottom-bar': 'mfp-bottom-bar_daa38f0d',
    'mfp-title': 'mfp-title_daa38f0d',
    'mfp-gallery': 'mfp-gallery_daa38f0d',
    'mfp-img-mobile': 'mfp-img-mobile_daa38f0d',
    'bot-modal': 'bot-modal_daa38f0d',
    'from-user': 'from-user_daa38f0d',
    chatbot_image: 'chatbot_image_daa38f0d',
    'bot-frame': 'bot-frame_daa38f0d',
    collapsible_button: 'collapsible_button_daa38f0d',
    active: 'active_daa38f0d',
    collapsible_content: 'collapsible_content_daa38f0d',
    botdiv: 'botdiv_daa38f0d',
    'bot-trigger': 'bot-trigger_daa38f0d',
    'open-popup-link': 'open-popup-link_daa38f0d',
    'bot-container': 'bot-container_daa38f0d',
    'bot-img': 'bot-img_daa38f0d',
    status: 'status_daa38f0d',
    'bot-message': 'bot-message_daa38f0d',
    'white-popup': 'white-popup_daa38f0d',
    'bot-modal-container': 'bot-modal-container_daa38f0d',
    header: 'header_daa38f0d',
    header_content_container: 'header_content_container_daa38f0d',
    header_image_container: 'header_image_container_daa38f0d',
    header_image: 'header_image_daa38f0d',
    header_title_container: 'header_title_container_daa38f0d',
    close: 'close_daa38f0d',
    botimage_container: 'botimage_container_daa38f0d',
    title_text: 'title_text_daa38f0d',
    header_title: 'header_title_daa38f0d',
    header_subtitle: 'header_subtitle_daa38f0d',
    'css-1abghdv': 'css-1abghdv_daa38f0d',
    'css-1t62idy': 'css-1t62idy_daa38f0d',
    'css-eycyw2': 'css-eycyw2_daa38f0d',
    share_social: 'share_social_daa38f0d',
    markdown: 'markdown_daa38f0d',
    webchat__scrollToEndButton: 'webchat__scrollToEndButton_daa38f0d'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "THXm":
/*!**********************************************************!*\
  !*** ./lib/webparts/chatbotWebpart/utilities/webchat.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! For license information please see webchat.js.LICENSE.txt */

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "Z+AG":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@microsoft/spfx-heft-plugins/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../sp-build-web/node_modules/webpack/buildin/global.js */ "vicT")))

/***/ }),

/***/ "sQFi":
/*!******************************************************************!*\
  !*** ./lib/webparts/chatbotWebpart/components/ChatbotWebpart.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatbotWebpart.module.scss */ "Lep1");
/* harmony import */ var _utilities_webchat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/webchat.js */ "THXm");
/* harmony import */ var _utilities_webchat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utilities_webchat_js__WEBPACK_IMPORTED_MODULE_2__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ChatbotWebpart = /** @class */ (function (_super) {
    __extends(ChatbotWebpart, _super);
    function ChatbotWebpart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: false
        };
        return _this;
    }
    ChatbotWebpart.prototype.render = function () {
        var _this = this;
        var styleOptions = {
            // Add styleOptions to customize web chat canvas
            hideUploadButton: true
        };
        var theURL = "https://powerva.microsoft.com/api/botmanagement/v1/directline/directlinetoken?botId=" + this.props.botid;
        var store = window.WebChat.createStore({}, function (_a) {
            var dispatch = _a.dispatch;
            return function (next) { return function (action) {
                if (action.type === "DIRECT_LINE/CONNECT_FULFILLED") {
                    dispatch({
                        meta: {
                            method: "keyboard",
                        },
                        payload: {
                            activity: {
                                channelData: {
                                    postBack: true,
                                },
                                //Web Chat will show the 'Greeting' System Topic message which has a trigger-phrase 'hello'
                                name: 'startConversation',
                                type: "event"
                            },
                        },
                        type: "DIRECT_LINE/POST_ACTIVITY",
                    });
                }
                return next(action);
            }; };
        });
        fetch(theURL)
            .then(function (response) { return response.json(); })
            .then(function (conversationInfo) {
            window.WebChat.renderWebChat({
                directLine: window.WebChat.createDirectLine({
                    token: conversationInfo.token,
                }),
                store: store,
                styleOptions: styleOptions
            }, document.getElementById('webchat'));
        })
            .catch(function (err) { return console.error("An error occurred: " + err); });
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].chatbotWebpart }, (this.state.checked) ?
            (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].row },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header, id: "header" },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header_content_container },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header_image_container },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header_image, src: this.props.botlogo })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header_title_container },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header_title },
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].title_text }, this.props.botname),
                                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].close, onClick: function () { _this.setState({ checked: !_this.state.checked }); } }, "x"))))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].webchat, id: "webchat", role: "main" }))))
            : (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].botimage_container },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _ChatbotWebpart_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].chatbot_image },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: this.props.botimage, style: { maxHeight: 150 }, onClick: function () { _this.setState({ checked: !_this.state.checked }); } }))))));
    };
    return ChatbotWebpart;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ChatbotWebpart);


/***/ }),

/***/ "vicT":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=chatbot-webpart-web-part.js.map