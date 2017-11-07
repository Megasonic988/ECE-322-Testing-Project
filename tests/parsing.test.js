const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing date parsing
 */

 describe('Date Parsing', function() {

    /**
     * Test parsing of ISO 
     */
    describe('Parsing ISO 8601 Strings', function() {

        it('should parse a basic ISO 8601 date string', function(done) {
            const dateString_iso8601 = '2013-02-08';
            const date = moment(dateString_iso8601);
            
            expect(date.year()).to.equal(2013);
            expect(date.month()).to.equal(1); // month is 0 indexed
            expect(date.date()).to.equal(8);

            done();
        });

        it('should parse a Unix timestamp', function(done) {
            const timestamp = 1410715640000; // Sun, 14 Sep 2014 17:27:20 +0000
            const date = moment(timestamp);

            expect(date.year()).to.equal(2014);
            expect(date.month()).to.equal(8);
            expect(date.date()).to.equal(14);

            done();
        });

    });

 });