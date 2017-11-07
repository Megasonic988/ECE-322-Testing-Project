'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultCalendar = undefined;
exports.calendar = calendar;

var _isFunction = require('../utils/is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCalendar = exports.defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
};

function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return (0, _isFunction2.default)(output) ? output.call(mom, now) : output;
}