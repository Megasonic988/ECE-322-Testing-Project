'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('../moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var months = ['جنوري', 'فيبروري', 'مارچ', 'اپريل', 'مئي', 'جون', 'جولاءِ', 'آگسٽ', 'سيپٽمبر', 'آڪٽوبر', 'نومبر', 'ڊسمبر']; //! moment.js locale configuration
//! locale : Sindhi [sd]
//! author : Narain Sagar : https://github.com/narainsagar

var days = ['آچر', 'سومر', 'اڱارو', 'اربع', 'خميس', 'جمع', 'ڇنڇر'];

exports.default = _moment2.default.defineLocale('sd', {
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
        sameDay: '[اڄ] LT',
        nextDay: '[سڀاڻي] LT',
        nextWeek: 'dddd [اڳين هفتي تي] LT',
        lastDay: '[ڪالهه] LT',
        lastWeek: '[گزريل هفتي] dddd [تي] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s پوء',
        past: '%s اڳ',
        s: 'چند سيڪنڊ',
        m: 'هڪ منٽ',
        mm: '%d منٽ',
        h: 'هڪ ڪلاڪ',
        hh: '%d ڪلاڪ',
        d: 'هڪ ڏينهن',
        dd: '%d ڏينهن',
        M: 'هڪ مهينو',
        MM: '%d مهينا',
        y: 'هڪ سال',
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