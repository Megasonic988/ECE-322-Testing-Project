'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.asYears = exports.asMonths = exports.asWeeks = exports.asDays = exports.asHours = exports.asMinutes = exports.asSeconds = exports.asMilliseconds = undefined;
exports.as = as;
exports.valueOf = valueOf;

var _bubble = require('./bubble');

var _aliases = require('../units/aliases');

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function as(units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = (0, _aliases.normalizeUnits)(units);

    if (units === 'month' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + (0, _bubble.daysToMonths)(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round((0, _bubble.monthsToDays)(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hour':
                return days * 24 + milliseconds / 36e5;
            case 'minute':
                return days * 1440 + milliseconds / 6e4;
            case 'second':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf() {
    if (!this.isValid()) {
        return NaN;
    }
    return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + (0, _toInt2.default)(this._months / 12) * 31536e6;
}

function makeAs(alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = exports.asMilliseconds = makeAs('ms');
var asSeconds = exports.asSeconds = makeAs('s');
var asMinutes = exports.asMinutes = makeAs('m');
var asHours = exports.asHours = makeAs('h');
var asDays = exports.asDays = makeAs('d');
var asWeeks = exports.asWeeks = makeAs('w');
var asMonths = exports.asMonths = makeAs('M');
var asYears = exports.asYears = makeAs('y');