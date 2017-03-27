//
// <Кликаем по рекламе>
//
module.exports = function (self) {
      var CTR = getRandomInt(1, 100);
      console.log('CTR: ', CTR);
      if (CTR > 50) {
            var fraudStatus = self.evaluate(function () {
                  //
                  var AdSenseINS = document.getElementsByClassName('adsbygoogle')
                        , dispatchElement = AdSenseINS[getRandomInt(0, AdSenseINS.length - 1)]
                        , minX = dispatchElement.offsetLeft
                        , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
                        , minY = dispatchElement.offsetTop
                        , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight;
                  scrollTo(document.body, dispatchElement.offsetTop, 1300);
                  PRETENDER_wait(1);
                  console.log('AdSenseINS: ', AdSenseINS.length);
                  try {
                        var evt = document.createEvent("MouseEvents"), px = getRandomInt(minX, maxX), py = getRandomInt(minY, maxY);
                        evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
                        dispatchElement.dispatchEvent(evt);
                        //     
                        var iframe = dispatchElement.childNodes[0].childNodes[0].childNodes[0];
                        var iframeContentWindow = iframe.contentWindow.document.getElementsByTagName('iframe')[1] || iframe.contentWindow.document.getElementsByTagName('iframe')[0];
                        var clickFraudTarget = iframeContentWindow.contentWindow.document.getElementById('aw0') || iframeContentWindow.contentWindow.document.getElementById('google_image_div').getElementById('aw0') || iframeContentWindow.contentWindow.document.getElementsByTagName('a')[0];
                        evt.initMouseEvent('click', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, clickFraudTarget);
                        clickFraudTarget.dispatchEvent(evt);
                        clickFraudTarget.click();
                        console.log('(!!!)==>>  Делаю попытку клика по рекламе: ', clickFraudTarget.getAttribute('href'));
                        PRETENDER_wait(20);
                        //      
                        return true;
                  } catch (e) {
                        console.warn("Failed dispatching <mousemove> mouse event on ins: " + e, "error");
                        return false;
                  }
                  //      
            });
            console.log('fraudStatus: ', fraudStatus);
            if (fraudStatus) {
                  self.wait(30000, function () { });
                  self.waitForSelector('body', function () {
                        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!                  Перешёл на сайт по редиректу адсенса: ", this.getCurrentUrl());
                  });
                  //self.capture('adsense.png');
                  self.scrollToBottom();
                  for (var i = 0; i < 500; i += 1) {
                        self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
                  }
                  for (var i = 0; i < 50; i += 1) {
                        self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                        self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                        self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                  }
                  self.wait(5000, function () { });
                  for (var i = 0; i < 50; i += 1) {
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                  }
                  self.sendKeys('body', 'a', { modifiers: 'ctrl' });
                  self.sendKeys('body', 'c', { modifiers: 'ctrl' });
                  self.wait(5000, function () { });
                  self.click('a');
                  self.wait(5000, function () { });
                  self.scrollToBottom();
                  for (var i = 0; i < 500; i += 1) {
                        self.scrollTo(getRandomInt(1, 1000), getRandomInt(1, 7050));
                  }
                  for (var i = 0; i < 50; i += 1) {
                        self.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                        self.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                        self.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                  }
                  self.wait(5000, function () { });
                  for (var i = 0; i < 50; i += 1) {
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                        self.mouseEvent('mousemove', 'body', getRandomInt(10, 90) + '%', getRandomInt(10, 90) + '%');
                  }
                  self.sendKeys('body', 'a', { modifiers: 'ctrl' });
                  self.sendKeys('body', 'c', { modifiers: 'ctrl' });
                  self.click('a');
                  self.wait(5000, function () { });
                  self.page.close();
            }
      }
}