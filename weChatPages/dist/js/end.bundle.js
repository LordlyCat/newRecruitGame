webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    position: relative;\n    background: url(" + __webpack_require__(24) + ") no-repeat;\n    background-size: 100%;\n    overflow: hidden;\n}\n\n.mainBody{\n    width: 100%;\n}\n\n.UFO img, .movingUFO img{\n    width: 100%;\n}\n\n.UFO{\n    position: absolute;\n    width: 1%;\n    top: -7%;\n    left: -6%;\n    transition: width 2.5s;\n}\n\n.movingUFO{\n    position: absolute;\n    width: 18%;\n    top: 6%;\n    left: 9%;\n    transition: width 2s, top 3s;\n    z-index: 1000;\n}\n\n\n.spaceStation{\n    position: relative;\n    width: 100%;\n    margin-top: 20%;\n    /*margin-left: */\n    transition: margin-top 1.5s;\n}\n\n.spaceStation img.space{\n    width: 90%;\n    margin-left: 5%;\n}\n\n.redRock{\n    position: absolute;\n    width: 100%;\n    top: 68%;\n    opacity: 1;\n}\n\n.redRock img{\n    position: absolute;\n    width: 72%;\n    top: 30%;\n    left: 14%;\n}\n\nimg.astronaut{\n    position: absolute;\n    width: 20%;\n    top: 89%;\n    left: 51%;\n}\n\n.endWords{\n    position: fixed;\n    width: 100%;\n    top: 55%;\n}\n\n.endWords img.endBoard{\n    width: 90%;\n    margin-left: 5%;\n    margin-top: 10%;\n}\n\n.thankWords{\n    position: absolute;\n    width: 70%;\n    height: 100px;\n    top: 23%;\n    left: 14%;\n}\n\n.backBtn{\n    position: relative;\n    width: 36%;\n    margin-left: 30%;\n    margin-top: 5%;\n    z-index: 10;\n}\nimg.blueBtn{\n    width: 100%;\n}\n\n.yellowBtn{\n    position: absolute;\n    width: 92%;\n    background: url(" + __webpack_require__(12) + ") no-repeat;\n    background-size: 100% 100%;\n    z-index: 1000;\n    margin-top: -43%;\n    margin-left: 4%;\n    line-height: 260%;\n    -ms-text-align-last: center;\n    text-align-last: center;\n    font-family: \"Tahoma\";\n}\n\n.pressBtn{\n    position: absolute;\n    background: url(" + __webpack_require__(12) + ") no-repeat;\n    background-size: 100% 100%;\n    z-index: 1000;\n    line-height: 260%;\n    width: 80%;\n    margin-top: -39%;\n    margin-left: 8%;\n    text-align-last: center;\n    font-family: Tahoma\n}\n\nimg.backWords{\n    width: 70%;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_end_css__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_end_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_end_css__);
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

setTimeout(function() {
    UFO.className = 'movingUFO';
    UFO.style.top = '6%';
}, 500);

var spaceStation = document.querySelector('.spaceStation');
spaceStation.style.marginTop = '20%';



setInterval(function() {
    if (spaceStation.style.marginTop === '20%') {
        spaceStation.style.marginTop = '23%';
    } else if (spaceStation.style.marginTop === '23%') {
        spaceStation.style.marginTop = '20%';
    }
}, 1000);

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
        // case 0:
        //     shineImg.src = shine_0;
        //     break;
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
}, 300);

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

// ajax({
//     url: '',
//     method: 'GET',
//     success:function (data) {
//         console.log(data);
//     }
// })

__WEBPACK_IMPORTED_MODULE_6__Ajax_js___default()();

