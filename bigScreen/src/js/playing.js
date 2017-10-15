import '../css/playing.css';
import shine_1 from '../img/shineRedRock_1.png';
import shine_2 from '../img/shineRedRock_2.png';
import shine_3 from '../img/shineRedRock_3.png';
import shine_4 from '../img/shineRedRock_4.png';
import shine_5 from '../img/shineRedRock_5.png';
import shine_6 from '../img/shineRedRock_6.png';
import shine_7 from '../img/shineRedRock_7.png';
import shine_8 from '../img/shineRedRock_8.png';
import shine_9 from '../img/shineRedRock_9.png';
import shine_10 from '../img/shineRedRock_10.png';

import yellowLight_0 from '../img/shineYellow_0.png';

var w = document.body.clientWidth;
var h = window.screen.availHeight;
var body = document.querySelector('body');


//动态设定总体高度
var mainBodyWrapper = document.querySelector('.mainBodyWrapper');
//mainBodyWrapper.style.height = w / 2.4 + 'px';
mainBodyWrapper.style.height = body.style.height = h - 5 + 'px';

//UFO
var UFO = document.querySelector('.UFO');
UFO.style.top = '21%';
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

moving(UFO, '21%', '27%', 1200);

setTimeout(function() {
    UFO.className = 'movingUFO';
}, 3000);


var space = document.querySelector('.spaceStation');
var range = '';
var init = '';

if (w <= 1550) {
    space.style.marginTop = '6%';
    init = '6%';
    range = '9%';
}
if (w > 1550 && w <= 1700) {
    space.style.marginTop = '4%';
    init = '4%';
    range = '10%';
}
if (w > 1700 && w <= 1900) {
    space.style.marginTop = '2%';
    init = '2%';
    range = '7%';
}
if (w > 1900) {
    space.style.marginTop = '1.8%';
    init = '1.8%';
    range = '5%';
}


setInterval(function() {
    if (space.style.marginTop === init) {
        space.style.marginTop = range;
    } else if (space.style.marginTop === range) {
        space.style.marginTop = init;
    }
}, 1200);


//背景移动
var body = document.querySelector('body');
var bodyPosition = 0;
var movingSpeed = 0.1;
setInterval(function() {
    bodyPosition += movingSpeed;
    if (bodyPosition >= 88.7) {
        bodyPosition = 0;
    }
    body.style.backgroundPosition = bodyPosition + '%';
}, 10);

//space station
var spaceStation = document.querySelector('.spaceStation');
var yellowLight = document.querySelectorAll('.yellowLight');


spaceStation.className = 'movingSpaceStation';

//redRock and progress
var redRockWrapper = document.querySelector('.redRock');
var redRock = document.querySelector('.rock');
var under = document.querySelector('.under');
var percent = document.querySelector('.progress');
var userHead = document.querySelector('.userHead');
var users = userHead.querySelectorAll('img');

//console.log(userHeads[0].childNodes);

var redRockProgress = 0;

// var progressTimer = setInterval(function() {

//     redRockProgress += 0.03;
//     percent.innerHTML = parseInt(100 / 36 * redRockProgress) + '%';

//     if (redRockProgress >= 9) {
//         yellowLight[0].className = 'yellowLight firstLight';
//         yellowLight[0].src = yellowLight_0;
//     }
//     if (redRockProgress >= 18) {
//         yellowLight[1].className = 'yellowLight secondLight';
//         yellowLight[1].src = yellowLight_0;
//     }
//     if (redRockProgress >= 27) {
//         yellowLight[2].className = 'yellowLight thirdLight';
//         yellowLight[2].src = yellowLight_0;
//     }
//     if (redRockProgress >= 33) {
//         yellowLight[3].className = 'yellowLight fourthLight';
//         yellowLight[3].src = yellowLight_0;
//     }

//     movingSpeed = redRockProgress / 99 + 0.1;
//     if (redRockProgress >= 36) {
//         redRockProgress = 36;
//         shineWords();
//         under.style.display = 'none';
//         clearInterval(progressTimer);
//         setTimeout(function() {
//             window.location.href = '../view/end.html' + window.location.search;
//         }, 10000);
//     }
//     under.style.width = redRockProgress + '%';
// }, 20);


