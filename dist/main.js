/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/basicLoadout.js":
/*!*****************************!*\
  !*** ./src/basicLoadout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction basicLoadout() {\r\n\r\n\r\n    const mainContentDiv = document.getElementById('content')\r\n    const loadOutContaier = document.createElement('div')\r\n\r\n    const menuButton = document.createElement('button')\r\n    menuButton.classList.add('menuButton')\r\n    menuButton.innerHTML = 'Menu'\r\n\r\n\r\n    const catPic = document.createElement('img')\r\n    catPic.src = 'https://thumbs.dreamstime.com/b/cat-prepares-dough-baking-85976605.jpg'\r\n    catPic.classList.add('catPicture')\r\n\r\n\r\n    const header = document.createElement('h1')\r\n    header.classList.add('test')\r\n    header.textContent = 'Welcome to Kitty Cuisine'\r\n    const paragraph = document.createElement('p')\r\n    paragraph.classList.add('paragraph')\r\n    paragraph.textContent = '-Kitty Cuisine is your source for the freshest and finest sources of Kitty food in the entire Northwest'\r\n\r\n\r\n\r\n    // mainContentDiv.appendChild(menuButton)\r\n\r\n    mainContentDiv.appendChild(loadOutContaier)\r\n    loadOutContaier.appendChild(catPic)\r\n    loadOutContaier.appendChild(header)\r\n    loadOutContaier.appendChild(paragraph)\r\n    loadOutContaier.appendChild(menuButton)\r\n    // mainContentDiv.appendChild(catPic)\r\n    // mainContentDiv.appendChild(header)\r\n    // mainContentDiv.appendChild(paragraph)\r\n\r\n\r\n\r\n\r\n    console.log('This is another test from basic loadout')\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basicLoadout);\n\n//# sourceURL=webpack://kittycuisine/./src/basicLoadout.js?");

/***/ }),

/***/ "./src/basicLoadout2.js":
/*!******************************!*\
  !*** ./src/basicLoadout2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction basicLoadoutNew() {\r\n    console.log('another test to see if live is working')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basicLoadoutNew);\n\n//# sourceURL=webpack://kittycuisine/./src/basicLoadout2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basicLoadout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicLoadout */ \"./src/basicLoadout.js\");\n/* harmony import */ var _basicLoadout2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicLoadout2 */ \"./src/basicLoadout2.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n// console.log('Hi this is a test')\r\n\r\n\r\n\r\n\r\n(0,_basicLoadout__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n\r\n\r\n;\r\n\r\n(0,_basicLoadout2__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n\r\n\r\n;\r\n\r\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)()\n\n//# sourceURL=webpack://kittycuisine/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _basicLoadout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicLoadout */ \"./src/basicLoadout.js\");\n\r\n// basicLoadout()\r\n\r\n\r\nfunction menu() {\r\n\r\n    const mainContentDiv = document.getElementById('content')\r\n\r\n\r\n    // const menuButton = document.createElement('button')\r\n    // menuButton.classList.add('menuButton')\r\n    // menuButton.innerHTML = 'Menu'\r\n\r\n\r\n    const menuButton = document.getElementsByClassName('menuButton')\r\n\r\n\r\n    mainContentDiv.appendChild(menuButton)\r\n\r\n\r\n\r\n\r\n    // const menuButton = document.getElementsByClassName('menuButton')\r\n\r\n    menuButton.addEventListener('click', () => {\r\n\r\n\r\n        mainContentDiv.remove()\r\n\r\n\r\n    })\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://kittycuisine/./src/menu.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;