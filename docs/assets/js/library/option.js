/**
 *
 * Static Here - in Wed Apr 26 2017 02:35:05 GMT-0300 (BRT)
 *
 * c37-styleguide - styleguide of C37 - CNC
 * @version 0.0.1
 * @link http://styleguide.c37.co
 * @license CC BY-SA 4.0
 *
 */
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["module"], factory);
    } else if (typeof exports !== "undefined") {
        factory(module);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod);
        global.option = mod.exports;
    }
})(this, function (module) {
    "use strict";

    var sqrt = Math.sqrt;
    function square(x) {
        return x * x;
    }
    function diag(x, y) {
        return sqrt(square(x) + square(y));
    }
    module.exports = {
        sqrt: sqrt,
        square: square,
        diag: diag
    };
});