document.body.scrollTop = 0;
setTimeout(function () {
    scrollTo(document.body, document.body.scrollHeight, 1250)
}, 1000);
setTimeout(function () {
    scrollTo(document.body, 0, 1250)
}, 5000);
function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        increment = 20;

    var animateScroll = function (elapsedTime) {
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);
        element.scrollTop = position;
        if (elapsedTime < duration) {
            setTimeout(function () {
                animateScroll(elapsedTime);
            }, increment);
        }
    };

    animateScroll(0);
}
function easeInOut(currentTime, start, change, duration) {
    currentTime /= duration / 2;
    if (currentTime < 1) {
        return change / 2 * currentTime * currentTime + start;
    }
    currentTime -= 1;
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}