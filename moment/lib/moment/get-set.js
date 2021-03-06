'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.makeGetSet = makeGetSet;
exports.get = get;
exports.set = set;
exports.stringGet = stringGet;
exports.stringSet = stringSet;

var _aliases = require('../units/aliases');

var _priorities = require('../units/priorities');

var _hooks = require('../utils/hooks');

var _isFunction = require('../utils/is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _month = require('../units/month');

var _year = require('../units/year');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function makeGetSet(unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            _hooks.hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (unit === 'FullYear' && (0, _year.isLeapYear)(mom.year())) {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), (0, _month.daysInMonth)(value, mom.month()));
        } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet(units) {
    units = (0, _aliases.normalizeUnits)(units);
    if ((0, _isFunction2.default)(this[units])) {
        return this[units]();
    }
    return this;
}

function stringSet(units, value) {
    if ((typeof units === 'undefined' ? 'undefined' : _typeof(units)) === 'object') {
        units = (0, _aliases.normalizeObjectUnits)(units);
        var prioritized = (0, _priorities.getPrioritizedUnits)(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = (0, _aliases.normalizeUnits)(units);
        if ((0, _isFunction2.default)(this[units])) {
            return this[units](value);
        }
    }
    return this;
}