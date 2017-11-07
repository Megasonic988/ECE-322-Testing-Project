'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addParseToken = addParseToken;
exports.addWeekParseToken = addWeekParseToken;
exports.addTimeToArrayFromToken = addTimeToArrayFromToken;

var _hasOwnProp = require('../utils/has-own-prop');

var _hasOwnProp2 = _interopRequireDefault(_hasOwnProp);

var _isNumber = require('../utils/is-number');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tokens = {};

function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if ((0, _isNumber2.default)(callback)) {
        func = function func(input, array) {
            array[callback] = (0, _toInt2.default)(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && (0, _hasOwnProp2.default)(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}