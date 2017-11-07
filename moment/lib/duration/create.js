'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createDuration = createDuration;

var _constructor = require('./constructor');

var _isNumber = require('../utils/is-number');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

var _absRound = require('../utils/abs-round');

var _absRound2 = _interopRequireDefault(_absRound);

var _hasOwnProp = require('../utils/has-own-prop');

var _hasOwnProp2 = _interopRequireDefault(_hasOwnProp);

var _constants = require('../units/constants');

var _offset = require('../units/offset');

var _local = require('../create/local');

var _valid = require('./valid');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ASP.NET json date format regex
var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration(input, key) {
    var duration = input,

    // matching against regexp is expensive, do it on demand
    match = null,
        sign,
        ret,
        diffRes;

    if ((0, _constructor.isDuration)(input)) {
        duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        };
    } else if ((0, _isNumber2.default)(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: 0,
            d: (0, _toInt2.default)(match[_constants.DATE]) * sign,
            h: (0, _toInt2.default)(match[_constants.HOUR]) * sign,
            m: (0, _toInt2.default)(match[_constants.MINUTE]) * sign,
            s: (0, _toInt2.default)(match[_constants.SECOND]) * sign,
            ms: (0, _toInt2.default)((0, _absRound2.default)(match[_constants.MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : match[1] === '+' ? 1 : 1;
        duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign)
        };
    } else if (duration == null) {
        // checks for null or undefined
        duration = {};
    } else if ((typeof duration === 'undefined' ? 'undefined' : _typeof(duration)) === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference((0, _local.createLocal)(duration.from), (0, _local.createLocal)(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new _constructor.Duration(duration);

    if ((0, _constructor.isDuration)(input) && (0, _hasOwnProp2.default)(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = _constructor.Duration.prototype;
createDuration.invalid = _valid.createInvalid;

function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = { milliseconds: 0, months: 0 };

    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
    }

    other = (0, _offset.cloneWithOffset)(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}