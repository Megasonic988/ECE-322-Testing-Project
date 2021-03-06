'use strict';

var _constructor = require('./constructor');

var _calendar = require('./calendar');

var _formats = require('./formats');

var _invalid = require('./invalid');

var _ordinal = require('./ordinal');

var _prePostFormat = require('./pre-post-format');

var _relative = require('./relative');

var _set = require('./set');

var _month = require('../units/month');

var _week = require('../units/week');

var _dayOfWeek = require('../units/day-of-week');

var _hour = require('../units/hour');

var proto = _constructor.Locale.prototype;

proto.calendar = _calendar.calendar;
proto.longDateFormat = _formats.longDateFormat;
proto.invalidDate = _invalid.invalidDate;
proto.ordinal = _ordinal.ordinal;
proto.preparse = _prePostFormat.preParsePostFormat;
proto.postformat = _prePostFormat.preParsePostFormat;
proto.relativeTime = _relative.relativeTime;
proto.pastFuture = _relative.pastFuture;
proto.set = _set.set;

// Month


proto.months = _month.localeMonths;
proto.monthsShort = _month.localeMonthsShort;
proto.monthsParse = _month.localeMonthsParse;
proto.monthsRegex = _month.monthsRegex;
proto.monthsShortRegex = _month.monthsShortRegex;

// Week

proto.week = _week.localeWeek;
proto.firstDayOfYear = _week.localeFirstDayOfYear;
proto.firstDayOfWeek = _week.localeFirstDayOfWeek;

// Day of Week


proto.weekdays = _dayOfWeek.localeWeekdays;
proto.weekdaysMin = _dayOfWeek.localeWeekdaysMin;
proto.weekdaysShort = _dayOfWeek.localeWeekdaysShort;
proto.weekdaysParse = _dayOfWeek.localeWeekdaysParse;

proto.weekdaysRegex = _dayOfWeek.weekdaysRegex;
proto.weekdaysShortRegex = _dayOfWeek.weekdaysShortRegex;
proto.weekdaysMinRegex = _dayOfWeek.weekdaysMinRegex;

// Hours


proto.isPM = _hour.localeIsPM;
proto.meridiem = _hour.localeMeridiem;