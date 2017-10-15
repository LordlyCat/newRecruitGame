import '../css/playing.css';
import shine_0 from '../img/shine_0.png';
import shine_1 from '../img/shine_1.png';
import shine_2 from '../img/shine_2.png';
import shine_3 from '../img/shine_3.png';
import shine_4 from '../img/shine_4.png';

import ajax from './Ajax.js';

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
        redRockImg.src = shine_1;
    }
    if (clickSpeed >= 50 && clickSpeed < 80) {
        redRockImg.src = shine_3;
    }
    if (clickSpeed > 80) {
        redRockImg.src = shine_4;
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
        redRockImg.src = shine_1;
    }
    if (clickSpeed >= 50 && clickSpeed < 80) {
        redRockImg.src = shine_3;
    }
    if (clickSpeed > 80) {
        redRockImg.src = shine_4;
    }
    if (clickSpeed <= 30) {
        redRockImg.src = shine_0;
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
    ajax({
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