const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

/**
 * Testing display
 */
 describe('Display - Black Box (Equivalence Classes)', function() {

    /**
     * Test format
     */
    describe('Format', function() {
        describe('Default (no args)', function() {
            it('should display in ISO 8601 format (default)', function(done) {
                const dateString = '2013-02-08';
                const date = moment(dateString).format();
                const expected_result = '2013-02-08T00:00:00-07:00';
                expect(date).to.equal(expected_result);
                done();
            });
        });
        describe('Tokens', function() {
            describe('Month', function() {
                // numeric value of month 1-12
                describe('M - numeric value', function() {
                    it('valid month', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("M");
                        expect(formatted).to.equal("1");
                        done();
                    });
                });
                // cardinal value of month 1st-12th
                describe('Mo - cardinal value', function() {
                    it('cardinal month - st', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("Mo");
                        expect(formatted).to.equal("1st");
                        done();
                    });
                    it('cardinal month - nd', function(done) {
                        dateString = '2017-02-15';
                        date = moment(dateString);
                        formatted = date.format("Mo");
                        expect(formatted).to.equal("2nd");
                        done();
                    });
                    it('cardinal month - rd', function(done) {
                        dateString = '2017-03-15';
                        date = moment(dateString);
                        formatted = date.format("Mo");
                        expect(formatted).to.equal("3rd");
                        done();
                    });
                    it('cardinal month - th', function(done) {
                        dateString = '2017-04-15';
                        date = moment(dateString);
                        formatted = date.format("Mo");
                        expect(formatted).to.equal("4th");
                        done();
                    });
                });
                // two digit numeric value of month
                describe('MM - two digit numeric value', function() {
                    it('valid single digit month', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("MM");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('valid double digit month', function(done) {
                        dateString = '2017-10-15';
                        date = moment(dateString);
                        formatted = date.format("MM");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
                // three letter month name
                describe('MMM - three letter month name', function() {
                    it('valid month', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("MMM");
                        expect(formatted).to.equal("Jan");
                        done();
                    });
                });
                // full month name
                describe('MMMM - full month name', function() {
                    it('valid month', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("MMMM");
                        expect(formatted).to.equal("January");
                        done();
                    });
                     });
            });
            // 1,2,3,4
            describe('Quarter', function() {
                describe('Q - numeric value', function() {
                    it('first numeric', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("Q");
                        expect(formatted).to.equal("1");
                        done();
                    });
                    it('second numeric', function(done) {
                        dateString = '2017-04-15';
                        date = moment(dateString);
                        formatted = date.format("Q");
                        expect(formatted).to.equal("2");
                        done();
                    });
                    it('third numeric', function(done) {
                        dateString = '2017-07-15';
                        date = moment(dateString);
                        formatted = date.format("Q");
                        expect(formatted).to.equal("3");
                        done();
                    });
                    it('fourth numeric', function(done) {
                        dateString = '2017-10-15';
                        date = moment(dateString);
                        formatted = date.format("Q");
                        expect(formatted).to.equal("4");
                        done();
                    });
                });
                // 1st, 2nd, 3rd, 4th
                describe('Qo - cardinal value', function() {
                    it('first cardinal', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("Qo");
                        expect(formatted).to.equal("1st");
                        done();
                    });
                    it('second cardinal', function(done) {
                        dateString = '2017-04-15';
                        date = moment(dateString);
                        formatted = date.format("Qo");
                        expect(formatted).to.equal("2nd");
                        done();
                    });
                    it('third cardinal', function(done) {
                        dateString = '2017-07-15';
                        date = moment(dateString);
                        formatted = date.format("Qo");
                        expect(formatted).to.equal("3rd");
                        done();
                    });
                    it('fourth cardinal', function(done) {
                        dateString = '2017-10-15';
                        date = moment(dateString);
                        formatted = date.format("Qo");
                        expect(formatted).to.equal("4th");
                        done();
                    });
                });
            });
            describe('Day of Month', function() {
                describe('D - numeric value', function() {
                    it('valid day', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("D");
                        expect(formatted).to.equal("15");
                        done();
                    });
                });
                describe('Do - cardinal value', function() {
                    it('cardinal day - st', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("Do");
                        expect(formatted).to.equal("1st");
                        done();
                    });
                    it('cardinal day - nd', function(done) {
                        dateString = '2017-01-02';
                        date = moment(dateString);
                        formatted = date.format("Do");
                        expect(formatted).to.equal("2nd");
                        done();
                    });
                    it('cardinal day - rd', function(done) {
                        dateString = '2017-01-03';
                        date = moment(dateString);
                        formatted = date.format("Do");
                        expect(formatted).to.equal("3rd");
                        done();
                    });
                    it('cardinal day - th', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("Do");
                        expect(formatted).to.equal("15th");
                        done();
                    });
                });
                // 2 digits
                describe('DD - two digit numeric value', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-05';
                        date = moment(dateString);
                        formatted = date.format("DD");
                        expect(formatted).to.equal("05");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("DD");
                        expect(formatted).to.equal("15");
                        done();
                    });
                });
            });
            // day of year
            describe('Day of Year', function() {
                describe('DDD - numeric value', function() {
                    it('valid day of year', function(done) {
                        dateString = '2017-02-15';
                        date = moment(dateString);
                        formatted = date.format("DDD");
                        expect(formatted).to.equal("46");
                        done();
                    });
                });
                // cardinal day of year
                describe('DDDo - cardinal value', function() {
                    it('cardinal day of year - st', function(done) {
                        dateString = '2017-02-10';
                        date = moment(dateString);
                        formatted = date.format("DDDo");
                        expect(formatted).to.equal("41st");
                        done();
                    });
                    it('cardinal day of year - nd', function(done) {
                        dateString = '2017-02-11';
                        date = moment(dateString);
                        formatted = date.format("DDDo");
                        expect(formatted).to.equal("42nd");
                        done();
                    });
                    it('cardinal day of year - rd', function(done) {
                        dateString = '2017-02-12';
                        date = moment(dateString);
                        formatted = date.format("DDDo");
                        expect(formatted).to.equal("43rd");
                        done();
                    });
                    it('cardinal day of year - th', function(done) {
                        dateString = '2017-02-13';
                        date = moment(dateString);
                        formatted = date.format("DDDo");
                        expect(formatted).to.equal("44th");
                        done();
                    });
                });
                // three digit day of year
                describe('DDDD - three digit value', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-05';
                        date = moment(dateString);
                        formatted = date.format("DDDD");
                        expect(formatted).to.equal("005");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("DDDD");
                        expect(formatted).to.equal("015");
                        done();
                    });
                    it('triple digit', function(done) {
                        dateString = '2017-04-15';
                        date = moment(dateString);
                        formatted = date.format("DDDD");
                        expect(formatted).to.equal("105");
                        done();
                    });
                });
            });
            describe('Day of Week', function() {
                describe('d - numeric value', function() {
                    it('valid day', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("d");
                        expect(formatted).to.equal("0");
                        done();
                    });
                });
                describe('do - cardinal value', function() {
                    it('cardinal - st', function(done) {
                        dateString = '2017-01-02';
                        date = moment(dateString);
                        formatted = date.format("do");
                        expect(formatted).to.equal("1st");
                        done();
                    });
                    it('cardinal - nd', function(done) {
                        dateString = '2017-01-03';
                        date = moment(dateString);
                        formatted = date.format("do");
                        expect(formatted).to.equal("2nd");
                        done();
                    });
                    it('cardinal - rd', function(done) {
                        dateString = '2017-01-04';
                        date = moment(dateString);
                        formatted = date.format("do");
                        expect(formatted).to.equal("3rd");
                        done();
                    });
                    it('cardinal - th', function(done) {
                        dateString = '2017-01-05';
                        date = moment(dateString);
                        formatted = date.format("do");
                        expect(formatted).to.equal("4th");
                        done();
                    });
                });
                describe('dd - two letter name', function() {
                    it('valid day', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("dd");
                        expect(formatted).to.equal("Su");
                        done();
                    });
                });
                describe('ddd - three letter name', function() {
                    it('valid day', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("ddd");
                        expect(formatted).to.equal("Sun");
                        done();
                    });
                });
                describe('dddd - full name', function() {
                    it('valid day', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("dddd");
                        expect(formatted).to.equal("Sunday");
                        done();
                    });
                });
            });
            describe('Day of Week (Locale)', function() {
                describe('e - numeric value', function() {
                    it('valid day', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("e");
                        expect(formatted).to.equal("0");
                        done();
                    });
                });
            });
            describe('Day of Week (ISO)', function() {
                describe('E - numeric value', function() {
                    it('valid day', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("E");
                        expect(formatted).to.equal("7");
                        done();
                    });
                });
            });
            describe('Week of Year', function() {
                describe('w - numeric value', function() {
                    it('valid week', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("w");
                        expect(formatted).to.equal("1");
                        done();
                    });
                });
                describe('wo - cardinal value', function() {
                    it('cardinal - st', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("wo");
                        expect(formatted).to.equal("1st");
                        done();
                    });
                    it('cardinal - nd', function(done) {
                        dateString = '2017-01-08';
                        date = moment(dateString);
                        formatted = date.format("wo");
                        expect(formatted).to.equal("2nd");
                        done();
                    });
                    it('cardinal - rd', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("wo");
                        expect(formatted).to.equal("3rd");
                        done();
                    });
                    it('cardinal - th', function(done) {
                        dateString = '2017-01-22';
                        date = moment(dateString);
                        formatted = date.format("wo");
                        expect(formatted).to.equal("4th");
                        done();
                    });
                });
                describe('ww - two digit numeric value', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("ww");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-03-10';
                        date = moment(dateString);
                        formatted = date.format("ww");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
            });
            describe('Week of Year (ISO)', function() {
                describe('W - numeric value', function() {
                    it('valid week', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("W");
                        expect(formatted).to.equal("52");
                        done();
                    });
                });
                describe('Wo - cardinal value', function() {
                    it('cardinal - st', function(done) {
                        dateString = '2017-01-08';
                        date = moment(dateString);
                        formatted = date.format("Wo");
                        expect(formatted).to.equal("1st");
                        done();
                    });
                    it('cardinal - nd', function(done) {
                        dateString = '2017-01-015';
                        date = moment(dateString);
                        formatted = date.format("Wo");
                        expect(formatted).to.equal("2nd");
                        done();
                    });
                    it('cardinal - rd', function(done) {
                        dateString = '2017-01-22';
                        date = moment(dateString);
                        formatted = date.format("Wo");
                        expect(formatted).to.equal("3rd");
                        done();
                    });
                    it('cardinal - th', function(done) {
                        dateString = '2017-01-29';
                        date = moment(dateString);
                        formatted = date.format("Wo");
                        expect(formatted).to.equal("4th");
                        done();
                    });
                });
                describe('WW - two digit numeric value', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-08';
                        date = moment(dateString);
                        formatted = date.format("WW");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-03-10';
                        date = moment(dateString);
                        formatted = date.format("WW");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
            });
            describe('Year', function() {
                describe('YY - last two digit numeric value', function() {
                    it('valid year', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("YY");
                        expect(formatted).to.equal("17");
                        done();
                    });
                });
                describe('YYYY - full numeric value', function() {
                    it('valid year', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("YYYY");
                        expect(formatted).to.equal("2017");
                        done();
                    });
                });
                describe('Y - full ISO value', function() {
                    it('less than 10000', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("Y");
                        expect(formatted).to.equal("2017");
                        done();
                    });
                    it('greater than 10000', function(done) {
                        dateString = '20170-01-01';
                        date = moment(dateString);
                        formatted = date.format("Y");
                        expect(formatted).to.equal("+20170");
                        done();
                    });
                });
            });
            describe('Week Year', function() {
                describe('gg - last two digit numeric value', function() {
                    it('valid year', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("gg");
                        expect(formatted).to.equal("17");
                        done();
                    });
                });
                describe('gggg - full numeric value', function() {
                    it('valid year', function(done) {
                        dateString = '2017-01-01';
                        date = moment(dateString);
                        formatted = date.format("gggg");
                        expect(formatted).to.equal("2017");
                        done();
                    });
                });
            });
            describe('Weak Year (ISO)', function() {
                describe('GG - last two digit numeric value', function() {
                    it('valid year', function(done) {
                        dateString = '2017-02-01';
                        date = moment(dateString);
                        formatted = date.format("GG");
                        expect(formatted).to.equal("17");
                        done();
                    });
                });
                describe('GGGG - full numeric value', function() {
                    it('valid year', function(done) {
                        dateString = '2017-02-01';
                        date = moment(dateString);
                        formatted = date.format("GGGG");
                        expect(formatted).to.equal("2017");
                        done();
                    });
                });
            });
            describe('AM/PM', function() {
                describe('A - capital', function() {
                    it('AM', function(done) {
                        dateString = '2017-01-01T00';
                        date = moment(dateString);
                        formatted = date.format("A");
                        expect(formatted).to.equal("AM");
                        done();
                    });
                    it('PM', function(done) {
                        dateString = '2017-01-01T12';
                        date = moment(dateString);
                        formatted = date.format("A");
                        expect(formatted).to.equal("PM");
                        done();
                    });
                });
                describe('a - lowercase', function() {
                    it('am', function(done) {
                        dateString = '2017-01-01T00';
                        date = moment(dateString);
                        formatted = date.format("a");
                        expect(formatted).to.equal("am");
                        done();
                    });
                    it('pm', function(done) {
                        dateString = '2017-01-01T12';
                        date = moment(dateString);
                        formatted = date.format("a");
                        expect(formatted).to.equal("pm");
                        done();
                    });
                });
            });
            describe('Hour', function() {
                describe('H - 0 indexed 24 hour', function() {
                    it('less than 12 ', function(done) {
                        dateString = '2017-01-01T00';
                        date = moment(dateString);
                        formatted = date.format("H");
                        expect(formatted).to.equal("0");
                        done();
                    });
                    it('12 or more', function(done) {
                        dateString = '2017-01-01T12';
                        date = moment(dateString);
                        formatted = date.format("H");
                        expect(formatted).to.equal("12");
                        done();
                    });
                });
                describe('HH - two digit 0 indexed 24 hour', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-01T01';
                        date = moment(dateString);
                        formatted = date.format("HH");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-01-01T10';
                        date = moment(dateString);
                        formatted = date.format("HH");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
                describe('h - 12 hour', function() {
                    it('less than 12 ', function(done) {
                        dateString = '2017-01-01T01';
                        date = moment(dateString);
                        formatted = date.format("h");
                        expect(formatted).to.equal("1");
                        done();
                    });
                    it('12 or more', function(done) {
                        dateString = '2017-01-01T13';
                        date = moment(dateString);
                        formatted = date.format("h");
                        expect(formatted).to.equal("1");
                        done();
                    });
                });
                describe('hh - two digit ', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-01T01';
                        date = moment(dateString);
                        formatted = date.format("hh");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-01-01T10';
                        date = moment(dateString);
                        formatted = date.format("hh");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
                describe('k - 24 hour starting 24', function() {
                    it('less than 12 ', function(done) {
                        dateString = '2017-01-01T00';
                        date = moment(dateString);
                        formatted = date.format("k");
                        expect(formatted).to.equal("24");
                        done();
                    });
                    it('12 or more', function(done) {
                        dateString = '2017-01-01T12';
                        date = moment(dateString);
                        formatted = date.format("k");
                        expect(formatted).to.equal("12");
                        done();
                    });
                });
                describe('kk - 2 digit 24 hour starting 24', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-01T01';
                        date = moment(dateString);
                        formatted = date.format("kk");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-01-01T10';
                        date = moment(dateString);
                        formatted = date.format("kk");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
            });
            describe('Minute', function() {
                describe('m- numeric value', function() {
                    it('valid minute', function(done) {
                        dateString = '2017-01-01T00:01';
                        date = moment(dateString);
                        formatted = date.format("m");
                        expect(formatted).to.equal("1");
                        done();
                    });
                });
                describe('mm - two digit numeric value', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-01T00:01';
                        date = moment(dateString);
                        formatted = date.format("mm");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-01-01T00:10';
                        date = moment(dateString);
                        formatted = date.format("mm");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
            });
            describe('Second', function() {
                describe('s', function() {
                    it('valid second', function(done) {
                        dateString = '2017-01-01T00:00:01';
                        date = moment(dateString);
                        formatted = date.format("s");
                        expect(formatted).to.equal("1");
                        done();
                    });
                });
                describe('ss', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-01T00:00:01';
                        date = moment(dateString);
                        formatted = date.format("ss");
                        expect(formatted).to.equal("01");
                        done();
                    });
                    it('double digit', function(done) {
                        dateString = '2017-01-01T00:00:10';
                        date = moment(dateString);
                        formatted = date.format("ss");
                        expect(formatted).to.equal("10");
                        done();
                    });
                });
            });
            describe('Fractional Second', function() {
                describe('S - single digit', function() {
                    it('single digit', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("S");
                        expect(formatted).to.equal("0");
                        done();
                    });
                });
                describe('SS - double digit digit', function() {
                    it('double digit', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("SS");
                        expect(formatted).to.equal("00");
                        done();
                    });
                });
                describe('SSS - triple digit', function() {
                    it('triple digit', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("SSS");
                        expect(formatted).to.equal("000");
                        done();
                    });
                });
                describe('SSSS ... - 4 or more digits', function() {
                    it('8 digits', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("SSSSSSSS");
                        expect(formatted).to.equal("00000000");
                        done();
                    });
                });
            });
            describe('Time Zone', function() {
                describe('Z - timezone offset with colon', function() {
                    it('valid time', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("Z");
                        expect(formatted).to.equal("-07:00");
                        done();
                    });
                });
                describe('ZZ - timezone offset no colon', function() {
                    it('valid time', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("ZZ");
                        expect(formatted).to.equal("-0700");
                        done();
                    });
                });
            });
            describe('Unix Timestamp', function() {
                describe('X - timestamp in seconds', function() {
                    it('valid time', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("X");
                        expect(formatted).to.equal("1483254000");
                        done();
                    });
                });
            });
            describe('Unix Millisecond Timestamp', function() {
                describe('x - timestamp in milliseconds', function() {
                    it('valid time', function(done) {
                        dateString = '2017-01-01T00:00:00';
                        date = moment(dateString);
                        formatted = date.format("x");
                        expect(formatted).to.equal("1483254000000");
                        done();
                    });
                });
            });
        });
        describe('Localization', function() {
            describe('Time', function() {
                describe('LT', function() {
                    it('local time from offset', function(done) {
                        dateString = '2017-01-01T00:00:00-09:00';
                        date = moment(dateString);
                        formatted = date.format("LT");
                        expect(formatted).to.equal("2:00 AM");
                        done();
                    });
                });
            });
            describe('Time With Seconds', function() {
                describe('LTS', function() {
                    it('local time with seconds from offset', function(done) {
                        dateString = '2017-01-01T00:00:00-09:00';
                        date = moment(dateString);
                        formatted = date.format("LTS");
                        expect(formatted).to.equal("2:00:00 AM");
                        done();
                    });
                });
            });
            describe('Month numeral, day of month, year', function() {
                describe('L - MM/DD/YYYY zero padded', function() {
                    it('MM/DD/YYYY', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("L");
                        expect(formatted).to.equal("01/15/2017");
                        done();
                    });
                });
                describe('l - MM/DD/YYYY not zero padded', function() {
                    it('MM/DD/YYYY', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("l");
                        expect(formatted).to.equal("1/15/2017");
                        done();
                    });
                });
            });
            describe('Month name, day of month, year', function() {
                describe('LL - MMMM DD, YYYY', function() {
                    it('MMMM DD, YYYY', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("LL");
                        expect(formatted).to.equal("January 15, 2017");
                        done();
                    });
                });
                describe('ll - MMM DD, YYYY', function() {
                    it('MMM DD, YYYY', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("ll");
                        expect(formatted).to.equal("Jan 15, 2017");
                        done();
                    });
                });
            });
            describe('Month name, day of month, year, time', function() {
                describe('LLL - MMMM DD, YYYY LT', function() {
                    it('MMMM DD, YYYY LT', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("LLL");
                        expect(formatted).to.equal("January 15, 2017 12:00 AM");
                        done();
                    });
                });
                describe('lll - MMM DD, YYYY LT', function() {
                    it('MMM DD, YYYY LT', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("lll");
                        expect(formatted).to.equal("Jan 15, 2017 12:00 AM");
                        done();
                    });
                });
            });
            describe('Month name, day of month, day of week, year, time', function() {
                describe('LLLL - dddd, MMMM DD, YYYY LT', function() {
                    it('dddd, MMMM DD, YYYY LT', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("LLLL");
                        expect(formatted).to.equal("Sunday, January 15, 2017 12:00 AM");
                        done();
                    });
                });
                describe('llll - ddd, MMM DD, YYYY LT', function() {
                    it('ddd, MMM DD, YYYY LT', function(done) {
                        dateString = '2017-01-15';
                        date = moment(dateString);
                        formatted = date.format("llll");
                        expect(formatted).to.equal("Sun, Jan 15, 2017 12:00 AM");
                        done();
                    });
                });
            });
        });
        describe('Escape characters', function() {
            it('without escape characters', function(done) {
                dateString = '2017-01-15';
                date = moment(dateString);
                formatted = date.format("Y YY");
                expect(formatted).to.equal("2017 17");
                done();
            });
            it('with escape characters', function(done) {
                dateString = '2017-01-15';
                date = moment(dateString);
                formatted = date.format("[Y] YY");
                expect(formatted).to.equal("Y 17");
                done();
            });
        });
        describe('Invalid token', function() {
            it('invalid token', function(done) {
                dateString = '2017-01-01T00:00:00';
                date = moment(dateString);
                formatted = date.format("j");
                expect(formatted).to.equal("j");
                done();
            });
        });
    });

    /**
     * Test time from now
     */
    describe('Time From Now', function() {
        it('with suffix', function(done) {
            fromNow = moment().fromNow();
            expect(fromNow).to.equal("a few seconds ago");
            done();
        });
        it('without suffix', function(done) {
            fromNow = moment().fromNow(true);
            expect(fromNow).to.equal("a few seconds");
            done();
        });
        it('invalid moment', function(done) {
            fromNow = moment('invalid').fromNow();
            expect(fromNow).to.equal('Invalid date');
            done();
        });
        describe('0-44 seconds (key: s) -> a few seconds ago', function() {
            it('43 seconds', function(done) {
                fromNow = (moment().subtract(43, 's')).fromNow();
                expect(fromNow).to.equal("a few seconds ago");
                done();
            });
        });
        describe('44-44 seconds (key: ss) -> 44 seconds ago', function() {
            it('44 seconds', function(done) {
                fromNow = (moment().subtract(44, 's')).fromNow();
                expect(fromNow).to.equal("44 seconds ago");
                done();
            });
        });
        describe('45-89 seconds (key: m) -> a minute ago', function() {
            it('45 seconds', function(done) {
                fromNow = (moment().subtract(45, 's')).fromNow();
                expect(fromNow).to.equal("a minute ago");
                done();
            });
            it('89 seconds', function(done) {
                fromNow = (moment().subtract(89, 's')).fromNow();
                expect(fromNow).to.equal("a minute ago");
                done();
            });
        });
        describe('90 seconds - 44 minutes (key: mm) -> 2 minutes ago ... 44 minutes ago', function() {
            it('90 seconds', function(done) {
                fromNow = (moment().subtract(90, 's')).fromNow();
                expect(fromNow).to.equal("2 minutes ago");
                done();
            });
            it('44 minutes', function(done) {
                fromNow = (moment().subtract(44, 'm')).fromNow();
                expect(fromNow).to.equal("44 minutes ago");
                done();
            });
        });
        describe('45-89 minutes (key: h) -> an hour ago', function() {
            it('45 minutes', function(done) {
                fromNow = (moment().subtract(45, 'm')).fromNow();
                expect(fromNow).to.equal("an hour ago");
                done();
            });
            it('89 minutes', function(done) {
                fromNow = (moment().subtract(89, 'm')).fromNow();
                expect(fromNow).to.equal("an hour ago");
                done();
            });
        });
        describe('90 minutes - 21 hours (key: hh) -> 2 hours ago ... 21 hours ago', function() {
            it('90 minutes', function(done) {
                fromNow = (moment().subtract(90, 'm')).fromNow();
                expect(fromNow).to.equal("2 hours ago");
                done();
            });
            it('21 hours', function(done) {
                fromNow = (moment().subtract(21, 'h')).fromNow();
                expect(fromNow).to.equal("21 hours ago");
                done();
            });
        });
        describe('22-35 hours (key: d) -> a day ago', function() {
            it('22 hours', function(done) {
                fromNow = (moment().subtract(22, 'h')).fromNow();
                expect(fromNow).to.equal("a day ago");
                done();
            });
            it('35 hours', function(done) {
                fromNow = (moment().subtract(35, 'h')).fromNow();
                expect(fromNow).to.equal("a day ago");
                done();
            });
        });
        describe('36 hours - 25 days (key: dd) -> 2 days ago ... 25 days ago', function() {
            it('36 hours', function(done) {
                fromNow = (moment().subtract(36, 'h')).fromNow();
                expect(fromNow).to.equal("2 days ago");
                done();
            });
            it('25 days', function(done) {
                fromNow = (moment().subtract(25, 'd')).fromNow();
                expect(fromNow).to.equal("25 days ago");
                done();
            });
        });
        describe('26-45 days (key: M) -> a month ago', function() {
            it('26 days', function(done) {
                fromNow = (moment().subtract(26, 'd')).fromNow();
                expect(fromNow).to.equal("a month ago");
                done();
            });
            it('45 days', function(done) {
                fromNow = (moment().subtract(45, 'd')).fromNow();
                expect(fromNow).to.equal("a month ago");
                done();
            });
        });
        describe('45-319 days (key: MM) -> 2 months ago ... 10 months ago', function() {
            it('45 days', function(done) {
                fromNow = (moment().subtract(45, 'd')).fromNow();
                expect(fromNow).to.equal("2 months ago");
                done();
            });
            it('319 days', function(done) {
                fromNow = (moment().subtract(319, 'd')).fromNow();
                expect(fromNow).to.equal("10 months ago");
                done();
            });
        });
        describe('320-457 days (key: y) -> a year ago', function() {
            it('320 days', function(done) {
                fromNow = (moment().subtract(320, 'd')).fromNow();
                expect(fromNow).to.equal("a year ago");
                done();
            });
            it('457 days', function(done) {
                fromNow = (moment().subtract(457, 'd')).fromNow();
                expect(fromNow).to.equal("a year ago");
                done();
            });
        });
        describe('548+ days (key: yy) -> 2 years ago ... 20 years ago', function() {
            it('2 years', function(done) {
                fromNow = (moment().subtract(548, 'd')).fromNow();
                expect(fromNow).to.equal("2 years ago");
                done();
            });
            it('20 years', function(done) {
                fromNow = (moment().subtract(20, 'y')).fromNow();
                expect(fromNow).to.equal("20 years ago");
                done();
            });
            it('21 years', function(done) {
                fromNow = (moment().subtract(21, 'y')).fromNow();
                expect(fromNow).to.equal("21 years ago");
                done();
            });
        });
    });

    /**
     * Test time to now
     */
     describe('Time To Now', function() {
          it('with suffix', function(done) {
            toNow = moment().toNow();
            expect(toNow).to.equal("in a few seconds");
            done();
        });
        it('without suffix', function(done) {
            toNow = moment().toNow(true);
            expect(toNow).to.equal("a few seconds");
            done();
        });
        it('invalid moment', function(done) {
            toNow = moment('invalid').toNow();
            expect(toNow).to.equal('Invalid date');
            done();
        });
        describe('0-44 seconds (key: s) -> in a few seconds', function() {
            it('44 seconds', function(done) {
                toNow = (moment().subtract(44, 's')).toNow();
                expect(toNow).to.equal("in a few seconds");
                done();
            });
        });
        describe('45-89 seconds (key: m) -> in a minute', function() {
            it('45 seconds', function(done) {
                toNow = (moment().subtract(45, 's')).toNow();
                expect(toNow).to.equal("in a minute");
                done();
            });
            it('89 seconds', function(done) {
                toNow = (moment().subtract(89, 's')).toNow();
                expect(toNow).to.equal("in a minute");
                done();
            });
        });
        describe('90 seconds - 44 minutes (key: mm) -> in 2 minutes ... in 44 minutes', function() {
            it('90 seconds', function(done) {
                toNow = (moment().subtract(90, 's')).toNow();
                expect(toNow).to.equal("in 2 minutes");
                done();
            });
            it('44 minutes', function(done) {
                toNow = (moment().subtract(44, 'm')).toNow();
                expect(toNow).to.equal("in 44 minutes");
                done();
            });
        });
        describe('45-89 minutes (key: h) -> in an hour', function() {
            it('45 minutes', function(done) {
                toNow = (moment().subtract(45, 'm')).toNow();
                expect(toNow).to.equal("in an hour");
                done();
            });
            it('89 minutes', function(done) {
                toNow = (moment().subtract(89, 'm')).toNow();
                expect(toNow).to.equal("in an hour");
                done();
            });
        });
        describe('90 minutes - 21 hours (key: hh) -> in 2 hours ... in 21 hours', function() {
            it('90 minutes', function(done) {
                toNow = (moment().subtract(90, 'm')).toNow();
                expect(toNow).to.equal("in 2 hours");
                done();
            });
            it('21 hours', function(done) {
                toNow = (moment().subtract(21, 'h')).toNow();
                expect(toNow).to.equal("in 21 hours");
                done();
            });
        });
        describe('22-35 hours (key: d) -> in a day', function() {
            it('22 hours', function(done) {
                toNow = (moment().subtract(22, 'h')).toNow();
                expect(toNow).to.equal("in a day");
                done();
            });
            it('35 hours', function(done) {
                toNow = (moment().subtract(35, 'h')).toNow();
                expect(toNow).to.equal("in a day");
                done();
            });
        });
        describe('36 hours - 25 days (key: dd) -> in 2 days ... in 25 days', function() {
            it('36 hours', function(done) {
                toNow = (moment().subtract(36, 'h')).toNow();
                expect(toNow).to.equal("in 2 days");
                done();
            });
            it('25 days', function(done) {
                toNow = (moment().subtract(25, 'd')).toNow();
                expect(toNow).to.equal("in 25 days");
                done();
            });
        });
        describe('26-45 days (key: M) -> in a month', function() {
            it('26 days', function(done) {
                toNow = (moment().subtract(26, 'd')).toNow();
                expect(toNow).to.equal("in a month");
                done();
            });
            it('45 days', function(done) {
                toNow = (moment().subtract(45, 'd')).toNow();
                expect(toNow).to.equal("in a month");
                done();
            });
        });
        describe('45-319 days (key: MM) -> in 2 months ... in 10 months', function() {
            it('45 days', function(done) {
                toNow = (moment().subtract(45, 'd')).toNow();
                expect(toNow).to.equal("in 2 months");
                done();
            });
            it('319 days', function(done) {
                toNow = (moment().subtract(319, 'd')).toNow();
                expect(toNow).to.equal("in 10 months");
                done();
            });
        });
        describe('320-457 days (key: y) -> in a year', function() {
            it('320 days', function(done) {
                toNow = (moment().subtract(320, 'd')).toNow();
                expect(toNow).to.equal("in a year");
                done();
            });
            it('457 days', function(done) {
                toNow = (moment().subtract(457, 'd')).toNow();
                expect(toNow).to.equal("in a year");
                done();
            });
        });
        describe('548+ days (key: yy) -> in 2 years ... in 20 years', function() {
            it('2 years', function(done) {
                toNow = (moment().subtract(548, 'd')).toNow();
                expect(toNow).to.equal("in 2 years");
                done();
            });
            it('20 years', function(done) {
                toNow = (moment().subtract(20, 'y')).toNow();
                expect(toNow).to.equal("in 20 years");
                done();
            });
            it('21 years', function(done) {
                toNow = (moment().subtract(21, 'y')).toNow();
                expect(toNow).to.equal("in 21 years");
                done();
            });
        });
     });

    /**
     * Test ISO 8601
     */
     describe('ISO 8601', function() {
         it('invalid moment', function(done) {
            iso = moment('invalid').toISOString();
            expect(iso).to.equal(null);
            done();
         });
         it('already UTC', function(done) {
            datestring = '2017-12-01T06:00:00.000+00:00';
            date = moment(datestring);
            iso = date.toISOString();
            expect(iso).to.equal('2017-12-01T06:00:00.000Z');
            done();
         });
         it('local format', function(done) {
             datestring = '2017-11-30T23:00:00.000-07:00';
             date = moment(datestring);
             iso = date.toISOString();
             expect(iso).to.equal('2017-12-01T06:00:00.000Z');
            done();
         });
         it('already a timestamp', function(done) {
            datestring = '2017-12-01T06:00:00.000+00:00';
            date = moment(datestring);
            iso = date.toISOString();
            expect(iso).to.equal('2017-12-01T06:00:00.000Z');
            done();
         });
         it('not a timestamp', function(done) {
             datestring = '23:00 November 30 2017';
             date = moment(datestring);
             iso = date.toISOString();
             expect(iso).to.equal('2017-12-01T06:00:00.000Z');
             done();
         });
     });

    /**
     * Test JSON
     */
     describe('JSON', function() {
         it('invalid moment', function(done) {
            json = moment('invalid').toJSON();
            expect(json).to.equal(null);
            done();
         });
         it('ISO string', function(done) {
             datestring = '2017-12-01T06:00:00.000+00:00';
             date = moment(datestring);
             json = date.toJSON();
             expect(json).to.equal('2017-12-01T06:00:00.000Z');
             done()
         });
         it('not ISO string', function(done) {
             datestring = '23:00 November 30 2017';
             date = moment(datestring);
             json = date.toJSON();
             expect(json).to.equal('2017-12-01T06:00:00.000Z');
             done();
         });
         it('UTC', function(done) {
             datestring = '2017-12-01T06:00:00.000+00:00';
             date = moment(datestring);
             json = date.toJSON();
             expect(json).to.equal('2017-12-01T06:00:00.000Z');
             done();
         });
         it('local format', function(done) {
             datestring = '2017-11-30T23:00:00.000-07:00';
             date = moment(datestring);
             json = date.toJSON();
             expect(json).to.equal('2017-12-01T06:00:00.000Z');
            done();
         });
     });
});