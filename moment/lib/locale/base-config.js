'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baseConfig = undefined;

var _calendar = require('./calendar');

var _formats = require('./formats');

var _invalid = require('./invalid');

var _ordinal = require('./ordinal');

var _relative = require('./relative');

var _month = require('../units/month');

var _week = require('../units/week');

var _dayOfWeek = require('../units/day-of-week');

var _hour = require('../units/hour');

// weekdays


// months
var baseConfig = exports.baseConfig = {
    calendar: _calendar.defaultCalendar,
    longDateFormat: _formats.defaultLongDateFormat,
    invalidDate: _invalid.defaultInvalidDate,
    ordinal: _ordinal.defaultOrdinal,
    dayOfMonthOrdinalParse: _ordinal.defaultDayOfMonthOrdinalParse,
    relativeTime: _relative.defaultRelativeTime,

    months: _month.defaultLocaleMonths,
    monthsShort: _month.defaultLocaleMonthsShort,

    week: _week.defaultLocaleWeek,

    weekdays: _dayOfWeek.defaultLocaleWeekdays,
    weekdaysMin: _dayOfWeek.defaultLocaleWeekdaysMin,
    weekdaysShort: _dayOfWeek.defaultLocaleWeekdaysShort,

    meridiemParse: _hour.defaultLocaleMeridiemParse
};

// meridiem


// week