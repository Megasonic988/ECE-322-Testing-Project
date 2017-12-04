const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing date manipulation - white box
 */

describe('Date Manipulation', function() {
    
    describe('White box testing: Statement Coverage', function() {
        describe('Switch arguments (string, number) instead of (number, string)', function() {
            it('should handle switched arguments', function(done) {
                const testMoment = moment('2013-02-08');
                testMoment.add('y',1);

                expect(testMoment.year()).to.equal(2014);
                expect(testMoment.month()).to.equal(1);
                expect(testMoment.date()).to.equal(8);
                done();
            })
        })
    })
})