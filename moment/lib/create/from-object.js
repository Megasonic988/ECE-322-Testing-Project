'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configFromObject = configFromObject;

var _aliases = require('../units/aliases');

var _fromArray = require('./from-array');

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = (0, _aliases.normalizeObjectUnits)(config._i);
    config._a = (0, _map2.default)([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    (0, _fromArray.configFromArray)(config);
}