const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing display
 */

 describe('Display - White Box', function() {

    /**
     * Test format
     */

     // tokens
     // localization
     // escape characters
     // default
    describe('Format', function() {

        // describe('Displaying with default format (no args)', function() {
        describe('Default (no args)', function() {

            it('should display in ISO 8601 format (default)', function(done) {
                // somehow get a string/date that can be reused
                const dateString = '2013-02-08';
                const date = moment(dateString).format();
                const expected_result = '2013-02-08T00:00:00-07:00';

                expect(date).to.equal(expected_result);

                done();
            });
        });

        // equivalence classes -> this is now black box? idk
        // this is testing moment creation, not formatting
        // do one invalid date and try formatting it
            // ensure that it is not valid then try to format
        // almost right string
        // wrong string
        // int

        //  moment("abcd-12-1") // invalid year defaults to 2001
        // moment(2017).format("apple") // mixture of string and date
        //  moment("2017-2-29") moves to march 1st (up to 31 -> as long as its normally a valid value then it works)
        //  moment("2017-02-29") does
        // 1-0-29 switches order

        describe('Tokens', function() {
            describe('Month', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Quarter', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Day of Month', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Day of Year', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Day of Week', function() {
                it('dummy test', function(done) {
                    done();
                });
            });


            describe('Day of Week (Locale)', function() {
                it('dummy test', function(done) {
                    done();
                });
            });


            describe('Day of Week (ISO)', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Week of Year', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Week of Year (ISO)', function() {
                it('dummy test', function(done) {
                    done();
                });
            });


            describe('Year', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Week Year', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Weak Year (ISO)', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('AM/PM', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Hour', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Minute', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Second', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Fractional Second', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Time Zone', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Unix Timestamp', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Unix Millisecond Timestamp', function() {
                it('dummy test', function(done) {
                    done();
                });
            });





        });

        describe('Localization', function() {
            describe('Time', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Time With Seconds', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Month numeral, day of month, year', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Month name, day of month, year', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Month name, day of month, year, time', function() {
                it('dummy test', function(done) {
                    done();
                });
            });

            describe('Month name, day of month, day of week, year, time', function() {
                it('dummy test', function(done) {
                    done();
                });
            });
        });


        describe('Escape characters', function() {

            describe('square brackets', function() {
                it('dummy test', function(done) {
                    done();
                });
            });
        });

        describe('Invalid date', function() {
            it('invalid date', function(done) {
                // somehow get a string/date that can be reused
                const dateString = '2017-13-45';
                date = moment(dateString);

                expect(date._isValid).to.equal(false);
                expect(date.format()).to.equal('Invalid date')

                done();
            });
        });
    });

    /**
     * Test time from now
     */
    describe('Time From Now', function() {
        describe('dummy test', function() {
            it('dummy test', function(done) {
                done();
            });
        });
    });

    /**
     * Test time to now
     */
     describe('Time To Now', function() {
         describe('dummy test', function() {
             it('dummy test', function(done) {
                 done();
             });
         });
     });

    /**
     * Test in ISO 8601
     */
     describe('ISO 8601', function() {
         describe('dummy test', function() {
             it('dummy test', function(done) {
                 done();
             });
         });
     });

    /**
     * Test JSON
     */
     describe('JSON', function() {
         describe('dummy test', function() {
             it('dummy test', function(done) {
                 done();
             });
         });
     });

 });

 describe('Display - Black Box', function() {

         /**
          * Test format
          */
         describe('Format', function() {

             describe('Displaying with default format (no args)', function() {

                 it('should display in ISO 8601 format (default)', function(done) {
                     // somehow get a string/date that can be reused
                     const dateString = '2013-02-08';
                     const date = moment(dateString).format();
                     const expected_result = '2013-02-08T00:00:00-07:00';

                     expect(date).to.equal(expected_result);

                     done();
                 });

             });
         });

         /**
          * Test time from now
          */
         describe('Time From Now', function() {
             describe('dummy test', function() {
                 it('dummy test', function(done) {
                     done();
                 });
             });
         });

         /**
          * Test time to now
          */
          describe('Time To Now', function() {
              describe('dummy test', function() {
                  it('dummy test', function(done) {
                      done();
                  });
              });
          });

         /**
          * Test in ISO 8601
          */
          describe('ISO 8601', function() {
              describe('dummy test', function() {
                  it('dummy test', function(done) {
                      done();
                  });
              });
          });

         /**
          * Test JSON
          */
          describe('JSON', function() {
              describe('dummy test', function() {
                  it('dummy test', function(done) {
                      done();
                  });
              });
          });

 });