//The end

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
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
		module.hot.accept(11, function() {
			var newContent = __webpack_require__(11);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df573a5aa56398d33bc7ae64e444c5fa.png";

/***/ })
],[22]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NoaW5lXzAucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVfMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9zaGluZV8yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL3NoaW5lXzMucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWcvc2hpbmVfNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0FqYXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9lbmQuY3NzIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmFja1llbGxvd0J0bi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2VuZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2VuZC5jc3M/NzE4MCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2VuZEJhY2tncm91bmQucG5nIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxnRjs7Ozs7O0FDQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQsc0VBQXNFOzs7QUFHdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQSxTOzs7Ozs7QUNwRUE7QUFDQTs7O0FBR0E7QUFDQSw0QkFBNkIsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsR0FBRyxTQUFTLHlCQUF5QixpRUFBNkUsNEJBQTRCLHVCQUF1QixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsNkJBQTZCLGtCQUFrQixHQUFHLFNBQVMseUJBQXlCLGdCQUFnQixlQUFlLGdCQUFnQiw2QkFBNkIsR0FBRyxlQUFlLHlCQUF5QixpQkFBaUIsY0FBYyxlQUFlLG1DQUFtQyxvQkFBb0IsR0FBRyxvQkFBb0IseUJBQXlCLGtCQUFrQixzQkFBc0IseURBQXlELEdBQUcsNEJBQTRCLGlCQUFpQixzQkFBc0IsR0FBRyxhQUFhLHlCQUF5QixrQkFBa0IsZUFBZSxpQkFBaUIsR0FBRyxpQkFBaUIseUJBQXlCLGlCQUFpQixlQUFlLGdCQUFnQixHQUFHLGtCQUFrQix5QkFBeUIsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsY0FBYyxzQkFBc0Isa0JBQWtCLGVBQWUsR0FBRywyQkFBMkIsaUJBQWlCLHNCQUFzQixzQkFBc0IsR0FBRyxnQkFBZ0IseUJBQXlCLGlCQUFpQixvQkFBb0IsZUFBZSxnQkFBZ0IsR0FBRyxhQUFhLHlCQUF5QixpQkFBaUIsdUJBQXVCLHFCQUFxQixrQkFBa0IsR0FBRyxjQUFjLGtCQUFrQixHQUFHLGVBQWUseUJBQXlCLGlCQUFpQixpRUFBNkUsaUNBQWlDLG9CQUFvQix1QkFBdUIsc0JBQXNCLHdCQUF3QixrQ0FBa0MsOEJBQThCLDhCQUE4QixHQUFHLGNBQWMseUJBQXlCLGlFQUE2RSxpQ0FBaUMsb0JBQW9CLHdCQUF3QixpQkFBaUIsdUJBQXVCLHNCQUFzQiw4QkFBOEIsNEJBQTRCLGtCQUFrQixpQkFBaUIsR0FBRzs7QUFFcHJFOzs7Ozs7O0FDUEEsaUNBQWlDLHcwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBLFM7Ozs7OztBQzVHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQSxnRiIsImZpbGUiOiJqcy9lbmQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiM2I2MzgyMGU0Mjg3NGMyZjUzMjI5YzhlMDJjODEyYjQucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3NoaW5lXzAucG5nXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTVjODgxYzgyMDZlY2Q5ZTYwY2RhNzdhMmQ1M2VkNDgucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3NoaW5lXzEucG5nXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMzU1MWQxNzYzN2I5NzY1NzkwNTZhMTQwNzA2N2NjNTMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3NoaW5lXzIucG5nXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiY2E5ZDY1NDFkZTA5ZjYwYjcxMzlkYjYzODU3NjY0YmYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3NoaW5lXzMucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZTcwYTlkMmYzNjEzYjhjNTMxNTg3ZTA5OTkwNGVhZjUucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3NoaW5lXzQucG5nXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZnVuY3Rpb24gYWpheCggb3B0cyApIHtcblxuICAgIC8vMS7orr7nva7pu5jorqTlj4LmlbBcbiAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsIC8v6K+35rGC5pa55byPXG4gICAgICAgIHVybDogJycsIC8v5Y+R6YCB6K+35rGC55qE5Zyw5Z2AXG4gICAgICAgIGRhdGE6ICcnLCAvL+WPkemAgeaVsOaNrlxuICAgICAgICBhc3luYzogdHJ1ZSwvL+aYr+WQpuW8guatpVxuICAgICAgICBjYWNoZTogdHJ1ZSwvL+aYr+WQpue8k+WtmFxuICAgICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsLy9odHRw5aS05L+h5oGvXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHt9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge30sXG4gICAgfTtcblxuICAgIC8vMi7opobnm5blj4LmlbBcbiAgICBmb3IoIHZhciBrZXkgaW4gb3B0cyApIHtcbiAgICAgICAgZGVmYXVsdHNba2V5XSA9IG9wdHNba2V5XTtcbiAgICB9O1xuXG4gICAgLy8zLuaVsOaNruWkhOeQhlxuICAgIGlmICggdHlwZW9mIGRlZmF1bHRzLmRhdGEgPT09ICdvYmplY3QnICkgeyAvL+WkhOeQhmRhdGFcbiAgICAgICAgdmFyIHN0ciA9ICcnO1xuICAgICAgICBmb3IoIHZhciBrZXkgaW4gZGVmYXVsdHMuZGF0YSApIHtcbiAgICAgICAgICAgIHN0ciArPSBrZXkgKyAnPScgKyBkZWZhdWx0cy5kYXRhW2tleV0gKyAnJidcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0cy5kYXRhID0gc3RyLnN1YnN0cmluZygwLCBzdHIubGVuZ3RoIC0gMSk7XG4gICAgfTtcblxuICAgIGRlZmF1bHRzLm1ldGhvZCA9IGRlZmF1bHRzLm1ldGhvZC50b1VwcGVyQ2FzZSgpOyAgLy/or7fmsYLmlrnlvI/lrZfnrKbovazmjaLmiJDlpKflhplcblxuICAgIGRlZmF1bHRzLmNhY2hlID0gZGVmYXVsdHMuY2FjaGUgPyAnJyA6ICcmJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpOyAvL+WkhOeQhiDnvJPlrZhcblxuXG4gICAgaWYgKCBkZWZhdWx0cy5tZXRob2QgPT09ICdHRVQnICYmIChkZWZhdWx0cy5kYXRhIHx8IGRlZmF1bHRzLmNhY2hlKSApIHtcbiAgICAgICAgZGVmYXVsdHMudXJsICs9ICc/JyArIGRlZmF1bHRzLmRhdGEgKyBkZWZhdWx0cy5jYWNoZTtcbiAgICB9O1xuXG4gICAgLy80Lue8luWGmWFqYXhcbiAgICB2YXIgb1hociA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA/IG5ldyBYTUxIdHRwUmVxdWVzdCgpIDogbmV3IEFjdGl2ZVhvYmplY3QoJ01pY3Jvc29mdC5YTUxIVFRQJyk7XG5cblxuICAgIC8v5LiO5pyN5Yqh5Zmo5bu656uL6ZO+5o6l77yM5ZGK6K+J5pyN5Yqh5Zmo5L2g6KaB5YGa5LuA5LmIXG4gICAgb1hoci5vcGVuKGRlZmF1bHRzLm1ldGhvZCwgZGVmYXVsdHMudXJsLCBkZWZhdWx0cy5hc3luYyk7XG5cbiAgICAvL+WPkemAgeivt+axglxuICAgIGlmICggZGVmYXVsdHMubWV0aG9kID09PSAnR0VUJyApIHtcbiAgICAgICAgb1hoci5zZW5kKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9YaHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtdHlwZVwiLCBkZWZhdWx0cy5jb250ZW50VHlwZSk7XG4gICAgICAgIG9YaHIuc2VuZChkZWZhdWx0cy5kYXRhKTtcbiAgICB9XG5cbiAgICAvL+etieS7o+acjeWKoeWZqOWbnummiFxuICAgIG9YaHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIG9YaHIucmVhZHlTdGF0ZSA9PT0gNCApIHtcbiAgICAgICAgICAgIGlmIChvWGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuc3VjY2Vzcy5jYWxsKG9YaHIsIG9YaHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHMuZXJyb3IoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhamF4O1xuXG5cbi8vVGhlIGVuZFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL0FqYXguanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2VuZEJhY2tncm91bmQucG5nXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbkJvZHl7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uVUZPIGltZywgLm1vdmluZ1VGTyBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uVUZPe1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxJTtcXG4gICAgdG9wOiAtNyU7XFxuICAgIGxlZnQ6IC02JTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMi41cztcXG59XFxuXFxuLm1vdmluZ1VGT3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTglO1xcbiAgICB0b3A6IDYlO1xcbiAgICBsZWZ0OiA5JTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMnMsIHRvcCAzcztcXG4gICAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuXFxuLnNwYWNlU3RhdGlvbntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogMjAlO1xcbiAgICAvKm1hcmdpbi1sZWZ0OiAqL1xcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDEuNXM7XFxufVxcblxcbi5zcGFjZVN0YXRpb24gaW1nLnNwYWNle1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5yZWRSb2Nre1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDY4JTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJlZFJvY2sgaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA3MiU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBsZWZ0OiAxNCU7XFxufVxcblxcbmltZy5hc3Ryb25hdXR7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgdG9wOiA4OSU7XFxuICAgIGxlZnQ6IDUxJTtcXG59XFxuXFxuLmVuZFdvcmRze1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0b3A6IDU1JTtcXG59XFxuXFxuLmVuZFdvcmRzIGltZy5lbmRCb2FyZHtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxufVxcblxcbi50aGFua1dvcmRze1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHRvcDogMjMlO1xcbiAgICBsZWZ0OiAxNCU7XFxufVxcblxcbi5iYWNrQnRue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAzNiU7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICB6LWluZGV4OiAxMDtcXG59XFxuaW1nLmJsdWVCdG57XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ueWVsbG93QnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA5MiU7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIHJlcXVpcmUoXCIuLi9pbWcvYmFja1llbGxvd0J0bi5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgbWFyZ2luLXRvcDogLTQzJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgICBsaW5lLWhlaWdodDogMjYwJTtcXG4gICAgLW1zLXRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJUYWhvbWFcXFwiO1xcbn1cXG5cXG4ucHJlc3NCdG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9iYWNrWWVsbG93QnRuLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBsaW5lLWhlaWdodDogMjYwJTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogLTM5JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFRhaG9tYVxcbn1cXG5cXG5pbWcuYmFja1dvcmRze1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9lbmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPTUFBQUJOQ0FZQUFBQlVtTlBTQUFBR3QwbEVRVlI0bk8zZFRZd2JaeDNIOGU4OE0vWTJJUUVwNlNVaWNDbHE2TG5OdmUwTnFRb0hKS3BDajBoSlJjdU5LeEl2Rjg1dEpFQVZwOUlHaVJNU1YzSW5yYmlTQ3ZHV1hRSlo3Mjd3Mmg1N1hwNC9oN0d6Yi9iTWVPT2Q5Y2EvajdUeWVONzg3Q1kvUGErMkE5dittR053d0hYZ05lQVY0RVhneThBWGdMWGozTEJaQm40RUZtTitDQmFENWFkZEtEbDdSa0FmMkFBKzczWkhuL1lINlYzZ0h1RG52Vmt3WnhpdkF0OEh2Z3Q4WmQ0WE96MGUvQkR6Y1JFOFB3VHN0QXNsejVqTnpUNVpiZ0FQZ044QXQ0SDF1dGZYRGVObDRDZkE5NEQyL01Wc21HVjd0WjZQd1VhblhTSlpBV25xNmZWR0RFZFBXbGtKOENId0kyQ3I2dm82WWZ3MlJjS2ZmNHB5enNkeUlCdUhLZ2R5YlB5SWVjRHZQV0xqN1VsTk4zZnJRR1NoZG5zSnZWNnlmMWNIZUJmNGJkbDFVY1d4OTRGYlQxMjZhU3dIUzhBU3pOSW4yMWlHbXBCeWxsMjgwQ2JQUFhHY1RYWTlEOXdCWGdYZUE3SnAxODBLNDNtS0ZMK3hrTkpaQmpZY0Q1WU14NkhUZ0lrOHU3NzB4VFdTSkNmUEQxUXN0eWpHWGQ0RUJvZXZtUmJHQ1BpRXB3cGlEbjZBK2NHNHo1WWUvMVlpWjFBUUJGeTgwT2J4LzQ2TVY3eEJrYTl2Y2FpR2RGUHU4d0Z3WSs1WHR3enlIU3g5Z0kzK2hxWC9nYnlySU1yS09uZXVSUmdHMHc3ZG9NalpBWWZEK0Nad3MvN0xlY2k3V0xxT0pYL0hzczU0MmtCRUFNNmZiODA2ZEJONGEvK08vYU9wbDRHL1VHZlUxRElzM3lscVBvMWVpc3lVNTU1SG0wZTZoeFBid05lQlRUaFlNLzZNcWlCYWltWC94WkovUVA0WUJWR2tYQmc2V3ExcHZVRUFMZ0UvblR5WjFJeGZCZjRLektoVFBaWnRqd09vYVFlUmVVeVpkOXd2QmI0Ry9Hc1MyWGVZRlVUZnc1Si9RcjZEZ2lneXY3VjJXSGE0UlpFLzNQam43YVBuR0pZOXd0S0g0NGw0RVRtT1ZpdGs2cGpxbnJjQkYxRzgrK0xxZ1VPV1llbS90YVpUWkFHQ0FLS1dJMDFuanJGY0JhNDc0UFVEdXkzQjBnY0tvc2dDdGFLWmd6Z1Ryem5nNVNkUExjWFNEVFZMUlJZc2FwWDJHd0ZlY2NDMVl0c3JpQ0luSkFvcmE4WnJEcmdDWU5rakxWMFRPU0ZSVkRHRUExY2NjQkhmaDN5M2dTS0pyS1l3ZEZVanFoY2RXTnV5VGpNbEVsbGhidnFpOFltMncvZUw5eGVLeUlrS0svcU56dFE4RldsRTZNb2JxZzZMR3lxS3lHcXJhS2JpOVBFWElzMXdsVFdqaURUQ0JRcWp5RkpRelNpeUpBS0ZVV1E1VkdSUllSUnBTcUErbzhoeXFNaWl3aWpTRk5XTUlrdENOYVBJa2xETktISkdLSXdpRFNxYjNsQVlSWmFFd2lpeUpCUkdrU1doTUlvc0NZVlJwRWtsMHhzS28waUR5cVlhRlVhUkJsbkpGN2twakNKTktrbWp3aWl5SkJSR2tTV2hNSW9zQ1lWUlpFa29qQ0lOOGhwTkZWbCtDcVBJa2xBWVJScFNOdUVQQ3FOSVk2d2lqUXFqU0VOODJlZ05DcU5JWXhSR2tTV1JaYjcwdU90c0RSb3Fpc2hxcXd4akFFbERaUkZaYVdsNUdCUG5qZDJtQ2lPeXFzeU1OQ245bHZCZGwyWCtZVlhIVWtTZVRwTGtWS1Rzb1FQdTkvdHFxWXFjcEhpWVZaMXkzd0dmOWZ0cFZYdFdSSTdKZTJOWUhjWlBIWERYZ0oyZG1EeFhJRVVXcmQ5UEtwZkNBWGNkOENkZ1BjK05yYTJZTkZVZ1JSWWx6NDMrSUswNmJSMjQ1d0FQZkFTUWUyTnJlMEN2cHo2a3lDSjB1OE02dGVKSGdKK3N3TG5OZUw3UkRIWjdDWnVkUVoxMnJvak0wTzhuREVlbDB4bFE1TzQyN0MySFd3YyszSDlHbG5sMkhnL3BkQVlNNHJSeXhibUk3SW5qak81dXJSYm1yeW55UjdEeDV4OU9kbDRHN284ZmozQUJQSGV1eFhOckVlMTJXUG1WeUNLcmFqQkk2WFpIVmZPS0FGdkF0ZkVqMGFFRDd3S2ZUTHZLVy9FaWcwR0tDMkJ0TFdKdExhVFZDb2tpclRjWE1UTzYzUkdEdUhiMzdnZU1nd2dId3dod0IzZ1Z1RmwyQjIvRkpPWmtJdE81Z0hZN3BOMXlSSkVqaWtMQ1VGV25yQVl6aU9PVVhpOGhyNythN1ZmQXgvdDNIQTRqRkdtOUF0eW9lOWZKcE9ad3VMZlBCUkMxUXFJd0lBemQrQ2NnakJ4aDJYY3BpNXdCM2h0cG1qTWE1Y1REclBLOWlvZjhIbmp2OE01cFlVeUF0NERmQWQ4NFZra3BhczhreWFlK0pTUUlpdHJVQlFFdURJcnR5WE1YRUFRUUJBR0JDd2dvdHAyYlhCc2N1bGRRcS85cVZ2MnhCM3ZuVnA5bmdOV2NrdlYxWDdmbVA2aVoxUmt1TDhwWTg4UzZmNXU2LytmTVc1MCtFNXptNzFMNzcwMjkzNldlUDFEazYwZzBwb1VSWUFCOEUzaWZpaWJyY1pnVms2RTVCcG85a2RYeFM0b2FjZW9xQUZmU3QwdUJXeFFwN3B4STBVUldRd2Y0RGtXZVppN0hjWmN2blNNcUgyeTVBN3dFL0FLOUVWbGtIZ2xGYmw1aXhpekZmaTRNSFpjdW5hK2FudWdBN3dBdkFEOEhOaFpRVUpGbjFRWkZUbDZneUUydGxtWGdILzRZS0Rxelc5dHg1ZWQwakRuZ092QTY4REx3SW5BVnVBQzA1aTI1eUJtVkFqMktGVFNmQTU4QmZ3VHVVYXo1bnN2L0FRM0dyWnpwd0VNY0FBQUFBRWxGVGtTdVFtQ0NcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9iYWNrWWVsbG93QnRuLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuLi9jc3MvZW5kLmNzcyc7XG5pbXBvcnQgc2hpbmVfMCBmcm9tICcuLi9pbWcvc2hpbmVfMC5wbmcnO1xuaW1wb3J0IHNoaW5lXzEgZnJvbSAnLi4vaW1nL3NoaW5lXzEucG5nJztcbmltcG9ydCBzaGluZV8yIGZyb20gJy4uL2ltZy9zaGluZV8yLnBuZyc7XG5pbXBvcnQgc2hpbmVfMyBmcm9tICcuLi9pbWcvc2hpbmVfMy5wbmcnO1xuaW1wb3J0IHNoaW5lXzQgZnJvbSAnLi4vaW1nL3NoaW5lXzQucG5nJztcblxuaW1wb3J0IGFqYXggZnJvbSAnLi9BamF4LmpzJztcblxudmFyIFVGTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5VRk8nKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBVRk8uY2xhc3NOYW1lID0gJ21vdmluZ1VGTyc7XG4gICAgVUZPLnN0eWxlLnRvcCA9ICc2JSc7XG59LCA1MDApO1xuXG52YXIgc3BhY2VTdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwYWNlU3RhdGlvbicpO1xuc3BhY2VTdGF0aW9uLnN0eWxlLm1hcmdpblRvcCA9ICcyMCUnO1xuXG5cblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHNwYWNlU3RhdGlvbi5zdHlsZS5tYXJnaW5Ub3AgPT09ICcyMCUnKSB7XG4gICAgICAgIHNwYWNlU3RhdGlvbi5zdHlsZS5tYXJnaW5Ub3AgPSAnMjMlJztcbiAgICB9IGVsc2UgaWYgKHNwYWNlU3RhdGlvbi5zdHlsZS5tYXJnaW5Ub3AgPT09ICcyMyUnKSB7XG4gICAgICAgIHNwYWNlU3RhdGlvbi5zdHlsZS5tYXJnaW5Ub3AgPSAnMjAlJztcbiAgICB9XG59LCAxMDAwKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKFVGTy5zdHlsZS50b3AgPT09ICc2JScpIHtcbiAgICAgICAgICAgIFVGTy5zdHlsZS50b3AgPSAnMTAlJztcbiAgICAgICAgfSBlbHNlIGlmIChVRk8uc3R5bGUudG9wID09PSAnMTAlJykge1xuICAgICAgICAgICAgVUZPLnN0eWxlLnRvcCA9ICc2JSc7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbn0sIDIwMDApO1xuXG5mdW5jdGlvbiBjaGFuZ2VJbWcoaW5kZXgpIHtcbiAgICAvL3ZhciBzcmMgPSBudWxsO1xuXG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgICAvLyBjYXNlIDA6XG4gICAgICAgIC8vICAgICBzaGluZUltZy5zcmMgPSBzaGluZV8wO1xuICAgICAgICAvLyAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHNoaW5lSW1nLnNyYyA9IHNoaW5lXzE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgc2hpbmVJbWcuc3JjID0gc2hpbmVfMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBzaGluZUltZy5zcmMgPSBzaGluZV8zO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgIHNoaW5lSW1nLnNyYyA9IHNoaW5lXzQ7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2hpbmVJbWcuc3JjID0gc2hpbmVfNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuXG52YXIgc2hpbmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkUm9jaycpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xudmFyIGluZGV4ID0gMCxcbiAgICBmbGFnID0gdHJ1ZTtcbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChpbmRleCA8PSA0ICYmIGZsYWcpIHtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICB9XG4gICAgaWYgKGluZGV4ID4gNCkge1xuICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChpbmRleCA+PSAwICYmICFmbGFnKSB7XG4gICAgICAgIGluZGV4IC09IDE7XG4gICAgfVxuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgIH1cbiAgICBjaGFuZ2VJbWcoaW5kZXgpO1xufSwgMzAwKTtcblxuLy9idXR0b25cbnZhciBiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnllbGxvd0J0bicpO1xuXG5iYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gd2lkdGg6IDg2JTtcbiAgICAvLyBtYXJnaW4tdG9wOiAtMzklO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiA2JTtcbiAgICBiYWNrQnRuLmNsYXNzTmFtZSA9ICdwcmVzc0J0bic7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgYmFja0J0bi5jbGFzc05hbWUgPSAneWVsbG93QnRuJztcbiAgICB9LCAyMDApO1xufSwgZmFsc2UpO1xuXG4vLyBhamF4KHtcbi8vICAgICB1cmw6ICcnLFxuLy8gICAgIG1ldGhvZDogJ0dFVCcsXG4vLyAgICAgc3VjY2VzczpmdW5jdGlvbiAoZGF0YSkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICB9XG4vLyB9KVxuXG5hamF4KCk7XG5cbi8vVGhlIGVuZFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2VuZC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZW5kLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9lbmQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2VuZC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9lbmQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkZjU3M2E1YWE1NjM5OGQzM2JjN2FlNjRlNDQ0YzVmYS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvZW5kQmFja2dyb3VuZC5wbmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=