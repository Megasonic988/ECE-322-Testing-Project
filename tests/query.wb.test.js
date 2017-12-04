const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * White Box Testing for Queries
 */



describe('Queries', function() {
    describe('White Box testing', function() {
        describe('test normalizeUnits() query', function() {
            it('should determine input: year', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2011, 1, 14, 15, 25, 50, 125], 'year'); 
                expect(result).to.equal(true);
                done();
            });

            it('should determine input: month', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 2, 14, 15, 25, 50, 125], 'month'); 
                expect(result).to.equal(true);
                done();
            });

            it('should determine input: week', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 25, 15, 25, 50, 125], 'week'); 
                expect(result).to.equal(true);
                done();
            });

            it('should determine input: day', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 15, 15, 25, 50, 125], 'day'); 
                expect(result).to.equal(true);
                done();
            });

            it('should determine input: hour', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 16, 25, 50, 125], 'hour'); 
                expect(result).to.equal(true);
                done();
            });

            it('should determine input: minute', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 15, 26, 50, 125], 'minute'); 
                expect(result).to.equal(true);
                done();
            });

            it('should determine input: second', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 15, 25, 51, 125], 'second'); 
                expect(result).to.equal(true);
                done();
            });

            it('should determine input: millisecond', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 15, 25, 51, 126], 'millisecond'); 
                expect(result).to.equal(true);
                done();
            });
        });

        describe('test isAfter() query', function() {
            describe('first if statement: !(A && B) - make false', function() {
                it('should evaluate A=F, B=F', function(done) {
                    var result = moment('BLAH').isAfter('BLAH');
                    expect(result).to.equal(false);
                    done();
                });

                it('should evaluate A=T, B=F', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125]).isAfter('BLAH');
                    expect(result).to.equal(false);
                    done();
                });

                it('should evaluate A=F, B=T', function(done) {
                    var result = moment('BLAH').isAfter([2010, 1, 14, 15, 25, 50, 125]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            it('should use input units for true', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isAfter([2010, 1, 14, 15, 25, 49, 125], 'second');
                expect(result).to.equal(true);
                done();
            });

            it('should use input units for false', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isAfter([2010, 1, 14, 15, 25, 51, 125], 'second');
                expect(result).to.equal(false);
                done();
            });

            it('should default to milliseconds for true', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isAfter([2010, 1, 14, 15, 25, 49, 125]);
                expect(result).to.equal(true);
                done();
            });

            it('should default to milliseconds for false', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isAfter([2010, 1, 14, 15, 25, 51, 125]);
                expect(result).to.equal(false);
                done();
            });
        });

        describe('test isBefore() query', function() {
            describe('first if statement: !(A && B) - make false', function() {
                it('should evaluate A=F, B=F', function(done) {
                    var result = moment('BLAH').isBefore('BLAH');
                    expect(result).to.equal(false);
                    done();
                });

                it('should evaluate A=T, B=F', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125]).isBefore('BLAH');
                    expect(result).to.equal(false);
                    done();
                });

                it('should evaluate A=F, B=T', function(done) {
                    var result = moment('BLAH').isBefore([2010, 1, 14, 15, 25, 50, 125]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            it('should use input units for true', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 15, 25, 51, 125], 'second');
                expect(result).to.equal(true);
                done();
            });

            it('should use input units for false', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 15, 25, 49, 125], 'second');
                expect(result).to.equal(false);
                done();
            });

            it('should default to milliseconds for true', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 15, 25, 51, 125]);
                expect(result).to.equal(true);
                done();
            });

            it('should default to milliseconds for false', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isBefore([2010, 1, 14, 15, 25, 49, 125]);
                expect(result).to.equal(false);
                done();
            });
        });

        describe('test isBetween() query', function() {
            describe('inclusivity parameter: code != docs', function() {
                it('any inclusivity parameter counts as \'[]\'', function(done) {
                    //This one actually fails.
                    var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                 .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                            [2010, 1, 14, 15, 25, 50, 125],
                                            null, 'AA');
                    expect(result).to.equal(false);
                    done();
                });
            })

            it('should default to \'()\' if no inclusivity is specified', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                             .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                        [2010, 1, 14, 15, 25, 50, 125]);
                expect(result).to.equal(false);
                done();
            });

            it('should default to \'()\' if inclusivity is equal to null', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                             .isBetween([2010, 1, 14, 15, 25, 50, 125],
                                        [2010, 1, 14, 15, 25, 50, 125],
                                        null, null);
                expect(result).to.equal(false);
                done();
            });
            

            it('should find false after the interval using (]', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 135])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '(]');
                expect(result).to.equal(false);
                done();
            });

            it('should find true inside the interval using (]', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '(]');
                expect(result).to.equal(true);
                done();
            });

            it('should find true inside the interval using ()', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '()');
                expect(result).to.equal(true);
                done();
            });

            it('should find false after the interval using ()', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 135])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '()');
                expect(result).to.equal(false);
                done();
            });

            it('should find false before the interval using ()', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 115])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '()');
                expect(result).to.equal(false);
                done();
            });

            it('should find false before the interval using [)', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 115])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '[)');
                expect(result).to.equal(false);
                done();
            });

            it('should find false after the interval using []', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 135])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '[]');
                expect(result).to.equal(false);
                done();
            });

            it('should find true inside the interval using []', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '[]');
                expect(result).to.equal(true);
                done();
            });

            it('should find true inside the interval using [)', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '[)');
                expect(result).to.equal(true);
                done();
            });

            it('should find false after the interval using [)', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 135])
                             .isBetween([2010, 1, 14, 15, 25, 50, 120],
                                        [2010, 1, 14, 15, 25, 50, 130],
                                        null, '[)');
                expect(result).to.equal(false);
                done();
            });
        });

        describe('test isSame() query', function() {
            describe('first if statement: !(A && B) - make false', function() {
                it('should evaluate A=F, B=F', function(done) {
                    var result = moment('BLAH').isSame('BLAH');
                    expect(result).to.equal(false);
                    done();
                });

                it('should evaluate A=T, B=F', function(done) {
                    var result = moment([2010, 1, 14, 15, 25, 50, 125]).isSame('BLAH');
                    expect(result).to.equal(false);
                    done();
                });

                it('should evaluate A=F, B=T', function(done) {
                    var result = moment('BLAH').isSame([2010, 1, 14, 15, 25, 50, 125]);
                    expect(result).to.equal(false);
                    done();
                });
            });

            it('should use input units for false (too low)', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSame([2010, 1, 14, 15, 25, 49, 125], 'second');
                expect(result).to.equal(false);
                done();
            });

            it('should use input units for true', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSame([2010, 1, 14, 15, 25, 50, 150], 'second');
                expect(result).to.equal(true);
                done();
            });

            it('should use input units for false (too high)', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSame([2010, 1, 14, 15, 25, 51, 125], 'second');
                expect(result).to.equal(false);
                done();
            });

            it('should default to milliseconds for true', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSame([2010, 1, 14, 15, 25, 50, 125]);
                expect(result).to.equal(true);
                done();
            });

            it('should default to milliseconds for false', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSame([2010, 1, 14, 15, 25, 50, 126]);
                expect(result).to.equal(false);
                done();
            });
        });

        describe('test isSameOrAfter() query', function() {
            it('should evaluate F, F - False', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSameOrAfter([2010, 1, 14, 15, 25, 50, 130]);
                expect(result).to.equal(false);
                done();
            });

            it('should evaluate F, T - True', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSameOrAfter([2010, 1, 14, 15, 25, 50, 120]);
                expect(result).to.equal(true);
                done();
            });

            it('should evaluate T, F - True', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSameOrAfter([2010, 1, 14, 15, 25, 50, 125]);
                expect(result).to.equal(true);
                done();
            });

            //Can't do same and after (the T, T case)
        });

        describe('test isSameOrBefore() query', function() {
            it('should evaluate F, F - False', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSameOrBefore([2010, 1, 14, 15, 25, 50, 120]);
                expect(result).to.equal(false);
                done();
            });

            it('should evaluate F, T - True', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSameOrBefore([2010, 1, 14, 15, 25, 50, 130]);
                expect(result).to.equal(true);
                done();
            });

            it('should evaluate T, F - True', function(done) {
                var result = moment([2010, 1, 14, 15, 25, 50, 125])
                                    .isSameOrBefore([2010, 1, 14, 15, 25, 50, 125]);
                expect(result).to.equal(true);
                done();
            });

            //Can't do same and before (the T, T case)
        });
    });
});