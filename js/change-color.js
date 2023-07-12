var colorNmae = "deep_purple"
var nowColor = "DP"
function changeColor(color) {
    if (color === "DP") {
        colorName = "deep_purple"
    } else if (color === "G") {
        colorName = "gold"
    } else if (color === "S") {
        colorNmae = "silver"
    } else {
        colorNmae = "space_black"
    }



    if (changeAllow === true) {
        if (nowColor !== color) {
            document.getElementById("iphone" + nowColor).style.opacity = 0
            setTimeout(function() {
                document.getElementById("iphone" + color).style.opacity = 1
                document.getElementById("DIPicture").src = "./source/dynamic_island_" + colorNmae + "__exowosw6732a_large.jpg"
            }, 1000); // 1000밀리초 = 1초

            nowColor = color
        }
    }

}