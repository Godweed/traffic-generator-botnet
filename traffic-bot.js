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
    , casper = require('casper').create({
        waitTimeout: 20000,
        stepTimeout: 30000,
        /*clientScripts: [
            'includes/jq.js',      // These two scripts will be injected in remote 
        ],*/
        pageSettings: {
            loadImages: true,        // The WebPage instance used by Casper will
            loadPlugins: true         // use these settings
        },
        logLevel: "debug",              // Only "info" level messages will be logged
        verbose: true                  // log messages will be printed out to the console
    })
    , mouse = require("mouse").create(casper);
//
// BOT INIT:
//
var startRandomRefererWashingPoint = S.REF[getRandomInt(0, S.REF.length - 1)];
/*
 Шаг 1 - стартуем с реферера
*/
casper.start(startRandomRefererWashingPoint, function () {
    this.viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900))
        .userAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36')
        .echo(this.getCurrentUrl());
})
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
//
// притворяемся человеком:
//
function PRETENDER_homoSapiens(self) {

    self.wait(getRandomInt(2, 5) * 1000, function () { });

    self.scrollToBottom();

    self.wait(getRandomInt(2, 5) * 1000, function () { });

    self.scrollTo(getRandomInt(12, 50), 0);

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

    self.scrollTo(getRandomInt(400, 500), getRandomInt(1600, 2100));

    self.wait(getRandomInt(10, 20) * 1000, function () { });

    self.scrollTo(0, getRandomInt(2500, 3500));

    self.mouseEvent('mousemove', 'section.chlidren_' + getRandomInt(1, 4) + ' iframe', getRandomInt(5, 95) + '%', getRandomInt(10, 90) + '%');

    self.wait(getRandomInt(10, 20) * 1000, function () { });

    self.scrollTo(0, getRandomInt(4000, 6000));

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

    self.sendKeys('body', 'с', { modifiers: 'ctrl' });

    self.scrollTo(0, 3000);

    self.mouseEvent('mousemove', 'section.chlidren_' + getRandomInt(1, 4) + ' p', '20%', '50%');

}
/*
    mouseup, mousedown, click, dblclick, mousemove, mouseover, mouseout , mouseenter, mouseleave , contextmenu
*/