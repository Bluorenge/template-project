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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Плавная прокрутка\nvar featuresBlock = document.getElementById(\"features\");\nvar scrollBtn = document.querySelector(\".banner__scroll-wrap\");\n\nfunction handleButtonClick() {\n  featuresBlock.scrollIntoView({\n    block: \"start\",\n    behavior: \"smooth\"\n  });\n}\n\nscrollBtn.addEventListener(\"click\", handleButtonClick); // Создание плавающего меню\n\nwindow.onscroll = function showHeader() {\n  var pageHeader = document.querySelector(\".page-header\");\n\n  if (window.pageYOffset > 115) {\n    pageHeader.classList.add(\"page-header--fixed\");\n  } else {\n    pageHeader.classList.remove(\"page-header--fixed\");\n  }\n}; // Открытие/закрытие главного меню\n\n\nvar menuPopupOpen = document.querySelector(\".page-header__toggle-wrap\"),\n    menuPopup = document.querySelector(\".page-header__nav\");\nmenuPopupOpen.addEventListener(\"click\", function () {\n  menuPopup.classList.contains(\"page-header__nav--close\") ? (menuPopupOpen.classList.add(\"page-header__toggle-wrap--cross\"), menuPopup.classList.remove(\"page-header__nav--close\"), menuPopup.classList.add(\"page-header__nav--open\")) : (menuPopupOpen.classList.remove(\"page-header__toggle-wrap--cross\"), menuPopup.classList.add(\"page-header__nav--close\"), menuPopup.classList.remove(\"page-header__nav--open\"));\n}); // Создание яндекс карты\n\nymaps.ready(init);\n\nfunction init() {\n  // Создание карты.\n  var myMap = new ymaps.Map(\"map\", {\n    // Координаты центра карты.\n    // Порядок по умолчанию: «широта, долгота».\n    // Чтобы не определять координаты центра карты вручную,\n    // воспользуйтесь инструментом Определение координат.\n    center: [55.76, 37.64],\n    // Уровень масштабирования. Допустимые значения:\n    // от 0 (весь мир) до 19.\n    zoom: 7\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/Mzg4YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LBcbnZhciBmZWF0dXJlc0Jsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWF0dXJlc1wiKTtcbnZhciBzY3JvbGxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhbm5lcl9fc2Nyb2xsLXdyYXBcIik7XG5cbmZ1bmN0aW9uIGhhbmRsZUJ1dHRvbkNsaWNrKCkge1xuICBmZWF0dXJlc0Jsb2NrLnNjcm9sbEludG9WaWV3KHtcbiAgICBibG9jazogXCJzdGFydFwiLFxuICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gIH0pO1xufVxuXG5zY3JvbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUJ1dHRvbkNsaWNrKTsgLy8g0KHQvtC30LTQsNC90LjQtSDQv9C70LDQstCw0Y7RidC10LPQviDQvNC10L3RjlxuXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiBzaG93SGVhZGVyKCkge1xuICB2YXIgcGFnZUhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZS1oZWFkZXJcIik7XG5cbiAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDExNSkge1xuICAgIHBhZ2VIZWFkZXIuY2xhc3NMaXN0LmFkZChcInBhZ2UtaGVhZGVyLS1maXhlZFwiKTtcbiAgfSBlbHNlIHtcbiAgICBwYWdlSGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdlLWhlYWRlci0tZml4ZWRcIik7XG4gIH1cbn07IC8vINCe0YLQutGA0YvRgtC40LUv0LfQsNC60YDRi9GC0LjQtSDQs9C70LDQstC90L7Qs9C+INC80LXQvdGOXG5cblxudmFyIG1lbnVQb3B1cE9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtaGVhZGVyX190b2dnbGUtd3JhcFwiKSxcbiAgICBtZW51UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2UtaGVhZGVyX19uYXZcIik7XG5tZW51UG9wdXBPcGVuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIG1lbnVQb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlLWhlYWRlcl9fbmF2LS1jbG9zZVwiKSA/IChtZW51UG9wdXBPcGVuLmNsYXNzTGlzdC5hZGQoXCJwYWdlLWhlYWRlcl9fdG9nZ2xlLXdyYXAtLWNyb3NzXCIpLCBtZW51UG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInBhZ2UtaGVhZGVyX19uYXYtLWNsb3NlXCIpLCBtZW51UG9wdXAuY2xhc3NMaXN0LmFkZChcInBhZ2UtaGVhZGVyX19uYXYtLW9wZW5cIikpIDogKG1lbnVQb3B1cE9wZW4uY2xhc3NMaXN0LnJlbW92ZShcInBhZ2UtaGVhZGVyX190b2dnbGUtd3JhcC0tY3Jvc3NcIiksIG1lbnVQb3B1cC5jbGFzc0xpc3QuYWRkKFwicGFnZS1oZWFkZXJfX25hdi0tY2xvc2VcIiksIG1lbnVQb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwicGFnZS1oZWFkZXJfX25hdi0tb3BlblwiKSk7XG59KTsgLy8g0KHQvtC30LTQsNC90LjQtSDRj9C90LTQtdC60YEg0LrQsNGA0YLRi1xuXG55bWFwcy5yZWFkeShpbml0KTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgLy8g0KHQvtC30LTQsNC90LjQtSDQutCw0YDRgtGLLlxuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcbiAgICAvLyDQmtC+0L7RgNC00LjQvdCw0YLRiyDRhtC10L3RgtGA0LAg0LrQsNGA0YLRiy5cbiAgICAvLyDQn9C+0YDRj9C00L7QuiDQv9C+INGD0LzQvtC70YfQsNC90LjRjjogwqvRiNC40YDQvtGC0LAsINC00L7Qu9Cz0L7RgtCwwrsuXG4gICAgLy8g0KfRgtC+0LHRiyDQvdC1INC+0L/RgNC10LTQtdC70Y/RgtGMINC60L7QvtGA0LTQuNC90LDRgtGLINGG0LXQvdGC0YDQsCDQutCw0YDRgtGLINCy0YDRg9GH0L3Rg9GOLFxuICAgIC8vINCy0L7RgdC/0L7Qu9GM0LfRg9C50YLQtdGB0Ywg0LjQvdGB0YLRgNGD0LzQtdC90YLQvtC8INCe0L/RgNC10LTQtdC70LXQvdC40LUg0LrQvtC+0YDQtNC40L3QsNGCLlxuICAgIGNlbnRlcjogWzU1Ljc2LCAzNy42NF0sXG4gICAgLy8g0KPRgNC+0LLQtdC90Ywg0LzQsNGB0YjRgtCw0LHQuNGA0L7QstCw0L3QuNGPLiDQlNC+0L/Rg9GB0YLQuNC80YvQtSDQt9C90LDRh9C10L3QuNGPOlxuICAgIC8vINC+0YIgMCAo0LLQtdGB0Ywg0LzQuNGAKSDQtNC+IDE5LlxuICAgIHpvb206IDdcbiAgfSk7XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });