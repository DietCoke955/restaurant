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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction basicLoadout() {\r\n\r\n\r\n    // git hub test\r\n    // git test 2\r\n    // git test 3\r\n\r\n    const mainBody = document.getElementById('mainBody')\r\n    const mainContentDiv = document.getElementById('content')\r\n    const loadOutContaier = document.createElement('div')\r\n\r\n    const menuButton = document.createElement('button')\r\n    menuButton.classList.add('menuButton')\r\n    menuButton.innerHTML = 'Menu'\r\n\r\n    const homeButton = document.createElement('button')\r\n    homeButton.classList.add('homeButton')\r\n    homeButton.innerHTML = 'Home'\r\n\r\n    // const contactButton = document.querySelector('.contactButton')\r\n\r\n    const contactButton = document.createElement('button')\r\n    contactButton.classList.add('contactButton')\r\n    contactButton.innerHTML = 'Contact'\r\n\r\n\r\n\r\n\r\n\r\n    // const contactButton = document.createElement('button')\r\n    // contactButton.classList.add('contactButton')\r\n    // contactButton.innerHTML = 'Contact'\r\n\r\n\r\n\r\n\r\n    const catPic = document.createElement('img')\r\n    catPic.src = 'https://thumbs.dreamstime.com/b/cat-prepares-dough-baking-85976605.jpg'\r\n    catPic.classList.add('catPicture')\r\n\r\n\r\n    const header = document.createElement('h1')\r\n    header.classList.add('headerKitty')\r\n    header.textContent = 'Kitty Cuisine'\r\n    const paragraph = document.createElement('p')\r\n    paragraph.classList.add('paragraph')\r\n    paragraph.textContent = '-Kitty Cuisine is your source for the freshest and finest sources of Kitty food in the entire Northwest'\r\n\r\n\r\n\r\n    // mainContentDiv.appendChild(menuButton)\r\n\r\n    // mainContentDiv.appendChild(loadOutContaier)\r\n    // loadOutContaier.appendChild(catPic)\r\n    // loadOutContaier.appendChild(header)\r\n    // loadOutContaier.appendChild(paragraph)\r\n    // loadOutContaier.appendChild(menuButton)\r\n\r\n\r\n\r\n\r\n    mainContentDiv.appendChild(header)\r\n    mainContentDiv.appendChild(homeButton)\r\n    mainContentDiv.appendChild(menuButton)\r\n    mainContentDiv.appendChild(contactButton)\r\n    mainContentDiv.appendChild(catPic)\r\n\r\n    mainContentDiv.appendChild(paragraph)\r\n\r\n\r\n    homeButton.addEventListener('click', () => {\r\n        mainContentDiv.remove()\r\n        mainContentDiv.textContent = ''\r\n        mainBody.appendChild(mainContentDiv)\r\n        mainContentDiv.appendChild(header)\r\n        mainContentDiv.appendChild(homeButton)\r\n        mainContentDiv.appendChild(menuButton)\r\n        mainContentDiv.appendChild(contactButton)\r\n        mainContentDiv.appendChild(catPic)\r\n\r\n        mainContentDiv.appendChild(paragraph)\r\n\r\n\r\n\r\n\r\n\r\n    })\r\n\r\n\r\n\r\n    console.log('This is another test from basic loadout')\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basicLoadout);\n\n//# sourceURL=webpack://kittycuisine/./src/basicLoadout.js?");

/***/ }),

