'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.configFromStringAndArray = configFromStringAndArray;

var _constructor = require('../moment/constructor');

var _fromStringAndFormat = require('./from-string-and-format');

var _parsingFlags = require('./parsing-flags');

var _parsingFlags2 = _interopRequireDefault(_parsingFlags);

var _valid = require('./valid');

var _extend = require('../utils/extend');

var _extend2 = _interopRequireDefault(_extend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig, bestMoment, scoreToBeat, i, currentScore;

    if (config._f.length === 0) {
        (0, _parsingFlags2.default)(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = (0, _constructor.copyConfig)({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        (0, _fromStringAndFormat.configFromStringAndFormat)(tempConfig);

        if (!(0, _valid.isValid)(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += (0, _parsingFlags2.default)(tempConfig).charsLeftOver;

        //or tokens
        currentScore += (0, _parsingFlags2.default)(tempConfig).unusedTokens.length * 10;

        (0, _parsingFlags2.default)(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    (0, _extend2.default)(config, bestMoment || tempConfig);
}