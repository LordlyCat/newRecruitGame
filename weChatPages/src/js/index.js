import '../css/index.css';
import '../css/csshake.min.css';
import '../js/ui.js';
import ajax from './Ajax.js';

var url = 'http://wx.yyeke.com/171215game/user/startgame' + window.location.search;

document.addEventListener('click', function() {
    ajax({
        url: url,
        method: "GET",
        success: function(data) {
            console.log(data);
            var dataObj = JSON.parse(data);
            if (dataObj.status == 200) {
                window.location.href = '../view/playing.html' + window.location.search;
            }
        },
        error: function(data) {
            console.log(data);
        }
    });
}, false);


window.onload = function () {
    setInterval(function () {
         window.scrollTo(0,document.body.scrollHeight);
    }, 10);
}

// var cover = document.querySelector('.cover');

// cover.style.height = document.documentElement.clientHeight - 2 + 'px';