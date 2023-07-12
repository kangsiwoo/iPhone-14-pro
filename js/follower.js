var follower = document.getElementById("follower");
var scrollTop = document.documentElement.scrollTop;
var oldScroll = document.documentElement.scrollTop;
var follow = true

window.addEventListener('scroll', function() {
    scrollTop = document.documentElement.scrollTop;
    console.log(scrollTop)
    if (scrollTop > 145) {
        follow = false
        follower.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
    } else {
        follow = true
        follower.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
    if (follow) {

        var translateY = parseInt(getComputedStyle(follower).transform.split(',')[5]) || 0;
        follower.style.transform = `translateY(${translateY - (scrollTop - oldScroll)}px)`;
        oldScroll = scrollTop;
    } else {

    }
});
