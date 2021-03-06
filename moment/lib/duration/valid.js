'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isDurationValid;
exports.isValid = isValid;
exports.createInvalid = createInvalid;

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

var _indexOf = require('../utils/index-of');

var _indexOf2 = _interopRequireDefault(_indexOf);

var _constructor = require('./constructor');

var _create = require('./create');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(_indexOf2.default.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== (0, _toInt2.default)(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid() {
    return this._isValid;
}

function createInvalid() {
    return (0, _create.createDuration)(NaN);
}