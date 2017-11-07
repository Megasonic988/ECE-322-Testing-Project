'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.years = exports.months = exports.days = exports.hours = exports.minutes = exports.seconds = exports.milliseconds = undefined;
exports.get = get;
exports.weeks = weeks;

var _aliases = require('../units/aliases');

var _absFloor = require('../utils/abs-floor');

var _absFloor2 = _interopRequireDefault(_absFloor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function get(units) {
    units = (0, _aliases.normalizeUnits)(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = exports.milliseconds = makeGetter('milliseconds');
var seconds = exports.seconds = makeGetter('seconds');
var minutes = exports.minutes = makeGetter('minutes');
var hours = exports.hours = makeGetter('hours');
var days = exports.days = makeGetter('days');
var months = exports.months = makeGetter('months');
var years = exports.years = makeGetter('years');

function weeks() {
    return (0, _absFloor2.default)(this.days() / 7);
}