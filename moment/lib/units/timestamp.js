'use strict';

var _format = require('../format/format');

var _regex = require('../parse/regex');

var _token = require('../parse/token');

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING

(0, _format.addFormatToken)('X', 0, 0, 'unix');
(0, _format.addFormatToken)('x', 0, 0, 'valueOf');

// PARSING

(0, _regex.addRegexToken)('x', _regex.matchSigned);
(0, _regex.addRegexToken)('X', _regex.matchTimestamp);
(0, _token.addParseToken)('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
(0, _token.addParseToken)('x', function (input, array, config) {
    config._d = new Date((0, _toInt2.default)(input));
});