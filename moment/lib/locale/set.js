'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.set = set;
exports.mergeConfigs = mergeConfigs;

var _isFunction = require('../utils/is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _extend = require('../utils/extend');

var _extend2 = _interopRequireDefault(_extend);

var _isObject = require('../utils/is-object');

var _isObject2 = _interopRequireDefault(_isObject);

var _hasOwnProp = require('../utils/has-own-prop');

var _hasOwnProp2 = _interopRequireDefault(_hasOwnProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function set(config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if ((0, _isFunction2.default)(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + '|' + /\d{1,2}/.source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = (0, _extend2.default)({}, parentConfig),
        prop;
    for (prop in childConfig) {
        if ((0, _hasOwnProp2.default)(childConfig, prop)) {
            if ((0, _isObject2.default)(parentConfig[prop]) && (0, _isObject2.default)(childConfig[prop])) {
                res[prop] = {};
                (0, _extend2.default)(res[prop], parentConfig[prop]);
                (0, _extend2.default)(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if ((0, _hasOwnProp2.default)(parentConfig, prop) && !(0, _hasOwnProp2.default)(childConfig, prop) && (0, _isObject2.default)(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = (0, _extend2.default)({}, res[prop]);
        }
    }
    return res;
}