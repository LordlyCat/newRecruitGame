import '../css/count.css';
import num_1 from '../img/num_1.png';
import num_2 from '../img/num_2.png';
import num_3 from '../img/num_3.png';
import num_4 from '../img/num_4.png';

//import test from 'http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg';

var w = document.body.clientWidth;
var h = document.body.scrollHeight;
var music = document.querySelector('audio');

setTimeout(function () {
    music.play();
}, 3000);

//动态设定总体高度
var mainBodyWrapper = document.querySelector('.mainBodyWrapper');
//mainBodyWrapper.style.height = w / 2.4 + 'px';
var minBodyWrapper = document.querySelector('.minBodyWrapper');
minBodyWrapper.style.height = w / 2.4 + 'px';


var h = window.screen.availHeight;
var body = document.querySelector('body');
mainBodyWrapper.style.height = body.style.height = h - 5 + 'px';

//大UFO动画
var bigUFO = document.querySelector('.bigUFO');
var UFOlight = document.querySelector('.UFOlight');
bigUFO.className = 'movingBigUFO';

//小UFO动画
var littleUFO = document.querySelector('.littleUFO');
setTimeout(function() {
    UFOlight.style.opacity = 1;
    littleUFO.className = 'movingLittleUFO';
    littleUFO.style.top = '23%';
    moving(littleUFO, '23%', '20%', 1500);

}, 2000);

//宇航员动画
var astronaut = document.querySelector('.astronaut');
setTimeout(function() {
    astronaut.className = 'movingAstronaut';
    astronaut.style.top = '56%';
    astronaut.style.left = '59%';
    moving(astronaut, '56%', '52%', 1500);
}, 2500);

//上下浮动函数
function moving(target, init, range, time) {
    setInterval(function() {
        if (target.style.top === init) {
            target.style.top = range;
        } else if (target.style.top === range) {
            target.style.top = init;
        }
    }, time);
}

//灯光
var underLight = document.querySelector('.underLight');
var stateLight = document.querySelector('.stateLight');
var shine = document.querySelector('.shine');


setTimeout(function() {
    underLight.style.opacity = 1;
}, 1200);

setTimeout(function() {
    stateLight.style.opacity = 1;
}, 1600);

setTimeout(function() {
    shine.style.opacity = 1;
}, 2000);

//数字
var num = document.querySelector('.num');
setTimeout(function() {
    num.className = 'numBigger';
    var index = 5;
    setInterval(function() {
        index -= 1;
        num.className = 'num';
        getNumber(index);
    }, 1800);
}, 5000);

function getNumber(index) {
    switch (index) {
        case 4:
            num.src = num_4;
            setTimeout(function() {
                num.className = 'numBigger';
            }, 20);
            break;
        case 3:
            setTimeout(function() {
                num.className = 'numBigger';
            }, 20);
            num.src = num_3;
            break;
        case 2:
            setTimeout(function() {
                num.className = 'numBigger';
            }, 20);
            num.src = num_2;
            break;
        case 1:
            setTimeout(function() {
                num.className = 'numBigger_1';
            }, 20);
            num.src = num_1;
            setTimeout(function() {
                window.location.href = '../view/playing.html' + window.location.search;
            }, 3000);
            break;
        default:
             num.className = 'numBigger_1';
            break;
    }
}


//流星
var purpleMeteor = document.querySelector('.purpleMeteor');
var blueMeteor = document.querySelector('.blueMeteor');
setTimeout(function() {
    purpleMeteor.className = 'movingPurpleMeteor';
}, 5000);

setTimeout(function() {
    blueMeteor.className = 'movingBlueMeteor';
}, 8000);