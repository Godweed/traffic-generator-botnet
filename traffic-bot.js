//
// BOT SETTINGS:
//
var S = require('./devlibs/settings.json') // параметры вебстраницы
    , REF = require('./devlibs/referer.js')  // рефереры
    , UA_storage = require('./devlibs/UA_storage.js') // юзерЭгенты
    , keywords = require('./devlibs/keywords.js') // ключевые слова для поиска
    , custom_cookie = require('./devlibs/cookie.js').google // куки
    , startRandomRefererWashingPoint = REF.static[getRandomInt(0, REF.static.length - 1)]  // стартовая точка
    //, PRETENDER_cookie = custom_cookie[getRandomInt(0, custom_cookie.length - 1)]
    , PRETENDER_headers = {
        //"Cookie": custom_cookie,    
        'Accept-Language': 'en-US,en;q=0.9',
        "Cache-Control": "no-cache",
        "Origin": startRandomRefererWashingPoint,
        'Referer': startRandomRefererWashingPoint,
        'X-Forwarded-For': startRandomRefererWashingPoint,
        "User-Agent": generateNewUserAgent()
    }

    , casper = require('casper').create({
        waitTimeout: 60000,
        stepTimeout: 60000,
        viewportSize: { width: getRandomInt(1024, 2200), height: getRandomInt(768, 1900) },
        pageSettings: {
            //customHeaders: PRETENDER_headers,
            loadImages: true,
            loadPlugins: true
        },
        logLevel: "debug",
        verbose: true
    })

    , mouse = require("mouse").create(casper);
/*
    , kindOfCrawling = [
        'direct'
    ]
    //
    // BOT INIT:
    //
    , startStepChance = kindOfCrawling[getRandomInt(0, kindOfCrawling.length - 1)];
console.log('< Botnet start by  {' + startStepChance + '} />');

 //        Шаг 1 - стартуем с..... 

if (startStepChance == 'organicSearch') {
    //
    // ...поисковой выдачи
    //
    casper.start().userAgent(generateNewUserAgent()).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900))
        .thenOpen('https://yandex.ru/search/?text=web&lr=213', function () {
            this.page.injectJs('devlibs/keywordsInjector.js');
            var inject_keywords = this.evaluate(function () {
                return window.keywords;
            });
            console.log("Мы передали?", inject_keywords);
            this.waitForSelector('a.organic__url');
        })
        .viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
        .then(function () {
            this.evaluate(function () {
                document.querySelectorAll('.link_cropped_no')[1].removeAttribute('onmousedown');
                document.querySelectorAll('.link_cropped_no')[1].removeAttribute('href');
                document.querySelectorAll('.link_cropped_no')[1].setAttribute('href', 'http://web-dreamteam.com/');
                document.querySelectorAll('.link_cropped_no')[1].setAttribute('onmousedown', 'rc(this,"http://web-dreamteam.com/")');
            });
        })
        .then(function () {
            var searchOutputRef = this.evaluate(function () {
                //document.querySelectorAll('.link_cropped_no')[1].click();
                return document.querySelectorAll('.link_cropped_no')[1].getAttribute('href') + '  &   ' + document.querySelectorAll('.link_cropped_no')[1].getAttribute('onmousedown');
            });
            console.log("=== Кликаю на реферер из поисковой выдачи:    ", searchOutputRef);
            //this.capture('y++.png');
            this.click('a[href="http://web-dreamteam.com/"]');
        });
} else if (startStepChance == 'referer') {
    //
    // ...реферера
    //
    casper.start(startRandomRefererWashingPoint).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
        .waitForSelector('body', function () {
            console.log("=== Дождался загрузки контента для создания реферера ", this.getCurrentUrl());
        })
        .then(function () {
            //this.capture('startPoint.png');
            this.page.injectJs('devlibs/injectURL.js');
            this.evaluate(function () {
                var fakeLink = document.createElement('a');
                fakeLink.setAttribute('href', window.targetURL);
                fakeLink.setAttribute('id', "washingpoint")
                document.body.appendChild(fakeLink);
            });
        })
        .then(function () {
            this.click('a#washingpoint');
        });
} else if (startStepChance == 'direct') {
    // ...прямого перехода
    casper.start(S.targetURL).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent());
}
*/
/*
    NEXT ()=>
                     Шаг 2 -  переход на наш сайт:
*/
casper.start(S.targetURL).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
    .waitForUrl(S.targetURL, function () {
        casper.viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent());
        this.page.injectJs('devlibs/browserScripts/botBrowserPatches.js');
    })
    .waitForSelector('body', function () {
        this.echo("=== Дождался загрузки контента ВЕБДРИМТИМа");
        this.echo(this.getCurrentUrl());
        this.page.injectJs('devlibs/browserScripts/botBrowserPatches.js');
    })
    /*
     Шаг 3 - притворяемся порядочным юзером ;-)   
    */
    .then(function () {
        this.page.injectJs('devlibs/browserScripts/PRETENDER_homoSapiens__frontend_scroll.js');
        this.wait(getRandomInt(5, 10) * 1000, function () { });
    })
    /*
    .then(function () {
        this.page.injectJs('devlibs/browserScripts/PRETENDER_homoSapiens__frontend.js');
        this.wait(getRandomInt(10, 15) * 1000, function () { });
    })
*/
    .then(function () {
        PRETENDER_indexPage(this);
    })
    /*
     .then(function () {
         this.page.injectJs('devlibs/browserScripts/PRETENDER_homoSapiens__frontend.js');
         this.wait(getRandomInt(10, 15) * 1000, function () { });
     })
    */
    .then(function () {
        PRETENDER_articlePage(this);
    })
    .then(function () {
        this.page.injectJs('devlibs/browserScripts/PRETENDER_homoSapiens__frontend_scroll.js');
        this.wait(getRandomInt(2, 5) * 1000, function () { });
    })
    /*
    .then(function () {
        this.page.injectJs('devlibs/browserScripts/PRETENDER_homoSapiens__frontend.js');
        this.wait(getRandomInt(10, 15) * 1000, function () { });
    })    
    */
    .then(function () {
        PRETENDER_indexPage(this);
    })
    .then(function () {
        PRETENDER_articlePage(this);
    })
    //
    //Bot start
    //
    .run(function () {
        console.log('</> CasperJS    *AdvertisingSerialManiac*   cum </>').exit();
    });
