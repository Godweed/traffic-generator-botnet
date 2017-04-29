//
// 0.0) Читаем статью:
// 
module.exports = function (self) {
      //
      //  Меню в футере
      //
      self.click('footer .footer-navigation-list:nth-child(' + getRandomInt(1, 2) + ') li:nth-child(' + getRandomInt(1, 3) + ') a');
      self.waitForSelector('body', function () {
            console.log("<=()    Футер меню ", this.getCurrentUrl());
      });
}