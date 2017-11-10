const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing date manipulationuu
 */

describe('Date Manipulation', function() {
    
        /**
         * Test Add
         * -----------------
         * Inputs can be of three types:
         * - moment().add(Number, String);
         * - moment().add(Duration);
         * - moment().add(Object);
         * Equivalence classes:
         *  - For (Number, String)
         *      - String has 9 different classes
         *      - years	y, quarters Q, months M, weeks w, days d, hours h, minutes m, seconds s, milliseconds ms
         *      - All decimal numbers are considered valid input
         * - For (Duration)
         *      - Can pass in a duration object
         * - For (Object)
         *      - Can pass in a regular object with String:Number pairs
         */
        describe('Add', function() {
            
            describe('Equivalence Class Testing: (Number, String)', function() {
                describe('Valid Equivalence classes for String: ', function() {
                    it('should add 1 year to moment, given (1, \'y\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.add(1,'y');

                        expect(testMoment.year()).to.equal(2014);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should add 1 year to moment, given (1, \'year\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.add(1,'year');

                        expect(testMoment.year()).to.equal(2014);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should add 1 quarter to moment, given (1, \'Q\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        originalQuarter = testMoment.quarter()
                        testMoment.add(1,'Q');

                        expect(testMoment.quarter()).to.equal(originalQuarter + 1);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(4);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should add 1 quarter to moment, given (1, \'quarter\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        originalQuarter = testMoment.quarter();
                        testMoment.add(1,'quarter');

                        expect(testMoment.quarter()).to.equal(originalQuarter + 1);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(4);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should add 1 month to moment, given (1, \'M\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.add(1,'M');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(2);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should add 1 month to moment, given (1, \'month\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.add(1,'month');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(2);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should add 1 week to moment, given (1, \'w\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        originalWeek = testMoment.week();
                        testMoment.add(1,'w');
                        
                        expect(testMoment.week()).to.equal(originalWeek + 1);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(15);
                        done();
                    })
                    it('should add 1 week to moment, given (1, \'week\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        originalWeek = testMoment.week();
                        testMoment.add(1,'week');
                        
                        expect(testMoment.week()).to.equal(originalWeek + 1);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(15);
                        done();
                    })
                    it('should add 1 day to moment, given (1, \'d\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.add(1,'d');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(9);
                        done();
                    })
                    it('should add 1 day to moment, given (1, \'day\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.add(1,'day');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(9);
                        done();
                    })
                    it('should add 1 hour to moment, given (1, \'h\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'h');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(10);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should add 1 hour to moment, given (1, \'hour\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'hour');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(10);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should add 1 minute to moment, given (1, \'minute\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'minute');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(31);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should add 1 minute to moment, given (1, \'m\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'m');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(31);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should add 1 second to moment, given (1, \'second\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'second');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(27);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should add 1 second to moment, given (1, \'s\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'s');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(27);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should add 1 millisecond to moment, given (1, \'millisecond\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'millisecond');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(124);
                        done();
                    })
                    it('should add 1 millisecond to moment, given (1, \'ms\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.add(1,'ms');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(124);
                        done();
                    })
                });
                describe('Invalid Equivalence Classes for String: ', function() {
                    it('should NOT add 1 quarter to moment, given (1, \'q\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentQuarter = testMoment.quarter();
                        testMoment.add(1,'q');
                        
                        expect(testMoment.quarter()).to.equal(currentQuarter);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should NOT add 1 month to moment, given (1, \'m\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentMonth = testMoment.month();
                        testMoment.add(1,'m');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(currentMonth);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should NOT add 1 week to moment, given (1, \'W\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentWeek = testMoment.week();
                        testMoment.add(1,'W');

                        expect(testMoment.week()).to.equal(currentWeek);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should NOT add 1 day to moment, given (1, \'D\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentDay = testMoment.date();
                        testMoment.add(1,'D');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(currentDay);
                        done();
                    })
                });
            });
        });

        /**
         * Test Subtract
         * -----------------
         * Inputs can be of three types:
         * - moment().add(Number, String);
         * - moment().add(Duration);
         * - moment().add(Object);
         * Equivalence classes:
         *  - For (Number, String)
         *      - String has 9 different classes
         *      - years	y, quarters Q, months M, weeks w, days d, hours h, minutes m, seconds s, milliseconds ms
         *      - All decimal numbers are considered valid input
         * - For (Duration)
         *      - Can pass in a duration object
         * - For (Object)
         *      - Can pass in a regular object with String:Number pairs
         */
        describe('Subtract', function() {
            describe('Equivalence Class Testing: (Number, String)', function() {
                describe('Valid Equivalence classes for String: ', function() {
                    it('should subtract 1 year from moment, given (1, \'y\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'y');

                        expect(testMoment.year()).to.equal(2012);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should subtract 1 year from moment, given (1, \'year\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'year');

                        expect(testMoment.year()).to.equal(2012);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should subtract 1 quarter from moment, given (1, \'Q\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'Q');

                        expect(testMoment.quarter()).to.equal(4);
                        expect(testMoment.year()).to.equal(2012);
                        expect(testMoment.month()).to.equal(10);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should subtract 1 quarter from moment, given (1, \'quarter\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'quarter');

                        expect(testMoment.quarter()).to.equal(4);
                        expect(testMoment.year()).to.equal(2012);
                        expect(testMoment.month()).to.equal(10);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should subtract 1 month from moment, given (1, \'M\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'M');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(0);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should subtract 1 month from moment, given (1, \'month\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'month');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(0);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should subtract 1 week from moment, given (1, \'w\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        originalWeek = testMoment.week();
                        testMoment.subtract(1,'w');
                        
                        expect(testMoment.week()).to.equal(originalWeek - 1);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(1);
                        done();
                    })
                    it('should subtract 1 week from moment, given (1, \'week\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        originalWeek = testMoment.week();
                        testMoment.subtract(1,'week');
                        
                        expect(testMoment.week()).to.equal(originalWeek - 1);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(1);
                        done();
                    })
                    it('should subtract 1 day from moment, given (1, \'d\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'d');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(7);
                        done();
                    })
                    it('should subtract 1 day from moment, given (1, \'day\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        testMoment.subtract(1,'day');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(7);
                        done();
                    })
                    it('should subtract 1 hour from moment, given (1, \'h\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'h');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(8);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should subtract 1 hour from moment, given (1, \'hour\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'hour');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(8);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should subtract 1 minute from moment, given (1, \'minute\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'minute');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(29);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should subtract 1 minute from moment, given (1, \'m\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'m');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(29);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should subtract 1 second from moment, given (1, \'second\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'second');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(25);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should subtract 1 second from moment, given (1, \'s\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'s');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(25);
                        expect(testMoment.millisecond()).to.equal(123);
                        done();
                    })
                    it('should subtract 1 millisecond from moment, given (1, \'millisecond\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'millisecond');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(122);
                        done();
                    })
                    it('should subtract 1 millisecond from moment, given (1, \'ms\')', function(done) {
                        const testMoment = moment('2013-02-08 09:30:26.123');
                        testMoment.subtract(1,'ms');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        expect(testMoment.hour()).to.equal(9);
                        expect(testMoment.minute()).to.equal(30);
                        expect(testMoment.second()).to.equal(26);
                        expect(testMoment.millisecond()).to.equal(122);
                        done();
                    })
                });
                describe('Invalid Equivalence Classes for String: ', function() {
                    it('should NOT subtract 1 quarter from moment, given (1, \'q\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentQuarter = testMoment.quarter();
                        testMoment.subtract(1,'q');
                        
                        expect(testMoment.quarter()).to.equal(currentQuarter);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should NOT subtract 1 month from moment, given (1, \'m\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentMonth = testMoment.month();
                        testMoment.subtract(1,'m');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(currentMonth);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should NOT subtract 1 week from moment, given (1, \'W\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentWeek = testMoment.week();
                        testMoment.subtract(1,'W');

                        expect(testMoment.week()).to.equal(currentWeek);
                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(8);
                        done();
                    })
                    it('should NOT subtract 1 day from moment, given (1, \'D\')', function(done) {
                        const testMoment = moment('2013-02-08');
                        currentDay = testMoment.date();
                        testMoment.subtract(1,'D');

                        expect(testMoment.year()).to.equal(2013);
                        expect(testMoment.month()).to.equal(1);
                        expect(testMoment.date()).to.equal(currentDay);
                        done();
                    })
                });
            });
        });

        /**
         * Test Start of Time
         */
        describe('Start of Time', function() {
            it('should start of time', function(done) {
                done();
            });
        });

        /**
         * Test End of Time
         */
        describe('End of Time', function() {
            it('should end of time', function(done) {
                done();
            });
        });

        /**
         * Test Local
         */
        describe('Local', function() {
            it('should local', function(done) {
                done();
            });
        });

        /**
         * Test OTC
         */
        describe('OTC', function() {
            it('otc?', function(done) {
                done();
            });
        });

        /**
         * Test OTC Offset
         */
        describe('OTC Offset', function() {
            it('otc offset stuff', function(done) {
                done();
            });
        });
});