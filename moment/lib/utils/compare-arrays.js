'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = compareArrays;

var _toInt = require('./to-int');

var _toInt2 = _interopRequireDefault(_toInt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if (dontConvert && array1[i] !== array2[i] || !dontConvert && (0, _toInt2.default)(array1[i]) !== (0, _toInt2.default)(array2[i])) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}