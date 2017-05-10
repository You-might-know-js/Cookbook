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

var _carousel = __webpack_require__(2);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = document.querySelector('.nav-icon');

nav.addEventListener('click', function () {
  _nav2.default.toggleMenu();
});

_carousel2.default.tabs.addEventListener('click', function (e) {
  _carousel2.default.selectTab(e);
});

_carousel2.default.nextButton.addEventListener('click', function () {
  _carousel2.default.switchButton();
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Carousel = function () {
  function Carousel() {
    _classCallCheck(this, Carousel);

    this.cellsContainer = document.querySelector('.cells-container');
    this.tabs = document.querySelector('.tabs');
    this.nextButton = document.getElementById('display-next');
    this.TabSelectedclass = 'selected';
    this.revertButtonClass = 'last';
    this.carouselCells = ['cell1', 'cell2', 'cell3', 'cell4'];
    this.currentCell = 'cell1';
    this.cellIndex = 0;
    this.selectTab = this.selectTab.bind(this);
    this.play = this.play.bind(this);
    this.switchButton = this.switchButton.bind(this);
  }

  _createClass(Carousel, [{
    key: 'calculateDistance',
    value: function calculateDistance() {
      var D = this.cellIndex * -100;
      var leftValue = D + '%';

      return leftValue;
    }
  }, {
    key: 'updateCarousel',
    value: function updateCarousel(val) {
      this.cellsContainer.style.left = val;
    }
  }, {
    key: 'updateTabs',
    value: function updateTabs() {
      var previousSelectedTab = document.querySelector('.selected');
      previousSelectedTab.classList.remove('selected');

      var currentSelectedTab = document.querySelector('[data-cell=' + this.currentCell + ']');
      currentSelectedTab.classList.add('selected');
    }
  }, {
    key: 'updateNextButton',
    value: function updateNextButton() {
      if (this.cellIndex != 0 && this.cellIndex != 3) return;

      if (this.cellIndex == 0) {
        this.nextButton.classList.contains(this.revertButtonClass) ? this.nextButton.classList.remove(this.revertButtonClass) : null;

        return;
      }

      //if the engine made to here it means that cellIndex = 3
      if (this.nextButton.classList.contains(this.revertButtonClass)) {
        return;
      } else {
        this.nextButton.classList.add(this.revertButtonClass);
      }
    }
  }, {
    key: 'selectTab',
    value: function selectTab(e) {
      if (e.target.nodeName === 'LI' || e.target.nodeName == 'SPAN') {
        var selectedTab = e.target.getAttribute('data-cell');

        //stop auto animation here ...

        if (this.currentCell == selectedTab) return;

        this.currentCell = selectedTab;
        this.cellIndex = this.carouselCells.indexOf(this.currentCell);

        this.updateCarousel(this.calculateDistance());
        this.updateTabs();
        this.updateNextButton();
      }
    }
  }, {
    key: 'nextCell',
    value: function nextCell() {

      this.cellIndex++;

      this.currentCell = this.carouselCells[this.cellIndex];
      this.updateCarousel(this.calculateDistance());
      this.updateNextButton();
      this.updateTabs();
    }
  }, {
    key: 'previousCell',
    value: function previousCell() {
      this.cellIndex--;

      this.currentCell = this.carouselCells[this.cellIndex];
      this.updateCarousel(this.calculateDistance());
      this.updateNextButton();
      this.updateTabs();
    }
  }, {
    key: 'switchButton',
    value: function switchButton() {
      this.cellIndex >= 0 && this.cellIndex <= 2 ? this.nextCell() : this.previousCell();
    }
  }, {
    key: 'play',
    value: function play() {

      if (this.cellIndex == this.carouselCells.length - 1) {
        this.cellIndex = 0;
      } else {
        this.cellIndex++;
      }

      this.nextCell();
    }
  }]);

  return Carousel;
}();

module.exports = new Carousel();

/***/ })
/******/ ]);