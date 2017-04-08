module.exports = function (casper) {  
    casper.on('page.initialized', function (page) {
        if (page.url.indexOf(S.targetURL) !== -1) {
            console.log(" page.initialized ");
            //page.includeJs('https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js');       
            page.evaluate(function () {
                function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
                /*
                *
                *
                * Step 1 - set syntetic WindowObject properties 
                *
                *
                */
                console.log("got here");
                var xhr = new XMLHttpRequest(), browser;
                xhr.open('GET', 'http://localhost:3000/', false);
                xhr.send();
                if (xhr.status != 200) {
                    console.log("ХУЙ ТЕБЕ а не AJAX ", xhr.status + ': ' + xhr.statusText);
                } else {
                    browser = xhr.responseText;
                }
                console.log('browserbrowserbrowser ', browser);
                for (var prop in browser.window) {
                    if (!window[prop]) window[prop] = browser.window[prop];
                }
                window.document = browser.document;
                /*
                *
                *
                * Step 2 - Customize difficult buzzProperties
                *
                *
                */
                window.screen = {
                    width: getRandomInt(1024, 2200), height: getRandomInt(768, 1900)
                };
                var fake_navigator = {};
                for (var i in navigator) {
                    fake_navigator[i] = navigator[i];
                }
                var PluginArray = [
                    {
                        MimeType: {
                            description: "",
                            enabledPlugin: 'Plugin',
                            suffixes: "pdf",
                            type: "application/pdf"
                        },
                        description: "",
                        filename: "mhjfbmdgcfjbbpaeojofohoefgiehjai",
                        length: 1,
                        name: "Chrome PDF Viewer",
                        __proto__: 'Plugin'
                    },
                    {
                        MimeType: {
                            description: "",
                            enabledPlugin: 'Plugin',
                            suffixes: "pdf",
                            type: "application/pdf"
                        },
                        MimeType: {
                            description: "",
                            enabledPlugin: 'Plugin',
                            suffixes: "pdf",
                            type: "application/pdf"
                        },
                        description: "Shockwave Flash 25.0 r0",
                        filename: "libpepflashplayer.so",
                        length: 2,
                        name: "Shockwave Flash",
                        __proto__: 'Plugin'
                    },
                    {
                        MimeType: {
                            description: "",
                            enabledPlugin: 'Plugin',
                            suffixes: "pdf",
                            type: "application/pdf"
                        },
                        description: "Enables Widevine licenses for playback of HTML audio/video content. (version: 1.4.8.962)",
                        filename: "libwidevinecdmadapter.so",
                        length: 1,
                        name: "Widevine Content Decryption Module",
                        __proto__: 'Plugin'
                    },
                    {
                        MimeType: {
                            description: "",
                            enabledPlugin: 'Plugin',
                            suffixes: "pdf",
                            type: "application/pdf"
                        },
                        MimeType: {
                            description: "",
                            enabledPlugin: 'Plugin',
                            suffixes: "pdf",
                            type: "application/pdf"
                        },
                        description: "",
                        filename: "internal-nacl-plugin",
                        length: 2,
                        name: "Native Client",
                        __proto__: 'Plugin'
                    },
                    {
                        0: "MimeType",
                        description: "Portable Document Format",
                        filename: "internal-pdf-viewer",
                        length: 1,
                        name: "Chrome PDF Viewer",
                        __proto__: 'Plugin'
                    }
                ];
                fake_navigator.plugins = PluginArray;
                fake_navigator.permissions = {};
                fake_navigator.plugins.__proto__ = navigator.plugins.__proto__;
                fake_navigator.__proto__ = navigator.plugins.__proto__;
                fake_navigator.javaEnabled = function () { return true; };
                fake_navigator.language = 'en-US';
                fake_navigator.hardwareConcurrency = getRandomInt(2, 6);
                window.navigator = fake_navigator;
                //
                Function.prototype.bind = function () {
                    var func = this;
                    var self = arguments[0];
                    var rest = [].slice.call(arguments, 1);
                    return function () {
                        var args = [].slice.call(arguments, 0);
                        return func.apply(self, rest.concat(args));
                    };
                };
                //
                function indexOfArray(a, b) {
                    var la = a.length;
                    for (var i = 0; i < la; i++) {
                        if (a[i] === b) {
                            return i;
                        }
                    }
                    return -1;
                }

                var bound = [];
                var oldCall = Function.prototype.call;
                var oldApply = Function.prototype.apply;
                var slice = [].slice;
                var concat = [].concat;
                oldCall.call = oldCall;
                oldCall.apply = oldApply;
                oldApply.call = oldCall;
                oldApply.apply = oldApply;

                function call() {
                    return oldCall.apply(this, arguments);
                }

                Function.prototype.call = call;

                function apply() {
                    return oldApply.apply(this, arguments);
                }

                Function.prototype.apply = apply;

                function bind() {
                    var func = this;
                    var self = arguments[0];
                    var rest = oldCall.call(slice.call, slice, arguments, 1);
                    rest.concat = concat;
                    var result = (function () {
                        var args = oldCall.call(slice.call, slice, arguments, 0);
                        return func.apply(self, rest.concat(args));
                    });
                    bound.push(result);
                    return result;
                }

                Function.prototype.bind = bind;

                var nativeFunctionString = Error.toString().replace(/Error/g, "bind");
                var nativeToStringFunctionString = Error.toString().replace(/Error/g, "toString");
                var nativeBoundFunctionString = Error.toString().replace(/Error/g, "");
                var nativeCallFunctionString = Error.toString().replace(/Error/g, "call");
                var nativeApplyFunctionString = Error.toString().replace(/Error/g, "apply");
                var oldToString = Function.prototype.toString;

                function functionToString() {
                    if (this === bind) {
                        return nativeFunctionString;
                    }
                    if (this === functionToString) {
                        return nativeToStringFunctionString;
                    }
                    if (this === call) {
                        return nativeCallFunctionString;
                    }
                    if (this === apply) {
                        return nativeApplyFunctionString;
                    }
                    var idx = indexOfArray(bound, this);
                    if (idx >= 0) {
                        return nativeBoundFunctionString;
                    }
                    return oldCall.call(oldToString, this);
                }

                Function.prototype.toString = functionToString;
                //
                var p = window.callPhantom;
                delete window._phantom;
                delete window.callPhantom;
                Object.defineProperty(window, "myCallPhantom", {
                    get: function () {
                        return p;
                    },
                    set: function () {
                    }, enumerable: false
                });
                setTimeout(function () {
                    window.myCallPhantom();
                }, 1000);
            });
        }
    });
}