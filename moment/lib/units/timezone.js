'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getZoneAbbr = getZoneAbbr;
exports.getZoneName = getZoneName;

var _format = require('../format/format');

// FORMATTING

(0, _format.addFormatToken)('z', 0, 0, 'zoneAbbr');
(0, _format.addFormatToken)('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}