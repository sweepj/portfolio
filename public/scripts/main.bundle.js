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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// $(document).ready(function(){\n//   blur();\n// })\n\n// $(window).resize(function(){\n//   blur();\n// });\n\n// function blur(){\n//   var imgWidth = $('.say-my__background').width(),\n//       blurSection = $('.say-my'),\n//       blur = $('.feedback__form-blur'),\n//       posY = blurSection.offset().top - blur.offset().top,\n//       posX = blurSection.offset().left - blur.offset().left;\n//   console.log(posX, posY);\n//   console.log(imgWidth);\n\n//   blur.css({\n//     'background-size' : imgWidth + 'px' + ' ' + 'auto',\n//     'background-position': posX + 'px' + ' ' + posY + 'px'\n//   })\n// }\n\n\n// function scrollTriangleBtn(){\n//   const scrollBtn = document.getElementsByClassName('hero__scroll-btn')[0];\n//   var blockHeight;\n\n//   if(document.getElementsByClassName('my-works')[0]){\n//     blockHeight = document.getElementsByClassName('my-works')[0].offsetTop;\n//   }\n//   else{\n//     blockHeight = document.getElementsByClassName('about')[0].offsetTop;\n//   }\n\n//   scrollBtn.addEventListener('click', function(){\n//       window.scrollTo(0, blockHeight);\n//   });  \n// }\n\n// scrollTriangleBtn();\n\n// window.onresize = function () {\n//   scrollTriangleBtn();\n// }\n\n// const parallaxContainer = document.querySelector('.parallax');\n// const layers = parallaxContainer.children;\n\n// const moveLayers = e =>{\n//   const initialX = window.innerWidth / 2 - e.pageX;\n//   const initialY = window.innerHeight / 2 - e.pageY;\n//   console.log(initialX,   initialY);\n//   Array.from(layers).forEach((layer, i) => {\n//     const divider = i / 100;\n//     const positionX = initialX * divider;\n//     const positionY = initialY * divider;\n//     const bottomPosition = window.innerHeight / 2 * divider;\n//     const image = layer.firstElementChild;\n//     layer.style.transform = `translate(${positionX}px, ${positionY}px)`;\n//     layer.style.bottom = `${-bottomPosition}px`;\n//   });\n// }\n// window.addEventListener('mousemove', moveLayers);\n\n\n// $(window).scroll(function(){\n//   if($(window).scrollTop() >= $('.about').offset().top){\n//     $('.skill__circle').addClass('skill__circle-active');\n//   }else{\n//     $('.skill__circle').removeClass('skill__circle-active') \n//   }\n// })\n\n// let scrollMenu = (function(){\n//   const $news = $('.section__list');\n//   const $item = $('.sidebar__content');\n//   const $wrapMenu = $('.sidebar__item');\n//   let positionArticle = [];\n//   let offsetHeight = 0;\n//   let flagAnimation = true;\n\n//   const _setPositionArticle = function(elements) {\n//     elements.each(function(item) {\n//       positionArticle[item] = {}\n//       positionArticle[item].top = $(this).offset().top - offsetHeight\n//       positionArticle[item].bottom = positionArticle[item].top + $(this).innerHeight()\n//     })\n//   }\n\n//   const _scrollPageFixMenu = function(e) {\n//     let scroll = window.pageYOffset;\n//     if (scroll < $news.offset().top) {\n//       $wrapMenu.removeClass('fixed')\n//     } else {\n//       $wrapMenu.addClass('fixed')\n//     }\n//   }\n\n//   const _scrollPage = function(e) {\n//     const isFirstVision = function(element, current) {\n//       let scroll = window.pageYOffset;\n//       return scroll >= element.top && scroll < element.bottom && !current.hasClass('sidebar__list--active')\n//     }\n//     positionArticle.forEach((element, index) => {\n//       let $currentElement = $item.eq(index);\n//       if (isFirstVision(element, $currentElement)) {\n//         $currentElement.addClass('sidebar__list--active').siblings().removeClass('sidebar__list--active')\n//       }\n//     })\n//   }\n\n//   const _clickMenu = function(e) {\n//     if (flagAnimation) {\n//       flagAnimation = false;\n//       let $element = $(e.target)\n//       let index = $element.index()\n//       let sectionOffset = Math.ceil(positionArticle[index].top);\n//       $(document).off('scroll', _scrollPage)\n//       $element.siblings().removeClass('sidebar__list--active')\n\n//       $('body, html').animate({scrollTop: sectionOffset}, 1000, () => {\n//         $element.addClass('sidebar__list--active')\n//         $(document).on('scroll', _scrollPage)\n//         flagAnimation = true;\n//       })\n\n//     }\n//   }\n\n//   const addListener = function() {\n//     $(window).one('load', function(e) {\n//       _setPositionArticle($news)\n//       $('.sidebar__item').on('click', _clickMenu)\n//       $(document).on('scroll', _scrollPage)\n//       $(document).on('scroll', _scrollPageFixMenu)\n//     })\n\n//     $(window).on('resize', function(e) {\n//       _setPositionArticle($news)\n//     })\n//   }\n\n//   return {\n//     init: addListener\n//   }\n\n// })()\n\n// scrollMenu.init();\n\n\n$('.hamburger-menu').click(function () {\n  $('.overlay').addClass('overlay-visible');\n  $('body').addClass('body-active__menu');\n});\n\n$('.overlay__btn-exit').click(function () {\n  $('.overlay').removeClass('overlay-visible');\n  $('body').removeClass('body-active__menu');\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOlsiJCIsImNsaWNrIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0FBLEVBQUUsaUJBQUYsRUFBcUJDLEtBQXJCLENBQTJCLFlBQVU7QUFDbkNELElBQUUsVUFBRixFQUFjRSxRQUFkLENBQXVCLGlCQUF2QjtBQUNBRixJQUFFLE1BQUYsRUFBVUUsUUFBVixDQUFtQixtQkFBbkI7QUFDRCxDQUhEOztBQUtBRixFQUFFLG9CQUFGLEVBQXdCQyxLQUF4QixDQUE4QixZQUFVO0FBQ3RDRCxJQUFFLFVBQUYsRUFBY0csV0FBZCxDQUEwQixpQkFBMUI7QUFDQUgsSUFBRSxNQUFGLEVBQVVHLFdBQVYsQ0FBc0IsbUJBQXRCO0FBQ0QsQ0FIRCIsImZpbGUiOiIuL3NyYy9zY3JpcHRzL21haW4uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vLyAgIGJsdXIoKTtcclxuLy8gfSlcclxuXHJcbi8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuLy8gICBibHVyKCk7XHJcbi8vIH0pO1xyXG5cclxuLy8gZnVuY3Rpb24gYmx1cigpe1xyXG4vLyAgIHZhciBpbWdXaWR0aCA9ICQoJy5zYXktbXlfX2JhY2tncm91bmQnKS53aWR0aCgpLFxyXG4vLyAgICAgICBibHVyU2VjdGlvbiA9ICQoJy5zYXktbXknKSxcclxuLy8gICAgICAgYmx1ciA9ICQoJy5mZWVkYmFja19fZm9ybS1ibHVyJyksXHJcbi8vICAgICAgIHBvc1kgPSBibHVyU2VjdGlvbi5vZmZzZXQoKS50b3AgLSBibHVyLm9mZnNldCgpLnRvcCxcclxuLy8gICAgICAgcG9zWCA9IGJsdXJTZWN0aW9uLm9mZnNldCgpLmxlZnQgLSBibHVyLm9mZnNldCgpLmxlZnQ7XHJcbi8vICAgY29uc29sZS5sb2cocG9zWCwgcG9zWSk7XHJcbi8vICAgY29uc29sZS5sb2coaW1nV2lkdGgpO1xyXG5cclxuLy8gICBibHVyLmNzcyh7XHJcbi8vICAgICAnYmFja2dyb3VuZC1zaXplJyA6IGltZ1dpZHRoICsgJ3B4JyArICcgJyArICdhdXRvJyxcclxuLy8gICAgICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcG9zWCArICdweCcgKyAnICcgKyBwb3NZICsgJ3B4J1xyXG4vLyAgIH0pXHJcbi8vIH1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBzY3JvbGxUcmlhbmdsZUJ0bigpe1xyXG4vLyAgIGNvbnN0IHNjcm9sbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlcm9fX3Njcm9sbC1idG4nKVswXTtcclxuLy8gICB2YXIgYmxvY2tIZWlnaHQ7XHJcblxyXG4vLyAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ215LXdvcmtzJylbMF0pe1xyXG4vLyAgICAgYmxvY2tIZWlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdteS13b3JrcycpWzBdLm9mZnNldFRvcDtcclxuLy8gICB9XHJcbi8vICAgZWxzZXtcclxuLy8gICAgIGJsb2NrSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWJvdXQnKVswXS5vZmZzZXRUb3A7XHJcbi8vICAgfVxyXG4gIFxyXG4vLyAgIHNjcm9sbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBibG9ja0hlaWdodCk7XHJcbi8vICAgfSk7ICBcclxuLy8gfVxyXG5cclxuLy8gc2Nyb2xsVHJpYW5nbGVCdG4oKTtcclxuXHJcbi8vIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICBzY3JvbGxUcmlhbmdsZUJ0bigpO1xyXG4vLyB9XHJcblxyXG4vLyBjb25zdCBwYXJhbGxheENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheCcpO1xyXG4vLyBjb25zdCBsYXllcnMgPSBwYXJhbGxheENvbnRhaW5lci5jaGlsZHJlbjtcclxuXHJcbi8vIGNvbnN0IG1vdmVMYXllcnMgPSBlID0+e1xyXG4vLyAgIGNvbnN0IGluaXRpYWxYID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gZS5wYWdlWDtcclxuLy8gICBjb25zdCBpbml0aWFsWSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBlLnBhZ2VZO1xyXG4vLyAgIGNvbnNvbGUubG9nKGluaXRpYWxYLCAgIGluaXRpYWxZKTtcclxuLy8gICBBcnJheS5mcm9tKGxheWVycykuZm9yRWFjaCgobGF5ZXIsIGkpID0+IHtcclxuLy8gICAgIGNvbnN0IGRpdmlkZXIgPSBpIC8gMTAwO1xyXG4vLyAgICAgY29uc3QgcG9zaXRpb25YID0gaW5pdGlhbFggKiBkaXZpZGVyO1xyXG4vLyAgICAgY29uc3QgcG9zaXRpb25ZID0gaW5pdGlhbFkgKiBkaXZpZGVyO1xyXG4vLyAgICAgY29uc3QgYm90dG9tUG9zaXRpb24gPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyICogZGl2aWRlcjtcclxuLy8gICAgIGNvbnN0IGltYWdlID0gbGF5ZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbi8vICAgICBsYXllci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7cG9zaXRpb25YfXB4LCAke3Bvc2l0aW9uWX1weClgO1xyXG4vLyAgICAgbGF5ZXIuc3R5bGUuYm90dG9tID0gYCR7LWJvdHRvbVBvc2l0aW9ufXB4YDtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZUxheWVycyk7XHJcblxyXG5cclxuLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4vLyAgIGlmKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSAkKCcuYWJvdXQnKS5vZmZzZXQoKS50b3Ape1xyXG4vLyAgICAgJCgnLnNraWxsX19jaXJjbGUnKS5hZGRDbGFzcygnc2tpbGxfX2NpcmNsZS1hY3RpdmUnKTtcclxuLy8gICB9ZWxzZXtcclxuLy8gICAgICQoJy5za2lsbF9fY2lyY2xlJykucmVtb3ZlQ2xhc3MoJ3NraWxsX19jaXJjbGUtYWN0aXZlJykgXHJcbi8vICAgfVxyXG4vLyB9KVxyXG5cclxuLy8gbGV0IHNjcm9sbE1lbnUgPSAoZnVuY3Rpb24oKXtcclxuLy8gICBjb25zdCAkbmV3cyA9ICQoJy5zZWN0aW9uX19saXN0Jyk7XHJcbi8vICAgY29uc3QgJGl0ZW0gPSAkKCcuc2lkZWJhcl9fY29udGVudCcpO1xyXG4vLyAgIGNvbnN0ICR3cmFwTWVudSA9ICQoJy5zaWRlYmFyX19pdGVtJyk7XHJcbi8vICAgbGV0IHBvc2l0aW9uQXJ0aWNsZSA9IFtdO1xyXG4vLyAgIGxldCBvZmZzZXRIZWlnaHQgPSAwO1xyXG4vLyAgIGxldCBmbGFnQW5pbWF0aW9uID0gdHJ1ZTtcclxuXHJcbi8vICAgY29uc3QgX3NldFBvc2l0aW9uQXJ0aWNsZSA9IGZ1bmN0aW9uKGVsZW1lbnRzKSB7XHJcbi8vICAgICBlbGVtZW50cy5lYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcclxuLy8gICAgICAgcG9zaXRpb25BcnRpY2xlW2l0ZW1dID0ge31cclxuLy8gICAgICAgcG9zaXRpb25BcnRpY2xlW2l0ZW1dLnRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wIC0gb2Zmc2V0SGVpZ2h0XHJcbi8vICAgICAgIHBvc2l0aW9uQXJ0aWNsZVtpdGVtXS5ib3R0b20gPSBwb3NpdGlvbkFydGljbGVbaXRlbV0udG9wICsgJCh0aGlzKS5pbm5lckhlaWdodCgpXHJcbi8vICAgICB9KVxyXG4vLyAgIH1cclxuICBcclxuLy8gICBjb25zdCBfc2Nyb2xsUGFnZUZpeE1lbnUgPSBmdW5jdGlvbihlKSB7XHJcbi8vICAgICBsZXQgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4vLyAgICAgaWYgKHNjcm9sbCA8ICRuZXdzLm9mZnNldCgpLnRvcCkge1xyXG4vLyAgICAgICAkd3JhcE1lbnUucmVtb3ZlQ2xhc3MoJ2ZpeGVkJylcclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICR3cmFwTWVudS5hZGRDbGFzcygnZml4ZWQnKVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuXHJcbi8vICAgY29uc3QgX3Njcm9sbFBhZ2UgPSBmdW5jdGlvbihlKSB7XHJcbi8vICAgICBjb25zdCBpc0ZpcnN0VmlzaW9uID0gZnVuY3Rpb24oZWxlbWVudCwgY3VycmVudCkge1xyXG4vLyAgICAgICBsZXQgc2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4vLyAgICAgICByZXR1cm4gc2Nyb2xsID49IGVsZW1lbnQudG9wICYmIHNjcm9sbCA8IGVsZW1lbnQuYm90dG9tICYmICFjdXJyZW50Lmhhc0NsYXNzKCdzaWRlYmFyX19saXN0LS1hY3RpdmUnKVxyXG4vLyAgICAgfVxyXG4vLyAgICAgcG9zaXRpb25BcnRpY2xlLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbi8vICAgICAgIGxldCAkY3VycmVudEVsZW1lbnQgPSAkaXRlbS5lcShpbmRleCk7XHJcbi8vICAgICAgIGlmIChpc0ZpcnN0VmlzaW9uKGVsZW1lbnQsICRjdXJyZW50RWxlbWVudCkpIHtcclxuLy8gICAgICAgICAkY3VycmVudEVsZW1lbnQuYWRkQ2xhc3MoJ3NpZGViYXJfX2xpc3QtLWFjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXJfX2xpc3QtLWFjdGl2ZScpXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCBfY2xpY2tNZW51ID0gZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgaWYgKGZsYWdBbmltYXRpb24pIHtcclxuLy8gICAgICAgZmxhZ0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4vLyAgICAgICBsZXQgJGVsZW1lbnQgPSAkKGUudGFyZ2V0KVxyXG4vLyAgICAgICBsZXQgaW5kZXggPSAkZWxlbWVudC5pbmRleCgpXHJcbi8vICAgICAgIGxldCBzZWN0aW9uT2Zmc2V0ID0gTWF0aC5jZWlsKHBvc2l0aW9uQXJ0aWNsZVtpbmRleF0udG9wKTtcclxuLy8gICAgICAgJChkb2N1bWVudCkub2ZmKCdzY3JvbGwnLCBfc2Nyb2xsUGFnZSlcclxuLy8gICAgICAgJGVsZW1lbnQuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2lkZWJhcl9fbGlzdC0tYWN0aXZlJylcclxuXHJcbi8vICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlY3Rpb25PZmZzZXR9LCAxMDAwLCAoKSA9PiB7XHJcbi8vICAgICAgICAgJGVsZW1lbnQuYWRkQ2xhc3MoJ3NpZGViYXJfX2xpc3QtLWFjdGl2ZScpXHJcbi8vICAgICAgICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIF9zY3JvbGxQYWdlKVxyXG4vLyAgICAgICAgIGZsYWdBbmltYXRpb24gPSB0cnVlO1xyXG4vLyAgICAgICB9KVxyXG4gICAgICBcclxuLy8gICAgIH1cclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IGFkZExpc3RlbmVyID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICAkKHdpbmRvdykub25lKCdsb2FkJywgZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICBfc2V0UG9zaXRpb25BcnRpY2xlKCRuZXdzKVxyXG4vLyAgICAgICAkKCcuc2lkZWJhcl9faXRlbScpLm9uKCdjbGljaycsIF9jbGlja01lbnUpXHJcbi8vICAgICAgICQoZG9jdW1lbnQpLm9uKCdzY3JvbGwnLCBfc2Nyb2xsUGFnZSlcclxuLy8gICAgICAgJChkb2N1bWVudCkub24oJ3Njcm9sbCcsIF9zY3JvbGxQYWdlRml4TWVudSlcclxuLy8gICAgIH0pXHJcblxyXG4vLyAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbihlKSB7XHJcbi8vICAgICAgIF9zZXRQb3NpdGlvbkFydGljbGUoJG5ld3MpXHJcbi8vICAgICB9KVxyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIGluaXQ6IGFkZExpc3RlbmVyXHJcbi8vICAgfVxyXG5cclxuLy8gfSkoKVxyXG5cclxuLy8gc2Nyb2xsTWVudS5pbml0KCk7XHJcblxyXG5cclxuJCgnLmhhbWJ1cmdlci1tZW51JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAkKCcub3ZlcmxheScpLmFkZENsYXNzKCdvdmVybGF5LXZpc2libGUnKTsgXHJcbiAgJCgnYm9keScpLmFkZENsYXNzKCdib2R5LWFjdGl2ZV9fbWVudScpO1xyXG59KVxyXG5cclxuJCgnLm92ZXJsYXlfX2J0bi1leGl0JykuY2xpY2soZnVuY3Rpb24oKXtcclxuICAkKCcub3ZlcmxheScpLnJlbW92ZUNsYXNzKCdvdmVybGF5LXZpc2libGUnKTsgXHJcbiAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdib2R5LWFjdGl2ZV9fbWVudScpO1xyXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });