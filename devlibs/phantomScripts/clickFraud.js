//
// <Кликаем по рекламе>
//
module.exports = function (self) {
      var CTR = getRandomInt(1, 100);
      console.log('CTR: ', CTR);
      if (CTR) {
            var fraudStatus = self.evaluate(function () { fraudADV(); });
            console.log('&&&&&???????????????????????????????/  fraudStatus: ', fraudStatus);
            self.wait(9000, function () { });
            if (fraudStatus) {
                  self.waitForSelector('body', function () {
                        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                  Перешёл на сайт по редиректу адсенса: ", this.getCurrentUrl());
                  });
                  self.capture('adsense.png');
                  self.scrollToBottom();
                  for (var i = 0; i < 500; i += 1) {
                        self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
                  }
                  for (var i = 0; i < 50; i += 1) {
                        self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                        self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                        self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                  }
                  self.wait(5000, function () { });
                  for (var i = 0; i < 50; i += 1) {
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                  }
                  self.sendKeys('body', 'a', { modifiers: 'ctrl' });
                  self.sendKeys('body', 'c', { modifiers: 'ctrl' });
                  self.wait(5000, function () { });
                  self.click('a');
                  self.wait(5000, function () { });
                  self.scrollToBottom();
                  for (var i = 0; i < 500; i += 1) {
                        self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
                  }
                  for (var i = 0; i < 50; i += 1) {
                        self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                        self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                        self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                  }
                  self.wait(5000, function () { });
                  for (var i = 0; i < 50; i += 1) {
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                  }
                  self.sendKeys('body', 'a', { modifiers: 'ctrl' });
                  self.sendKeys('body', 'c', { modifiers: 'ctrl' });
                  self.click('a');
                  self.wait(5000, function () { });
                  self.page.close();
            }
      }
}