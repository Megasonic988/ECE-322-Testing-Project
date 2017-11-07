'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isNumber;
function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}