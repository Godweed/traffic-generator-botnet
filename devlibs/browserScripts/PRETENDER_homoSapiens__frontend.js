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
for (var r = 0; r < 1000; r += 1) {
    (function () {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        document.body.scrollTop = 0;
        var ConstructorMouseEvent = document.createEvent('MouseEvents')
            , ConstructorKeyEvent = document.createEvent('UIEvents')
            , $header = document.querySelector('header nav')
            , $div = document.querySelector('div#main-content')
            , $section = document.querySelector('section.chlidren_' + getRandomInt(1, 4))
            , $IMG = document.querySelector('section.chlidren_1 img')
            , $iframe = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + '  iframe')
            , $p = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' p');
        ConstructorKeyEvent.initUIEvent('keyup', true, true, window, 1);
        ConstructorKeyEvent.keyCode = getRandomInt(1, 30);
        // Emit:
        for (var i = 0; i < 300; i += 1) {
            document.body.scrollTop += 20;
            ConstructorMouseEvent.initMouseEvent('mousemove', true, true, window, 1, getRandomInt(10, 900), getRandomInt(10, 7500), getRandomInt(10, 900), getRandomInt(10, 7500), false, false, true, false, 0, null);
            $header.dispatchEvent(ConstructorMouseEvent);
            $section.dispatchEvent(ConstructorMouseEvent);
            $IMG.dispatchEvent(ConstructorMouseEvent);
            $iframe.dispatchEvent(ConstructorMouseEvent);
            $p.dispatchEvent(ConstructorMouseEvent);
        }
        document.body.scrollTop = 7400;
        for (var j = 0; j < 300; j += 1) {
            document.body.scrollTop -= 20;
            ConstructorMouseEvent.initMouseEvent('click', true, true, window, 1, 500, getRandomInt(100, 5000), 300, getRandomInt(10, 500), false, false, true, false, 0, null);
            $section.dispatchEvent(ConstructorMouseEvent);
            $IMG.dispatchEvent(ConstructorMouseEvent);
            $iframe.dispatchEvent(ConstructorMouseEvent);
            $p.dispatchEvent(ConstructorMouseEvent);

            $div.dispatchEvent(ConstructorKeyEvent);
            $header.dispatchEvent(ConstructorKeyEvent);
        }
    })();
}
