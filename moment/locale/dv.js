'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = require('../moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var months = ['ޖެނުއަރީ', 'ފެބްރުއަރީ', 'މާރިޗު', 'އޭޕްރީލު', 'މޭ', 'ޖޫން', 'ޖުލައި', 'އޯގަސްޓު', 'ސެޕްޓެމްބަރު', 'އޮކްޓޯބަރު', 'ނޮވެމްބަރު', 'ޑިސެމްބަރު'],
    weekdays = ['އާދިއްތަ', 'ހޯމަ', 'އަންގާރަ', 'ބުދަ', 'ބުރާސްފަތި', 'ހުކުރު', 'ހޮނިހިރު']; //! moment.js locale configuration
//! locale : Maldivian [dv]
//! author : Jawish Hameed : https://github.com/jawish

exports.default = _moment2.default.defineLocale('dv', {
    months: months,
    monthsShort: months,
    weekdays: weekdays,
    weekdaysShort: weekdays,
    weekdaysMin: 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
    longDateFormat: {

        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/M/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /މކ|މފ/,
    isPM: function isPM(input) {
        return 'މފ' === input;
    },
    meridiem: function meridiem(hour, minute, isLower) {
        if (hour < 12) {
            return 'މކ';
        } else {
            return 'މފ';
        }
    },
    calendar: {
        sameDay: '[މިއަދު] LT',
        nextDay: '[މާދަމާ] LT',
        nextWeek: 'dddd LT',
        lastDay: '[އިއްޔެ] LT',
        lastWeek: '[ފާއިތުވި] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'ތެރޭގައި %s',
        past: 'ކުރިން %s',
        s: 'ސިކުންތުކޮޅެއް',
        m: 'މިނިޓެއް',
        mm: 'މިނިޓު %d',
        h: 'ގަޑިއިރެއް',
        hh: 'ގަޑިއިރު %d',
        d: 'ދުވަހެއް',
        dd: 'ދުވަސް %d',
        M: 'މަހެއް',
        MM: 'މަސް %d',
        y: 'އަހަރެއް',
        yy: 'އަހަރު %d'
    },
    preparse: function preparse(string) {
        return string.replace(/،/g, ',');
    },
    postformat: function postformat(string) {
        return string.replace(/,/g, '،');
    },
    week: {
        dow: 7, // Sunday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
});