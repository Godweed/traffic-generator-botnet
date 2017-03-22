module.exports = function () {
      var searchEngines = [
            // 'google',
            // 'yahoo',
            'bing',
            'ask',
            'baidu',
            'aol'
      ]
            , searchEnginesURLs = {
                  google: 'https://google.com/',
                  yahoo: 'https://yahoo.com/',
                  bing: 'http://www.bing.com/',
                  ask: 'http://www.ask.com/',
                  baidu: 'https://www.baidu.com/',
                  aol: 'https://www.aol.com/'
            }
            , startEngineeURL = searchEnginesURLs[searchEngines[getRandomInt(0, searchEngines.length - 1)]];
      console.log(':{  Подменяю поисковую выдачу на  ', startEngineeURL);

      switch (startEngineeURL) {
            case searchEnginesURLs.google:
                  //
                  // Сергей Брин
                  //
                  /*
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
                              */
                  break;
            case searchEnginesURLs.yahoo:
                  //
                  // Yahoo!
                  //
                  /*
                  casper.start('https://www.yahoo.com/', function () {
                        this.waitForSelector('#uh-search-box');
                        this.page.injectJs('devlibs/keywordsInjector.js');
                        this.evaluate(function () {
                              document.querySelector('#uh-search-box').value = window.keywords[getRandomInt(0, window.keywords.length - 1)];
                              document.querySelector('#uh-search-button').click();
                        });
                        this.capture('yahoo-.png');
                  })
                        .viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())         
                        .then(function () {
                              this.waitForSelector('h3.title a');
                              this.page.injectJs('devlibs/injectURL.js');
                              this.evaluate(function () {
                                    document.querySelectorAll('h3.title a')[1].removeAttribute('href');
                                    document.querySelectorAll('h3.title a')[1].setAttribute('href', window.targetURL);
                              });
                        })
                        .then(function () {
                              this.capture('yahoo.png');
                              this.click('a[href="' + S.targetURL + '"]');
                        });
                        */
                  break;
            case searchEnginesURLs.bing:
                  //
                  // BING
                  //
                  casper.start(searchEnginesURLs.bing, function () {
                        this.waitForSelector('form[action="/search"]');
                  })
                        .viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
                        .then(function () {
                              this.fill('form[action="/search"]', { q: keywords[getRandomInt(0, keywords.length - 1)] }, true);
                        })
                        .then(function () {
                              this.page.injectJs('devlibs/injectURL.js');
                              this.evaluate(function () {
                                    document.querySelectorAll('.b_algo a')[1].removeAttribute('href');
                                    document.querySelectorAll('.b_algo a')[1].setAttribute('href', window.targetURL);
                              });
                        })
                        .then(function () {            
                              this.click('a[href="' + S.targetURL + '"]');
                        });
                  break;
            case searchEnginesURLs.ask:
                  //
                  // ASK
                  //
                  casper.start('http://www.ask.com/web?q=' + keywords[getRandomInt(0, keywords.length - 1)], function () {
                        this.waitForSelector('.PartialSearchResults-item-title');
                  })
                        .viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
                        .then(function () {
                              this.page.injectJs('devlibs/injectURL.js');
                              this.evaluate(function () {
                                    document.querySelectorAll('.PartialSearchResults-item-title a')[1].removeAttribute('href');
                                    document.querySelectorAll('.PartialSearchResults-item-title a')[1].removeAttribute('target');
                                    //document.querySelectorAll('.PartialSearchResults-item-title a')[1].removeAttribute('data-unified');
                                    document.querySelectorAll('.PartialSearchResults-item-title a')[1].setAttribute('href', window.targetURL);
                                    document.querySelectorAll('.PartialSearchResults-item-title a')[1].click();
                              });
                        });
                  break;
            case searchEnginesURLs.baidu:
                  //
                  // BAIDU
                  //
                  casper.start('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=' + keywords[getRandomInt(0, keywords.length - 1)], function () {
                        this.waitForSelector('h3.c-title-en a');
                  })
                        .viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
                        .then(function () {
                              this.page.injectJs('devlibs/injectURL.js');
                              this.evaluate(function () {
                                    document.querySelectorAll('h3.c-title-en a')[3].removeAttribute('href');
                                    document.querySelectorAll('h3.c-title-en a')[3].removeAttribute('target');
                                    document.querySelectorAll('h3.c-title-en a')[3].setAttribute('href', window.targetURL);
                                    document.querySelectorAll('h3.c-title-en a')[3].click();
                              });
                        });
                  break;
            case searchEnginesURLs.aol:
                  //
                  // AOL
                  //
                  casper.start(searchEnginesURLs.aol, function () {
                        this.waitForSelector('form[action="//search.aol.com/aol/search"]');
                  })
                        .viewport(getRandomInt(1024, 2200), getRandomInt(768, 1900)).userAgent(generateNewUserAgent())
                        .then(function () {
                              this.fill('form[action="//search.aol.com/aol/search"]', { q: keywords[getRandomInt(0, keywords.length - 1)] }, true);
                        })
                        .then(function () {                        
                              this.page.injectJs('devlibs/injectURL.js');
                              this.evaluate(function () {
                                    document.querySelectorAll('h3.hac a')[1].removeAttribute('href');
                                    document.querySelectorAll('h3.hac a')[1].removeAttribute('target');
                                    document.querySelectorAll('h3.hac a')[1].setAttribute('href', window.targetURL);
                                    document.querySelectorAll('h3.hac a')[1].click();
                              });
                        });
                  break;
            default:
                  console.warn('Хм......не нашлось URL - адресов для подмены поисковой выдачи');
                  casper.exit();
                  break;
      }
}