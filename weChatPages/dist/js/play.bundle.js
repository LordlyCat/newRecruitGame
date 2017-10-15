webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    position: relative;\n    background: url(" + __webpack_require__(20) + ") no-repeat;\n    background-size: 100% auto;\n    overflow: hidden;\n}\n\n.mainBody{\n    width: 100%;\n}\n\n.UFO img, .movingUFO img{\n    width: 100%;\n}\n\n.UFO{\n    position: absolute;\n    width: 1%;\n    top: -27%;\n    left: -36%;\n    transition: width 2.5s;\n}\n\n.movingUFO{\n    position: absolute;\n    width: 18%;\n    top: 10%;\n    left: 9%;\n    transition: width 2s, top 3s;\n    z-index: 1000;\n}\n\n\n.spaceStation{\n    position: relative;\n    width: 100%;\n    margin-top: 28%;\n    /*margin-left: */\n}\n\n.spaceStation img.space{\n    width: 90%;\n    margin-left: 5%;\n}\n\n.redRock{\n    position: absolute;\n    width: 100%;\n    top: 67%;\n    opacity: 0.1;\n}\n\n.redRock img{\n    position: absolute;\n    width: 72%;\n    top: 20%;\n    left: 14%;\n}\n\nimg.astronaut{\n    position: absolute;\n    width: 20%;\n    top: 89%;\n    left: 46%;\n}\n\n\n.btnWrapper{\n    position: relative;\n    width: 50%;\n    margin-left: 25%;\n    margin-top: 30%;\n}\n\n.btnWrapper img.order{\n    position: absolute;\n    width: 20%;\n}\n\n.right{\n    margin-top: 31%;\n    margin-left: 83%;\n}\n\n.left{\n    margin-left: -1%;\n    margin-top: 31%;\n}\n\n.top{\n    margin-left: 40%;\n    margin-top: 3%;\n}\n\n.buttom{\n    margin-left: 40%;\n    margin-top: 70%;\n}\n\n.playBtn{\n    position: relative;\n}\n.btnWrapper img.btn{\n    width: 55%;\n    position: absolute;\n    margin-top: 26%;\n    left: 22%;\n}\n\n.btnWrapper img.smallBtn{\n    position: absolute;\n    width: 40%;\n    margin-top: 26%;\n    left: 30%;\n}\n\n.btnWrapper img.pressSmallBtn{\n    position: absolute;\n    width: 35%;\n    margin-top: 30%;\n    left: 32%;\n}\n\n\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3b63820e42874c2f53229c8e02c812b4.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e5c881c8206ecd9e60cda77a2d53ed48.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3551d17637b976579056a1407067cc53.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca9d6541de09f60b7139db63857664bf.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70a9d2f3613b8c531587e099904eaf5.png";

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_playing_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_shine_0_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_shine_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shine_2_png__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shine_2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_shine_2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_shine_3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_shine_4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Ajax_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Ajax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Ajax_js__);









var UFO = document.querySelector('.UFO');
var order = document.querySelectorAll('.order');
var redRock = document.querySelector('.redRock');
var playBtn = document.querySelector('.smallBtn');
var spaceImg = document.querySelector('.space');
var redRockImg = redRock.querySelector('img');
var clickNUm = 0;

localStorage.setItem('clickNUm', clickNUm);
console.log(localStorage.clickNUm);

playBtn.addEventListener('touchstart', function() {
    playBtn.className = 'pressSmallBtn';
    order[0].style.marginLeft = '77%';
    order[1].style.marginLeft = '5%';
    order[2].style.marginTop = '7%';
    order[3].style.marginTop = '65%';
    setTimeout(function() {
        playBtn.className = 'smallBtn';
        order[0].style.marginLeft = '83%';
        order[1].style.marginLeft = '-1%';
        order[2].style.marginTop = '3%';
        order[3].style.marginTop = '70%';
    }, 30)
}, false)

setTimeout(function() {
    UFO.className = 'movingUFO';
    UFO.style.top = '10%';
}, 500);

setInterval(function() {
    if (UFO.style.top === '10%') {
        UFO.style.top = '18%';
    } else if (UFO.style.top === '18%') {
        UFO.style.top = '10%';
    }
}, 1000);


var clickSpeed = 0;

playBtn.addEventListener('touchstart', function() {
    if (clickSpeed < 100) {
        clickSpeed += 5;
    }
    if (clickSpeed > 100) {
        clickSpeed = 100;
    }
    if (clickSpeed > 30 && clickSpeed < 50) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default.a;
    }
    if (clickSpeed >= 50 && clickSpeed < 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default.a;
    }
    if (clickSpeed > 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default.a;
    }
    redRock.style.opacity = clickSpeed / 100;
}, false);

