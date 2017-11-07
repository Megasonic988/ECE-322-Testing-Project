'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAfter = isAfter;
exports.isBefore = isBefore;
exports.isBetween = isBetween;
exports.isSame = isSame;
exports.isSameOrAfter = isSameOrAfter;
exports.isSameOrBefore = isSameOrBefore;

var _constructor = require('./constructor');

var _aliases = require('../units/aliases');

var _local = require('../create/local');

var _isUndefined = require('../utils/is-undefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAfter(input, units) {
    var localInput = (0, _constructor.isMoment)(input) ? input : (0, _local.createLocal)(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0, _aliases.normalizeUnits)(!(0, _isUndefined2.default)(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore(input, units) {
    var localInput = (0, _constructor.isMoment)(input) ? input : (0, _local.createLocal)(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0, _aliases.normalizeUnits)(!(0, _isUndefined2.default)(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween(from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame(input, units) {
    var localInput = (0, _constructor.isMoment)(input) ? input : (0, _local.createLocal)(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = (0, _aliases.normalizeUnits)(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
}

function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
}