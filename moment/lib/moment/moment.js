'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.momentPrototype = exports.createInvalid = exports.createInZone = exports.createLocal = exports.createUnix = exports.createUTC = exports.isMoment = exports.max = exports.min = exports.now = undefined;

var _local = require('../create/local');

var _utc = require('../create/utc');

var _valid = require('../create/valid');

var _constructor = require('./constructor');

var _minMax = require('./min-max');

var _now = require('./now');

var _prototype = require('./prototype');

var _prototype2 = _interopRequireDefault(_prototype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createUnix(input) {
    return (0, _local.createLocal)(input * 1000);
}

function createInZone() {
    return _local.createLocal.apply(null, arguments).parseZone();
}

exports.now = _now.now;
exports.min = _minMax.min;
exports.max = _minMax.max;
exports.isMoment = _constructor.isMoment;
exports.createUTC = _utc.createUTC;
exports.createUnix = createUnix;
exports.createLocal = _local.createLocal;
exports.createInZone = createInZone;
exports.createInvalid = _valid.createInvalid;
exports.momentPrototype = _prototype2.default;