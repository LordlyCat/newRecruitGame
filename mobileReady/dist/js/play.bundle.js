webpackJsonp([2],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_playing_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_playing_css__);



var UFO = document.querySelector('.UFO');
var order = document.querySelectorAll('.order');
var redRock = document.querySelector('.redRock');

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
}, 200);

/***/ }),

/***/ 14:
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

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4ae9ac99bef51cdfa2e860dbbe74c12.png";

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody{\n    position: relative;\n    background: url(" + __webpack_require__(15) + ") no-repeat;\n    background-size: 100%;\n    overflow: hidden;\n}\n\n.mainBody{\n    width: 100%;\n}\n\n.UFO img, .movingUFO img{\n    width: 100%;\n}\n\n.UFO{\n    position: absolute;\n    width: 1%;\n    top: -27%;\n    left: -36%;\n    transition: width 2.5s;\n}\n\n.movingUFO{\n    position: absolute;\n    width: 18%;\n    top: 10%;\n    left: 9%;\n    transition: width 2s, top 3s;\n    z-index: 1000;\n}\n\n\n.spaceStation{\n    position: relative;\n    width: 100%;\n    margin-top: 28%;\n    /*margin-left: */\n}\n\n.spaceStation img.space{\n    width: 90%;\n    margin-left: 5%;\n}\n\n.redRock{\n    position: absolute;\n    width: 100%;\n    top: 72%;\n    opacity: 0.8;\n}\n\n.redRock img{\n    position: absolute;\n    width: 72%;\n    top: 30%;\n    left: 14%;\n}\n\nimg.astronaut{\n    position: absolute;\n    width: 20%;\n    top: 89%;\n    left: 46%;\n}\n\n\n\n\n.btnWrapper{\n    position: relative;\n    width: 50%;\n    margin-left: 25%;\n    margin-top: 30%;\n}\n\n.btnWrapper img.order{\n    position: absolute;\n    width: 20%;\n}\n\n.right{\n    margin-top: 31%;\n    margin-left: 83%;\n}\n\n.left{\n    margin-left: -1%;\n    margin-top: 31%;\n}\n\n.top{\n    margin-left: 40%;\n    margin-top: 3%;\n}\n\n.buttom{\n    margin-left: 40%;\n    margin-top: 70%;\n}\n\n.playBtn{\n    position: relative;\n}\n.btnWrapper img.btn{\n    width: 55%;\n    position: absolute;\n    margin-top: 26%;\n    left: 22%;\n}\n\n.btnWrapper img.smallBtn{\n    position: absolute;\n    width: 40%;\n    margin-top: 26%;\n    left: 30%;\n}\n\n.btnWrapper img.pressSmallBtn{\n    position: absolute;\n    width: 35%;\n    margin-top: 30%;\n    left: 32%;\n}\n\n\n", ""]);

// exports


