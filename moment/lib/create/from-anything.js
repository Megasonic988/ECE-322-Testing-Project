'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.prepareConfig = prepareConfig;
exports.createLocalOrUTC = createLocalOrUTC;

var _isArray = require('../utils/is-array');

var _isArray2 = _interopRequireDefault(_isArray);

var _isObject = require('../utils/is-object');

var _isObject2 = _interopRequireDefault(_isObject);

var _isObjectEmpty = require('../utils/is-object-empty');

var _isObjectEmpty2 = _interopRequireDefault(_isObjectEmpty);

var _isUndefined = require('../utils/is-undefined');

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _isNumber = require('../utils/is-number');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isDate = require('../utils/is-date');

var _isDate2 = _interopRequireDefault(_isDate);

var _map = require('../utils/map');

var _map2 = _interopRequireDefault(_map);

var _valid = require('./valid');

var _constructor = require('../moment/constructor');

var _locales = require('../locale/locales');

var _hooks = require('../utils/hooks');

var _checkOverflow = require('./check-overflow');

var _checkOverflow2 = _interopRequireDefault(_checkOverflow);

var _fromStringAndArray = require('./from-string-and-array');

var _fromStringAndFormat = require('./from-string-and-format');

var _fromString = require('./from-string');

var _fromArray = require('./from-array');

var _fromObject = require('./from-object');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createFromConfig(config) {
    var res = new _constructor.Moment((0, _checkOverflow2.default)(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig(config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || (0, _locales.getLocale)(config._l);

    if (input === null || format === undefined && input === '') {
        return (0, _valid.createInvalid)({ nullInput: true });
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if ((0, _constructor.isMoment)(input)) {
        return new _constructor.Moment((0, _checkOverflow2.default)(input));
    } else if ((0, _isDate2.default)(input)) {
        config._d = input;
    } else if ((0, _isArray2.default)(format)) {
        (0, _fromStringAndArray.configFromStringAndArray)(config);
    } else if (format) {
        (0, _fromStringAndFormat.configFromStringAndFormat)(config);
    } else {
        configFromInput(config);
    }

    if (!(0, _valid.isValid)(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if ((0, _isUndefined2.default)(input)) {
        config._d = new Date(_hooks.hooks.now());
    } else if ((0, _isDate2.default)(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        (0, _fromString.configFromString)(config);
    } else if ((0, _isArray2.default)(input)) {
        config._a = (0, _map2.default)(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        (0, _fromArray.configFromArray)(config);
    } else if ((0, _isObject2.default)(input)) {
        (0, _fromObject.configFromObject)(config);
    } else if ((0, _isNumber2.default)(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        _hooks.hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((0, _isObject2.default)(input) && (0, _isObjectEmpty2.default)(input) || (0, _isArray2.default)(input) && input.length === 0) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}