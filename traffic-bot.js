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
var S = require('./settings.json')
    , REF = require('./referer.js')
    , startRandomRefererWashingPoint = REF.static[getRandomInt(0, REF.static.length - 1)]

    , PRETENDER_headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        "Accept-Encoding": "gzip, deflate, sdch, br",
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
        "Cache-Control": "no-cache",
        "Cookie": "VISITOR_INFO1_LIVE=WJHofs_1GA8; SID=QQRv9WpYcmE_tVmXwe3kzDmU9Tgwn9ZYpqCbw6QFu6lobavr8AqWYbhk0rSiWbi7mCqgmA.; HSID=Ablzisvuoo1HYcrPl; SSID=Azsq30yFvbrckvFH4; APISID=24rldlF_7oIK48Jx/AoLwJawKaDEVs4pDR; SAPISID=P-fVORf6VyMsk8Ve/ALCamxvPglMTcSfa-; CONSENT=YES+PL.ru+20160626-17-1; LOGIN_INFO=AJc13EcwRQIgAjLXivZsc9uERppamOq3kDWu5sQ5Etdc7GIunWp379ECIQCKtjD16Zpc4xI8uJ8IuPoobEShqotT_IPT_oiDglUbwg:QU5OdThBT1VCalMyS2R0MlhaeDZ4OWtkTm8tVmE2dWZtY0E3SnJXSzYxU2hSdFllMk1mSzN1ZzhySzlGTW1EYVVHS2JneW9JdE5DLUNSM1dHNTFfZTRjdGc2Y290UHpMUFVRb0RwT29QQm1LRVpRWHJ5TTF1U1pYTGZaWi1PNmVQOHowUmRlc2dvZkJDSnFqVDg1VzJ1aWlNSFVNUkdTRWVB; _ga=GA1.2.585348352.1485589128; cj53r.resume=c3RURoMtQUw:203,FmrGz8qSyrk:1384,tuaYlCIMKKc:476,nInv1oHn45c:265; YSC=vV_gQT6dv2Y; PREF=f1=50000000&al=ru&f5=30",
        "Host": startRandomRefererWashingPoint,
        "Origin": startRandomRefererWashingPoint,
        "Pragma": "no - cache",
        "Sec-WebSocket - Extensions": "permessage-deflate; client_max_window_bits",
        "Sec- WebSocket - Key": "gi5Z8h+b7ZwTkYFQ2VHXcQ ==",
        "Upgrade": "websocket",
        'Referer': startRandomRefererWashingPoint,
        "User- Agent": generateNewUserAgent()
    }

    , casper = require('casper').create({     // phantom.addCookie
        waitTimeout: 30000,
        stepTimeout: 50000,
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

/*
 Шаг 1 - стартуем с реферера
*/
casper
    .start(startRandomRefererWashingPoint, function () {
        this.echo(this.getCurrentUrl());
    })
    .viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900))
    .userAgent(generateNewUserAgent())
    .then(function () {
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
    })
    .waitForUrl(S.MFA, function () {
        this.echo(this.getCurrentUrl());
    })
    /*
     Шаг 3 - притворяемся порядочным американцем ;-)   
    */
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
        this.evaluate(PRETENDER_homoSapiens__frontend);
    })
    //
    //Bot start
    //
    .run(function () {
        this.echo('Casper TRAFFIC-GENERATOR run').exit();
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
    var version1 = (Math.random() * 1000).toFixed(2).toString(), version2 = (Math.random() * 10000).toFixed(3).toString();
    return 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/' + version1 + ' (KHTML, like Gecko) Chrome/51.0.' + version2 + ' Safari/' + version1;
}
//
// притворяемся человеком:    зарандомить порядок действий, кроме перехода к след.  вкладке
//
/*
    X / Y - coordinates
    self.mouse.move(getRandomInt(100, 1600), getRandomInt(10, 6300)); 
    mouseup, mousedown, click, dblclick, mousemove, mouseover, mouseout , mouseenter, mouseleave , contextmenu
*/
function PRETENDER_homoSapiens__backend(self) {

    self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.mouse.move(getRandomInt(100, 200), getRandomInt(10, 200));
    self.mouse.move(getRandomInt(200, 300), getRandomInt(100, 300));
    self.mouse.move(getRandomInt(300, 400), getRandomInt(200, 400));
    self.sendKeys('section.chlidren_' + getRandomInt(1, 4) + ' iframe', 'space');
    self.mouse.move(getRandomInt(400, 500), getRandomInt(300, 500));
    self.mouse.move(getRandomInt(500, 600), getRandomInt(400, 600));

    self.click('section.chlidren_' + getRandomInt(1, 4) + ' iframe');

    self.wait(getRandomInt(2, 5) * 1000, function () { });

    self.mouse.move(getRandomInt(700, 600), getRandomInt(1000, 1100));
    self.mouse.move(getRandomInt(700, 800), getRandomInt(1100, 1200));
    self.mouse.move(getRandomInt(800, 900), getRandomInt(1200, 1300));
    self.mouse.move(getRandomInt(900, 1000), getRandomInt(1300, 1400));
    self.mouse.move(getRandomInt(1000, 1100), getRandomInt(1400, 1500));

    self.scrollToBottom();

    self.click('section.chlidren_' + getRandomInt(1, 4) + ' iframe');

    self.wait(getRandomInt(2, 5) * 1000, function () { });

    self.scrollTo(getRandomInt(12, 50), 0);

    self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.mouse.move(getRandomInt(700, 600), getRandomInt(2300, 2400));
    self.mouse.move(getRandomInt(700, 800), getRandomInt(2100, 2200));
    self.mouse.move(getRandomInt(800, 900), getRandomInt(1900, 2000));
    self.mouse.move(getRandomInt(900, 1000), getRandomInt(1700, 1800));
    self.mouse.move(getRandomInt(1000, 1100), getRandomInt(1500, 1600));

    self.wait(getRandomInt(5, 10) * 1000, function () { });

    self.reload(function () { });

    self.click('section.chlidren_' + getRandomInt(1, 4) + ' iframe');

    self.click('section.chlidren_' + getRandomInt(1, 4) + ' img');

    self.mouseEvent('mousemove', 'section.chlidren_' + getRandomInt(1, 4) + ' img', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.scrollToBottom();

    self.wait(getRandomInt(5, 10) * 1000, function () { });

    self.scrollTo(getRandomInt(200, 400), 1000);

    self.mouse.move(getRandomInt(700, 600), getRandomInt(2700, 2800));
    self.mouse.move(getRandomInt(700, 800), getRandomInt(2900, 3100));
    self.mouse.move(getRandomInt(500, 900), getRandomInt(3200, 3300));
    self.mouse.move(getRandomInt(400, 300), getRandomInt(3400, 3500));
    self.mouse.move(getRandomInt(100, 200), getRandomInt(3600, 3700));

    self.wait(getRandomInt(10, 20) * 1000, function () { });


    self.mouseEvent('dblclick', 'section.chlidren_' + getRandomInt(1, 4) + ' img', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    // Читает контент ;-)
    self.scrollTo(getRandomInt(300, 700), 1000);

    self.wait(getRandomInt(10, 20) * 1000, function () { });

    self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.scrollTo(getRandomInt(400, 500), getRandomInt(1600, 2100));

    self.wait(getRandomInt(10, 20) * 1000, function () { });

    self.scrollTo(0, getRandomInt(2500, 3500));

    self.mouseEvent('mousemove', 'section.chlidren_' + getRandomInt(1, 4) + ' iframe', getRandomInt(5, 95) + '%', getRandomInt(10, 90) + '%');

    self.wait(getRandomInt(10, 20) * 1000, function () { });

    self.scrollTo(0, getRandomInt(4000, 6000));


    self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.scrollTo(0, 0);

    self.wait(3 * 1000, function () { });
    //
    // Идём на следующий раздел сайта:
    //
    self.click('header nav > a:nth-child(' + getRandomInt(1, 12) + ')');

    self.waitForUrl(/\.html$/, function () {
        self.echo('redirected to INSIDE.html');
    });

    self.mouse.move(getRandomInt(700, 600), getRandomInt(4800, 4500));
    self.mouse.move(getRandomInt(700, 800), getRandomInt(5200, 5000));
    self.mouse.move(getRandomInt(500, 900), getRandomInt(5400, 5300));
    self.mouse.move(getRandomInt(400, 300), getRandomInt(5800, 5700));
    self.mouse.move(getRandomInt(100, 200), getRandomInt(6000, 5900));

    self.wait(getRandomInt(2, 5) * 1000, function () { });

    self.mouseEvent('dblclick', 'section.chlidren_' + getRandomInt(1, 4) + ' p', getRandomInt(5, 95) + '%', getRandomInt(5, 95) + '%');

    self.sendKeys('body', 'a', { modifiers: 'ctrl' });

    self.wait(3 * 1000, function () { });

    self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.sendKeys('body', 'с', { modifiers: 'ctrl' });

    self.scrollTo(0, 3000);

    self.mouseEvent('mousemove', 'section.chlidren_' + getRandomInt(1, 4) + ' p', '20%', '50%');

}
/*
В общем порядке, алгоритм един: 
    — получить объект узла DOM, на который будет вешаться событие;
    — создать объект необходимого модуля событий;
    — инициализировать объект события;
    — назначить событие на необходимый узел DOM;
*/
function PRETENDER_homoSapiens__frontend() {
    pretender_mousemove();
    pretender_keypresser__YoutubeVideo()
    pretender_keypresser();
    pretender_clicker();
    __utils__.echo("PRETENDER_homoSapiens__frontend");
}
//
// initMouseEvent ( 'type', bubbles, cancelable, windowObject, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget )
//
function pretender_mousemove() {
    var ConstructorMouseEvent_mousemove = document.createEvent('MouseEvents')
        , $header = document.querySelector('header nav')
        , $section = document.querySelector('section.chlidren_' + getRandomInt(1, 4))
        , $IMG = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' img')
        , $iframe = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' iframe')
        , $p = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' p');
    // Emit:
    setInterval(function () {
        ConstructorMouseEvent_mousemove.initMouseEvent('mousemove', true, true, window, 1, getRandomInt(1, 900), getRandomInt(100, 5000), getRandomInt(10, 500), getRandomInt(10, 500), false, false, true, false, 0, null);
        $header.dispatchEvent(ConstructorMouseEvent_mousemove);
        $section.dispatchEvent(ConstructorMouseEvent_mousemove);
        $IMG.dispatchEvent(ConstructorMouseEvent_mousemove);
        $iframe.dispatchEvent(ConstructorMouseEvent_mousemove);
        $p.dispatchEvent(ConstructorMouseEvent_mousemove);
    }, 250);
}

function pretender_clicker() {
    var ConstructorMouseEvent = document.createEvent('MouseEvents')
        , $section = document.querySelector('section.chlidren_' + getRandomInt(1, 4))
        , $IMG = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' img')
        , $iframe = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' iframe')
        , $p = document.querySelector('section.chlidren_' + getRandomInt(1, 4) + ' p');
    // Emit:
    setInterval(function () {
        ConstructorMouseEvent.initMouseEvent('click', true, true, window, 1, 500, getRandomInt(100, 5000), 300, getRandomInt(10, 500), false, false, true, false, 0, null);
        $section.dispatchEvent(ConstructorMouseEvent);
        $IMG.dispatchEvent(ConstructorMouseEvent);
        $iframe.dispatchEvent(ConstructorMouseEvent);
        $p.dispatchEvent(ConstructorMouseEvent);
    }, 8000);
}

function pretender_keypresser() {
    var ConstructorKeyEvent_keypresser = document.createEvent('UIEvents')
        , $div = document.querySelector('div#main-content')
        , $header = document.querySelector('header nav');
    ConstructorKeyEvent_keypresser.initUIEvent('keyup', true, true, window, 1);
    ConstructorKeyEvent_keypresser.keyCode = getRandomInt(1, 30);
    // Emit:
    setInterval(function () {
        $div.dispatchEvent(ConstructorKeyEvent_keypresser);
        $header.dispatchEvent(ConstructorKeyEvent_keypresser);
    }, 8000);
}
function pretender_keypresser__YoutubeVideo() {

}

/*
'cookie' : 'fr=0a6IxbRUnoSFnJLHu..BYY9dj.4c.AAA.0.0.BYjZoQ.AWWYRHg_; _js_reg_fb_ref=https%3A%2F%2Fwww.facebook.com%2F; datr=EJqNWNtoFzH2UIrhLvBlNeOV; reg_fb_ref=https%3A%2F%2Fwww.facebook.com%2F; reg_fb_gate=https%3A%2F%2Fwww.facebook.com%2F',

'cookie' : 'datr=EJqNWNtoFzH2UIrhLvBlNeOV; sb=v5qNWIjeOy8gmGqfxbp8g_Wz; c_user=100012681161773; xs=76%3A5NZ4jxpGJy_yDQ%3A2%3A1485675199%3A1623; fr=0a6IxbRUnoSFnJLHu.AWXaEDrW9am4Szpo4dwjW3DStok.BYY9dj.4c.AAA.0.0.BYjZq_.AWW1ZV68; csm=2; pl=n; lu=ggPboj6r3qYKbJyBw0KZjdEA; p=-2; presence=EDvF3EtimeF1485675205EuserFA21B12681161773A2EstateFDutF1485675205529CEchFDp_5f1B12681161773F2CC; wd=580x936'
*/