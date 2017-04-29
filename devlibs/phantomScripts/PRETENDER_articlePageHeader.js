//
// 0) Читаем раздел:
// 
module.exports = function (self) {
      //
      // ()=> Идём на внутренний раздел сайта через  @{sideBar}:
      // 
      self.click(S.header + ' li.navigation-list-item:nth-child(' + getRandomInt(1, 8) + ') a');
}