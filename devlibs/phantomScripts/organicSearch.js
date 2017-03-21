module.exports = function () {
      casper.start().userAgent(generateNewUserAgent()).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900))
            .thenOpen('https://google.com/', function () {
                  this.page.injectJs('devlibs/keywordsInjector.js');
                  this.page.injectJs('devlibs/injectURL.js');
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
}