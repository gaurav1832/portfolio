"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/section-sm.js":
/*!**********************************!*\
  !*** ./components/section-sm.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\n\n\nconst StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n    shouldForwardProp: (prop)=>{\n        return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop) || prop === \"transition\";\n    }\n});\n_c = StyledDiv;\nconst SectionSm = (param)=>/*#__PURE__*/ {\n    let { children , delay =0  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {\n        py: 6,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledDiv, {\n            initial: {\n                y: 10,\n                opacity: 0\n            },\n            animate: {\n                y: 0,\n                opacity: 1\n            },\n            transition: {\n                duration: 0.8,\n                delay\n            },\n            mb: 6,\n            borderRadius: \"10px\",\n            minW: 500,\n            bgGradient: \"linear(red.100 0%, orange.100 25%, yellow.100 50%)\",\n            padding: (10, 5),\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/section-sm.js\",\n            lineNumber: 12,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/section-sm.js\",\n        lineNumber: 11,\n        columnNumber: 3\n    }, undefined);\n};\n_c1 = SectionSm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionSm);\nvar _c, _c1;\n$RefreshReg$(_c, \"StyledDiv\");\n$RefreshReg$(_c1, \"SectionSm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb24tc20uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUFzQztBQUM4QjtBQUVwRSxNQUFNSSxZQUFZSCx3REFBTUEsQ0FBQ0QscURBQVUsRUFBRTtJQUNuQ0UsbUJBQW1CSSxDQUFBQSxPQUFRO1FBQ3pCLE9BQU9KLG1FQUFpQkEsQ0FBQ0ksU0FBU0EsU0FBUztJQUM3QztBQUNGO0tBSk1GO0FBTU4sTUFBTUcsWUFBWSx1QkFDaEI7UUFEaUIsRUFBRUMsU0FBUSxFQUFFQyxPQUFRLEVBQUMsRUFBRTtXQUN4Qyw4REFBQ04sb0RBQU1BO1FBQUNPLElBQUk7a0JBQ1YsNEVBQUNOO1lBQ0NPLFNBQVM7Z0JBQUVDLEdBQUc7Z0JBQUlDLFNBQVM7WUFBRTtZQUM3QkMsU0FBUztnQkFBRUYsR0FBRztnQkFBR0MsU0FBUztZQUFFO1lBQzVCRSxZQUFZO2dCQUFFQyxVQUFVO2dCQUFLUDtZQUFNO1lBQ25DUSxJQUFJO1lBQ0pDLGNBQWM7WUFDZEMsTUFBTTtZQUNOQyxZQUFXO1lBQ1hDLFNBQVUsS0FBSSxDQUFDO3NCQUVkYjs7Ozs7Ozs7Ozs7QUFFRztNQWRKRDtBQWlCTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NlY3Rpb24tc20uanM/YzRlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgY2hha3JhLCBzaG91bGRGb3J3YXJkUHJvcCwgQ2VudGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuY29uc3QgU3R5bGVkRGl2ID0gY2hha3JhKG1vdGlvbi5kaXYsIHtcbiAgc2hvdWxkRm9yd2FyZFByb3A6IHByb3AgPT4ge1xuICAgIHJldHVybiBzaG91bGRGb3J3YXJkUHJvcChwcm9wKSB8fCBwcm9wID09PSAndHJhbnNpdGlvbidcbiAgfVxufSlcblxuY29uc3QgU2VjdGlvblNtID0gKHsgY2hpbGRyZW4sIGRlbGF5ID0gMCB9KSA9PiAoXG4gIDxDZW50ZXIgcHk9ezZ9PlxuICAgIDxTdHlsZWREaXZcbiAgICAgIGluaXRpYWw9e3sgeTogMTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBkZWxheSB9fVxuICAgICAgbWI9ezZ9XG4gICAgICBib3JkZXJSYWRpdXM9eycxMHB4J31cbiAgICAgIG1pblc9ezUwMH1cbiAgICAgIGJnR3JhZGllbnQ9XCJsaW5lYXIocmVkLjEwMCAwJSwgb3JhbmdlLjEwMCAyNSUsIHllbGxvdy4xMDAgNTAlKVwiXG4gICAgICBwYWRkaW5nPXsoMTAsIDUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1N0eWxlZERpdj5cbiAgPC9DZW50ZXI+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25TbVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsImNoYWtyYSIsInNob3VsZEZvcndhcmRQcm9wIiwiQ2VudGVyIiwiU3R5bGVkRGl2IiwiZGl2IiwicHJvcCIsIlNlY3Rpb25TbSIsImNoaWxkcmVuIiwiZGVsYXkiLCJweSIsImluaXRpYWwiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYiIsImJvcmRlclJhZGl1cyIsIm1pblciLCJiZ0dyYWRpZW50IiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/section-sm.js\n"));

/***/ })

});