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