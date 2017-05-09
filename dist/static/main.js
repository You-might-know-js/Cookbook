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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Nav = function () {
  function Nav() {
    _classCallCheck(this, Nav);

    this.navIcon = document.querySelector('.nav-icon');
    this.mobileNavContainer = document.querySelector('.mobile-nav-container');
    this.classNavIsOpen = 'mobile-nav-open';
    this.classUpdateNav = 'nav-mobile-is-open';
    this.navMobileIsOpen = false;
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  _createClass(Nav, [{
    key: 'updateNavIcon',
    value: function updateNavIcon() {
      this.navMobileIsOpen ? this.navIcon.classList.add('open') : this.navIcon.classList.remove('open');
    }
  }, {
    key: 'updateNavColors',
    value: function updateNavColors() {
      this.navMobileIsOpen ? document.body.classList.add(this.classUpdateNav) : document.body.classList.remove(this.classUpdateNav);
    }
  }, {
    key: 'updateMobileMenu',
    value: function updateMobileMenu() {
      this.navMobileIsOpen ? this.mobileNavContainer.classList.add(this.classNavIsOpen) : this.mobileNavContainer.classList.remove(this.classNavIsOpen);
    }
  }, {
    key: 'addEvents',
    value: function addEvents() {
      this.navMobileIsOpen ? this.mobileNavContainer.addEventListener('click', this.toggleMenu) : this.mobileNavContainer.removeEventListener('click', this.toggleMenu);
    }
  }, {
    key: 'toggleMenu',
    value: function toggleMenu() {
      this.mobileNavContainer.style.willChange = 'opacity';
      this.navMobileIsOpen = !this.navMobileIsOpen;
      this.updateNavIcon();
      this.updateNavColors();
      this.updateMobileMenu();
      this.addEvents();
    }
  }]);

  return Nav;
}();

module.exports = new Nav();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nav = __webpack_require__(0);

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = document.querySelector('.nav-icon');

nav.addEventListener('click', function () {
  _nav2.default.toggleMenu();
});

/***/ })
/******/ ]);