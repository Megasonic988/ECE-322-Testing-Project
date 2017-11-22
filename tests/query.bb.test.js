const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Black Box Testing for Queries
 */

/* Overall, there are 5 types of times to compare to, and 8 types of granularity to test with.
 * Also, it is necessary to test both true and false scenarios for each option. This would lead
 * to 5*8*2 = 80 tests per function (or 120, for the between function, as there are 2 false cases:
 * too high, and too low). However, for the purposes of equivalence classes, it is reasonable to
 * assume that the first step of the function is to process the input time reference to a standard
 * type for comparison purposes. This means it is reasonable to test each type of time and each
 * granularity individually, rather than combinatorially, reducing the number of tests to 24 per
 * function (or 36 for the between function).
 */

describe('Queries', function() {
    describe('Black Box testing with Equivalence Classes', function() {
        describe('isBefore() query', function() {
            describe('testing input types', function() {
                it('should correctly find a Moment is before another Moment', function(done) {
                    var result = moment('2010-10-20').isBefore(moment('2010-10-21')); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before a String', function(done) {
                    var result = moment('2010-10-20').isBefore('2010-10-21'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before a Number', function(done) {
                    var result = moment('2010-10-20').isBefore(1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before a Date', function(done) {
                    var result = moment('2010-10-20').isBefore(new Date(2010, 10, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before an Array', function(done) {
                    var result = moment('2010-10-20').isBefore([2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not before another Moment', function(done) {
                    var result = moment('2010-10-21').isBefore(moment('2010-10-19')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before a String', function(done) {
                    var result = moment('2010-10-21').isBefore('2010-10-19'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before a Number', function(done) {
                    var result = moment('2010-10-21').isBefore(1287532800000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before a Date', function(done) {
                    var result = moment('2010-10-21').isBefore(new Date(2010, 09, 20));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before an Array', function(done) {
                    var result = moment('2010-10-21').isBefore([2010, 09, 20]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            describe('testing granularity of units', function() {
                it('should correctly find a Moment is before with granularity year', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2011-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity month', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-06-05T05:05:05', 'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity week', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-12T05:05:05', 'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity day', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-06T05:05:05', 'day'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity hour', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-05T06:05:05', 'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-05T05:06:05', 'minute'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-05T05:05:06', 'second'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isBefore('2010-05-05T05:05:05.6', 'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not before with granularity year', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-06-05T05:05:05', 'year'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before with granularity month', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-06T05:05:05', 'month'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before with granularity week', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-06T06:05:05', 'week'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before with granularity day', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-05T06:05:05', 'day'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before with granularity hour', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-05T05:06:05', 'hour'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-05T05:05:06', 'minute'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBefore('2010-05-05T05:05:05', 'second'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not before with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isBefore('2010-05-05T05:05:05.5', 'millisecond'); 
                    expect(result).to.equal(false);
                    done();
                });
            });
        });
    
        //isAfter
        describe('isAfter() query', function() {
            describe('testing input types', function() {
                it('should correctly find a Moment is after another Moment', function(done) {
                    var result = moment('2010-10-21').isAfter(moment('2010-10-20')); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after a String', function(done) {
                    var result = moment('2010-10-21').isAfter('2010-10-20'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after a Number', function(done) {
                    var result = moment('2010-10-21').isAfter(1287532800000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after a Date', function(done) {
                    var result = moment('2010-10-21').isAfter(new Date(2010, 09, 20));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after an Array', function(done) {
                    var result = moment('2010-10-21').isAfter([2010, 09, 20]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not after another Moment', function(done) {
                    var result = moment('2010-10-20').isAfter(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after a String', function(done) {
                    var result = moment('2010-10-20').isAfter('2010-10-21'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after a Number', function(done) {
                    var result = moment('2010-10-20').isAfter(1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after a Date', function(done) {
                    var result = moment('2010-10-20').isAfter(new Date(2010, 09, 21));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after an Array', function(done) {
                    var result = moment('2010-10-20').isAfter([2010, 09, 21]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            describe('testing granularity of units', function() {
                it('should correctly find a Moment is after with granularity year', function(done) {
                    var result = moment('2011-05-05T05:05:05').isAfter('2010-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity month', function(done) {
                    var result = moment('2010-06-05T05:05:05').isAfter('2010-05-05T05:05:05', 'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity week', function(done) {
                    var result = moment('2010-05-12T05:05:05').isAfter('2010-05-05T05:05:05', 'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity day', function(done) {
                    var result = moment('2010-05-06T05:05:05').isAfter('2010-05-05T05:05:05', 'day'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity hour', function(done) {
                    var result = moment('2010-05-05T06:05:05').isAfter('2010-05-05T05:05:05', 'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:06:05').isAfter('2010-05-05T05:05:05', 'minute'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:06').isAfter('2010-05-05T05:05:05', 'second'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isAfter('2010-05-05T05:05:05.4', 'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not after with granularity year', function(done) {
                    var result = moment('2010-06-05T05:05:05').isAfter('2010-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after with granularity month', function(done) {
                    var result = moment('2010-05-06T05:05:05').isAfter('2010-05-05T05:05:05', 'month'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after with granularity week', function(done) {
                    var result = moment('2010-05-06T05:05:05').isAfter('2010-05-05T06:05:05', 'week'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after with granularity day', function(done) {
                    var result = moment('2010-05-05T06:05:05').isAfter('2010-05-05T05:05:05', 'day'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after with granularity hour', function(done) {
                    var result = moment('2010-05-05T05:06:05').isAfter('2010-05-05T05:05:05', 'hour'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:05:06').isAfter('2010-05-05T05:05:05', 'minute'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:05').isAfter('2010-05-05T05:05:05', 'second'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not after with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isAfter('2010-05-05T05:05:05.5', 'millisecond'); 
                    expect(result).to.equal(false);
                    done();
                });
            });
        });

        //isSame
        describe('isSame() query', function() {
            describe('testing input types', function() {
                it('should correctly find a Moment is the same as another Moment', function(done) {
                    var result = moment('2010-10-21').isSame(moment('2010-10-21')); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a String', function(done) {
                    var result = moment('2010-10-21').isSame('2010-10-21'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a Number', function(done) {
                    var result = moment(1287619200000).isSame(1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a Date', function(done) {
                    var result = moment('2010-10-21').isSame(new Date(2010, 09, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as an Array', function(done) {
                    var result = moment('2010-10-21').isSame([2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not the same as another Moment', function(done) {
                    var result = moment('2010-10-20').isSame(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same as a String', function(done) {
                    var result = moment('2010-10-20').isSame('2010-10-21'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same as a Number', function(done) {
                    var result = moment('2010-10-20').isSame(1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same as a Date', function(done) {
                    var result = moment('2010-10-20').isSame(new Date(2010, 09, 21));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same as an Array', function(done) {
                    var result = moment('2010-10-20').isSame([2010, 09, 21]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            describe('testing granularity of units', function() {
                it('should correctly find a Moment is the same with granularity year', function(done) {
                    var result = moment('2011-05-05T05:05:05').isSame('2011-04-03T02:01:00', 'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity month', function(done) {
                    var result = moment('2010-06-05T05:05:05').isSame('2010-06-04T03:03:01', 'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity week', function(done) {
                    var result = moment('2010-05-12T05:05:05').isSame('2010-05-10T04:03:02', 'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity day', function(done) {
                    var result = moment('2010-05-06T05:05:05').isSame('2010-05-06T04:03:02', 'day'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity hour', function(done) {
                    var result = moment('2010-05-05T06:05:05').isSame('2010-05-05T06:04:03', 'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:06:05').isSame('2010-05-05T05:06:04', 'minute'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:06').isSame('2010-05-05T05:05:06', 'second'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isSame('2010-05-05T05:05:05.5', 'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity year', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSame('2011-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity month', function(done) {
                    var result = moment('2010-06-05T05:05:05').isSame('2010-05-05T05:05:05', 'month'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity week', function(done) {
                    var result = moment('2010-05-14T05:05:05').isSame('2010-05-05T05:05:05', 'week'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity day', function(done) {
                    var result = moment('2010-05-06T05:05:05').isSame('2010-05-05T05:05:05', 'day'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity hour', function(done) {
                    var result = moment('2010-05-05T06:05:05').isSame('2010-05-05T05:05:05', 'hour'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:06:05').isSame('2010-05-05T05:05:05', 'minute'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSame('2010-05-05T05:05:06', 'second'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isSame('2010-05-05T05:05:05.10', 'millisecond'); 
                    expect(result).to.equal(false);
                    done();
                });
            });
        });

        //isSameOrBefore
        describe('isSameOrBefore() query', function() {
            describe('testing input types', function() {
                it('should correctly find a Moment is the same as another Moment', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore(moment('2010-10-21')); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a String', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore('2010-10-21'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a Number', function(done) {
                    var result = moment(1287619200000).isSameOrBefore(1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a Date', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore(new Date(2010, 09, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as an Array', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore([2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before another Moment', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore(moment('2012-10-21')); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before a String', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore('2012-10-21'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before a Number', function(done) {
                    var result = moment(1287619200000).isSameOrBefore(1287619500000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before a Date', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore(new Date(2012, 09, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before an Array', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore([2012, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not the same or before another Moment', function(done) {
                    var result = moment('2010-10-21').isSameOrBefore(moment('2010-09-20')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before a String', function(done) {
                    var result = moment('2010-10-20').isSameOrBefore('2010-10-15'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before a Number', function(done) {
                    var result = moment('2012-10-20').isSameOrBefore(1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before a Date', function(done) {
                    var result = moment('2010-10-20').isSameOrBefore(new Date(2010, 09, 18));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before an Array', function(done) {
                    var result = moment('2010-10-20').isSameOrBefore([2010, 09, 14]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            describe('testing granularity of units', function() {
                it('should correctly find a Moment is the same with granularity year', function(done) {
                    var result = moment('2011-05-05T05:05:05').isSameOrBefore('2011-06-04T03:02:01', 'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity month', function(done) {
                    var result = moment('2010-06-05T05:05:05').isSameOrBefore('2010-06-04T03:02:01', 'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity week', function(done) {
                    var result = moment('2010-05-12T05:05:05').isSameOrBefore('2010-05-10T04:03:02', 'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity day', function(done) {
                    var result = moment('2010-05-06T05:05:05').isSameOrBefore('2010-05-06T04:03:02', 'day'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity hour', function(done) {
                    var result = moment('2010-05-05T06:05:05').isSameOrBefore('2010-05-05T06:04:03', 'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:06:05').isSameOrBefore('2010-05-05T05:06:04', 'minute'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:06').isSameOrBefore('2010-05-05T05:05:06', 'second'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isSameOrBefore('2010-05-05T05:05:05.5', 'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity year', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2011-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity month', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2010-06-05T05:05:05', 'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity week', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2010-05-12T05:05:05', 'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity day', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2010-05-06T05:05:05', 'day'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity hour', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2010-05-05T06:05:05', 'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2010-05-05T05:06:05', 'minute'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2010-05-05T05:05:06', 'second'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is before with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05')
                                        .isSameOrBefore('2010-05-05T05:05:05.6', 'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity year', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2009-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity month', function(done) {
                    var result = moment('2010-05-05T05:05:05').isSameOrBefore('2010-04-05T05:05:05', 'month'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity week', function(done) {
                    var result = moment('2010-05-14T05:05:05').isSameOrBefore('2010-05-05T05:05:05', 'week'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity day', function(done) {
                    var result = moment('2010-05-06T05:05:05').isSameOrBefore('2010-05-05T05:05:05', 'day'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity hour', function(done) {
                    var result = moment('2010-05-05T06:05:05').isSameOrBefore('2010-05-05T05:05:05', 'hour'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:06:05').isSameOrBefore('2010-05-05T05:05:05', 'minute'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:06').isSameOrBefore('2010-05-05T05:05:05', 'second'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or before with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isSameOrBefore('2010-05-05T05:05:05.4', 'millisecond'); 
                    expect(result).to.equal(false);
                    done();
                });
            });
        });

        //isSameOrAfter
        describe('isSameOrAfter() query', function() {
            describe('testing input types', function() {
                it('should correctly find a Moment is the same as another Moment', function(done) {
                    var result = moment('2010-10-21').isSameOrAfter(moment('2010-10-21')); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a String', function(done) {
                    var result = moment('2010-10-21').isSameOrAfter('2010-10-21'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a Number', function(done) {
                    var result = moment(1287619200000).isSameOrAfter(1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as a Date', function(done) {
                    var result = moment('2010-10-21').isSameOrAfter(new Date(2010, 09, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same as an Array', function(done) {
                    var result = moment('2010-10-21').isSameOrAfter([2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after another Moment', function(done) {
                    var result = moment('2015-10-21').isSameOrAfter(moment('2012-10-21')); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after a String', function(done) {
                    var result = moment('2012-11-21').isSameOrAfter('2012-10-21'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after a Number', function(done) {
                    var result = moment(1287619600000).isSameOrAfter(1287619500000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after a Date', function(done) {
                    var result = moment('2010-10-27').isSameOrAfter(new Date(2010, 09, 14));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after an Array', function(done) {
                    var result = moment('2010-10-21').isSameOrAfter([2010, 07, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not the same or after another Moment', function(done) {
                    var result = moment('2010-09-17').isSameOrAfter(moment('2010-09-20')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after a String', function(done) {
                    var result = moment('2010-10-20').isSameOrAfter('2010-10-26'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after a Number', function(done) {
                    var result = moment('2009-10-20').isSameOrAfter(1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after a Date', function(done) {
                    var result = moment('2010-10-20').isSameOrAfter(new Date(2010, 10, 18));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after an Array', function(done) {
                    var result = moment('2010-10-20').isSameOrAfter([2010, 10, 14]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            describe('testing granularity of units', function() {
                it('should correctly find a Moment is the same with granularity year', function(done) {
                    var result = moment('2011-05-05T05:05:05').isSameOrAfter('2011-06-04T03:02:01', 'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity month', function(done) {
                    var result = moment('2010-06-05T05:05:05').isSameOrAfter('2010-06-04T03:02:01', 'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity week', function(done) {
                    var result = moment('2010-05-12T05:05:05').isSameOrAfter('2010-05-10T04:03:02', 'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity day', function(done) {
                    var result = moment('2010-05-06T05:05:05').isSameOrAfter('2010-05-06T04:03:02', 'day'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity hour', function(done) {
                    var result = moment('2010-05-05T06:05:05').isSameOrAfter('2010-05-05T06:04:03', 'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:06:05').isSameOrAfter('2010-05-05T05:06:04', 'minute'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:06').isSameOrAfter('2010-05-05T05:05:06', 'second'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is the same with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isSameOrAfter('2010-05-05T05:05:05.5', 'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity year', function(done) {
                    var result = moment('2012-05-05T05:05:05').isSameOrAfter('2011-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity month', function(done) {
                    var result = moment('2010-07-05T05:05:05').isSameOrAfter('2010-06-05T05:05:05', 'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity week', function(done) {
                    var result = moment('2010-05-21T05:05:05').isSameOrAfter('2010-05-12T05:05:05', 'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity day', function(done) {
                    var result = moment('2010-05-07T05:05:05').isSameOrAfter('2010-05-06T05:05:05', 'day'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity hour', function(done) {
                    var result = moment('2010-05-05T07:05:05').isSameOrAfter('2010-05-05T06:05:05', 'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:06:05').isSameOrAfter('2010-05-05T05:06:05', 'minute'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:07').isSameOrAfter('2010-05-05T05:05:06', 'second'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is after with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isSameOrAfter('2010-05-05T05:05:05.4', 'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity year', function(done) {
                    var result = moment('2008-05-05T05:05:05').isSameOrAfter('2009-05-05T05:05:05', 'year'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity month', function(done) {
                    var result = moment('2010-03-05T05:05:05').isSameOrAfter('2010-04-05T05:05:05', 'month'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity week', function(done) {
                    var result = moment('2010-04-26T05:05:05').isSameOrAfter('2010-05-05T05:05:05', 'week'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity day', function(done) {
                    var result = moment('2010-05-04T05:05:05').isSameOrAfter('2010-05-05T05:05:05', 'day'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity hour', function(done) {
                    var result = moment('2010-05-05T04:05:05').isSameOrAfter('2010-05-05T05:05:05', 'hour'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity minute', function(done) {
                    var result = moment('2010-05-05T05:04:05').isSameOrAfter('2010-05-05T05:05:05', 'minute'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity second', function(done) {
                    var result = moment('2010-05-05T05:05:04').isSameOrAfter('2010-05-05T05:05:05', 'second'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not the same or after with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isSameOrAfter('2010-05-05T05:05:05.6', 'millisecond'); 
                    expect(result).to.equal(false);
                    done();
                });
            });
        });

        //isBetween
        describe('isBetween() query', function() {
            describe('testing input types (combinations)', function() {
                it('should correctly find a Moment is between Moment, Moment', function(done) {
                    var result = moment('2010-10-20').isBetween(moment('2010-10-19'), moment('2010-10-21'));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Moment, String', function(done) {
                    var result = moment('2010-10-20').isBetween(moment('2010-10-19'), '2010-10-21');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Moment, Number', function(done) {
                    var result = moment('2010-10-20').isBetween(moment('2010-10-19'), 1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Moment, Date', function(done) {
                    var result = moment('2010-10-20').isBetween(moment('2010-10-19'), new Date(2010, 10, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Moment, Array', function(done) {
                    var result = moment('2010-10-20').isBetween(moment('2010-10-19'), [2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between String, Moment', function(done) {
                    var result = moment('2010-10-20').isBetween('2010-10-19', moment('2010-10-21'));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between String, String', function(done) {
                    var result = moment('2010-10-20').isBetween('2010-10-19', '2010-10-21');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between String, Number', function(done) {
                    var result = moment('2010-10-20').isBetween('2010-10-19', 1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between String, Date', function(done) {
                    var result = moment('2010-10-20').isBetween('2010-10-19', new Date(2010, 10, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between String, Array', function(done) {
                    var result = moment('2010-10-20').isBetween('2010-10-19', [2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Number, Moment', function(done) {
                    var result = moment('2010-10-20').isBetween(1287446400000, moment('2010-10-21'));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Number, String', function(done) {
                    var result = moment('2010-10-20').isBetween(1287446400000, '2010-10-21');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Number, Number', function(done) {
                    var result = moment('2010-10-20').isBetween(1287446400000, 1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Number, Date', function(done) {
                    var result = moment('2010-10-20').isBetween(1287446400000, new Date(2010, 10, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Number, Array', function(done) {
                    var result = moment('2010-10-20').isBetween(1287446400000, [2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Date, Moment', function(done) {
                    var result = moment('2010-10-20').isBetween(new Date(2010-09-19), moment('2010-10-21'));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Date, String', function(done) {
                    var result = moment('2010-10-20').isBetween(new Date(2010-09-19), '2010-10-21');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Date, Number', function(done) {
                    var result = moment('2010-10-20').isBetween(new Date(2010-09-19), 1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Date, Date', function(done) {
                    var result = moment('2010-10-20').isBetween(new Date(2010-09-19), new Date(2010, 10, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Date, Array', function(done) {
                    var result = moment('2010-10-20').isBetween(new Date(2010-09-19), [2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Array, Moment', function(done) {
                    var result = moment('2010-10-20').isBetween([2010-09-19], moment('2010-10-21'));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Array, String', function(done) {
                    var result = moment('2010-10-20').isBetween([2010-09-19], '2010-10-21');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Array, Number', function(done) {
                    var result = moment('2010-10-20').isBetween([2010-09-19], 1287619200000);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Array, Date', function(done) {
                    var result = moment('2010-10-20').isBetween([2010-09-19], new Date(2010, 10, 21));
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between Array, Array', function(done) {
                    var result = moment('2010-10-20').isBetween([2010-09-19], [2010, 09, 21]);
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not between Moment, Moment', function(done) {
                    var result = moment('2010-10-18').isBetween(moment('2010-10-19'), moment('2010-10-21'));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Moment, String', function(done) {
                    var result = moment('2010-10-18').isBetween(moment('2010-10-19'), '2010-10-21');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Moment, Number', function(done) {
                    var result = moment('2010-10-18').isBetween(moment('2010-10-19'), 1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Moment, Date', function(done) {
                    var result = moment('2010-10-18').isBetween(moment('2010-10-19'), new Date(2010, 10, 21));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Moment, Array', function(done) {
                    var result = moment('2010-10-18').isBetween(moment('2010-10-19'), [2010, 09, 21]);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between String, Moment', function(done) {
                    var result = moment('2010-10-18').isBetween('2010-10-19', moment('2010-10-21'));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between String, String', function(done) {
                    var result = moment('2010-10-18').isBetween('2010-10-19', '2010-10-21');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between String, Number', function(done) {
                    var result = moment('2010-10-18').isBetween('2010-10-19', 1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between String, Date', function(done) {
                    var result = moment('2010-10-18').isBetween('2010-10-19', new Date(2010, 10, 21));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between String, Array', function(done) {
                    var result = moment('2010-10-18').isBetween('2010-10-19', [2010, 09, 21]);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Number, Moment', function(done) {
                    var result = moment('2010-10-18').isBetween(1287446400000, moment('2010-10-21'));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Number, String', function(done) {
                    var result = moment('2010-10-18').isBetween(1287446400000, '2010-10-21');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Number, Number', function(done) {
                    var result = moment('2010-10-18').isBetween(1287446400000, 1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Number, Date', function(done) {
                    var result = moment('2010-10-18').isBetween(1287446400000, new Date(2010, 10, 21));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Number, Array', function(done) {
                    var result = moment('2010-10-18').isBetween(1287446400000, [2010, 09, 21]);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Date, Moment', function(done) {
                    var result = moment('2010-10-18').isBetween(new Date(2010, 09, 19), moment('2010-10-21'));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Date, String', function(done) {
                    var result = moment('2010-10-18').isBetween(new Date(2010, 09, 19), '2010-10-21');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Date, Number', function(done) {
                    var result = moment('2010-10-18').isBetween(new Date(2010, 09, 19), 1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Date, Date', function(done) {
                    var result = moment('2010-10-18').isBetween(new Date(2010, 09, 19), new Date(2010, 10, 21));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Date, Array', function(done) {
                    var result = moment('2010-10-18').isBetween(new Date(2010, 09, 19), [2010, 09, 21]);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Array, Moment', function(done) {
                    var result = moment('2010-10-18').isBetween([2010, 09, 19], moment('2010-10-21'));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Array, String', function(done) {
                    var result = moment('2010-10-18').isBetween([2010, 09, 19], '2010-10-21');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Array, Number', function(done) {
                    var result = moment('2010-10-18').isBetween([2010, 09, 19], 1287619200000);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Array, Date', function(done) {
                    var result = moment('2010-10-18').isBetween([2010, 09, 19], new Date(2010, 10, 21));
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between Array, Array', function(done) {
                    var result = moment('2010-10-18').isBetween([2010, 09, 19], [2010, 09, 21]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            describe('testing granularity of units', function() {
                it('should correctly find a Moment is between with granularity year', function(done) {
                    var result = moment('2011-02-02T02:02:02').isBetween('2010-04-04T04:04:04',
                                                                        '2012-06-06T06:06:06',
                                                                        'year'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between with granularity month', function(done) {
                    var result = moment('2011-05-02T02:02:02').isBetween('2011-04-04T04:04:04',
                                                                        '2011-06-06T06:06:06',
                                                                        'month'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between with granularity week', function(done) {
                    var result = moment('2011-05-15T02:02:02').isBetween('2011-05-01T04:04:04',
                                                                        '2011-05-31T06:06:06',
                                                                        'week'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between with granularity day', function(done) {
                    var result = moment('2011-05-05T02:02:02').isBetween('2011-05-04T04:04:04',
                                                                        '2011-05-06T06:06:06',
                                                                        'day');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between with granularity hour', function(done) {
                    var result = moment('2011-05-05T05:02:02').isBetween('2011-05-05T04:04:04',
                                                                        '2011-05-05T06:06:06',
                                                                        'hour'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between with granularity minute', function(done) {
                    var result = moment('2011-05-05T05:05:02').isBetween('2011-05-05T05:04:04',
                                                                        '2011-05-05T05:06:06',
                                                                        'minute');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between with granularity second', function(done) {
                    var result = moment('2011-05-05T05:05:05').isBetween('2011-05-05T05:05:04',
                                                                        '2011-05-05T05:05:06',
                                                                        'second');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is between with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.5')
                                        .isBetween('2010-05-05T05:05:05.4',
                                                   '2010-05-05T05:05:05.6',
                                                   'millisecond'); 
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not between with granularity year', function(done) {
                    var result = moment('2010-05-05T05:05:05').isBetween('2010-04-04T04:04:04',
                                                                        '2012-06-06T06:06:06',
                                                                        'year'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between with granularity month', function(done) {
                    var result = moment('2011-04-05T05:05:05').isBetween('2011-04-04T04:04:04',
                                                                        '2011-06-06T06:06:06',
                                                                        'month'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between with granularity week', function(done) {
                    var result = moment('2011-02-13T02:02:02').isBetween('2011-05-04T04:04:04',
                                                                        '2011-21-06T06:06:06',
                                                                        'week'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between with granularity day', function(done) {
                    var result = moment('2011-05-04T05:05:05').isBetween('2011-05-04T04:04:04',
                                                                        '2011-05-06T06:06:06',
                                                                        'month');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between with granularity hour', function(done) {
                    var result = moment('2011-05-05T04:05:05').isBetween('2011-05-05T04:04:04',
                                                                        '2011-05-05T06:06:06',
                                                                        'hour'); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between with granularity minute', function(done) {
                    var result = moment('2011-05-05T05:04:05').isBetween('2011-05-05T05:04:04',
                                                                        '2011-05-05T05:06:06',
                                                                        'minute');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between with granularity second', function(done) {
                    var result = moment('2011-05-05T05:05:04').isBetween('2011-05-05T05:05:04',
                                                                        '2011-05-05T05:05:06',
                                                                        'second');
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is not between with granularity millisecond', function(done) {
                    var result = moment('2010-05-05T05:05:05.2')
                                        .isBetween('2010-05-05T05:05:05.4',
                                                   '2010-05-05T05:05:05.6',
                                                   'millisecond'); 
                    expect(result).to.equal(false);
                    done();
                });
            });

            describe('testing inclusivity rules', function() {
                it('should correctly find a Moment same as lower bound using [)', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 30, 50, 125],
                                            null, '[)');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment same as upper bound using (]', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 10, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125],
                                            null, '(]');
                    expect(result).to.equal(true);
                    done();
                });

                it('should correctly find a Moment is not between two identical dates', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125]);
                    expect(result).to.equal(false);
                    done();
                });

                it('should correctly find a Moment is between two identical dates when inclusivity is used', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125],
                                            null, '[]');
                    expect(result).to.equal(true);
                    done();
                });

                it('should default to false for identical dates using mixed inclusivity (]', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125],
                                            null, '(]');
                    expect(result).to.equal(false);
                    done();
                });

                it('should default to false for identical dates using mixed inclusivity [)', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125],
                                            null, '[)');
                    expect(result).to.equal(false);
                    done();
                });
            });
        });

        //isLeapYear
        describe('isLeapYear() query', function() {
            it('should find a normal year is not a leap year', function(done) {
                var result = moment([2005]).isLeapYear();
                expect(result).to.equal(false);
                done();
            });

            it('should find a year divisible by 4 is a leap year', function(done) {
                var result = moment([2008]).isLeapYear();
                expect(result).to.equal(true);
                done();
            });

            it('should find a year divisble by 100 is not a leap year', function(done) {
                var result = moment([1900]).isLeapYear();
                expect(result).to.equal(false);
                done();
            });

            it('should find a year divisible by 400 is a leap year', function(done) {
                var result = moment([2000]).isLeapYear();
                expect(result).to.equal(true);
                done();
            });
        });

        //Error Cases
        describe('Error Cases', function() {

            describe('isBefore()', function() {
                it('should return false for an invalid Moment', function(done) {
                    var result = moment('BLAH').isBefore(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should return false for an invalid Moment parameter', function(done) {
                    var result = moment('2010-10-20').isBefore(moment('BLAH')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should default to millisecond comparison for invalid units argument', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBefore([2010, 1, 14, 15, 25, 50, 126], 'BLAH');
                    expect(result).to.equal(true);
                    done();
                });
            });

            describe('isAfter()', function() {
                it('should return false for an invalid Moment', function(done) {
                    var result = moment('BLAH').isAfter(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should return false for an invalid Moment parameter', function(done) {
                    var result = moment('2010-10-20').isAfter(moment('BLAH')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should default to millisecond comparison for invalid units argument', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isAfter([2010, 1, 14, 15, 25, 50, 124], 'BLAH');
                    expect(result).to.equal(true);
                    done();
                });
            });

            describe('isSame()', function() {
                it('should return false for an invalid Moment', function(done) {
                    var result = moment('BLAH').isSame(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should return false for an invalid Moment parameter', function(done) {
                    var result = moment('2010-10-20').isSame(moment('BLAH')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should default to millisecond comparison for invalid units argument', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isSame([2010, 1, 14, 15, 25, 50, 125], 'BLAH');
                    expect(result).to.equal(true);
                    done();
                });
            });

            describe('isSameOrBefore()', function() {
                it('should return false for an invalid Moment', function(done) {
                    var result = moment('BLAH').isSameOrBefore(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should return false for an invalid Moment parameter', function(done) {
                    var result = moment('2010-10-20').isSameOrBefore(moment('BLAH')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should default to millisecond comparison for invalid units argument', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isSameOrBefore([2010, 1, 14, 15, 25, 50, 125], 'BLAH');
                    expect(result).to.equal(true);
                    done();
                });
            });

            describe('isSameOrAfter()', function() {
                it('should return false for an invalid Moment', function(done) {
                    var result = moment('BLAH').isSameOrAfter(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should return false for an invalid Moment parameter', function(done) {
                    var result = moment('2010-10-20').isSameOrAfter(moment('BLAH')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should default to millisecond comparison for invalid units argument', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isSameOrAfter([2010, 1, 14, 15, 25, 50, 125], 'BLAH');
                    expect(result).to.equal(true);
                    done();
                });
            });

            describe('isBetween()', function() {
                it('should return false for an invalid Moment', function(done) {
                    var result = moment('BLAH').isBetween(moment('2010-10-21')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should return false for an invalid Moment parameter', function(done) {
                    var result = moment('2010-10-20').isBetween(moment('BLAH')); 
                    expect(result).to.equal(false);
                    done();
                });

                it('should return false for an invalid inclusivity parameter', function(done) {
                    //This one actually fails.
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125],
                                            null, 'AA');
                    expect(result).to.equal(false);
                    done();
                });

                it('should default to millisecond comparison for invalid units argument', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125],
                                            'BLAH', '[]');
                    expect(result).to.equal(true);
                    done();
                });
            });

            describe('isLeapYear()', function() {
                it('should return false for an invalid Moment', function(done) {
                    var result = moment('BLAH').isLeapYear(); 
                    expect(result).to.equal(false);
                    done();
                });
            });
        });
    });
});