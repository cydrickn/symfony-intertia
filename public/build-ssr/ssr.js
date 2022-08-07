/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/pages sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./assets/pages/ sync ^\.\/.*$ ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./welcome": "./assets/pages/welcome.vue",
	"./welcome.vue": "./assets/pages/welcome.vue"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'welcome',
  props: {
    version: String,
    projectDir: String,
    docVersion: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.useCssVars)(function (_ctx) {
      return {
        "255f5999-hue": hue
      };
    });

    var hue = Math.floor(Math.random() * 365) + 1;

    var darkColor = function darkColor(alpha) {
      alpha = alpha || 1;
      return "hsla(".concat(hue, ", 20%, 45%, ").concat(alpha, ")");
    };

    var lightColor = function lightColor(alpha) {
      alpha = alpha || 1;
      return "hsla(".concat(hue, ", 20%, 95%, ").concat(alpha, ")");
    };

    var darkColors = {
      75: darkColor(0.75),
      100: darkColor()
    };
    var lightColors = {
      75: lightColor(0.75),
      100: lightColor()
    };
    var __returned__ = {
      props: props,
      hue: hue,
      darkColor: darkColor,
      lightColor: lightColor,
      darkColors: darkColors,
      lightColors: lightColors
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/layouts/default.vue?vue&type=template&id=a162d486":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/layouts/default.vue?vue&type=template&id=a162d486 ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__);

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push("<div".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderAttrs)(_attrs), "><div>"));

  (0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_0__.ssrRenderSlot)(_ctx.$slots, "default", {}, null, _push, _parent);

  _push("</div></div>");
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=template&id=255f5999&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=template&id=255f5999&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* binding */ ssrRender)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue/server-renderer */ "vue/server-renderer");
/* harmony import */ var vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);


function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _cssVars = {
    style: {
      "--255f5999-hue": $setup.hue
    }
  };

  _push("<div".concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttrs)((0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
    "class": "wrapper"
  }, _attrs, _cssVars)), " data-v-255f5999><div class=\"warning\" data-v-255f5999><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" width=\"32\" data-v-255f5999><path fill=\"currentColor\" d=\"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z\" class=\"\" data-v-255f5999></path></svg><p data-v-255f5999> You&#39;re seeing this page because you haven&#39;t configured any homepage URL and <a").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttr)("href", "https://symfony.com/doc/".concat($props.docVersion, "/debug-mode")), " data-v-255f5999>debug mode</a> is enabled. </p></div><div class=\"container\" data-v-255f5999><div class=\"welcome\" data-v-255f5999><div class=\"logo\" data-v-255f5999><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112.165\" height=\"112.166\" data-v-255f5999><path d=\"M112.165 56.079c0 30.976-25.109 56.087-56.084 56.087C25.108 112.166 0 87.055 0 56.079 0 25.108 25.107 0 56.081 0c30.975 0 56.084 25.108 56.084 56.079z\" style=\"").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderStyle)({
    "fill": "var(--light-color)"
  }), "\" data-v-255f5999></path><path d=\"M80.603 20.75c-5.697.195-10.67 3.34-14.373 7.68-4.1 4.765-6.824 10.411-8.791 16.18-3.514-2.882-6.223-6.611-11.864-8.233-4.359-1.253-8.936-.737-13.146 2.399-1.992 1.489-3.367 3.738-4.02 5.859-1.692 5.498 1.778 10.396 3.354 12.151l3.447 3.691c.709.725 2.422 2.613 1.584 5.319-.9 2.947-4.451 4.85-8.092 3.731-1.627-.499-3.963-1.71-3.439-3.413.215-.699.715-1.225.984-1.821.244-.521.363-.907.438-1.14.665-2.169-.245-4.994-2.57-5.713-2.171-.666-4.391-.138-5.252 2.655-.977 3.174.543 8.935 8.681 11.441 9.535 2.935 17.597-2.259 18.742-9.026.721-4.239-1.195-7.392-4.701-11.441l-2.859-3.163c-1.73-1.729-2.324-4.677-.533-6.942 1.512-1.912 3.664-2.726 7.191-1.768 5.15 1.396 7.443 4.969 11.271 7.851-1.578 5.187-2.613 10.392-3.547 15.059l-.574 3.481c-2.736 14.352-4.826 22.235-10.256 26.76-1.094.779-2.658 1.943-5.014 2.027-1.238.037-1.637-.814-1.654-1.186-.027-.865.703-1.264 1.188-1.652.727-.396 1.824-1.053 1.748-3.156-.078-2.484-2.137-4.639-5.111-4.541-2.229.075-5.625 2.171-5.497 6.011.131 3.967 3.827 6.938 9.401 6.75 2.979-.102 9.633-1.312 16.188-9.105 7.631-8.935 9.766-19.175 11.372-26.671l1.793-9.897c.992.119 2.059.2 3.217.228 9.504.201 14.256-4.72 14.328-8.302.049-2.167-1.42-4.302-3.479-4.251-1.471.041-3.32 1.022-3.762 3.057-.436 1.995 3.023 3.798.32 5.553-1.92 1.242-5.361 2.116-10.209 1.407l.881-4.872c1.799-9.238 4.018-20.6 12.436-20.878.615-.029 2.857.026 2.91 1.512.014.493-.109.623-.689 1.757-.592.884-.814 1.64-.785 2.504.08 2.356 1.873 3.908 4.471 3.818 3.473-.116 4.469-3.496 4.412-5.233-.146-4.085-4.449-6.665-10.14-6.477z\" data-v-255f5999></path></svg></div><h1 data-v-255f5999><small data-v-255f5999>Welcome to</small> Symfony <span class=\"version\" data-v-255f5999>").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrInterpolate)($props.version), "</span> with Inertia and VueJs 3</h1></div><div class=\"status\" data-v-255f5999><code data-v-255f5999><span class=\"check\" data-v-255f5999><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-255f5999><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-255f5999></path><path d=\"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z\" data-v-255f5999></path></svg></span><span data-v-255f5999>").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrInterpolate)($props.projectDir), "</span></code><p class=\"status-ready\" data-v-255f5999>Your application is now ready and you can start working on it.</p></div><svg style=\"").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderStyle)({
    "pointer-events": "none"
  }), "\" class=\"wave\" width=\"100%\" height=\"50px\" preserveAspectRatio=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 1920 75\" data-v-255f5999><defs data-v-255f5999><clipPath id=\"a\" data-v-255f5999><rect class=\"a\" width=\"1920\" height=\"75\" data-v-255f5999></rect></clipPath></defs><g class=\"b\" data-v-255f5999><path class=\"c\" d=\"M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48\" data-v-255f5999></path></g><g class=\"b\" data-v-255f5999><path class=\"d\" d=\"M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10\" data-v-255f5999></path></g><g class=\"b\" data-v-255f5999><path class=\"d\" d=\"M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24\" data-v-255f5999></path></g><g class=\"b\" data-v-255f5999><path class=\"d\" d=\"M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150\" data-v-255f5999></path></g></svg></div><div class=\"resources\" data-v-255f5999><div class=\"row\" data-v-255f5999><div class=\"resource\" data-v-255f5999><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-255f5999><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-255f5999></path><path d=\"M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z\" data-v-255f5999></path></svg><h2 data-v-255f5999>Documentation</h2><a").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttr)("href", "https://symfony.com/doc/".concat($props.docVersion, "/index.html")), " data-v-255f5999> Guides, components, references </a></div><div class=\"resource\" data-v-255f5999><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-255f5999><path fill=\"none\" d=\"M0 0h24v24H0V0z\" data-v-255f5999></path><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\" data-v-255f5999></path></svg><h2 data-v-255f5999>Tutorials</h2><a").concat((0,vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.ssrRenderAttr)("href", "https://symfony.com/doc/".concat($props.docVersion, "/page_creation.html")), " data-v-255f5999> Create your first page </a></div><div class=\"resource\" data-v-255f5999><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" data-v-255f5999><path d=\"M0 0h24v24H0z\" fill=\"none\" data-v-255f5999></path><path d=\"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z\" data-v-255f5999></path></svg><h2 data-v-255f5999>Community</h2><a href=\"https://symfony.com/community\" data-v-255f5999> Connect, get help, or contribute </a></div></div></div></div>"));
}

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./assets/layouts/default.vue":
/*!************************************!*\
  !*** ./assets/layouts/default.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _default_vue_vue_type_template_id_a162d486__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.vue?vue&type=template&id=a162d486 */ "./assets/layouts/default.vue?vue&type=template&id=a162d486");
