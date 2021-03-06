'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configFromStringAndFormat = configFromStringAndFormat;

var _fromString = require('./from-string');

var _fromArray = require('./from-array');

var _regex = require('../parse/regex');

var _token = require('../parse/token');

var _format = require('../format/format');

var _checkOverflow = require('./check-overflow');

var _checkOverflow2 = _interopRequireDefault(_checkOverflow);

var _constants = require('../units/constants');

var _hooks = require('../utils/hooks');

var _parsingFlags = require('./parsing-flags');

var _parsingFlags2 = _interopRequireDefault(_parsingFlags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// constant that refers to the ISO standard
_hooks.hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
_hooks.hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === _hooks.hooks.ISO_8601) {
        (0, _fromString.configFromISO)(config);
        return;
    }
    if (config._f === _hooks.hooks.RFC_2822) {
        (0, _fromString.configFromRFC2822)(config);
        return;
    }
    config._a = [];
    (0, _parsingFlags2.default)(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = (0, _format.expandFormat)(config._f, config._locale).match(_format.formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match((0, _regex.getParseRegexForToken)(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                (0, _parsingFlags2.default)(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (_format.formatTokenFunctions[token]) {
            if (parsedInput) {
                (0, _parsingFlags2.default)(config).empty = false;
            } else {
                (0, _parsingFlags2.default)(config).unusedTokens.push(token);
            }
            (0, _token.addTimeToArrayFromToken)(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
            (0, _parsingFlags2.default)(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    (0, _parsingFlags2.default)(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        (0, _parsingFlags2.default)(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[_constants.HOUR] <= 12 && (0, _parsingFlags2.default)(config).bigHour === true && config._a[_constants.HOUR] > 0) {
        (0, _parsingFlags2.default)(config).bigHour = undefined;
    }

    (0, _parsingFlags2.default)(config).parsedDateParts = config._a.slice(0);
    (0, _parsingFlags2.default)(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[_constants.HOUR] = meridiemFixWrap(config._locale, config._a[_constants.HOUR], config._meridiem);

    (0, _fromArray.configFromArray)(config);
    (0, _checkOverflow2.default)(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}