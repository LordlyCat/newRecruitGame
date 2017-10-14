webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    position: relative;\n    background: url(" + __webpack_require__(21) + ") no-repeat;\n    background-size: 100%;\n    overflow: hidden;\n}\n\n.mainBody{\n    width: 100%;\n}\n\n.UFO img, .movingUFO img{\n    width: 100%;\n}\n\n.UFO{\n    position: absolute;\n    width: 1%;\n    top: -27%;\n    left: -36%;\n    transition: width 2.5s;\n}\n\n.movingUFO{\n    position: absolute;\n    width: 18%;\n    top: 10%;\n    left: 9%;\n    transition: width 2s, top 3s;\n    z-index: 1000;\n}\n\n\n.spaceStation{\n    position: relative;\n    width: 100%;\n    margin-top: 28%;\n    /*margin-left: */\n}\n\n.spaceStation img.space{\n    width: 90%;\n    margin-left: 5%;\n}\n\n.redRock{\n    position: absolute;\n    width: 100%;\n    top: 67%;\n    opacity: 0.1;\n}\n\n.redRock img{\n    position: absolute;\n    width: 72%;\n    top: 20%;\n    left: 14%;\n}\n\nimg.astronaut{\n    position: absolute;\n    width: 20%;\n    top: 89%;\n    left: 46%;\n}\n\n\n.btnWrapper{\n    position: relative;\n    width: 50%;\n    margin-left: 25%;\n    margin-top: 30%;\n}\n\n.btnWrapper img.order{\n    position: absolute;\n    width: 20%;\n}\n\n.right{\n    margin-top: 31%;\n    margin-left: 83%;\n}\n\n.left{\n    margin-left: -1%;\n    margin-top: 31%;\n}\n\n.top{\n    margin-left: 40%;\n    margin-top: 3%;\n}\n\n.buttom{\n    margin-left: 40%;\n    margin-top: 70%;\n}\n\n.playBtn{\n    position: relative;\n}\n.btnWrapper img.btn{\n    width: 55%;\n    position: absolute;\n    margin-top: 26%;\n    left: 22%;\n}\n\n.btnWrapper img.smallBtn{\n    position: absolute;\n    width: 40%;\n    margin-top: 26%;\n    left: 30%;\n}\n\n.btnWrapper img.pressSmallBtn{\n    position: absolute;\n    width: 35%;\n    margin-top: 30%;\n    left: 32%;\n}\n\n\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3b63820e42874c2f53229c8e02c812b4.png";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e5c881c8206ecd9e60cda77a2d53ed48.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3551d17637b976579056a1407067cc53.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ca9d6541de09f60b7139db63857664bf.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e70a9d2f3613b8c531587e099904eaf5.png";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function ajax( opts ) {

    //1.设置默认参数
    var defaults = {
        method: 'GET', //请求方式
        url: '', //发送请求的地址
        data: '', //发送数据
        async: true,//是否异步
        cache: true,//是否缓存
        contentType: 'application/x-www-form-urlencoded',//http头信息
        success: function () {},
        error: function () {},
    };

    //2.覆盖参数
    for( var key in opts ) {
        defaults[key] = opts[key];
    };

    //3.数据处理
    if ( typeof defaults.data === 'object' ) { //处理data
        var str = '';
        for( var key in defaults.data ) {
            str += key + '=' + defaults.data[key] + '&'
        }
        defaults.data = str.substring(0, str.length - 1);
    };

    defaults.method = defaults.method.toUpperCase();  //请求方式字符转换成大写

    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime(); //处理 缓存


    if ( defaults.method === 'GET' && (defaults.data || defaults.cache) ) {
        defaults.url += '?' + defaults.data + defaults.cache;
    };

    //4.编写ajax
    var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXobject('Microsoft.XMLHTTP');


    //与服务器建立链接，告诉服务器你要做什么
    oXhr.open(defaults.method, defaults.url, defaults.async);

    //发送请求
    if ( defaults.method === 'GET' ) {
        oXhr.send(null);
    } else {
        oXhr.setRequestHeader("Content-type", defaults.contentType);
        oXhr.send(defaults.data);
    }

    //等代服务器回馈
    oXhr.onreadystatechange = function () {
        if ( oXhr.readyState === 4 ) {
            if (oXhr.status === 200) {
                defaults.success.call(oXhr, oXhr.responseText);
            } else {
                defaults.error();
            };
        };
    };

};

module.exports = ajax;


//The end

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_playing_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__img_shine_0_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_shine_1_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shine_2_png__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_shine_2_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_shine_2_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__img_shine_3_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__img_shine_4_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Ajax_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Ajax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Ajax_js__);









