module.exports = function (self) {
      self.sendKeys('body', 'i', { modifiers: 'ctrl' });
      self.sendKeys('body', 'l', { modifiers: 'ctrl' });
      self.sendKeys('body', 'o', { modifiers: 'ctrl' });
      self.sendKeys('body', 'n', { modifiers: 'ctrl' });
      self.click('p');
      self.sendKeys('body', 'a', { modifiers: 'ctrl' });
      self.sendKeys('body', 'c', { modifiers: 'ctrl' });
      //
      /*
      self.page.injectJs('devlibs/browserScripts/api.js');
      self.wait(getRandomInt(2) * 1000, function () { });
      self.page.injectJs('devlibs/browserScripts/actions.js');
      */
      //
      // ()=> Идём на внутренний раздел сайта через  @{header}:
      //   
      self.click(S.header + ' li:nth-child(' + getRandomInt(1, 5) + ') a');
}