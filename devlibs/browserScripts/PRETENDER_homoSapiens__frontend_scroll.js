for (var s = 0; s < 20; s += 1) {
    (function () {
        document.body.scrollTop = 0;
        for (var i = 0; i < 2000; i += 1) {
            document.body.scrollTop += 2;
        }
        for (var j = 0; j < 2000; j += 1) {
            document.body.scrollTop -= 2;
        }
    })();
}
