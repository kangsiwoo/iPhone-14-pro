var firstchange = true
var nowColor = "DP"
function changeColor(color) {
    if (firstchange === false) {
        if (changeAllow === true) {
            if (nowColor !== color) {
                document.getElementById("iphone" + nowColor).style.opacity = 0
                setTimeout(function() {
                    document.getElementById("iphone" + color).style.opacity = 1
                }, 1000); // 1000밀리초 = 1초

                nowColor = color
            }
        }
    }
    else {
        setTimeout(function () {
            if (changeAllow === true) {
                if (nowColor !== color) {
                    document.getElementById("iphone" + nowColor).style.opacity = 0
                    setTimeout(function() {
                        document.getElementById("iphone" + color).style.opacity = 1
                    }, 1000); // 1000밀리초 = 1초

                    nowColor = color
                    firstchange = false
                }
            }
        }, 1000)
    }


}