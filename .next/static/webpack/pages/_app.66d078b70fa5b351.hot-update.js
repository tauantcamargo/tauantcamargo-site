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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layouts_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/logo */ \"./components/layouts/logo.js\");\n/* harmony import */ var _theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-toggle-button */ \"./components/theme-toggle-button.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar LinkItem = function(param) {\n    var href = param.href, path = param.path, children = param.children;\n    _s();\n    var active = path === href;\n    var inactiveColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"gray200\", \"whiteAlpha.900\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {\n            p: 2,\n            bg: active ? \"glassTeal\" : undefined,\n            color: active ? \"#202023\" : inactiveColor,\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(LinkItem, \"dl0xx8ZlQuUn9JhHFu16yTlHTaE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c = LinkItem;\nvar Navbar = function(props) {\n    _s1();\n    var path = props.path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, _objectSpread({\n        position: \"fixed\",\n        as: \"nav\",\n        w: \"100%\",\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"#ffffff40\", \"#20202380\"),\n        style: {\n            backdropFilter: \"blur(10px)\"\n        },\n        zIndex: 1\n    }, props, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {\n            display: \"flex\",\n            p: 2,\n            maxW: \"container.md\",\n            wrap: \"wrap\",\n            align: \"center\",\n            alignItems: \"center\",\n            justify: \"space-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                    align: \"center\",\n                    mr: 5,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                        as: \"h1\",\n                        size: \"lg\",\n                        letterSpacing: \"tighter\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    display: {\n                        base: \"none\",\n                        md: \"flex\"\n                    },\n                    width: {\n                        base: \"full\",\n                        md: \"auto\"\n                    },\n                    alignItems: \"center\",\n                    flexGrow: 1,\n                    mt: {\n                        base: 4,\n                        md: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/about\",\n                            path: path,\n                            children: \"About me\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/works\",\n                            path: path,\n                            children: \"Works\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkItem, {\n                            href: \"/contact\",\n                            path: path,\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    flex: 1,\n                    align: \"right\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_toggle_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, _this)\n    }), void 0, false, {\n        fileName: \"/Users/tauancamargo/Development/Projects/bunch/bunch-homesite/components/navbar.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_s1(Navbar, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c1 = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c, _c1;\n$RefreshReg$(_c, \"LinkItem\");\n$RefreshReg$(_c1, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsSUFBSSxFQUFFQSxJQUFJO3NDQUFFLFNBRXRDOzs7OztpQ0FBVzs7Ozs7O3lCQUNMOzhCQUVSLDhEQUFDWixpREFBRztvQkFBQzJDLElBQUksRUFBRSxDQUFDO29CQUFFWixLQUFLLEVBQUMsT0FBTzs4QkFDekIsNEVBQUN0Qiw0REFBaUI7Ozs7NkJBQUc7Ozs7O3lCQTZCakI7Ozs7OztpQkFDSTs7Ozs7YUFDUixDQUNQO0NBQ0Y7SUFoRktXLE1BQU07O1FBT0ZkLCtEQUFpQjs7O0FBUHJCYyxNQUFBQSxNQUFNO0FBa0ZaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2YmFyLmpzPzViNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEZsZXgsIEhlYWRpbmcsIExpbmssIFN0YWNrLCB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTG9nbyBmcm9tICcuL2xheW91dHMvbG9nbydcbmltcG9ydCBUaGVtZVRvZ2dsZUJ1dHRvbiBmcm9tIFwiLi90aGVtZS10b2dnbGUtYnV0dG9uXCJcblxuY29uc3QgTGlua0l0ZW0gPSAoeyBocmVmLCBwYXRoLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGFjdGl2ZSA9IHBhdGggPT09IGhyZWZcbiAgY29uc3QgaW5hY3RpdmVDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKCdncmF5MjAwJywgJ3doaXRlQWxwaGEuOTAwJylcblxuICByZXR1cm4gKFxuICAgIDxOZXh0TGluayBocmVmPXtocmVmfT5cbiAgICAgIDxMaW5rIHA9ezJ9IGJnPXsgYWN0aXZlID8gJ2dsYXNzVGVhbCcgOiB1bmRlZmluZWR9IGNvbG9yPXthY3RpdmUgPyAnIzIwMjAyMycgOiBpbmFjdGl2ZUNvbG9yfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIDwvTmV4dExpbms+XG4gIClcbn1cblxuY29uc3QgTmF2YmFyID0gcHJvcHMgPT4ge1xuICBjb25zdCB7IHBhdGggfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPEJveCBcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIiBcbiAgICAgIGFzPVwibmF2XCIgXG4gICAgICB3PVwiMTAwJVwiIFxuICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKCcjZmZmZmZmNDAnLCAnIzIwMjAyMzgwJyl9IFxuICAgICAgc3R5bGU9e3sgYmFja2Ryb3BGaWx0ZXI6ICdibHVyKDEwcHgpJ319IFxuICAgICAgekluZGV4PXsxfSBcbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICA8Q29udGFpbmVyIFxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIHA9ezJ9XG4gICAgICAgIG1heFc9XCJjb250YWluZXIubWRcIlxuICAgICAgICB3cmFwPVwid3JhcFwiXG4gICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgID5cbiAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIiBtcj17NX0+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHNpemU9XCJsZ1wiIGxldHRlclNwYWNpbmc9eyd0aWdodGVyJ30+XG4gICAgICAgICAgICA8TG9nbyAvPlxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgIDxTdGFja1xuICAgICAgICAgIGRpcmVjdGlvbj17eyBiYXNlOiAnY29sdW1uJywgbWQ6ICdyb3cnIH19XG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiAnbm9uZScsIG1kOiAnZmxleCcgfX1cbiAgICAgICAgICB3aWR0aD17eyBiYXNlOiAnZnVsbCcsIG1kOiAnYXV0bycgfX1cbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBmbGV4R3Jvdz17MX1cbiAgICAgICAgICBtdD17eyBiYXNlOiA0LCBtZDogMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCIvYWJvdXRcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgIEFib3V0IG1lXG4gICAgICAgICAgPC9MaW5rSXRlbT5cbiAgICAgICAgICA8TGlua0l0ZW0gaHJlZj1cIi93b3Jrc1wiIHBhdGg9e3BhdGh9PlxuICAgICAgICAgICAgV29ya3NcbiAgICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwiL2NvbnRhY3RcIiBwYXRoPXtwYXRofT5cbiAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICA8L0xpbmtJdGVtPlxuICAgICAgICA8L1N0YWNrPlxuXG4gICAgICAgIDxCb3ggZmxleD17MX0gYWxpZ249XCJyaWdodFwiPlxuICAgICAgICAgIDxUaGVtZVRvZ2dsZUJ1dHRvbiAvPlxuXG4gICAgICAgICAgey8qIDxCb3ggbWw9ezJ9IGRpc3BsYXk9e3sgYmFzZTogJ2lubGluZS1ibG9jaycsIG1kOiAnbm9uZScgfX0+XG4gICAgICAgICAgICA8TWVudSBpc0xhenkgaWQ9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICAgICAgICA8TWVudUJ1dHRvblxuICAgICAgICAgICAgICAgIGFzPXtJY29uQnV0dG9ufVxuICAgICAgICAgICAgICAgIGljb249ezxIYW1idXJnZXJJY29uIC8+fVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiT3B0aW9uc1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxNZW51TGlzdD5cbiAgICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+QWJvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvd29ya3NcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+V29ya3M8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcG9zdHNcIiBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBhcz17TGlua30+UG9zdHM8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICBhcz17TGlua31cbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY3JhZnR6ZG9nL2NyYWZ0emRvZy1ob21lcGFnZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVmlldyBTb3VyY2VcbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvQm94PiAqL31cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJuYW1lcyI6WyJCb3giLCJDb250YWluZXIiLCJGbGV4IiwiSGVhZGluZyIsIkxpbmsiLCJTdGFjayIsInVzZUNvbG9yTW9kZVZhbHVlIiwiTmV4dExpbmsiLCJMb2dvIiwiVGhlbWVUb2dnbGVCdXR0b24iLCJMaW5rSXRlbSIsImhyZWYiLCJwYXRoIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJpbmFjdGl2ZUNvbG9yIiwicCIsImJnIiwidW5kZWZpbmVkIiwiY29sb3IiLCJOYXZiYXIiLCJwcm9wcyIsInBvc2l0aW9uIiwiYXMiLCJ3Iiwic3R5bGUiLCJiYWNrZHJvcEZpbHRlciIsInpJbmRleCIsImRpc3BsYXkiLCJtYXhXIiwid3JhcCIsImFsaWduIiwiYWxpZ25JdGVtcyIsImp1c3RpZnkiLCJtciIsInNpemUiLCJsZXR0ZXJTcGFjaW5nIiwiZGlyZWN0aW9uIiwiYmFzZSIsIm1kIiwid2lkdGgiLCJmbGV4R3JvdyIsIm10IiwiZmxleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

});