function shineFlash(shineNum) {
    switch (shineNum) {
        case 1:
            redRockWrapper.className = 'redRock_1';
            redRock.src = shine_1;
            break;
        case 2:
            redRockWrapper.className = 'redRock_2';
            redRock.src = shine_2;
            break;
        case 3:
            redRockWrapper.className = 'redRock_3';
            redRock.src = shine_3;
            break;
        case 4:
            redRockWrapper.className = 'redRock_5';
            redRock.src = shine_5;
            break;
        case 5:
            redRockWrapper.className = 'redRock_5';
            redRock.src = shine_5;
            break;
        case 6:
            redRockWrapper.className = 'redRock_6';
            redRock.src = shine_6;
            break;
        case 7:
            redRockWrapper.className = 'redRock_7';
            redRock.src = shine_7;
            break;
        case 8:
            redRockWrapper.className = 'redRock_8';
            redRock.src = shine_8;
            break;
        case 9:
            redRockWrapper.className = 'redRock_9';
            redRock.src = shine_9;
            break;
        case 10:
            redRockWrapper.className = 'redRock_10';
            redRock.src = shine_10;
            break;
        default:
            redRockWrapper.className = 'redRock_10';
            redRock.src = shine_10;
            break;
    }
}


function shineWords() {
    var shineNum = 0;
    var ifAdd = true;
    setInterval(function() {
        if (ifAdd) {
            shineNum++;
        }
        if (shineNum === 11) {
            ifAdd = false;
        }
        if (!ifAdd) {
            shineNum--;
        }
        if (shineNum === 1) {
            ifAdd = true;
        }
        shineFlash(shineNum);
    }, 100);
}


//webSocket

var percentage = 0, //游戏进度
    average = 280, //人平均点击数
    clickNumber, //点击总量
    onlineNumber, //初始在线人数
    targetClickNumber; //目标点击量

var url = 'ws://wx.idsbllp.cn/gavagame/cet/game' + window.location.search;
var ws = new WebSocket(url);

//获取服务端消息
ws.addEventListener('message', getMessage, false);

ws.addEventListener('open', open, false);

ws.addEventListener('error', getError, false);


function getMessage(event) {
    var data = event.data;
    var dataObj = JSON.parse(data);
    console.log(dataObj);

    onlineNumber = dataObj.count;
    targetClickNumber = onlineNumber * average;
    clickNumber = dataObj.clickCount;
    percentage = (clickNumber / targetClickNumber);

    if (percentage >= 1) {
        percentage = 1;
        under.style.display = 'none';
        shineWords();
        setTimeout(function() {
            ws.onclose = function() {
                console.log('connect closed');
            };
            window.location.href = '../view/end.html' + window.location.search;
        }, 10000);
    }
    percent.innerHTML = parseInt(percentage * 100) + '%';
    under.style.width = 36 * percentage + '%';

    for (var i = 0; i < users.length; i++) {
        users[i].src = dataObj.list[i].headimgurl;
        //users[i].src = 'http://old.cicphoto.com/newcicsite/syxy/tj/201408/W020140827418493810536.jpg'
    }

    if (percentage >= 0.25) {
        yellowLight[0].className = 'yellowLight firstLight';
        yellowLight[0].src = yellowLight_0;
    }
    if (percentage >= 0.5) {
        yellowLight[1].className = 'yellowLight secondLight';
        yellowLight[1].src = yellowLight_0;
    }
    if (percentage >= 0.75) {
        yellowLight[2].className = 'yellowLight thirdLight';
        yellowLight[2].src = yellowLight_0;
    }
    if (percentage >= 0.95) {
        yellowLight[3].className = 'yellowLight fourthLight';
        yellowLight[3].src = yellowLight_0;
    }

    movingSpeed = percentage / 2 + 0.1;
}


function open(evnet) {
    console.log(1);
}


function getError(event) {
    console.log(event.data);
    console.log(0);

    save();
}


function save() {
    setInterval(function() {
        percentage += 0.006;

        if (percentage >= 0.25) {
            yellowLight[0].className = 'yellowLight firstLight';
            yellowLight[0].src = yellowLight_0;
        }
        if (percentage >= 0.5) {
            yellowLight[1].className = 'yellowLight secondLight';
            yellowLight[1].src = yellowLight_0;
        }
        if (percentage >= 0.75) {
            yellowLight[2].className = 'yellowLight thirdLight';
            yellowLight[2].src = yellowLight_0;
        }
        if (percentage >= 0.95) {
            yellowLight[3].className = 'yellowLight fourthLight';
            yellowLight[3].src = yellowLight_0;
        }

        if (percentage > 1) {
            percentage = 1;
            under.style.display = 'none';
            shineWords();
            setTimeout(function() {
                window.location.href = '../view/end.html' + window.location.search;
            }, 10000);

            ws.onclose = function() {
                console.log('connect closed');
            };
        }
        
        under.style.width = 36 * percentage + '%';
        movingSpeed = percentage / 2 + 0.1;
        percent.innerHTML = parseInt(percentage * 100) + '%';

        for (var i = 0; i < users.length; i++) {
            //users[i].src = ;
        }
    }, 400);

}


window.onunload = function() {
    ws.onclose = function() {
        console.log('Connection closed');
    };
}

save();




//The end