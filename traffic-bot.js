/*

Step~1) Referef-или источник захода.
             Мы должны попадать на наш  MFA сайт разными способами: 
                1- напрямую
                2- через поисковик (гугд/бинг)
                3- через youtube
                4- по искусственно созданной ссылке с сайта на аналогичную тематику

Step~2) HomoSapiens.
            Эмулируем человека, не менее 5 минут:
            в навбаре ряд ссылок - по >=60% проходим ()=>
                -скролим + водим мышкой, кликаем на картинки.
                -смотрим видео на ютубе(афилированный канал), а потом возвращаемся назад

Step~3) В перспективе зачейнить такие сайты

Step~4) Чтобы не спалиться:
                - CTR не > 15%
                - кол-во переходов (лучше эмулировать)
                - длительность пребывания
                - Заходить на сайт через реферер, а ещё лучше через поисковик
                - после клика на рекламу оставаться на сайте

*/

//
// BOT SETTINGS:
//
var S = require('./devlibs/settings.json')
    , REF = require('./devlibs/referer.js')
    , UA_storage = require('./devlibs/UA_storage.js')
    , keywords = require('./devlibs/keywords.js')
    , custom_cookie = require('./devlibs/cookie.js').google
    , startRandomRefererWashingPoint = REF.static[getRandomInt(0, REF.static.length - 1)]
    //, PRETENDER_cookie = custom_cookie[getRandomInt(0, custom_cookie.length - 1)]
    , PRETENDER_headers = {
        "Cookie": custom_cookie,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        "Cache-Control": "no-cache",
        "Origin": startRandomRefererWashingPoint,
        'Referer': startRandomRefererWashingPoint,
        'X-Forwarded-For': startRandomRefererWashingPoint,
        "User-Agent": generateNewUserAgent()
    }

    , casper = require('casper').create({
        waitTimeout: 70000,
        stepTimeout: 70000,
        viewportSize: { width: getRandomInt(1024, 2200), height: getRandomInt(768, 1900) },
        pageSettings: {
            customHeaders: PRETENDER_headers,
            loadImages: true,
            loadPlugins: true
        },
        logLevel: "debug",
        verbose: true
    })

    , mouse = require("mouse").create(casper);
//
// BOT INIT:
//

// Орёл или решка?
var startStepChance = getRandomInt(1, 2);
if (startStepChance == 10) {
    /*
     Шаг 1 - стартуем с поисковой выдачи
    */
    casper.start()//.userAgent(generateNewUserAgent()).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900))      
        .thenOpen('https://google.com/', function () {
            this.waitForSelector('form[action="/search"]');
        })
        .then(function () {
            this.fill('form[action="/search"]', { q: 'web-dreamteam.com insurance ' + keywords[getRandomInt(0, keywords.length - 1)] }, true);
            this.waitForSelector('h3.r a');
        })
        .then(function () {
            this.evaluate(function () {
                for (var i = 0; i < document.querySelectorAll('h3.r a').length; i += 1) {
                    if (
                        document.querySelectorAll('h3.r a')[i].getAttribute('href').indexOf('web-dreamteam.com') !== -1
                    ) {
                        document.querySelectorAll('h3.r a')[i].click();
                    }
                }
                return document.body.innerHTML;
            });
            this.capture('ggl.png');
        });



} else {
    /*
     Шаг 1 - стартуем с реферера
    */
    casper.start().viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
        .thenOpen(startRandomRefererWashingPoint, function () {
            this.echo(this.getCurrentUrl());
        })
        .then(function () {
            this.capture('startPoint.png');
            this.evaluate(function () {
                var fakeLink = document.createElement('a');
                fakeLink.setAttribute('href', 'http://web-dreamteam.com');
                fakeLink.setAttribute('id', "washingpoint")
                document.body.appendChild(fakeLink);
            });
        })
        /*
         Шаг 2 - клик по фейковой ссылке с реферера и переход на наш MFA
        */
        .then(function () {
            this.click('a#washingpoint');
            //this.echo("=== Кликаю на реферер");
        });
}

// NEXT ()=>

casper.waitForUrl(S.MFA, function () {
    casper.viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent());
    //this.echo("=== Дождался загрузки URL ВЕБДРИМТИМа");
    //this.echo(this.getCurrentUrl());
})

