//
// 0) Читаем раздел:
// 
module.exports = function (self) {
      //
      // ()=> Идём на внутренний раздел сайта через  @{sideBar}:
      // 
      self.click(S.aside + ' a:nth-child(' + getRandomInt(1, 4) + ')');
}