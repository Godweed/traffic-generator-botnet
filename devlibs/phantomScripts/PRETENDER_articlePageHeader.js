//
// 0) Читаем раздел:
// 
module.exports = function (self) {

      self.waitForSelector('body', function () {
            console.log("(!-!)=>    Дождался загрузки внутренней статьи @{header}   ", this.getCurrentUrl());
      });

      //
      /*
      self.page.injectJs('devlibs/browserScripts/api.js');
      self.wait(getRandomInt(2) * 1000, function () { });
      self.page.injectJs('devlibs/browserScripts/actions.js');
*/

      //
      //
      // ()=> Идём на внутренний раздел сайта через  @{sideBar}:
      // 
      self.click(S.aside + ' li:nth-child(' + getRandomInt(1, 9) + ') a');
}