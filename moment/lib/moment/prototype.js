'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constructor = require('./constructor');

var _addSubtract = require('./add-subtract');

var _calendar = require('./calendar');

var _clone = require('./clone');

var _compare = require('./compare');

var _diff = require('./diff');

var _format = require('./format');

var _from = require('./from');

var _to = require('./to');

var _getSet = require('./get-set');

var _locale = require('./locale');

var _minMax = require('./min-max');

var _startEndOf = require('./start-end-of');

var _toType = require('./to-type');

var _valid = require('./valid');

var _creationData = require('./creation-data');

var _year = require('../units/year');

var _weekYear = require('../units/week-year');

var _quarter = require('../units/quarter');

var _month = require('../units/month');

var _week = require('../units/week');

var _dayOfMonth = require('../units/day-of-month');

var _dayOfWeek = require('../units/day-of-week');

var _dayOfYear = require('../units/day-of-year');

var _hour = require('../units/hour');

var _minute = require('../units/minute');

var _second = require('../units/second');

var _millisecond = require('../units/millisecond');

var _offset = require('../units/offset');

var _timezone = require('../units/timezone');

var _deprecate = require('../utils/deprecate');

var proto = _constructor.Moment.prototype;

proto.add = _addSubtract.add;
proto.calendar = _calendar.calendar;
proto.clone = _clone.clone;
proto.diff = _diff.diff;
proto.endOf = _startEndOf.endOf;
proto.format = _format.format;
proto.from = _from.from;
proto.fromNow = _from.fromNow;
proto.to = _to.to;
proto.toNow = _to.toNow;
proto.get = _getSet.stringGet;
proto.invalidAt = _valid.invalidAt;
proto.isAfter = _compare.isAfter;
proto.isBefore = _compare.isBefore;
proto.isBetween = _compare.isBetween;
proto.isSame = _compare.isSame;
proto.isSameOrAfter = _compare.isSameOrAfter;
proto.isSameOrBefore = _compare.isSameOrBefore;
proto.isValid = _valid.isValid;
proto.lang = _locale.lang;
proto.locale = _locale.locale;
proto.localeData = _locale.localeData;
proto.max = _minMax.prototypeMax;
proto.min = _minMax.prototypeMin;
proto.parsingFlags = _valid.parsingFlags;
proto.set = _getSet.stringSet;
proto.startOf = _startEndOf.startOf;
proto.subtract = _addSubtract.subtract;
proto.toArray = _toType.toArray;
proto.toObject = _toType.toObject;
proto.toDate = _toType.toDate;
proto.toISOString = _format.toISOString;
proto.inspect = _format.inspect;
proto.toJSON = _toType.toJSON;
proto.toString = _format.toString;
proto.unix = _toType.unix;
proto.valueOf = _toType.valueOf;
proto.creationData = _creationData.creationData;

// Year

proto.year = _year.getSetYear;
proto.isLeapYear = _year.getIsLeapYear;

// Week Year

proto.weekYear = _weekYear.getSetWeekYear;
proto.isoWeekYear = _weekYear.getSetISOWeekYear;

// Quarter

proto.quarter = proto.quarters = _quarter.getSetQuarter;

// Month

proto.month = _month.getSetMonth;
proto.daysInMonth = _month.getDaysInMonth;

// Week

proto.week = proto.weeks = _week.getSetWeek;
proto.isoWeek = proto.isoWeeks = _week.getSetISOWeek;
proto.weeksInYear = _weekYear.getWeeksInYear;
proto.isoWeeksInYear = _weekYear.getISOWeeksInYear;

// Day

proto.date = _dayOfMonth.getSetDayOfMonth;
proto.day = proto.days = _dayOfWeek.getSetDayOfWeek;
proto.weekday = _dayOfWeek.getSetLocaleDayOfWeek;
proto.isoWeekday = _dayOfWeek.getSetISODayOfWeek;
proto.dayOfYear = _dayOfYear.getSetDayOfYear;

// Hour

proto.hour = proto.hours = _hour.getSetHour;

// Minute

proto.minute = proto.minutes = _minute.getSetMinute;

// Second

proto.second = proto.seconds = _second.getSetSecond;

// Millisecond

proto.millisecond = proto.milliseconds = _millisecond.getSetMillisecond;

// Offset

proto.utcOffset = _offset.getSetOffset;
proto.utc = _offset.setOffsetToUTC;
proto.local = _offset.setOffsetToLocal;
proto.parseZone = _offset.setOffsetToParsedOffset;
proto.hasAlignedHourOffset = _offset.hasAlignedHourOffset;
proto.isDST = _offset.isDaylightSavingTime;
proto.isLocal = _offset.isLocal;
proto.isUtcOffset = _offset.isUtcOffset;
proto.isUtc = _offset.isUtc;
proto.isUTC = _offset.isUtc;

// Timezone

proto.zoneAbbr = _timezone.getZoneAbbr;
proto.zoneName = _timezone.getZoneName;

// Deprecations

proto.dates = (0, _deprecate.deprecate)('dates accessor is deprecated. Use date instead.', _dayOfMonth.getSetDayOfMonth);
proto.months = (0, _deprecate.deprecate)('months accessor is deprecated. Use month instead', _month.getSetMonth);
proto.years = (0, _deprecate.deprecate)('years accessor is deprecated. Use year instead', _year.getSetYear);
proto.zone = (0, _deprecate.deprecate)('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', _offset.getSetZone);
proto.isDSTShifted = (0, _deprecate.deprecate)('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', _offset.isDaylightSavingTimeShifted);

exports.default = proto;