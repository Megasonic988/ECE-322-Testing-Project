'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ordinal = ordinal;
var defaultOrdinal = exports.defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = exports.defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal(number) {
    return this._ordinal.replace('%d', number);
}