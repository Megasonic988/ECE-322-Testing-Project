'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultLocaleWeekdaysMin = exports.defaultLocaleWeekdaysShort = exports.defaultLocaleWeekdays = undefined;
exports.localeWeekdays = localeWeekdays;
exports.localeWeekdaysShort = localeWeekdaysShort;
exports.localeWeekdaysMin = localeWeekdaysMin;
exports.localeWeekdaysParse = localeWeekdaysParse;
exports.getSetDayOfWeek = getSetDayOfWeek;
exports.getSetLocaleDayOfWeek = getSetLocaleDayOfWeek;
exports.getSetISODayOfWeek = getSetISODayOfWeek;
exports.weekdaysRegex = weekdaysRegex;
exports.weekdaysShortRegex = weekdaysShortRegex;
exports.weekdaysMinRegex = weekdaysMinRegex;

var _format = require('../format/format');

var _aliases = require('./aliases');

var _priorities = require('./priorities');

var _regex = require('../parse/regex');

var _token = require('../parse/token');

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

var _isArray = require('../utils/is-array');

var _isArray2 = _interopRequireDefault(_isArray);

var _indexOf = require('../utils/index-of');

var _indexOf2 = _interopRequireDefault(_indexOf);

var _hasOwnProp = require('../utils/has-own-prop');

var _hasOwnProp2 = _interopRequireDefault(_hasOwnProp);

var _utc = require('../create/utc');

var _parsingFlags = require('../create/parsing-flags');

var _parsingFlags2 = _interopRequireDefault(_parsingFlags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING

(0, _format.addFormatToken)('d', 0, 'do', 'day');

(0, _format.addFormatToken)('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

(0, _format.addFormatToken)('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

(0, _format.addFormatToken)('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

(0, _format.addFormatToken)('e', 0, 0, 'weekday');
(0, _format.addFormatToken)('E', 0, 0, 'isoWeekday');

// ALIASES

(0, _aliases.addUnitAlias)('day', 'd');
(0, _aliases.addUnitAlias)('weekday', 'e');
(0, _aliases.addUnitAlias)('isoWeekday', 'E');

// PRIORITY
(0, _priorities.addUnitPriority)('day', 11);
(0, _priorities.addUnitPriority)('weekday', 11);
(0, _priorities.addUnitPriority)('isoWeekday', 11);

// PARSING

(0, _regex.addRegexToken)('d', _regex.match1to2);
(0, _regex.addRegexToken)('e', _regex.match1to2);
(0, _regex.addRegexToken)('E', _regex.match1to2);
(0, _regex.addRegexToken)('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
(0, _regex.addRegexToken)('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
(0, _regex.addRegexToken)('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

(0, _token.addWeekParseToken)(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        (0, _parsingFlags2.default)(config).invalidWeekday = input;
    }
});

(0, _token.addWeekParseToken)(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = (0, _toInt2.default)(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = exports.defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays(m, format) {
    if (!m) {
        return (0, _isArray2.default)(this._weekdays) ? this._weekdays : this._weekdays['standalone'];
    }
    return (0, _isArray2.default)(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = exports.defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort(m) {
    return m ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = exports.defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin(m) {
    return m ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = (0, _utc.createUTC)([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = _indexOf2.default.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _indexOf2.default.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _indexOf2.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = _indexOf2.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _indexOf2.default.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _indexOf2.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _indexOf2.default.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _indexOf2.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _indexOf2.default.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _indexOf2.default.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _indexOf2.default.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _indexOf2.default.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = (0, _utc.createUTC)([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = _regex.matchWord;
function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0, _hasOwnProp2.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!(0, _hasOwnProp2.default)(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = _regex.matchWord;
function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0, _hasOwnProp2.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!(0, _hasOwnProp2.default)(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = _regex.matchWord;
function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!(0, _hasOwnProp2.default)(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!(0, _hasOwnProp2.default)(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}

function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = (0, _utc.createUTC)([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = (0, _regex.regexEscape)(shortPieces[i]);
        longPieces[i] = (0, _regex.regexEscape)(longPieces[i]);
        mixedPieces[i] = (0, _regex.regexEscape)(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}