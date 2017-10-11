import '../css/end.css';
import shine_0 from '../img/shine_0.png';
import shine_1 from '../img/shine_1.png';
import shine_2 from '../img/shine_2.png';
import shine_3 from '../img/shine_3.png';
import shine_4 from '../img/shine_4.png';

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
            shineImg.src = shine_0;
            break;
        case 1:
            shineImg.src = shine_1;
            break;
        case 2:
            shineImg.src = shine_2;
            break;
        case 3:
            shineImg.src = shine_3;
            break;
        case 4:
            shineImg.src = shine_4;
            break;

        default:
            shineImg.src = shine_4;
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