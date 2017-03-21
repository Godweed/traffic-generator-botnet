//
// 0) Читаем статью:
// 
module.exports = function (self) {
      self.page.injectJs('devlibs/browserScripts/botBrowserPatches.js');
      self.wait(getRandomInt(2, 5) * 1000, function () { });
      //  Скроллинг     
      self.scrollToBottom();
      for (var i = 0; i < 500; i += 1) {
            self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
      }
      self.wait(getRandomInt(2, 5) * 1000, function () { });
      //self.reload(function () { });
      for (var i = 0; i < 50; i += 1) {
            self.scrollTo(getRandomInt(10, 500), getRandomInt(10, 1000));
            self.scrollTo(getRandomInt(100, 700), getRandomInt(100, 2500));
            self.scrollTo(getRandomInt(200, 800), getRandomInt(200, 3700));
            self.scrollTo(getRandomInt(300, 900), getRandomInt(300, 4900));
      }
      // Случайный даблклик
      //self.mouse.doubleclick(getRandomInt(100, 1000), getRandomInt(10, 7400));
      self.wait(getRandomInt(2, 5) * 1000, function () { });
      self.scrollToBottom();
      for (var i = 0; i < 500; i += 1) {
            self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
      }
      // Маусмув по контенту статьи
      for (var i = 0; i < 100; i += 1) {
            self.mouseEvent('mousemove', S.content, getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
      }
      self.wait(3 * 1000, function () { });
      //self.reload(function () { });
      //  Скроллинг 
      for (var i = 0; i < 50; i += 1) {
            self.scrollTo(getRandomInt(10, 500), getRandomInt(6000, 7100));
            self.scrollTo(getRandomInt(100, 700), getRandomInt(2200, 2300));
            self.scrollTo(getRandomInt(200, 800), getRandomInt(4400, 3500));
            self.scrollTo(getRandomInt(300, 900), getRandomInt(4600, 3900));
      }
      self.wait(getRandomInt(5, 10) * 1000, function () { });
      // Случайные маусмувы
      for (var i = 0; i < 50; i += 1) {
            self.mouse.move(getRandomInt(100, 1000), getRandomInt(10, 2000));
            self.mouse.move(getRandomInt(200, 1100), getRandomInt(2000, 3000));
            self.mouse.move(getRandomInt(300, 1000), getRandomInt(3000, 4000));
            self.mouse.move(getRandomInt(400, 1000), getRandomInt(4000, 5000));
            self.mouse.move(getRandomInt(500, 1000), getRandomInt(5000, 6000));
      }
      self.wait(getRandomInt(2, 5) * 1000, function () { });
      // Маусмув по контенту статьи
      for (var i = 0; i < 100; i += 1) {
            self.mouseEvent('mousemove', S.content, getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
      }
      //
      // (2)=> Идём на внутренний раздел сайта через  @{sideBar}:
      // 
      self.click(S.aside + ' ul li:nth-child(' + getRandomInt(1, 9) + ') a');
     //self.wait(getRandomInt(3, 5) * 1000, function () { });
      self.waitForSelector('body', function () {
            console.log("(-!-)=>    Дождался загрузки внутренней статьи @{sideBar}   ", this.getCurrentUrl());
      });
      self.capture('articlePage.png');
      // Случайный даблклик
      //self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7000));
      self.wait(3 * 1000, function () { });
      //  Скроллинги 
      for (var i = 0; i < 50; i += 1) {
            self.scrollTo(getRandomInt(10, 500), getRandomInt(6000, 7100));
            self.scrollTo(getRandomInt(100, 700), getRandomInt(2200, 2300));
            self.scrollTo(getRandomInt(200, 800), getRandomInt(4400, 3500));
            self.scrollTo(getRandomInt(300, 900), getRandomInt(4600, 3900));
      }
      // Случайный даблклик
      //self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7200));
      self.wait(getRandomInt(5, 10) * 1000, function () { });
      // Случайные маусмувы
      for (var i = 0; i < 50; i += 1) {
            self.mouse.move(getRandomInt(100, 1000), getRandomInt(10, 2000));
            self.mouse.move(getRandomInt(200, 1100), getRandomInt(2000, 3000));
            self.mouse.move(getRandomInt(300, 1000), getRandomInt(3000, 4000));
            self.mouse.move(getRandomInt(400, 1000), getRandomInt(4000, 5000));
            self.mouse.move(getRandomInt(500, 1000), getRandomInt(5000, 6000));
      }
      self.wait(getRandomInt(5, 10) * 1000, function () { });
      // Случайный даблклик
      //self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
      self.scrollToBottom();
      for (var i = 0; i < 50; i += 1) {
            self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
            self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
            self.mouseEvent('mousemove', 'header', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
            self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
            self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
            self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
      }
      self.wait(getRandomInt(5, 10) * 1000, function () { });
      for (var i = 0; i < 5; i += 1) {
            self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
            // self.mouseEvent('mousemove', 'footer', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
            self.wait(1, function () { });
      }
      self.wait(getRandomInt(5, 10) * 1000, function () { });
      for (var i = 0; i < 5; i += 1) {
            self.mouse.move(getRandomInt(100, 1100), getRandomInt(3000, 7400));
            self.wait(1, function () { });
      }
      self.scrollToBottom();
      self.click('p');
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      for (var i = 0; i < 20; i += 1) {
            self.mouse.move(getRandomInt(700, 600), getRandomInt(4800, 4500));
            self.mouse.move(getRandomInt(700, 800), getRandomInt(5200, 5000));
            self.mouse.move(getRandomInt(500, 900), getRandomInt(5400, 5300));
            self.mouse.move(getRandomInt(400, 300), getRandomInt(5800, 5700));
            self.mouse.move(getRandomInt(100, 200), getRandomInt(6000, 5900));
      }
      // Выделение текста с последующим копированием
      self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
      self.wait(getRandomInt(5, 10) * 1000, function () { });
      self.click('p');
      self.sendKeys('body', 'a', { modifiers: 'ctrl' });
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      self.wait(getRandomInt(5, 10) * 1000, function () { });
      for (var i = 0; i < 20; i += 1) {
            self.mouse.move(getRandomInt(100, 200), getRandomInt(10, 200));
            self.mouse.move(getRandomInt(200, 300), getRandomInt(100, 300));
            self.mouse.move(getRandomInt(300, 400), getRandomInt(200, 400));
            self.mouse.move(getRandomInt(400, 500), getRandomInt(300, 500));
            self.mouse.move(getRandomInt(500, 600), getRandomInt(400, 600));
      }
      self.wait(getRandomInt(2, 5) * 1000, function () { });
      self.mouse.doubleclick(getRandomInt(100, 960), getRandomInt(10, 7400));
      self.sendKeys('body', 'с', { modifiers: 'ctrl' });
      for (var i = 0; i < 50; i += 1) {
            self.scrollTo(getRandomInt(10, 500), getRandomInt(10, 1000));
            self.scrollTo(getRandomInt(100, 700), getRandomInt(100, 2500));
            self.scrollTo(getRandomInt(200, 800), getRandomInt(200, 3700));
            self.scrollTo(getRandomInt(300, 900), getRandomInt(300, 4900));
      }
      //
      // Возвращаемся на главную
      //
      self.click(S.logo);
      self.waitForSelector('body', function () {
            console.log("<=()    Вернулся из нутра в index.php ", this.getCurrentUrl());
      });
      self.wait(getRandomInt(2, 5) * 1000, function () { });
}