    var video = document.getElementById('iphoneVideo');
    var DP = document.getElementById('ColorDP');
    var G = document.getElementById('ColorG');
    var S = document.getElementById('ColorS');
    var SB = document.getElementById('ColorSB');
    var imageDP = document.getElementById('iphoneDP');
    var imageG = document.getElementById('iphoneG');
    var imageS = document.getElementById('iphoneS');
    var imageSB = document.getElementById('iphoneSB');
    var opacity = 1;
    var fadeInterval;
    var showImage = imageDP;
    var after = imageDP;

    setTimeout(function() {
    fadeInterval = setInterval(function() {
        opacity -= 0.01; // 투명도 감소량
        video.style.opacity = opacity;

        if (opacity <= 0) {
            clearInterval(fadeInterval); // 투명도가 0이 되면 반복 종료
        }
    }, 5); // 각 단계의 시간 간격 (밀리초)
}, 5100); // 5.1초 동안 대기 (밀리초)

    setTimeout(function() {
    opacity = 0;
    fadeInterval = setInterval(function() {
    opacity += 0.01; // 투명도 감소량
    after.style.opacity = opacity;

    if (opacity >= 1) {
    clearInterval(fadeInterval); // 투명도가 0이 되면 반복 종료
}
}, 5); // 각 단계의 시간 간격 (밀리초)
}, 6000); // 5.889초 동안 대기 (밀리초)

    function GchangeImage() {
    after = imageG
    opacity = 1;
    fadeInterval = setInterval(function() {
    opacity -= 0.01; // 투명도 감소량
    showImage.style.opacity = opacity;

    if (opacity <= 0) {
    clearInterval(fadeInterval); // 투명도가 0이 되면 반복 종료
}
    console.log("B")
}, 5); // 각 단계의 시간 간격 (밀리초)

    fadeInterval = setInterval(function() {
    opacity += 0.01; // 투명도 감소량
    after.style.opacity = opacity;

    if (opacity >= 1) {
    clearInterval(fadeInterval); // 투명도가 0이 되면 반복 종료
}
    console.log("C")
}, 1500); // 각 단계의 시간 간격 (밀리초)
}

    G.addEventListener('click', GchangeImage)