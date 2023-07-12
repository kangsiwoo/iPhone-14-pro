var video = document.getElementById('iphoneVideo');
var imageDP = document.getElementById('iphoneDP');
var opacity = 1;
var fadeInterval;
var after = imageDP;
var iphoneColorDisplayOP = document.getElementById("iphoneColorDisplay");

var changeAllow = false

setTimeout(function() {
    fadeInterval = setInterval(function() {
        opacity -= 0.01; // 투명도 감소량
        video.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fadeInterval); // 투명도가 0이 되면 반복 종료
        }
    }, 5); // 각 단계의 시간 간격 (밀리초)
}, 4100); // 5.1초 동안 대기 (밀리초)

setTimeout(function() {
    opacity = 0;
    fadeInterval = setInterval(function() {
        opacity += 0.01; // 투명도 증가량
        after.style.opacity = opacity;
        iphoneColorDisplayOP.style.opacity = opacity

        if (opacity >= 1) {
            clearInterval(fadeInterval); // 투명도가 1이 되면 반복 종료
        }
    }, 5); // 각 단계의 시간 간격 (밀리초)
    changeAllow = true
}, 4890); // 5.890초 동안 대기 (밀리초)