module.exports = function (casper) {
    casper.on('page.initialized', function (page) {
        if (page.url.indexOf(S.targetURL) !== -1) {
            page.evaluate(function () {
                function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
                /*
                *
                *
                * Step 1 - set syntetic WindowObject properties 
                *
                *
                */
                //console.log('  {{BEFORE}} - window.navigator', JSON.stringify(window.navigator));
                //console.log('  {{BEFORE}} - document.referrer ', document.referrer);

                var xhr = new XMLHttpRequest(), browser;
                xhr.open('GET', 'http://127.0.0.1:3000', false);
                xhr.send();
                if (xhr.status != 200) {
                    console.log("AJAX !=200  ", xhr.status + ': ' + xhr.statusText);
                } else {
                    browser = JSON.parse(xhr.responseText);
                }
                // W              
                for (var propW in browser.window) {
                    try {
                        if (!window[propW]) window[propW] = browser.window[propW];
                        // window[prop] = browser.window[prop];
                    } catch (error) { }
                }
                // D                
                for (var propD in browser.document) {
                    try {
                        if (!document[propD]) document[propD] = browser.document[propD];
                        //document[prop] = browser.document[prop];
                    } catch (error) { }
                }
                window.navigator = window.clientInformation = browser.window.clientInformation;
                window.screen = browser.window.screen;
                window.history = browser.window.history;
                window.navigator.javaEnabled = function () { return true; };
                document.cookie = browser.document.cookie;
                //window.document = browser.document;           
                //console.log('  {{AFTER}} - document.referrer ', document.referrer);
                //console.log('  {{AFTER}} - window.navigator', JSON.stringify(window.navigator.plugins));
                /*
                for (var p in window) {
                    try {
                        console.log(p, ' : ', window[p])
                    } catch (error) { }
                }
                */
                /*
                *
                *
                * Step 2 - Customize difficult buzzProperties
                *
                *
                */
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
