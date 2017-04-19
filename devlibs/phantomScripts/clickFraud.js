//
// <* Кликаем по рекламе *>
//
module.exports = function (casper) {
      return {
            //
            //
            // Логика для chitica
            //
            //
            casper: casper,
            chitica: function () {
                  casper = this.casper;
                  casper.then(function () {
                        console.log('chitica');
                        this.page.injectJs('devlibs/browserScripts/api.js');
                        this.evaluate(function () {
                              document.body.scrollTop = 0;
                              scrollTo(document.body, document.body.scrollHeight, getRandomInt(1400, 1900));
                              try {
                                    var dispatchElement = document.querySelectorAll('#chitikaAdBlock-' + getRandomInt(1, 3) + ' iframe')
                                          , step = dispatchElement.contentWindow.document.querySelector('a')
                                          , minX = dispatchElement.offsetLeft
                                          , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
                                          , minY = dispatchElement.offsetTop
                                          , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight;
                                    console.log('bidvertiser  <a/>  ', step);
                                    var evt = document.createEvent("MouseEvents"), px = getRandomInt(minX, maxX), py = getRandomInt(minY, maxY);
                                    evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
                                    dispatchElement.dispatchEvent(evt);
                                    evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, step);
                                    dispatchElement.dispatchEvent(evt);
                                    step.removeAttribute('target');
                                    step.click();
                              } catch (error) {
                                    console.log('bidvertiser error', error);
                              }
                        });
                        this.wait(15 * 1000, function () { });
                  })
                        .waitForSelector('body', function () {
                              console.log("(-$$$-)=>    Я кликнул по рекламе и оказался на   ", this.getCurrentUrl());
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                                    this.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                                    this.mouseEvent('mousemove', 'body');
                                    this.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                                    this.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              var targlink = document.querySelector('a');
                              targlink.removeAttribute('target');
                              targlink.click();
                        });
            },
            //
            //
            // Логика для bidvertiser
            //
            //           
            bidvertiser: function () {
                  casper = this.casper;
                  casper.then(function () {
                        console.log('RЛИКАЮ НА РЕКЛАМУ');
                        this.page.injectJs('devlibs/browserScripts/api.js');
                        //this.capture('bidvertiser.png');
                        this.evaluate(function () {
                              document.body.scrollTop = 0; document.body.scrollTop = 0;
                              try {
                                    var dispatchElement = document.querySelectorAll('iframe')[0]
                                          , step = dispatchElement.contentWindow.document.querySelector('.BDV_adBlock:nth-child(' + getRandomInt(1, 3) + ") a.os-content-text")
                                          , minX = dispatchElement.offsetLeft
                                          , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
                                          , minY = dispatchElement.offsetTop
                                          , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight;
                                    console.log('bidvertiser  <a/>  ', step.getAttribute('target'));
                                    var evt = document.createEvent("MouseEvents"), px = getRandomInt(minX, maxX), py = getRandomInt(minY, maxY);
                                    evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
                                    dispatchElement.dispatchEvent(evt);
                                    evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, step);
                                    dispatchElement.dispatchEvent(evt);
                                    step.removeAttribute('target');
                                    step.click();
                              } catch (error) {
                                    console.log('bidvertiser error', error);
                              }
                        });
                        this.wait(15 * 1000, function () { });
                  })
                        .waitForSelector('body', function () {
                              console.log("(-$$$-)=>    Я кликнул по рекламе и оказался на   ", this.getCurrentUrl());
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                                    this.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                                    this.mouseEvent('mousemove', 'body');
                                    this.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                                    this.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              var targlink = document.querySelector('a');
                              targlink.removeAttribute('target');
                              targlink.click();
                        });
            },
            //
            //
            // Логика для google Adsense
            //
            //         
            googleAdsense: function () {
                  casper = this.casper;
                  casper.then(function () {
                        var fraudStatus = this.evaluate(function () {
                              //
                              //
                              //
                              var AdSenseINS = document.getElementsByClassName('adsbygoogle')
                                    , dispatchElement = AdSenseINS[getRandomInt(0, AdSenseINS.length - 1)]
                                    , minX = dispatchElement.offsetLeft
                                    , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
                                    , minY = dispatchElement.offsetTop
                                    , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight;
                              scrollTo(document.body, dispatchElement.offsetTop, 1300);
                              PRETENDER_wait(1);
                              console.log('AdSenseINS: ', AdSenseINS.length);
                              try {
                                    var evt = document.createEvent("MouseEvents"), px = getRandomInt(minX, maxX), py = getRandomInt(minY, maxY);
                                    evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
                                    dispatchElement.dispatchEvent(evt);
                                    //     
                                    var iframe = dispatchElement.childNodes[0].childNodes[0].childNodes[0];
                                    var iframeContentWindow = iframe.contentWindow.document.getElementsByTagName('iframe')[1] || iframe.contentWindow.document.getElementsByTagName('iframe')[0];
                                    var clickFraudTarget = iframeContentWindow.contentWindow.document.getElementById('aw0') || iframeContentWindow.contentWindow.document.getElementById('google_image_div').getElementById('aw0') || iframeContentWindow.contentWindow.document.getElementsByTagName('a')[0];
                                    evt.initMouseEvent('click', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, clickFraudTarget);
                                    clickFraudTarget.dispatchEvent(evt);
                                    clickFraudTarget.click();
                                    console.log('(!!!)==>>  Делаю попытку клика по рекламе: ', clickFraudTarget.getAttribute('href'));
                                    PRETENDER_wait(20);
                                    //      
                                    return true;
                              } catch (e) {
                                    console.warn("Failed dispatching <mousemove> mouse event on ins: " + e, "error");
                                    return false;
                              }
                              //  
                              //
                              //    
                        });
                        console.log('fraudStatus: ', fraudStatus);
                        if (fraudStatus) {
                              this.wait(30000, function () { });
                              this.waitForSelector('body', function () {
                                    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                  Перешёл на сайт по редиректу адсенса: ", this.getCurrentUrl());
                              });
                              //this.capture('adsense.png');
                              this.scrollToBottom();
                              for (var i = 0; i < 500; i += 1) {
                                    this.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
                              }
                              for (var i = 0; i < 50; i += 1) {
                                    this.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                                    this.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                                    this.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                                    this.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                              }
                              this.wait(5000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                              }
                              this.sendKeys('body', 'a', { modifiers: 'ctrl' });
                              this.sendKeys('body', 'c', { modifiers: 'ctrl' });
                              this.wait(5000, function () { });
                              this.click('a');
                              this.wait(5000, function () { });
                              this.scrollToBottom();
                              for (var i = 0; i < 500; i += 1) {
                                    this.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
                              }
                              for (var i = 0; i < 50; i += 1) {
                                    this.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                                    this.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                                    this.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                                    this.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                              }
                              this.wait(5000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                                    this.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                              }
                              this.sendKeys('body', 'a', { modifiers: 'ctrl' });
                              this.sendKeys('body', 'c', { modifiers: 'ctrl' });
                              this.click('a');
                              this.wait(5000, function () { });
                              this.page.close();
                        }
                  });
            },
            //
            //
            // Логика для direct advert
            //
            //
            directadvert: function () {
                  casper = this.casper;
                  casper.then(function () {
                        this.page.injectJs('devlibs/browserScripts/api.js');
                        this.evaluate(function () {
                              // <debug>
                              console.log(' window.history  ', window.history);
                              console.log(' window.navigator.plugins  ', window.navigator.length);
                              console.log(' window.navigator.plugins  ', window.navigator.plugins);
                              console.log(' window.screen  ', window.screen.width, ' x ', window.screen.height);
                              console.log(' window.navigator.javaEnabled  ', window.navigator.javaEnabled());
                              console.log(' window.navigator.language  ', window.navigator.language);
                              console.log(' window.navigator.userAgent  ', window.navigator.userAgent);
                              console.log(' window.navigator.platform  ', window.navigator.platform);
                              console.log(' window.navigator.appVersion  ', window.navigator.appVersion);
                              console.log(' window.navigator.appName  ', window.navigator.appName);
                              console.log(' window.navigator.appCodeName  ', window.navigator.appCodeName);
                              console.log(' window.navigator.hardwareConcurrency  ', window.navigator.hardwareConcurrency);
                              console.log(
                                    window
                              )
                              for (var w in window) { console.log(w) }
                              // </debug>
                              //
                              //
                              //
                              var directadverts = document.querySelectorAll('.directadvert-block table td.da_adp_img a')
                                    , dispatchElement = directadverts[getRandomInt(0, AdSenseINS.length - 1)]
                                    , minX = dispatchElement.offsetLeft
                                    , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
                                    , minY = dispatchElement.offsetTop
                                    , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight;
                              scrollTo(document.body, dispatchElement.offsetTop, 1300);
                              PRETENDER_wait(1);
                              console.log('directadverts: ', directadverts.length);
                              try {
                                    var evt = document.createEvent("MouseEvents"), px = getRandomInt(minX, maxX), py = getRandomInt(minY, maxY);
                                    evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
                                    dispatchElement.dispatchEvent(evt);
                                    //     
                                    evt.initMouseEvent('click', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
                                    dispatchElement.dispatchEvent(evt);
                                    //dispatchElement.click();
                                    console.log('(!!!)==>>  Делаю попытку клика по рекламе: ', dispatchElement.getAttribute('href'));
                                    //      
                                    return true;
                              } catch (e) {
                                    console.warn("Failed dispatching <mousemove> mouse event on ins: " + e, "error");
                                    return false;
                              }
                              //  
                              //
                              //    
                              /*
                              var directadverts = document.querySelectorAll('.directadvert-block table td.da_adp_img a');
                              var link = directadverts[getRandomInt(0, directadverts.length - 1)];
                              link.removeAttribute('target');
                              // link.click();
                              */
                              PRETENDER_wait(10);
                              this.page.close();
                        });
                  })
                        .waitForSelector('body', function () {
                              console.log("(-$$$-)=>    Я кликнул по рекламе и оказался на   ", this.getCurrentUrl());
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                                    this.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                                    this.mouseEvent('mousemove', 'body');
                                    this.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                                    this.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              var targlink = document.querySelector('a');
                              targlink.removeAttribute('target');
                              targlink.click();
                        })
                        .waitForSelector('body', function () {
                              console.log("(-$$$-)=>    2 редирект directadverts   ", this.getCurrentUrl());
                              this.capture('directadvert2.png');
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                                    this.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                                    this.mouseEvent('mousemove', 'body');
                                    this.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                                    this.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              this.sendKeys('body', 'a', { modifiers: 'ctrl' });
                              this.sendKeys('body', 'c', { modifiers: 'ctrl' });
                              this.click('a');
                              this.page.close();
                        });
            }
      }
}