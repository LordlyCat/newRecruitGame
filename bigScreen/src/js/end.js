import '../css/end.css';
import ajax from './Ajax.js';

var w = document.body.clientWidth;
//var h = window.screen.availHeight;
var h = window.innerHeight;
var body = document.querySelector('body');

//动态设定总体高度
var mainWrapper = document.querySelector('.mainWrapper');
mainWrapper.style.height = body.style.height = h + 'px';


var title = document.querySelector('.title');
title.className = 'movingTitle';

var btn = document.querySelector('.yellow');

btn.addEventListener('mousedown', function() {
    btn.className = 'pressYellow';
}, false);

btn.addEventListener('mouseup', function() {
    btn.className = 'yellow';
}, false);


var UFO = document.querySelector('.UFO');
var blueMeteor = document.querySelector('.blueMeteor');
var purpleMeteor = document.querySelector('.purpleMeteor');
UFO.style.top = '42%';


// setInterval(function() {
//     if (UFO.style.top === '42%') {
//         UFO.style.top = '45%';
//     } else if (UFO.style.top === '45%') {
//         UFO.style.top = '42%';
//     }
// }, 1200);

moving(UFO, '42%', '45%', 1200);

function moving(target, init, range, time) {
    setInterval(function() {
        if (target.style.top === init) {
            target.style.top = range;
        } else if (target.style.top === range) {
            target.style.top = init;
        }
    }, time);
}


//webSocket
// var ws = new WebSocket('ws://wx.idsbllp.cn/gavagame/cet/luck?type=1');

// function getMessage(event) {
//     var data = event.data;
//     console.log(data);

// }

//抽奖
var bigPrizeHead = document.querySelector('#bigPrizeHead');
var bigPrizeName = document.querySelector('#bigPrizeName');
var smallPrizeHead = document.querySelectorAll('.smallPrizeHead');
var smallPrizeName = document.querySelectorAll('.smallPrizeName');

smallPrizeName[0].style.opacity = smallPrizeName[1].style.opacity = 0;
smallPrizeName[2].style.opacity = smallPrizeName[3].style.opacity = 0;

//bigPrizeHead.src = 'http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg';

btn.addEventListener('click', prizeDraw, false);
var time = 0;
var url = 'https://wx.idsbllp.cn/gavagame/cet/luck' + window.location.search;

var dataObj;

function prizeDraw() {
    time++;

    if (time === 1) {

        ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                console.log(data);
                dataObj = JSON.parse(data);
                bigPrizeHead.src = dataObj.data[0].headimgurl;
                bigPrizeName.innerHTML = dataObj.data[0].nickname;
            },
            error: function(data) {
                console.log(data);
            }
        });


        //bigPrizeHead.src = dataObj.data[0].headimgurl;
        //bigPrizeName.innerHTML = dataObj.data[0].nickname;

        // 
        // $.ajax({
        //     url: url,
        //     type: 'GET',
        //     contentType: 'application/json',
        //     dataType: "JSONP",
        //     success: function(data) {
        //         console.log(data);
        //         var dataObj = JSON.parse(data);

        //         bigPrizeHead.src = dataObj.data[0].headimgurl;
        //         bigPrizeName.innerHTML = dataObj.data[0].nickname;
        //     },
        //     error: function(data) {
        //         console.log(data);
        //     }

        // });
    }
    if (time === 2) {

        for (var i = 0; i < smallPrizeHead.length; i++) {
            smallPrizeHead[i].src = dataObj.data[i + 1].headimgurl;
            smallPrizeName[i].innerHTML = dataObj.data[i + 1].nickname;
        }


        smallPrizeName[0].style.opacity = smallPrizeName[1].style.opacity = 1;
        smallPrizeName[2].style.opacity = smallPrizeName[3].style.opacity = 1;

    }
}










//The end