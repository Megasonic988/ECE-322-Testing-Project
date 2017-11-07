'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toString = toString;
exports.toISOString = toISOString;
exports.inspect = inspect;
exports.format = format;

var _format = require('../format/format');

var _hooks = require('../utils/hooks');

var _isFunction = require('../utils/is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_hooks.hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
_hooks.hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return (0, _format.formatMoment)(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if ((0, _isFunction2.default)(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return (0, _format.formatMoment)(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect() {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format(inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? _hooks.hooks.defaultFormatUtc : _hooks.hooks.defaultFormat;
    }
    var output = (0, _format.formatMoment)(this, inputString);
    return this.localeData().postformat(output);
}