//
//
// utils functions:
//
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function generateNewUserAgent() {
    return UA_storage[getRandomInt(0, UA_storage.length - 1)];
}
/*
    X / Y - coordinates
    mouseup, mousedown, click, dblclick, mousemove, mouseover, mouseout , mouseenter, mouseleave , contextmenu
*/
function PRETENDER_indexPage(self) {
    self.page.injectJs('devlibs/browserScripts/botBrowserPatches.js');
    //
    // 1) Листаем слайдеры на главной странице
    //
    for (var i = 0; i < 10; i += 1) {
        self.mouseEvent('mousemove', 'header', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.wait(500, function () { });
    }
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
        self.mouseEvent('mousemove', '#main-content', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
    }
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    for (var i = 0; i < 10; i += 1) {
        self.mouseEvent('mousemove', 'aside', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.wait(500, function () { });
    }
    self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7000));
    self.scrollToBottom();
    self.click('body');
    self.sendKeys('body', 'a', { modifiers: 'ctrl' });
    self.sendKeys('body', 'c', { modifiers: 'ctrl' });
    //self.click('div#sttotop');
    for (var i = 0; i < 20; i += 1) {
        self.mouseEvent('mousemove', '#main-content', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.wait(500, function () { });
    }
    for (var i = 0; i < 10; i += 1) {
        self.mouseEvent('mousemove', 'footer', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.wait(500, function () { });
    }
    self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7000));
    //
    // Идём на следующий раздел сайта:
    //
    self.capture('--PRETENDER_articlePage.png');
    self.click('header nav > a:nth-child(' + getRandomInt(1, 12) + ')');
}



