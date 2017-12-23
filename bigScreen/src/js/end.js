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
var bigPrizeHead = document.querySelector('#star');
var bigPrizeName = document.querySelector('#bigPrizeName');
var smallPrizeHead = document.querySelectorAll('.smallPrizeHead');
var smallPrizeName = document.querySelectorAll('.smallPrizeName');

smallPrizeName[0].style.opacity = smallPrizeName[1].style.opacity = 0;
smallPrizeName[2].style.opacity = smallPrizeName[3].style.opacity = 0;

//bigPrizeHead.src = 'http://img05.tooopen.com/images/20160121/tooopen_sy_155168162826.jpg';

btn.addEventListener('click', prizeDraw, false);
var time = 0;
var url = 'http://wx.yyeke.com/171215game/master/luck' + window.location.search;

var dataObj;

function prizeDraw() {
    time++;

    if (time === 1) {

        ajax({
            url: url,
            method: 'GET',
            success: function(data) {
                //console.log(data);
                dataObj = JSON.parse(data);
                console.log(dataObj);
                console.log(bigPrizeHead);
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

//抽奖详情

var baterryColor = ['rgb(162, 247, 254)', 'rgb(162, 247, 254)', 'rgb(149,226,251)',
    'rgb(125, 189, 246)', 'rgb(103, 155, 241)', 'rgb(82, 122, 257)',
    'rgb(62, 90, 232)', 'rgb(47, 67, 229)'
]

var shine;
var baterryaaa;

function bbb() {
    var baterry = document.querySelectorAll('.node');
    baterryaaa = setInterval(function() {
        for (var i = 0; i < baterry.length; i++) {
            baterry[i].style.transition = 'opacity ' + (7 - 1 * i) + 's,' + 'background 0.5s';
            baterry[i].style.opacity = '1';
            baterry[i].style.background = baterryColor[i];
        }
        baterry[0].style.opacity = '0';
    }, 300);


    shine = setInterval(function() {

        if (baterry[0].style.opacity == '1') {
            baterry[0].style.opacity = '0';
            baterry[0].style.transition = 'opacity 2s';
        } else if (baterry[0].style.opacity == '0') {
            baterry[0].style.opacity = '1';
        }
    }, 2000);
}


//进入抽奖详情
var luck = document.querySelectorAll('.luck');
for (var i = luck.length - 1; i >= 0; i--) {
    luck[i].addEventListener('click', function() {
        
        bbb();
        cover.style.display = details.style.display = baterry.style.display = circle.style.display = 'block';
        var userHead = details.querySelector('img');
        var nickname = details.querySelector('#nickname');
        var name = details.querySelector('#name');
        var studentNum = details.querySelector('#studentNum');

        var n;
        switch (this.id) {
            case 'star':
                n = 0;
                break;
            case 'a':
                n = 1;
                break;
            case 'b':
                n = 2;
                break;
            case 'c':
                n = 3;
                break;
            case 'd':
                n = 4;
                break;
            default:
                n = null;
                break;
        }

        userHead.src = dataObj.data[n].headimgurl;
        nickname.innerHTML = dataObj.data[n].nickname;

        if (dataObj.data[n].realname.length > 0) {
            name.innerHTML = dataObj.data[n].realname;
            studentNum.innerHTML = dataObj.data[n].usernumber;
        }
        
    }, false);
}



//退出详情页
var quit = document.querySelector('.quit');
var cover = document.querySelector('.cover');
var details = document.querySelector('.details');
var baterry = document.querySelector('.baterry');
var circle = document.querySelector('.circleWrapper');

quit.addEventListener('click', function() {
    var baterries = document.querySelectorAll('.node');
    for (var i = 0; i < baterries.length; i++) {
        baterries[i].style.opacity = '0';
    }
    setTimeout(function() {
        cover.style.display = details.style.display = baterry.style.display = circle.style.display = 'none';
    }, 200)
    clearInterval(shine);
    clearInterval(baterryaaa);
}, false);



// window.onbeforeunload = function(event) { 
//     alert(233);
// }; 

// window.onunload = function (event) {
//     alert('hahaahahah');
// }



//The end