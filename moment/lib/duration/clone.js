'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = clone;

var _create = require('./create');

function clone() {
    return (0, _create.createDuration)(this);
}