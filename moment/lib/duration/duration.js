'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSetRelativeTimeThreshold = exports.getSetRelativeTimeRounding = exports.isDuration = exports.createDuration = undefined;

require('./prototype');

var _create = require('./create');

var _constructor = require('./constructor');

var _humanize = require('./humanize');

// Side effect imports
exports.createDuration = _create.createDuration;
exports.isDuration = _constructor.isDuration;
exports.getSetRelativeTimeRounding = _humanize.getSetRelativeTimeRounding;
exports.getSetRelativeTimeThreshold = _humanize.getSetRelativeTimeThreshold;