/* harmony import */ var _home_cydrick_Projects_homeworkxs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_cydrick_Projects_homeworkxs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['ssrRender',_default_vue_vue_type_template_id_a162d486__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__file',"assets/layouts/default.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/pages/welcome.vue":
/*!**********************************!*\
  !*** ./assets/pages/welcome.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _welcome_vue_vue_type_template_id_255f5999_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.vue?vue&type=template&id=255f5999&scoped=true */ "./assets/pages/welcome.vue?vue&type=template&id=255f5999&scoped=true");
/* harmony import */ var _welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.vue?vue&type=script&setup=true&lang=js */ "./assets/pages/welcome.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _welcome_vue_vue_type_style_index_0_id_255f5999_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css */ "./assets/pages/welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css");
/* harmony import */ var _home_cydrick_Projects_homeworkxs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_cydrick_Projects_homeworkxs_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['ssrRender',_welcome_vue_vue_type_template_id_255f5999_scoped_true__WEBPACK_IMPORTED_MODULE_0__.ssrRender],['__scopeId',"data-v-255f5999"],['__file',"assets/pages/welcome.vue"]])

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./assets/pages/welcome.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************!*\
  !*** ./assets/pages/welcome.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_welcome_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./welcome.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./assets/layouts/default.vue?vue&type=template&id=a162d486":
/*!******************************************************************!*\
  !*** ./assets/layouts/default.vue?vue&type=template&id=a162d486 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_default_vue_vue_type_template_id_a162d486__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_default_vue_vue_type_template_id_a162d486__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./default.vue?vue&type=template&id=a162d486 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/layouts/default.vue?vue&type=template&id=a162d486");


/***/ }),

/***/ "./assets/pages/welcome.vue?vue&type=template&id=255f5999&scoped=true":
/*!****************************************************************************!*\
  !*** ./assets/pages/welcome.vue?vue&type=template&id=255f5999&scoped=true ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ssrRender": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_welcome_vue_vue_type_template_id_255f5999_scoped_true__WEBPACK_IMPORTED_MODULE_0__.ssrRender)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_welcome_vue_vue_type_template_id_255f5999_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./welcome.vue?vue&type=template&id=255f5999&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=template&id=255f5999&scoped=true");


/***/ }),

/***/ "./assets/pages/welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css":
/*!******************************************************************************************!*\
  !*** ./assets/pages/welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_4_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_4_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_welcome_vue_vue_type_style_index_0_id_255f5999_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-4.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-4.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./assets/pages/welcome.vue?vue&type=style&index=0&id=255f5999&scoped=true&lang=css");


/***/ }),

/***/ "@inertiajs/inertia-vue3":
/*!******************************************!*\
  !*** external "@inertiajs/inertia-vue3" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/inertia-vue3");

/***/ }),

/***/ "@inertiajs/server":
/*!************************************!*\
  !*** external "@inertiajs/server" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@inertiajs/server");

/***/ }),

/***/ "@vue/server-renderer":
/*!***************************************!*\
  !*** external "@vue/server-renderer" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@vue/server-renderer");

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("vue");

/***/ }),

/***/ "vue/server-renderer":
/*!**************************************!*\
  !*** external "vue/server-renderer" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("vue/server-renderer");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./assets/ssr.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/server-renderer */ "@vue/server-renderer");
/* harmony import */ var _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "@inertiajs/inertia-vue3");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/server */ "@inertiajs/server");
/* harmony import */ var _inertiajs_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_server__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/default */ "./assets/layouts/default.vue");





