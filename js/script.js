window.onscroll = function() {scrollUp()};
function returnTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function scrollUp() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        document.getElementById("topbutton").style.display = "block";
    } else {
        document.getElementById("topbutton").style.display = "none";
    }
}
