"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.creationData = creationData;
function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}