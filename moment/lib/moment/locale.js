'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lang = undefined;
exports.locale = locale;
exports.localeData = localeData;

var _locales = require('../locale/locales');

var _deprecate = require('../utils/deprecate');

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = (0, _locales.getLocale)(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = exports.lang = (0, _deprecate.deprecate)('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (key) {
    if (key === undefined) {
        return this.localeData();
    } else {
        return this.locale(key);
    }
});

function localeData() {
    return this._locale;
}