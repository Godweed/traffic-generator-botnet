//
// 0) Читаем раздел:
// 
module.exports = function (self) {
      //
      // ()=> Идём на внутренний раздел сайта через  @{sideBar}:
      // 
      self.click(S.aside + ' li:nth-child(' + getRandomInt(1, 9) + ') a');
}