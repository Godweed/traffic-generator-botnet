module.exports = function () {
      casper.start().userAgent(generateNewUserAgent()).viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900))
            .thenOpen('https://google.com/', function () {
                  this.waitForSelector('form[action="/search"]');
            })         
            .then(function () {
                  this.page.injectJs('devlibs/keywordsInjector.js');
                  this.evaluate(function () {
                        function getRandomInt(min, max) {
                              return Math.floor(Math.random() * (max - min + 1)) + min;
                        };
                        $el = document.querySelector('#lst-ib');
                        document.querySelector('#lst-ib').value = window.keywords[getRandomInt(0, window.keywords.length - 1)];
                        var ev = document.createEvent('HTMLEvents');
                        ev.initEvent('keydown', false, true);
                        ev.keyCode = 13;
                        $el.dispatchEvent(ev);
                  });
                  this.waitForSelector('h3.r a');
                  this.capture('--ggl.png');
            })
            //.viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
            .then(function () {
                  this.page.injectJs('devlibs/injectURL.js');
                  this.evaluate(function () {
                        //
                        var substitution = {
                              href: '/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=0ahUKEwiAyaSgk-jSAhXKCpoKHd11DQ8QFggcMAA&url=' + 'http' + '%3A%2F%2F' + 'web - dreamteam.com' + '%2F&usg=AFQjCNHwC_9BJ_i86ICMUlu8LMJqCGOiFg&sig2=H_fE3_l5aCwkQkt7SoQhpg&bvm=bv.150120842,d.bGs',
                              onmousedown: "return rwt(this,'','','','1','AFQjCNGB172eUxXws4hq9gi0IfpYbtCrJA','ISerutbOtNTYpX8WnWWYQQ','0ahUKEwj1l4TRj-jSAhUFSJoKHfGlBvEQFggaMAA','','',event)"
                        };
                        //
                        document.querySelectorAll('h3.r a')[1].removeAttribute('onmousedown');
                        document.querySelectorAll('h3.r a')[1].removeAttribute('href');
                        document.querySelectorAll('h3.r a')[1].removeAttribute('data-href');

                        document.querySelectorAll('h3.r a')[1].setAttribute('href', substitution.href);
                        document.querySelectorAll('h3.r a')[1].setAttribute('data-href', window.targetURL);
                        document.querySelectorAll('h3.r a')[1].setAttribute('onmousedown', substitution.onmousedown);
                  });
            })
            .then(function () {
                  var searchOutputRef = this.evaluate(function () {
                        //document.querySelectorAll('.link_cropped_no')[1].click();
                        return document.querySelectorAll('h3.r a')[1].getAttribute('href') + '  @href&   ' + document.querySelectorAll('h3.r a')[1].getAttribute('data-href') + '  @data-href&   ' + document.querySelectorAll('h3.r a')[1].getAttribute('onmousedown');
                  });
                  console.log("=== Кликаю на реферер из поисковой выдачи:    ", searchOutputRef);
                  this.capture('ggl++.png');
                  this.click('a[href="' + S.targetURL + '"]');
            });
}

/*

<href>
/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&sqi=2&ved=0ahUKEwj1l4TRj-jSAhUFSJoKHfGlBvEQFggaMAA&url=http%3A%2F%2Fdocs.casperjs.org%2Fen%2Flatest%2Fwriting_modules.html&usg=AFQjCNGB172eUxXws4hq9gi0IfpYbtCrJA&sig2=ISerutbOtNTYpX8WnWWYQQ&bvm=bv.150120842,d.bGs

<onmousedown>
return rwt(this,'','','','1','AFQjCNGB172eUxXws4hq9gi0IfpYbtCrJA','ISerutbOtNTYpX8WnWWYQQ','0ahUKEwj1l4TRj-jSAhUFSJoKHfGlBvEQFggaMAA','','',event)
return rwt(this,'','','','8','AFQjCNH0DrzftgwNUVAtXZRuD4bf2-uDxg','F0RgE65WvFarqkYGYs8ApQ','0ahUKEwj1l4TRj-jSAhUFSJoKHfGlBvEQFghWMAc','','',event)


<data-href>
http://docs.casperjs.org/en/latest/writing_modules.html

*/