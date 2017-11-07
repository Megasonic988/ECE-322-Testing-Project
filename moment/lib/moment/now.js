"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var now = exports.now = function now() {
    return Date.now ? Date.now() : +new Date();
};