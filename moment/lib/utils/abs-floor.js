"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = absFloor;
function absFloor(number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}