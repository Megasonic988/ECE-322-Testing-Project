'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bubble = bubble;
exports.daysToMonths = daysToMonths;
exports.monthsToDays = monthsToDays;

var _absFloor = require('../utils/abs-floor');

var _absFloor2 = _interopRequireDefault(_absFloor);

var _absCeil = require('../utils/abs-ceil');

var _absCeil2 = _interopRequireDefault(_absCeil);

var _dateFromArray = require('../create/date-from-array');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!(milliseconds >= 0 && days >= 0 && months >= 0 || milliseconds <= 0 && days <= 0 && months <= 0)) {
        milliseconds += (0, _absCeil2.default)(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = (0, _absFloor2.default)(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = (0, _absFloor2.default)(seconds / 60);
    data.minutes = minutes % 60;

    hours = (0, _absFloor2.default)(minutes / 60);
    data.hours = hours % 24;

    days += (0, _absFloor2.default)(hours / 24);

    // convert days to months
    monthsFromDays = (0, _absFloor2.default)(daysToMonths(days));
    months += monthsFromDays;
    days -= (0, _absCeil2.default)(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = (0, _absFloor2.default)(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
}

function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays(months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}