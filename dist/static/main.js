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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Carousel {
  constructor() {
    this.cellsContainer = document.querySelector('.cells-container');
    this.tabs = document.querySelector('.tabs');
    this.nextButton = document.getElementById('display-next');
    this.TabSelectedclass = 'selected';
    this.revertButtonClass = 'last';
    this.carouselCells = ['cell1', 'cell2', 'cell3', 'cell4'];
    this.currentCell = 'cell1';
    this.cellIndex = 0;
    this.selectTab = this.selectTab.bind(this);
    this.play = setInterval(this.play.bind(this), 3000);
    this.switchButton = this.switchButton.bind(this);
  }

  calculateDistance() {

    const D = this.cellIndex * -100;
    const leftValue = D + '%';

    return leftValue;
  }

  updateCarousel(val) {

    this.cellsContainer.style.left = val;
  }

  updateTabs() {

    const previousSelectedTab = document.querySelector('.selected');
    previousSelectedTab.classList.remove('selected');

    const currentSelectedTab = document.querySelector(`[data-cell=${this.currentCell}]`);
    currentSelectedTab.classList.add('selected');
  }

  updateNextButton() {

    if (this.cellIndex != 0 && this.cellIndex != 3) return;

    if (this.cellIndex == 0) {
      this.nextButton.classList.contains(this.revertButtonClass) ? this.nextButton.classList.remove(this.revertButtonClass) : null;

      return;
    }

    if (this.nextButton.classList.contains(this.revertButtonClass)) {
      return;
    } else {
      this.nextButton.classList.add(this.revertButtonClass);
    }
  }

  selectTab(e) {

    if (e.target.nodeName === 'LI' || e.target.nodeName == 'SPAN') {

      clearInterval(this.play);

      const selectedTab = e.target.getAttribute('data-cell');

      if (this.currentCell == selectedTab) return;

      this.currentCell = selectedTab;
      this.cellIndex = this.carouselCells.indexOf(this.currentCell);

      this.updateView();
    }
  }

  nextCell() {

    this.cellIndex++;
    this.currentCell = this.carouselCells[this.cellIndex];

    this.updateView();
  }

  previousCell() {

    this.cellIndex--;
    this.currentCell = this.carouselCells[this.cellIndex];

    this.updateView();
  }

  switchButton(e) {

    clearInterval(this.play);

    this.nextButton.classList.contains(this.revertButtonClass) ? this.previousCell() : this.nextCell();
  }

  play() {

    if (this.cellIndex == this.carouselCells.length - 1) {
      this.cellIndex = 0;
    } else {
      this.cellIndex++;
    }

    this.currentCell = this.carouselCells[this.cellIndex];

    this.updateView();
  }

  updateView() {

    this.updateCarousel(this.calculateDistance());
    this.updateNextButton();
    this.updateTabs();
  }

}

module.exports = Carousel;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class Nav {

  constructor() {
    this.navIcon = document.querySelector('.nav-icon');
    this.mobileNavContainer = document.querySelector('.mobile-nav-container');
    this.classNavIsOpen = 'mobile-nav-open';
    this.classUpdateNav = 'nav-mobile-is-open';
    this.navMobileIsOpen = false;
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  openNav() {
    this.navIcon.classList.add('open');
    this.mobileNavContainer.classList.add(this.classNavIsOpen);
    document.body.classList.add(this.classUpdateNav);
  }

  closeNav() {
    this.navIcon.classList.remove('open');
    document.body.classList.remove(this.classUpdateNav);
    this.mobileNavContainer.classList.remove(this.classNavIsOpen);
  }

  addEvents() {
    this.navMobileIsOpen ? this.mobileNavContainer.addEventListener('click', this.toggleMenu) : this.mobileNavContainer.removeEventListener('click', this.toggleMenu);
  }

  toggleMenu() {
    this.mobileNavContainer.style.willChange = 'opacity';
    this.navMobileIsOpen = !this.navMobileIsOpen;
    this.navMobileIsOpen ? this.openNav() : this.closeNav();
    this.addEvents();
  }

}

module.exports = new Nav();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _nav = __webpack_require__(1);

var _nav2 = _interopRequireDefault(_nav);

var _carousel = __webpack_require__(0);

var _carousel2 = _interopRequireDefault(_carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nav = document.querySelector('.nav-icon');

nav.addEventListener('click', function () {
  _nav2.default.toggleMenu();
});

// carousel.tabs.addEventListener('click', (e) => {
//   carousel.selectTab(e);
// })
//
// carousel.nextButton.addEventListener('click', (e) =>{
//   carousel.switchButton(e);
// })

/***/ })
/******/ ]);