webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n@font-face {\n    font-family: 'HKHB';\n    src: url(" + __webpack_require__(6) + ");\n    font-style: normal;\n    font-weight: normal;\n}\n\n\nbody {\n    min-width: 1440px;\n}\n\n.mainBody {\n    width: 100%;\n    background: url(" + __webpack_require__(7) + ") no-repeat;\n    background-size: 100%;\n    overflow: hidden;\n    position: relative;\n}\n\n.topWrapper {\n    width: 100%;\n    height: 15%;\n    margin-top: 3%;\n    margin-left: 2.3%;\n}\n\n.title {\n    display: inline-block;\n    width: 76%;\n    height: 100%;\n    margin-left: 100%;\n}\n\n.movingTitle {\n    display: inline-block;\n    width: 76%;\n    height: 100%;\n    margin-left: 9%;\n    transition: margin-left 2s;\n}\n\n.logo {\n    display: inline-block;\n    width: 15%;\n    height: 100%;\n    z-index: 10000;\n}\n\n.logo img {\n    width: 100%;\n    float: left;\n    margin-left: 12%;\n    margin-top: -13%;\n}\n\n.words {\n    display: inline-block;\n    width: 82%;\n    height: 100%;\n    background: url(" + __webpack_require__(8) + ") no-repeat;\n    background-size: 100%;\n}\n\nimg.music {\n    width: 8%;\n    float: right;\n    margin-top: -7.4%;\n    margin-right: 5.5%;\n    cursor: pointer;\n}\n\n.num {\n\tposition: absolute;\n    font-family: 'HKHB';\n    font-size: 2vw;\n    color: white;\n    top: 25%;\n    left: 72.5%;\n}\n\n.num span{\n\tcolor: yellow;\n}\n\n.QRcode {\n    width: 23%;\n    display: inline-block;\n    float: left;\n    margin-left: -2.2%;\n    margin-top: 1%;\n}\n\n.leftHead {\n    display: inline-block;\n    float: left;\n    width: 27%;\n    height: 35%;\n    margin-left: 14%;\n    margin-top: 5.3%;\n}\n\n.QRcode img {\n    width: 100%;\n}\n\n.head {\n    display: inline-block;\n    /*float: right;*/\n    width: 25%;\n    height: 45%;\n    background: yellow;\n    margin-left: 5.5%;\n    margin-top: 5%;\n    background: url(" + __webpack_require__(9) + ") no-repeat;\n    background-size: 84%;\n    overflow: hidden;\n}\n\n.head img {\n    width: 73%;\n}\n\n.leftHead .head:nth-child(4) {\n    margin-left: 9.3%;\n}\n\n.head img {\n    margin-left: 4.8%;\n    margin-top: 6%;\n    border-radius: 50%;\n}\n\n.rightHead {\n    display: inline-block;\n    float: right;\n    width: 27%;\n    height: 35%;\n    margin-right: 10.4%;\n    margin-top: 4.7%;\n}\n\n.rightHead .head:nth-child(4) {\n    margin-left: -4.3%;\n}\n\n.rightHead .head:nth-child(1) {\n    margin-left: 0;\n}\n\n.btn {\n    width: 20.5%;\n    float: left;\n    overflow: hidden;\n    margin-left: -21.5%;\n    margin-top: 21%;\n    cursor: pointer;\n}\n\n.btn img {\n    width: 100%;\n}\n\n.UFO {\n    position: absolute;\n    width: 0.5%;\n    top: -23%;\n    left: -26%;\n}\n\n.UFO img,\n.movingUFO img {\n    width: 100%;\n}\n\n.movingUFO {\n    position: absolute;\n    width: 7.5%;\n    top: 23%;\n    left: 26%;\n    transition: width 3s, top 2s, left 3s;\n}\n\n.UFO img,\n.UFO img {\n    width: 100%;\n}\n\n\n\n\n\n/*The end*/", ""]);

// exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/*! * * * * * * * * * * * * * * * * * * * *\\  \n  CSShake :: Package\n  v1.5.0\n  CSS classes to move your DOM\n  (c) 2015 @elrumordelaluz\n  http://elrumordelaluz.github.io/csshake/\n  Licensed under MIT\n\\* * * * * * * * * * * * * * * * * * * * */.shake,.shake-little,.shake-slow,.shake-hard,.shake-horizontal,.shake-vertical,.shake-rotate,.shake-opacity,.shake-crazy,.shake-chunk{display:inline-block;transform-origin:center center}.shake-freeze,.shake-constant.shake-constant--hover:hover,.shake-trigger:hover .shake-constant.shake-constant--hover{animation-play-state:paused}.shake-freeze:hover,.shake-trigger:hover .shake-freeze,.shake:hover,.shake-trigger:hover .shake,.shake-little:hover,.shake-trigger:hover .shake-little,.shake-slow:hover,.shake-trigger:hover .shake-slow,.shake-hard:hover,.shake-trigger:hover .shake-hard,.shake-horizontal:hover,.shake-trigger:hover .shake-horizontal,.shake-vertical:hover,.shake-trigger:hover .shake-vertical,.shake-rotate:hover,.shake-trigger:hover .shake-rotate,.shake-opacity:hover,.shake-trigger:hover .shake-opacity,.shake-crazy:hover,.shake-trigger:hover .shake-crazy,.shake-chunk:hover,.shake-trigger:hover .shake-chunk{animation-play-state:running}@keyframes shake{2%{transform:translate(.5px, 1.5px) rotate(1.5deg)}4%{transform:translate(.5px, 1.5px) rotate(1.5deg)}6%{transform:translate(-1.5px, -1.5px) rotate(-.5deg)}8%{transform:translate(.5px, -.5px) rotate(.5deg)}10%{transform:translate(.5px, 2.5px) rotate(.5deg)}12%{transform:translate(2.5px, 1.5px) rotate(-.5deg)}14%{transform:translate(-1.5px, 2.5px) rotate(-.5deg)}16%{transform:translate(-.5px, .5px) rotate(.5deg)}18%{transform:translate(.5px, 2.5px) rotate(1.5deg)}20%{transform:translate(-.5px, -.5px) rotate(.5deg)}22%{transform:translate(2.5px, .5px) rotate(-.5deg)}24%{transform:translate(-1.5px, -1.5px) rotate(.5deg)}26%{transform:translate(2.5px, -.5px) rotate(-.5deg)}28%{transform:translate(1.5px, -.5px) rotate(.5deg)}30%{transform:translate(.5px, .5px) rotate(-.5deg)}32%{transform:translate(-1.5px, .5px) rotate(-.5deg)}34%{transform:translate(.5px, 2.5px) rotate(-.5deg)}36%{transform:translate(-.5px, -.5px) rotate(1.5deg)}38%{transform:translate(-1.5px, -1.5px) rotate(.5deg)}40%{transform:translate(-1.5px, 1.5px) rotate(1.5deg)}42%{transform:translate(.5px, -1.5px) rotate(1.5deg)}44%{transform:translate(.5px, .5px) rotate(.5deg)}46%{transform:translate(-1.5px, -1.5px) rotate(1.5deg)}48%{transform:translate(.5px, -1.5px) rotate(.5deg)}50%{transform:translate(2.5px, .5px) rotate(-.5deg)}52%{transform:translate(-.5px, 2.5px) rotate(-.5deg)}54%{transform:translate(.5px, .5px) rotate(.5deg)}56%{transform:translate(-1.5px, 2.5px) rotate(.5deg)}58%{transform:translate(2.5px, .5px) rotate(.5deg)}60%{transform:translate(-1.5px, 2.5px) rotate(.5deg)}62%{transform:translate(1.5px, -.5px) rotate(-.5deg)}64%{transform:translate(1.5px, -1.5px) rotate(1.5deg)}66%{transform:translate(1.5px, -1.5px) rotate(-.5deg)}68%{transform:translate(.5px, 2.5px) rotate(-.5deg)}70%{transform:translate(1.5px, -1.5px) rotate(1.5deg)}72%{transform:translate(1.5px, 1.5px) rotate(-.5deg)}74%{transform:translate(-.5px, 1.5px) rotate(1.5deg)}76%{transform:translate(1.5px, 2.5px) rotate(.5deg)}78%{transform:translate(-.5px, .5px) rotate(.5deg)}80%{transform:translate(-1.5px, 2.5px) rotate(.5deg)}82%{transform:translate(.5px, 2.5px) rotate(-.5deg)}84%{transform:translate(2.5px, -.5px) rotate(.5deg)}86%{transform:translate(1.5px, .5px) rotate(.5deg)}88%{transform:translate(-.5px, -1.5px) rotate(-.5deg)}90%{transform:translate(1.5px, -.5px) rotate(1.5deg)}92%{transform:translate(.5px, 2.5px) rotate(.5deg)}94%{transform:translate(2.5px, .5px) rotate(-.5deg)}96%{transform:translate(.5px, 2.5px) rotate(.5deg)}98%{transform:translate(2.5px, -1.5px) rotate(1.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}.shake:hover,.shake-trigger:hover .shake,.shake.shake-freeze,.shake.shake-constant{animation-name:shake;animation-duration:100ms;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-little{2%{transform:translate(1px, 1px) rotate(.5deg)}4%{transform:translate(1px, 1px) rotate(.5deg)}6%{transform:translate(1px, 1px) rotate(.5deg)}8%{transform:translate(1px, 0px) rotate(.5deg)}10%{transform:translate(1px, 1px) rotate(.5deg)}12%{transform:translate(1px, 1px) rotate(.5deg)}14%{transform:translate(0px, 0px) rotate(.5deg)}16%{transform:translate(1px, 1px) rotate(.5deg)}18%{transform:translate(0px, 1px) rotate(.5deg)}20%{transform:translate(0px, 0px) rotate(.5deg)}22%{transform:translate(1px, 1px) rotate(.5deg)}24%{transform:translate(0px, 1px) rotate(.5deg)}26%{transform:translate(0px, 1px) rotate(.5deg)}28%{transform:translate(0px, 1px) rotate(.5deg)}30%{transform:translate(0px, 0px) rotate(.5deg)}32%{transform:translate(1px, 1px) rotate(.5deg)}34%{transform:translate(0px, 0px) rotate(.5deg)}36%{transform:translate(0px, 0px) rotate(.5deg)}38%{transform:translate(1px, 1px) rotate(.5deg)}40%{transform:translate(0px, 1px) rotate(.5deg)}42%{transform:translate(0px, 0px) rotate(.5deg)}44%{transform:translate(1px, 0px) rotate(.5deg)}46%{transform:translate(0px, 0px) rotate(.5deg)}48%{transform:translate(0px, 1px) rotate(.5deg)}50%{transform:translate(0px, 1px) rotate(.5deg)}52%{transform:translate(0px, 0px) rotate(.5deg)}54%{transform:translate(0px, 1px) rotate(.5deg)}56%{transform:translate(1px, 0px) rotate(.5deg)}58%{transform:translate(1px, 0px) rotate(.5deg)}60%{transform:translate(1px, 1px) rotate(.5deg)}62%{transform:translate(0px, 1px) rotate(.5deg)}64%{transform:translate(0px, 0px) rotate(.5deg)}66%{transform:translate(0px, 1px) rotate(.5deg)}68%{transform:translate(0px, 1px) rotate(.5deg)}70%{transform:translate(0px, 1px) rotate(.5deg)}72%{transform:translate(1px, 0px) rotate(.5deg)}74%{transform:translate(0px, 1px) rotate(.5deg)}76%{transform:translate(0px, 1px) rotate(.5deg)}78%{transform:translate(0px, 1px) rotate(.5deg)}80%{transform:translate(0px, 0px) rotate(.5deg)}82%{transform:translate(1px, 0px) rotate(.5deg)}84%{transform:translate(1px, 0px) rotate(.5deg)}86%{transform:translate(0px, 0px) rotate(.5deg)}88%{transform:translate(0px, 0px) rotate(.5deg)}90%{transform:translate(1px, 0px) rotate(.5deg)}92%{transform:translate(0px, 1px) rotate(.5deg)}94%{transform:translate(1px, 1px) rotate(.5deg)}96%{transform:translate(1px, 0px) rotate(.5deg)}98%{transform:translate(1px, 0px) rotate(.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-little:hover,.shake-trigger:hover .shake-little,.shake-little.shake-freeze,.shake-little.shake-constant{animation-name:shake-little;animation-duration:100ms;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-slow{2%{transform:translate(4px, -9px) rotate(-2.5deg)}4%{transform:translate(6px, 8px) rotate(2.5deg)}6%{transform:translate(-5px, 6px) rotate(-.5deg)}8%{transform:translate(-1px, 1px) rotate(-.5deg)}10%{transform:translate(5px, 8px) rotate(2.5deg)}12%{transform:translate(-7px, 0px) rotate(2.5deg)}14%{transform:translate(6px, -4px) rotate(1.5deg)}16%{transform:translate(-2px, 6px) rotate(3.5deg)}18%{transform:translate(0px, 10px) rotate(.5deg)}20%{transform:translate(9px, 1px) rotate(1.5deg)}22%{transform:translate(5px, 4px) rotate(2.5deg)}24%{transform:translate(-1px, -9px) rotate(-2.5deg)}26%{transform:translate(-1px, 3px) rotate(.5deg)}28%{transform:translate(8px, -3px) rotate(-2.5deg)}30%{transform:translate(4px, 10px) rotate(.5deg)}32%{transform:translate(7px, 1px) rotate(2.5deg)}34%{transform:translate(7px, -4px) rotate(-1.5deg)}36%{transform:translate(-4px, 9px) rotate(-.5deg)}38%{transform:translate(8px, 10px) rotate(1.5deg)}40%{transform:translate(7px, 9px) rotate(3.5deg)}42%{transform:translate(-7px, -5px) rotate(1.5deg)}44%{transform:translate(5px, 3px) rotate(-1.5deg)}46%{transform:translate(-7px, 0px) rotate(-.5deg)}48%{transform:translate(-6px, -9px) rotate(-1.5deg)}50%{transform:translate(-9px, -4px) rotate(-2.5deg)}52%{transform:translate(8px, -1px) rotate(3.5deg)}54%{transform:translate(-1px, 2px) rotate(3.5deg)}56%{transform:translate(1px, -5px) rotate(-2.5deg)}58%{transform:translate(-3px, -5px) rotate(-1.5deg)}60%{transform:translate(-3px, 3px) rotate(-1.5deg)}62%{transform:translate(9px, 3px) rotate(1.5deg)}64%{transform:translate(-3px, 4px) rotate(3.5deg)}66%{transform:translate(0px, 10px) rotate(2.5deg)}68%{transform:translate(-5px, 6px) rotate(-.5deg)}70%{transform:translate(-8px, -4px) rotate(-.5deg)}72%{transform:translate(-9px, 2px) rotate(1.5deg)}74%{transform:translate(0px, 3px) rotate(1.5deg)}76%{transform:translate(4px, 6px) rotate(-.5deg)}78%{transform:translate(-2px, 1px) rotate(.5deg)}80%{transform:translate(-1px, 2px) rotate(-2.5deg)}82%{transform:translate(-9px, 2px) rotate(.5deg)}84%{transform:translate(-8px, -7px) rotate(3.5deg)}86%{transform:translate(5px, -5px) rotate(.5deg)}88%{transform:translate(-4px, 1px) rotate(3.5deg)}90%{transform:translate(0px, 0px) rotate(3.5deg)}92%{transform:translate(5px, -8px) rotate(3.5deg)}94%{transform:translate(-3px, -2px) rotate(-.5deg)}96%{transform:translate(8px, -5px) rotate(-1.5deg)}98%{transform:translate(-1px, 9px) rotate(-1.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-slow:hover,.shake-trigger:hover .shake-slow,.shake-slow.shake-freeze,.shake-slow.shake-constant{animation-name:shake-slow;animation-duration:5s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-hard{2%{transform:translate(2px, 2px) rotate(1.5deg)}4%{transform:translate(-4px, 9px) rotate(-1.5deg)}6%{transform:translate(-5px, 6px) rotate(3.5deg)}8%{transform:translate(-3px, -3px) rotate(3.5deg)}10%{transform:translate(-5px, -6px) rotate(.5deg)}12%{transform:translate(-3px, -9px) rotate(.5deg)}14%{transform:translate(-7px, -8px) rotate(-1.5deg)}16%{transform:translate(-4px, 6px) rotate(-2.5deg)}18%{transform:translate(-5px, 10px) rotate(-2.5deg)}20%{transform:translate(4px, -8px) rotate(-1.5deg)}22%{transform:translate(1px, -2px) rotate(2.5deg)}24%{transform:translate(8px, -3px) rotate(.5deg)}26%{transform:translate(-8px, 8px) rotate(-.5deg)}28%{transform:translate(3px, -2px) rotate(-1.5deg)}30%{transform:translate(1px, -9px) rotate(.5deg)}32%{transform:translate(7px, 1px) rotate(.5deg)}34%{transform:translate(-1px, -5px) rotate(.5deg)}36%{transform:translate(3px, 10px) rotate(2.5deg)}38%{transform:translate(-8px, -7px) rotate(2.5deg)}40%{transform:translate(5px, 7px) rotate(-1.5deg)}42%{transform:translate(0px, 10px) rotate(-2.5deg)}44%{transform:translate(-2px, 1px) rotate(-1.5deg)}46%{transform:translate(5px, 2px) rotate(-1.5deg)}48%{transform:translate(-6px, -8px) rotate(.5deg)}50%{transform:translate(-9px, 1px) rotate(.5deg)}52%{transform:translate(1px, 5px) rotate(.5deg)}54%{transform:translate(-1px, 0px) rotate(-.5deg)}56%{transform:translate(-8px, 7px) rotate(1.5deg)}58%{transform:translate(10px, 6px) rotate(.5deg)}60%{transform:translate(-4px, 3px) rotate(-2.5deg)}62%{transform:translate(-7px, 9px) rotate(.5deg)}64%{transform:translate(-1px, -1px) rotate(-2.5deg)}66%{transform:translate(-6px, -8px) rotate(-1.5deg)}68%{transform:translate(-6px, 5px) rotate(-.5deg)}70%{transform:translate(1px, -8px) rotate(-1.5deg)}72%{transform:translate(1px, 9px) rotate(-.5deg)}74%{transform:translate(9px, -8px) rotate(-.5deg)}76%{transform:translate(5px, 6px) rotate(-1.5deg)}78%{transform:translate(10px, 5px) rotate(-.5deg)}80%{transform:translate(7px, 9px) rotate(-2.5deg)}82%{transform:translate(7px, -9px) rotate(3.5deg)}84%{transform:translate(1px, 8px) rotate(-.5deg)}86%{transform:translate(-1px, 9px) rotate(1.5deg)}88%{transform:translate(-5px, -3px) rotate(3.5deg)}90%{transform:translate(-2px, 5px) rotate(3.5deg)}92%{transform:translate(0px, 9px) rotate(-1.5deg)}94%{transform:translate(5px, 4px) rotate(.5deg)}96%{transform:translate(-4px, 0px) rotate(3.5deg)}98%{transform:translate(-6px, 1px) rotate(-2.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-hard:hover,.shake-trigger:hover .shake-hard,.shake-hard.shake-freeze,.shake-hard.shake-constant{animation-name:shake-hard;animation-duration:100ms;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-horizontal{2%{transform:translate(7px, 0) rotate(0)}4%{transform:translate(-3px, 0) rotate(0)}6%{transform:translate(9px, 0) rotate(0)}8%{transform:translate(2px, 0) rotate(0)}10%{transform:translate(10px, 0) rotate(0)}12%{transform:translate(-5px, 0) rotate(0)}14%{transform:translate(-2px, 0) rotate(0)}16%{transform:translate(2px, 0) rotate(0)}18%{transform:translate(-9px, 0) rotate(0)}20%{transform:translate(0px, 0) rotate(0)}22%{transform:translate(3px, 0) rotate(0)}24%{transform:translate(9px, 0) rotate(0)}26%{transform:translate(6px, 0) rotate(0)}28%{transform:translate(-1px, 0) rotate(0)}30%{transform:translate(-7px, 0) rotate(0)}32%{transform:translate(-8px, 0) rotate(0)}34%{transform:translate(-3px, 0) rotate(0)}36%{transform:translate(-3px, 0) rotate(0)}38%{transform:translate(3px, 0) rotate(0)}40%{transform:translate(2px, 0) rotate(0)}42%{transform:translate(-7px, 0) rotate(0)}44%{transform:translate(-1px, 0) rotate(0)}46%{transform:translate(-2px, 0) rotate(0)}48%{transform:translate(3px, 0) rotate(0)}50%{transform:translate(10px, 0) rotate(0)}52%{transform:translate(0px, 0) rotate(0)}54%{transform:translate(6px, 0) rotate(0)}56%{transform:translate(6px, 0) rotate(0)}58%{transform:translate(-2px, 0) rotate(0)}60%{transform:translate(-5px, 0) rotate(0)}62%{transform:translate(-2px, 0) rotate(0)}64%{transform:translate(-8px, 0) rotate(0)}66%{transform:translate(-2px, 0) rotate(0)}68%{transform:translate(-9px, 0) rotate(0)}70%{transform:translate(3px, 0) rotate(0)}72%{transform:translate(-9px, 0) rotate(0)}74%{transform:translate(7px, 0) rotate(0)}76%{transform:translate(-7px, 0) rotate(0)}78%{transform:translate(4px, 0) rotate(0)}80%{transform:translate(-4px, 0) rotate(0)}82%{transform:translate(1px, 0) rotate(0)}84%{transform:translate(5px, 0) rotate(0)}86%{transform:translate(-5px, 0) rotate(0)}88%{transform:translate(-5px, 0) rotate(0)}90%{transform:translate(9px, 0) rotate(0)}92%{transform:translate(7px, 0) rotate(0)}94%{transform:translate(-1px, 0) rotate(0)}96%{transform:translate(-1px, 0) rotate(0)}98%{transform:translate(-6px, 0) rotate(0)}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-horizontal:hover,.shake-trigger:hover .shake-horizontal,.shake-horizontal.shake-freeze,.shake-horizontal.shake-constant{animation-name:shake-horizontal;animation-duration:100ms;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-vertical{2%{transform:translate(0, 1px) rotate(0)}4%{transform:translate(0, 5px) rotate(0)}6%{transform:translate(0, -8px) rotate(0)}8%{transform:translate(0, -5px) rotate(0)}10%{transform:translate(0, -9px) rotate(0)}12%{transform:translate(0, -1px) rotate(0)}14%{transform:translate(0, 5px) rotate(0)}16%{transform:translate(0, 6px) rotate(0)}18%{transform:translate(0, -1px) rotate(0)}20%{transform:translate(0, -9px) rotate(0)}22%{transform:translate(0, -6px) rotate(0)}24%{transform:translate(0, 6px) rotate(0)}26%{transform:translate(0, -9px) rotate(0)}28%{transform:translate(0, 8px) rotate(0)}30%{transform:translate(0, 9px) rotate(0)}32%{transform:translate(0, -1px) rotate(0)}34%{transform:translate(0, -8px) rotate(0)}36%{transform:translate(0, 3px) rotate(0)}38%{transform:translate(0, 2px) rotate(0)}40%{transform:translate(0, 6px) rotate(0)}42%{transform:translate(0, -2px) rotate(0)}44%{transform:translate(0, 4px) rotate(0)}46%{transform:translate(0, -9px) rotate(0)}48%{transform:translate(0, 9px) rotate(0)}50%{transform:translate(0, 3px) rotate(0)}52%{transform:translate(0, 0px) rotate(0)}54%{transform:translate(0, -6px) rotate(0)}56%{transform:translate(0, 8px) rotate(0)}58%{transform:translate(0, -7px) rotate(0)}60%{transform:translate(0, -9px) rotate(0)}62%{transform:translate(0, -5px) rotate(0)}64%{transform:translate(0, -9px) rotate(0)}66%{transform:translate(0, 1px) rotate(0)}68%{transform:translate(0, 3px) rotate(0)}70%{transform:translate(0, 3px) rotate(0)}72%{transform:translate(0, 3px) rotate(0)}74%{transform:translate(0, -3px) rotate(0)}76%{transform:translate(0, 2px) rotate(0)}78%{transform:translate(0, 7px) rotate(0)}80%{transform:translate(0, 8px) rotate(0)}82%{transform:translate(0, -2px) rotate(0)}84%{transform:translate(0, 7px) rotate(0)}86%{transform:translate(0, -3px) rotate(0)}88%{transform:translate(0, -3px) rotate(0)}90%{transform:translate(0, -8px) rotate(0)}92%{transform:translate(0, 0px) rotate(0)}94%{transform:translate(0, 3px) rotate(0)}96%{transform:translate(0, 5px) rotate(0)}98%{transform:translate(0, -3px) rotate(0)}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-vertical:hover,.shake-trigger:hover .shake-vertical,.shake-vertical.shake-freeze,.shake-vertical.shake-constant{animation-name:shake-vertical;animation-duration:100ms;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-rotate{2%{transform:translate(0, 0) rotate(-5.5deg)}4%{transform:translate(0, 0) rotate(4.5deg)}6%{transform:translate(0, 0) rotate(6.5deg)}8%{transform:translate(0, 0) rotate(-6.5deg)}10%{transform:translate(0, 0) rotate(7.5deg)}12%{transform:translate(0, 0) rotate(-1.5deg)}14%{transform:translate(0, 0) rotate(-1.5deg)}16%{transform:translate(0, 0) rotate(6.5deg)}18%{transform:translate(0, 0) rotate(.5deg)}20%{transform:translate(0, 0) rotate(1.5deg)}22%{transform:translate(0, 0) rotate(-3.5deg)}24%{transform:translate(0, 0) rotate(1.5deg)}26%{transform:translate(0, 0) rotate(-5.5deg)}28%{transform:translate(0, 0) rotate(2.5deg)}30%{transform:translate(0, 0) rotate(-1.5deg)}32%{transform:translate(0, 0) rotate(-.5deg)}34%{transform:translate(0, 0) rotate(1.5deg)}36%{transform:translate(0, 0) rotate(3.5deg)}38%{transform:translate(0, 0) rotate(-1.5deg)}40%{transform:translate(0, 0) rotate(.5deg)}42%{transform:translate(0, 0) rotate(-1.5deg)}44%{transform:translate(0, 0) rotate(7.5deg)}46%{transform:translate(0, 0) rotate(-5.5deg)}48%{transform:translate(0, 0) rotate(5.5deg)}50%{transform:translate(0, 0) rotate(5.5deg)}52%{transform:translate(0, 0) rotate(4.5deg)}54%{transform:translate(0, 0) rotate(1.5deg)}56%{transform:translate(0, 0) rotate(3.5deg)}58%{transform:translate(0, 0) rotate(6.5deg)}60%{transform:translate(0, 0) rotate(-4.5deg)}62%{transform:translate(0, 0) rotate(-6.5deg)}64%{transform:translate(0, 0) rotate(4.5deg)}66%{transform:translate(0, 0) rotate(-6.5deg)}68%{transform:translate(0, 0) rotate(3.5deg)}70%{transform:translate(0, 0) rotate(-6.5deg)}72%{transform:translate(0, 0) rotate(-1.5deg)}74%{transform:translate(0, 0) rotate(-.5deg)}76%{transform:translate(0, 0) rotate(-3.5deg)}78%{transform:translate(0, 0) rotate(7.5deg)}80%{transform:translate(0, 0) rotate(5.5deg)}82%{transform:translate(0, 0) rotate(4.5deg)}84%{transform:translate(0, 0) rotate(2.5deg)}86%{transform:translate(0, 0) rotate(-2.5deg)}88%{transform:translate(0, 0) rotate(-6.5deg)}90%{transform:translate(0, 0) rotate(-1.5deg)}92%{transform:translate(0, 0) rotate(5.5deg)}94%{transform:translate(0, 0) rotate(1.5deg)}96%{transform:translate(0, 0) rotate(1.5deg)}98%{transform:translate(0, 0) rotate(5.5deg)}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-rotate:hover,.shake-trigger:hover .shake-rotate,.shake-rotate.shake-freeze,.shake-rotate.shake-constant{animation-name:shake-rotate;animation-duration:100ms;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-opacity{10%{transform:translate(3px, 3px) rotate(.5deg);opacity:.05}20%{transform:translate(-1px, 0px) rotate(-.5deg);opacity:.74}30%{transform:translate(-1px, -3px) rotate(-1.5deg);opacity:.53}40%{transform:translate(3px, -2px) rotate(.5deg);opacity:.46}50%{transform:translate(0px, 1px) rotate(.5deg);opacity:.77}60%{transform:translate(0px, -3px) rotate(-1.5deg);opacity:.72}70%{transform:translate(0px, -4px) rotate(.5deg);opacity:.39}80%{transform:translate(-3px, -1px) rotate(.5deg);opacity:.16}90%{transform:translate(-4px, 2px) rotate(.5deg);opacity:.61}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-opacity:hover,.shake-trigger:hover .shake-opacity,.shake-opacity.shake-freeze,.shake-opacity.shake-constant{animation-name:shake-opacity;animation-duration:.5s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-crazy{10%{transform:translate(3px, 5px) rotate(4deg);opacity:.31}20%{transform:translate(16px, -11px) rotate(0deg);opacity:.72}30%{transform:translate(0px, -9px) rotate(10deg);opacity:.14}40%{transform:translate(13px, -9px) rotate(-1deg);opacity:.72}50%{transform:translate(-6px, -3px) rotate(0deg);opacity:.78}60%{transform:translate(14px, 9px) rotate(-9deg);opacity:.74}70%{transform:translate(16px, 3px) rotate(-4deg);opacity:.38}80%{transform:translate(-5px, 10px) rotate(6deg);opacity:.25}90%{transform:translate(-13px, -15px) rotate(8deg);opacity:.04}0%,100%{transform:translate(0, 0) rotate(0)}}.shake-crazy:hover,.shake-trigger:hover .shake-crazy,.shake-crazy.shake-freeze,.shake-crazy.shake-constant{animation-name:shake-crazy;animation-duration:100ms;animation-timing-function:ease-in-out;animation-iteration-count:infinite}@keyframes shake-chunk{2%{transform:translate(0px, -8px) rotate(8deg)}4%{transform:translate(1px, 5px) rotate(-12deg)}6%{transform:translate(10px, 11px) rotate(7deg)}8%{transform:translate(6px, -10px) rotate(0deg)}10%{transform:translate(8px, -10px) rotate(-13deg)}12%{transform:translate(5px, -12px) rotate(10deg)}14%{transform:translate(-4px, 2px) rotate(10deg)}16%{transform:translate(-8px, -13px) rotate(-14deg)}18%{transform:translate(-1px, -11px) rotate(13deg)}20%{transform:translate(-7px, 11px) rotate(6deg)}22%{transform:translate(-1px, -1px) rotate(3deg)}24%{transform:translate(15px, -12px) rotate(3deg)}26%{transform:translate(-9px, -9px) rotate(8deg)}28%{transform:translate(3px, -8px) rotate(6deg)}30%{transform:translate(-4px, 14px) rotate(7deg)}32%{transform:translate(3px, 3px) rotate(10deg)}34%{transform:translate(-9px, -6px) rotate(-5deg)}36%{transform:translate(9px, -8px) rotate(5deg)}38%{transform:translate(-4px, 7px) rotate(10deg)}0%,40%,100%{transform:translate(0, 0) rotate(0)}}.shake-chunk:hover,.shake-trigger:hover .shake-chunk,.shake-chunk.shake-freeze,.shake-chunk.shake-constant{animation-name:shake-chunk;animation-duration:4s;animation-timing-function:ease-in-out;animation-iteration-count:infinite}\n", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(10);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_csshake_min_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__css_csshake_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__css_csshake_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_ui_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_ui_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_ui_js__);




