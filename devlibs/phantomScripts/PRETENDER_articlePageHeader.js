//
// 0) Читаем раздел:
// 
module.exports = function (self) {
      self.waitForSelector('body', function () {
            console.log("(!-!)=>    Дождался загрузки внутренней статьи @{header}   ", this.getCurrentUrl());
      });
      self.wait(getRandomInt(3, 5) * 1000, function () { });
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
      self.click(S.aside + ' li:nth-child(' + getRandomInt(1, 9) + ') a');
}