'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSetMillisecond = undefined;

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

(0, _format.addFormatToken)('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

(0, _format.addFormatToken)(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

(0, _format.addFormatToken)(0, ['SSS', 3], 0, 'millisecond');
(0, _format.addFormatToken)(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
(0, _format.addFormatToken)(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
(0, _format.addFormatToken)(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
(0, _format.addFormatToken)(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
(0, _format.addFormatToken)(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
(0, _format.addFormatToken)(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});

// ALIASES

(0, _aliases.addUnitAlias)('millisecond', 'ms');

// PRIORITY

(0, _priorities.addUnitPriority)('millisecond', 16);

// PARSING

(0, _regex.addRegexToken)('S', _regex.match1to3, _regex.match1);
(0, _regex.addRegexToken)('SS', _regex.match1to3, _regex.match2);
(0, _regex.addRegexToken)('SSS', _regex.match1to3, _regex.match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    (0, _regex.addRegexToken)(token, _regex.matchUnsigned);
}

function parseMs(input, array) {
    array[_constants.MILLISECOND] = (0, _toInt2.default)(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    (0, _token.addParseToken)(token, parseMs);
}
// MOMENTS

var getSetMillisecond = exports.getSetMillisecond = (0, _getSet.makeGetSet)('Milliseconds', false);