"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var indexOf;

if (Array.prototype.indexOf) {
    exports.default = indexOf = Array.prototype.indexOf;
} else {
    exports.default = indexOf = function indexOf(o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

exports.default = indexOf;