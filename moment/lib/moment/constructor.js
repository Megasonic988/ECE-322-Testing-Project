'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.copyConfig = copyConfig;
exports.Moment = Moment;
exports.isMoment = isMoment;

var _hooks = require('../utils/hooks');

var _hasOwnProp = require('../utils/has-own-prop');

var _hasOwnProp2 = _interopRequireDefault(_hasOwnProp);

var _isUndefined = require('../utils/is-undefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _parsingFlags = require('../create/parsing-flags');

var _parsingFlags2 = _interopRequireDefault(_parsingFlags);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = _hooks.hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!(0, _isUndefined2.default)(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!(0, _isUndefined2.default)(from._i)) {
        to._i = from._i;
    }
    if (!(0, _isUndefined2.default)(from._f)) {
        to._f = from._f;
    }
    if (!(0, _isUndefined2.default)(from._l)) {
        to._l = from._l;
    }
    if (!(0, _isUndefined2.default)(from._strict)) {
        to._strict = from._strict;
    }
    if (!(0, _isUndefined2.default)(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!(0, _isUndefined2.default)(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!(0, _isUndefined2.default)(from._offset)) {
        to._offset = from._offset;
    }
    if (!(0, _isUndefined2.default)(from._pf)) {
        to._pf = (0, _parsingFlags2.default)(from);
    }
    if (!(0, _isUndefined2.default)(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!(0, _isUndefined2.default)(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        _hooks.hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment(obj) {
    return obj instanceof Moment || obj != null && obj._isAMomentObject != null;
}