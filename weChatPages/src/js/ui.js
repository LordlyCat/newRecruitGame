var UFO = document.querySelector('.UFO');
var readyWords = document.querySelector('.readyWords');


setTimeout(function() {
    UFO.className = 'movingUFO';
}, 500);

UFO.style.top = '-330%';
readyWords.style.opacity = '1';

setInterval(function() {
    if (UFO.style.top === '-330%') {
        UFO.style.top = '-345%';
    } else if (UFO.style.top === '-345%') {
        UFO.style.top = '-330%';
    }

    if (readyWords.style.opacity === '1') {
        readyWords.style.opacity = '0';
    } else if (readyWords.style.opacity === '0') {
        readyWords.style.opacity = '1';
    }
}, 1000);

var order = document.querySelectorAll('.order');
var playBtn = document.querySelector('.smallBtn');

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
