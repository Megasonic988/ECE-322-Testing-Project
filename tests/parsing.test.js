const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing date parsing
 */

 describe('Date Parsing', function() {

    describe('Parsing ISO 8601 Strings with Syntax Driven Testing', function() {

        it('should parse a basic ISO 8601 date string', function(done) {
            const dateString_iso8601 = '2013-02-08';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);

            done();
        });

        it('should parse a ISO 8601 date string with a week date part', function(done) {
            const dateString_iso8601 = '2013-W06-5';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);

            done();
        });

        it('should parse a ISO 8601 date string with an ordinal date part', function(done) {
            const dateString_iso8601 = '2013-039';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);

            done();
        });

        it('should parse a basic ISO 8601 date string with a time part', function(done) {
            const dateString_iso8601 = '2013-02-08 09:30:26';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);
            expect(date.hour()).to.equal(9);
            expect(date.minute()).to.equal(30); // month is 0 indexed
            expect(date.second()).to.equal(26);

            done();
        });
    });

    describe('Parsing ISO 8601 Strings with Equivalence Classes', function() {

        it('should return invalid date for an invalid year (string)', function(done) {
            const invalidDateString_iso8601 = 'abcd-02-08';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
            done();
        });

        it('should return invalid date for an invalid month (0)', function(done) {
            const invalidDateString_iso8601 = '2013-00-08';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
            done();
        });

        it('should return invalid date for an invalid month (13)', function(done) {
            const invalidDateString_iso8601 = '2013-13-08';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
            done();
        });

        it('should return invalid date for an invalid number of days (29) in February', function(done) {
            const invalidDateString_iso8601 = '2013-02-29';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
            done();
        });

        it('should return invalid date for an invalid number of days (31) in June', function(done) {
            const invalidDateString_iso8601 = '2013-06-31';
            const date = moment(invalidDateString_iso8601);

            expect(date.isValid()).to.equal(false);
            done();
        });

        it('should return valid date for a 29 days in a leap year', function(done) {
            const dateString_iso8601 = '2008-02-29';
            const date = moment(dateString_iso8601);

            expect(date.isValid()).to.equal(true);
            done();
        });

        it('should return invalid date for an invalid year (not 4 numbers)', function(done) {
            const dateString_iso8601 = '1-02-29';
            const date = moment(dateString_iso8601);

            expect(date.isValid()).to.equal(false);
            done();
        });
    });

    describe('Parsing Unix timestamp', function() {

        it('should parse a Unix timestamp', function(done) {
            const timestamp = 1410715640000; // Sun, 14 Sep 2014 17:27:20 +0000
            const date = moment(timestamp);

            expect(date.year()).to.equal(2014);
            expect(date.month()).to.equal(8);
            expect(date.date()).to.equal(14);

            done();
        });

    });

    describe('Parsing Arrays', function() {
        // [year, month, day, hour, minute, second, millisecond]
       
        it('should parse an array', function(done) {
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

    });

 });