casper.waitForSelector('body', function () {
    //this.echo("=== Дождался загрузки контента ВЕБДРИМТИМа");
    //this.echo(this.getCurrentUrl());       
})


    //.wait(5 * 1000, function () { })
    /*
     Шаг 3 - притворяемся порядочным американцем ;-)   
    */
    .then(function () {
        PRETENDER_homoSapiens__backend(this);
    })
    .then(function () {
        this.evaluate(PRETENDER_homoSapiens__frontend_scroll);
    })
    .then(function () {
        PRETENDER_homoSapiens__backend(this);
    })
    .then(function () {
        this.evaluate(PRETENDER_homoSapiens__frontend);
    })
    .then(function () {
        PRETENDER_homoSapiens__backend(this);
    })
    .then(function () {
        this.evaluate(PRETENDER_homoSapiens__frontend);
    })
    .then(function () {
        PRETENDER_homoSapiens__backend(this);
    })
    .then(function () {
        this.evaluate(PRETENDER_homoSapiens__frontend_scroll);
    })
    .then(function () {
        this.evaluate(PRETENDER_homoSapiens__frontend);
    })
    //
    //Bot start
    //
    .run(function () {
        this.echo('</> Casper TRAFFIC-GENERATOR run </>').exit();
    });
//
//
// utils:
//
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function generateNewUserAgent() {
    return UA_storage[getRandomInt(0, UA_storage.length - 1)];
}
//
// притворяемся человеком:    зарандомить порядок действий, кроме перехода к след.  вкладке
//
/*
    X / Y - coordinates
    mouseup, mousedown, click, dblclick, mousemove, mouseover, mouseout , mouseenter, mouseleave , contextmenu
*/
function PRETENDER_homoSapiens__backend(self) {
    self.scrollToBottom();
    for (var i = 0; i < 5; i += 1) {
        self.mouse.doubleclick(getRandomInt(100, 1000), getRandomInt(10, 7400));
    }
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    self.scrollToBottom();
    for (var i = 0; i < 500; i += 1) {
        self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
    }
    self.sendKeys('section.chlidren_' + getRandomInt(1, 4) + ' iframe ', 'space');
    self.click('section.chlidren_' + getRandomInt(1, 4) + '  iframe');
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    for (var i = 0; i < 100; i += 1) {
        self.mouseEvent('mousemove', '#main-content', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
    }
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    for (var i = 0; i < 5; i += 1) {
        self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7000));
    }
    self.wait(3 * 1000, function () { });
    //self.reload(function () { });
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(6000, 7100));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(2200, 2300));
        self.scrollTo(getRandomInt(200, 800), getRandomInt(4400, 3500));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(4600, 3900));
    }
    for (var i = 0; i < 5; i += 1) {
        self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7200));
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 50; i += 1) {
        self.mouse.move(getRandomInt(100, 1000), getRandomInt(10, 2000));
        self.mouse.move(getRandomInt(200, 1100), getRandomInt(2000, 3000));
        self.mouse.move(getRandomInt(300, 1000), getRandomInt(3000, 4000));
        self.mouse.move(getRandomInt(400, 1000), getRandomInt(4000, 5000));
        self.mouse.move(getRandomInt(500, 1000), getRandomInt(5000, 6000));
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    self.sendKeys('section.chlidren_' + getRandomInt(1, 4) + '  iframe', 'space');
    for (var i = 0; i < 50; i += 1) {
        self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
    }
    self.scrollToBottom();
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
        self.mouseEvent('mousemove', 'aside', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 50; i += 1) {
        self.mouseEvent('mousemove', 'section.chlidren_' + getRandomInt(1, 4) + ' img', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.click('section.chlidren_' + getRandomInt(1, 4) + '  iframe');
    }
    self.wait(3 * 1000, function () { });
    for (var i = 0; i < 5; i += 1) {
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
        //self.click('section.chlidren_' + getRandomInt(1, 4) + ' img');
        self.wait(1, function () { });
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 5; i += 1) {
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(3000, 7400));
        self.click('section.chlidren_' + getRandomInt(1, 4) + ' img');
        self.wait(1, function () { });
    }
    self.scrollToBottom();
    //self.reload(function () { });
    self.mouseEvent('dblclick', 'section.chlidren_' + getRandomInt(1, 4) + ' iframe', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
    //
    // Идём на следующий раздел сайта:
    //
    self.click('header nav > a:nth-child(' + getRandomInt(1, 12) + ')');
    self.waitForUrl(/\.html$/, function () {
        self.echo('redirected to INSIDE.html');
    });
    self.mouseEvent('dblclick', 'section.chlidren_' + getRandomInt(1, 4), getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
    for (var i = 0; i < 20; i += 1) {
        self.mouse.move(getRandomInt(700, 600), getRandomInt(4800, 4500));
        self.mouse.move(getRandomInt(700, 800), getRandomInt(5200, 5000));
        self.mouse.move(getRandomInt(500, 900), getRandomInt(5400, 5300));
        self.mouse.move(getRandomInt(400, 300), getRandomInt(5800, 5700));
        self.mouse.move(getRandomInt(100, 200), getRandomInt(6000, 5900));
    }
    self.mouseEvent('dblclick', 'section.chlidren_' + getRandomInt(1, 4) + ' p', getRandomInt(5, 95) + '%', getRandomInt(5, 95) + '%');
    self.sendKeys('body', 'a', { modifiers: 'ctrl' });
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 20; i += 1) {
        self.mouse.move(getRandomInt(100, 200), getRandomInt(10, 200));
        self.mouse.move(getRandomInt(200, 300), getRandomInt(100, 300));
        self.mouse.move(getRandomInt(300, 400), getRandomInt(200, 400));
        self.mouse.move(getRandomInt(400, 500), getRandomInt(300, 500));
        self.mouse.move(getRandomInt(500, 600), getRandomInt(400, 600));
    }
    self.click('section.chlidren_' + getRandomInt(1, 4) + '  iframe');
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    for (var i = 0; i < 10; i += 1) {
        self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
    }
    self.sendKeys('body', 'с', { modifiers: 'ctrl' });
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(10, 1000));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(100, 2500));
        self.scrollTo(getRandomInt(200, 800), getRandomInt(200, 3700));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(300, 4900));
    }
    for (var i = 0; i < 5; i += 1) {
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
        self.click('section.chlidren_' + getRandomInt(1, 4) + ' iframe');
        self.wait(1, function () { });
    }
    self.click('header nav > a:nth-child(' + getRandomInt(1, 12) + ')');
    for (var i = 0; i < 5; i += 1) {
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
        self.click('section.chlidren_' + getRandomInt(1, 4) + ' img');
        self.wait(1, function () { });
    }
}
/*
В общем порядке, алгоритм един: 
    — получить объект узла DOM, на который будет вешаться событие;
    — создать объект необходимого модуля событий;
    — инициализировать объект события;
    — назначить событие на необходимый узел DOM;
*/
function PRETENDER_homoSapiens__frontend() {
    document.body.scrollTop = 0;
    var ConstructorMouseEvent = document.createEvent('MouseEvents')
        , ConstructorKeyEvent = document.createEvent('UIEvents')
        , $header = document.querySelector('header nav')
        , $div = document.querySelector('div#main-content')
        , $section = document.querySelector('section.chlidren_' + getRandomInt(1, 4))
        //  , $IMG = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' img')
        , $iframe = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + '  iframe')
        , $p = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' p');
    ConstructorKeyEvent.initUIEvent('keyup', true, true, window, 1);
    ConstructorKeyEvent.keyCode = getRandomInt(1, 30);
    // Emit:
    for (var i = 0; i < 100; i += 1) {
        document.body.scrollTop += 20;
        ConstructorMouseEvent.initMouseEvent('mousemove', true, true, window, 1, getRandomInt(10, 900), getRandomInt(10, 7500), getRandomInt(10, 900), getRandomInt(10, 7500), false, false, true, false, 0, null);
        $header.dispatchEvent(ConstructorMouseEvent);
        $section.dispatchEvent(ConstructorMouseEvent);
        //$IMG.dispatchEvent(ConstructorMouseEvent);
        $iframe.dispatchEvent(ConstructorMouseEvent);
        $p.dispatchEvent(ConstructorMouseEvent);
    }
    document.body.scrollTop = 7400;
    for (var i = 0; i < 30; i += 1) {
        document.body.scrollTop -= 20;
        ConstructorMouseEvent.initMouseEvent('click', true, true, window, 1, 500, getRandomInt(100, 5000), 300, getRandomInt(10, 500), false, false, true, false, 0, null);
        $section.dispatchEvent(ConstructorMouseEvent);
        //$IMG.dispatchEvent(ConstructorMouseEvent);
        $iframe.dispatchEvent(ConstructorMouseEvent);
        $p.dispatchEvent(ConstructorMouseEvent);

        $div.dispatchEvent(ConstructorKeyEvent);
        $header.dispatchEvent(ConstructorKeyEvent);
    }
}
function PRETENDER_homoSapiens__frontend_scroll() {
    document.body.scrollTop = 0;
    for (var i = 0; i < 3700; i += 1) {
        document.body.scrollTop += 2;
    }
    for (var i = 0; i < 3700; i += 1) {
        document.body.scrollTop -= 2;
    }
}
//
// initMouseEvent ( 'type', bubbles, cancelable, windowObject, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget )
//
/*
casper.on('resource.requested', function (requestData, networkRequest) {
    if (requestData.url == 'https://mc.yandex.ru/metrika/watch.js' || requestData.url == "https://www.google-analytics.com/analytics.js") {
        console.log('Request (#' + requestData.url + ')');
        console.log('Request.requestData (' + JSON.stringify(requestData) + ')');
        console.log('Request__networkRequest {' + networkRequest + '}');
    }
});
casper.on('resource.received', function (response) {
    console.log('|===>>>  Response (#' + response.id + ', stage "' + response.stage + '"): ' + JSON.stringify(response));
});
*/