_inertiajs_server__WEBPACK_IMPORTED_MODULE_3___default()(function (page) {
  return (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
    page: page,
    render: _vue_server_renderer__WEBPACK_IMPORTED_MODULE_1__.renderToString,
    resolve: function resolve(name) {
      var pageInternal = __webpack_require__("./assets/pages sync recursive ^\\.\\/.*$")("./".concat(name))["default"];

      pageInternal.layout = pageInternal.layout || _layouts_default__WEBPACK_IMPORTED_MODULE_4__["default"];
      return pageInternal;
    },
    setup: function setup(_ref) {
      var el = _ref.el,
          App = _ref.App,
          props = _ref.props,
          plugin = _ref.plugin;
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSSRApp)({
        render: function render() {
          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(App, props);
        }
      }).use(plugin);
    }
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2hCQSxJQUFNQSxHQUFHLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsSUFBa0MsQ0FBOUM7O0lBQ0EsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO01BQzNCQSxLQUFLLEdBQUdBLEtBQUssSUFBSSxDQUFqQjtNQUNBLHNCQUFlTCxHQUFmLHlCQUFpQ0ssS0FBakM7SUFDRCxDQUhEOztJQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNELEtBQUQsRUFBVztNQUM1QkEsS0FBSyxHQUFHQSxLQUFLLElBQUksQ0FBakI7TUFDQSxzQkFBZUwsR0FBZix5QkFBaUNLLEtBQWpDO0lBQ0QsQ0FIRDs7SUFLQSxJQUFNRSxVQUFVLEdBQUc7TUFDakIsSUFBSUgsU0FBUyxDQUFDLElBQUQsQ0FESTtNQUVqQixLQUFLQSxTQUFTO0lBRkcsQ0FBbkI7SUFLQSxJQUFNSSxXQUFXLEdBQUc7TUFDbEIsSUFBSUYsVUFBVSxDQUFDLElBQUQsQ0FESTtNQUVsQixLQUFLQSxVQUFVO0lBRkcsQ0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT08sU0FBTTtLQUFTRywyeUJBQUFBLGtFQUFBQSxDQVNWLDBDQUFpQ0MsbWVBQUFBLG1FQUFBQSxDQVU3QjtJQUFBO0VBQUEsMHdEQUtzREEsMmNBQUFBLG1FQUFBQSxDQVVwREEsNEtBQUFBLG1FQUFBQSxDQUtQO0lBQUE7RUFBQSwwd0RBbUNHLDBDQUFpQ0Esc2VBQUFBLGtFQUFBQSxDQVVqQywwQ0FBaUNBOzs7Ozs7Ozs7Ozs7O0FDakgvQzs7Ozs7Ozs7Ozs7O0FDQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Q7QUFDQTtBQUNBLGtCQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdUU7QUFDdkU7O0FBRUEsQ0FBNEc7QUFDNUcsaUNBQWlDLDBIQUFlLHVCQUF1QixpRkFBUzs7QUFFaEYsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0U7QUFDZDtBQUNMOztBQUVoRSxDQUE4RTs7QUFFOEI7QUFDNUcsaUNBQWlDLDBIQUFlLENBQUMsdUZBQU0sZ0JBQWdCLDZGQUFTOztBQUVoRixpRUFBZTs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBak47Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFLLHdEQUFZLENBQUMsVUFBQ0UsSUFBRDtFQUFBLE9BQVVILHlFQUFnQixDQUFDO0lBQ3BDRyxJQUFJLEVBQUpBLElBRG9DO0lBRXBDQyxNQUFNLEVBQUVMLGdFQUY0QjtJQUdwQ00sT0FBTyxFQUFFLGlCQUFBQyxJQUFJLEVBQUk7TUFDYixJQUFNQyxZQUFZLEdBQUdDLGdFQUFRLFlBQVdGLElBQVosRUFBUCxXQUFyQjs7TUFDQUMsWUFBWSxDQUFDRSxNQUFiLEdBQXNCRixZQUFZLENBQUNFLE1BQWIsSUFBdUJQLHdEQUE3QztNQUNBLE9BQU9LLFlBQVA7SUFDSCxDQVBtQztJQVFwQ0csS0FSb0MsdUJBUUY7TUFBQSxJQUExQkMsRUFBMEIsUUFBMUJBLEVBQTBCO01BQUEsSUFBdEJDLEdBQXNCLFFBQXRCQSxHQUFzQjtNQUFBLElBQWpCQyxLQUFpQixRQUFqQkEsS0FBaUI7TUFBQSxJQUFWQyxNQUFVLFFBQVZBLE1BQVU7TUFDOUIsT0FBT2pCLGlEQUFZLENBQUM7UUFBRU8sTUFBTSxFQUFFO1VBQUEsT0FBTU4sc0NBQUMsQ0FBQ2MsR0FBRCxFQUFNQyxLQUFOLENBQVA7UUFBQTtNQUFWLENBQUQsQ0FBWixDQUNGRSxHQURFLENBQ0VELE1BREYsQ0FBUDtJQUVIO0VBWG1DLENBQUQsQ0FBMUI7QUFBQSxDQUFELENBQVosQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL2Fzc2V0cy9wYWdlcy93ZWxjb21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvd2VsY29tZS52dWU/MDM0ZiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbGF5b3V0cy9kZWZhdWx0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvd2VsY29tZS52dWU/NTlhMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcGFnZXMvd2VsY29tZS52dWU/MDEzMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJAaW5lcnRpYWpzL2luZXJ0aWEtdnVlM1wiIiwid2VicGFjazovLy9leHRlcm5hbCBjb21tb25qcyBcIkBpbmVydGlhanMvc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIGNvbW1vbmpzIFwiQHZ1ZS9zZXJ2ZXItcmVuZGVyZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJ2dWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgY29tbW9uanMgXCJ2dWUvc2VydmVyLXJlbmRlcmVyXCIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2Fzc2V0cy9zc3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL3dlbGNvbWVcIjogXCIuL2Fzc2V0cy9wYWdlcy93ZWxjb21lLnZ1ZVwiLFxuXHRcIi4vd2VsY29tZS52dWVcIjogXCIuL2Fzc2V0cy9wYWdlcy93ZWxjb21lLnZ1ZVwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9wYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIjxzY3JpcHQgc2V0dXA+XG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzKHtcbiAgdmVyc2lvbjogU3RyaW5nLFxuICBwcm9qZWN0RGlyOiBTdHJpbmcsXG4gIGRvY1ZlcnNpb246IFN0cmluZ1xufSk7XG5cbmNvbnN0IGh1ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDM2NSkgKyAxO1xuY29uc3QgZGFya0NvbG9yID0gKGFscGhhKSA9PiB7XG4gIGFscGhhID0gYWxwaGEgfHwgMTtcbiAgcmV0dXJuIGBoc2xhKCR7aHVlfSwgMjAlLCA0NSUsICR7YWxwaGF9KWA7XG59XG5jb25zdCBsaWdodENvbG9yID0gKGFscGhhKSA9PiB7XG4gIGFscGhhID0gYWxwaGEgfHwgMTtcbiAgcmV0dXJuIGBoc2xhKCR7aHVlfSwgMjAlLCA5NSUsICR7YWxwaGF9KWA7XG59XG5cbmNvbnN0IGRhcmtDb2xvcnMgPSB7XG4gIDc1OiBkYXJrQ29sb3IoMC43NSksXG4gIDEwMDogZGFya0NvbG9yKClcbn1cblxuY29uc3QgbGlnaHRDb2xvcnMgPSB7XG4gIDc1OiBsaWdodENvbG9yKDAuNzUpLFxuICAxMDA6IGxpZ2h0Q29sb3IoKVxufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIndyYXBwZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwid2FybmluZ1wiPlxuICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NzYgNTEyXCIgd2lkdGg9XCIzMlwiPlxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgZD1cIk01NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHpcIlxuICAgICAgICAgICAgICBjbGFzcz1cIlwiPjwvcGF0aD5cbiAgICAgIDwvc3ZnPlxuICAgICAgPHA+XG4gICAgICAgIFlvdSdyZSBzZWVpbmcgdGhpcyBwYWdlIGJlY2F1c2UgeW91IGhhdmVuJ3QgY29uZmlndXJlZCBhbnkgaG9tZXBhZ2UgVVJMIGFuZFxuICAgICAgICA8YSA6aHJlZj1cImBodHRwczovL3N5bWZvbnkuY29tL2RvYy8ke2RvY1ZlcnNpb259L2RlYnVnLW1vZGVgXCI+ZGVidWcgbW9kZTwvYT4gaXMgZW5hYmxlZC5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvXCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxMTIuMTY1XCIgaGVpZ2h0PVwiMTEyLjE2NlwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTExMi4xNjUgNTYuMDc5YzAgMzAuOTc2LTI1LjEwOSA1Ni4wODctNTYuMDg0IDU2LjA4N0MyNS4xMDggMTEyLjE2NiAwIDg3LjA1NSAwIDU2LjA3OSAwIDI1LjEwOCAyNS4xMDcgMCA1Ni4wODEgMGMzMC45NzUgMCA1Ni4wODQgMjUuMTA4IDU2LjA4NCA1Ni4wNzl6XCJcbiAgICAgICAgICAgICAgICBzdHlsZT1cImZpbGw6IHZhcigtLWxpZ2h0LWNvbG9yKTtcIi8+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNODAuNjAzIDIwLjc1Yy01LjY5Ny4xOTUtMTAuNjcgMy4zNC0xNC4zNzMgNy42OC00LjEgNC43NjUtNi44MjQgMTAuNDExLTguNzkxIDE2LjE4LTMuNTE0LTIuODgyLTYuMjIzLTYuNjExLTExLjg2NC04LjIzMy00LjM1OS0xLjI1My04LjkzNi0uNzM3LTEzLjE0NiAyLjM5OS0xLjk5MiAxLjQ4OS0zLjM2NyAzLjczOC00LjAyIDUuODU5LTEuNjkyIDUuNDk4IDEuNzc4IDEwLjM5NiAzLjM1NCAxMi4xNTFsMy40NDcgMy42OTFjLjcwOS43MjUgMi40MjIgMi42MTMgMS41ODQgNS4zMTktLjkgMi45NDctNC40NTEgNC44NS04LjA5MiAzLjczMS0xLjYyNy0uNDk5LTMuOTYzLTEuNzEtMy40MzktMy40MTMuMjE1LS42OTkuNzE1LTEuMjI1Ljk4NC0xLjgyMS4yNDQtLjUyMS4zNjMtLjkwNy40MzgtMS4xNC42NjUtMi4xNjktLjI0NS00Ljk5NC0yLjU3LTUuNzEzLTIuMTcxLS42NjYtNC4zOTEtLjEzOC01LjI1MiAyLjY1NS0uOTc3IDMuMTc0LjU0MyA4LjkzNSA4LjY4MSAxMS40NDEgOS41MzUgMi45MzUgMTcuNTk3LTIuMjU5IDE4Ljc0Mi05LjAyNi43MjEtNC4yMzktMS4xOTUtNy4zOTItNC43MDEtMTEuNDQxbC0yLjg1OS0zLjE2M2MtMS43My0xLjcyOS0yLjMyNC00LjY3Ny0uNTMzLTYuOTQyIDEuNTEyLTEuOTEyIDMuNjY0LTIuNzI2IDcuMTkxLTEuNzY4IDUuMTUgMS4zOTYgNy40NDMgNC45NjkgMTEuMjcxIDcuODUxLTEuNTc4IDUuMTg3LTIuNjEzIDEwLjM5Mi0zLjU0NyAxNS4wNTlsLS41NzQgMy40ODFjLTIuNzM2IDE0LjM1Mi00LjgyNiAyMi4yMzUtMTAuMjU2IDI2Ljc2LTEuMDk0Ljc3OS0yLjY1OCAxLjk0My01LjAxNCAyLjAyNy0xLjIzOC4wMzctMS42MzctLjgxNC0xLjY1NC0xLjE4Ni0uMDI3LS44NjUuNzAzLTEuMjY0IDEuMTg4LTEuNjUyLjcyNy0uMzk2IDEuODI0LTEuMDUzIDEuNzQ4LTMuMTU2LS4wNzgtMi40ODQtMi4xMzctNC42MzktNS4xMTEtNC41NDEtMi4yMjkuMDc1LTUuNjI1IDIuMTcxLTUuNDk3IDYuMDExLjEzMSAzLjk2NyAzLjgyNyA2LjkzOCA5LjQwMSA2Ljc1IDIuOTc5LS4xMDIgOS42MzMtMS4zMTIgMTYuMTg4LTkuMTA1IDcuNjMxLTguOTM1IDkuNzY2LTE5LjE3NSAxMS4zNzItMjYuNjcxbDEuNzkzLTkuODk3Yy45OTIuMTE5IDIuMDU5LjIgMy4yMTcuMjI4IDkuNTA0LjIwMSAxNC4yNTYtNC43MiAxNC4zMjgtOC4zMDIuMDQ5LTIuMTY3LTEuNDItNC4zMDItMy40NzktNC4yNTEtMS40NzEuMDQxLTMuMzIgMS4wMjItMy43NjIgMy4wNTctLjQzNiAxLjk5NSAzLjAyMyAzLjc5OC4zMiA1LjU1My0xLjkyIDEuMjQyLTUuMzYxIDIuMTE2LTEwLjIwOSAxLjQwN2wuODgxLTQuODcyYzEuNzk5LTkuMjM4IDQuMDE4LTIwLjYgMTIuNDM2LTIwLjg3OC42MTUtLjAyOSAyLjg1Ny4wMjYgMi45MSAxLjUxMi4wMTQuNDkzLS4xMDkuNjIzLS42ODkgMS43NTctLjU5Mi44ODQtLjgxNCAxLjY0LS43ODUgMi41MDQuMDggMi4zNTYgMS44NzMgMy45MDggNC40NzEgMy44MTggMy40NzMtLjExNiA0LjQ2OS0zLjQ5NiA0LjQxMi01LjIzMy0uMTQ2LTQuMDg1LTQuNDQ5LTYuNjY1LTEwLjE0LTYuNDc3elwiLz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMT48c21hbGw+V2VsY29tZSB0bzwvc21hbGw+IFN5bWZvbnkgPHNwYW4gY2xhc3M9XCJ2ZXJzaW9uXCI+e3t2ZXJzaW9ufX08L3NwYW4+IHdpdGggSW5lcnRpYSBhbmQgVnVlSnMgMzwvaDE+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInN0YXR1c1wiPlxuICAgICAgICA8Y29kZT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNoZWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz48cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXpcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt7cHJvamVjdERpcn19PC9zcGFuPlxuICAgICAgICA8L2NvZGU+XG4gICAgICAgIDxwIGNsYXNzPVwic3RhdHVzLXJlYWR5XCI+WW91ciBhcHBsaWNhdGlvbiBpcyBub3cgcmVhZHkgYW5kIHlvdSBjYW4gc3RhcnQgd29ya2luZyBvbiBpdC48L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN2ZyBzdHlsZT1cInBvaW50ZXItZXZlbnRzOiBub25lXCIgY2xhc3M9XCJ3YXZlXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTBweFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcbiAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHZpZXdCb3g9XCIwIDAgMTkyMCA3NVwiPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJhXCI+XG4gICAgICAgICAgICA8cmVjdCBjbGFzcz1cImFcIiB3aWR0aD1cIjE5MjBcIiBoZWlnaHQ9XCI3NVwiPjwvcmVjdD5cbiAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICA8L2RlZnM+XG4gICAgICAgIDxnIGNsYXNzPVwiYlwiPlxuICAgICAgICAgIDxwYXRoIGNsYXNzPVwiY1wiXG4gICAgICAgICAgICAgICAgZD1cIk0xOTYzLDMyN0gtMTA1VjY1QTI2NDcuNDksMjY0Ny40OSwwLDAsMSw0MzEsMTljMjE3LjcsMy41LDIzOS42LDMwLjgsNDcwLDM2LDI5Ny4zLDYuNywzNjcuNS0zNi4yLDY0Mi0yOGEyNTExLjQxLDI1MTEuNDEsMCwwLDEsNDIwLDQ4XCI+PC9wYXRoPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnIGNsYXNzPVwiYlwiPlxuICAgICAgICAgIDxwYXRoIGNsYXNzPVwiZFwiXG4gICAgICAgICAgICAgICAgZD1cIk0tMTI3LDQwNEgxOTYzVjQ0Yy0xNDAuMS0yOC0zNDMuMy00Ni43LTU2NiwyMi03NS41LDIzLjMtMTE4LjUsNDUuOS0xNjIsNjQtNDguNiwyMC4yLTQwNC43LDEyOC03ODQsMEMzNTUuMiw5Ny43LDM0MS42LDc4LjMsMjM1LDUwLDg2LjYsMTAuNi00MS44LDYuOS0xMjcsMTBcIj48L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgY2xhc3M9XCJiXCI+XG4gICAgICAgICAgPHBhdGggY2xhc3M9XCJkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTE5NzksNDYyLTE1NSw0NDZWMTA2QzI1MS44LDIwLjIsNTc2LjYsMTUuOSw4MDUsMzBjMTY3LjQsMTAuMywzMjIuMywzMi45LDY4MCw1NiwyMDcsMTMuNCwzNzgsMjAuMyw0OTQsMjRcIj48L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPGcgY2xhc3M9XCJiXCI+XG4gICAgICAgICAgPHBhdGggY2xhc3M9XCJkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTE5OTgsNDg0SC0yNDNWMTAwYzQ0NS44LDI2LjgsNzk0LjItNC4xLDEwMzUtMzksMTQxLTIwLjQsMjMxLjEtNDAuMSwzNzgtNDUsMzQ5LjYtMTEuNiw2MzYuNyw3My44LDgyOCwxNTBcIj48L3BhdGg+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJlc291cmNlc1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVzb3VyY2VcIj5cbiAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBkPVwiTTEyIDExLjU1QzkuNjQgOS4zNSA2LjQ4IDggMyA4djExYzMuNDggMCA2LjY0IDEuMzUgOSAzLjU1IDIuMzYtMi4xOSA1LjUyLTMuNTUgOS0zLjU1VjhjLTMuNDggMC02LjY0IDEuMzUtOSAzLjU1ek0xMiA4YzEuNjYgMCAzLTEuMzQgMy0zcy0xLjM0LTMtMy0zLTMgMS4zNC0zIDMgMS4zNCAzIDMgM3pcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGgyPkRvY3VtZW50YXRpb248L2gyPlxuICAgICAgICAgIDxhIDpocmVmPVwiYGh0dHBzOi8vc3ltZm9ueS5jb20vZG9jLyR7ZG9jVmVyc2lvbn0vaW5kZXguaHRtbGBcIj5cbiAgICAgICAgICAgIEd1aWRlcywgY29tcG9uZW50cywgcmVmZXJlbmNlc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZXNvdXJjZVwiPlxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgIDxwYXRoIGZpbGw9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMFYwelwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNOS40IDE2LjZMNC44IDEybDQuNi00LjZMOCA2bC02IDYgNiA2IDEuNC0xLjR6bTUuMiAwbDQuNi00LjYtNC42LTQuNkwxNiA2bDYgNi02IDYtMS40LTEuNHpcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGgyPlR1dG9yaWFsczwvaDI+XG4gICAgICAgICAgPGEgOmhyZWY9XCJgaHR0cHM6Ly9zeW1mb255LmNvbS9kb2MvJHtkb2NWZXJzaW9ufS9wYWdlX2NyZWF0aW9uLmh0bWxgXCI+XG4gICAgICAgICAgICBDcmVhdGUgeW91ciBmaXJzdCBwYWdlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJlc291cmNlXCI+XG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk0xNiAxMWMxLjY2IDAgMi45OS0xLjM0IDIuOTktM1MxNy42NiA1IDE2IDVjLTEuNjYgMC0zIDEuMzQtMyAzczEuMzQgMyAzIDN6bS04IDBjMS42NiAwIDIuOTktMS4zNCAyLjk5LTNTOS42NiA1IDggNUM2LjM0IDUgNSA2LjM0IDUgOHMxLjM0IDMgMyAzem0wIDJjLTIuMzMgMC03IDEuMTctNyAzLjVWMTloMTR2LTIuNWMwLTIuMzMtNC42Ny0zLjUtNy0zLjV6bTggMGMtLjI5IDAtLjYyLjAyLS45Ny4wNSAxLjE2Ljg0IDEuOTcgMS45NyAxLjk3IDMuNDVWMTloNnYtMi41YzAtMi4zMy00LjY3LTMuNS03LTMuNXpcIi8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGgyPkNvbW11bml0eTwvaDI+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vc3ltZm9ueS5jb20vY29tbXVuaXR5XCI+XG4gICAgICAgICAgICBDb25uZWN0LCBnZXQgaGVscCwgb3IgY29udHJpYnV0ZVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkPlxuXG4qIHtcbiAgLS1kYXJrLWNvbG9yOiBoc2xhKHYtYmluZCgnaHVlJyksIDIwJSwgNDUlLCAxKTtcbiAgLS1kYXJrLWNvbG9yNzU6IGhzbGEodi1iaW5kKCdodWUnKSwgMjAlLCA0NSUsIDAuNzUpO1xuICAtLWxpZ2h0LWNvbG9yOiBoc2xhKHYtYmluZCgnaHVlJyksIDIwJSwgOTUlLCAxKTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3I3NSk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udDogMTZweC8xLjUgc2Fucy1zZXJpZjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEsIGgyIHtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbWFyZ2luOiAwIDAgLjVlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbmEge1xuICBjb2xvcjogdmFyKC0tZGFyay1jb2xvcjc1KVxufVxuXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5jb2RlIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgNDVweCAtMTVweCBoc2wodi1iaW5kKCdodWUnKSwgMjAlLCAyJSk7XG4gIGNvbG9yOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXCJMaWJlcmF0aW9uIE1vbm9cIiwgXCJDb3VyaWVyIE5ld1wiLCBtb25vc3BhY2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICB6LWluZGV4OiAxO1xufVxuXG5zdmcge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG59XG5cbi53cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgYm90dG9tLCB2YXIoLS1kYXJrLWNvbG9yKSAwJSwgaHNsKHYtYmluZCgnaHVlJyksIDIwJSwgMTMlKSAxMDAlKTtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWNvbG9yKTtcbn1cblxuLmNvbnRhaW5lcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAycHg7XG4gIHdpZHRoOiAycHg7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDc3OHB4IDEwMTlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyNiksIDEwNzVweCAxNjg4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzUpLCAzODhweCAxMDIxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNTkpLCAxMjM4cHggNjI2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjkpLCA5OTdweCA5MDRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyNSksIDkyMXB4IDEzNDVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5OCksIDMzN3B4IDEyMzZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzOCksIDQ2MHB4IDU2OXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpLCA2OTBweCAxNDg4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNTQpLCA4NTlweCA5MjZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxNSksIDEyNzJweCA3OTFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSwgMjM4cHggMTI1NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMzKSwgMTQ4NnB4IDg5N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODgpLCA2NjdweCA2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDgpLCA4NTNweCA1MDRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0OCksIDEzMjlweCAxNzc4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMTcpLCA3NjhweCAxMzQwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OTIpLCA2MzFweCAxMzgzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTgpLCA5OTFweCAxNjAzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzkpLCAxNzc4cHggMTc2N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzg0KSwgMjg1cHggNTQ2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgMTIyNHB4IDEzMzNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3NiksIDExNTRweCAzOTdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3NCksIDEyMTBweCAxMDA0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTQpLCAxNjMycHggOTUzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODEpLCA0NDlweCAxMTQ0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDYpLCAxNDI2cHggNzcxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MzcpLCAxNDM4cHggMTYzNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTg0KSwgODA2cHggMTY4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MDcpLCA3MzFweCAxMDY3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MzQpLCAxNzMxcHggMTc4NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTI4KSwgMjNweCA5NzVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2OCksIDU3NXB4IDEwODhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3NiksIDEyMDVweCAxNjY4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDEpLCAxOHB4IDE0NTdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3NiksIDI1MnB4IDExNjNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxNiksIDE3NTJweCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNzQpLCAzODJweCA3NjdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3MyksIDEzM3B4IDE0NjJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcwNiksIDg1MXB4IDExNjZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUzNSksIDM3NHB4IDkyMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KSwgNTU0cHggMTU5OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYyKSwgMzE0cHggNjg1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xODcpLCAxNDQzcHggMjA5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOTcpLCAxNzc0cHggMTYyNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzIpLCA1OHB4IDI3OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjg0KSwgOTg2cHggMzM4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzIpLCA3MThweCAxMzU3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMTcpLCA3MjJweCA5ODNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2OCksIDExMjRweCA5OTJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5OSksIDU4MXB4IDYxOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDQpLCAxMTIwcHggMjg1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MjUpLCA3MDJweCAxMzhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxNiksIDI2MnB4IDc2N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTIpLCAxMjA0cHggMzhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5NyksIDExOTZweCA0MTBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1MyksIDcwN3B4IDY5OXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDgxKSwgMTU5MHB4IDE0ODhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1OSksIDg3OXB4IDE3NjNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0MSksIDEwNnB4IDY4NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTc1KSwgMTU4cHggNTY5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDkpLCA3MTFweCAxMjE5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NzYpLCAxMzM5cHggNTNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3NSksIDE0MTBweCAxNzJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0OSksIDE2MDFweCAxNDg0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45ODgpLCAxMzI4cHggMTc1MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODI3KSwgMTczM3B4IDE0NzVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2NyksIDU1OXB4IDc0MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIzKSwgNzcycHggODQ0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMzkpLCA2MDJweCA1MjBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4NCksIDExNThweCAxMDY3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNjYpLCAxNTYycHggNzMwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wODYpLCAxNzkycHggNjE1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzgpLCAxMDg1cHggMTE5MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU3KSwgMTQwMnB4IDEwODdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc5NyksIDU2OXB4IDE2ODVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5MiksIDE2MDhweCA1MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzAyKSwgMTY5N3B4IDEyNDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5NSksIDg5OXB4IDE0OTBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjczKSwgOTkzcHggOTAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjEpLCAxMTkzcHggMTAyM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKSwgMTIyNHB4IDE3NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzg2KSwgNzIxcHggMTMwOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjkxKSwgMTcwMnB4IDczMHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQxKSwgMTQ4MHB4IDE0OThweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1NSksIDE4MXB4IDE2MTJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU4OCksIDE3NzZweCA2NzlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyMSksIDg5MnB4IDcwNnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDU2KSwgODU5cHggMjY3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NjUpLCA3ODRweCAxMjg1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMjkpLCAxNTYxcHggMTE5OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzE1KSwgMjA1cHggNDIxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODQpLCAyMzZweCA0MDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE2NiksIDEyNTlweCA2ODlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyMSksIDQ0OHB4IDMxN3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDk1KSwgMTMxOHB4IDQ2NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjc1KSwgMTA1M3B4IDI5N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDM1KSwgNzE2cHggNTM4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjQpLCAzODFweCAyMDdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5MiksIDg3MXB4IDExNDBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM0MiksIDM2MXB4IDUzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45ODQpLCAxNTY1cHggMTU5M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTAyKSwgMTQ1cHggMjc3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NjYpLCAyMjBweCAxNTAzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzYpLCAxMDY4cHggMTQ3NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU2KSwgMTU0OHB4IDQ4M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzY4KSwgNzEwcHggMTAzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MDkpLCAxNjYwcHggOTIxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NTIpLCA0NjJweCAxMjUycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjUpLCAxMTIzcHggMTYyOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDA5KSwgMTI3NHB4IDcyOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpLCAxNzM5cHggNjc5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MyksIDE1NTBweCAxNTE4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSksIDE2MjRweCAzNDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1NyksIDEwMjNweCA1NzlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1NCksIDIxN3B4IDY2MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzMxKSwgMTUwNHB4IDU0OXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA1KSwgOTM5cHggNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzg5KSwgMjg0cHggNzM1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNTUpLCAxM3B4IDE2NzlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcxMiksIDEzN3B4IDE1OTJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxOSksIDExMTNweCA1MDVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1MSksIDE1ODRweCA1MTBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQxKSwgMzQ2cHggOTEzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOSksIDE5OHB4IDE0OTBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwMyksIDQ0N3B4IDExMjhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxNCksIDEzNTZweCAzMjRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyNCksIDY0OHB4IDY2N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU1KSwgNDQycHggMjYwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMiksIDIxMHB4IDQwMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjgyKSwgNDIycHggMTc3MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjcxKSwgMjc2cHggMzQ5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42ODMpLCAxMzFweCA1MzlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3NyksIDg5MnB4IDk0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wODEpLCAxMjk1cHggMjIycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjEpLCA1cHggMTcyN3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzExKSwgNzE0cHggMTE0OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQ2KSwgMTQ1NXB4IDExODJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxMyksIDEzNzBweCA3MDhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyNCksIDgxMnB4IDQzM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpLCAxMTEwcHggNTU4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDkpLCAxMTMycHggMTU0M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODY4KSwgNjQ0cHggNjEwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjYpLCAyNjlweCAxNDgxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODkpLCAxNzEycHggNTkwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMzkpLCAxMTU5cHggNTk5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OTIpLCAxNTUxcHggMjA5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMzMpLCAxMDIwcHggMTcyMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI4KSwgMjE2cHggMzczcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NjUpLCA4NzdweCA1MzJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4NiksIDEzMjZweCA4ODVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxNyksIDk3MnB4IDE3MDRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ5OSksIDc0OXB4IDE4MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzEyKSwgMTUxMXB4IDE2NTBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwMSksIDE0MzJweCAxODNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0NSksIDE1NDFweCAxMzM4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MSksIDUxM3B4IDE0MDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE3KSwgMTMxNHB4IDExOTdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4OSksIDgyNHB4IDE2NTlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU5NyksIDMwOHB4IDI5OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTE3KSwgMTIyNXB4IDY1OXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjI5KSwgMTI1M3B4IDI1N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMxKSwgMTY1M3B4IDE4NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTEzKSwgMzM2cHggNjE0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNDUpLCAxMDkzcHggODk4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTcpLCA3MzBweCA1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMSksIDc4NXB4IDY0NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTE2KSwgOTg5cHggNjc4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MTcpLCAxNTExcHggMTYxNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTM4KSwgNTg0cHggMTExN3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjMxKSwgNTM0cHggMTAxMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjY4KSwgMTMyNXB4IDE3NzhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5MyksIDE2MzJweCA3NTRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KSwgNzhweCAxMjU4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MiksIDc3OXB4IDE2OTFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3OCksIDI1M3B4IDE3MDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSwgMTM1OHB4IDI0NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI3KSwgMzYxcHggMTYyOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjM4KSwgMTEzNHB4IDIzMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzg3KSwgMTY4NXB4IDc3N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU2KSwgNTE1cHggNzI0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NjMpLCA1ODhweCAxNzI4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNTkpLCAxMTMycHggNDdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5MSksIDMxNXB4IDE0NDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4MiksIDc5cHggMjMzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMTcpLCAxNDk4cHggMTA1MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzU4KSwgMzBweCAxMDczcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzkpLCAxNjM3cHggNjIwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNDEpLCAxNzM2cHggMTY4M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjgyKSwgMTI5OHB4IDE1MDVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2MyksIDk3MnB4IDg1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NDEpLCAzNDlweCAxMzU2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NzIpLCAxNTQ1cHggMTQyOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU5KSwgMTA3NnB4IDQ2N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI0KSwgMTg5cHggMTY0N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODM4KSwgNDIzcHggMTcyMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzcxKSwgMTY5MXB4IDE3MTlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3NiksIDE3NDdweCA2NThweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1NSksIDE0OXB4IDE0OTJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkxMSksIDEyMDNweCAxMTM4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjQpLCA3ODFweCAxNTg0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjUpLCAxNjA5cHggMTU5NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjg4KSwgNDQ3cHggMTY1NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTY2KSwgOTE0cHggMTE1M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDg1KSwgNjAwcHggMTA1OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODIxKSwgODA0cHggNTA1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MDgpLCAxNTA2cHggNTg0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MTgpLCA1ODdweCAxMjkwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzEpLCAyNThweCA2MDBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0MyksIDMyOHB4IDM5NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDY1KSwgODQ2cHggNzgzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OTUpLCAxMTM4cHggMTI5NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzAzKSwgMTY2OHB4IDYzM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjcpLCAzMzdweCAxMDNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIwMiksIDEzMnB4IDk4NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzI2KSwgNDE0cHggNzU3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NTIpLCA4cHggMTMxMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzA3KSwgMTc5MXB4IDkxMHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQ2KSwgODQ0cHggMjE2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNTYpLCAxNTQ3cHggMTcyM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzMpLCAxMTg3cHggMzk4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OTgpLCAxNTUwcHggMTUyMHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDYyKSwgMTM0NnB4IDY1NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTgpLCA2NjhweCA3NzBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQyMiksIDE3NzRweCAxNDM1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wODkpLCA2OTNweCAxMDYxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTMpLCAxMzJweCAxNjg5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzcpLCA4OTRweCAxNTYxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OCksIDkwNnB4IDE3MDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2NyksIDExNDBweCAyOTdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1OCksIDEzcHggMTI4OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDY0KSwgMTc0NHB4IDQyM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODQ1KSwgMTE5cHggMTU0OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzY5KSwgMTI0OXB4IDEzMjFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI5KSwgMTIzcHggNzk1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OTcpLCAzOTBweCAxNTQycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NyksIDgyNXB4IDY2N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQ5KSwgMTA3MXB4IDg3NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpLCAxNDI4cHggMTc4NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjIyKSwgOTkzcHggNjk2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zOTkpLCAxNTg1cHggMjQ3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOTQpLCAxMzQwcHggMTMxMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjAzKSwgMTY0MHB4IDcyNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDI2KSwgMTE2MXB4IDEzOTdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyMiksIDk2NnB4IDExMzJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY5KSwgMTc4MnB4IDEyNzVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYwNiksIDExMTdweCAxNTMzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDgpLCAxMDI3cHggOTU5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NiksIDQ1OXB4IDgzOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpLCAxMTkycHggMjY1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjMpLCAxNzVweCA1MDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM3MSksIDYyNnB4IDE5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNDYpLCA0NnB4IDExNzNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyNCksIDU3M3B4IDkyNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIxKSwgMXB4IDI4M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQzKSwgNzc4cHggMTIxM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTI4KSwgNDM1cHggNTkzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNzgpLCAzMnB4IDM5NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUxKSwgMTAxOXB4IDEwNTVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4NSksIDE0MjNweCAxMjMzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNTQpLCA0OTRweCA4NDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyMiksIDY2N3B4IDE5NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjU1KSwgMTY3MXB4IDE5NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTAyKSwgNDAzcHggMTcxMHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjIzKSwgNjY1cHggMTU5N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODM5KSwgNjFweCAxNzQycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NjYpLCAxNDkwcHggMTY1NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQ2KSwgMTM2MXB4IDE2MDRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwMSksIDExOTFweCAxMDIzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODEpLCA1NTBweCAzNzhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU3MyksIDEzMzJweCAxMjM0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MjIpLCA3NjBweCAxMjA1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OTIpLCAxNTA2cHggMTMyOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIzKSwgMTEyNnB4IDgxM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ5KSwgNjdweCAyNDBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwMSksIDEyNXB4IDEzMDFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ2NCksIDY0M3B4IDM5MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTg5KSwgMTExNHB4IDE3NTZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMyMSksIDE2MDJweCA2OTlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3NCksIDUxMHB4IDM5M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTg1KSwgMTcxcHggMTIxN3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTMyKSwgMTIwMnB4IDEzNjJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyNiksIDExNjBweCAxMzI0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NjcpLCAxMjFweCAzMTlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk5MiksIDE0NzRweCA4MzVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg5KSwgMzU3cHggMTIxM3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEpLCA3ODNweCA5NzZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0MSksIDc1MHB4IDE1OTlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxNSksIDMyM3B4IDQ1MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTY2KSwgMTA3OHB4IDI4MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQ3KSwgMTE2NHB4IDQ2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yOTYpLCAxNzkycHggNzA1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODUpLCA4ODBweCAxMjg3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44OTQpLCA2MHB4IDE0MDJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxNiksIDc1MnB4IDg5NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODAzKSwgMjg1cHggMTUzNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTMpLCAxNTI4cHggNDAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MjcpLCA2NTFweCAxNzY3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNDYpLCAxNDk4cHggMTE5MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQyKSwgMzk0cHggMTc4NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU5KSwgMTMxOHB4IDlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU3NSksIDE2OTlweCAxNjc1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MTEpLCA4MnB4IDk4NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTA2KSwgOTQwcHggOTcwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NjIpLCAxNjI0cHggMjU5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MzcpLCAxNzgycHggMjIycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNTkpLCAxNTcycHggMTcyNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzE2KSwgMTA4MHB4IDE1NTdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0NSksIDE3MjdweCA2NDhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3MSksIDg5OXB4IDIzMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDQ1KSwgMTA2MXB4IDEwNzRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3OSksIDU1NnB4IDQ3OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTI0KSwgMzQzcHggMzU5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNjIpLCA3MTFweCAxMjU0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMjMpLCAxMzM1cHggMjQycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MzYpLCA5MzNweCAzOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzg0KSwgMTYyOXB4IDkwOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjg5KSwgMTgwMHB4IDIyOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzk5KSwgMTU4OXB4IDkyNnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA5KSwgOTc2cHggNjk0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NTUpLCAxMTYzcHggMTI0MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzU0KSwgMTY2MnB4IDE3ODRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4OCksIDY1NnB4IDEzODhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4OCksIDExOTBweCAxMTAwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjkpLCAzM3B4IDM5MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzAxKSwgNTZweCAxNDA1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjkpLCAxNDkxcHggMTE4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OTEpLCAxMjE2cHggOTk3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MjcpLCAxNjE3cHggNzEycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIDE2M3B4IDU1M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTc3KSwgMTAzcHggMTQwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MTYpLCAxMDk5cHggMTQwNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTY3KSwgMTQyM3B4IDU4N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzkyKSwgMTc5N3B4IDMwOXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTI2KSwgMzgxcHggMTQxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMDUpLCAxMjE0cHggODAycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODcpLCAyMTFweCA4MjlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSwgMTEwM3B4IDE1MDdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY0MiksIDI0NHB4IDEyMzFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4NCksIDExOHB4IDE3NDdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3NSksIDE4M3B4IDEyOTNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0OCksIDkxMXB4IDEzNjJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3MyksIDgxN3B4IDQ1N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDU5KSwgNzU2cHggMThweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0NCksIDQ4MXB4IDExMThweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3OCksIDM4MHB4IDEzOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMyKSwgMzIwcHggNjQ2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCksIDE3MjRweCAxNzE2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zODEpLCA5NzhweCAxMjY5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MzEpLCAxNTMwcHggMjU1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zMSksIDY2NHB4IDIwNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTEzKSwgNDc0cHggNzAzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MzIpLCAxNzIycHggMTIwNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzU2KSwgMTQ1M3B4IDgyMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk1KSwgNzMwcHggMTQ2OHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjk2KSwgOTI4cHggMTYxMHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODk0KSwgMTAzNnB4IDMwNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjk2KSwgMTU5MHB4IDE3MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzI5KSwgMjQ5cHggMTU5MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjc3KSwgMzU3cHggODFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyNiksIDcyNnB4IDEyNjFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE0OSksIDY0M3B4IDk0NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDA1KSwgMTI2M3B4IDk5NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTI0KSwgMTU2NHB4IDExMDdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc4OSksIDM4OHB4IDgzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40OTgpLCA3MTVweCA2ODFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1NSksIDE2MThweCAxNjI0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MyksIDE0MjNweCAxNTc2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MiksIDU2NHB4IDE3ODZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ4MiksIDEwNjZweCA3MzVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI3NiksIDcxNHB4IDExNzlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM5NSksIDk2N3B4IDEwMDZweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyMyksIDExMzZweCAxNzkwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MDEpLCAyMTVweCAxNjkwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NTcpLCAxNTAwcHggMTMzOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQxKSwgMTY3OXB4IDEwNjVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyNSksIDQyNnB4IDE0ODlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5MyksIDEyNzNweCA4NTNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxNyksIDY2NXB4IDExODlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUxMiksIDUyMHB4IDU1MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTI1KSwgMjUzcHggNDM4cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41ODgpLCAzNjlweCAxMzU0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44ODkpLCA3NDlweCAyMDVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI0MyksIDgyMHB4IDE0NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjA3KSwgMTczOXB4IDIyOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjY3KSwgMzkycHggNDk1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDQpLCA3MjFweCAxMDQ0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjMpLCA4MzNweCA5MTJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIyMiksIDg2NXB4IDE0OTlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAwMyksIDMxM3B4IDc1NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzI3KSwgNDM5cHggMTE4N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTcyKSwgNnB4IDEyMzhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY3NiksIDE1NjdweCAxMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzAxKSwgMTIxNnB4IDc1N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpLCA5MTZweCA1ODhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2NSksIDgzMXB4IDIxNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTk3KSwgMTI4OXB4IDY5N3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTY0KSwgMzA3cHggMzRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ2MiksIDNweCAxNjg1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NjQpLCAxMTE1cHggMTQyMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzAzKSwgMTQ1MXB4IDQ3M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQyKSwgMTM3NHB4IDEyMDVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4NiksIDE1NjRweCAzMTdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3MyksIDMwNHB4IDExMjdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1MyksIDQ0NnB4IDIxNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTM1KSwgMTU0MXB4IDQ1OXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzI1KSwgMTM4N3B4IDg4MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU3KSwgMTE3MnB4IDIyNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDg4KSwgMTQyMHB4IDYzN3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTE2KSwgMTM4NXB4IDkzMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjI1KSwgMTc0cHggMTQ3MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjQ5KSwgMjUycHggNzUwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNzcpLCA4MjVweCAxMDQycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MDcpLCA4NDBweCA3MDNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk0OCksIDE0NzhweCAxODAwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNTEpLCA5NXB4IDEzMDNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMzMiksIDExOThweCA3NDBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ0MyksIDE0MXB4IDMxMnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpLCAyOTFweCA3MjlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI4NCksIDEyMDlweCAxNTA2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NDEpLCAxMTg4cHggMzA3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNDEpLCA5NThweCA0MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU4KSwgMTMxMXB4IDE0ODRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA5NyksIDg0NnB4IDExNTNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg2MiksIDEyMzhweCAxMzc2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNzEpLCAxNDk5cHggMzQycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MTkpLCA2NDBweCA4MzNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2NiksIDcxMnB4IDU0NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk0KSwgMTY1NXB4IDE1NDJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgyKSwgNjE2cHggMzUzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NzEpLCAxNTkxcHggMTYzMXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpLCAxNjY0cHggNTkxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSksIDkzNHB4IDQ1NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTgpLCAxMTc1cHggNDc3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjYpLCAyOTlweCA5MTRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgzOSksIDUzNHB4IDI0M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk0KSwgNzczcHggMTEzNXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIpLCAxNjk2cHggMTQ3MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUyKSwgMTI1cHggNTIzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41OTEpLCAxMTk1cHggMzgycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MDQpLCAxNjA5cHggMTM3NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTc5KSwgODQzcHggODJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3MiksIDE2MDRweCA0NTFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0NSksIDEzMjJweCAxOTBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzNCksIDUyOHB4IDIyOHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTQ2KSwgMTQ3MHB4IDExNjlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkxMiksIDUwMnB4IDEzNTBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU5NCksIDEwMzFweCAyOThweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM2OCksIDExMDBweCAxNDI3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43OSksIDk3OXB4IDExMDVweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3MyksIDY0M3B4IDExODRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgxMyksIDE2MzZweCAxNzAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMTMpLCAxMDA0cHggMjQ1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40MTIpLCA2ODBweCA3NDBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2NyksIDE1OTlweCA1NjJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY2KSwgMjU2cHggMTYxN3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDYzKSwgMzE0cHggMTA5MnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzM0KSwgODcwcHggOTAwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MTIpLCA1MzBweCA2MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTk4KSwgMTc4NnB4IDg5NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzkyKSwgNjM2cHggMjEycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45OTcpLCA2NzJweCA1NDBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYzMiksIDExMThweCAxNjQ5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNzcpLCA0MzNweCA2NDdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkwMiksIDEyMDBweCAxNzM3cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNjIpLCAxMjU4cHggMTQzcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MjkpLCAxNjAzcHggMTM2NHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTkyKSwgNjZweCAxNzU2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42ODEpLCA5NDZweCAyNjNweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwNSksIDEyMTZweCAxMDgycHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yODcpLCA2cHggMTE0M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDE3KSwgMTYzMXB4IDEyNnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDQ5KSwgMzU3cHggMTU2NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTYzKSwgMTc1MnB4IDI2MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDIzKSwgMTI0N3B4IDE2MzFweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMxMiksIDMyMHB4IDY3MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjk1KSwgMTM3NXB4IDU5NnB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODU2KSwgMTQ1NnB4IDEzNDBweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU2NCksIDQ0N3B4IDEwNDRweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyMyksIDE3MzJweCA0NDdweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIxNiksIDE3NHB4IDE1MDlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM5OCksIDE2cHggODYxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45MDQpLCA4NzhweCAxMjk2cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMDUpLCAxNzI1cHggMTQ4M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzA0KSwgMjU1cHggNDhweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCA2MTBweCAxNjY5cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NjUpLCAxMDQ0cHggMTI1MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTgpLCA4ODRweCA4NjJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE5OCksIDk4NnB4IDU0NXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzc5KSwgMTYyMHB4IDIxN3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTU5KSwgMzgzcHggMTc2M3B4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTE4KSwgNTk1cHggOTc0cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNDcpLCAzNTlweCAxNHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODYzKSwgOTVweCAxMzg1cHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMTEpLCA0MTFweCAxMDMwcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMzgpLCAzNDVweCA3ODlweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc3MSksIDQyMXB4IDQ2MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMzKSwgOTcycHggMTE2MHB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzQyKSwgNTk3cHggMTA2MXB4IDAgMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzgxKSwgMTAxN3B4IDEwOTJweCAwIDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQzNyk7XG59XG5cbi53YXJuaW5nIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLndhcm5pbmcgc3ZnIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogMzJweDtcbiAgd2lkdGg6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLndhcm5pbmcgcCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNvbnRhaW5lciBzdmcud2F2ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGFpbmVyIC5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4uY29udGFpbmVyIC5sb2dvIHN2ZyB7XG4gIGZpbGw6IGhzbCh2LWJpbmQoJ2h1ZScpLCAyMCUsIDI2JSk7XG59XG5cbi53ZWxjb21lIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgbWFyZ2luLWJvdHRvbTogM2VtO1xufVxuXG4ud2VsY29tZSBzbWFsbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDg1JTtcbn1cblxuLnN0YXR1cyB7XG4gIHBhZGRpbmctYm90dG9tOiAyZW07XG59XG5cbi5zdGF0dXMgY29kZSwgLnN0YXR1cyAuc3RhdHVzLXJlYWR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZlcnNpb24ge1xuICBmb250LXNpemU6IDM0cHg7XG59XG5cbi5jaGVjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzdweDtcbiAgbWFyZ2luOiA2cHggOHB4IDZweCA2cHg7XG59XG5cbi5jaGVjayBzdmcge1xuICBmaWxsOiB2YXIoLS1saWdodC1jb2xvcik7XG59XG5cbi5zdGF0dXMtcmVhZHkge1xuICBtYXJnaW46IDI4cHggMCAwO1xufVxuXG4ucmVzb3VyY2VzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogMTM2NnB4O1xuICBwYWRkaW5nOiAyLjVlbSAwIDMuNWVtO1xufVxuXG4ucmVzb3VyY2VzIC5yb3cge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnJlc291cmNlIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5yZXNvdXJjZSBzdmcge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBmaWxsOiB2YXIoLS1kYXJrLWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ucmVzb3VyY2UgaDIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnJlc291cmNlIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5yZXNvdXJjZSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlLWluIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmFkZS1pbiB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICAuc2YtdG9vbGJhciB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZS1pbiAxcyAuMnMgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBmYWRlLWluIDFzIC4ycyBmb3J3YXJkcztcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgfVxuXG4gIC5yZXNvdXJjZXMgLnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLnJlc291cmNlIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gIH1cblxuICAuc3RhdHVzIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xuICB9XG5cbiAgLnN0YXR1cyBjb2RlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuXG4gIC5zdGF0dXMgLnN0YXR1cy1yZWFkeSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAucmVzb3VyY2Ugc3ZnIHtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7XG4gIH1cblxuICAucmVzb3VyY2UgaDIge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxuXG4gIC5yZXNvdXJjZSBhIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgYm9keSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLndhcm5pbmcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uYSB7XG4gICBmaWxsOiBub25lXG4gfVxuXG4uYiB7XG4gIGNsaXAtcGF0aDogdXJsKCNhKVxufVxuXG4uYywgLmQge1xuICBmaWxsOiB2YXIoLS1saWdodC1jb2xvcilcbn1cblxuLmQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcbn1cbjwvc3R5bGU+XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHJ1bnRpbWUgaGVscGVyIGZvciBzZXR0aW5nIHByb3BlcnRpZXMgb24gY29tcG9uZW50c1xuLy8gaW4gYSB0cmVlLXNoYWthYmxlIHdheVxuZXhwb3J0cy5kZWZhdWx0ID0gKHNmYywgcHJvcHMpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBzZmMuX192Y2NPcHRzIHx8IHNmYztcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgcHJvcHMpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59O1xuIiwiaW1wb3J0IHsgc3NyUmVuZGVyIH0gZnJvbSBcIi4vZGVmYXVsdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTE2MmQ0ODZcIlxuY29uc3Qgc2NyaXB0ID0ge31cblxuaW1wb3J0IGV4cG9ydENvbXBvbmVudCBmcm9tIFwiL2hvbWUvY3lkcmljay9Qcm9qZWN0cy9ob21ld29ya3hzL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3NzclJlbmRlcicsc3NyUmVuZGVyXSxbJ19fZmlsZScsXCJhc3NldHMvbGF5b3V0cy9kZWZhdWx0LnZ1ZVwiXV0pXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiaW1wb3J0IHsgc3NyUmVuZGVyIH0gZnJvbSBcIi4vd2VsY29tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjU1ZjU5OTkmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93ZWxjb21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3dlbGNvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL3dlbGNvbWUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjU1ZjU5OTkmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIvaG9tZS9jeWRyaWNrL1Byb2plY3RzL2hvbWV3b3JreHMvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9leHBvcnRIZWxwZXIuanNcIlxuY29uc3QgX19leHBvcnRzX18gPSAvKiNfX1BVUkVfXyovZXhwb3J0Q29tcG9uZW50KHNjcmlwdCwgW1snc3NyUmVuZGVyJyxzc3JSZW5kZXJdLFsnX19zY29wZUlkJyxcImRhdGEtdi0yNTVmNTk5OVwiXSxbJ19fZmlsZScsXCJhc3NldHMvcGFnZXMvd2VsY29tZS52dWVcIl1dKVxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3dlbGNvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZzZXR1cD10cnVlJmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi93ZWxjb21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL2luZXJ0aWEtdnVlM1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAaW5lcnRpYWpzL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdnVlL3NlcnZlci1yZW5kZXJlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlL3NlcnZlci1yZW5kZXJlclwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlU1NSQXBwLCBoIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdAdnVlL3NlcnZlci1yZW5kZXJlcidcbmltcG9ydCB7IGNyZWF0ZUluZXJ0aWFBcHAgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtdnVlMydcbmltcG9ydCBjcmVhdGVTZXJ2ZXIgZnJvbSAnQGluZXJ0aWFqcy9zZXJ2ZXInXG5pbXBvcnQgRGVmYXVsdExheW91dCBmcm9tICcuL2xheW91dHMvZGVmYXVsdCdcblxuY3JlYXRlU2VydmVyKChwYWdlKSA9PiBjcmVhdGVJbmVydGlhQXBwKHtcbiAgICBwYWdlLFxuICAgIHJlbmRlcjogcmVuZGVyVG9TdHJpbmcsXG4gICAgcmVzb2x2ZTogbmFtZSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VJbnRlcm5hbCA9IHJlcXVpcmUoYC4vcGFnZXMvJHtuYW1lfWApLmRlZmF1bHRcbiAgICAgICAgcGFnZUludGVybmFsLmxheW91dCA9IHBhZ2VJbnRlcm5hbC5sYXlvdXQgfHwgRGVmYXVsdExheW91dFxuICAgICAgICByZXR1cm4gcGFnZUludGVybmFsXG4gICAgfSxcbiAgICBzZXR1cCh7IGVsLCBBcHAsIHByb3BzLCBwbHVnaW4gfSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlU1NSQXBwKHsgcmVuZGVyOiAoKSA9PiBoKEFwcCwgcHJvcHMpIH0pXG4gICAgICAgICAgICAudXNlKHBsdWdpbilcbiAgICB9LFxufSkpO1xuIl0sIm5hbWVzIjpbImh1ZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRhcmtDb2xvciIsImFscGhhIiwibGlnaHRDb2xvciIsImRhcmtDb2xvcnMiLCJsaWdodENvbG9ycyIsIl9hdHRycyIsIiRwcm9wcyIsImNyZWF0ZVNTUkFwcCIsImgiLCJyZW5kZXJUb1N0cmluZyIsImNyZWF0ZUluZXJ0aWFBcHAiLCJjcmVhdGVTZXJ2ZXIiLCJEZWZhdWx0TGF5b3V0IiwicGFnZSIsInJlbmRlciIsInJlc29sdmUiLCJuYW1lIiwicGFnZUludGVybmFsIiwicmVxdWlyZSIsImxheW91dCIsInNldHVwIiwiZWwiLCJBcHAiLCJwcm9wcyIsInBsdWdpbiIsInVzZSJdLCJzb3VyY2VSb290IjoiIn0=