var UFO = document.querySelector('.UFO');
var order = document.querySelectorAll('.order');
var redRock = document.querySelector('.redRock');
var playBtn = document.querySelector('.smallBtn'); 
var spaceImg = document.querySelector('.space');
var redRockImg = redRock.querySelector('img');


playBtn.addEventListener('touchstart', function() {
    playBtn.className = 'pressSmallBtn';
    order[0].style.marginLeft = '77%';
    order[1].style.marginLeft = '5%';
    order[2].style.marginTop = '7%';
    order[3].style.marginTop = '65%';
    setTimeout(function () {
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

playBtn.addEventListener('touchstart', function () {
    if (clickSpeed < 100) {
        clickSpeed += 5;
    }
    if (clickSpeed >100) {
        clickSpeed = 100;
    }
    if (clickSpeed >30 && clickSpeed < 50) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default.a;
    }
    if (clickSpeed >= 50 && clickSpeed < 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default.a;
    }
    if (clickSpeed > 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default.a;
    }
    redRock.style.opacity = clickSpeed/100;
}, false);

setInterval(function () {
    redRock.style.opacity -= 0.1;
    clickSpeed -=3;
    if (redRock.style.opacity < 0.1) {
        redRock.style.opacity = 0.1;
    }
    if (clickSpeed < 0) {
        clickSpeed = 0;
    }
    if (clickSpeed >30 && clickSpeed < 50) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_2__img_shine_1_png___default.a;
    }
    if (clickSpeed >= 50 && clickSpeed < 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_4__img_shine_3_png___default.a;
    }
    if (clickSpeed > 80) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_5__img_shine_4_png___default.a;
    }
    if (clickSpeed <=30) {
        redRockImg.src = __WEBPACK_IMPORTED_MODULE_1__img_shine_0_png___default.a;
    }
}, 200);


playBtn.addEventListener('touchstart', send, false);

function send () {
    __WEBPACK_IMPORTED_MODULE_6__Ajax_js___default()({
        url:'',
        method:"GET",
    })
}







//The end

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
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
		module.hot.accept(4, function() {
			var newContent = __webpack_require__(4);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4ae9ac99bef51cdfa2e860dbbe74c12.png";

/***/ })
],[19]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3BsYXlpbmcuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVfMC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zaGluZV8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NoaW5lXzIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVfMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zaGluZV80LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvQWpheC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGxheWluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3BsYXlpbmcuY3NzPzNmNTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wbGF5aW5nQmFja2dyb3VuZC5wbmciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLDRCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFNBQVMseUJBQXlCLGlFQUFpRiw0QkFBNEIsdUJBQXVCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyw2QkFBNkIsa0JBQWtCLEdBQUcsU0FBUyx5QkFBeUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsZUFBZSx5QkFBeUIsaUJBQWlCLGVBQWUsZUFBZSxtQ0FBbUMsb0JBQW9CLEdBQUcsb0JBQW9CLHlCQUF5QixrQkFBa0Isc0JBQXNCLDBCQUEwQiw0QkFBNEIsaUJBQWlCLHNCQUFzQixHQUFHLGFBQWEseUJBQXlCLGtCQUFrQixlQUFlLG1CQUFtQixHQUFHLGlCQUFpQix5QkFBeUIsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsa0JBQWtCLHlCQUF5QixpQkFBaUIsZUFBZSxnQkFBZ0IsR0FBRyxrQkFBa0IseUJBQXlCLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsMEJBQTBCLHlCQUF5QixpQkFBaUIsR0FBRyxXQUFXLHNCQUFzQix1QkFBdUIsR0FBRyxVQUFVLHVCQUF1QixzQkFBc0IsR0FBRyxTQUFTLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLHVCQUF1QixzQkFBc0IsR0FBRyxhQUFhLHlCQUF5QixHQUFHLHNCQUFzQixpQkFBaUIseUJBQXlCLHNCQUFzQixnQkFBZ0IsR0FBRyw2QkFBNkIseUJBQXlCLGlCQUFpQixzQkFBc0IsZ0JBQWdCLEdBQUcsa0NBQWtDLHlCQUF5QixpQkFBaUIsc0JBQXNCLGdCQUFnQixHQUFHOztBQUVoMEQ7Ozs7Ozs7QUNQQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBELHNFQUFzRTs7O0FBR3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0EsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7QUFRQSxTOzs7Ozs7QUMxR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUN6QkEsZ0YiLCJmaWxlIjoianMvcGxheS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWcvcGxheWluZ0JhY2tncm91bmQucG5nXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbkJvZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uVUZPIGltZywgLm1vdmluZ1VGTyBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uVUZPe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgdG9wOiAtMjclO1xcbiAgICBsZWZ0OiAtMzYlO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAyLjVzO1xcbn1cXG5cXG4ubW92aW5nVUZPe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxOCU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiA5JTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIHRvcCAzcztcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuXFxuLnNwYWNlU3RhdGlvbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMjglO1xcbiAgICAvKm1hcmdpbi1sZWZ0OiAqL1xcbn1cXG5cXG4uc3BhY2VTdGF0aW9uIGltZy5zcGFjZXtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbn1cXG5cXG4ucmVkUm9ja3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA2NyU7XFxuICAgIG9wYWNpdHk6IDAuMTtcXG59XFxuXFxuLnJlZFJvY2sgaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA3MiU7XFxuICAgIHRvcDogMjAlO1xcbiAgICBsZWZ0OiAxNCU7XFxufVxcblxcbmltZy5hc3Ryb25hdXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgdG9wOiA4OSU7XFxuICAgIGxlZnQ6IDQ2JTtcXG59XFxuXFxuXFxuLmJ0bldyYXBwZXJ7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbn1cXG5cXG4uYnRuV3JhcHBlciBpbWcub3JkZXJ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLnJpZ2h0e1xcbiAgICBtYXJnaW4tdG9wOiAzMSU7XFxuICAgIG1hcmdpbi1sZWZ0OiA4MyU7XFxufVxcblxcbi5sZWZ0e1xcbiAgICBtYXJnaW4tbGVmdDogLTElO1xcbiAgICBtYXJnaW4tdG9wOiAzMSU7XFxufVxcblxcbi50b3B7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XFxuICAgIG1hcmdpbi10b3A6IDMlO1xcbn1cXG5cXG4uYnV0dG9te1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbiAgICBtYXJnaW4tdG9wOiA3MCU7XFxufVxcblxcbi5wbGF5QnRue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG5XcmFwcGVyIGltZy5idG57XFxuICAgIHdpZHRoOiA1NSU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXRvcDogMjYlO1xcbiAgICBsZWZ0OiAyMiU7XFxufVxcblxcbi5idG5XcmFwcGVyIGltZy5zbWFsbEJ0bntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBtYXJnaW4tdG9wOiAyNiU7XFxuICAgIGxlZnQ6IDMwJTtcXG59XFxuXFxuLmJ0bldyYXBwZXIgaW1nLnByZXNzU21hbGxCdG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDM1JTtcXG4gICAgbWFyZ2luLXRvcDogMzAlO1xcbiAgICBsZWZ0OiAzMiU7XFxufVxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvY3NzL3BsYXlpbmcuY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjNiNjM4MjBlNDI4NzRjMmY1MzIyOWM4ZTAyYzgxMmI0LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZV8wLnBuZ1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU1Yzg4MWM4MjA2ZWNkOWU2MGNkYTc3YTJkNTNlZDQ4LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZV8xLnBuZ1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjM1NTFkMTc2MzdiOTc2NTc5MDU2YTE0MDcwNjdjYzUzLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZV8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhOWQ2NTQxZGUwOWY2MGI3MTM5ZGI2Mzg1NzY2NGJmLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZV8zLnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImU3MGE5ZDJmMzYxM2I4YzUzMTU4N2UwOTk5MDRlYWY1LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9zaGluZV80LnBuZ1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImZ1bmN0aW9uIGFqYXgoIG9wdHMgKSB7XG5cbiAgICAvLzEu6K6+572u6buY6K6k5Y+C5pWwXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLCAvL+ivt+axguaWueW8j1xuICAgICAgICB1cmw6ICcnLCAvL+WPkemAgeivt+axgueahOWcsOWdgFxuICAgICAgICBkYXRhOiAnJywgLy/lj5HpgIHmlbDmja5cbiAgICAgICAgYXN5bmM6IHRydWUsLy/mmK/lkKblvILmraVcbiAgICAgICAgY2FjaGU6IHRydWUsLy/mmK/lkKbnvJPlrZhcbiAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLC8vaHR0cOWktOS/oeaBr1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7fSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uICgpIHt9LFxuICAgIH07XG5cbiAgICAvLzIu6KaG55uW5Y+C5pWwXG4gICAgZm9yKCB2YXIga2V5IGluIG9wdHMgKSB7XG4gICAgICAgIGRlZmF1bHRzW2tleV0gPSBvcHRzW2tleV07XG4gICAgfTtcblxuICAgIC8vMy7mlbDmja7lpITnkIZcbiAgICBpZiAoIHR5cGVvZiBkZWZhdWx0cy5kYXRhID09PSAnb2JqZWN0JyApIHsgLy/lpITnkIZkYXRhXG4gICAgICAgIHZhciBzdHIgPSAnJztcbiAgICAgICAgZm9yKCB2YXIga2V5IGluIGRlZmF1bHRzLmRhdGEgKSB7XG4gICAgICAgICAgICBzdHIgKz0ga2V5ICsgJz0nICsgZGVmYXVsdHMuZGF0YVtrZXldICsgJyYnXG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdHMuZGF0YSA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICAgIH07XG5cbiAgICBkZWZhdWx0cy5tZXRob2QgPSBkZWZhdWx0cy5tZXRob2QudG9VcHBlckNhc2UoKTsgIC8v6K+35rGC5pa55byP5a2X56ym6L2s5o2i5oiQ5aSn5YaZXG5cbiAgICBkZWZhdWx0cy5jYWNoZSA9IGRlZmF1bHRzLmNhY2hlID8gJycgOiAnJicgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTsgLy/lpITnkIYg57yT5a2YXG5cblxuICAgIGlmICggZGVmYXVsdHMubWV0aG9kID09PSAnR0VUJyAmJiAoZGVmYXVsdHMuZGF0YSB8fCBkZWZhdWx0cy5jYWNoZSkgKSB7XG4gICAgICAgIGRlZmF1bHRzLnVybCArPSAnPycgKyBkZWZhdWx0cy5kYXRhICsgZGVmYXVsdHMuY2FjaGU7XG4gICAgfTtcblxuICAgIC8vNC7nvJblhplhamF4XG4gICAgdmFyIG9YaHIgPSB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBBY3RpdmVYb2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuXG5cbiAgICAvL+S4juacjeWKoeWZqOW7uueri+mTvuaOpe+8jOWRiuivieacjeWKoeWZqOS9oOimgeWBmuS7gOS5iFxuICAgIG9YaHIub3BlbihkZWZhdWx0cy5tZXRob2QsIGRlZmF1bHRzLnVybCwgZGVmYXVsdHMuYXN5bmMpO1xuXG4gICAgLy/lj5HpgIHor7fmsYJcbiAgICBpZiAoIGRlZmF1bHRzLm1ldGhvZCA9PT0gJ0dFVCcgKSB7XG4gICAgICAgIG9YaHIuc2VuZChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvWGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LXR5cGVcIiwgZGVmYXVsdHMuY29udGVudFR5cGUpO1xuICAgICAgICBvWGhyLnNlbmQoZGVmYXVsdHMuZGF0YSk7XG4gICAgfVxuXG4gICAgLy/nrYnku6PmnI3liqHlmajlm57ppohcbiAgICBvWGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCBvWGhyLnJlYWR5U3RhdGUgPT09IDQgKSB7XG4gICAgICAgICAgICBpZiAob1hoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzLnN1Y2Nlc3MuY2FsbChvWGhyLCBvWGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRzLmVycm9yKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYWpheDtcblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9BamF4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCAnLi4vY3NzL3BsYXlpbmcuY3NzJztcbmltcG9ydCBzaGluZV8wIGZyb20gJy4uL2ltZy9zaGluZV8wLnBuZyc7XG5pbXBvcnQgc2hpbmVfMSBmcm9tICcuLi9pbWcvc2hpbmVfMS5wbmcnO1xuaW1wb3J0IHNoaW5lXzIgZnJvbSAnLi4vaW1nL3NoaW5lXzIucG5nJztcbmltcG9ydCBzaGluZV8zIGZyb20gJy4uL2ltZy9zaGluZV8zLnBuZyc7XG5pbXBvcnQgc2hpbmVfNCBmcm9tICcuLi9pbWcvc2hpbmVfNC5wbmcnO1xuXG5pbXBvcnQgYWpheCBmcm9tICcuL0FqYXguanMnO1xuXG52YXIgVUZPID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVGTycpO1xudmFyIG9yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyJyk7XG52YXIgcmVkUm9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZWRSb2NrJyk7XG52YXIgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbWFsbEJ0bicpOyBcbnZhciBzcGFjZUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGFjZScpO1xudmFyIHJlZFJvY2tJbWcgPSByZWRSb2NrLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuXG5cbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKCkge1xuICAgIHBsYXlCdG4uY2xhc3NOYW1lID0gJ3ByZXNzU21hbGxCdG4nO1xuICAgIG9yZGVyWzBdLnN0eWxlLm1hcmdpbkxlZnQgPSAnNzclJztcbiAgICBvcmRlclsxXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzUlJztcbiAgICBvcmRlclsyXS5zdHlsZS5tYXJnaW5Ub3AgPSAnNyUnO1xuICAgIG9yZGVyWzNdLnN0eWxlLm1hcmdpblRvcCA9ICc2NSUnO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBwbGF5QnRuLmNsYXNzTmFtZSA9ICdzbWFsbEJ0bic7XG4gICAgICAgIG9yZGVyWzBdLnN0eWxlLm1hcmdpbkxlZnQgPSAnODMlJztcbiAgICAgICAgb3JkZXJbMV0uc3R5bGUubWFyZ2luTGVmdCA9ICctMSUnO1xuICAgICAgICBvcmRlclsyXS5zdHlsZS5tYXJnaW5Ub3AgPSAnMyUnO1xuICAgICAgICBvcmRlclszXS5zdHlsZS5tYXJnaW5Ub3AgPSAnNzAlJztcbiAgICB9LCAzMClcbn0sIGZhbHNlKVxuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIFVGTy5jbGFzc05hbWUgPSAnbW92aW5nVUZPJztcbiAgICBVRk8uc3R5bGUudG9wID0gJzEwJSc7XG59LCA1MDApO1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAoVUZPLnN0eWxlLnRvcCA9PT0gJzEwJScpIHtcbiAgICAgICAgVUZPLnN0eWxlLnRvcCA9ICcxOCUnO1xuICAgIH0gZWxzZSBpZiAoVUZPLnN0eWxlLnRvcCA9PT0gJzE4JScpIHtcbiAgICAgICAgVUZPLnN0eWxlLnRvcCA9ICcxMCUnO1xuICAgIH1cbn0sIDEwMDApO1xuXG5cbnZhciBjbGlja1NwZWVkID0gMDtcblxucGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjbGlja1NwZWVkIDwgMTAwKSB7XG4gICAgICAgIGNsaWNrU3BlZWQgKz0gNTtcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPjEwMCkge1xuICAgICAgICBjbGlja1NwZWVkID0gMTAwO1xuICAgIH1cbiAgICBpZiAoY2xpY2tTcGVlZCA+MzAgJiYgY2xpY2tTcGVlZCA8IDUwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMTtcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPj0gNTAgJiYgY2xpY2tTcGVlZCA8IDgwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMztcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPiA4MCkge1xuICAgICAgICByZWRSb2NrSW1nLnNyYyA9IHNoaW5lXzQ7XG4gICAgfVxuICAgIHJlZFJvY2suc3R5bGUub3BhY2l0eSA9IGNsaWNrU3BlZWQvMTAwO1xufSwgZmFsc2UpO1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgcmVkUm9jay5zdHlsZS5vcGFjaXR5IC09IDAuMTtcbiAgICBjbGlja1NwZWVkIC09MztcbiAgICBpZiAocmVkUm9jay5zdHlsZS5vcGFjaXR5IDwgMC4xKSB7XG4gICAgICAgIHJlZFJvY2suc3R5bGUub3BhY2l0eSA9IDAuMTtcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPCAwKSB7XG4gICAgICAgIGNsaWNrU3BlZWQgPSAwO1xuICAgIH1cbiAgICBpZiAoY2xpY2tTcGVlZCA+MzAgJiYgY2xpY2tTcGVlZCA8IDUwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMTtcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPj0gNTAgJiYgY2xpY2tTcGVlZCA8IDgwKSB7XG4gICAgICAgIHJlZFJvY2tJbWcuc3JjID0gc2hpbmVfMztcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPiA4MCkge1xuICAgICAgICByZWRSb2NrSW1nLnNyYyA9IHNoaW5lXzQ7XG4gICAgfVxuICAgIGlmIChjbGlja1NwZWVkIDw9MzApIHtcbiAgICAgICAgcmVkUm9ja0ltZy5zcmMgPSBzaGluZV8wO1xuICAgIH1cbn0sIDIwMCk7XG5cblxucGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgc2VuZCwgZmFsc2UpO1xuXG5mdW5jdGlvbiBzZW5kICgpIHtcbiAgICBhamF4KHtcbiAgICAgICAgdXJsOicnLFxuICAgICAgICBtZXRob2Q6XCJHRVRcIixcbiAgICB9KVxufVxuXG5cblxuXG5cblxuXG4vL1RoZSBlbmRcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9wbGF5aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wbGF5aW5nLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wbGF5aW5nLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9wbGF5aW5nLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL3BsYXlpbmcuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhNGFlOWFjOTliZWY1MWNkZmEyZTg2MGRiYmU3NGMxMi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvcGxheWluZ0JhY2tncm91bmQucG5nXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9