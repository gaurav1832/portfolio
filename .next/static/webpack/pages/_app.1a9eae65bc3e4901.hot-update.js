"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"./components/logo.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/index.mjs\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme-toggle-button */ \"./components/theme-toggle-button.js\");\n/* harmony import */ var _components_paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/paragraph */ \"./components/paragraph.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst LinkItem = (param)=>{\n    let { href , path , target , children , ...props } = param;\n    _s();\n    const active = path === href;\n    const inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)(\"gray.800\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        href: href,\n        scroll: false,\n        p: 2,\n        bg: active ? \"grassTeal\" : undefined,\n        color: active ? \"#202023\" : inactiveColor,\n        target: target,\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nconst MenuLink = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c1 = (props, ref)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n        ref: ref,\n        as: (next_link__WEBPACK_IMPORTED_MODULE_3___default()),\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n        lineNumber: 51,\n        columnNumber: 3\n    }, undefined));\n_c2 = MenuLink;\nconst Navbar = (props)=>{\n    _s1();\n    const { path  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)(\"#00\", \"#00\"),\n        css: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 2,\n        ...props,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {\n            display: \"flex\",\n            p: 2,\n            // maxW=\"container.lg\"\n            wrap: \"wrap\",\n            align: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                            as: \"h1\",\n                            size: \"md\",\n                            letterSpacing: \"tighter\",\n                            children: \"GauravGarwa\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 1,\n                        md: 0\n                    },\n                    padding: 5,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/blogs\",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_paragraph__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        children: \"Blogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"mailto: garwagaurav@gmail.com\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoMail, {}, void 0, false, {\n                                fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"https://github.com/gaurav1832\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoLogoGithub, {}, void 0, false, {\n                                fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"https://linkedin.com/in/gaurav1832\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_7__.IoLogoLinkedin, {}, void 0, false, {\n                                fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 118,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                    lineNumber: 82,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        ml: 2,\n                        display: {\n                            base: \"inline-block\",\n                            md: \"none\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {\n                            isLazy: true,\n                            id: \"navbar-menu\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuButton, {\n                                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton,\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.HamburgerIcon, {}, void 0, false, void 0, void 0),\n                                    variant: \"outline\",\n                                    \"aria-label\": \"Options\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuList, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                            as: MenuLink,\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                            as: MenuLink,\n                                            href: \"/projects\",\n                                            children: \"Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                            as: MenuLink,\n                                            href: \"/certifications\",\n                                            children: \"Certifications\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                            lineNumber: 137,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.MenuItem, {\n                                            as: MenuLink,\n                                            href: \"/blogs\",\n                                            children: \"Blogs\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n                    lineNumber: 121,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gauravgarwa/Documents/GitHub/portfolio/components/navbar.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue\n    ];\n});\n_c3 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"MenuLink$forwardRef\");\n$RefreshReg$(_c2, \"MenuLink\");\n$RefreshReg$(_c3, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0RBQVVBO29DQUNkcUQsb0JBQU0sOERBQUNsRCwyREFBYUE7b0NBQ3BCbUQsU0FBUTtvQ0FDUkMsY0FBVzs7Ozs7OzhDQUViLDhEQUFDekQsc0RBQVFBOztzREFDUCw4REFBQ0Qsc0RBQVFBOzRDQUFDc0IsSUFBSU07NENBQVViLE1BQUs7c0RBQVM7Ozs7OztzREFHdEMsOERBQUNmLHNEQUFRQTs0Q0FBQ3NCLElBQUlNOzRDQUFVYixNQUFLO3NEQUFZOzs7Ozs7c0RBR3pDLDhEQUFDZixzREFBUUE7NENBQUNzQixJQUFJTTs0Q0FBVWIsTUFBSztzREFBa0I7Ozs7OztzREFHL0MsOERBQUNmLHNEQUFRQTs0Q0FBQ3NCLElBQUlNOzRDQUFVYixNQUFLO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVdEQ7SUFoR01lOztRQVFJMUIsK0RBQWlCQTs7O01BUnJCMEI7QUFrR04sK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/NWI1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28nXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLFxuICBCb3gsXG4gIExpbmssXG4gIFN0YWNrLFxuICBIZWFkaW5nLFxuICBGbGV4LFxuICBNZW51LFxuICBNZW51SXRlbSxcbiAgTWVudUxpc3QsXG4gIE1lbnVCdXR0b24sXG4gIEljb25CdXR0b24sXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBDZW50ZXJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCB7IEhhbWJ1cmdlckljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJ1xuaW1wb3J0IFRoZW1lVG9nZ2xlQnV0dG9uIGZyb20gJy4vdGhlbWUtdG9nZ2xlLWJ1dHRvbidcbmltcG9ydCBQYXJhZ3JhcGggZnJvbSAnLi4vY29tcG9uZW50cy9wYXJhZ3JhcGgnXG5cbmltcG9ydCB7XG4gIElvTG9nb1R3aXR0ZXIsXG4gIElvTG9nb0luc3RhZ3JhbSxcbiAgSW9Mb2dvR2l0aHViLFxuICBJb0xvZ29MaW5rZWRpbixcbiAgSW9NYWlsXG59IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcblxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCB0YXJnZXQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcbiAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5LjgwMCcsICd3aGl0ZUFscGhhLjkwMCcpXG4gIHJldHVybiAoXG4gICAgPExpbmtcbiAgICAgIGFzPXtOZXh0TGlua31cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBzY3JvbGw9e2ZhbHNlfVxuICAgICAgcD17Mn1cbiAgICAgIGJnPXthY3RpdmUgPyAnZ3Jhc3NUZWFsJyA6IHVuZGVmaW5lZH1cbiAgICAgIGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfVxuICAgICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTGluaz5cbiAgKVxufVxuXG5jb25zdCBNZW51TGluayA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcbiAgPExpbmsgcmVmPXtyZWZ9IGFzPXtOZXh0TGlua30gey4uLnByb3BzfSAvPlxuKSlcblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHBhdGggfSA9IHByb3BzXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBwb3NpdGlvbj1cImZpeGVkXCJcbiAgICAgIGFzPVwibmF2XCJcbiAgICAgIHc9XCIxMDAlXCJcbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZSgnIzAwJywgJyMwMCcpfVxuICAgICAgY3NzPXt7IGJhY2tkcm9wRmlsdGVyOiAnYmx1cigxMHB4KScgfX1cbiAgICAgIHpJbmRleD17Mn1cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgcD17Mn1cbiAgICAgICAgLy8gbWF4Vz1cImNvbnRhaW5lci5sZ1wiXG4gICAgICAgIHdyYXA9XCJ3cmFwXCJcbiAgICAgICAgYWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiXG4gICAgICA+XG4gICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgbXI9ezV9PlxuICAgICAgICAgIDxMb2dvIC8+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJtZFwiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICBHYXVyYXZHYXJ3YVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnIH19XG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cbiAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICBtdD17eyBiYXNlOiAxLCBtZDogMCB9fVxuICAgICAgICAgIHBhZGRpbmc9ezV9XG4gICAgICAgID5cbiAgICAgICAgICB7LyogPExpbmtJdGVtIGhyZWY9XCIvYWJvdXRcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi9wcm9qZWN0c1wiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL2NlcnRpZmljYXRpb25zXCIgcGF0aD17cGF0aH0+XG4gICAgICAgICAgICBDZXJ0aWZpY2F0aW9uc1xuICAgICAgICAgIDwvTGlua0l0ZW0+ICovfVxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL2Jsb2dzXCI+XG4gICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgPGk+XG4gICAgICAgICAgICAgIDxQYXJhZ3JhcGg+QmxvZ3M8L1BhcmFncmFwaD5cbiAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwibWFpbHRvOiBnYXJ3YWdhdXJhdkBnbWFpbC5jb21cIj5cbiAgICAgICAgICAgIDxJb01haWwgLz5cbiAgICAgICAgICA8L0xpbmtJdGVtPlxuXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2F1cmF2MTgzMlwiPlxuICAgICAgICAgICAgPElvTG9nb0dpdGh1YiAvPlxuICAgICAgICAgIDwvTGlua0l0ZW0+XG5cbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cImh0dHBzOi8vbGlua2VkaW4uY29tL2luL2dhdXJhdjE4MzJcIj5cbiAgICAgICAgICAgIDxJb0xvZ29MaW5rZWRpbiAvPlxuICAgICAgICAgIDwvTGlua0l0ZW0+XG5cbiAgICAgICAgICA8VGhlbWVUb2dnbGVCdXR0b24gLz5cbiAgICAgICAgPC9TdGFjaz5cblxuICAgICAgICA8Qm94IGZsZXg9ezF9IGFsaWduPVwicmlnaHRcIj5cbiAgICAgICAgICA8Qm94IG1sPXsyfSBkaXNwbGF5PXt7IGJhc2U6ICdpbmxpbmUtYmxvY2snLCBtZDogJ25vbmUnIH19PlxuICAgICAgICAgICAgPE1lbnUgaXNMYXp5IGlkPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgICAgICBhcz17SWNvbkJ1dHRvbn1cbiAgICAgICAgICAgICAgICBpY29uPXs8SGFtYnVyZ2VySWNvbiAvPn1cbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIk9wdGlvbnNcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8TWVudUxpc3Q+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtNZW51TGlua30gaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TWVudUxpbmt9IGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gYXM9e01lbnVMaW5rfSBocmVmPVwiL2NlcnRpZmljYXRpb25zXCI+XG4gICAgICAgICAgICAgICAgICBDZXJ0aWZpY2F0aW9uc1xuICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGFzPXtNZW51TGlua30gaHJlZj1cIi9ibG9nc1wiPlxuICAgICAgICAgICAgICAgICAgQmxvZ3NcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIl0sIm5hbWVzIjpbImZvcndhcmRSZWYiLCJMb2dvIiwiTmV4dExpbmsiLCJDb250YWluZXIiLCJCb3giLCJMaW5rIiwiU3RhY2siLCJIZWFkaW5nIiwiRmxleCIsIk1lbnUiLCJNZW51SXRlbSIsIk1lbnVMaXN0IiwiTWVudUJ1dHRvbiIsIkljb25CdXR0b24iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkNlbnRlciIsIkhhbWJ1cmdlckljb24iLCJUaGVtZVRvZ2dsZUJ1dHRvbiIsIlBhcmFncmFwaCIsIklvTG9nb1R3aXR0ZXIiLCJJb0xvZ29JbnN0YWdyYW0iLCJJb0xvZ29HaXRodWIiLCJJb0xvZ29MaW5rZWRpbiIsIklvTWFpbCIsIkxpbmtJdGVtIiwiaHJlZiIsInBhdGgiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInByb3BzIiwiYWN0aXZlIiwiaW5hY3RpdmVDb2xvciIsImFzIiwic2Nyb2xsIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJNZW51TGluayIsInJlZiIsIk5hdmJhciIsInBvc2l0aW9uIiwidyIsImNzcyIsImJhY2tkcm9wRmlsdGVyIiwiekluZGV4IiwiZGlzcGxheSIsIndyYXAiLCJhbGlnbiIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJhbGlnbkl0ZW1zIiwiZmxleEdyb3ciLCJtdCIsInBhZGRpbmciLCJpIiwiZmxleCIsIm1sIiwiaXNMYXp5IiwiaWQiLCJpY29uIiwidmFyaWFudCIsImFyaWEtbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n"));

/***/ }),

/***/ "./components/paragraph.js":
/*!*********************************!*\
  !*** ./components/paragraph.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  text-align: justify;\\n  text-indent: 1em;\\n  hyphens: auto;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Paragraph = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Paragraph);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhcmFncmFwaC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7Ozs7Ozs7OztBQUFvQztBQUVwQyxNQUFNQyxZQUFZRCx5REFBUTtBQU0xQiwrREFBZUMsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhcmFncmFwaC5qcz85MGQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuXG5jb25zdCBQYXJhZ3JhcGggPSBzdHlsZWQucGBcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgdGV4dC1pbmRlbnQ6IDFlbTtcbiAgaHlwaGVuczogYXV0bztcbmBcblxuZXhwb3J0IGRlZmF1bHQgUGFyYWdyYXBoXG4iXSwibmFtZXMiOlsic3R5bGVkIiwiUGFyYWdyYXBoIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/paragraph.js\n"));

/***/ })

});