//
//  My phantomjs custom modules:
//
var INCLUDES = {
    goFromReferers: require('./devlibs/phantomScripts/startByReferer.js'),
    goFromOrganicSearch: require('./devlibs/phantomScripts/organicSearch.js'),

    PRETENDER_indexPage: require('./devlibs/phantomScripts/PRETENDER_indexPage.js'),
    PRETENDER_articlePageHeader: require('./devlibs/phantomScripts/PRETENDER_articlePageHeader.js'),
    PRETENDER_articlePageAside: require('./devlibs/phantomScripts/PRETENDER_articlePageAside.js'),

    objectiveTuning: require('./devlibs/phantomScripts/botBrowserPatches.js'),
    clickFraud: require('./devlibs/phantomScripts/clickFraud.js')
}
    //
    // BOT SETTINGS:
    //
    , S = require('./devlibs/settings.json')
    , REF = require('./devlibs/referer.js')
    , UA_storage = require('./devlibs/UA_storage.js')
    , keywords = require('./devlibs/keywords.js')
    , directs = require('./devlibs/direct.js')
    , startRandomRefererWashingPoint = REF.static[getRandomInt(0, REF.static.length - 1)]

    , PRETENDER_headers = {
        "Cache-Control": "no-cache",
        "Origin": startRandomRefererWashingPoint,
        'Referer': startRandomRefererWashingPoint,
        'X-Forwarded-For': startRandomRefererWashingPoint,
        // "User-Agent": generateNewUserAgent()
    }

    , casper = require('casper').create({
        waitTimeout: 90000,
        stepTimeout: 90000,
        //viewportSize: { width: getRandomInt(1024, 2200), height: getRandomInt(768, 1900) },
        pageSettings: {
            //customHeaders: PRETENDER_headers,
            loadImages: true,
            loadPlugins: true
        },
        logLevel: "debug",
        verbose: true
    })

    , kindOfCrawling = [
        'organicSearch',
        'organicSearch',
        'organicSearch',
        'organicSearch',
        'organicSearch',
        'organicSearch',
        'direct',
        'referer',
        'referer',
        'referer'
        //'direct'
    ]
    //
    // BOT INIT:
    //
    , startStepChance = kindOfCrawling[getRandomInt(0, kindOfCrawling.length - 1)]
    , CTR = getRandomInt(1, 100);
// W&D objects    
INCLUDES.objectiveTuning(casper);
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
    casper.start(directs[getRandomInt(0, directs.length - 1)]);
}


/*
            Шаг 2 -  переход на наш сайт:
*/


casper.waitForSelector('iframe', function () {
    console.log("|=|=|=|     Дождался загрузки контента MFA сайта: ", this.getCurrentUrl());
    this.page.injectJs('devlibs/browserScripts/scroll.js');
    this.wait(getRandomInt(3, 6) * 1000, function () { });
});


/*
            Шаг 3 - Создаём активность:
*/


casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/api.js');
    this.wait(2000, function () { });
    this.page.injectJs('devlibs/browserScripts/actions.js');
    this.wait(getRandomInt(5, 10) * 1000, function () { });
});

casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/scroll.js');
    this.wait(getRandomInt(3, 6) * 1000, function () { });
});

if (CTR > 40) {
    INCLUDES.clickFraud(casper).adnow();
}

casper.then(function () {
    INCLUDES.PRETENDER_indexPage(this);
}).waitForSelector('body', function () { console.log("(!-!)=>    Дождался загрузки внутренней статьи @{header}   ", this.getCurrentUrl()); });

casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/scroll.js');
    this.wait(getRandomInt(3, 6) * 1000, function () { });
});
casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/api.js');
    this.wait(2000, function () { });
    this.page.injectJs('devlibs/browserScripts/actions.js');
    this.wait(getRandomInt(5, 10) * 1000, function () { });
});
casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/scroll.js');
    this.wait(getRandomInt(3, 6) * 1000, function () { });
});
//
if (CTR > 40) {
    INCLUDES.clickFraud(casper).adnow();
}
//
casper.then(function () {
    INCLUDES.PRETENDER_articlePageHeader(this);
}).waitForSelector('body', function () { console.log("(-!-)=>    Дождался загрузки внутренней статьи @{sideBar}   ", this.getCurrentUrl()); });

casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/scroll.js');
    this.wait(getRandomInt(3, 6) * 1000, function () { });
});
casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/api.js');
    this.wait(2000, function () { });
    this.page.injectJs('devlibs/browserScripts/actions.js');
    this.wait(getRandomInt(5, 10) * 1000, function () { });
});
casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/scroll.js');
    this.wait(getRandomInt(3, 6) * 1000, function () { });
});

casper.then(function () {
    INCLUDES.PRETENDER_articlePageAside(this);
});
casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/scroll.js');
    this.wait(getRandomInt(3, 6) * 1000, function () { });
});
casper.then(function () {
    this.page.injectJs('devlibs/browserScripts/api.js');
    this.wait(2000, function () { });
    this.page.injectJs('devlibs/browserScripts/actions.js');
    this.wait(getRandomInt(5, 10) * 1000, function () { });
});
//
// RUN BOT:
//
casper.run(function () {
    console.log('</> CasperJS    *AdvertisingSerialManiac*   cum </>').exit();
});
//
// Utils function's:
//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateNewUserAgent() {
    return UA_storage[getRandomInt(0, UA_storage.length - 1)];
}
casper.page.onConsoleMessage = function (msg, lineNum, sourceId) {
    console.log('КОНСОЛЬ ЛОГ: ' + msg);
};
