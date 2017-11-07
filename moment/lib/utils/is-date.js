'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDate;
function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}