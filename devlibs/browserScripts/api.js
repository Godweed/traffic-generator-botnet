//
window.D_O_M = {
    header: "ul#primary-menu",
    aside: "section#recent-posts-2 ul",
    content: "main#main",
    logo: "h1.site-title a"
};
/**
 * Генерирует случайное число, неменее и не более указанных.
 * 
 * @param  {Number} min          минимальная величина
 * @param  {Number} max         максимальная величина
 * @return   {Number}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * "Ждёт" - бездействует указанное количество секунд (блокирует EventLoop)
 * 
 * @param  {Number}   seconds     
 */
function PRETENDER_wait(seconds) {
    var dt = new Date();
    while ((new Date()) - dt <= seconds * 1000) { /* Do nothing */ }
};
/**
 * Отправляет событие мыши в элемент DOM по предоставленному селектору.
 * 
 * @param  String   type        Type of event to dispatch
 * @param  String   selector   A CSS3 selector to the element to click
 * @param  {Number} x          X position
 * @param  {Number} y          Y position
 * @return   Boolean
 */
function PRETENDER_mouseEvent(type, selector, x, y) {
    var elem = document.querySelector(selector);
    if (!elem) { console.warn('PRETENDER_mouseEvent dispatch element not found'); return; }
    var convertNumberToIntAndPercentToFloat = function (a, def) {
        return !!a && !isNaN(a) && parseInt(a, 10) ||
            !!a && !isNaN(parseFloat(a)) && parseFloat(a) >= 0 &&
            parseFloat(a) <= 100 && parseFloat(a) / 100 || def;
    };
    try {
        var evt = document.createEvent("MouseEvents"), px = convertNumberToIntAndPercentToFloat(x, 0.5), py = convertNumberToIntAndPercentToFloat(y, 0.5);
        try {
            var bounds = elem.getBoundingClientRect();
            px = Math.floor(bounds.width * (px - (px ^ 0)).toFixed(10)) + (px ^ 0) + bounds.left;
            py = Math.floor(bounds.height * (py - (py ^ 0)).toFixed(10)) + (py ^ 0) + bounds.top;
        } catch (e) {
            px = 1; py = 1;
        }

        evt.initMouseEvent(type, true, true, window, 1, 1, 1, px, py, false, false, false, false, type !== "contextmenu" ? 0 : 2, elem);

        elem.dispatchEvent(evt);
        return true;
    } catch (e) {
        console.warn("Failed dispatching " + type + "mouse event on " + selector + ": " + e, "error");
        return false;
    }
}
/**
 * Плавно скролит к указанной координате с указанной продолжительностью
 * 
 * @param  {String}      element    Должен быть document
 * @param  {Number}   to             Позиция к которой нужно проскролить
 * @param  {Number}   duration   Продолжительность скроллинга
 * @return -
 */
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
/**
 * Ключевая функция. 
 * Скролит до предоставленного селектора, водит по нему мышкой (кликает).
 * 
 * 
 * @param  String   selector   A CSS3 selector to the element to click
 */
function PRETENDER_mousemove(selector) {

}
/**
 * Копирует текст.
 * 
 * 
 * @param  -
 */
function PRETENDER_copytext() {

}