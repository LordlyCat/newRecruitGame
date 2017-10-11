webpackJsonp([0],[
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
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    position: relative;\n    background: url(" + __webpack_require__(18) + ") no-repeat;\n    background-size: 100%;\n    overflow: hidden;\n}\n\n.mainBody{\n    width: 100%;\n}\n\n.UFO img, .movingUFO img{\n    width: 100%;\n}\n\n.UFO{\n    position: absolute;\n    width: 1%;\n    top: -7%;\n    left: -6%;\n    transition: width 2.5s;\n}\n\n.movingUFO{\n    position: absolute;\n    width: 18%;\n    top: 6%;\n    left: 9%;\n    transition: width 2s, top 3s;\n    z-index: 1000;\n}\n\n\n.spaceStation{\n    position: relative;\n    width: 100%;\n    margin-top: 20%;\n    /*margin-left: */\n}\n\n.spaceStation img.space{\n    width: 90%;\n    margin-left: 5%;\n}\n\n.redRock{\n    position: absolute;\n    width: 100%;\n    top: 68%;\n    opacity: 1;\n}\n\n.redRock img{\n    position: absolute;\n    width: 72%;\n    top: 30%;\n    left: 14%;\n}\n\nimg.astronaut{\n    position: absolute;\n    width: 20%;\n    top: 89%;\n    left: 51%;\n}\n\n.endWords{\n    position: relative;\n    width: 100%;\n}\n\n.endWords img.endBoard{\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 10%;\n}\n\n.thankWords{\n    position: absolute;\n    width: 70%;\n    height: 100px;\n    top: 23%;\n    left: 14%;\n}\n\n.backBtn{\n    position: relative;\n    width: 36%;\n    margin-left: 30%;\n    margin-top: 5%;\n    z-index: 10;\n}\nimg.blueBtn{\n    width: 100%;\n}\n\n.yellowBtn{\n    position: absolute;\n    width: 92%;\n    background: url(" + __webpack_require__(6) + ") no-repeat;\n    background-size: 100% 100%;\n    z-index: 1000;\n    margin-top: -43%;\n    margin-left: 4%;\n    line-height: 260%;\n    -ms-text-align-last: center;\n    text-align-last: center;\n    font-family: \"Tahoma\";\n}\n\n.pressBtn{\n    position: absolute;\n    background: url(" + __webpack_require__(6) + ") no-repeat;\n    background-size: 100% 100%;\n    z-index: 1000;\n    line-height: 260%;\n    width: 80%;\n    margin-top: -39%;\n    margin-left: 8%;\n    text-align-last: center;\n    font-family: Tahoma\n}\n\nimg.backWords{\n    width: 70%;\n}\n", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_end_css__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_end_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_end_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_shine_0_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_shine_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shine_2_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shine_2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_shine_2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_shine_3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_shine_4_png__);







var UFO = document.querySelector('.UFO');

setTimeout(function() {
    UFO.className = 'movingUFO';
    UFO.style.top = '6%';
}, 500);



setTimeout(function() {
    setInterval(function() {
        if (UFO.style.top === '6%') {
            UFO.style.top = '10%';
        } else if (UFO.style.top === '10%') {
            UFO.style.top = '6%';
        }
    }, 1000);
}, 2000);

function changeImg(index) {
    //var src = null;

    switch (index) {
        case 0:
            shineImg.src = __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png___default.a;
            break;
        case 1:
            shineImg.src = __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default.a;
            break;
        case 2:
            shineImg.src = __WEBPACK_IMPORTED_MODULE_3__img_shine_2_png___default.a;
            break;
        case 3:
            shineImg.src = __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default.a;
            break;
        case 4:
            shineImg.src = __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default.a;
            break;

        default:
            shineImg.src = __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default.a;
            break;
    }
}


var shineImg = document.querySelector('.redRock').querySelector('img');
var index = 0,
    flag = true;
setInterval(function() {
    if (index <= 4 && flag) {
        index += 1;
    }
    if (index > 4) {
        flag = false;
    }
    if (index >= 0 && !flag) {
        index -= 1;
    }
    if (index <= 0) {
        flag = true;
    }
    changeImg(index);
}, 100);

//button
var backBtn = document.querySelector('.yellowBtn');

backBtn.addEventListener('click', function() {
    // width: 86%;
    // margin-top: -39%;
    // margin-left: 6%;
    backBtn.className = 'pressBtn';
    setTimeout(function() {
        backBtn.className = 'yellowBtn';
    }, 200);
}, false);

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df573a5aa56398d33bc7ae64e444c5fa.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3b63820e42874c2f53229c8e02c812b4.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e5c881c8206ecd9e60cda77a2d53ed48.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3551d17637b976579056a1407067cc53.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca9d6541de09f60b7139db63857664bf.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70a9d2f3613b8c531587e099904eaf5.png";

/***/ })
],[16]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2VuZC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9iYWNrWWVsbG93QnRuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvZW5kLmNzcz83MTgwIiwid2VicGFjazovLy8uL3NyYy9pbWcvZW5kQmFja2dyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zaGluZV8wLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NoaW5lXzEucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVfMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zaGluZV8zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NoaW5lXzQucG5nIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsNEJBQTZCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsU0FBUyx5QkFBeUIsaUVBQTZFLDRCQUE0Qix1QkFBdUIsR0FBRyxjQUFjLGtCQUFrQixHQUFHLDZCQUE2QixrQkFBa0IsR0FBRyxTQUFTLHlCQUF5QixnQkFBZ0IsZUFBZSxnQkFBZ0IsNkJBQTZCLEdBQUcsZUFBZSx5QkFBeUIsaUJBQWlCLGNBQWMsZUFBZSxtQ0FBbUMsb0JBQW9CLEdBQUcsb0JBQW9CLHlCQUF5QixrQkFBa0Isc0JBQXNCLDBCQUEwQiw0QkFBNEIsaUJBQWlCLHNCQUFzQixHQUFHLGFBQWEseUJBQXlCLGtCQUFrQixlQUFlLGlCQUFpQixHQUFHLGlCQUFpQix5QkFBeUIsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsa0JBQWtCLHlCQUF5QixpQkFBaUIsZUFBZSxnQkFBZ0IsR0FBRyxjQUFjLHlCQUF5QixrQkFBa0IsR0FBRywyQkFBMkIsaUJBQWlCLHNCQUFzQixzQkFBc0IsR0FBRyxnQkFBZ0IseUJBQXlCLGlCQUFpQixvQkFBb0IsZUFBZSxnQkFBZ0IsR0FBRyxhQUFhLHlCQUF5QixpQkFBaUIsdUJBQXVCLHFCQUFxQixrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQixHQUFHLGVBQWUseUJBQXlCLGlCQUFpQixnRUFBNkUsaUNBQWlDLG9CQUFvQix1QkFBdUIsc0JBQXNCLHdCQUF3QixrQ0FBa0MsOEJBQThCLDhCQUE4QixHQUFHLGNBQWMseUJBQXlCLGdFQUE2RSxpQ0FBaUMsb0JBQW9CLHdCQUF3QixpQkFBaUIsdUJBQXVCLHNCQUFzQiw4QkFBOEIsNEJBQTRCLGtCQUFrQixpQkFBaUIsR0FBRzs7QUFFdG9FOzs7Ozs7O0FDUEEsaUNBQWlDLHcwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsUzs7Ozs7O0FDbkZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7O0FDekJBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0YiLCJmaWxlIjoianMvZW5kLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9lbmRCYWNrZ3JvdW5kLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW5Cb2R5e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLlVGTyBpbWcsIC5tb3ZpbmdVRk8gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLlVGT3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHRvcDogLTclO1xcbiAgICBsZWZ0OiAtNiU7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDIuNXM7XFxufVxcblxcbi5tb3ZpbmdVRk97XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDE4JTtcXG4gICAgdG9wOiA2JTtcXG4gICAgbGVmdDogOSU7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCB0b3AgM3M7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcblxcbi5zcGFjZVN0YXRpb257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDIwJTtcXG4gICAgLyptYXJnaW4tbGVmdDogKi9cXG59XFxuXFxuLnNwYWNlU3RhdGlvbiBpbWcuc3BhY2V7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuLnJlZFJvY2t7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNjglO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmVkUm9jayBpbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDcyJTtcXG4gICAgdG9wOiAzMCU7XFxuICAgIGxlZnQ6IDE0JTtcXG59XFxuXFxuaW1nLmFzdHJvbmF1dHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICB0b3A6IDg5JTtcXG4gICAgbGVmdDogNTElO1xcbn1cXG5cXG4uZW5kV29yZHN7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lbmRXb3JkcyBpbWcuZW5kQm9hcmR7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbn1cXG5cXG4udGhhbmtXb3Jkc3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB0b3A6IDIzJTtcXG4gICAgbGVmdDogMTQlO1xcbn1cXG5cXG4uYmFja0J0bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMzYlO1xcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgei1pbmRleDogMTA7XFxufVxcbmltZy5ibHVlQnRue1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnllbGxvd0J0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogOTIlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2JhY2tZZWxsb3dCdG4ucG5nXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICAgIG1hcmdpbi10b3A6IC00MyU7XFxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcXG4gICAgbGluZS1oZWlnaHQ6IDI2MCU7XFxuICAgIC1tcy10ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiVGFob21hXFxcIjtcXG59XFxuXFxuLnByZXNzQnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWcvYmFja1llbGxvd0J0bi5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDI2MCU7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi10b3A6IC0zOSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA4JTtcXG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBUYWhvbWFcXG59XFxuXFxuaW1nLmJhY2tXb3Jkc3tcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jc3MvZW5kLmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPTUFBQUJOQ0FZQUFBQlVtTlBTQUFBR3QwbEVRVlI0bk8zZFRZd2JaeDNIOGU4OE0vWTJJUUVwNlNVaWNDbHE2TG5OdmUwTnFRb0hKS3BDajBoSlJjdU5LeEl2Rjg1dEpFQVZwOUlHaVJNU1YzSW5yYmlTQ3ZHV1hRSlo3Mjd3Mmg1N1hwNC9oN0d6Yi9iTWVPT2Q5Y2EvajdUeWVONzg3Q1kvUGErMkE5dittR053d0hYZ05lQVY0RVhneThBWGdMWGozTEJaQm40RUZtTitDQmFENWFkZEtEbDdSa0FmMkFBKzczWkhuL1lINlYzZ0h1RG52Vmt3WnhpdkF0OEh2Z3Q4WmQ0WE96MGUvQkR6Y1JFOFB3VHN0QXNsejVqTnpUNVpiZ0FQZ044QXQ0SDF1dGZYRGVObDRDZkE5NEQyL01Wc21HVjd0WjZQd1VhblhTSlpBV25xNmZWR0RFZFBXbGtKOENId0kyQ3I2dm82WWZ3MlJjS2ZmNHB5enNkeUlCdUhLZ2R5YlB5SWVjRHZQV0xqN1VsTk4zZnJRR1NoZG5zSnZWNnlmMWNIZUJmNGJkbDFVY1d4OTRGYlQxMjZhU3dIUzhBU3pOSW4yMWlHbXBCeWxsMjgwQ2JQUFhHY1RYWTlEOXdCWGdYZUE3SnAxODBLNDNtS0ZMK3hrTkpaQmpZY0Q1WU14NkhUZ0lrOHU3NzB4VFdTSkNmUEQxUXN0eWpHWGQ0RUJvZXZtUmJHQ1BpRXB3cGlEbjZBK2NHNHo1WWUvMVlpWjFBUUJGeTgwT2J4LzQ2TVY3eEJrYTl2Y2FpR2RGUHU4d0Z3WSs1WHR3enlIU3g5Z0kzK2hxWC9nYnlySU1yS09uZXVSUmdHMHc3ZG9NalpBWWZEK0Nad3MvN0xlY2k3V0xxT0pYL0hzczU0MmtCRUFNNmZiODA2ZEJONGEvK08vYU9wbDRHL1VHZlUxRElzM3lscVBvMWVpc3lVNTU1SG0wZTZoeFBid05lQlRUaFlNLzZNcWlCYWltWC94WkovUVA0WUJWR2tYQmc2V3ExcHZVRUFMZ0UvblR5WjFJeGZCZjRLektoVFBaWnRqd09vYVFlUmVVeVpkOXd2QmI0Ry9Hc1MyWGVZRlVUZnc1Si9RcjZEZ2lneXY3VjJXSGE0UlpFLzNQam43YVBuR0pZOXd0S0g0NGw0RVRtT1ZpdGs2cGpxbnJjQkYxRzgrK0xxZ1VPV1llbS90YVpUWkFHQ0FLS1dJMDFuanJGY0JhNDc0UFVEdXkzQjBnY0tvc2dDdGFLWmd6Z1Ryem5nNVNkUExjWFNEVFZMUlJZc2FwWDJHd0ZlY2NDMVl0c3JpQ0luSkFvcmE4WnJEcmdDWU5rakxWMFRPU0ZSVkRHRUExY2NjQkhmaDN5M2dTS0pyS1l3ZEZVanFoY2RXTnV5VGpNbEVsbGhidnFpOFltMncvZUw5eGVLeUlrS0svcU56dFE4RldsRTZNb2JxZzZMR3lxS3lHcXJhS2JpOVBFWElzMXdsVFdqaURUQ0JRcWp5RkpRelNpeUpBS0ZVV1E1VkdSUllSUnBTcUErbzhoeXFNaWl3aWpTRk5XTUlrdENOYVBJa2xETktISkdLSXdpRFNxYjNsQVlSWmFFd2lpeUpCUkdrU1doTUlvc0NZVlJwRWtsMHhzS28waUR5cVlhRlVhUkJsbkpGN2twakNKTktrbWp3aWl5SkJSR2tTV2hNSW9zQ1lWUlpFa29qQ0lOOGhwTkZWbCtDcVBJa2xBWVJScFNOdUVQQ3FOSVk2d2lqUXFqU0VOODJlZ05DcU5JWXhSR2tTV1JaYjcwdU90c0RSb3Fpc2hxcXd4akFFbERaUkZaYVdsNUdCUG5qZDJtQ2lPeXFzeU1OQ245bHZCZGwyWCtZVlhIVWtTZVRwTGtWS1Rzb1FQdTkvdHFxWXFjcEhpWVZaMXkzd0dmOWZ0cFZYdFdSSTdKZTJOWUhjWlBIWERYZ0oyZG1EeFhJRVVXcmQ5UEtwZkNBWGNkOENkZ1BjK05yYTJZTkZVZ1JSWWx6NDMrSUswNmJSMjQ1d0FQZkFTUWUyTnJlMEN2cHo2a3lDSjB1OE02dGVKSGdKK3N3TG5OZUw3UkRIWjdDWnVkUVoxMnJvak0wTzhuREVlbDB4bFE1TzQyN0MySFd3YyszSDlHbG5sMkhnL3BkQVlNNHJSeXhibUk3SW5qak81dXJSYm1yeW55UjdEeDV4OU9kbDRHN284ZmozQUJQSGV1eFhOckVlMTJXUG1WeUNLcmFqQkk2WFpIVmZPS0FGdkF0ZkVqMGFFRDd3S2ZUTHZLVy9FaWcwR0tDMkJ0TFdKdExhVFZDb2tpclRjWE1UTzYzUkdEdUhiMzdnZU1nd2dId3dod0IzZ1Z1RmwyQjIvRkpPWmtJdE81Z0hZN3BOMXlSSkVqaWtMQ1VGV25yQVl6aU9PVVhpOGhyNythN1ZmQXgvdDNIQTRqRkdtOUF0eW9lOWZKcE9ad3VMZlBCUkMxUXFJd0lBemQrQ2NnakJ4aDJYY3BpNXdCM2h0cG1qTWE1Y1REclBLOWlvZjhIbmp2OE01cFlVeUF0NERmQWQ4NFZra3BhczhreWFlK0pTUUlpdHJVQlFFdURJcnR5WE1YRUFRUUJBR0JDd2dvdHAyYlhCc2N1bGRRcS85cVZ2MnhCM3ZuVnA5bmdOV2NrdlYxWDdmbVA2aVoxUmt1TDhwWTg4UzZmNXU2LytmTVc1MCtFNXptNzFMNzcwMjkzNldlUDFEazYwZzBwb1VSWUFCOEUzaWZpaWJyY1pnVms2RTVCcG85a2RYeFM0b2FjZW9xQUZmU3QwdUJXeFFwN3B4STBVUldRd2Y0RGtXZVppN0hjWmN2blNNcUgyeTVBN3dFL0FLOUVWbGtIZ2xGYmw1aXhpekZmaTRNSFpjdW5hK2FudWdBN3dBdkFEOEhOaFpRVUpGbjFRWkZUbDZneUUydGxtWGdILzRZS0Rxelc5dHg1ZWQwakRuZ092QTY4REx3SW5BVnVBQzA1aTI1eUJtVkFqMktGVFNmQTU4QmZ3VHVVYXo1bnN2L0FRM0dyWnpwd0VNY0FBQUFBRWxGVGtTdVFtQ0NcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9iYWNrWWVsbG93QnRuLnBuZ1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgJy4uL2Nzcy9lbmQuY3NzJztcbmltcG9ydCBzaGluZV8wIGZyb20gJy4uL2ltZy9zaGluZV8wLnBuZyc7XG5pbXBvcnQgc2hpbmVfMSBmcm9tICcuLi9pbWcvc2hpbmVfMS5wbmcnO1xuaW1wb3J0IHNoaW5lXzIgZnJvbSAnLi4vaW1nL3NoaW5lXzIucG5nJztcbmltcG9ydCBzaGluZV8zIGZyb20gJy4uL2ltZy9zaGluZV8zLnBuZyc7XG5pbXBvcnQgc2hpbmVfNCBmcm9tICcuLi9pbWcvc2hpbmVfNC5wbmcnO1xuXG52YXIgVUZPID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVGTycpO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIFVGTy5jbGFzc05hbWUgPSAnbW92aW5nVUZPJztcbiAgICBVRk8uc3R5bGUudG9wID0gJzYlJztcbn0sIDUwMCk7XG5cblxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoVUZPLnN0eWxlLnRvcCA9PT0gJzYlJykge1xuICAgICAgICAgICAgVUZPLnN0eWxlLnRvcCA9ICcxMCUnO1xuICAgICAgICB9IGVsc2UgaWYgKFVGTy5zdHlsZS50b3AgPT09ICcxMCUnKSB7XG4gICAgICAgICAgICBVRk8uc3R5bGUudG9wID0gJzYlJztcbiAgICAgICAgfVxuICAgIH0sIDEwMDApO1xufSwgMjAwMCk7XG5cbmZ1bmN0aW9uIGNoYW5nZUltZyhpbmRleCkge1xuICAgIC8vdmFyIHNyYyA9IG51bGw7XG5cbiAgICBzd2l0Y2ggKGluZGV4KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHNoaW5lSW1nLnNyYyA9IHNoaW5lXzA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgc2hpbmVJbWcuc3JjID0gc2hpbmVfMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBzaGluZUltZy5zcmMgPSBzaGluZV8yO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHNoaW5lSW1nLnNyYyA9IHNoaW5lXzM7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgc2hpbmVJbWcuc3JjID0gc2hpbmVfNDtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzaGluZUltZy5zcmMgPSBzaGluZV80O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5cbnZhciBzaGluZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRSb2NrJykucXVlcnlTZWxlY3RvcignaW1nJyk7XG52YXIgaW5kZXggPSAwLFxuICAgIGZsYWcgPSB0cnVlO1xuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKGluZGV4IDw9IDQgJiYgZmxhZykge1xuICAgICAgICBpbmRleCArPSAxO1xuICAgIH1cbiAgICBpZiAoaW5kZXggPiA0KSB7XG4gICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGluZGV4ID49IDAgJiYgIWZsYWcpIHtcbiAgICAgICAgaW5kZXggLT0gMTtcbiAgICB9XG4gICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgfVxuICAgIGNoYW5nZUltZyhpbmRleCk7XG59LCAxMDApO1xuXG4vL2J1dHRvblxudmFyIGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcueWVsbG93QnRuJyk7XG5cbmJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyB3aWR0aDogODYlO1xuICAgIC8vIG1hcmdpbi10b3A6IC0zOSU7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDYlO1xuICAgIGJhY2tCdG4uY2xhc3NOYW1lID0gJ3ByZXNzQnRuJztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBiYWNrQnRuLmNsYXNzTmFtZSA9ICd5ZWxsb3dCdG4nO1xuICAgIH0sIDIwMCk7XG59LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9lbmQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHt9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2VuZC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZW5kLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2VuZC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImRmNTczYTVhYTU2Mzk4ZDMzYmM3YWU2NGU0NDRjNWZhLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9lbmRCYWNrZ3JvdW5kLnBuZ1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2I2MzgyMGU0Mjg3NGMyZjUzMjI5YzhlMDJjODEyYjQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3NoaW5lXzAucG5nXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNWM4ODFjODIwNmVjZDllNjBjZGE3N2EyZDUzZWQ0OC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVfMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM1NTFkMTc2MzdiOTc2NTc5MDU2YTE0MDcwNjdjYzUzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZV8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E5ZDY1NDFkZTA5ZjYwYjcxMzlkYjYzODU3NjY0YmYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3NoaW5lXzMucG5nXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlNzBhOWQyZjM2MTNiOGM1MzE1ODdlMDk5OTA0ZWFmNS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvc2hpbmVfNC5wbmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=