import '../css/playing.css';


var UFO = document.querySelector('.UFO');
var order = document.querySelectorAll('.order');
var redRock = document.querySelector('.redRock');

playBtn.addEventListener('touchstart', function() {
    playBtn.className = 'pressSmallBtn';
    order[0].style.marginLeft = '77%';
    order[1].style.marginLeft = '5%';
    order[2].style.marginTop = '7%';
    order[3].style.marginTop = '65%';
    setTimeout(function () {
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

playBtn.addEventListener('touchstart', function () {
    if (clickSpeed < 100) {
        clickSpeed += 5;
    }
    if (clickSpeed >100) {
        clickSpeed = 100;
    }
    redRock.style.opacity = clickSpeed/100;
}, false);

setInterval(function () {
    redRock.style.opacity -= 0.1;
    clickSpeed -=3;
    if (redRock.style.opacity < 0.1) {
        redRock.style.opacity = 0.1;
    }
    if (clickSpeed < 0) {
        clickSpeed = 0;
    }
}, 200);