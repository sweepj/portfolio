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
eval("\n\n// $(document).ready(function(){\n//   blur();\n// })\n\n// $(window).resize(function(){\n//   blur();\n// });\n\n// function blur(){\n//   var imgWidth = $('.say-my__background').width(),\n//       blurSection = $('.say-my'),\n//       blur = $('.feedback__form-blur'),\n//       posY = blurSection.offset().top - blur.offset().top,\n//       posX = blurSection.offset().left - blur.offset().left;\n//   console.log(posX, posY);\n//   console.log(imgWidth);\n\n//   blur.css({\n//     'background-size' : imgWidth + 'px' + ' ' + 'auto',\n//     'background-position': posX + 'px' + ' ' + posY + 'px'\n//   })\n// }\n\n\n// function scrollTriangleBtn(){\n//   const scrollBtn = document.getElementsByClassName('hero__scroll-btn')[0];\n//   var blockHeight;\n\n//   if(document.getElementsByClassName('my-works')[0]){\n//     blockHeight = document.getElementsByClassName('my-works')[0].offsetTop;\n//   }\n//   else{\n//     blockHeight = document.getElementsByClassName('about')[0].offsetTop;\n//   }\n\n//   scrollBtn.addEventListener('click', function(){\n//       window.scrollTo(0, blockHeight);\n//   });  \n// }\n\n// scrollTriangleBtn();\n\n// window.onresize = function () {\n//   scrollTriangleBtn();\n// }\n\n// const parallaxContainer = document.querySelector('.parallax');\n// const layers = parallaxContainer.children;\n\n// const moveLayers = e =>{\n//   const initialX = window.innerWidth / 2 - e.pageX;\n//   const initialY = window.innerHeight / 2 - e.pageY;\n//   console.log(initialX,   initialY);\n//   Array.from(layers).forEach((layer, i) => {\n//     const divider = i / 100;\n//     const positionX = initialX * divider;\n//     const positionY = initialY * divider;\n//     const bottomPosition = window.innerHeight / 2 * divider;\n//     const image = layer.firstElementChild;\n//     layer.style.transform = `translate(${positionX}px, ${positionY}px)`;\n//     layer.style.bottom = `${-bottomPosition}px`;\n//   });\n// }\n// window.addEventListener('mousemove', moveLayers);\n\n\n$(window).scroll(function () {\n  if ($(window).scrollTop() >= $('.about').offset().top) {\n    $('.skill__circle').addClass('skill__circle-active');\n  } else {\n    $('.skill__circle').removeClass('skill__circle-active');\n  }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tYWluLmpzPzI5NjMiXSwibmFtZXMiOlsiJCIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsIm9mZnNldCIsInRvcCIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQUEsRUFBRUMsTUFBRixFQUFVQyxNQUFWLENBQWlCLFlBQVU7QUFDekIsTUFBR0YsRUFBRUMsTUFBRixFQUFVRSxTQUFWLE1BQXlCSCxFQUFFLFFBQUYsRUFBWUksTUFBWixHQUFxQkMsR0FBakQsRUFBcUQ7QUFDbkRMLE1BQUUsZ0JBQUYsRUFBb0JNLFFBQXBCLENBQTZCLHNCQUE3QjtBQUNELEdBRkQsTUFFSztBQUNITixNQUFFLGdCQUFGLEVBQW9CTyxXQUFwQixDQUFnQyxzQkFBaEM7QUFDRDtBQUNGLENBTkQiLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy8gICBibHVyKCk7XHJcbi8vIH0pXHJcblxyXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbi8vICAgYmx1cigpO1xyXG4vLyB9KTtcclxuXHJcbi8vIGZ1bmN0aW9uIGJsdXIoKXtcclxuLy8gICB2YXIgaW1nV2lkdGggPSAkKCcuc2F5LW15X19iYWNrZ3JvdW5kJykud2lkdGgoKSxcclxuLy8gICAgICAgYmx1clNlY3Rpb24gPSAkKCcuc2F5LW15JyksXHJcbi8vICAgICAgIGJsdXIgPSAkKCcuZmVlZGJhY2tfX2Zvcm0tYmx1cicpLFxyXG4vLyAgICAgICBwb3NZID0gYmx1clNlY3Rpb24ub2Zmc2V0KCkudG9wIC0gYmx1ci5vZmZzZXQoKS50b3AsXHJcbi8vICAgICAgIHBvc1ggPSBibHVyU2VjdGlvbi5vZmZzZXQoKS5sZWZ0IC0gYmx1ci5vZmZzZXQoKS5sZWZ0O1xyXG4vLyAgIGNvbnNvbGUubG9nKHBvc1gsIHBvc1kpO1xyXG4vLyAgIGNvbnNvbGUubG9nKGltZ1dpZHRoKTtcclxuXHJcbi8vICAgYmx1ci5jc3Moe1xyXG4vLyAgICAgJ2JhY2tncm91bmQtc2l6ZScgOiBpbWdXaWR0aCArICdweCcgKyAnICcgKyAnYXV0bycsXHJcbi8vICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbic6IHBvc1ggKyAncHgnICsgJyAnICsgcG9zWSArICdweCdcclxuLy8gICB9KVxyXG4vLyB9XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gc2Nyb2xsVHJpYW5nbGVCdG4oKXtcclxuLy8gICBjb25zdCBzY3JvbGxCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoZXJvX19zY3JvbGwtYnRuJylbMF07XHJcbi8vICAgdmFyIGJsb2NrSGVpZ2h0O1xyXG5cclxuLy8gICBpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdteS13b3JrcycpWzBdKXtcclxuLy8gICAgIGJsb2NrSGVpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXktd29ya3MnKVswXS5vZmZzZXRUb3A7XHJcbi8vICAgfVxyXG4vLyAgIGVsc2V7XHJcbi8vICAgICBibG9ja0hlaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Fib3V0JylbMF0ub2Zmc2V0VG9wO1xyXG4vLyAgIH1cclxuICBcclxuLy8gICBzY3JvbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4vLyAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgYmxvY2tIZWlnaHQpO1xyXG4vLyAgIH0pOyAgXHJcbi8vIH1cclxuXHJcbi8vIHNjcm9sbFRyaWFuZ2xlQnRuKCk7XHJcblxyXG4vLyB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbi8vICAgc2Nyb2xsVHJpYW5nbGVCdG4oKTtcclxuLy8gfVxyXG5cclxuLy8gY29uc3QgcGFyYWxsYXhDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXgnKTtcclxuLy8gY29uc3QgbGF5ZXJzID0gcGFyYWxsYXhDb250YWluZXIuY2hpbGRyZW47XHJcblxyXG4vLyBjb25zdCBtb3ZlTGF5ZXJzID0gZSA9PntcclxuLy8gICBjb25zdCBpbml0aWFsWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGUucGFnZVg7XHJcbi8vICAgY29uc3QgaW5pdGlhbFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyIC0gZS5wYWdlWTtcclxuLy8gICBjb25zb2xlLmxvZyhpbml0aWFsWCwgICBpbml0aWFsWSk7XHJcbi8vICAgQXJyYXkuZnJvbShsYXllcnMpLmZvckVhY2goKGxheWVyLCBpKSA9PiB7XHJcbi8vICAgICBjb25zdCBkaXZpZGVyID0gaSAvIDEwMDtcclxuLy8gICAgIGNvbnN0IHBvc2l0aW9uWCA9IGluaXRpYWxYICogZGl2aWRlcjtcclxuLy8gICAgIGNvbnN0IHBvc2l0aW9uWSA9IGluaXRpYWxZICogZGl2aWRlcjtcclxuLy8gICAgIGNvbnN0IGJvdHRvbVBvc2l0aW9uID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAqIGRpdmlkZXI7XHJcbi8vICAgICBjb25zdCBpbWFnZSA9IGxheWVyLmZpcnN0RWxlbWVudENoaWxkO1xyXG4vLyAgICAgbGF5ZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3Bvc2l0aW9uWH1weCwgJHtwb3NpdGlvbll9cHgpYDtcclxuLy8gICAgIGxheWVyLnN0eWxlLmJvdHRvbSA9IGAkey1ib3R0b21Qb3NpdGlvbn1weGA7XHJcbi8vICAgfSk7XHJcbi8vIH1cclxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdmVMYXllcnMpO1xyXG5cclxuXHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gJCgnLmFib3V0Jykub2Zmc2V0KCkudG9wKXtcclxuICAgICQoJy5za2lsbF9fY2lyY2xlJykuYWRkQ2xhc3MoJ3NraWxsX19jaXJjbGUtYWN0aXZlJyk7XHJcbiAgfWVsc2V7XHJcbiAgICAkKCcuc2tpbGxfX2NpcmNsZScpLnJlbW92ZUNsYXNzKCdza2lsbF9fY2lyY2xlLWFjdGl2ZScpIFxyXG4gIH1cclxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main.js\n");

/***/ })

/******/ });