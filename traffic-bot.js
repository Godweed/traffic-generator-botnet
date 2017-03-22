//
//  My phantomjs custom modules:
//
var INCLUDES = {
    goFromReferers: require('./devlibs/phantomScripts/startByReferer.js'),
    goFromOrganicSearch: require('./devlibs/phantomScripts/organicSearch.js'),

    PRETENDER_indexPage: require('./devlibs/phantomScripts/PRETENDER_indexPage.js'),
    PRETENDER_articlePage: require('./devlibs/phantomScripts/PRETENDER_articlePage.js'),
}
    //
    // BOT SETTINGS:
    //
    , S = require('./devlibs/settings.json')
    , REF = require('./devlibs/referer.js')
    , UA_storage = require('./devlibs/UA_storage.js')
    , keywords = require('./devlibs/keywords.js')
    , custom_cookie = require('./devlibs/cookie.js').google
    , startRandomRefererWashingPoint = REF.static[getRandomInt(0, REF.static.length - 1)]

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
            customHeaders: PRETENDER_headers,
            loadImages: true,
            loadPlugins: true
        },
        logLevel: "debug",
        verbose: true
    })

    , mouse = require("mouse").create(casper)

    , kindOfCrawling = [
        'organicSearch',
        'organicSearch',
        'organicSearch',
        'organicSearch',
        'organicSearch',
        //'direct',
        //'referer',
        //'referer',
        //'referer',
        //'referer'
    ]
    //
    // BOT INIT:
    //
    , startStepChance = kindOfCrawling[getRandomInt(0, kindOfCrawling.length - 1)];
console.log('< Botnet start by  {' + startStepChance + '} />');





/*
            Шаг 1 - стартуем с..... 
*/




if (startStepChance == 'organicSearch') {
    //
    // ...поисковой выдачи
    //
    INCLUDES.goFromOrganicSearch();
} else if (startStepChance == 'referer') {
    //
    // ...реферера
    //
    INCLUDES.goFromReferers();
} else if (startStepChance == 'direct') {
    // ...прямого перехода
    casper.start(S.targetURL).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent());
}




/*
            Шаг 2 -  переход на наш сайт:
*/




casper.waitForUrl(S.targetURL, function () {
    casper.viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent());
    this.page.injectJs('devlibs/browserScripts/botBrowserPatches.js');
})
    .waitForSelector('body', function () {
        console.log("=== Дождался загрузки контента MFA сайта: ", this.getCurrentUrl());
        this.page.injectJs('devlibs/browserScripts/botBrowserPatches.js');
        //this.capture('index.png');
    })



    /*
                Шаг 3 - Создаём активность:
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
        INCLUDES.PRETENDER_indexPage(this);
    })
    /*
     .then(function () {
         this.page.injectJs('devlibs/browserScripts/PRETENDER_homoSapiens__frontend.js');
         this.wait(getRandomInt(10, 15) * 1000, function () { });
     })
    */
    .then(function () {
        INCLUDES.PRETENDER_articlePage(this);
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
        INCLUDES.PRETENDER_indexPage(this);
    })
    .then(function () {
        INCLUDES.PRETENDER_articlePage(this);
    })
    //
    //Bot start
    //
    .run(function () {
        console.log('</> CasperJS    *AdvertisingSerialManiac*   cum </>').exit();
    });
//
//
// Utils function's:
//
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateNewUserAgent() {
    return UA_storage[getRandomInt(0, UA_storage.length - 1)];
}