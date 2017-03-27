//
window.D_O_M = {
    header: "ul#primary-menu",
    logo: "h1.site-title a",
    aside: "section#recent-posts-2 ul",
    content: "main#main",
    footer: "footer.site-footer"
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
    var dispatchElement = document.querySelector(selector);
    if (!dispatchElement) {
        throw new Error('Не найден элемент для  <PRETENDER_mousemove>');
    }
    var loop = getRandomInt(5, 10)
        , minX = dispatchElement.offsetLeft
        , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
        , minY = dispatchElement.offsetTop
        , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight
        , foursquare = {
            1: {
                minX: dispatchElement.offsetLeft,
                maxX: dispatchElement.offsetLeft + (dispatchElement.offsetWidth / 2),
                minY: dispatchElement.offsetTop,
                maxY: dispatchElement.offsetTop + (dispatchElement.offsetHeight / 2)
            },
            2: {
                minX: dispatchElement.offsetLeft + (dispatchElement.offsetWidth / 2),
                maxX: dispatchElement.offsetLeft + dispatchElement.offsetWidth,
                minY: dispatchElement.offsetTop,
                maxY: dispatchElement.offsetTop + (dispatchElement.offsetHeight / 2)
            },
            3: {
                minX: dispatchElement.offsetLeft + dispatchElement.offsetWidth,
                maxX: dispatchElement.offsetLeft + (dispatchElement.offsetHeight / 2),
                minY: dispatchElement.offsetTop + (dispatchElement.offsetHeight / 2),
                maxY: dispatchElement.offsetTop + dispatchElement.offsetHeight
            },
            4: {
                minX: dispatchElement.offsetLeft + (dispatchElement.offsetWidth / 2),
                maxX: dispatchElement.offsetLeft + dispatchElement.offsetWidth,
                minY: dispatchElement.offsetTop + (dispatchElement.offsetHeight / 2),
                maxY: dispatchElement.offsetTop + dispatchElement.offsetHeight
            }
        }
        , foursquareMooving = function () {
            var sqr = foursquare[getRandomInt(1, 4)];
            PRETENDER_mouseEvent(
                'mousemove', selector, getRandomInt(sqr.minX, sqr.maxX), getRandomInt(sqr.minY, sqr.maxY)
            );
        };

    scrollTo(document.body, dispatchElement.offsetTop, 2000);
    //
    //
    var dt = new Date();
    while ((new Date()) - dt <= loop * 1000) {
        PRETENDER_wait(1);
        foursquareMooving();
    }
    //
    //
}
/**
 * Копирует текст.
 * 
 * 
 * @param  -
 */
function PRETENDER_copytext() {

}
/**
 * Кликает по рекламе.
 * 
 * 
 * @param  -
 */
/*
function fraudADV() {
    var AdSenseINS = document.getElementsByClassName('adsbygoogle')
        , dispatchElement = AdSenseINS[getRandomInt(0, AdSenseINS.length - 1)]
        , minX = dispatchElement.offsetLeft
        , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
        , minY = dispatchElement.offsetTop
        , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight;
    scrollTo(document.body, dispatchElement.offsetTop, 2000);
    PRETENDER_wait(1);
    //
    //
    //
    var convertNumberToIntAndPercentToFloat = function (a, def) {
        return !!a && !isNaN(a) && parseInt(a, 10) ||
            !!a && !isNaN(parseFloat(a)) && parseFloat(a) >= 0 &&
            parseFloat(a) <= 100 && parseFloat(a) / 100 || def;
    };
    try {
        var evt = document.createEvent("MouseEvents"), px = convertNumberToIntAndPercentToFloat(getRandomInt(minX, maxX), 0.5), py = convertNumberToIntAndPercentToFloat(getRandomInt(minY, maxY), 0.5);
        try {
            var bounds = dispatchElement.getBoundingClientRect();
            px = Math.floor(bounds.width * (px - (px ^ 0)).toFixed(10)) + (px ^ 0) + bounds.left;
            py = Math.floor(bounds.height * (py - (py ^ 0)).toFixed(10)) + (py ^ 0) + bounds.top;
        } catch (e) {
            px = 1; py = 1;
        }
        evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
        dispatchElement.dispatchEvent(evt);

        //var frame=document.getElementsByClassName('img_ad');
        var iframe = dispatchElement.childNodes[0].childNodes[0].childNodes[0]//.contentWindow.document.getElementsByTagName('iframe')[1].getElementsByClassName('img_ad');
        var iframeContentWindow = iframe.contentWindow.document.getElementsByTagName('iframe')[1] || iframe.contentWindow.document.getElementsByTagName('iframe')[0];
        var clickFraudTarget = iframeContentWindow.contentWindow.document.getElementById("aw0");
        //clickFraudTarget.click();
        evt.initMouseEvent('click', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, clickFraudTarget);
        clickFraudTarget.dispatchEvent(evt);
        return true;
    } catch (e) {
        console.warn("Failed dispatching <mousemove> mouse event on ins: " + e, "error");
        return false;
    }
    //
    //
    //
}
*/