setInterval(function() {
    redRock.style.opacity -= 0.1;
    clickSpeed -= 3;
    if (redRock.style.opacity < 0.1) {
        redRock.style.opacity = 0.1;
    }
    if (clickSpeed < 0) {
        clickSpeed = 0;
    }
    if (clickSpeed > 30 && clickSpeed < 50) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default.a;
    }
    if (clickSpeed >= 50 && clickSpeed < 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default.a;
    }
    if (clickSpeed > 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default.a;
    }
    if (clickSpeed <= 30) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png___default.a;
    }
}, 200);


playBtn.addEventListener('touchstart', clickSend, false);

var url = 'https://wx.idsbllp.cn/gavagame/cet/user/click' + window.location.search;

var ten = 0;

function clickSend() {
    ten++;
    if (ten >= 10) {
        send();
        ten = 0;
    }
}

function send() {
    clickNUm += 10;
    
    localStorage.setItem('clickNUm', clickNUm);
    __WEBPACK_IMPORTED_MODULE_6__Ajax_js___default()({
        url: url,
        method: "GET",
        success: function(data) {
            console.log(data);
            var dataObj = JSON.parse(data);
            if (dataObj.status == 400) {
                clickNUm += Math.random() * 10;
                //localStorage.setItem('clickNUm', clickNUm);
                window.location.href = '../view/end.html' + window.location.search;
            }
        },
        error: function(data) {
            console.log(data);
        }
    });
}








