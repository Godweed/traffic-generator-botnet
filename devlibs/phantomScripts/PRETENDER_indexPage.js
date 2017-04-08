module.exports = function (self) {
      self.sendKeys('body', 'a', { modifiers: 'ctrl' });
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      //
      // ()=> Идём на внутренний раздел сайта через  @{header}:
      //      
      self.click(S.header + ' a:nth-child(' + getRandomInt(1, 12) + ')');
}