function PRETENDER_articlePage(self) {
    self.page.injectJs('devlibs/browserScripts/botBrowserPatches.js');
    //
    // 2) Кликаем на статью в правом сайдбаре и переходим на неё
    //
    self.waitForUrl(/\.html$/, function () {
        self.echo('redirected to INSIDE.html');
    });
    self.waitForSelector('body', function () {
        console.log("()=>    Дождался загрузки внутренней статьи ", this.getCurrentUrl());
    });
    self.scrollToBottom();
    for (var i = 0; i < 500; i += 1) {
        self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
    }
    self.capture('PRETENDER_articlePage.png');
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    //self.reload(function () { });
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(10, 1000));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(100, 2500));
        self.scrollTo(getRandomInt(200, 800), getRandomInt(200, 3700));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(300, 4900));
    }
    self.mouse.doubleclick(getRandomInt(100, 1000), getRandomInt(10, 7400));
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    self.scrollToBottom();
    for (var i = 0; i < 500; i += 1) {
        self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
    }
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
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    for (var i = 0; i < 100; i += 1) {
        self.mouseEvent('mousemove', '#main-content', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
    }
    //self.click('.right-sidebar-wrapper ul li:nth-child(' + getRandomInt(1, 4) + ') a');
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7000));
    self.wait(3 * 1000, function () { });
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(6000, 7100));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(2200, 2300));
        self.scrollTo(getRandomInt(200, 800), getRandomInt(4400, 3500));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(4600, 3900));
    }
    self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7200));
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 50; i += 1) {
        self.mouse.move(getRandomInt(100, 1000), getRandomInt(10, 2000));
        self.mouse.move(getRandomInt(200, 1100), getRandomInt(2000, 3000));
        self.mouse.move(getRandomInt(300, 1000), getRandomInt(3000, 4000));
        self.mouse.move(getRandomInt(400, 1000), getRandomInt(4000, 5000));
        self.mouse.move(getRandomInt(500, 1000), getRandomInt(5000, 6000));
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
    self.scrollToBottom();
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
        self.mouseEvent('mousemove', 'header', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 5; i += 1) {
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
        self.mouseEvent('mousemove', 'footer', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
        self.wait(1, function () { });
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 5; i += 1) {
        self.mouse.move(getRandomInt(100, 1100), getRandomInt(3000, 7400));
        self.wait(1, function () { });
    }
    self.scrollToBottom();
    self.sendKeys('body', 'c', { modifiers: 'ctrl' });
    for (var i = 0; i < 20; i += 1) {
        self.mouse.move(getRandomInt(700, 600), getRandomInt(4800, 4500));
        self.mouse.move(getRandomInt(700, 800), getRandomInt(5200, 5000));
        self.mouse.move(getRandomInt(500, 900), getRandomInt(5400, 5300));
        self.mouse.move(getRandomInt(400, 300), getRandomInt(5800, 5700));
        self.mouse.move(getRandomInt(100, 200), getRandomInt(6000, 5900));
    }
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
    self.sendKeys('body', 'a', { modifiers: 'ctrl' });
    self.sendKeys('body', 'c', { modifiers: 'ctrl' });
    self.wait(getRandomInt(5, 10) * 1000, function () { });
    for (var i = 0; i < 20; i += 1) {
        self.mouse.move(getRandomInt(100, 200), getRandomInt(10, 200));
        self.mouse.move(getRandomInt(200, 300), getRandomInt(100, 300));
        self.mouse.move(getRandomInt(300, 400), getRandomInt(200, 400));
        self.mouse.move(getRandomInt(400, 500), getRandomInt(300, 500));
        self.mouse.move(getRandomInt(500, 600), getRandomInt(400, 600));
    }
    self.wait(getRandomInt(2, 5) * 1000, function () { });
    self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
    self.sendKeys('body', 'с', { modifiers: 'ctrl' });
    for (var i = 0; i < 50; i += 1) {
        self.scrollTo(getRandomInt(10, 500), getRandomInt(10, 1000));
        self.scrollTo(getRandomInt(100, 700), getRandomInt(100, 2500));
        self.scrollTo(getRandomInt(200, 800), getRandomInt(200, 3700));
        self.scrollTo(getRandomInt(300, 900), getRandomInt(300, 4900));
    }
    //
    // Возвращаемся на главную
    //
    self.click('header nav > a:nth-child(1)');
    self.waitForSelector('body', function () {
        console.log("<=()    Вернулся из нутра в index.php ", this.getCurrentUrl());
    });
}