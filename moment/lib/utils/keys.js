'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _hasOwnProp = require('./has-own-prop');

var _hasOwnProp2 = _interopRequireDefault(_hasOwnProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys;

if (Object.keys) {
    exports.default = keys = Object.keys;
} else {
    exports.default = keys = function keys(obj) {
        var i,
            res = [];
        for (i in obj) {
            if ((0, _hasOwnProp2.default)(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

exports.default = keys;