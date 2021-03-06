'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.matchWord = exports.matchTimestamp = exports.matchShortOffset = exports.matchOffset = exports.matchSigned = exports.matchUnsigned = exports.match1to6 = exports.match1to4 = exports.match1to3 = exports.match5to6 = exports.match3to4 = exports.match1to2 = exports.match6 = exports.match4 = exports.match3 = exports.match2 = exports.match1 = undefined;
exports.addRegexToken = addRegexToken;
exports.getParseRegexForToken = getParseRegexForToken;
exports.regexEscape = regexEscape;

var _hasOwnProp = require('../utils/has-own-prop');

var _hasOwnProp2 = _interopRequireDefault(_hasOwnProp);

var _isFunction = require('../utils/is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var match1 = exports.match1 = /\d/; //       0 - 9
var match2 = exports.match2 = /\d\d/; //      00 - 99
var match3 = exports.match3 = /\d{3}/; //     000 - 999
var match4 = exports.match4 = /\d{4}/; //    0000 - 9999
var match6 = exports.match6 = /[+-]?\d{6}/; // -999999 - 999999
var match1to2 = exports.match1to2 = /\d\d?/; //       0 - 99
var match3to4 = exports.match3to4 = /\d\d\d\d?/; //     999 - 9999
var match5to6 = exports.match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3 = exports.match1to3 = /\d{1,3}/; //       0 - 999
var match1to4 = exports.match1to4 = /\d{1,4}/; //       0 - 9999
var match1to6 = exports.match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999

var matchUnsigned = exports.matchUnsigned = /\d+/; //       0 - inf
var matchSigned = exports.matchSigned = /[+-]?\d+/; //    -inf - inf

var matchOffset = exports.matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = exports.matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = exports.matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = exports.matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

var regexes = {};

function addRegexToken(token, regex, strictRegex) {
    regexes[token] = (0, _isFunction2.default)(regex) ? regex : function (isStrict, localeData) {
        return isStrict && strictRegex ? strictRegex : regex;
    };
}

function getParseRegexForToken(token, config) {
    if (!(0, _hasOwnProp2.default)(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}