/***/ })

},[13]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcGxheWluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3BsYXlpbmcuY3NzPzNmNTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9wbGF5aW5nQmFja2dyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9wbGF5aW5nLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsTzs7Ozs7OztBQzNERDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUN6QkEsZ0Y7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFHQTtBQUNBLDRCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLFNBQVMseUJBQXlCLGlFQUFpRiw0QkFBNEIsdUJBQXVCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyw2QkFBNkIsa0JBQWtCLEdBQUcsU0FBUyx5QkFBeUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsNkJBQTZCLEdBQUcsZUFBZSx5QkFBeUIsaUJBQWlCLGVBQWUsZUFBZSxtQ0FBbUMsb0JBQW9CLEdBQUcsb0JBQW9CLHlCQUF5QixrQkFBa0Isc0JBQXNCLDBCQUEwQiw0QkFBNEIsaUJBQWlCLHNCQUFzQixHQUFHLGFBQWEseUJBQXlCLGtCQUFrQixlQUFlLG1CQUFtQixHQUFHLGlCQUFpQix5QkFBeUIsaUJBQWlCLGVBQWUsZ0JBQWdCLEdBQUcsa0JBQWtCLHlCQUF5QixpQkFBaUIsZUFBZSxnQkFBZ0IsR0FBRyxzQkFBc0IseUJBQXlCLGlCQUFpQix1QkFBdUIsc0JBQXNCLEdBQUcsMEJBQTBCLHlCQUF5QixpQkFBaUIsR0FBRyxXQUFXLHNCQUFzQix1QkFBdUIsR0FBRyxVQUFVLHVCQUF1QixzQkFBc0IsR0FBRyxTQUFTLHVCQUF1QixxQkFBcUIsR0FBRyxZQUFZLHVCQUF1QixzQkFBc0IsR0FBRyxhQUFhLHlCQUF5QixHQUFHLHNCQUFzQixpQkFBaUIseUJBQXlCLHNCQUFzQixnQkFBZ0IsR0FBRyw2QkFBNkIseUJBQXlCLGlCQUFpQixzQkFBc0IsZ0JBQWdCLEdBQUcsa0NBQWtDLHlCQUF5QixpQkFBaUIsc0JBQXNCLGdCQUFnQixHQUFHOztBQUVwMEQiLCJmaWxlIjoianMvcGxheS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2Nzcy9wbGF5aW5nLmNzcyc7XG5cblxudmFyIFVGTyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5VRk8nKTtcbnZhciBvcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcicpO1xudmFyIHJlZFJvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVkUm9jaycpO1xuXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbigpIHtcbiAgICBwbGF5QnRuLmNsYXNzTmFtZSA9ICdwcmVzc1NtYWxsQnRuJztcbiAgICBvcmRlclswXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzc3JSc7XG4gICAgb3JkZXJbMV0uc3R5bGUubWFyZ2luTGVmdCA9ICc1JSc7XG4gICAgb3JkZXJbMl0uc3R5bGUubWFyZ2luVG9wID0gJzclJztcbiAgICBvcmRlclszXS5zdHlsZS5tYXJnaW5Ub3AgPSAnNjUlJztcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGxheUJ0bi5jbGFzc05hbWUgPSAnc21hbGxCdG4nO1xuICAgICAgICBvcmRlclswXS5zdHlsZS5tYXJnaW5MZWZ0ID0gJzgzJSc7XG4gICAgICAgIG9yZGVyWzFdLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTElJztcbiAgICAgICAgb3JkZXJbMl0uc3R5bGUubWFyZ2luVG9wID0gJzMlJztcbiAgICAgICAgb3JkZXJbM10uc3R5bGUubWFyZ2luVG9wID0gJzcwJSc7XG4gICAgfSwgMzApXG59LCBmYWxzZSlcblxuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBVRk8uY2xhc3NOYW1lID0gJ21vdmluZ1VGTyc7XG4gICAgVUZPLnN0eWxlLnRvcCA9ICcxMCUnO1xufSwgNTAwKTtcblxuXG5cbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChVRk8uc3R5bGUudG9wID09PSAnMTAlJykge1xuICAgICAgICBVRk8uc3R5bGUudG9wID0gJzE4JSc7XG4gICAgfSBlbHNlIGlmIChVRk8uc3R5bGUudG9wID09PSAnMTglJykge1xuICAgICAgICBVRk8uc3R5bGUudG9wID0gJzEwJSc7XG4gICAgfVxufSwgMTAwMCk7XG5cblxudmFyIGNsaWNrU3BlZWQgPSAwO1xuXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNsaWNrU3BlZWQgPCAxMDApIHtcbiAgICAgICAgY2xpY2tTcGVlZCArPSA1O1xuICAgIH1cbiAgICBpZiAoY2xpY2tTcGVlZCA+MTAwKSB7XG4gICAgICAgIGNsaWNrU3BlZWQgPSAxMDA7XG4gICAgfVxuICAgIHJlZFJvY2suc3R5bGUub3BhY2l0eSA9IGNsaWNrU3BlZWQvMTAwO1xufSwgZmFsc2UpO1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgcmVkUm9jay5zdHlsZS5vcGFjaXR5IC09IDAuMTtcbiAgICBjbGlja1NwZWVkIC09MztcbiAgICBpZiAocmVkUm9jay5zdHlsZS5vcGFjaXR5IDwgMC4xKSB7XG4gICAgICAgIHJlZFJvY2suc3R5bGUub3BhY2l0eSA9IDAuMTtcbiAgICB9XG4gICAgaWYgKGNsaWNrU3BlZWQgPCAwKSB7XG4gICAgICAgIGNsaWNrU3BlZWQgPSAwO1xuICAgIH1cbn0sIDIwMCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvcGxheWluZy5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGxheWluZy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGxheWluZy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vcGxheWluZy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Nzcy9wbGF5aW5nLmNzc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYTRhZTlhYzk5YmVmNTFjZGZhMmU4NjBkYmJlNzRjMTIucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL3BsYXlpbmdCYWNrZ3JvdW5kLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL3BsYXlpbmdCYWNrZ3JvdW5kLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1haW5Cb2R5e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLlVGTyBpbWcsIC5tb3ZpbmdVRk8gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLlVGT3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMSU7XFxuICAgIHRvcDogLTI3JTtcXG4gICAgbGVmdDogLTM2JTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMi41cztcXG59XFxuXFxuLm1vdmluZ1VGT3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTglO1xcbiAgICB0b3A6IDEwJTtcXG4gICAgbGVmdDogOSU7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDJzLCB0b3AgM3M7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcblxcbi5zcGFjZVN0YXRpb257XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IDI4JTtcXG4gICAgLyptYXJnaW4tbGVmdDogKi9cXG59XFxuXFxuLnNwYWNlU3RhdGlvbiBpbWcuc3BhY2V7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcXG59XFxuXFxuLnJlZFJvY2t7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNzIlO1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5yZWRSb2NrIGltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNzIlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbGVmdDogMTQlO1xcbn1cXG5cXG5pbWcuYXN0cm9uYXV0e1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIHRvcDogODklO1xcbiAgICBsZWZ0OiA0NiU7XFxufVxcblxcblxcblxcblxcbi5idG5XcmFwcGVye1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG59XFxuXFxuLmJ0bldyYXBwZXIgaW1nLm9yZGVye1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcblxcbi5yaWdodHtcXG4gICAgbWFyZ2luLXRvcDogMzElO1xcbiAgICBtYXJnaW4tbGVmdDogODMlO1xcbn1cXG5cXG4ubGVmdHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xJTtcXG4gICAgbWFyZ2luLXRvcDogMzElO1xcbn1cXG5cXG4udG9we1xcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xcbiAgICBtYXJnaW4tdG9wOiAzJTtcXG59XFxuXFxuLmJ1dHRvbXtcXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcXG4gICAgbWFyZ2luLXRvcDogNzAlO1xcbn1cXG5cXG4ucGxheUJ0bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuV3JhcHBlciBpbWcuYnRue1xcbiAgICB3aWR0aDogNTUlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IDI2JTtcXG4gICAgbGVmdDogMjIlO1xcbn1cXG5cXG4uYnRuV3JhcHBlciBpbWcuc21hbGxCdG57XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWFyZ2luLXRvcDogMjYlO1xcbiAgICBsZWZ0OiAzMCU7XFxufVxcblxcbi5idG5XcmFwcGVyIGltZy5wcmVzc1NtYWxsQnRue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAzNSU7XFxuICAgIG1hcmdpbi10b3A6IDMwJTtcXG4gICAgbGVmdDogMzIlO1xcbn1cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL2Nzcy9wbGF5aW5nLmNzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9