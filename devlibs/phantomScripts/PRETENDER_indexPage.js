module.exports = function (self) {
      self.sendKeys('body', 'a', { modifiers: 'ctrl' });
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      //
      // ()=> Идём на внутренний раздел сайта через  @{header}:
      //      
      self.click(S.header + ' li.first-level-item:nth-child(' + getRandomInt(1, 4) + ') ul.primary-sub-items li:nth-child(' + getRandomInt(1, 10) + ') a');
}