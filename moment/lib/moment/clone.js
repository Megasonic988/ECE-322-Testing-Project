'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = clone;

var _constructor = require('./constructor');

function clone() {
    return new _constructor.Moment(this);
}