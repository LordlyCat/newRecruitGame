import '../css/index.css';
import '../css/csshake.min.css';
import '../js/ui.js';

var btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    window.location.href = '../view/count.html' + window.location.search;
}, false)


var onlineNumber = document.querySelector('#number');
var heads = document.querySelectorAll('.head');
//console.log(heads[0].childNodes.src);
//webSocket
var ws = new WebSocket('ws://wx.idsbllp.cn/gavagame/cet/wait?type=1');

//获取服务端消息


ws.addEventListener('message', getMessage, false);

ws.addEventListener('open', open, false);

ws.addEventListener('error', error, false);


function open (evnet) {
    console.log(1);
}

function getMessage(event) {
    var data = event.data;
    console.log(data);

    // onlineNumber.innerHTML = ;
    // for (var i = 0; i < heads.length; i++) {
    //     heads[i].childNodes.src = ;
    // }
}

function error (event) {
    console.log(event.data);
}
