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
        waitTimeout: 15000,
        stepTimeout: 15000,
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
    });
/*
 Шаг 2 - клик по фейковой ссылке с реферера и переход на наш MFA
*/
casper.then(function () {
    this.click('a#washingpoint');
})
    .waitForUrl(S.MFA, function () {
        this.echo(this.getCurrentUrl());
    });
/*
 Шаг 3 - притворяемся порядочным американцем ;-)
*/
casper.then(function () {
    PRETENDER_homoSapiens(this);
});
//
//Bot start
//
casper.run(function () {
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
    _wait(self, 2);
    self.scrollToBottom();
    _wait(self, 2);
    self.scrollTo(10, 0);
    _wait(self, 5);
    self.reload(function () { });
    self.click('div > section:nth-child(' + (getRandomInt(1, 5) - 1) + ') iframe');
    //
    // go to youtube channel
    //
    self.waitForUrl(/www\.youtube\.com\/watch\?/, function () {
        self.echo('PRETENDER_homoSapiens =GO= to Youtube')
    });
    self.back();
    self.echo('PRETENDER_homoSapiens =RETURN= from Youtube');
    //
    // return to MFA site:
    //
    self.scrollToBottom();
    _wait(self, 10);
    self.scrollTo(300, 1000);
    /*
mouseup, mousedown, click, dblclick, mousemove, mouseover, mouseout , mouseenter, mouseleave , contextmenu
    */
    //this.sendKeys('body', 'f5', { modifiers: 'ctrl+alt' });

}
//
_wait = function (self, sec) {
    return self.wait(sec * 1000, function () { });
}