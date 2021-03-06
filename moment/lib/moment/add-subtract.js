'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subtract = exports.add = undefined;
exports.addSubtract = addSubtract;

var _getSet = require('./get-set');

var _month = require('../units/month');

var _create = require('../duration/create');

var _deprecate = require('../utils/deprecate');

var _hooks = require('../utils/hooks');

var _absRound = require('../utils/abs-round');

var _absRound2 = _interopRequireDefault(_absRound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            (0, _deprecate.deprecateSimple)(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' + 'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val;val = period;period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = (0, _create.createDuration)(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = (0, _absRound2.default)(duration._days),
        months = (0, _absRound2.default)(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        (0, _month.setMonth)(mom, (0, _getSet.get)(mom, 'Month') + months * isAdding);
    }
    if (days) {
        (0, _getSet.set)(mom, 'Date', (0, _getSet.get)(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        _hooks.hooks.updateOffset(mom, days || months);
    }
}

var add = exports.add = createAdder(1, 'add');
var subtract = exports.subtract = createAdder(-1, 'subtract');