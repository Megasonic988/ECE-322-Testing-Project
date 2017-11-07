"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var some;
if (Array.prototype.some) {
    exports.default = some = Array.prototype.some;
} else {
    exports.default = some = function some(fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

exports.default = some;