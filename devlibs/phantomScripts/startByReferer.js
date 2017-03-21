module.exports = function () {
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
}