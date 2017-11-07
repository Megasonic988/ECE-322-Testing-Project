'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSetHour = exports.defaultLocaleMeridiemParse = undefined;
exports.localeIsPM = localeIsPM;
exports.localeMeridiem = localeMeridiem;

var _getSet = require('../moment/get-set');

var _format = require('../format/format');

var _aliases = require('./aliases');

var _priorities = require('./priorities');

var _regex = require('../parse/regex');

var _token = require('../parse/token');

var _constants = require('./constants');

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

var _zeroFill = require('../utils/zero-fill');

var _zeroFill2 = _interopRequireDefault(_zeroFill);

var _parsingFlags = require('../create/parsing-flags');

var _parsingFlags2 = _interopRequireDefault(_parsingFlags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

(0, _format.addFormatToken)('H', ['HH', 2], 0, 'hour');
(0, _format.addFormatToken)('h', ['hh', 2], 0, hFormat);
(0, _format.addFormatToken)('k', ['kk', 2], 0, kFormat);

(0, _format.addFormatToken)('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + (0, _zeroFill2.default)(this.minutes(), 2);
});

(0, _format.addFormatToken)('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + (0, _zeroFill2.default)(this.minutes(), 2) + (0, _zeroFill2.default)(this.seconds(), 2);
});

(0, _format.addFormatToken)('Hmm', 0, 0, function () {
    return '' + this.hours() + (0, _zeroFill2.default)(this.minutes(), 2);
});

(0, _format.addFormatToken)('Hmmss', 0, 0, function () {
    return '' + this.hours() + (0, _zeroFill2.default)(this.minutes(), 2) + (0, _zeroFill2.default)(this.seconds(), 2);
});

function meridiem(token, lowercase) {
    (0, _format.addFormatToken)(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

(0, _aliases.addUnitAlias)('hour', 'h');

// PRIORITY
(0, _priorities.addUnitPriority)('hour', 13);

// PARSING

function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}

(0, _regex.addRegexToken)('a', matchMeridiem);
(0, _regex.addRegexToken)('A', matchMeridiem);
(0, _regex.addRegexToken)('H', _regex.match1to2);
(0, _regex.addRegexToken)('h', _regex.match1to2);
(0, _regex.addRegexToken)('k', _regex.match1to2);
(0, _regex.addRegexToken)('HH', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('hh', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('kk', _regex.match1to2, _regex.match2);

(0, _regex.addRegexToken)('hmm', _regex.match3to4);
(0, _regex.addRegexToken)('hmmss', _regex.match5to6);
(0, _regex.addRegexToken)('Hmm', _regex.match3to4);
(0, _regex.addRegexToken)('Hmmss', _regex.match5to6);

(0, _token.addParseToken)(['H', 'HH'], _constants.HOUR);
(0, _token.addParseToken)(['k', 'kk'], function (input, array, config) {
    var kInput = (0, _toInt2.default)(input);
    array[_constants.HOUR] = kInput === 24 ? 0 : kInput;
});
(0, _token.addParseToken)(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
(0, _token.addParseToken)(['h', 'hh'], function (input, array, config) {
    array[_constants.HOUR] = (0, _toInt2.default)(input);
    (0, _parsingFlags2.default)(config).bigHour = true;
});
(0, _token.addParseToken)('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants.HOUR] = (0, _toInt2.default)(input.substr(0, pos));
    array[_constants.MINUTE] = (0, _toInt2.default)(input.substr(pos));
    (0, _parsingFlags2.default)(config).bigHour = true;
});
(0, _token.addParseToken)('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[_constants.HOUR] = (0, _toInt2.default)(input.substr(0, pos1));
    array[_constants.MINUTE] = (0, _toInt2.default)(input.substr(pos1, 2));
    array[_constants.SECOND] = (0, _toInt2.default)(input.substr(pos2));
    (0, _parsingFlags2.default)(config).bigHour = true;
});
(0, _token.addParseToken)('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants.HOUR] = (0, _toInt2.default)(input.substr(0, pos));
    array[_constants.MINUTE] = (0, _toInt2.default)(input.substr(pos));
});
(0, _token.addParseToken)('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[_constants.HOUR] = (0, _toInt2.default)(input.substr(0, pos1));
    array[_constants.MINUTE] = (0, _toInt2.default)(input.substr(pos1, 2));
    array[_constants.SECOND] = (0, _toInt2.default)(input.substr(pos2));
});

// LOCALES

function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
}

var defaultLocaleMeridiemParse = exports.defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}

// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = exports.getSetHour = (0, _getSet.makeGetSet)('Hours', true);