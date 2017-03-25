//
// 0.0) Читаем статью:
// 
module.exports = function (self) {
      //
      // Возвращаемся на главную
      //
      self.click(S.logo);
      self.waitForSelector('body', function () {
            console.log("<=()    Вернулся из нутра в index.php ", this.getCurrentUrl());
      });
}