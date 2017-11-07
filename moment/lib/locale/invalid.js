'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.invalidDate = invalidDate;
var defaultInvalidDate = exports.defaultInvalidDate = 'Invalid date';

function invalidDate() {
    return this._invalidDate;
}