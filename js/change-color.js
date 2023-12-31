var nowColor = "DP"
var iphoneColorDisplay = "Deep Purple"
function changeColor(color) {
    if (changeAllow === true) {
        if (nowColor !== color) {
            changeAllow = false
            if (color === "DP") {
                iphoneColorDisplay = "Deep Purple"
            } else if (color === "G") {
                iphoneColorDisplay = "Gold"
            } else if (color === "S") {
                iphoneColorDisplay = "Silver"
            } else {
                iphoneColorDisplay = "Space Black"
            }
            document.getElementById("iphone" + nowColor).style.opacity = 0
            document.getElementById("iphoneColorDisplay").style.opacity = 0
            if (color === "DP") {
                document.querySelectorAll(".textGradient").forEach(element => {
                    element.style.backgroundImage = 'linear-gradient(180deg,#ffb6ff,#b344ff)';
                });
            } else if (color === "G") {
                document.querySelectorAll(".textGradient").forEach(element => {
                    element.style.backgroundImage = 'linear-gradient(180deg,#ffe993,#eb831c)';
                });
            } else if (color === "S") {
                document.querySelectorAll(".textGradient").forEach(element => {
                    element.style.backgroundImage = 'linear-gradient(180deg,#c6deff,#516cec)';
                });
            } else {
                document.querySelectorAll(".textGradient").forEach(element => {
                    element.style.backgroundImage = 'linear-gradient(180deg,#dbcedb,#60657f)';
                });
            }
            document.getElementById("DIPicture").src = "./source/DI-" + color + ".jpg"
            document.getElementById("A16").style.backgroundImage = 'url("https://raw.githubusercontent.com/kangsiwoo/Apple-Site-Clone/main/source/chip-' + color + '.jpg")'
            document.querySelectorAll(".textGradient").forEach(element => {
                element.style.opacity = 1;
            });
            setTimeout(function() {

                document.getElementById("iphoneColorDisplay").textContent = iphoneColorDisplay
                document.getElementById("iphoneColorDisplay").style.opacity = 1
                document.getElementById("iphone" + color).style.opacity = 1

            }, 1000); // 1000밀리초 = 1초

            nowColor = color

            setTimeout(function() {
                changeAllow = true
            }, 2000);
        }
    }

}