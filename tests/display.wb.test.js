const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing display
 */
 describe('Display - White Box (Coverage)', function() {

    /**
     * Test format
     */
  
    // format achieved 98.08% statement coverage from black box testing
    // the single remaining line (moment/lib/format:88) is an unreachable redundant validation function


    /**
     * Test time from now
     */

    // time from now achieved 100% statement coverage from black box testing


    /**
     * Test time to now
     */

    // time to now achieved 100% statement coverage from black box testing


    /**
     * Test ISO 8601
     */
     describe('ISO 8601', function() {
        it('five digit year', function(done) {
            datestring = '20017-12-01';
            date = moment(datestring);
            iso = date.toISOString();
            // assumes offset of UTC-07:00
            expect(iso).to.equal('+020017-12-01T07:00:00.000Z');
            done()
         });
         it('negative year', function(done) {
            date = moment(-100000000000000);
            iso = date.toISOString();
            expect(iso).to.equal('-001199-02-15T14:13:20.000Z');
            done()
         });
     });


    /**
     * Test JSON
     */
     
    // the toJSON function (found in moment/lib/moment/to-type.js) achieved 100% statement coverage from black box testing
});