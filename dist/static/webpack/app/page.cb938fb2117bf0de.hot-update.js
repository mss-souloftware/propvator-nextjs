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

/***/ "(app-pages-browser)/./app/components/AdvanceFilter/RangeBox.jsx":
/*!***************************************************!*\
  !*** ./app/components/AdvanceFilter/RangeBox.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RangeBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/slider/dist/chunk-O6IB4TCE.mjs\");\n/* harmony import */ var _RangeBox_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeBox.module.css */ \"(app-pages-browser)/./app/components/AdvanceFilter/RangeBox.module.css\");\n/* harmony import */ var _RangeBox_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RangeBox_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction RangeBox() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        100,\n        700\n    ]);\n    const handleMinChange = (e)=>{\n        const newMin = parseInt(e.target.value, 10);\n        if (newMin <= value[1] && newMin >= 0) {\n            setValue([\n                newMin,\n                value[1]\n            ]);\n        }\n    };\n    const handleMaxChange = (e)=>{\n        const newMax = parseInt(e.target.value, 10);\n        if (newMax >= value[0] && newMax <= 1000) {\n            setValue([\n                value[0],\n                newMax\n            ]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_RangeBox_module_css__WEBPACK_IMPORTED_MODULE_2___default().RangeBox), \" relative flex justify-between\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"inputWrapper flex flex-col w-10/12 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"numberPanel\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"maxPrice\",\n                                children: \"Max\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"maxPrice\",\n                                id: \"maxPrice\",\n                                value: value[1],\n                                onChange: handleMaxChange,\n                                placeholder: \"400\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"numberPanel\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"minPrice\",\n                                children: \"Min\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"number\",\n                                name: \"minPrice\",\n                                id: \"minPrice\",\n                                value: value[0],\n                                onChange: handleMinChange,\n                                placeholder: \"34\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-2 w-2/12 h-[150px] max-w-md items-start justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_3__.slider_default, {\n                    formatOptions: {\n                        style: \"currency\",\n                        currency: \"USD\"\n                    },\n                    step: 10,\n                    orientation: \"vertical\",\n                    maxValue: 1000,\n                    minValue: 0,\n                    value: value,\n                    onChange: setValue,\n                    className: \"max-w-md\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\Website - Custom\\\\propvator-nextjs\\\\app\\\\components\\\\AdvanceFilter\\\\RangeBox.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(RangeBox, \"W5Aju+flvrCJ0khe0VmaMGOGzLg=\");\n_c = RangeBox;\nvar _c;\n$RefreshReg$(_c, \"RangeBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FkdmFuY2VGaWx0ZXIvUmFuZ2VCb3guanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUN3QztBQUNHO0FBQ0E7QUFFNUIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztRQUFDO1FBQUs7S0FBSTtJQUU3QyxNQUFNTSxrQkFBa0IsQ0FBQ0M7UUFDdkIsTUFBTUMsU0FBU0MsU0FBU0YsRUFBRUcsTUFBTSxDQUFDTixLQUFLLEVBQUU7UUFDeEMsSUFBSUksVUFBVUosS0FBSyxDQUFDLEVBQUUsSUFBSUksVUFBVSxHQUFHO1lBQ3JDSCxTQUFTO2dCQUFDRztnQkFBUUosS0FBSyxDQUFDLEVBQUU7YUFBQztRQUM3QjtJQUNGO0lBRUEsTUFBTU8sa0JBQWtCLENBQUNKO1FBQ3ZCLE1BQU1LLFNBQVNILFNBQVNGLEVBQUVHLE1BQU0sQ0FBQ04sS0FBSyxFQUFFO1FBQ3hDLElBQUlRLFVBQVVSLEtBQUssQ0FBQyxFQUFFLElBQUlRLFVBQVUsTUFBTTtZQUN4Q1AsU0FBUztnQkFBQ0QsS0FBSyxDQUFDLEVBQUU7Z0JBQUVRO2FBQU87UUFDN0I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXLEdBQW1CLE9BQWhCWixzRUFBZSxFQUFDOzswQkFDakMsOERBQUNXO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQztnQ0FBTUMsU0FBUTswQ0FBVzs7Ozs7OzBDQUMxQiw4REFBQ0M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLElBQUc7Z0NBQ0hoQixPQUFPQSxLQUFLLENBQUMsRUFBRTtnQ0FDZmlCLFVBQVVWO2dDQUNWVyxhQUFZOzs7Ozs7Ozs7Ozs7a0NBR2hCLDhEQUFDVDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNDO2dDQUFNQyxTQUFROzBDQUFXOzs7Ozs7MENBQzFCLDhEQUFDQztnQ0FDQ0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsSUFBRztnQ0FDSGhCLE9BQU9BLEtBQUssQ0FBQyxFQUFFO2dDQUNmaUIsVUFBVWY7Z0NBQ1ZnQixhQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWxCLDhEQUFDVDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2IsNkRBQU1BO29CQUNMc0IsZUFBZTt3QkFBRUMsT0FBTzt3QkFBWUMsVUFBVTtvQkFBTTtvQkFDcERDLE1BQU07b0JBQ05DLGFBQVk7b0JBQ1pDLFVBQVU7b0JBQ1ZDLFVBQVU7b0JBQ1Z6QixPQUFPQTtvQkFDUGlCLFVBQVVoQjtvQkFDVlMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0F6RHdCWDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9BZHZhbmNlRmlsdGVyL1JhbmdlQm94LmpzeD83MzFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU2xpZGVyIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SYW5nZUJveC5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmdlQm94KCkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoWzEwMCwgNzAwXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1pbkNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdNaW4gPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgaWYgKG5ld01pbiA8PSB2YWx1ZVsxXSAmJiBuZXdNaW4gPj0gMCkge1xyXG4gICAgICBzZXRWYWx1ZShbbmV3TWluLCB2YWx1ZVsxXV0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1heENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdNYXggPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xyXG4gICAgaWYgKG5ld01heCA+PSB2YWx1ZVswXSAmJiBuZXdNYXggPD0gMTAwMCkge1xyXG4gICAgICBzZXRWYWx1ZShbdmFsdWVbMF0sIG5ld01heF0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlJhbmdlQm94fSByZWxhdGl2ZSBmbGV4IGp1c3RpZnktYmV0d2VlbmB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0V3JhcHBlciBmbGV4IGZsZXgtY29sIHctMTAvMTIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1iZXJQYW5lbFwiPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtYXhQcmljZVwiPk1heDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJtYXhQcmljZVwiXHJcbiAgICAgICAgICAgIGlkPVwibWF4UHJpY2VcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dmFsdWVbMV19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNYXhDaGFuZ2V9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSc0MDAnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtYmVyUGFuZWxcIj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWluUHJpY2VcIj5NaW48L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwibWluUHJpY2VcIlxyXG4gICAgICAgICAgICBpZD1cIm1pblByaWNlXCJcclxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlWzBdfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTWluQ2hhbmdlfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nMzQnXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHctMi8xMiBoLVsxNTBweF0gbWF4LXctbWQgaXRlbXMtc3RhcnQganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICBmb3JtYXRPcHRpb25zPXt7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIlVTRFwiIH19XHJcbiAgICAgICAgICBzdGVwPXsxMH1cclxuICAgICAgICAgIG9yaWVudGF0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgbWF4VmFsdWU9ezEwMDB9XHJcbiAgICAgICAgICBtaW5WYWx1ZT17MH1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtzZXRWYWx1ZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LW1kXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJTbGlkZXIiLCJzdHlsZXMiLCJSYW5nZUJveCIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVNaW5DaGFuZ2UiLCJlIiwibmV3TWluIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJoYW5kbGVNYXhDaGFuZ2UiLCJuZXdNYXgiLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiZm9ybWF0T3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJzdGVwIiwib3JpZW50YXRpb24iLCJtYXhWYWx1ZSIsIm1pblZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/AdvanceFilter/RangeBox.jsx\n"));

/***/ })

});