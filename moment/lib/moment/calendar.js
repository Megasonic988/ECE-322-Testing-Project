'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCalendarFormat = getCalendarFormat;
exports.calendar = calendar;

var _local = require('../create/local');

var _offset = require('../units/offset');

var _isFunction = require('../utils/is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _hooks = require('../utils/hooks');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar(time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || (0, _local.createLocal)(),
        sod = (0, _offset.cloneWithOffset)(now, this).startOf('day'),
        format = _hooks.hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && ((0, _isFunction2.default)(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, (0, _local.createLocal)(now)));
}