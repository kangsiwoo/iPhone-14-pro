var follower = document.getElementById("follower");
var scrollTop = document.documentElement.scrollTop;
var oldScroll = document.documentElement.scrollTop;
var follow = true;

window.addEventListener('scroll', function() {
    scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop + "\t||\t" + oldScroll + "\t||\t" + follower.style.top);

    if (scrollTop > 131) {
        follow = false;
        follower.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        follower.style.top = "0";
        console.log("A")
    } else {
        follow = true;
        follower.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

    if (follow) {
        var topValue = parseInt(follower.style.top) || 0;
        follower.style.top = `${topValue - (scrollTop - oldScroll)}px`;
        oldScroll = scrollTop;
    }
});
