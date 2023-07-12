var nowColor = "DP"
function changeColor(color) {
    if (changeAllow === true) {
        if (nowColor !== color) {
            document.getElementById("iphone" + nowColor).style.opacity = 0
            setTimeout(function() {
                document.getElementById("iphone" + color).style.opacity = 1
                document.getElementById("DIPicture").src = "./source/DI-" + color + ".jpg"
                document.getElementById("A16").style.backgroundImage = 'url(".././source/chip-' + color + '.jpg")'
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
            }, 1000); // 1000밀리초 = 1초

            nowColor = color
        }
    }

}