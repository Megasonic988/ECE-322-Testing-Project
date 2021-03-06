'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('../moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var months = ['جنوری', 'فروری', 'مارچ', 'اپریل', 'مئی', 'جون', 'جولائی', 'اگست', 'ستمبر', 'اکتوبر', 'نومبر', 'دسمبر']; //! moment.js locale configuration
//! locale : Urdu [ur]
//! author : Sawood Alam : https://github.com/ibnesayeed
//! author : Zack : https://github.com/ZackVision

var days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];

exports.default = _moment2.default.defineLocale('ur', {
    months: months,
    monthsShort: months,
    weekdays: days,
    weekdaysShort: days,
    weekdaysMin: days,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd، D MMMM YYYY HH:mm'
    },
    meridiemParse: /صبح|شام/,
    isPM: function isPM(input) {
        return 'شام' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return 'صبح';
        }
        return 'شام';
    },
    calendar: {
        sameDay: '[آج بوقت] LT',
        nextDay: '[کل بوقت] LT',
        nextWeek: 'dddd [بوقت] LT',
        lastDay: '[گذشتہ روز بوقت] LT',
        lastWeek: '[گذشتہ] dddd [بوقت] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s بعد',
        past: '%s قبل',
        s: 'چند سیکنڈ',
        m: 'ایک منٹ',
        mm: '%d منٹ',
        h: 'ایک گھنٹہ',
        hh: '%d گھنٹے',
        d: 'ایک دن',
        dd: '%d دن',
        M: 'ایک ماہ',
        MM: '%d ماہ',
        y: 'ایک سال',
        yy: '%d سال'
    },
    preparse: function preparse(string) {
        return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
        return string.replace(/,/g, '،');
    },
    week: {
        dow: 1, // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
});