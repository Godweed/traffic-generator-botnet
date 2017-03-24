//
// 0.0) Читаем статью:
// 
module.exports = function (self) {
      /*
      self.waitForSelector('body', function () {
            console.log("(-!-)=>    Дождался загрузки внутренней статьи @{sideBar}   ", this.getCurrentUrl());
      });
      */
      //
      /*
      self.page.injectJs('devlibs/browserScripts/api.js');
      self.wait(getRandomInt(2) * 1000, function () { });
      self.page.injectJs('devlibs/browserScripts/actions.js');
      */
      //
      // Возвращаемся на главную
      //
      self.click(S.logo);
      self.waitForSelector('body', function () {
            console.log("<=()    Вернулся из нутра в index.php ", this.getCurrentUrl());
      });
}