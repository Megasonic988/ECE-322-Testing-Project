'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isFunction;
function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}