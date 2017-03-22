/*
    X / Y - coordinates
    mouseup, mousedown, click, dblclick, mousemove, mouseover, mouseout , mouseenter, mouseleave , contextmenu
*/
module.exports = function (self) {
      //
      // 1) Хэдер
      //
      for (var i = 0; i < 10; i += 1) {
            self.mouseEvent('mousemove', 'header', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
            self.wait(500, function () { });
      }
      //
      // 2) Контентная часть
      //
      for (var i = 0; i < 50; i += 1) {
            self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
            self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
            self.mouseEvent('mousemove', S.content, getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
            self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
            self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
            self.mouse.move(getRandomInt(100, 1100), getRandomInt(100, 7400));
      }
      self.wait(getRandomInt(2, 5) * 1000, function () { });
      //
      // 3) СайдБар
      //
      for (var i = 0; i < 10; i += 1) {
            self.mouseEvent('mousemove', S.aside, getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
            self.wait(500, function () { });
      }
      self.scrollToBottom();
      // Выделение текста с последующим копированием
      self.click('p');
      self.sendKeys('body', 'a', { modifiers: 'ctrl' });
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      for (var i = 0; i < 20; i += 1) {
            self.mouseEvent('mousemove', S.content, getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
            self.wait(500, function () { });
      }
      //
      // 4) Футер
      // 
      for (var i = 0; i < 10; i += 1) {
            self.mouseEvent('mousemove', 'footer', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
            self.wait(500, function () { });
      }
      //
      // (5)=> Идём на внутренний раздел сайта через  @{header}:
      //   
      self.click(S.header + ' a:nth-child(' + getRandomInt(2, 9) + ')');
      self.waitForSelector('body', function () {
            console.log("(!-!)=>    Дождался загрузки внутренней статьи @{header}   ", this.getCurrentUrl());
      });
      self.wait(getRandomInt(3, 5) * 1000, function () { });
}