/***/ "./src/basicLoadout2.js":
/*!******************************!*\
  !*** ./src/basicLoadout2.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction basicLoadoutNew() {\r\n    console.log('another test to see if live is working')\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basicLoadoutNew);\n\n//# sourceURL=webpack://kittycuisine/./src/basicLoadout2.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\r\n\r\n\r\n\r\n\r\n    const mainContentDiv = document.getElementById('content')\r\n\r\n\r\n    // const contactButton = document.createElement('button')\r\n    // contactButton.classList.add('contactButton')\r\n    // contactButton.innerHTML = 'Contact'\r\n\r\n    const contactButton = document.querySelector('.contactButton')\r\n\r\n\r\n\r\n    mainContentDiv.appendChild(contactButton)\r\n\r\n\r\n    const catPic = document.createElement('img')\r\n    catPic.src = 'https://thumbs.dreamstime.com/b/cat-prepares-dough-baking-85976605.jpg'\r\n    catPic.classList.add('catPicture')\r\n    const header = document.createElement('h1')\r\n    header.classList.add('headerKitty')\r\n    header.textContent = 'Kitty Cuisine'\r\n    const menuButton = document.querySelector('.menuButton')\r\n    const homeButton = document.querySelector('.homeButton')\r\n\r\n\r\n    const contactInfo = document.createElement('div')\r\n    contactInfo.classList.add('contactInfo')\r\n    contactInfo.innerHTML = 'Phone Numbers -   360-909-5555'\r\n    const contactAddress = document.createElement('div')\r\n    contactAddress.classList.add('contactAddress')\r\n    contactAddress.innerHTML = 'Address -    90210 beverly hills blvd'\r\n\r\n\r\n\r\n\r\n\r\n    contactButton.addEventListener('click', () => {\r\n\r\n\r\n        mainContentDiv.remove()\r\n        mainContentDiv.textContent = ''\r\n        mainBody.appendChild(mainContentDiv)\r\n\r\n        mainContentDiv.appendChild(header)\r\n        mainContentDiv.appendChild(homeButton)\r\n        mainContentDiv.appendChild(menuButton)\r\n        mainContentDiv.appendChild(contactButton)\r\n        mainContentDiv.appendChild(catPic)\r\n\r\n\r\n        mainContentDiv.appendChild(contactInfo)\r\n        mainContentDiv.appendChild(contactAddress)\r\n        // contactInfo.appendChild(contactAddress)\r\n\r\n\r\n\r\n    })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://kittycuisine/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basicLoadout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicLoadout */ \"./src/basicLoadout.js\");\n/* harmony import */ var _basicLoadout2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basicLoadout2 */ \"./src/basicLoadout2.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n// console.log('Hi this is a test')\r\n\r\n\r\n\r\n\r\n(0,_basicLoadout__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n\r\n\r\n;\r\n\r\n(0,_basicLoadout2__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n\r\n\r\n;\r\n\r\n(0,_menu__WEBPACK_IMPORTED_MODULE_2__.default)()\r\n\r\n;\r\n\r\n(0,_contact__WEBPACK_IMPORTED_MODULE_3__.default)()\n\n//# sourceURL=webpack://kittycuisine/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import basicLoadout from \"./basicLoadout\"\r\n// basicLoadout()\r\n\r\n\r\nfunction menu() {\r\n\r\n\r\n    const mainBody = document.getElementById('mainBody')\r\n    const mainContentDiv = document.getElementById('content')\r\n\r\n    const catPic = document.createElement('img')\r\n    catPic.src = 'https://thumbs.dreamstime.com/b/cat-prepares-dough-baking-85976605.jpg'\r\n    catPic.classList.add('catPicture')\r\n    const header = document.createElement('h1')\r\n    header.classList.add('headerKitty')\r\n    header.textContent = 'Kitty Cuisine'\r\n\r\n    // const basicText = document.createElement('h1')\r\n    // basicText.textContent = 'basic append test'\r\n    // mainBody.appendChild(basicText)\r\n\r\n\r\n    const menuButton = document.querySelector('.menuButton')\r\n    const homeButton = document.querySelector('.homeButton')\r\n    const contactButton = document.querySelector('.contactButton')\r\n\r\n    // console.log(contactButton)\r\n\r\n    console.log(menuButton)\r\n\r\n\r\n    mainContentDiv.appendChild(menuButton)\r\n\r\n\r\n    function menuItem(src, info, price) {\r\n        const item = document.createElement('div')\r\n        item.classList.add('item')\r\n        const img = document.createElement('img')\r\n        img.setAttribute('src', src)\r\n        img.classList.add('menuImg')\r\n\r\n\r\n        const description = document.createElement('div')\r\n        description.classList.add('description')\r\n\r\n        const itemName = document.createElement('h3')\r\n        itemName.textContent = info\r\n\r\n        const itemPrice = document.createElement('h2')\r\n        itemPrice.textContent = price\r\n\r\n        description.appendChild(itemName)\r\n        description.appendChild(itemPrice)\r\n\r\n        item.appendChild(img)\r\n        item.appendChild(description)\r\n        return item\r\n\r\n    }\r\n\r\n    const items = [\r\n        menuItem('https://cookiesandcups.com/wp-content/uploads/2020/03/chickennuggets-3.jpg',\r\n            'Kitten Nuggies', '$6.50', 'Kitten Nuggies'),\r\n        menuItem('https://bromabakery.com/wp-content/uploads/2016/03/Caramel-Milkshake-3-1067x1600.jpg', 'Meowkshakes', '$3.50', 'Meowkshakes'),\r\n        menuItem('https://www.acouplecooks.com/wp-content/uploads/2020/01/Broiled-Salmon-006.jpg', 'Salmon', '$9'),\r\n        menuItem('https://loveandfoodforeva.com/wp-content/uploads/2016/09/breakfast_burritos_love_and_food_foreva_5.jpg', 'Purritos', '$7'),\r\n        menuItem('https://www.simplyrecipes.com/thmb/h3vmpNn2nfPoejM2eu7GlF4nmhw=/3900x2600/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Seared-Ahi-Tuna-LEAD-2-7d0de98ff4b94257b2a665357a2940df.jpg', 'Tuna', '$8'),\r\n        menuItem('http://embed.widencdn.net/img/beef/gow2yjawey/exact/classic-beef-kabobs-horizontal.tif?keep=c&u=7fueml', 'Kitten Kabobs', '$8.50'),\r\n        menuItem('', '', ''),\r\n    ]\r\n\r\n    // items.forEach((item) => {\r\n    //     mainContentDiv.appendChild(item)\r\n    // })\r\n\r\n\r\n\r\n    // const menuButton = document.getElementsByClassName('menuButton')\r\n\r\n    menuButton.addEventListener('click', () => {\r\n\r\n\r\n        mainContentDiv.remove()\r\n        mainContentDiv.textContent = ''\r\n        mainBody.appendChild(mainContentDiv)\r\n\r\n        const menuDiv = document.createElement('div')\r\n        menuDiv.classList.add('grid-lay')\r\n\r\n        // const menuDiv = document.createElement('h1')\r\n        // menuDiv.textContent = 'This a test menu H1'\r\n        // mainContentDiv.appendChild(menuDiv)\r\n\r\n        mainContentDiv.appendChild(header)\r\n        mainContentDiv.appendChild(homeButton)\r\n        mainContentDiv.appendChild(menuButton)\r\n        mainContentDiv.appendChild(contactButton)\r\n\r\n\r\n        mainContentDiv.appendChild(catPic)\r\n\r\n\r\n        mainContentDiv.appendChild(menuDiv)\r\n\r\n\r\n        items.forEach((item) => {\r\n            menuDiv.appendChild(item)\r\n        })\r\n\r\n\r\n\r\n    })\r\n\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://kittycuisine/./src/menu.js?");

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