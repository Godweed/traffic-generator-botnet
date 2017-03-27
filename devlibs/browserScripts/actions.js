document.body.scrollTop = 0;
scrollTo(document.body, document.body.scrollHeight, 1250);
PRETENDER_wait(getRandomInt(5, 7));
scrollTo(document.body, 0, 1250);
/*
В общем порядке, алгоритм един: 
    — получить объект узла DOM, на который будет вешаться событие;
    — создать объект необходимого модуля событий;
    — инициализировать объект события;
    — назначить событие на необходимый узел DOM;
*/
//
// initMouseEvent ( 'type', bubbles, cancelable, windowObject, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget )
//    

/*
// Create events:
var ConstructorMouseEvent = document.createEvent('MouseEvents')
    , ConstructorKeyEvent = document.createEvent('UIEvents')
    // Events targets:    
    , $header = document.querySelector('header')
    , $nav = document.querySelector(window.D_O_M.header)
    , $content = document.querySelector('div#main-content')
//Init events:
ConstructorKeyEvent.initUIEvent('keyup', true, true, window, 1);
ConstructorKeyEvent.keyCode = getRandomInt(1, 30);
// Emit:
ConstructorMouseEvent.initMouseEvent('mousemove', true, true, window, 1, getRandomInt(10, 900), getRandomInt(10, 7500), getRandomInt(10, 900), getRandomInt(10, 7500), false, false, true, false, 0, null);
$header.dispatchEvent(ConstructorMouseEvent);
$section.dispatchEvent(ConstructorMouseEvent);
$IMG.dispatchEvent(ConstructorMouseEvent);
$iframe.dispatchEvent(ConstructorMouseEvent);
$p.dispatchEvent(ConstructorMouseEvent);
 
 
ConstructorMouseEvent.initMouseEvent('click', true, true, window, 1, 500, getRandomInt(100, 5000), 300, getRandomInt(10, 500), false, false, true, false, 0, null);
$section.dispatchEvent(ConstructorMouseEvent);
$IMG.dispatchEvent(ConstructorMouseEvent);
$iframe.dispatchEvent(ConstructorMouseEvent);
$p.dispatchEvent(ConstructorMouseEvent);
 
$div.dispatchEvent(ConstructorKeyEvent);
$header.dispatchEvent(ConstructorKeyEvent);
*/

//
// 1) Хэдер
//
PRETENDER_wait(getRandomInt(2, 4));
PRETENDER_mousemove(D_O_M.header);
PRETENDER_wait(getRandomInt(3, 6));
//
// 2) Контентная часть
//   
PRETENDER_mousemove(D_O_M.content);
//
// 3) СайдБар
//
PRETENDER_wait(getRandomInt(3, 6));
PRETENDER_mousemove(D_O_M.aside);
PRETENDER_wait(getRandomInt(3, 6));
//
// 4) Выделение текста с последующим копированием
// 

//
// 5) Футер
// 
PRETENDER_mousemove(D_O_M.footer);
PRETENDER_wait(getRandomInt(2, 5));
/*
(function () {
    return (function () {
        setTimeout(function () {
            scrollTo(document.body, 0, 1500)
        }, 1000);
        setTimeout(function () {
            scrollTo(document.body, document.body.scrollHeight, 1500)
        }, 5000);
    })();
})();
*/
