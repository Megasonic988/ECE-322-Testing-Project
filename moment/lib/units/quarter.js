'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSetQuarter = getSetQuarter;

var _format = require('../format/format');

var _aliases = require('./aliases');

var _priorities = require('./priorities');

var _regex = require('../parse/regex');

var _token = require('../parse/token');

var _constants = require('./constants');

var _toInt = require('../utils/to-int');

var _toInt2 = _interopRequireDefault(_toInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FORMATTING

(0, _format.addFormatToken)('Q', 0, 'Qo', 'quarter');

// ALIASES

(0, _aliases.addUnitAlias)('quarter', 'Q');

// PRIORITY

(0, _priorities.addUnitPriority)('quarter', 7);

// PARSING

(0, _regex.addRegexToken)('Q', _regex.match1);
(0, _token.addParseToken)('Q', function (input, array) {
    array[_constants.MONTH] = ((0, _toInt2.default)(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}