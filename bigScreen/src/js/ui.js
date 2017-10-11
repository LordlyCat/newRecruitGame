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

