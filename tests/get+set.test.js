const moment = require('../moment/moment').default;
const chai = require('chai');
const expect = chai.expect;

 describe('Getters and Setters', function() {
    
    describe('Millisecond Operations', function() {
    
        it('should get correct millisecond value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.millisecond()).to.equal(123);

            done();
        });
        
        it('should set correct millisecond value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.millisecond(453);
            expect(date.millisecond()).to.equal(453);
        
            done();
        });
        
        it('should set correct millisecond value and bubble up to increase seconds', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.millisecond(1321);
            expect(date.millisecond()).to.equal(321);
            expect(date.second()).to.equal(27);
            done();
        });
        
        it('should set correct millisecond value and bubble up to decrease seconds', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.millisecond(-298);
            expect(date.millisecond()).to.equal(702);
            expect(date.second()).to.equal(25);
            done();
        });
        
        it('should set correct millisecond value with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.millisecond(213.7);
            expect(date.millisecond()).to.equal(213);
        
            done();
        });
        
        it('should set correct millisecond value with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.millisecond('305');
            expect(date.millisecond()).to.equal(305);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.millisecond('BadInput');
            expect(date.millisecond()).to.equal(123);

            done();
        });
        
    });
    
    describe('Second Operations', function() {
    
        it('should get correct second value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.second()).to.equal(26);

            done();
        });
        
        it('should set correct second value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.second(43);
            expect(date.second()).to.equal(43);
            done();
        });
        
        it('should set correct second value and bubble up to increase minutes', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.second(88);
            expect(date.second()).to.equal(28);
            expect(date.minute()).to.equal(31);
            done();
        });
        
        it('should set correct second value and bubble up to decrease minutes', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.second(-13);
            expect(date.second()).to.equal(47);
            expect(date.minute()).to.equal(29);
            done();
        });
        
        it('should set correct second value with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.second(52.7);
            expect(date.second()).to.equal(52);
        
            done();
        });
        
        it('should set correct second value with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.second('54');
            expect(date.second()).to.equal(54);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.second('BadInput');
            expect(date.second()).to.equal(26);

            done();
        });
        
    });
    
    describe('Minute Operations', function() {
    
        it('should get correct minute value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.minute()).to.equal(30);

            done();
        });
        
        it('should set correct minute value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.minute(45);
            expect(date.minute()).to.equal(45);
        
            done();
        });
        
        it('should set correct minute value and bubble up to increase hours', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.minute(104);
            expect(date.minute()).to.equal(44);
            expect(date.hour()).to.equal(10);
            done();
        });
        
        it('should set correct minute value and bubble up to decrease hours', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.minute(-54);
            expect(date.minute()).to.equal(6);
            expect(date.hour()).to.equal(8);
            done();
        });
       
       it('should set correct minute value with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.minute(12.8);
            expect(date.minute()).to.equal(12);
        
            done();
        });
        
        it('should set correct minute value with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.minute('12');
            expect(date.minute()).to.equal(12);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.minute('BadInput');
            expect(date.minute()).to.equal(30);

            done();
        });
        
    });
        
    describe('Hour Operations', function() {
    
        it('should get correct hour value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.hour()).to.equal(9);

            done();
        });
        
        it('should set correct hour value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.hour(3);
            expect(date.hour()).to.equal(3);
        
            done();
        });
        
        it('should set correct hour value and bubble up to increase days', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.hour(29);
            expect(date.hour()).to.equal(5);
            expect(date.date()).to.equal(9);
            done();
        });
        
        it('should set correct hour value and bubble up to decrease days', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.hour(-19);
            expect(date.hour()).to.equal(5);
            expect(date.date()).to.equal(7);
            done();
        });
        
        it('should set correct hour value with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.hour(7.9);
            expect(date.hour()).to.equal(7);
        
            done();
        });
        
        it('should set correct hour value with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.hour('2');
            expect(date.hour()).to.equal(2);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.hour('BadInput');
            expect(date.hour()).to.equal(9);

            done();
        });
        
    });
    
    describe('Day of Month Operations', function() {
    
        it('should get correct day value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.date()).to.equal(8);

            done();
        });
        
        it('should set correct day value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.date(11);
            expect(date.date()).to.equal(11);
        
            done();
        });
        
        it('should set correct day value and bubble up to increase month', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.date(30);
            expect(date.date()).to.equal(2);
            expect(date.month()).to.equal(2);
            done();
        });
        
        it('should set correct day value and bubble up to decrease month', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.date(-7);
            expect(date.date()).to.equal(24);
            expect(date.month()).to.equal(0);
            done();
        });
        
        it('should set correct day value with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.date(21.6);
            expect(date.date()).to.equal(21);
        
            done();
        });
        
        it('should set correct day value with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.date('22');
            expect(date.date()).to.equal(22);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.date('BadInput');
            expect(date.date()).to.equal(8);

            done();
        });
        
    });
    
    describe('Day of Week Operations', function() {
    
        it('should get correct day of week value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.day()).to.equal(5);

            done();
        });
        
        it('should set correct day of week using digits', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.day(6);
            expect(date.day()).to.equal(6);
        
            done();
        });
        
        it('should set correct day of week using full string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.day("Tuesday");
            expect(date.day()).to.equal(2);
        
            done();
        });
        
        it('should set correct day of week using abbreviated string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.day("Wed");
            expect(date.day()).to.equal(3);
        
            done();
        });
        
        it('should set correct day of week and bubble up to next week', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.day(11);
            expect(date.day()).to.equal(4);
            expect(date.week()).to.equal(7);
            done();
        });
        
        it('should set correct day of week and bubble up to last week', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.day(-3);
            expect(date.day()).to.equal(4);
            expect(date.week()).to.equal(5);
            done();
        });
        
        it('should set correct day of week with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.day(3.7);
            expect(date.day()).to.equal(3);
        
            done();
        });
        
        it('should set correct day of week with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.day('2');
            expect(date.day()).to.equal(2);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            
            date.day('BadInput');
            expect(date.day()).to.equal(5);
            done();
        });
        
    });
    
    describe('Month Operations', function() {
    
        it('should get correct month value', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.month()).to.equal(1);

            done();
        });
        
        it('should set correct month value using digits', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.month(6);
            expect(date.month()).to.equal(6);
        
            done();
        });
        
        it('should set correct month value using full string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.month("December");
            expect(date.month()).to.equal(11);
        
            done();
        });
        
        it('should set correct month value using abbreviated string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.month("Nov");
            expect(date.month()).to.equal(10);
        
            done();
        });
        
        it('should set correct month value and bubble up to increase year', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.month(16);
            expect(date.month()).to.equal(4);
            expect(date.year()).to.equal(2014);
            done();
        });
        
        it('should set correct month value and bubble up to decrease year', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.month(-3);
            expect(date.month()).to.equal(9);
            expect(date.year()).to.equal(2012);
            done();
        });
        
        it('should set correct month value and truncate to last day of month', function(done) {
            const dateString = '2013-01-31 09:30:26.123';
            date = moment(dateString);
            date.month(1);
            expect(date.date()).to.equal(28);
            done();
        });
        
        it('should set correct month value with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.month(10.9);
            expect(date.month()).to.equal(10);
        
            done();
        });
        
        it('should set correct month value with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.month('3');
            expect(date.month()).to.equal(3);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.month('BadInput');
            expect(date.month()).to.equal(1);

            done();
        });
        
    });
    
    describe('Day of Year Operations', function() {
    
        it('should get correct day of year', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.dayOfYear()).to.equal(39);

            done();
        });
        
        it('should set correct day of year and corresponding month', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.dayOfYear(67);
            expect(date.dayOfYear()).to.equal(67);
            expect(date.month()).to.equal(2)
            done();
        });
        
        it('should set correct day of year and bubble up to increase years', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.dayOfYear(402);
            expect(date.dayOfYear()).to.equal(37);
            expect(date.month()).to.equal(1);
            expect(date.year()).to.equal(2014);
            done();
        });
        
        it('should set correct day of year and bubble up to decrease years', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.dayOfYear(-47);
            expect(date.dayOfYear()).to.equal(319);
            expect(date.month()).to.equal(10);
            expect(date.year()).to.equal(2012);
            done();
        });
        
        it('should set correct day of year with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.dayOfYear(156.8);
            expect(date.dayOfYear()).to.equal(156);
        
            done();
        });
        
        it('should set correct day of year with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.dayOfYear('291');
            expect(date.dayOfYear()).to.equal(291);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.dayOfYear('BadInput');
            expect(date.dayOfYear()).to.equal(39);

            done();
        });
        
    });
    
    describe('Quarter Operations', function() {
    
        it('should get correct quarter', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.quarter()).to.equal(1);

            done();
        });
        
        it('should set correct quarter', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.quarter(3);
            expect(date.quarter()).to.equal(3);
            expect(date.month()).to.equal(7);
            expect(date.date()).to.equal(8);
            done();
        });
        
        it('should set correct quarter and bubble up to increase year', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.quarter(6);
            expect(date.quarter()).to.equal(2);
            expect(date.month()).to.equal(4);
            expect(date.year()).to.equal(2014);
            done();
        });
        
        it('should set correct quarter and bubble up to decrease year', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.quarter(-1);
            expect(date.quarter()).to.equal(3);
            expect(date.month()).to.equal(7);
            expect(date.year()).to.equal(2012);
            done();
        });
        
        it('should set correct quarter with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.quarter(2.7);
            expect(date.quarter()).to.equal(2);
        
            done();
        });
        
        it('should set correct quarter with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.quarter('1');
            expect(date.quarter()).to.equal(1);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.quarter('BadInput');
            expect(date.quarter()).to.equal(1);

            done();
        });
        
    });
    
    describe('Year Operations', function() {
    
        it('should get correct year', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            expect(date.year()).to.equal(2013);

            done();
        });
        
        it('should set correct year', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.year(2007);
            expect(date.year()).to.equal(2007);
            done();
        });
        
        it('should return NaN due to year greater than max allowed', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.year(300000);
            expect(date.year()).to.be.NaN;
            done();
        });
        
        it('should return NaN due to year greater than max allowed', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.year(-300000);
            expect(date.year()).to.be.NaN;
            done();
        });
        
        it('should set correct year value with floating point number', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            date.year(2039.8);
            expect(date.year()).to.equal(2039);
        
            done();
        });
        
        it('should set correct year with string', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.year('2016');
            expect(date.year()).to.equal(2016);

            done();
        });
        
        it('should remain unchanged due to invalid input', function(done) {
            const dateString = '2013-02-08 09:30:26.123';
            date = moment(dateString);
            
            date.year('BadInput');
            expect(date.year()).to.equal(2013);

            done();
        });
    });
    
});
