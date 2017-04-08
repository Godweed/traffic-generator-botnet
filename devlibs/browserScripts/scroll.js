document.body.scrollTop = 0; document.body.scrollTop = 0;
var step = 3000
      , ins = document.querySelectorAll('ins');

setTimeout(function () {
      scrollTo(document.body, document.body.scrollHeight, getRandomInt(1400, 1900));
}, step / 3);

setTimeout(function () {
      scrollTo(document.body, 0, getRandomInt(1000, 1500));
}, 4500);
/*
setTimeout(function () {
      scrollTo(document.body, ins[0].scrollHeight, getRandomInt(1000, 1500));
}, step + step);
setTimeout(function () {
      scrollTo(document.body, ins[1].scrollHeight, getRandomInt(1000, 1500));
}, step * 3);
try {
      setTimeout(function () {
            scrollTo(document.body, ins[2].scrollHeight, getRandomInt(1000, 1500));
      }, step * 4);
} catch (error) { }
*/
//
//
//
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
function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }