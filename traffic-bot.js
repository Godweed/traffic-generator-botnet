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
Step~4)

*/

//
// BOT SETTINGS:
//
var S = require('./settings.json')
    , startRandomRefererWashingPoint = S.REF[getRandomInt(0, S.REF.length - 1)]

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
        PRETENDER_homoSapiens(this);
    })
    .then(function () {
        PRETENDER_homoSapiens(this);
    })
    .then(function () {
        PRETENDER_homoSapiens(this);
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
    var version1 = (Math.random() * 1000).toFixed(2).toString();
    var version2 = (Math.random() * 10000).toFixed(3).toString();
    return 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/' + version1 + ' (KHTML, like Gecko) Chrome/51.0.' + version2 + ' Safari/' + version1;
}
//
// притворяемся человеком:
//
function PRETENDER_homoSapiens(self) {

    self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.wait(getRandomInt(2, 5) * 1000, function () { });

    self.scrollToBottom();

    self.wait(getRandomInt(2, 5) * 1000, function () { });

    self.scrollTo(getRandomInt(12, 50), 0);

    self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.wait(getRandomInt(5, 10) * 1000, function () { });

    self.reload(function () { });

    self.click('section.chlidren_' + getRandomInt(1, 4) + ' iframe');

    self.click('section.chlidren_' + getRandomInt(1, 4) + ' img');

    self.mouseEvent('mousemove', 'section.chlidren_' + getRandomInt(1, 4) + ' img', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');

    self.scrollToBottom();

    self.wait(getRandomInt(5, 10) * 1000, function () { });

    self.scrollTo(getRandomInt(200, 400), 1000);

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
    mouseup, mousedown, click, dblclick, mousemove, mouseover, mouseout , mouseenter, mouseleave , contextmenu
*/