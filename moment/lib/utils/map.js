"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = map;
function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}