//The end

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(1)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(5, function() {
			var newContent = __webpack_require__(5);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4ae9ac99bef51cdfa2e860dbbe74c12.png";

/***/ })
],[18]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3BsYXlpbmcuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVfMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zaGluZV8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NoaW5lXzIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVfMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zaGluZV80LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGxheWluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3BsYXlpbmcuY3NzPzNmNTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wbGF5aW5nQmFja2dyb3VuZC5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBR0E7QUFDQSw0QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxTQUFTLHlCQUF5QixpRUFBaUYsaUNBQWlDLHVCQUF1QixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsNkJBQTZCLGtCQUFrQixHQUFHLFNBQVMseUJBQXlCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLGVBQWUseUJBQXlCLGlCQUFpQixlQUFlLGVBQWUsbUNBQW1DLG9CQUFvQixHQUFHLG9CQUFvQix5QkFBeUIsa0JBQWtCLHNCQUFzQiwwQkFBMEIsNEJBQTRCLGlCQUFpQixzQkFBc0IsR0FBRyxhQUFhLHlCQUF5QixrQkFBa0IsZUFBZSxtQkFBbUIsR0FBRyxpQkFBaUIseUJBQXlCLGlCQUFpQixlQUFlLGdCQUFnQixHQUFHLGtCQUFrQix5QkFBeUIsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsa0JBQWtCLHlCQUF5QixpQkFBaUIsdUJBQXVCLHNCQUFzQixHQUFHLDBCQUEwQix5QkFBeUIsaUJBQWlCLEdBQUcsV0FBVyxzQkFBc0IsdUJBQXVCLEdBQUcsVUFBVSx1QkFBdUIsc0JBQXNCLEdBQUcsU0FBUyx1QkFBdUIscUJBQXFCLEdBQUcsWUFBWSx1QkFBdUIsc0JBQXNCLEdBQUcsYUFBYSx5QkFBeUIsR0FBRyxzQkFBc0IsaUJBQWlCLHlCQUF5QixzQkFBc0IsZ0JBQWdCLEdBQUcsNkJBQTZCLHlCQUF5QixpQkFBaUIsc0JBQXNCLGdCQUFnQixHQUFHLGtDQUFrQyx5QkFBeUIsaUJBQWlCLHNCQUFzQixnQkFBZ0IsR0FBRzs7QUFFcjBEOzs7Ozs7O0FDUEEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7OztBQVNBLFM7Ozs7OztBQ3pJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQSxnRiIsImZpbGUiOiJqcy9wbGF5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9wbGF5aW5nQmFja2dyb3VuZC5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW5Cb2R5e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLlVGTyBpbWcsIC5tb3ZpbmdVRk8gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLlVGT3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHRvcDogLTI3JTtcXG4gICAgbGVmdDogLTM2JTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMi41cztcXG59XFxuXFxuLm1vdmluZ1VGT3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTglO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogOSU7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCB0b3AgM3M7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcblxcbi5zcGFjZVN0YXRpb257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDI4JTtcXG4gICAgLyptYXJnaW4tbGVmdDogKi9cXG59XFxuXFxuLnNwYWNlU3RhdGlvbiBpbWcuc3BhY2V7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuLnJlZFJvY2t7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNjclO1xcbiAgICBvcGFjaXR5OiAwLjE7XFxufVxcblxcbi5yZWRSb2NrIGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNzIlO1xcbiAgICB0b3A6IDIwJTtcXG4gICAgbGVmdDogMTQlO1xcbn1cXG5cXG5pbWcuYXN0cm9uYXV0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHRvcDogODklO1xcbiAgICBsZWZ0OiA0NiU7XFxufVxcblxcblxcbi5idG5XcmFwcGVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG59XFxuXFxuLmJ0bldyYXBwZXIgaW1nLm9yZGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5yaWdodHtcXG4gICAgbWFyZ2luLXRvcDogMzElO1xcbiAgICBtYXJnaW4tbGVmdDogODMlO1xcbn1cXG5cXG4ubGVmdHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcXG4gICAgbWFyZ2luLXRvcDogMzElO1xcbn1cXG5cXG4udG9we1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzJTtcXG59XFxuXFxuLmJ1dHRvbXtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgbWFyZ2luLXRvcDogNzAlO1xcbn1cXG5cXG4ucGxheUJ0bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuV3JhcHBlciBpbWcuYnRue1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IDI2JTtcXG4gICAgbGVmdDogMjIlO1xcbn1cXG5cXG4uYnRuV3JhcHBlciBpbWcuc21hbGxCdG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLXRvcDogMjYlO1xcbiAgICBsZWZ0OiAzMCU7XFxufVxcblxcbi5idG5XcmFwcGVyIGltZy5wcmVzc1NtYWxsQnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG4gICAgbGVmdDogMzIlO1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9wbGF5aW5nLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzYjYzODIwZTQyODc0YzJmNTMyMjljOGUwMmM4MTJiNC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVfMC5wbmdcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNWM4ODFjODIwNmVjZDllNjBjZGE3N2EyZDUzZWQ0OC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzNTUxZDE3NjM3Yjk3NjU3OTA1NmExNDA3MDY3Y2M1My5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVfMi5wbmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYTlkNjU0MWRlMDlmNjBiNzEzOWRiNjM4NTc2NjRiZi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVfMy5wbmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzBhOWQyZjM2MTNiOGM1MzE1ODdlMDk5OTA0ZWFmNS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVfNC5wbmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICcuLi9jc3MvcGxheWluZy5jc3MnO1xuaW1wb3J0IHNoaW5lXzAgZnJvbSAnLi4vaW1nL3NoaW5lXzAucG5nJztcbmltcG9ydCBzaGluZV8xIGZyb20gJy4uL2ltZy9zaGluZV8xLnBuZyc7XG5pbXBvcnQgc2hpbmVfMiBmcm9tICcuLi9pbWcvc2hpbmVfMi5wbmcnO1xuaW1wb3J0IHNoaW5lXzMgZnJvbSAnLi4vaW1nL3NoaW5lXzMucG5nJztcbmltcG9ydCBzaGluZV80IGZyb20gJy4uL2ltZy9zaGluZV80LnBuZyc7XG5cbmltcG9ydCBhamF4IGZyb20gJy4vQWpheC5qcyc7XG5cbnZhciBVRk8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuVUZPJyk7XG52YXIgb3JkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcub3JkZXInKTtcbnZhciByZWRSb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlZFJvY2snKTtcbnZhciBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNtYWxsQnRuJyk7XG52YXIgc3BhY2VJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BhY2UnKTtcbnZhciByZWRSb2NrSW1nID0gcmVkUm9jay5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbnZhciBjbGlja05VbSA9IDA7XG5cbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGlja05VbScsIGNsaWNrTlVtKTtcbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5jbGlja05VbSk7XG5cbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgIHBsYXlCdG4uY2xhc3NOYW1lID0gJ3ByZXNzU21hbGxCdG4nO1xuICAgIG9yZGVyWzBdLnN0eWxlLm1hcmdpbkxlZnQgPSAnNzclJztcbiAgICBvcmRlclsxXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzUlJztcbiAgICBvcmRlclsyXS5zdHlsZS5tYXJnaW5Ub3AgPSAnNyUnO1xuICAgIG9yZGVyWzNdLnN0eWxlLm1hcmdpblRvcCA9ICc2NSUnO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHBsYXlCdG4uY2xhc3NOYW1lID0gJ3NtYWxsQnRuJztcbiAgICAgICAgb3JkZXJbMF0uc3R5bGUubWFyZ2luTGVmdCA9ICc4MyUnO1xuICAgICAgICBvcmRlclsxXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0xJSc7XG4gICAgICAgIG9yZGVyWzJdLnN0eWxlLm1hcmdpblRvcCA9ICczJSc7XG4gICAgICAgIG9yZGVyWzNdLnN0eWxlLm1hcmdpblRvcCA9ICc3MCUnO1xuICAgIH0sIDMwKVxufSwgZmFsc2UpXG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgVUZPLmNsYXNzTmFtZSA9ICdtb3ZpbmdVRk8nO1xuICAgIFVGTy5zdHlsZS50b3AgPSAnMTAlJztcbn0sIDUwMCk7XG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChVRk8uc3R5bGUudG9wID09PSAnMTAlJykge1xuICAgICAgICBVRk8uc3R5bGUudG9wID0gJzE4JSc7XG4gICAgfSBlbHNlIGlmIChVRk8uc3R5bGUudG9wID09PSAnMTglJykge1xuICAgICAgICBVRk8uc3R5bGUudG9wID0gJzEwJSc7XG4gICAgfVxufSwgMTAwMCk7XG5cblxudmFyIGNsaWNrU3BlZWQgPSAwO1xuXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoY2xpY2tTcGVlZCA8IDEwMCkge1xuICAgICAgICBjbGlja1NwZWVkICs9IDU7XG4gICAgfVxuICAgIGlmIChjbGlja1NwZWVkID4gMTAwKSB7XG4gICAgICAgIGNsaWNrU3BlZWQgPSAxMDA7XG4gICAgfVxuICAgIGlmIChjbGlja1NwZWVkID4gMzAgJiYgY2xpY2tTcGVlZCA8IDUwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMTtcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPj0gNTAgJiYgY2xpY2tTcGVlZCA8IDgwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMztcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPiA4MCkge1xuICAgICAgICByZWRSb2NrSW1nLnNyYyA9IHNoaW5lXzQ7XG4gICAgfVxuICAgIHJlZFJvY2suc3R5bGUub3BhY2l0eSA9IGNsaWNrU3BlZWQgLyAxMDA7XG59LCBmYWxzZSk7XG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIHJlZFJvY2suc3R5bGUub3BhY2l0eSAtPSAwLjE7XG4gICAgY2xpY2tTcGVlZCAtPSAzO1xuICAgIGlmIChyZWRSb2NrLnN0eWxlLm9wYWNpdHkgPCAwLjEpIHtcbiAgICAgICAgcmVkUm9jay5zdHlsZS5vcGFjaXR5ID0gMC4xO1xuICAgIH1cbiAgICBpZiAoY2xpY2tTcGVlZCA8IDApIHtcbiAgICAgICAgY2xpY2tTcGVlZCA9IDA7XG4gICAgfVxuICAgIGlmIChjbGlja1NwZWVkID4gMzAgJiYgY2xpY2tTcGVlZCA8IDUwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMTtcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPj0gNTAgJiYgY2xpY2tTcGVlZCA8IDgwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMztcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPiA4MCkge1xuICAgICAgICByZWRSb2NrSW1nLnNyYyA9IHNoaW5lXzQ7XG4gICAgfVxuICAgIGlmIChjbGlja1NwZWVkIDw9IDMwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMDtcbiAgICB9XG59LCAyMDApO1xuXG5cbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNsaWNrU2VuZCwgZmFsc2UpO1xuXG52YXIgdXJsID0gJ2h0dHBzOi8vd3guaWRzYmxscC5jbi9nYXZhZ2FtZS9jZXQvdXNlci9jbGljaycgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuXG52YXIgdGVuID0gMDtcblxuZnVuY3Rpb24gY2xpY2tTZW5kKCkge1xuICAgIHRlbisrO1xuICAgIGlmICh0ZW4gPj0gMTApIHtcbiAgICAgICAgc2VuZCgpO1xuICAgICAgICB0ZW4gPSAwO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VuZCgpIHtcbiAgICBjbGlja05VbSArPSAxMDtcbiAgICBcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2xpY2tOVW0nLCBjbGlja05VbSk7XG4gICAgYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgdmFyIGRhdGFPYmogPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGFPYmouc3RhdHVzID09IDQwMCkge1xuICAgICAgICAgICAgICAgIGNsaWNrTlVtICs9IE1hdGgucmFuZG9tKCkgKiAxMDtcbiAgICAgICAgICAgICAgICAvL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdjbGlja05VbScsIGNsaWNrTlVtKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi92aWV3L2VuZC5odG1sJyArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5cblxuXG5cblxuXG5cbi8vVGhlIGVuZFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3BsYXlpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BsYXlpbmcuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BsYXlpbmcuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3BsYXlpbmcuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jc3MvcGxheWluZy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImE0YWU5YWM5OWJlZjUxY2RmYTJlODYwZGJiZTc0YzEyLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9wbGF5aW5nQmFja2dyb3VuZC5wbmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=