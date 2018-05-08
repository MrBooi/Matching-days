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

describe('The week Day function', function() {

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

  it('should display "Thursday" if user selected this day "2018-04-05"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-05");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Thursday');
  });
  it('should display "Friday" if user selected this day "2018-04-20"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-20");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Friday');
  });
  it('should display "Saturday" if user selected this day "2018-04-14"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-04-14");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Saturday');
  });
  it('should display "Sunday" if user selected this day "2018-05-06"', function() {
          var matchingDay= MatchingDay();
          matchingDay.date1("2018-05-06");
       assert.equal(matchingDay.getweek(matchingDay.getDay1()) ,'Sunday');
  });

});


describe('The Same Day function', function() {

  it('should display "true" if user selected  same date ', function() {
      var matchingDay= MatchingDay();
      matchingDay.date1("2018-05-09");
      matchingDay.date2('2018-05-09"')
       assert.equal(matchingDay.sameDays(matchingDay.getDay1(),matchingDay.getDay2()) ,true);
  });
  it('should display "false" if user  did not select same date  ', function() {
      var matchingDay= MatchingDay();
      matchingDay.date1("2018-05-11");
        matchingDay.date1("2018-04-11");
       assert.equal(matchingDay.sameDays(matchingDay.getDay1(),matchingDay.getDay2()) ,false);
  });

});
