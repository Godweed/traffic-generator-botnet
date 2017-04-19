//
// 0) Читаем раздел:
// 
module.exports = function (self) {
      //
      // ()=> Идём на внутренний раздел сайта через  @{sideBar}:
      // 
       self.click(S.header + ' li.first-level-item:nth-child(' + getRandomInt(1, 4) + ') ul.primary-sub-items li:nth-child(' + getRandomInt(1, 5) + ') a');
}