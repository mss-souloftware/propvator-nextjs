"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/system/dist/chunk-NT3GAERU.mjs\");\n/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header/Header */ \"(app-pages-browser)/./app/components/Header/Header.jsx\");\n/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Hero/Hero */ \"(app-pages-browser)/./app/components/Hero/Hero.jsx\");\n/* harmony import */ var _components_Guide_Guide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Guide/Guide */ \"(app-pages-browser)/./app/components/Guide/Guide.jsx\");\n/* harmony import */ var _components_AdvanceFilter_AdvanceFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AdvanceFilter/AdvanceFilter */ \"(app-pages-browser)/./app/components/AdvanceFilter/AdvanceFilter.jsx\");\n/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer/Footer */ \"(app-pages-browser)/./app/components/Footer/Footer.jsx\");\n/* harmony import */ var _components_Newsletter_Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Newsletter/Newsletter */ \"(app-pages-browser)/./app/components/Newsletter/Newsletter.jsx\");\n/* harmony import */ var _components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Testimonials/Testimonials */ \"(app-pages-browser)/./app/components/Testimonials/Testimonials.jsx\");\n/* harmony import */ var _app_data_tableDataBody_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/data/tableDataBody.json */ \"(app-pages-browser)/./app/data/tableDataBody.json\");\n/* harmony import */ var _components_FeatureTable_FeatureTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FeatureTable/FeatureTable */ \"(app-pages-browser)/./app/components/FeatureTable/FeatureTable.jsx\");\n/* harmony import */ var _app_data_range__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/app/data/range */ \"(app-pages-browser)/./app/data/range.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"(app-pages-browser)/./node_modules/next/dist/client/components/noop-head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_app_data_tableDataBody_json__WEBPACK_IMPORTED_MODULE_9__);\n    const [filter, setfilter] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        hasTempered: false,\n        brands: {\n            \"alpha capital group\": false,\n            \"aquafunded\": false,\n            \"blue guardian\": false,\n            \"breakout\": false,\n            \"brightfunded\": false,\n            \"crypto fund trader\": false,\n            \"e8 markets\": false,\n            \"finotive funding\": false,\n            \"for traders\": false,\n            \"ftmo\": false,\n            \"funded elite\": false,\n            \"funded trading plus\": false,\n            \"fundednext\": false,\n            \"funding frontier\": false,\n            \"funding pips\": false,\n            \"funding traders\": false,\n            \"fxify\": false,\n            \"glow node\": false,\n            \"goat funded trader\": false,\n            \"instant funding\": false,\n            \"lark funding\": false,\n            \"maven\": false,\n            \"ment funding\": false,\n            \"myfundedfx\": false,\n            \"the trading pit\": false\n        },\n        sizeType: {\n            \"5\": false,\n            \"10\": false,\n            \"25\": false,\n            \"50\": false,\n            \"100\": false,\n            \"200\": false\n        },\n        accountTypes: {\n            \"instant\": false,\n            \"1 step\": false,\n            \"2 steps\": false,\n            \"3 steps\": false\n        },\n        countries: {\n            \"usa\": false,\n            \"pakistan\": false,\n            \"nigeria\": true,\n            \"iran\": false,\n            \"turkiye\": true,\n            \"dubai\": true\n        },\n        platforms: {\n            \"mt4\": false,\n            \"mt5\": false,\n            \"ctrader\": false,\n            \"dxtrade\": false,\n            \"tradelocker\": false,\n            \"match trader\": false\n        },\n        broker: {\n            \"think markets\": false,\n            \"purple trading\": false,\n            \"virtual markets\": false,\n            \"capital markets\": false,\n            \"match trade\": false,\n            \"finesse fx\": false,\n            \"taurex\": false,\n            \"fxpig\": false,\n            \"fxflat\": false,\n            \"gbe brokers\": false,\n            \"cbt limited\": false,\n            \"own broker\": false\n        },\n        assetType: {\n            forex: false,\n            futures: false,\n            stocks: false,\n            crypto: false,\n            indices: false,\n            commodities: false\n        },\n        rangeSlider: _app_data_range__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_13__.NextUIProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"shortcut icon\",\n                    href: \"/Images/Global/favicon.png\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                filter: filter,\n                setfilter: setfilter\n            }, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AdvanceFilter_AdvanceFilter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                filter: filter,\n                setfilter: setfilter,\n                data: data,\n                setData: setData\n            }, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FeatureTable_FeatureTable__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                data: data,\n                setData: setData,\n                filter: filter,\n                setfilter: setfilter\n            }, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Guide_Guide__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Testimonials_Testimonials__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Newsletter_Newsletter__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\page.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Kb8v5UblW5xk+lrv2vucW6Iv9ZI=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDa0I7QUFDSDtBQUNOO0FBQ0c7QUFDd0I7QUFDckI7QUFDWTtBQUNNO0FBQ1I7QUFDUTtBQUN2QjtBQUNkO0FBRWQsU0FBU2E7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQ1MseURBQWFBO0lBQzlDLE1BQU0sQ0FBQ08sUUFBUUMsVUFBVSxHQUFHakIsK0NBQVFBLENBQUM7UUFDbkNrQixhQUFhO1FBQ2JDLFFBQVE7WUFDTix1QkFBdUI7WUFDdkIsY0FBYztZQUNkLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLHNCQUFzQjtZQUN0QixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixRQUFRO1lBQ1IsZ0JBQWdCO1lBQ2hCLHVCQUF1QjtZQUN2QixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsU0FBUztZQUNULGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsbUJBQW1CO1lBQ25CLGdCQUFnQjtZQUNoQixTQUFTO1lBQ1QsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxtQkFBbUI7UUFDckI7UUFDQUMsVUFBVTtZQUNSLEtBQUs7WUFDTCxNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixPQUFPO1lBQ1AsT0FBTztRQUNUO1FBQ0FDLGNBQWM7WUFDWixXQUFXO1lBQ1gsVUFBVTtZQUNWLFdBQVc7WUFDWCxXQUFXO1FBQ2I7UUFDQUMsV0FBVztZQUNULE9BQU87WUFDUCxZQUFZO1lBQ1osV0FBVztZQUNYLFFBQVE7WUFDUixXQUFXO1lBQ1gsU0FBUztRQUNYO1FBQ0FDLFdBQVc7WUFDVCxPQUFPO1lBQ1AsT0FBTztZQUNQLFdBQVc7WUFDWCxXQUFXO1lBQ1gsZUFBZTtZQUNmLGdCQUFnQjtRQUNsQjtRQUNBQyxRQUFRO1lBQ04saUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixjQUFjO1lBQ2QsVUFBVTtZQUNWLFNBQVM7WUFDVCxVQUFVO1lBQ1YsZUFBZTtZQUNmLGVBQWU7WUFDZixjQUFjO1FBQ2hCO1FBQ0FDLFdBQVc7WUFDVEMsT0FBTztZQUNQQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsUUFBUTtZQUNSQyxTQUFTO1lBQ1RDLGFBQWE7UUFDZjtRQUNBcEIsV0FBV0EsMERBQUFBO0lBQ2I7SUFDQSxxQkFDRSw4REFBQ1YsOERBQWNBOzswQkFDYiw4REFBQ1csbURBQUlBOzBCQUNILDRFQUFDb0I7b0JBQUtDLEtBQUk7b0JBQWdCQyxNQUFLOzs7Ozs7Ozs7OzswQkFFakMsOERBQUNoQyxpRUFBTUE7Ozs7OzBCQUNQLDhEQUFDQyw2REFBSUE7Z0JBQUNhLFFBQVFBO2dCQUFRQyxXQUFXQTs7Ozs7OzBCQUNqQyw4REFBQ1osK0VBQWFBO2dCQUFDVyxRQUFRQTtnQkFBUUMsV0FBV0E7Z0JBQVdILE1BQU1BO2dCQUFNQyxTQUFTQTs7Ozs7OzBCQUMxRSw4REFBQ0wsOEVBQVlBO2dCQUFDSSxNQUFNQTtnQkFBTUMsU0FBU0E7Z0JBQVNDLFFBQVFBO2dCQUFRQyxXQUFXQTs7Ozs7OzBCQUN2RSw4REFBQ2IsK0RBQUtBOzs7OzswQkFDTiw4REFBQ0ksNkVBQVlBOzs7OzswQkFDYiw4REFBQ0QseUVBQVVBOzs7OzswQkFDWCw4REFBQ0QsaUVBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBcEd3Qk87S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanM/YmU2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgSGVybyBmcm9tIFwiLi9jb21wb25lbnRzL0hlcm8vSGVyb1wiO1xyXG5pbXBvcnQgR3VpZGUgZnJvbSBcIi4vY29tcG9uZW50cy9HdWlkZS9HdWlkZVwiO1xyXG5pbXBvcnQgQWR2YW5jZUZpbHRlciBmcm9tIFwiLi9jb21wb25lbnRzL0FkdmFuY2VGaWx0ZXIvQWR2YW5jZUZpbHRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgTmV3c2xldHRlciBmcm9tIFwiLi9jb21wb25lbnRzL05ld3NsZXR0ZXIvTmV3c2xldHRlclwiO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gXCIuL2NvbXBvbmVudHMvVGVzdGltb25pYWxzL1Rlc3RpbW9uaWFsc1wiO1xyXG5pbXBvcnQgdGFibGVCb2R5RGF0YSBmcm9tICdAL2FwcC9kYXRhL3RhYmxlRGF0YUJvZHkuanNvbic7XHJcbmltcG9ydCBGZWF0dXJlVGFibGUgZnJvbSBcIi4vY29tcG9uZW50cy9GZWF0dXJlVGFibGUvRmVhdHVyZVRhYmxlXCI7XHJcbmltcG9ydCByYW5nZVNsaWRlciBmcm9tIFwiQC9hcHAvZGF0YS9yYW5nZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHRhYmxlQm9keURhdGEpO1xyXG4gIGNvbnN0IFtmaWx0ZXIsIHNldGZpbHRlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBoYXNUZW1wZXJlZDogZmFsc2UsXHJcbiAgICBicmFuZHM6IHtcclxuICAgICAgXCJhbHBoYSBjYXBpdGFsIGdyb3VwXCI6IGZhbHNlLFxyXG4gICAgICBcImFxdWFmdW5kZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiYmx1ZSBndWFyZGlhblwiOiBmYWxzZSxcclxuICAgICAgXCJicmVha291dFwiOiBmYWxzZSxcclxuICAgICAgXCJicmlnaHRmdW5kZWRcIjogZmFsc2UsXHJcbiAgICAgIFwiY3J5cHRvIGZ1bmQgdHJhZGVyXCI6IGZhbHNlLFxyXG4gICAgICBcImU4IG1hcmtldHNcIjogZmFsc2UsXHJcbiAgICAgIFwiZmlub3RpdmUgZnVuZGluZ1wiOiBmYWxzZSxcclxuICAgICAgXCJmb3IgdHJhZGVyc1wiOiBmYWxzZSxcclxuICAgICAgXCJmdG1vXCI6IGZhbHNlLFxyXG4gICAgICBcImZ1bmRlZCBlbGl0ZVwiOiBmYWxzZSxcclxuICAgICAgXCJmdW5kZWQgdHJhZGluZyBwbHVzXCI6IGZhbHNlLFxyXG4gICAgICBcImZ1bmRlZG5leHRcIjogZmFsc2UsXHJcbiAgICAgIFwiZnVuZGluZyBmcm9udGllclwiOiBmYWxzZSxcclxuICAgICAgXCJmdW5kaW5nIHBpcHNcIjogZmFsc2UsXHJcbiAgICAgIFwiZnVuZGluZyB0cmFkZXJzXCI6IGZhbHNlLFxyXG4gICAgICBcImZ4aWZ5XCI6IGZhbHNlLFxyXG4gICAgICBcImdsb3cgbm9kZVwiOiBmYWxzZSxcclxuICAgICAgXCJnb2F0IGZ1bmRlZCB0cmFkZXJcIjogZmFsc2UsXHJcbiAgICAgIFwiaW5zdGFudCBmdW5kaW5nXCI6IGZhbHNlLFxyXG4gICAgICBcImxhcmsgZnVuZGluZ1wiOiBmYWxzZSxcclxuICAgICAgXCJtYXZlblwiOiBmYWxzZSxcclxuICAgICAgXCJtZW50IGZ1bmRpbmdcIjogZmFsc2UsXHJcbiAgICAgIFwibXlmdW5kZWRmeFwiOiBmYWxzZSxcclxuICAgICAgXCJ0aGUgdHJhZGluZyBwaXRcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgc2l6ZVR5cGU6IHtcclxuICAgICAgXCI1XCI6IGZhbHNlLFxyXG4gICAgICBcIjEwXCI6IGZhbHNlLFxyXG4gICAgICBcIjI1XCI6IGZhbHNlLFxyXG4gICAgICBcIjUwXCI6IGZhbHNlLFxyXG4gICAgICBcIjEwMFwiOiBmYWxzZSxcclxuICAgICAgXCIyMDBcIjogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgYWNjb3VudFR5cGVzOiB7XHJcbiAgICAgIFwiaW5zdGFudFwiOiBmYWxzZSxcclxuICAgICAgXCIxIHN0ZXBcIjogZmFsc2UsXHJcbiAgICAgIFwiMiBzdGVwc1wiOiBmYWxzZSxcclxuICAgICAgXCIzIHN0ZXBzXCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY291bnRyaWVzOiB7XHJcbiAgICAgIFwidXNhXCI6IGZhbHNlLFxyXG4gICAgICBcInBha2lzdGFuXCI6IGZhbHNlLFxyXG4gICAgICBcIm5pZ2VyaWFcIjogdHJ1ZSxcclxuICAgICAgXCJpcmFuXCI6IGZhbHNlLFxyXG4gICAgICBcInR1cmtpeWVcIjogdHJ1ZSxcclxuICAgICAgXCJkdWJhaVwiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGxhdGZvcm1zOiB7XHJcbiAgICAgIFwibXQ0XCI6IGZhbHNlLFxyXG4gICAgICBcIm10NVwiOiBmYWxzZSxcclxuICAgICAgXCJjdHJhZGVyXCI6IGZhbHNlLFxyXG4gICAgICBcImR4dHJhZGVcIjogZmFsc2UsXHJcbiAgICAgIFwidHJhZGVsb2NrZXJcIjogZmFsc2UsXHJcbiAgICAgIFwibWF0Y2ggdHJhZGVyXCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYnJva2VyOiB7XHJcbiAgICAgIFwidGhpbmsgbWFya2V0c1wiOiBmYWxzZSxcclxuICAgICAgXCJwdXJwbGUgdHJhZGluZ1wiOiBmYWxzZSxcclxuICAgICAgXCJ2aXJ0dWFsIG1hcmtldHNcIjogZmFsc2UsXHJcbiAgICAgIFwiY2FwaXRhbCBtYXJrZXRzXCI6IGZhbHNlLFxyXG4gICAgICBcIm1hdGNoIHRyYWRlXCI6IGZhbHNlLFxyXG4gICAgICBcImZpbmVzc2UgZnhcIjogZmFsc2UsXHJcbiAgICAgIFwidGF1cmV4XCI6IGZhbHNlLFxyXG4gICAgICBcImZ4cGlnXCI6IGZhbHNlLFxyXG4gICAgICBcImZ4ZmxhdFwiOiBmYWxzZSxcclxuICAgICAgXCJnYmUgYnJva2Vyc1wiOiBmYWxzZSxcclxuICAgICAgXCJjYnQgbGltaXRlZFwiOiBmYWxzZSxcclxuICAgICAgXCJvd24gYnJva2VyXCI6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgYXNzZXRUeXBlOiB7XHJcbiAgICAgIGZvcmV4OiBmYWxzZSxcclxuICAgICAgZnV0dXJlczogZmFsc2UsXHJcbiAgICAgIHN0b2NrczogZmFsc2UsXHJcbiAgICAgIGNyeXB0bzogZmFsc2UsXHJcbiAgICAgIGluZGljZXM6IGZhbHNlLFxyXG4gICAgICBjb21tb2RpdGllczogZmFsc2VcclxuICAgIH0sXHJcbiAgICByYW5nZVNsaWRlclxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dFVJUHJvdmlkZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL0ltYWdlcy9HbG9iYWwvZmF2aWNvbi5wbmdcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPEhlcm8gZmlsdGVyPXtmaWx0ZXJ9IHNldGZpbHRlcj17c2V0ZmlsdGVyfSAvPlxyXG4gICAgICA8QWR2YW5jZUZpbHRlciBmaWx0ZXI9e2ZpbHRlcn0gc2V0ZmlsdGVyPXtzZXRmaWx0ZXJ9IGRhdGE9e2RhdGF9IHNldERhdGE9e3NldERhdGF9IC8+XHJcbiAgICAgIDxGZWF0dXJlVGFibGUgZGF0YT17ZGF0YX0gc2V0RGF0YT17c2V0RGF0YX0gZmlsdGVyPXtmaWx0ZXJ9IHNldGZpbHRlcj17c2V0ZmlsdGVyfSAvPlxyXG4gICAgICA8R3VpZGUgLz5cclxuICAgICAgPFRlc3RpbW9uaWFscyAvPlxyXG4gICAgICA8TmV3c2xldHRlciAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L05leHRVSVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTmV4dFVJUHJvdmlkZXIiLCJIZWFkZXIiLCJIZXJvIiwiR3VpZGUiLCJBZHZhbmNlRmlsdGVyIiwiRm9vdGVyIiwiTmV3c2xldHRlciIsIlRlc3RpbW9uaWFscyIsInRhYmxlQm9keURhdGEiLCJGZWF0dXJlVGFibGUiLCJyYW5nZVNsaWRlciIsIkhlYWQiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJmaWx0ZXIiLCJzZXRmaWx0ZXIiLCJoYXNUZW1wZXJlZCIsImJyYW5kcyIsInNpemVUeXBlIiwiYWNjb3VudFR5cGVzIiwiY291bnRyaWVzIiwicGxhdGZvcm1zIiwiYnJva2VyIiwiYXNzZXRUeXBlIiwiZm9yZXgiLCJmdXR1cmVzIiwic3RvY2tzIiwiY3J5cHRvIiwiaW5kaWNlcyIsImNvbW1vZGl0aWVzIiwibGluayIsInJlbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});