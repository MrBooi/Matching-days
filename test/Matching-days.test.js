describe('The Matching Day function', function() {

  it('should display "2018-05-09" if user selected this date ', function() {
      var matchingDay= MatchingDay();
      matchingDay.date1("2018-05-09");
       assert.equal(matchingDay.getDay1() ,'2018-05-09');
  });
  it('should display "2018-04-11" if user selected this date ', function() {
      var matchingDay= MatchingDay();
      matchingDay.date1("2018-04-11");
       assert.equal(matchingDay.getDay1() ,'2018-04-11');
  });

});



describe('The weekday Day function', function() {

  it('should display "Monday" if user selected this day "2018-04-09"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-09");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Monday');
  });

  it('should display "Tuesday" if user selected this day "2018-04-10"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-10");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Tuesday');
  });
  it('should display "Wednesday" if user selected this day "2018-04-11"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-11");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Wednesday');
  });
  it('should display "Friday" if user selected this day "2018-04-13', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-20");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Friday');
  });
  it('should display "Saturday" if user selected this day "2018-04-12"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-14");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Saturday');
  });



});
