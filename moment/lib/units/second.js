'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetSecond = undefined;

var _getSet = require('../moment/get-set');

var _format = require('../format/format');

var _aliases = require('./aliases');

var _priorities = require('./priorities');

var _regex = require('../parse/regex');

var _token = require('../parse/token');

var _constants = require('./constants');

// FORMATTING

(0, _format.addFormatToken)('s', ['ss', 2], 0, 'second');

// ALIASES

(0, _aliases.addUnitAlias)('second', 's');

// PRIORITY

(0, _priorities.addUnitPriority)('second', 15);

// PARSING

(0, _regex.addRegexToken)('s', _regex.match1to2);
(0, _regex.addRegexToken)('ss', _regex.match1to2, _regex.match2);
(0, _token.addParseToken)(['s', 'ss'], _constants.SECOND);

// MOMENTS

var getSetSecond = exports.getSetSecond = (0, _getSet.makeGetSet)('Seconds', false);