'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.to = to;
exports.toNow = toNow;

var _create = require('../duration/create');

var _local = require('../create/local');

var _constructor = require('../moment/constructor');

function to(time, withoutSuffix) {
    if (this.isValid() && ((0, _constructor.isMoment)(time) && time.isValid() || (0, _local.createLocal)(time).isValid())) {
        return (0, _create.createDuration)({ from: this, to: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow(withoutSuffix) {
    return this.to((0, _local.createLocal)(), withoutSuffix);
}