const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing date parsing
 */

 describe('Date Parsing', function() {

    describe('Parsing ISO 8601 Strings with Syntax Driven Testing', function() {

        it('should parse a basic ISO 8601 date string', function() {
            const dateString_iso8601 = '2013-02-08';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);
        });

        it('should parse a ISO 8601 date string with a week date part', function() {
            const dateString_iso8601 = '2013-W06-5';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);
        });

        it('should parse a ISO 8601 date string with an ordinal date part', function() {
            const dateString_iso8601 = '2013-039';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);
        });

        it('should parse a basic ISO 8601 date string with a time part', function() {
            const dateString_iso8601 = '2013-02-08 09:30:26';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);
            expect(date.hour()).to.equal(9);
            expect(date.minute()).to.equal(30); // month is 0 indexed
            expect(date.second()).to.equal(26);
        });
    });

    describe('Parsing ISO 8601 Strings with Equivalence Classes', function() {

        it('should return invalid date for an invalid year (string)', function() {
            const invalidDateString_iso8601 = 'abcd-02-08';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
        });

        it('should return invalid date for an invalid month (0)', function() {
            const invalidDateString_iso8601 = '2013-00-08';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
        });

        it('should return invalid date for an invalid month (13)', function() {
            const invalidDateString_iso8601 = '2013-13-08';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
        });

        it('should return invalid date for an invalid number of days (29) in February', function() {
            const invalidDateString_iso8601 = '2013-02-29';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
        });

        it('should return invalid date for an invalid number of days (31) in June', function() {
            const invalidDateString_iso8601 = '2013-06-31';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
        });

        it('should return valid date for a 29 days in a leap year', function() {
            const dateString_iso8601 = '2008-02-29';
            const date = moment(dateString_iso8601);

            expect(date.isValid()).to.equal(true);
        });

        it('should return invalid date for an invalid year (not 4 numbers)', function() {
            const dateString_iso8601 = '1-02-29';
            const date = moment(dateString_iso8601);

            expect(date.isValid()).to.equal(false);
        });
    });

    describe('Parsing Unix timestamp', function() {

        it('should parse a Unix timestamp', function() {
            const timestamp = 1410715640000; // Sun, 14 Sep 2014 17:27:20 +0000
            const date = moment(timestamp);

            expect(date.year()).to.equal(2014);
            expect(date.month()).to.equal(8);
            expect(date.date()).to.equal(14);
        });

    });

    describe('Parsing Arrays', function() {
        // [year, month, day, hour, minute, second, millisecond]
       
        it('should parse an array', function() {
            const array = [2017, 8, 10, 6, 12, 50, 123];
            const date = moment(array);

            expect(date.year()).to.equal(2017);
            expect(date.month()).to.equal(8);
            expect(date.date()).to.equal(10);
            expect(date.hour()).to.equal(6);
            expect(date.minute()).to.equal(12);
            expect(date.second()).to.equal(50);
            expect(date.millisecond()).to.equal(123);
        });

        it('should parse the date even if there are too many arguments', function() {
            const array = [2017, 8, 10, 6, 12, 50, 123, 1000, 1000, 1000 /* Extra argument*/];
            const date = moment(array);

            expect(date.year()).to.equal(2017);
            expect(date.month()).to.equal(8);
            expect(date.date()).to.equal(10);
            expect(date.hour()).to.equal(6);
            expect(date.minute()).to.equal(12);
            expect(date.second()).to.equal(50);
            expect(date.millisecond()).to.equal(123);
        });

        it('should return invalid date if the months value is invalid', function() {
            const array = [2017, 12 /*invalid*/, 10, 6, 12, 50, 123];
            const date = moment(array);

            expect(date.isValid()).to.equal(false);
        });

    });

    describe('Parsing Arrays', function() {

        it('should parse an object', function() {
            const obj = { year :2010, month :3, day :5, hour :15, minute :10, second :3, millisecond :123};
            const date = moment(obj);

            expect(date.year()).to.equal(2010);
            expect(date.month()).to.equal(3);
            expect(date.date()).to.equal(5);
            expect(date.hour()).to.equal(15);
            expect(date.minute()).to.equal(10);
            expect(date.second()).to.equal(3);
            expect(date.millisecond()).to.equal(123);
        });

        it('should return invalid date if the values in the fields are invalid', function() {
            const obj = {year: {}};
            const date = moment(obj);
        });

    });
 });