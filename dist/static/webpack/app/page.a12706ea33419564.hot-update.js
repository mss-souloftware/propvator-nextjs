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

/***/ "(app-pages-browser)/./app/data/range.js":
/*!***************************!*\
  !*** ./app/data/range.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tableDataBody.json */ \"(app-pages-browser)/./app/data/tableDataBody.json\");\n\nlet minPrice = Infinity;\nlet maxPrice = 0;\nlet mincommission = Infinity;\nlet maxcommission = 0;\nlet minleverage = Infinity;\nlet maxleverage = 0;\nlet mincredits = Infinity;\nlet maxcredits = 0;\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.price !== \"\") {\n        if (i.price < minPrice) {\n            minPrice = i.price;\n        }\n    }\n});\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.price !== \"\") {\n        if (i.price > maxPrice) {\n            maxPrice = i.price;\n        }\n    }\n});\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.commission !== \"\") {\n        if (i.commission < mincommission) {\n            mincommission = i.commission;\n        }\n    }\n});\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.commission !== \"\") {\n        if (i.commission > maxcommission) {\n            maxcommission = i.commission;\n        }\n    }\n});\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.leverage !== \"\") {\n        if (i.leverage < minleverage) {\n            minleverage = i.leverage;\n        }\n    }\n});\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.leverage !== \"\") {\n        if (i.leverage > maxleverage) {\n            maxleverage = i.leverage;\n        }\n    }\n});\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.credits !== \"\") {\n        if (i.credits < mincredits) {\n            mincredits = i.credits;\n        }\n    }\n});\n_tableDataBody_json__WEBPACK_IMPORTED_MODULE_0__.forEach((i)=>{\n    if (i.credits !== \"\") {\n        if (i.credits > maxcredits) {\n            maxcredits = i.credits;\n        }\n    }\n});\nconst rangeSlider = {\n    // price: [minPrice, maxPrice],\n    // commission: [mincommission, maxcommission],\n    // leverage: [minleverage, maxleverage],\n    // credits: [mincredits, maxcredits],\n    price: [\n        0,\n        maxPrice\n    ],\n    commission: [\n        0,\n        maxcommission\n    ],\n    leverage: [\n        0,\n        maxleverage\n    ],\n    credits: [\n        0,\n        maxcredits\n    ]\n};\nconsole.log(rangeSlider);\n/* harmony default export */ __webpack_exports__[\"default\"] = (rangeSlider);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXRhL3JhbmdlLmpzIiwibWFwcGluZ3MiOiI7O0FBQXdDO0FBR3hDLElBQUlDLFdBQVdDO0FBQ2YsSUFBSUMsV0FBVztBQUNmLElBQUlDLGdCQUFnQkY7QUFDcEIsSUFBSUcsZ0JBQWdCO0FBQ3BCLElBQUlDLGNBQWNKO0FBQ2xCLElBQUlLLGNBQWM7QUFDbEIsSUFBSUMsYUFBYU47QUFDakIsSUFBSU8sYUFBYTtBQUVqQlQsZ0RBQUlBLENBQUNVLE9BQU8sQ0FBQ0MsQ0FBQUE7SUFDVCxJQUFJQSxFQUFFQyxLQUFLLEtBQUssSUFBSTtRQUNoQixJQUFJRCxFQUFFQyxLQUFLLEdBQUdYLFVBQVU7WUFDcEJBLFdBQVdVLEVBQUVDLEtBQUs7UUFDdEI7SUFDSjtBQUNKO0FBQ0FaLGdEQUFJQSxDQUFDVSxPQUFPLENBQUNDLENBQUFBO0lBQ1QsSUFBSUEsRUFBRUMsS0FBSyxLQUFLLElBQUk7UUFDaEIsSUFBSUQsRUFBRUMsS0FBSyxHQUFHVCxVQUFVO1lBQ3BCQSxXQUFXUSxFQUFFQyxLQUFLO1FBQ3RCO0lBQ0o7QUFDSjtBQUVBWixnREFBSUEsQ0FBQ1UsT0FBTyxDQUFDQyxDQUFBQTtJQUNULElBQUlBLEVBQUVFLFVBQVUsS0FBSyxJQUFJO1FBQ3JCLElBQUlGLEVBQUVFLFVBQVUsR0FBR1QsZUFBZTtZQUM5QkEsZ0JBQWdCTyxFQUFFRSxVQUFVO1FBQ2hDO0lBQ0o7QUFDSjtBQUNBYixnREFBSUEsQ0FBQ1UsT0FBTyxDQUFDQyxDQUFBQTtJQUNULElBQUlBLEVBQUVFLFVBQVUsS0FBSyxJQUFJO1FBQ3JCLElBQUlGLEVBQUVFLFVBQVUsR0FBR1IsZUFBZTtZQUM5QkEsZ0JBQWdCTSxFQUFFRSxVQUFVO1FBQ2hDO0lBQ0o7QUFDSjtBQUVBYixnREFBSUEsQ0FBQ1UsT0FBTyxDQUFDQyxDQUFBQTtJQUNULElBQUlBLEVBQUVHLFFBQVEsS0FBSyxJQUFJO1FBQ25CLElBQUlILEVBQUVHLFFBQVEsR0FBR1IsYUFBYTtZQUMxQkEsY0FBY0ssRUFBRUcsUUFBUTtRQUM1QjtJQUNKO0FBQ0o7QUFDQWQsZ0RBQUlBLENBQUNVLE9BQU8sQ0FBQ0MsQ0FBQUE7SUFDVCxJQUFJQSxFQUFFRyxRQUFRLEtBQUssSUFBSTtRQUNuQixJQUFJSCxFQUFFRyxRQUFRLEdBQUdQLGFBQWE7WUFDMUJBLGNBQWNJLEVBQUVHLFFBQVE7UUFDNUI7SUFDSjtBQUNKO0FBRUFkLGdEQUFJQSxDQUFDVSxPQUFPLENBQUNDLENBQUFBO0lBQ1QsSUFBSUEsRUFBRUksT0FBTyxLQUFLLElBQUk7UUFDbEIsSUFBSUosRUFBRUksT0FBTyxHQUFHUCxZQUFZO1lBQ3hCQSxhQUFhRyxFQUFFSSxPQUFPO1FBQzFCO0lBQ0o7QUFDSjtBQUNBZixnREFBSUEsQ0FBQ1UsT0FBTyxDQUFDQyxDQUFBQTtJQUNULElBQUlBLEVBQUVJLE9BQU8sS0FBSyxJQUFJO1FBQ2xCLElBQUlKLEVBQUVJLE9BQU8sR0FBR04sWUFBWTtZQUN4QkEsYUFBYUUsRUFBRUksT0FBTztRQUMxQjtJQUNKO0FBQ0o7QUFHQSxNQUFNQyxjQUFjO0lBQ2hCLCtCQUErQjtJQUMvQiw4Q0FBOEM7SUFDOUMsd0NBQXdDO0lBQ3hDLHFDQUFxQztJQUNyQ0osT0FBTztRQUFDO1FBQUdUO0tBQVM7SUFDcEJVLFlBQVk7UUFBQztRQUFHUjtLQUFjO0lBQzlCUyxVQUFVO1FBQUM7UUFBR1A7S0FBWTtJQUMxQlEsU0FBUztRQUFDO1FBQUdOO0tBQVc7QUFDNUI7QUFDQVEsUUFBUUMsR0FBRyxDQUFDRjtBQUNaLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXRhL3JhbmdlLmpzPzkzNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRhdGEgZnJvbSAnLi90YWJsZURhdGFCb2R5Lmpzb24nO1xyXG5cclxuXHJcbmxldCBtaW5QcmljZSA9IEluZmluaXR5O1xyXG5sZXQgbWF4UHJpY2UgPSAwO1xyXG5sZXQgbWluY29tbWlzc2lvbiA9IEluZmluaXR5O1xyXG5sZXQgbWF4Y29tbWlzc2lvbiA9IDA7XHJcbmxldCBtaW5sZXZlcmFnZSA9IEluZmluaXR5O1xyXG5sZXQgbWF4bGV2ZXJhZ2UgPSAwO1xyXG5sZXQgbWluY3JlZGl0cyA9IEluZmluaXR5O1xyXG5sZXQgbWF4Y3JlZGl0cyA9IDA7XHJcblxyXG5kYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICBpZiAoaS5wcmljZSAhPT0gJycpIHtcclxuICAgICAgICBpZiAoaS5wcmljZSA8IG1pblByaWNlKSB7XHJcbiAgICAgICAgICAgIG1pblByaWNlID0gaS5wcmljZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuZGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgaWYgKGkucHJpY2UgIT09ICcnKSB7XHJcbiAgICAgICAgaWYgKGkucHJpY2UgPiBtYXhQcmljZSkge1xyXG4gICAgICAgICAgICBtYXhQcmljZSA9IGkucHJpY2VcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5kYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICBpZiAoaS5jb21taXNzaW9uICE9PSAnJykge1xyXG4gICAgICAgIGlmIChpLmNvbW1pc3Npb24gPCBtaW5jb21taXNzaW9uKSB7XHJcbiAgICAgICAgICAgIG1pbmNvbW1pc3Npb24gPSBpLmNvbW1pc3Npb25cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcbmRhdGEuZm9yRWFjaChpID0+IHtcclxuICAgIGlmIChpLmNvbW1pc3Npb24gIT09ICcnKSB7XHJcbiAgICAgICAgaWYgKGkuY29tbWlzc2lvbiA+IG1heGNvbW1pc3Npb24pIHtcclxuICAgICAgICAgICAgbWF4Y29tbWlzc2lvbiA9IGkuY29tbWlzc2lvblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmRhdGEuZm9yRWFjaChpID0+IHtcclxuICAgIGlmIChpLmxldmVyYWdlICE9PSAnJykge1xyXG4gICAgICAgIGlmIChpLmxldmVyYWdlIDwgbWlubGV2ZXJhZ2UpIHtcclxuICAgICAgICAgICAgbWlubGV2ZXJhZ2UgPSBpLmxldmVyYWdlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5kYXRhLmZvckVhY2goaSA9PiB7XHJcbiAgICBpZiAoaS5sZXZlcmFnZSAhPT0gJycpIHtcclxuICAgICAgICBpZiAoaS5sZXZlcmFnZSA+IG1heGxldmVyYWdlKSB7XHJcbiAgICAgICAgICAgIG1heGxldmVyYWdlID0gaS5sZXZlcmFnZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmRhdGEuZm9yRWFjaChpID0+IHtcclxuICAgIGlmIChpLmNyZWRpdHMgIT09ICcnKSB7XHJcbiAgICAgICAgaWYgKGkuY3JlZGl0cyA8IG1pbmNyZWRpdHMpIHtcclxuICAgICAgICAgICAgbWluY3JlZGl0cyA9IGkuY3JlZGl0c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuZGF0YS5mb3JFYWNoKGkgPT4ge1xyXG4gICAgaWYgKGkuY3JlZGl0cyAhPT0gJycpIHtcclxuICAgICAgICBpZiAoaS5jcmVkaXRzID4gbWF4Y3JlZGl0cykge1xyXG4gICAgICAgICAgICBtYXhjcmVkaXRzID0gaS5jcmVkaXRzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IHJhbmdlU2xpZGVyID0ge1xyXG4gICAgLy8gcHJpY2U6IFttaW5QcmljZSwgbWF4UHJpY2VdLFxyXG4gICAgLy8gY29tbWlzc2lvbjogW21pbmNvbW1pc3Npb24sIG1heGNvbW1pc3Npb25dLFxyXG4gICAgLy8gbGV2ZXJhZ2U6IFttaW5sZXZlcmFnZSwgbWF4bGV2ZXJhZ2VdLFxyXG4gICAgLy8gY3JlZGl0czogW21pbmNyZWRpdHMsIG1heGNyZWRpdHNdLFxyXG4gICAgcHJpY2U6IFswLCBtYXhQcmljZV0sXHJcbiAgICBjb21taXNzaW9uOiBbMCwgbWF4Y29tbWlzc2lvbl0sXHJcbiAgICBsZXZlcmFnZTogWzAsIG1heGxldmVyYWdlXSxcclxuICAgIGNyZWRpdHM6IFswLCBtYXhjcmVkaXRzXSxcclxufVxyXG5jb25zb2xlLmxvZyhyYW5nZVNsaWRlcilcclxuZXhwb3J0IGRlZmF1bHQgcmFuZ2VTbGlkZXI7Il0sIm5hbWVzIjpbImRhdGEiLCJtaW5QcmljZSIsIkluZmluaXR5IiwibWF4UHJpY2UiLCJtaW5jb21taXNzaW9uIiwibWF4Y29tbWlzc2lvbiIsIm1pbmxldmVyYWdlIiwibWF4bGV2ZXJhZ2UiLCJtaW5jcmVkaXRzIiwibWF4Y3JlZGl0cyIsImZvckVhY2giLCJpIiwicHJpY2UiLCJjb21taXNzaW9uIiwibGV2ZXJhZ2UiLCJjcmVkaXRzIiwicmFuZ2VTbGlkZXIiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/data/range.js\n"));

/***/ })

});