import '../css/index.css';
import '../css/csshake.min.css';
import '../js/ui.js';
import ajax from './Ajax.js';

var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    // ws.onclose = function() {
    //     console.log('Connection closed');
    // };
    window.location.href = '../view/count.html' + window.location.search;
}, false);


var onlineNumber = document.querySelector('#number');
var heads = document.querySelectorAll('.head');


var loopGet = setInterval(getMessage, 1000);

function getMessage() {
    ajax({
        method: 'GET',
        url: 'https://wx.idsbllp.cn/gavagame/game2017/master/wait',
        success: function(data) {
            var dataObj = JSON.parse(data);
            console.log(dataObj);

            // onlineNumber.innerHTML = dataObj.count;
            // for (var i = 0; i < heads.length; i++) {
            //     heads[i].childNodes[0].src = dataObj.list[i].headimgurl;
            //     console.log(dataObj.list[i].headimgurl);
            // }
        },
        error: function(data) {
            console.log(data);
        }
    })
}


//webSocket
// var url = 'ws://wx.idsbllp.cn/gavagame/cet/wait' + window.location.search;
// var ws = new WebSocket(url);

//获取服务端消息


// ws.addEventListener('message', getMessage, false);

// ws.addEventListener('open', open, false);

// ws.addEventListener('error', error, false);


// function open(evnet) {
//     console.log(1);
// }

// function getMessage(event) {
//     var data = event.data;
//     var dataObj = JSON.parse(data);
//     //console.log(dataObj);

//     onlineNumber.innerHTML = dataObj.count;
//     for (var i = 0; i < heads.length; i++) {
//         heads[i].childNodes[0].src = dataObj.list[i].headimgurl;
//         console.log(dataObj.list[i].headimgurl);
//     }
// }

// function error(event) {
//     console.log(event.data);
// }

// window.onunload = function() {
//     ws.onclose = function() {
//         console.log('Connection closed');
//     };
// }
// 








//The end