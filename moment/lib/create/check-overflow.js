'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkOverflow;

var _month = require('../units/month');

var _constants = require('../units/constants');

var _parsingFlags = require('../create/parsing-flags');

var _parsingFlags2 = _interopRequireDefault(_parsingFlags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkOverflow(m) {
    var overflow;
    var a = m._a;

    if (a && (0, _parsingFlags2.default)(m).overflow === -2) {
        overflow = a[_constants.MONTH] < 0 || a[_constants.MONTH] > 11 ? _constants.MONTH : a[_constants.DATE] < 1 || a[_constants.DATE] > (0, _month.daysInMonth)(a[_constants.YEAR], a[_constants.MONTH]) ? _constants.DATE : a[_constants.HOUR] < 0 || a[_constants.HOUR] > 24 || a[_constants.HOUR] === 24 && (a[_constants.MINUTE] !== 0 || a[_constants.SECOND] !== 0 || a[_constants.MILLISECOND] !== 0) ? _constants.HOUR : a[_constants.MINUTE] < 0 || a[_constants.MINUTE] > 59 ? _constants.MINUTE : a[_constants.SECOND] < 0 || a[_constants.SECOND] > 59 ? _constants.SECOND : a[_constants.MILLISECOND] < 0 || a[_constants.MILLISECOND] > 999 ? _constants.MILLISECOND : -1;

        if ((0, _parsingFlags2.default)(m)._overflowDayOfYear && (overflow < _constants.YEAR || overflow > _constants.DATE)) {
            overflow = _constants.DATE;
        }
        if ((0, _parsingFlags2.default)(m)._overflowWeeks && overflow === -1) {
            overflow = _constants.WEEK;
        }
        if ((0, _parsingFlags2.default)(m)._overflowWeekday && overflow === -1) {
            overflow = _constants.WEEKDAY;
        }

        (0, _parsingFlags2.default)(m).overflow = overflow;
    }

    return m;
}