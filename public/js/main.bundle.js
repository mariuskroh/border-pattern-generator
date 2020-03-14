/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dev/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/js/clearpattern.js":
/*!********************************!*\
  !*** ./dev/js/clearpattern.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const screen = document.querySelector(\"#canvas\");\n\nfunction clearPattern() {\n  screen.innerHTML = \"\";\n}\nmodule.exports = clearPattern;\n\n\n//# sourceURL=webpack:///./dev/js/clearpattern.js?");

/***/ }),

/***/ "./dev/js/globals.js":
/*!***************************!*\
  !*** ./dev/js/globals.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//globals\nlet globals = {\n  base: 16,\n  borderWidth: 4,\n  screen: document.querySelector(\"#canvas\"),\n  createPattern: document.querySelector(\".create-pattern\")\n};\n\nmodule.exports = globals;\n\n\n//# sourceURL=webpack:///./dev/js/globals.js?");

/***/ }),

/***/ "./dev/js/main.js":
/*!************************!*\
  !*** ./dev/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("//import\nlet globals = __webpack_require__(/*! ./globals */ \"./dev/js/globals.js\");\nlet clearPattern = __webpack_require__(/*! ./clearpattern */ \"./dev/js/clearpattern.js\");\n//pattern\nfunction makePattern() {\n  clearPattern();\n  let int = globals.base;\n  for (let i = 0; i < int * int; i++) {\n    const gridElement = document.createElement(\"div\");\n    addBorder(gridElement);\n    gridElement.classList.add(\"grid-element\");\n    globals.screen.appendChild(gridElement);\n  }\n}\n\nfunction addBorder(item) {\n  const randomNumber = Math.floor(Math.random() * Math.floor(3));\n  const borderVariations = [\n    `${globals.borderWidth}px ${globals.borderWidth}px ${globals.borderWidth}px 0`,\n    `${globals.borderWidth}px ${globals.borderWidth}px 0 ${globals.borderWidth}px`,\n    `${globals.borderWidth}px 0 ${globals.borderWidth}px ${globals.borderWidth}px`,\n    `0 ${globals.borderWidth}px ${globals.borderWidth}px ${globals.borderWidth}px`\n  ];\n  item.style.borderWidth = borderVariations[randomNumber];\n  return item;\n}\n\nmakePattern();\ncreatePattern.addEventListener(\"click\", makePattern);\n\n\n//# sourceURL=webpack:///./dev/js/main.js?");

/***/ })

/******/ });