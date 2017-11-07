'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultRelativeTime = undefined;
exports.relativeTime = relativeTime;
exports.pastFuture = pastFuture;

var _isFunction = require('../utils/is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultRelativeTime = exports.defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};

function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (0, _isFunction2.default)(output) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
}

function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return (0, _isFunction2.default)(format) ? format(output) : format.replace(/%s/i, output);
}