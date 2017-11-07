'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValid = isValid;
exports.createInvalid = createInvalid;

var _extend = require('../utils/extend');

var _extend2 = _interopRequireDefault(_extend);

var _utc = require('./utc');

var _parsingFlags = require('../create/parsing-flags');

var _parsingFlags2 = _interopRequireDefault(_parsingFlags);

var _some = require('../utils/some');

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValid(m) {
    if (m._isValid == null) {
        var flags = (0, _parsingFlags2.default)(m);
        var parsedParts = _some2.default.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.weekdayMismatch && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || flags.meridiem && parsedParts);

        if (m._strict) {
            isNowValid = isNowValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid(flags) {
    var m = (0, _utc.createUTC)(NaN);
    if (flags != null) {
        (0, _extend2.default)((0, _parsingFlags2.default)(m), flags);
    } else {
        (0, _parsingFlags2.default)(m).userInvalidated = true;
    }

    return m;
}