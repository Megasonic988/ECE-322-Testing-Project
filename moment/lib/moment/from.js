'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.from = from;
exports.fromNow = fromNow;

var _create = require('../duration/create');

var _local = require('../create/local');

var _constructor = require('../moment/constructor');

function from(time, withoutSuffix) {
    if (this.isValid() && ((0, _constructor.isMoment)(time) && time.isValid() || (0, _local.createLocal)(time).isValid())) {
        return (0, _create.createDuration)({ to: this, from: time }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow(withoutSuffix) {
    return this.from((0, _local.createLocal)(), withoutSuffix);
}