/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(0);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(0, function() {
			var newContent = __webpack_require__(0);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d924ad1187e642e1298ff283f79df9c4.ttf";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7bb1e383591e5e58a0ae3dd1a094c199.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b84342ecd3b108ecd54a36e86b641c33.png";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 10 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(1, function() {
			var newContent = __webpack_require__(1);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var w = document.body.clientWidth;
var h = document.body.scrollHeight;

var mainBody = document.querySelector('.mainBody');
mainBody.style.height = w / 2.4 + 'px';
//mainBody.style.marginTop = h / 2 - parseInt(mainBody.style.height) / 2 + 'px';

//条幅动画
var title = document.querySelector('.title');
title.className = 'movingTitle';

//UFO动画
var ufo = document.querySelector('.UFO');
ufo.className = 'movingUFO';
ufo.style.top = '23%';

function movingUFO() {
    if (ufo.style.top === '23%') {
        ufo.style.top = '27%';
    } else if (ufo.style.top === '27%') {
        ufo.style.top = '23%';
    }

}

setInterval(movingUFO, 1600);



/***/ })
],[4]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Nzc2hha2UubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2luZGV4LmNzcz85ZTM0Iiwid2VicGFjazovLy8uL3NyYy9mb250L+WNjuW6t+a1t+aKpeS9k1cxMigxKS/ljY7lurfmtbfmiqXkvZNXMTIudHRmIiwid2VicGFjazovLy8uL3NyYy9pbWcvYmFja2dyb3VuZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy90aXRsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9oZWFkLnBuZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvY3NzaGFrZS5taW4uY3NzPzU2NWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3VpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBLDRCQUE2QixnQkFBZ0IsaUJBQWlCLDZCQUE2QixHQUFHLGdCQUFnQiwwQkFBMEIsK0NBQW9FLHlCQUF5QiwwQkFBMEIsR0FBRyxZQUFZLHdCQUF3QixHQUFHLGVBQWUsa0JBQWtCLGdFQUEwRSw0QkFBNEIsdUJBQXVCLHlCQUF5QixHQUFHLGlCQUFpQixrQkFBa0Isa0JBQWtCLHFCQUFxQix3QkFBd0IsR0FBRyxZQUFZLDRCQUE0QixpQkFBaUIsbUJBQW1CLHdCQUF3QixHQUFHLGtCQUFrQiw0QkFBNEIsaUJBQWlCLG1CQUFtQixzQkFBc0IsaUNBQWlDLEdBQUcsV0FBVyw0QkFBNEIsaUJBQWlCLG1CQUFtQixxQkFBcUIsR0FBRyxlQUFlLGtCQUFrQixrQkFBa0IsdUJBQXVCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLGlCQUFpQixtQkFBbUIsZ0VBQXFFLDRCQUE0QixHQUFHLGVBQWUsZ0JBQWdCLG1CQUFtQix3QkFBd0IseUJBQXlCLHNCQUFzQixHQUFHLFVBQVUsdUJBQXVCLDBCQUEwQixxQkFBcUIsbUJBQW1CLGVBQWUsa0JBQWtCLEdBQUcsY0FBYyxrQkFBa0IsR0FBRyxhQUFhLGlCQUFpQiw0QkFBNEIsa0JBQWtCLHlCQUF5QixxQkFBcUIsR0FBRyxlQUFlLDRCQUE0QixrQkFBa0IsaUJBQWlCLGtCQUFrQix1QkFBdUIsdUJBQXVCLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLFdBQVcsNEJBQTRCLHFCQUFxQixtQkFBbUIsa0JBQWtCLHlCQUF5Qix3QkFBd0IscUJBQXFCLGdFQUFvRSwyQkFBMkIsdUJBQXVCLEdBQUcsZUFBZSxpQkFBaUIsR0FBRyxrQ0FBa0Msd0JBQXdCLEdBQUcsZUFBZSx3QkFBd0IscUJBQXFCLHlCQUF5QixHQUFHLGdCQUFnQiw0QkFBNEIsbUJBQW1CLGlCQUFpQixrQkFBa0IsMEJBQTBCLHVCQUF1QixHQUFHLG1DQUFtQyx5QkFBeUIsR0FBRyxtQ0FBbUMscUJBQXFCLEdBQUcsVUFBVSxtQkFBbUIsa0JBQWtCLHVCQUF1QiwwQkFBMEIsc0JBQXNCLHNCQUFzQixHQUFHLGNBQWMsa0JBQWtCLEdBQUcsVUFBVSx5QkFBeUIsa0JBQWtCLGdCQUFnQixpQkFBaUIsR0FBRywrQkFBK0Isa0JBQWtCLEdBQUcsZ0JBQWdCLHlCQUF5QixrQkFBa0IsZUFBZSxnQkFBZ0IsNENBQTRDLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHOztBQUUxK0Y7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFHQTtBQUNBLDBaQUEyWixxQkFBcUIsK0JBQStCLHFIQUFxSCw0QkFBNEIsaWxCQUFpbEIsNkJBQTZCLGlCQUFpQixHQUFHLGdEQUFnRCxHQUFHLGdEQUFnRCxHQUFHLG1EQUFtRCxHQUFHLCtDQUErQyxJQUFJLCtDQUErQyxJQUFJLGlEQUFpRCxJQUFJLGtEQUFrRCxJQUFJLCtDQUErQyxJQUFJLGdEQUFnRCxJQUFJLGdEQUFnRCxJQUFJLGdEQUFnRCxJQUFJLGtEQUFrRCxJQUFJLGlEQUFpRCxJQUFJLGdEQUFnRCxJQUFJLCtDQUErQyxJQUFJLGlEQUFpRCxJQUFJLGdEQUFnRCxJQUFJLGlEQUFpRCxJQUFJLGtEQUFrRCxJQUFJLGtEQUFrRCxJQUFJLGlEQUFpRCxJQUFJLDhDQUE4QyxJQUFJLG1EQUFtRCxJQUFJLGdEQUFnRCxJQUFJLGdEQUFnRCxJQUFJLGlEQUFpRCxJQUFJLDhDQUE4QyxJQUFJLGlEQUFpRCxJQUFJLCtDQUErQyxJQUFJLGlEQUFpRCxJQUFJLGlEQUFpRCxJQUFJLGtEQUFrRCxJQUFJLGtEQUFrRCxJQUFJLGdEQUFnRCxJQUFJLGtEQUFrRCxJQUFJLGlEQUFpRCxJQUFJLGlEQUFpRCxJQUFJLGdEQUFnRCxJQUFJLCtDQUErQyxJQUFJLGlEQUFpRCxJQUFJLGdEQUFnRCxJQUFJLGdEQUFnRCxJQUFJLCtDQUErQyxJQUFJLGtEQUFrRCxJQUFJLGlEQUFpRCxJQUFJLCtDQUErQyxJQUFJLGdEQUFnRCxJQUFJLCtDQUErQyxJQUFJLGtEQUFrRCxRQUFRLHFDQUFxQyxtRkFBbUYscUJBQXFCLHlCQUF5QixzQ0FBc0MsbUNBQW1DLHdCQUF3QixHQUFHLDRDQUE0QyxHQUFHLDRDQUE0QyxHQUFHLDRDQUE0QyxHQUFHLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxJQUFJLDRDQUE0QyxRQUFRLHFDQUFxQywrR0FBK0csNEJBQTRCLHlCQUF5QixzQ0FBc0MsbUNBQW1DLHNCQUFzQixHQUFHLCtDQUErQyxHQUFHLDZDQUE2QyxHQUFHLDhDQUE4QyxHQUFHLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLDZDQUE2QyxJQUFJLDZDQUE2QyxJQUFJLGdEQUFnRCxJQUFJLDZDQUE2QyxJQUFJLCtDQUErQyxJQUFJLDZDQUE2QyxJQUFJLDZDQUE2QyxJQUFJLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLGdEQUFnRCxJQUFJLGdEQUFnRCxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLGdEQUFnRCxJQUFJLCtDQUErQyxJQUFJLDZDQUE2QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLDZDQUE2QyxJQUFJLDZDQUE2QyxJQUFJLCtDQUErQyxJQUFJLDZDQUE2QyxJQUFJLCtDQUErQyxJQUFJLDZDQUE2QyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLCtDQUErQyxJQUFJLCtDQUErQyxRQUFRLHFDQUFxQyx1R0FBdUcsMEJBQTBCLHNCQUFzQixzQ0FBc0MsbUNBQW1DLHNCQUFzQixHQUFHLDZDQUE2QyxHQUFHLCtDQUErQyxHQUFHLDhDQUE4QyxHQUFHLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLGdEQUFnRCxJQUFJLCtDQUErQyxJQUFJLGdEQUFnRCxJQUFJLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLDZDQUE2QyxJQUFJLDRDQUE0QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLDRDQUE0QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLCtDQUErQyxJQUFJLDZDQUE2QyxJQUFJLGdEQUFnRCxJQUFJLGdEQUFnRCxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLDZDQUE2QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDZDQUE2QyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxJQUFJLDhDQUE4QyxJQUFJLDhDQUE4QyxJQUFJLDRDQUE0QyxJQUFJLDhDQUE4QyxJQUFJLCtDQUErQyxRQUFRLHFDQUFxQyx1R0FBdUcsMEJBQTBCLHlCQUF5QixzQ0FBc0MsbUNBQW1DLDRCQUE0QixHQUFHLHNDQUFzQyxHQUFHLHVDQUF1QyxHQUFHLHNDQUFzQyxHQUFHLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxRQUFRLHFDQUFxQywrSEFBK0gsZ0NBQWdDLHlCQUF5QixzQ0FBc0MsbUNBQW1DLDBCQUEwQixHQUFHLHNDQUFzQyxHQUFHLHNDQUFzQyxHQUFHLHVDQUF1QyxHQUFHLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHVDQUF1QyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHNDQUFzQyxJQUFJLHVDQUF1QyxRQUFRLHFDQUFxQyx1SEFBdUgsOEJBQThCLHlCQUF5QixzQ0FBc0MsbUNBQW1DLHdCQUF3QixHQUFHLDBDQUEwQyxHQUFHLHlDQUF5QyxHQUFHLHlDQUF5QyxHQUFHLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLHdDQUF3QyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLHdDQUF3QyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLDBDQUEwQyxJQUFJLDBDQUEwQyxJQUFJLDBDQUEwQyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxJQUFJLHlDQUF5QyxRQUFRLHFDQUFxQywrR0FBK0csNEJBQTRCLHlCQUF5QixzQ0FBc0MsbUNBQW1DLHlCQUF5QixJQUFJLDRDQUE0QyxZQUFZLElBQUksOENBQThDLFlBQVksSUFBSSxnREFBZ0QsWUFB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QUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaFdBO0FBQ0E7Ozs7Ozs7QUNEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQSxnRjs7Ozs7O0FDQUEsZ0Y7Ozs7OztBQ0FBLGdGOzs7Ozs7QUNBQSxpQ0FBaUMsbzVMOzs7Ozs7O0FDQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7OztBQ3hGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoianMvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSEtIQic7XFxuICAgIHNyYzogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnQv5Y2O5bq35rW35oql5L2TVzEyKDEpL+WNjuW6t+a1t+aKpeS9k1cxMi50dGZcIikgKyBcIik7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIG1pbi13aWR0aDogMTQ0MHB4O1xcbn1cXG5cXG4ubWFpbkJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSArIFwiKSBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9wV3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gICAgbWFyZ2luLXRvcDogMyU7XFxuICAgIG1hcmdpbi1sZWZ0OiAyLjMlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA3NiU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcblxcbi5tb3ZpbmdUaXRsZSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDc2JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW4tbGVmdDogOSU7XFxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDJzO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDAwMDtcXG59XFxuXFxuLmxvZ28gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBtYXJnaW4tbGVmdDogMTIlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTMlO1xcbn1cXG5cXG4ud29yZHMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiA4MiU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgcmVxdWlyZShcIi4uL2ltZy90aXRsZS5wbmdcIikgKyBcIikgbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxufVxcblxcbmltZy5tdXNpYyB7XFxuICAgIHdpZHRoOiA4JTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBtYXJnaW4tdG9wOiAtNy40JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1LjUlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5udW0ge1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdIS0hCJztcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdG9wOiAyNSU7XFxuICAgIGxlZnQ6IDcyLjUlO1xcbn1cXG5cXG4ubnVtIHNwYW57XFxuXFx0Y29sb3I6IHllbGxvdztcXG59XFxuXFxuLlFSY29kZSB7XFxuICAgIHdpZHRoOiAyMyU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMi4yJTtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxufVxcblxcbi5sZWZ0SGVhZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIHdpZHRoOiAyNyU7XFxuICAgIGhlaWdodDogMzUlO1xcbiAgICBtYXJnaW4tbGVmdDogMTQlO1xcbiAgICBtYXJnaW4tdG9wOiA1LjMlO1xcbn1cXG5cXG4uUVJjb2RlIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgLypmbG9hdDogcmlnaHQ7Ki9cXG4gICAgd2lkdGg6IDI1JTtcXG4gICAgaGVpZ2h0OiA0NSU7XFxuICAgIGJhY2tncm91bmQ6IHllbGxvdztcXG4gICAgbWFyZ2luLWxlZnQ6IDUuNSU7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyByZXF1aXJlKFwiLi4vaW1nL2hlYWQucG5nXCIpICsgXCIpIG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA4NCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZWFkIGltZyB7XFxuICAgIHdpZHRoOiA3MyU7XFxufVxcblxcbi5sZWZ0SGVhZCAuaGVhZDpudGgtY2hpbGQoNCkge1xcbiAgICBtYXJnaW4tbGVmdDogOS4zJTtcXG59XFxuXFxuLmhlYWQgaW1nIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDQuOCU7XFxuICAgIG1hcmdpbi10b3A6IDYlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5yaWdodEhlYWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZsb2F0OiByaWdodDtcXG4gICAgd2lkdGg6IDI3JTtcXG4gICAgaGVpZ2h0OiAzNSU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAuNCU7XFxuICAgIG1hcmdpbi10b3A6IDQuNyU7XFxufVxcblxcbi5yaWdodEhlYWQgLmhlYWQ6bnRoLWNoaWxkKDQpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC00LjMlO1xcbn1cXG5cXG4ucmlnaHRIZWFkIC5oZWFkOm50aC1jaGlsZCgxKSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uYnRuIHtcXG4gICAgd2lkdGg6IDIwLjUlO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMS41JTtcXG4gICAgbWFyZ2luLXRvcDogMjElO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5VRk8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAwLjUlO1xcbiAgICB0b3A6IC0yMyU7XFxuICAgIGxlZnQ6IC0yNiU7XFxufVxcblxcbi5VRk8gaW1nLFxcbi5tb3ZpbmdVRk8gaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb3ZpbmdVRk8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiA3LjUlO1xcbiAgICB0b3A6IDIzJTtcXG4gICAgbGVmdDogMjYlO1xcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzcywgdG9wIDJzLCBsZWZ0IDNzO1xcbn1cXG5cXG4uVUZPIGltZyxcXG4uVUZPIGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4vKlRoZSBlbmQqL1wiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9zcmMvY3NzL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXFxcXCAgXFxuICBDU1NoYWtlIDo6IFBhY2thZ2VcXG4gIHYxLjUuMFxcbiAgQ1NTIGNsYXNzZXMgdG8gbW92ZSB5b3VyIERPTVxcbiAgKGMpIDIwMTUgQGVscnVtb3JkZWxhbHV6XFxuICBodHRwOi8vZWxydW1vcmRlbGFsdXouZ2l0aHViLmlvL2Nzc2hha2UvXFxuICBMaWNlbnNlZCB1bmRlciBNSVRcXG5cXFxcKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovLnNoYWtlLC5zaGFrZS1saXR0bGUsLnNoYWtlLXNsb3csLnNoYWtlLWhhcmQsLnNoYWtlLWhvcml6b250YWwsLnNoYWtlLXZlcnRpY2FsLC5zaGFrZS1yb3RhdGUsLnNoYWtlLW9wYWNpdHksLnNoYWtlLWNyYXp5LC5zaGFrZS1jaHVua3tkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXJ9LnNoYWtlLWZyZWV6ZSwuc2hha2UtY29uc3RhbnQuc2hha2UtY29uc3RhbnQtLWhvdmVyOmhvdmVyLC5zaGFrZS10cmlnZ2VyOmhvdmVyIC5zaGFrZS1jb25zdGFudC5zaGFrZS1jb25zdGFudC0taG92ZXJ7YW5pbWF0aW9uLXBsYXktc3RhdGU6cGF1c2VkfS5zaGFrZS1mcmVlemU6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLWZyZWV6ZSwuc2hha2U6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLC5zaGFrZS1saXR0bGU6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLWxpdHRsZSwuc2hha2Utc2xvdzpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2Utc2xvdywuc2hha2UtaGFyZDpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UtaGFyZCwuc2hha2UtaG9yaXpvbnRhbDpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UtaG9yaXpvbnRhbCwuc2hha2UtdmVydGljYWw6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLXZlcnRpY2FsLC5zaGFrZS1yb3RhdGU6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLXJvdGF0ZSwuc2hha2Utb3BhY2l0eTpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2Utb3BhY2l0eSwuc2hha2UtY3Jhenk6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLWNyYXp5LC5zaGFrZS1jaHVuazpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UtY2h1bmt7YW5pbWF0aW9uLXBsYXktc3RhdGU6cnVubmluZ31Aa2V5ZnJhbWVzIHNoYWtlezIle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgMS41cHgpIHJvdGF0ZSgxLjVkZWcpfTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgMS41cHgpIHJvdGF0ZSgxLjVkZWcpfTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEuNXB4LCAtMS41cHgpIHJvdGF0ZSgtLjVkZWcpfTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgLS41cHgpIHJvdGF0ZSguNWRlZyl9MTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgMi41cHgpIHJvdGF0ZSguNWRlZyl9MTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMi41cHgsIDEuNXB4KSByb3RhdGUoLS41ZGVnKX0xNCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMS41cHgsIDIuNXB4KSByb3RhdGUoLS41ZGVnKX0xNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtLjVweCwgLjVweCkgcm90YXRlKC41ZGVnKX0xOCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSguNXB4LCAyLjVweCkgcm90YXRlKDEuNWRlZyl9MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLS41cHgsIC0uNXB4KSByb3RhdGUoLjVkZWcpfTIyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDIuNXB4LCAuNXB4KSByb3RhdGUoLS41ZGVnKX0yNCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMS41cHgsIC0xLjVweCkgcm90YXRlKC41ZGVnKX0yNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyLjVweCwgLS41cHgpIHJvdGF0ZSgtLjVkZWcpfTI4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDEuNXB4LCAtLjVweCkgcm90YXRlKC41ZGVnKX0zMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSguNXB4LCAuNXB4KSByb3RhdGUoLS41ZGVnKX0zMiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMS41cHgsIC41cHgpIHJvdGF0ZSgtLjVkZWcpfTM0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC41cHgsIDIuNXB4KSByb3RhdGUoLS41ZGVnKX0zNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtLjVweCwgLS41cHgpIHJvdGF0ZSgxLjVkZWcpfTM4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xLjVweCwgLTEuNXB4KSByb3RhdGUoLjVkZWcpfTQwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xLjVweCwgMS41cHgpIHJvdGF0ZSgxLjVkZWcpfTQyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC41cHgsIC0xLjVweCkgcm90YXRlKDEuNWRlZyl9NDQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgLjVweCkgcm90YXRlKC41ZGVnKX00NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMS41cHgsIC0xLjVweCkgcm90YXRlKDEuNWRlZyl9NDgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgLTEuNXB4KSByb3RhdGUoLjVkZWcpfTUwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDIuNXB4LCAuNXB4KSByb3RhdGUoLS41ZGVnKX01MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtLjVweCwgMi41cHgpIHJvdGF0ZSgtLjVkZWcpfTU0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC41cHgsIC41cHgpIHJvdGF0ZSguNWRlZyl9NTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEuNXB4LCAyLjVweCkgcm90YXRlKC41ZGVnKX01OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgyLjVweCwgLjVweCkgcm90YXRlKC41ZGVnKX02MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMS41cHgsIDIuNXB4KSByb3RhdGUoLjVkZWcpfTYyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDEuNXB4LCAtLjVweCkgcm90YXRlKC0uNWRlZyl9NjQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMS41cHgsIC0xLjVweCkgcm90YXRlKDEuNWRlZyl9NjYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMS41cHgsIC0xLjVweCkgcm90YXRlKC0uNWRlZyl9Njgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgMi41cHgpIHJvdGF0ZSgtLjVkZWcpfTcwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDEuNXB4LCAtMS41cHgpIHJvdGF0ZSgxLjVkZWcpfTcyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDEuNXB4LCAxLjVweCkgcm90YXRlKC0uNWRlZyl9NzQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLS41cHgsIDEuNXB4KSByb3RhdGUoMS41ZGVnKX03NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxLjVweCwgMi41cHgpIHJvdGF0ZSguNWRlZyl9Nzgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLS41cHgsIC41cHgpIHJvdGF0ZSguNWRlZyl9ODAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTEuNXB4LCAyLjVweCkgcm90YXRlKC41ZGVnKX04MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSguNXB4LCAyLjVweCkgcm90YXRlKC0uNWRlZyl9ODQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMi41cHgsIC0uNXB4KSByb3RhdGUoLjVkZWcpfTg2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDEuNXB4LCAuNXB4KSByb3RhdGUoLjVkZWcpfTg4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0uNXB4LCAtMS41cHgpIHJvdGF0ZSgtLjVkZWcpfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDEuNXB4LCAtLjVweCkgcm90YXRlKDEuNWRlZyl9OTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoLjVweCwgMi41cHgpIHJvdGF0ZSguNWRlZyl9OTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMi41cHgsIC41cHgpIHJvdGF0ZSgtLjVkZWcpfTk2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC41cHgsIDIuNXB4KSByb3RhdGUoLjVkZWcpfTk4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDIuNXB4LCAtMS41cHgpIHJvdGF0ZSgxLjVkZWcpfTAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMCl9fS5zaGFrZTpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UsLnNoYWtlLnNoYWtlLWZyZWV6ZSwuc2hha2Uuc2hha2UtY29uc3RhbnR7YW5pbWF0aW9uLW5hbWU6c2hha2U7YW5pbWF0aW9uLWR1cmF0aW9uOjEwMG1zO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX1Aa2V5ZnJhbWVzIHNoYWtlLWxpdHRsZXsyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMXB4LCAxcHgpIHJvdGF0ZSguNWRlZyl9NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKC41ZGVnKX04JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTEwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTEyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTE0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTE2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTE4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTIyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTI0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTI2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTI4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTMyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTM0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTM2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTM4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTQwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTQyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTQ0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTQ2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTQ4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTUwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTUyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTU0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTU2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTU4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTYwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTYyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTY0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTY4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTcwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTcyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTc0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTc2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTc4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTgwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTgyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTg0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTg2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTg4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoLjVkZWcpfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTkyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMXB4KSByb3RhdGUoLjVkZWcpfTk0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMXB4KSByb3RhdGUoLjVkZWcpfTk2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTk4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDFweCwgMHB4KSByb3RhdGUoLjVkZWcpfTAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMCl9fS5zaGFrZS1saXR0bGU6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLWxpdHRsZSwuc2hha2UtbGl0dGxlLnNoYWtlLWZyZWV6ZSwuc2hha2UtbGl0dGxlLnNoYWtlLWNvbnN0YW50e2FuaW1hdGlvbi1uYW1lOnNoYWtlLWxpdHRsZTthbmltYXRpb24tZHVyYXRpb246MTAwbXM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfUBrZXlmcmFtZXMgc2hha2Utc2xvd3syJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDRweCwgLTlweCkgcm90YXRlKC0yLjVkZWcpfTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoNnB4LCA4cHgpIHJvdGF0ZSgyLjVkZWcpfTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTVweCwgNnB4KSByb3RhdGUoLS41ZGVnKX04JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xcHgsIDFweCkgcm90YXRlKC0uNWRlZyl9MTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoNXB4LCA4cHgpIHJvdGF0ZSgyLjVkZWcpfTEyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsIDBweCkgcm90YXRlKDIuNWRlZyl9MTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoNnB4LCAtNHB4KSByb3RhdGUoMS41ZGVnKX0xNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMnB4LCA2cHgpIHJvdGF0ZSgzLjVkZWcpfTE4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMTBweCkgcm90YXRlKC41ZGVnKX0yMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg5cHgsIDFweCkgcm90YXRlKDEuNWRlZyl9MjIle3RyYW5zZm9ybTp0cmFuc2xhdGUoNXB4LCA0cHgpIHJvdGF0ZSgyLjVkZWcpfTI0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xcHgsIC05cHgpIHJvdGF0ZSgtMi41ZGVnKX0yNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMXB4LCAzcHgpIHJvdGF0ZSguNWRlZyl9Mjgle3RyYW5zZm9ybTp0cmFuc2xhdGUoOHB4LCAtM3B4KSByb3RhdGUoLTIuNWRlZyl9MzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoNHB4LCAxMHB4KSByb3RhdGUoLjVkZWcpfTMyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDdweCwgMXB4KSByb3RhdGUoMi41ZGVnKX0zNCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg3cHgsIC00cHgpIHJvdGF0ZSgtMS41ZGVnKX0zNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNHB4LCA5cHgpIHJvdGF0ZSgtLjVkZWcpfTM4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDhweCwgMTBweCkgcm90YXRlKDEuNWRlZyl9NDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoN3B4LCA5cHgpIHJvdGF0ZSgzLjVkZWcpfTQyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsIC01cHgpIHJvdGF0ZSgxLjVkZWcpfTQ0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDVweCwgM3B4KSByb3RhdGUoLTEuNWRlZyl9NDYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTdweCwgMHB4KSByb3RhdGUoLS41ZGVnKX00OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNnB4LCAtOXB4KSByb3RhdGUoLTEuNWRlZyl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTlweCwgLTRweCkgcm90YXRlKC0yLjVkZWcpfTUyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDhweCwgLTFweCkgcm90YXRlKDMuNWRlZyl9NTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoMy41ZGVnKX01NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxcHgsIC01cHgpIHJvdGF0ZSgtMi41ZGVnKX01OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtM3B4LCAtNXB4KSByb3RhdGUoLTEuNWRlZyl9NjAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTNweCwgM3B4KSByb3RhdGUoLTEuNWRlZyl9NjIle3RyYW5zZm9ybTp0cmFuc2xhdGUoOXB4LCAzcHgpIHJvdGF0ZSgxLjVkZWcpfTY0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0zcHgsIDRweCkgcm90YXRlKDMuNWRlZyl9NjYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAxMHB4KSByb3RhdGUoMi41ZGVnKX02OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNXB4LCA2cHgpIHJvdGF0ZSgtLjVkZWcpfTcwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsIC00cHgpIHJvdGF0ZSgtLjVkZWcpfTcyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC05cHgsIDJweCkgcm90YXRlKDEuNWRlZyl9NzQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAzcHgpIHJvdGF0ZSgxLjVkZWcpfTc2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDRweCwgNnB4KSByb3RhdGUoLS41ZGVnKX03OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMnB4LCAxcHgpIHJvdGF0ZSguNWRlZyl9ODAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTIuNWRlZyl9ODIle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTlweCwgMnB4KSByb3RhdGUoLjVkZWcpfTg0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsIC03cHgpIHJvdGF0ZSgzLjVkZWcpfTg2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDVweCwgLTVweCkgcm90YXRlKC41ZGVnKX04OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNHB4LCAxcHgpIHJvdGF0ZSgzLjVkZWcpfTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoMy41ZGVnKX05MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg1cHgsIC04cHgpIHJvdGF0ZSgzLjVkZWcpfTk0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0zcHgsIC0ycHgpIHJvdGF0ZSgtLjVkZWcpfTk2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDhweCwgLTVweCkgcm90YXRlKC0xLjVkZWcpfTk4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xcHgsIDlweCkgcm90YXRlKC0xLjVkZWcpfTAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMCl9fS5zaGFrZS1zbG93OmhvdmVyLC5zaGFrZS10cmlnZ2VyOmhvdmVyIC5zaGFrZS1zbG93LC5zaGFrZS1zbG93LnNoYWtlLWZyZWV6ZSwuc2hha2Utc2xvdy5zaGFrZS1jb25zdGFudHthbmltYXRpb24tbmFtZTpzaGFrZS1zbG93O2FuaW1hdGlvbi1kdXJhdGlvbjo1czthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9QGtleWZyYW1lcyBzaGFrZS1oYXJkezIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMnB4LCAycHgpIHJvdGF0ZSgxLjVkZWcpfTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTRweCwgOXB4KSByb3RhdGUoLTEuNWRlZyl9NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNXB4LCA2cHgpIHJvdGF0ZSgzLjVkZWcpfTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTNweCwgLTNweCkgcm90YXRlKDMuNWRlZyl9MTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTVweCwgLTZweCkgcm90YXRlKC41ZGVnKX0xMiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtM3B4LCAtOXB4KSByb3RhdGUoLjVkZWcpfTE0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsIC04cHgpIHJvdGF0ZSgtMS41ZGVnKX0xNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNHB4LCA2cHgpIHJvdGF0ZSgtMi41ZGVnKX0xOCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNXB4LCAxMHB4KSByb3RhdGUoLTIuNWRlZyl9MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUoNHB4LCAtOHB4KSByb3RhdGUoLTEuNWRlZyl9MjIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoMi41ZGVnKX0yNCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg4cHgsIC0zcHgpIHJvdGF0ZSguNWRlZyl9MjYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLThweCwgOHB4KSByb3RhdGUoLS41ZGVnKX0yOCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgzcHgsIC0ycHgpIHJvdGF0ZSgtMS41ZGVnKX0zMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxcHgsIC05cHgpIHJvdGF0ZSguNWRlZyl9MzIle3RyYW5zZm9ybTp0cmFuc2xhdGUoN3B4LCAxcHgpIHJvdGF0ZSguNWRlZyl9MzQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgLTVweCkgcm90YXRlKC41ZGVnKX0zNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgzcHgsIDEwcHgpIHJvdGF0ZSgyLjVkZWcpfTM4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsIC03cHgpIHJvdGF0ZSgyLjVkZWcpfTQwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDVweCwgN3B4KSByb3RhdGUoLTEuNWRlZyl9NDIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAxMHB4KSByb3RhdGUoLTIuNWRlZyl9NDQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTJweCwgMXB4KSByb3RhdGUoLTEuNWRlZyl9NDYle3RyYW5zZm9ybTp0cmFuc2xhdGUoNXB4LCAycHgpIHJvdGF0ZSgtMS41ZGVnKX00OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNnB4LCAtOHB4KSByb3RhdGUoLjVkZWcpfTUwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC05cHgsIDFweCkgcm90YXRlKC41ZGVnKX01MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxcHgsIDVweCkgcm90YXRlKC41ZGVnKX01NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMXB4LCAwcHgpIHJvdGF0ZSgtLjVkZWcpfTU2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsIDdweCkgcm90YXRlKDEuNWRlZyl9NTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMTBweCwgNnB4KSByb3RhdGUoLjVkZWcpfTYwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC00cHgsIDNweCkgcm90YXRlKC0yLjVkZWcpfTYyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsIDlweCkgcm90YXRlKC41ZGVnKX02NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoLTIuNWRlZyl9NjYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTZweCwgLThweCkgcm90YXRlKC0xLjVkZWcpfTY4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC02cHgsIDVweCkgcm90YXRlKC0uNWRlZyl9NzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMXB4LCAtOHB4KSByb3RhdGUoLTEuNWRlZyl9NzIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMXB4LCA5cHgpIHJvdGF0ZSgtLjVkZWcpfTc0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDlweCwgLThweCkgcm90YXRlKC0uNWRlZyl9NzYle3RyYW5zZm9ybTp0cmFuc2xhdGUoNXB4LCA2cHgpIHJvdGF0ZSgtMS41ZGVnKX03OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMHB4LCA1cHgpIHJvdGF0ZSgtLjVkZWcpfTgwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDdweCwgOXB4KSByb3RhdGUoLTIuNWRlZyl9ODIle3RyYW5zZm9ybTp0cmFuc2xhdGUoN3B4LCAtOXB4KSByb3RhdGUoMy41ZGVnKX04NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxcHgsIDhweCkgcm90YXRlKC0uNWRlZyl9ODYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgOXB4KSByb3RhdGUoMS41ZGVnKX04OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNXB4LCAtM3B4KSByb3RhdGUoMy41ZGVnKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMnB4LCA1cHgpIHJvdGF0ZSgzLjVkZWcpfTkyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDBweCwgOXB4KSByb3RhdGUoLTEuNWRlZyl9OTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoNXB4LCA0cHgpIHJvdGF0ZSguNWRlZyl9OTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTRweCwgMHB4KSByb3RhdGUoMy41ZGVnKX05OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNnB4LCAxcHgpIHJvdGF0ZSgtMi41ZGVnKX0wJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDApfX0uc2hha2UtaGFyZDpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UtaGFyZCwuc2hha2UtaGFyZC5zaGFrZS1mcmVlemUsLnNoYWtlLWhhcmQuc2hha2UtY29uc3RhbnR7YW5pbWF0aW9uLW5hbWU6c2hha2UtaGFyZDthbmltYXRpb24tZHVyYXRpb246MTAwbXM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfUBrZXlmcmFtZXMgc2hha2UtaG9yaXpvbnRhbHsyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDdweCwgMCkgcm90YXRlKDApfTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTNweCwgMCkgcm90YXRlKDApfTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoOXB4LCAwKSByb3RhdGUoMCl9OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgycHgsIDApIHJvdGF0ZSgwKX0xMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMHB4LCAwKSByb3RhdGUoMCl9MTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTVweCwgMCkgcm90YXRlKDApfTE0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0ycHgsIDApIHJvdGF0ZSgwKX0xNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgycHgsIDApIHJvdGF0ZSgwKX0xOCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtOXB4LCAwKSByb3RhdGUoMCl9MjAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAwKSByb3RhdGUoMCl9MjIle3RyYW5zZm9ybTp0cmFuc2xhdGUoM3B4LCAwKSByb3RhdGUoMCl9MjQle3RyYW5zZm9ybTp0cmFuc2xhdGUoOXB4LCAwKSByb3RhdGUoMCl9MjYle3RyYW5zZm9ybTp0cmFuc2xhdGUoNnB4LCAwKSByb3RhdGUoMCl9Mjgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgMCkgcm90YXRlKDApfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsIDApIHJvdGF0ZSgwKX0zMiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtOHB4LCAwKSByb3RhdGUoMCl9MzQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTNweCwgMCkgcm90YXRlKDApfTM2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0zcHgsIDApIHJvdGF0ZSgwKX0zOCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgzcHgsIDApIHJvdGF0ZSgwKX00MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgycHgsIDApIHJvdGF0ZSgwKX00MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtN3B4LCAwKSByb3RhdGUoMCl9NDQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgMCkgcm90YXRlKDApfTQ2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0ycHgsIDApIHJvdGF0ZSgwKX00OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgzcHgsIDApIHJvdGF0ZSgwKX01MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMHB4LCAwKSByb3RhdGUoMCl9NTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAwKSByb3RhdGUoMCl9NTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoNnB4LCAwKSByb3RhdGUoMCl9NTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoNnB4LCAwKSByb3RhdGUoMCl9NTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTJweCwgMCkgcm90YXRlKDApfTYwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01cHgsIDApIHJvdGF0ZSgwKX02MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMnB4LCAwKSByb3RhdGUoMCl9NjQle3RyYW5zZm9ybTp0cmFuc2xhdGUoLThweCwgMCkgcm90YXRlKDApfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0ycHgsIDApIHJvdGF0ZSgwKX02OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtOXB4LCAwKSByb3RhdGUoMCl9NzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoM3B4LCAwKSByb3RhdGUoMCl9NzIle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTlweCwgMCkgcm90YXRlKDApfTc0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDdweCwgMCkgcm90YXRlKDApfTc2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsIDApIHJvdGF0ZSgwKX03OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg0cHgsIDApIHJvdGF0ZSgwKX04MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNHB4LCAwKSByb3RhdGUoMCl9ODIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMXB4LCAwKSByb3RhdGUoMCl9ODQle3RyYW5zZm9ybTp0cmFuc2xhdGUoNXB4LCAwKSByb3RhdGUoMCl9ODYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTVweCwgMCkgcm90YXRlKDApfTg4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01cHgsIDApIHJvdGF0ZSgwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg5cHgsIDApIHJvdGF0ZSgwKX05MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg3cHgsIDApIHJvdGF0ZSgwKX05NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMXB4LCAwKSByb3RhdGUoMCl9OTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgMCkgcm90YXRlKDApfTk4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC02cHgsIDApIHJvdGF0ZSgwKX0wJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDApfX0uc2hha2UtaG9yaXpvbnRhbDpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UtaG9yaXpvbnRhbCwuc2hha2UtaG9yaXpvbnRhbC5zaGFrZS1mcmVlemUsLnNoYWtlLWhvcml6b250YWwuc2hha2UtY29uc3RhbnR7YW5pbWF0aW9uLW5hbWU6c2hha2UtaG9yaXpvbnRhbDthbmltYXRpb24tZHVyYXRpb246MTAwbXM7YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjplYXNlLWluLW91dDthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfUBrZXlmcmFtZXMgc2hha2UtdmVydGljYWx7MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAxcHgpIHJvdGF0ZSgwKX00JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDVweCkgcm90YXRlKDApfTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLThweCkgcm90YXRlKDApfTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTVweCkgcm90YXRlKDApfTEwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC05cHgpIHJvdGF0ZSgwKX0xMiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMXB4KSByb3RhdGUoMCl9MTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgNXB4KSByb3RhdGUoMCl9MTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgNnB4KSByb3RhdGUoMCl9MTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTFweCkgcm90YXRlKDApfTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC05cHgpIHJvdGF0ZSgwKX0yMiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtNnB4KSByb3RhdGUoMCl9MjQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgNnB4KSByb3RhdGUoMCl9MjYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTlweCkgcm90YXRlKDApfTI4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDhweCkgcm90YXRlKDApfTMwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDlweCkgcm90YXRlKDApfTMyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0xcHgpIHJvdGF0ZSgwKX0zNCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtOHB4KSByb3RhdGUoMCl9MzYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgM3B4KSByb3RhdGUoMCl9Mzgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMnB4KSByb3RhdGUoMCl9NDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgNnB4KSByb3RhdGUoMCl9NDIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTJweCkgcm90YXRlKDApfTQ0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDRweCkgcm90YXRlKDApfTQ2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC05cHgpIHJvdGF0ZSgwKX00OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCA5cHgpIHJvdGF0ZSgwKX01MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAzcHgpIHJvdGF0ZSgwKX01MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwcHgpIHJvdGF0ZSgwKX01NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtNnB4KSByb3RhdGUoMCl9NTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgOHB4KSByb3RhdGUoMCl9NTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTdweCkgcm90YXRlKDApfTYwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC05cHgpIHJvdGF0ZSgwKX02MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtNXB4KSByb3RhdGUoMCl9NjQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTlweCkgcm90YXRlKDApfTY2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDFweCkgcm90YXRlKDApfTY4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDNweCkgcm90YXRlKDApfTcwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDNweCkgcm90YXRlKDApfTcyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDNweCkgcm90YXRlKDApfTc0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0zcHgpIHJvdGF0ZSgwKX03NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAycHgpIHJvdGF0ZSgwKX03OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCA3cHgpIHJvdGF0ZSgwKX04MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCA4cHgpIHJvdGF0ZSgwKX04MiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtMnB4KSByb3RhdGUoMCl9ODQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgN3B4KSByb3RhdGUoMCl9ODYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTNweCkgcm90YXRlKDApfTg4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIC0zcHgpIHJvdGF0ZSgwKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAtOHB4KSByb3RhdGUoMCl9OTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMHB4KSByb3RhdGUoMCl9OTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgM3B4KSByb3RhdGUoMCl9OTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgNXB4KSByb3RhdGUoMCl9OTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgLTNweCkgcm90YXRlKDApfTAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMCl9fS5zaGFrZS12ZXJ0aWNhbDpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UtdmVydGljYWwsLnNoYWtlLXZlcnRpY2FsLnNoYWtlLWZyZWV6ZSwuc2hha2UtdmVydGljYWwuc2hha2UtY29uc3RhbnR7YW5pbWF0aW9uLW5hbWU6c2hha2UtdmVydGljYWw7YW5pbWF0aW9uLWR1cmF0aW9uOjEwMG1zO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX1Aa2V5ZnJhbWVzIHNoYWtlLXJvdGF0ZXsyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtNS41ZGVnKX00JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSg0LjVkZWcpfTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDYuNWRlZyl9OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLTYuNWRlZyl9MTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDcuNWRlZyl9MTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKC0xLjVkZWcpfTE0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtMS41ZGVnKX0xNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoNi41ZGVnKX0xOCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLjVkZWcpfTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgxLjVkZWcpfTIyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtMy41ZGVnKX0yNCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMS41ZGVnKX0yNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLTUuNWRlZyl9Mjgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDIuNWRlZyl9MzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKC0xLjVkZWcpfTMyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtLjVkZWcpfTM0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgxLjVkZWcpfTM2JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgzLjVkZWcpfTM4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtMS41ZGVnKX00MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLjVkZWcpfTQyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtMS41ZGVnKX00NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoNy41ZGVnKX00NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLTUuNWRlZyl9NDgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDUuNWRlZyl9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDUuNWRlZyl9NTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDQuNWRlZyl9NTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDEuNWRlZyl9NTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDMuNWRlZyl9NTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDYuNWRlZyl9NjAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKC00LjVkZWcpfTYyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtNi41ZGVnKX02NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoNC41ZGVnKX02NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLTYuNWRlZyl9Njgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDMuNWRlZyl9NzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKC02LjVkZWcpfTcyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtMS41ZGVnKX03NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLS41ZGVnKX03NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLTMuNWRlZyl9Nzgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDcuNWRlZyl9ODAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDUuNWRlZyl9ODIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDQuNWRlZyl9ODQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDIuNWRlZyl9ODYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKC0yLjVkZWcpfTg4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgtNi41ZGVnKX05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoLTEuNWRlZyl9OTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDUuNWRlZyl9OTQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDEuNWRlZyl9OTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDEuNWRlZyl9OTgle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDUuNWRlZyl9MCUsMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwKX19LnNoYWtlLXJvdGF0ZTpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2Utcm90YXRlLC5zaGFrZS1yb3RhdGUuc2hha2UtZnJlZXplLC5zaGFrZS1yb3RhdGUuc2hha2UtY29uc3RhbnR7YW5pbWF0aW9uLW5hbWU6c2hha2Utcm90YXRlO2FuaW1hdGlvbi1kdXJhdGlvbjoxMDBtczthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9QGtleWZyYW1lcyBzaGFrZS1vcGFjaXR5ezEwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDNweCwgM3B4KSByb3RhdGUoLjVkZWcpO29wYWNpdHk6LjA1fTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xcHgsIDBweCkgcm90YXRlKC0uNWRlZyk7b3BhY2l0eTouNzR9MzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTFweCwgLTNweCkgcm90YXRlKC0xLjVkZWcpO29wYWNpdHk6LjUzfTQwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDNweCwgLTJweCkgcm90YXRlKC41ZGVnKTtvcGFjaXR5Oi40Nn01MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwcHgsIDFweCkgcm90YXRlKC41ZGVnKTtvcGFjaXR5Oi43N302MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwcHgsIC0zcHgpIHJvdGF0ZSgtMS41ZGVnKTtvcGFjaXR5Oi43Mn03MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwcHgsIC00cHgpIHJvdGF0ZSguNWRlZyk7b3BhY2l0eTouMzl9ODAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTNweCwgLTFweCkgcm90YXRlKC41ZGVnKTtvcGFjaXR5Oi4xNn05MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNHB4LCAycHgpIHJvdGF0ZSguNWRlZyk7b3BhY2l0eTouNjF9MCUsMTAwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsIDApIHJvdGF0ZSgwKX19LnNoYWtlLW9wYWNpdHk6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLW9wYWNpdHksLnNoYWtlLW9wYWNpdHkuc2hha2UtZnJlZXplLC5zaGFrZS1vcGFjaXR5LnNoYWtlLWNvbnN0YW50e2FuaW1hdGlvbi1uYW1lOnNoYWtlLW9wYWNpdHk7YW5pbWF0aW9uLWR1cmF0aW9uOi41czthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9QGtleWZyYW1lcyBzaGFrZS1jcmF6eXsxMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgzcHgsIDVweCkgcm90YXRlKDRkZWcpO29wYWNpdHk6LjMxfTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDE2cHgsIC0xMXB4KSByb3RhdGUoMGRlZyk7b3BhY2l0eTouNzJ9MzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAtOXB4KSByb3RhdGUoMTBkZWcpO29wYWNpdHk6LjE0fTQwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDEzcHgsIC05cHgpIHJvdGF0ZSgtMWRlZyk7b3BhY2l0eTouNzJ9NTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTZweCwgLTNweCkgcm90YXRlKDBkZWcpO29wYWNpdHk6Ljc4fTYwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDE0cHgsIDlweCkgcm90YXRlKC05ZGVnKTtvcGFjaXR5Oi43NH03MCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxNnB4LCAzcHgpIHJvdGF0ZSgtNGRlZyk7b3BhY2l0eTouMzh9ODAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTVweCwgMTBweCkgcm90YXRlKDZkZWcpO29wYWNpdHk6LjI1fTkwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xM3B4LCAtMTVweCkgcm90YXRlKDhkZWcpO29wYWNpdHk6LjA0fTAlLDEwMCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLCAwKSByb3RhdGUoMCl9fS5zaGFrZS1jcmF6eTpob3Zlciwuc2hha2UtdHJpZ2dlcjpob3ZlciAuc2hha2UtY3JhenksLnNoYWtlLWNyYXp5LnNoYWtlLWZyZWV6ZSwuc2hha2UtY3Jhenkuc2hha2UtY29uc3RhbnR7YW5pbWF0aW9uLW5hbWU6c2hha2UtY3Jhenk7YW5pbWF0aW9uLWR1cmF0aW9uOjEwMG1zO2FuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246ZWFzZS1pbi1vdXQ7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX1Aa2V5ZnJhbWVzIHNoYWtlLWNodW5rezIle3RyYW5zZm9ybTp0cmFuc2xhdGUoMHB4LCAtOHB4KSByb3RhdGUoOGRlZyl9NCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxcHgsIDVweCkgcm90YXRlKC0xMmRlZyl9NiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgxMHB4LCAxMXB4KSByb3RhdGUoN2RlZyl9OCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSg2cHgsIC0xMHB4KSByb3RhdGUoMGRlZyl9MTAle3RyYW5zZm9ybTp0cmFuc2xhdGUoOHB4LCAtMTBweCkgcm90YXRlKC0xM2RlZyl9MTIle3RyYW5zZm9ybTp0cmFuc2xhdGUoNXB4LCAtMTJweCkgcm90YXRlKDEwZGVnKX0xNCV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNHB4LCAycHgpIHJvdGF0ZSgxMGRlZyl9MTYle3RyYW5zZm9ybTp0cmFuc2xhdGUoLThweCwgLTEzcHgpIHJvdGF0ZSgtMTRkZWcpfTE4JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC0xcHgsIC0xMXB4KSByb3RhdGUoMTNkZWcpfTIwJXt0cmFuc2Zvcm06dHJhbnNsYXRlKC03cHgsIDExcHgpIHJvdGF0ZSg2ZGVnKX0yMiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtMXB4LCAtMXB4KSByb3RhdGUoM2RlZyl9MjQle3RyYW5zZm9ybTp0cmFuc2xhdGUoMTVweCwgLTEycHgpIHJvdGF0ZSgzZGVnKX0yNiV7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtOXB4LCAtOXB4KSByb3RhdGUoOGRlZyl9Mjgle3RyYW5zZm9ybTp0cmFuc2xhdGUoM3B4LCAtOHB4KSByb3RhdGUoNmRlZyl9MzAle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTRweCwgMTRweCkgcm90YXRlKDdkZWcpfTMyJXt0cmFuc2Zvcm06dHJhbnNsYXRlKDNweCwgM3B4KSByb3RhdGUoMTBkZWcpfTM0JXt0cmFuc2Zvcm06dHJhbnNsYXRlKC05cHgsIC02cHgpIHJvdGF0ZSgtNWRlZyl9MzYle3RyYW5zZm9ybTp0cmFuc2xhdGUoOXB4LCAtOHB4KSByb3RhdGUoNWRlZyl9Mzgle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTRweCwgN3B4KSByb3RhdGUoMTBkZWcpfTAlLDQwJSwxMDAle3RyYW5zZm9ybTp0cmFuc2xhdGUoMCwgMCkgcm90YXRlKDApfX0uc2hha2UtY2h1bms6aG92ZXIsLnNoYWtlLXRyaWdnZXI6aG92ZXIgLnNoYWtlLWNodW5rLC5zaGFrZS1jaHVuay5zaGFrZS1mcmVlemUsLnNoYWtlLWNodW5rLnNoYWtlLWNvbnN0YW50e2FuaW1hdGlvbi1uYW1lOnNoYWtlLWNodW5rO2FuaW1hdGlvbi1kdXJhdGlvbjo0czthbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmVhc2UtaW4tb3V0O2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9jc3MvY3NzaGFrZS5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCAnLi4vY3NzL2Nzc2hha2UubWluLmNzcyc7XG5pbXBvcnQgJy4uL2pzL3VpLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5kZXguY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2luZGV4LmNzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkOTI0YWQxMTg3ZTY0MmUxMjk4ZmYyODNmNzlkZjljNC50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9mb250L+WNjuW6t+a1t+aKpeS9k1cxMigxKS/ljY7lurfmtbfmiqXkvZNXMTIudHRmXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjdiYjFlMzgzNTkxZTVlNThhMGFlM2RkMWEwOTRjMTk5LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltZy9iYWNrZ3JvdW5kLnBuZ1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiODQzNDJlY2QzYjEwOGVjZDU0YTM2ZTg2YjY0MWMzMy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWcvdGl0bGUucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZNQUFBQlRDQVlBQUFEanNqc0FBQUFSY0VsRVFWUjRuT1dkVzR4c1dWbkhmK3V5TDFXN3VrOVBuN25CVE9iTVpLQVpKcUxEUUpRZ2Fod0lYakJlRWhIUVJESFJGekJDTkw1NFNYeFE0d09hWUFUZUZFd01HRjY4UkZHQ0NWRlFUQmlua1FTR28rTk1qOE9aYzRiaFhLcTdhbC9XelllMXEwNTExYTd1Nm5QT3pMbjBQNm1rZDlYYWE2LzE3Mit0OWExdmZkKzN4YXVmZUlicmpCN3dYY0RyZ0llQkI0QjdsTmFiVXFrMUlXUS9FQW9CZTk3NzBsdDd5WHQvQVRnRFBBMThIZmd2NEN0QWVaMzZBSUMrRHMrVXdQY0FQd0s4RlhnamtFNGJsS2FvSk1IV05jMTRoSGNPQWlERlFPbGtrT1Q1SFZwS25ERTRhMmZyYllBdkEvOE1mQWI0RDhDL1RIMENRRnlwWkRaVmRhVHlhWjQvQlB3ODhIUEFmVjFsa2l6REdjUDQ0Z1dDWDg2RHpqS0t6WlBZdXNZdkwvY3M4SmZBWHpSVjllU1JHcnNDMGp4ZitPNGxKVFBOOHdSNEovQ3JSR2s4RUZsUmNQSE1OeUdFUSt2T2lvSnNzSWFwNnhWYXk5ZUJpOEFwNEhiZ1c4Qy9BaDlwcXVvTHExUXdqNWVOekRUUE5mQUx3TzhRTzdBUzBsNlAwZm56MlByd2YxU3hlUkloNWZ4UXZ4SjhGUGhnVTFYbUtEZDFrWG5ONTh3MHozOFkrQ1BpWW5Ja09HTll1LzEyNnZFSVU1YTR1aVlBUWdnQWhKVG9MQ010QmdnaFZwWEt3L0ErNHB6OXkxZGIwVFdUekRUUFh3bjhLZkJUUjI0RW9LUkVTWUVTQXEwMVdpa1FBdThEd1R1RWtDQUVCSS8zQWU4ZExnUzhEN2dRY041eitPUndJTjdTVk5VWFZ5MThSWko1K3BIRFIrblc5czY3aWNQbHRsVWJJNFVnVVJJdEpSSXd6bUdOcGZZTzV6eitBSEtFRUVncDBGS2hsQ1JSaWw2YTRBSHJQTVo3L0FyejdoeCs1WmszdmVaUU11Ly8wamVXL25ia1liNjF2Zk1XNFAzQTl3RjNBQmJvcjNwL3FoU3Brb1FRcUJ0RDVSeG15YnduQVNrbEtvNXlYQ0JLWUFnNEYzRE93OHhNbDJoTm9oWDlKQ0VJUWVNY3hxMnNIZjM0MXZaT2Z2cVJVMGRUVTJhd01wbGIyenNhK0RCeGpwbEYybEY4SDRRUXBFcVNLVVhWTk96VzlUNENKVEJJTkFPdHlaVWtWNUpVU3FUb3JzOEhxTDJuY3A3S09mYXNZMlFzeHNiUHVLcEp0U1pORXRiU2xObzVHdWNPYTJZZitPTFc5czVQbkg3azFIT0hGZTdDVVNUelk4QXZIZlVCcVpMa1dqT3VhaTZXRmJidGxCS3drYVpzcGdrRHJSQkxpT3VDRk5CVGtwNlNUTHJnQSt4WngvbkdjTEZ1YUt5bHNaYmFOSkhVTEtVeUZuT0EvZ284Q254cGEzdm5IYWNmT2ZXVm8vWjFKVEszdG5lK2x5TVNxYVVrMTRyR0dDN3VqYVlrRmxwelI1NndrU1JMSmU5S0lBV3NKNHIxUk9IN09SY2F3N21xcHJJT1l4MU5ZOGl6bEVHYVVGbUhYVTdxUGNEbnQ3WjNmdlQwSTZmKy9VaHRXTEhjKzQ5U2FhWVZ1WkxzbFNWN3JUUVdXdlBxdFlMWHJQZlpUSzh0a2ZPUUFrNW1DUStmR1BEQW9FOVBTWXh6N0k1TFJtVkZyaFdwVWdkVnNRRjhkbXQ3NTAxSGV1Nks1UjVicFpBU2dpSk53SHN1N0kxb2pDV1JrdnNIUFY2ejNtY3RPYkFETHdsdVN6VVByUSs0citpaHBLQTJoa3Q3SXlTQklrbFF5K2VYQWZDUFc5czdyMXYxV2F1U2VkZGhCYlNVRkdsQ1dWWHNqa3RDQ0d4bUtRK3ZGMnlteWFydGVVa2dCTnllSlR5OFBtQTkwVGp2R1k3R2xIVk5QMGxReTRmSkNlQWZ0clozN2wzbE9ZZVN1Ylc5azdOUEFWbEVJaVU5clJpT3gxU05RUUtuaWg3M0YvbEJEWDNaa1VqQnE5YjZ2TEtmSTRDcWFkZ3JTNG9rUWN1bFZOd0wvTTNXOWs3dnNQcFhrY3lQQUV0Rks1R1NUQ3VHNDNJNnJMZldDMDVtMTFjYUQ4TGRlY3FyMW9ycHNCK094L1MwT29qUVI0bTd1eWw4T1Y0d3lCeTJuWHdYOEtsbFArb1ppVFRXa1N2SnE5WUswaHRJR2c5QzZUei9zenZHZUUrYWFOYjdmVWJHNFB6UzNkTjdtcXI2RklBMkJyeEhEZ2JRTG1ZSFNlYmRSTjJ5RTBvSytvbG10eXluUkw3NkppSVNvcTY2dFZhUVNrbGpMTHZqa3I0K2NGSDZXR3VEQUtVSXp1S0dsd2hOQXh4TTVvZFlzdGVXUXREVG10MTJhS2N5U21SeUV4RTVRYVlFRDY3MVVRSnFZeGhWSlhteVZQM2VJRTU3aUlscUZRSitieGMvSGkwbDh3ZUJuMTFXWTYvZDBkVEdvQVE4dU5hL3FTUnlIajBsZVhCUXRJdVN3VnBMdGx3UC9jazB6OS9CM08raHFqckoxRVQyTzlsSnBDUUVUOVdLOXFtaTMyN3JibTRNRXNVOVJWeXdSMlZGSXVWQkM5S0hoSlFMNHR0VityM0FhN3RxRUVLUWE4V29pa2JaTy9PVWpmUjZuTW05TkxnelM5aElFM3dJN0ZVbHVWNHFuUThoNVMvT0d4VG15ZFRBYnkycklWV1NzbTR3MXBJcHlTdDdpd2JTbXgzMzlYTjB1eUExeHBBdUgzVy95WngwenBkOEYzQi8xNTFTQ0JJcHA4UDd2bjd2SmQxZlh5OW9LYmkzbndGUnFjKzFSbmF2N3ZjTElkNDkrOFU4bVI5YzlwREpvdU5EWUNOTnJzcysrK1hDWnBwUUpCcnJQT09xSmxrbW5WSitZTi9sek4rdkp6b0VMTjRqQkZJd2xjcFg5TEpyMHVnYkdmZTBmYXlOSVZPcWV6VVc0bzNFM1JHd244ejNMcXM0VlpKeGV4SzRrZWhiWXZVK0RBT3RXR3VOSW1YZGtIU3BTa0pDUE5JR0xwTXBpYzRDblVpVXd0aG8zTDNyR0VqbEJIZmtzYStOdFowTFVYc0UvVTVhSGljbDNneThvcXRDTFNYR1dLeHo5SlNrV0s0dTNISTRvUldKbEJocjhkNHZialBqNVN1SS9FM0pmUHV5Q2pPbHFFMjB3RzFtaDU2ZDNWSVFBalpiNjFmZG1JNkZhRXJ1MitFeW1XOWJWdUhFVEFWY2R5UHY5Y0J0N1Q3ZE9MZTRJN29zcUcrRFNHWU92S0dySWlVRnBqMEk2MnQxVXhveXJoYjkxczVwVzlkRzBhMXp2Z0hJSlZFbDZoeS9Ta2hzZTc2OXZ0eVNjc3Rqb2xNYlo5SGRaS2JBNnlYUlk3Y1RlcDlrSG1NeTI3NGI2MUN6UTMyL3BmMTFraVZHRFlqS3VtM2RTL3JIUUxkY2hyenR1M1B1SU1QeGF5WFJoM3dCb3YxRWxZQ2IybDU1dGNoYmFiVGU3OXVuaC8zSEd3OUlvZ2ZEQXFRUXVOYnJJVjF1MXpzVzBGS2daWFEyZzNCNUVRLzd2RUx1MWNEYTVFb0lnWkFTUXJ3aHRITkNjc3pKQkVoRWRQZHpQaUNFaU56c256TnZsOENhRUlJa3kwaDd2ZWo3cURWWjBaL3NQWmVab0k0VlpDdFFnWERaSnJ4L21HOW9ZS0RURkZPVmxNUGhsRzNiNjlFckJnQUhUYnJIQnBOTmRBZ0JFY2N0d2U5elUreHJwZlc2czRieTBxVjlOM3RyTVNzNDZoOFhkSXJUZmsrNlJPb2tOYzFvdEZBdUVLYXhPRmZwSzM1cndpODR6eHFKRU1aM2VOV0d3SFJ1Y0FjN2lCNEwyRmFpcEJCUjBCYmR1OGN5ZURmVTZlSnVNb1RMS3NCVlI5cmNBckN0R2hSWGNzQXRzSEpSV21QTzVXdnJVU1dhZ1ErZU5JMm5qMGR3c3I4bEVRSTBMUWRLU253SWhNV2doaGVsZCs0Wjd6M3JkOTVGMnU4anRVWWxLZm42QnZtZ0FHaERRVjdlRHR4SXFOc3dtZ21SQUdGeGFueE9BMC9icGtFcVJiNStBaWtsZ1JndFZsVVZXaW1zYzFUTzBUOUdWdlpaMUswa1Rja01BUmJKZkZvVGd6VHh6akcvRUxrMlVzdzZ4OWo1WTB2bXFCM1NXaXVjRHdUYjZmdjdkUWw4ZFZrbHpudVNsc0E5ZTJnY3pTMkxYUlA3bmlpTkRaNWdPc244cWdTZUlBYStMOENGTUQzaUhKcmp1YWE3QU9OV01wT0paQzZTMlFCUFNLQUNIdStxeUxmS1pxSVYxbnVHNXZoSjV5VmpDRUNxZGZRb2RxNXJ2bndjcUNiNjBPZVdWV2FjSjJrdHpSZWFJNFZrM3hJNFg4YytwNG5HZURmMUVwN0Q1K0R5NmVSbmwxVm12Q2RMNHFua2hibzVWaXFTOFlIZGRuckxrZ1RqUEw3cGpISC9MRndtODkrQXMxMmxKa005MVJvUHZIaU1wUFBGdWlFUWlmUWhHbjg2aHZoWkluOVRNajN3NldXVk50YVJ0V2ZtTDVUMUtpazBibnI0QU45cWgzaWVKdFRPRWJwVGFYeWFOa3ZON0I3eTQ4c3FOdDYzc2R5YXhudk9Id1BwZktGdXNONlRhbzFTQ21zTm9YdUlmM3p5eHl5Wi93bDhiVm5sdFhQa3JYU2VLZXRiZXU0MFBuQ3VqRktZWnltVmRmaXlVeW9mSi9JR0xEcTdMbzJ4bnF6cXFkWVk3M20rdWliSlJtNUlmTE9zY1NIT2xWRXFMYUU3dWNxSFp5L215UngyMWk0RVFnZ3E2K2kzYm5ZdmxEV2pXM0JYZE1rNHp0Y05RZ2o2ZVVadFhRenRXelNSN3dDZm5QMWluc3kxdVd1U0xDUHI5MGw3UFZTdmgwb1M4alFsQU0rTVN0d3ROTndiSDlnWnhYUnkvU3pGaG9CcG1tVlMrZnZNbVhybmZWNHV6bDRvclhHbVlmakNPUWdCcVJTOW9tQmpmWjN6bDRiVXh2RHN1T1NCNHRDQTF4c2VJY0RUb3hMYjZ0VlptakpxREdHMDExWDhHOENmejM4NUw1bi9OM3VodEtZWmw5TVRTKzhjbytHUWI1MDdSNUdtU0NtNVVCdk9sRGYvL0xrenJoZ1ppMWFLUVMrbnRCWmZsVjEyUzRCZnArTUFZcDdNSjJZdnZQZW9EdSszeGhqMmRvZFRMK0t6WmMyTDljMnJMcDBwNitrOHVkYnZVVHVIYlF4K1BPNHEvdGV1WC94OTF3L3paSDZCYVBnQXdGbExWZ3pvU3UxU05RMm1hZWkzN25iUGprcStmUk1TK254WmM3WWRXZXY5UGpZRUd1dndlNTNEK3lJSDVDdVpKM01FL04za0lyUUptWHByNjUwM2o2b0tuSnY2SXUyTVNzNVduWWFBR3c0aHdMT2ppdWRiSWpkUG5DRHA1VGlsQ2VOUjExRXV3UHRjdnppenJNNHVKNktQemw3WXBpRmZYeWZwZFM4eTQ2cEc0NmRSc0dmR0ZUdWo2b1pXNnAwUFBMMDM1c1U2L3VOUDlQdlVveEV2bmp0SE14eVNGUU4wUjY2M3B4NTc5Sk1MWDg2Z2k4elBBLzh5dVFnaDBKUWx4ZVpKa255UlVPZGpGSmNLamhORjlGWDZkdDN3amVFZTFRMTRxam15amlkM1IxdzBGaVVsSi9LTWFyekhjRzhYWnd4MU9XWnZkMGpTTCthbnQ5M0Q2bDdtM3ZacnpLeFczamxNWFRNNGVUTE9vWE53M3JNN0xxbkxranMyYnlQUml0SjVucnkweHdzM3lMQVBBYzZXRGFlSEkycm5TWk9FMjlZR2pNZGp4bk83T2VjY1RWT2pzMzB4VHp1SFBXTVptWThEZnpqN2hiZVdwaXpKQmdPS2t5ZVJIUkZibzNGSkUyQ2pLTWphcklIUGpTdWVISTZtNXlqWEE1ZU00MnZEUGM2VUZZRm9CZHBZR3pDcTYya0k0enljZFVpOUw3cWs4elJpRmdjNXF2OHU4TjNNeEFoNTcvRjFqVTVUMXUrNm0zcTBSek1hVGJPcjZqVEZTOGxlWmVqbk9hbldsSFhEMkRyK2UzZkVlcUs1Tzg4WXZFeEJyQmNieTltcVp0eHVleE90NldjcFVpcEcxaDA0cndzcDV2TWVmK2F3NXgxRXBnTitCdmduNXZJRjI2YkJHWVBPY3JKaVFBalJ5VXNsQ2FhcWNENHdhb09RVGd3S3lqWUZ4ZEJZaHNiUzE0cmIwb1ROTkxubTRUQ05ENXh2RE9mclpqcG5hNlhJRWsyZVJndVFNUWJxaWpUTkx6dXV6aUZOTTh6dTFGVHhJdkMzaHozN3NCQ0tTOEFQQVg4RC9NRHNEeUVFYk5OZ202anMwcEcyMWppUDlZWTAwV3hrS1dXYlBYQnNIV1ByT0RPdVdFczBhNGxtUGRIa1VoNHBXMkZzQjVUT3NXc2RRMk9ueHd3UVR4TlRuZERMVW1ycjJHc00zbG5DYUVTd0ZodWdHS3d4SHUxTnMyb0xJZWozQzRKcFp2MEkvdUNweHg0OU5BZjhLcGxkTDIxdDc3eWRtRWY0L1hTNEtuYTRKTy83cmJhT1JzVGNRU2Z5REdNTVZadHBZQ0t0M3lSTzRMMDJoMlltSlZJS0ZKYzlsMzFvVStLR1FPMERsWFBSMWpqM3pMaTNUa2lVcG5hT1lkMkE5L2l5Sk16NG5KcnhpS1RYWjIzOUJNNDVDQUdsTmJhcWFNWlROOHN2TTVjZ2Foa096VGs4bXlaM2Ezdm5yY0NmY0FYSm1XZVJTRW1xRkZJSWpEVTAxbUdkbTZhRlBDcTBVaVJha1NoTm1zUWoyZHExYVIyOWozdnN1bDZlc3J4MVBSZkVYZDlNdWVlQk56MzEyS1BQVHI2WXBNbFY0MFdmMWtVeXZZL3VIejZBMW9qRllDb04vRFJSU3QvTTZzbjVPcEZNRWplM3VZZWQ5OWhKenVFUW9pOWttUFk1QmpFSTBTWjhqaDgvdWMrSGFWN01ZQXlocnBZZHphNkNwNEFmYy8yaU0ySCthbVJPNEJ5K3FnaE5qVkI2U3F6UUdxU2txU3JTUEwrTG1IdjRPNGh2QmZoKzRNRXJiYjBBcEJSdDVnWFJ4aUtKNmNRU1NZM2tlbUltYkIvQzFHd2JqSW1mcHA1M2tUNEtMTkc4OWh1dVgxeGFWdWhvWkU0UUFxR3E4SFYxdVlGQzRwWnNMOXM4N1gvTUFaRnYxd3JCV3JDV1lDT0pSemcyUFU5OGk4Q2R4S3hpRjREVFJHZUNQM1A5NG44UHErREt5THpjZEVMZDRLc1NuTVAxaTZVbHRiVWFLZDhybFB4dGhEeUZsQWdwWWlqTVVaYnJFT0swRStMY2gvUFJ2dWpzTWp2allkZ0JmZy80aE9zWFYyWGlXaUJUaUN0TGVoOU1zNUkzc1JxUEVtSjZudzh3bTB5bFZhVzZZeGhhemVEYUhzNS9tWGo0OVZkWFMrSUV1cTR2cnlsYUk1UzY4amNJUUJ4bW9aMVhWOEJEeEtRcTcySEpXMWV1TVo0bEhuaDlndFlIOVlvaEpVSW4rNGpyR21GWFJlWVUzc2ZGcXE1V2thalo5d0c5alNpeDF5TEZnaUZLNE9lNG12Y0JDWEdadElua2lkVVVsbXRENWdRaEVPb0tYMVZIV1UwbmI2cjZUdUtpOVFBeE5lMGR4TlBTRThSL2dDZnV5SGFKaThkelhPMmJxb1NJVXJaUFU3bHl1OEgvQTNOT0Z1cWRVMnhiQUFBQUFFbEZUa1N1UW1DQ1wiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW1nL2hlYWQucG5nXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9jc3NoYWtlLm1pbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vY3NzaGFrZS5taW4uY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Nzc2hha2UubWluLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY3NzL2Nzc2hha2UubWluLmNzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHcgPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xudmFyIGggPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodDtcblxudmFyIG1haW5Cb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5Cb2R5Jyk7XG5tYWluQm9keS5zdHlsZS5oZWlnaHQgPSB3IC8gMi40ICsgJ3B4Jztcbi8vbWFpbkJvZHkuc3R5bGUubWFyZ2luVG9wID0gaCAvIDIgLSBwYXJzZUludChtYWluQm9keS5zdHlsZS5oZWlnaHQpIC8gMiArICdweCc7XG5cbi8v5p2h5bmF5Yqo55S7XG52YXIgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKTtcbnRpdGxlLmNsYXNzTmFtZSA9ICdtb3ZpbmdUaXRsZSc7XG5cbi8vVUZP5Yqo55S7XG52YXIgdWZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLlVGTycpO1xudWZvLmNsYXNzTmFtZSA9ICdtb3ZpbmdVRk8nO1xudWZvLnN0eWxlLnRvcCA9ICcyMyUnO1xuXG5mdW5jdGlvbiBtb3ZpbmdVRk8oKSB7XG4gICAgaWYgKHVmby5zdHlsZS50b3AgPT09ICcyMyUnKSB7XG4gICAgICAgIHVmby5zdHlsZS50b3AgPSAnMjclJztcbiAgICB9IGVsc2UgaWYgKHVmby5zdHlsZS50b3AgPT09ICcyNyUnKSB7XG4gICAgICAgIHVmby5zdHlsZS50b3AgPSAnMjMlJztcbiAgICB9XG5cbn1cblxuc2V0SW50ZXJ2YWwobW92aW5nVUZPLCAxNjAwKTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvdWkuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=