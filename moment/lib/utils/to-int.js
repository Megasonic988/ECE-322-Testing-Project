'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = toInt;

var _absFloor = require('./abs-floor');

var _absFloor2 = _interopRequireDefault(_absFloor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = (0, _absFloor2.default)(coercedNumber);
    }

    return value;
}