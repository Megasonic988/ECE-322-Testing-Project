'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSetDayOfMonth = undefined;

var _getSet = require('../moment/get-set');

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

(0, _format.addFormatToken)('D', ['DD', 2], 'Do', 'date');

// ALIASES

(0, _aliases.addUnitAlias)('date', 'D');

// PRIOROITY
(0, _priorities.addUnitPriority)('date', 9);

// PARSING

(0, _regex.addRegexToken)('D', _regex.match1to2);
(0, _regex.addRegexToken)('DD', _regex.match1to2, _regex.match2);
(0, _regex.addRegexToken)('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ? locale._dayOfMonthOrdinalParse || locale._ordinalParse : locale._dayOfMonthOrdinalParseLenient;
});

(0, _token.addParseToken)(['D', 'DD'], _constants.DATE);
(0, _token.addParseToken)('Do', function (input, array) {
    array[_constants.DATE] = (0, _toInt2.default)(input.match(_regex.match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = exports.getSetDayOfMonth = (0, _getSet.makeGetSet)('Date', true);