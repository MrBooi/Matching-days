// factory function
function MatchingDay() {
    var dateOne = '';
    var dateTwo = '';
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function setDate1(value) {
      dateOne = value;
      return dateOne;
    }

    function setDate2(value) {
      dateTwo = value;
      return dateTwo;
    }

    function getDate1() {
      return dateOne;
    }

    function getDate2() {
      return dateTwo;
    }


    function sameDay(date1, date2) {
      var pos = new Date(date1).getDay();
      var poss = new Date(date2).getDay();
      if (date1 != undefined && date2 != undefined) {
        return weekday[pos] == weekday[poss];
      }
    }

    function week(value) {
      if (value !==undefined) {
        let pos = new Date(value).getDay();
        return weekday[pos];
      }


    }

    function weekdayLogic (firstDate,secondDate){
      var weekdays = {};
      for (var i = 0; i < weekday.length; i++) {
        var currentPos = weekday[i];
         weekdays[currentPos] = {
          dayId: currentPos,
          dayName: currentPos
        }

        if (currentPos === week(firstDate)) {
          weekdays[currentPos] = Object.assign({
            'first': 'orange'
          }, weekdays[currentPos]);

         if (sameDay(firstDate,secondDate)) {
                 delete weekdays[currentPos].first;
                    weekdays[currentPos] = Object.assign({
                      'sameDay': 'green'
                    }, weekdays[currentPos]);
               }
        }

      else if (currentPos === week(secondDate)) {
            weekdays[currentPos] = Object.assign({
              'second': 'blue'
            }, weekdays[currentPos]);

            if (sameDay(firstDate,secondDate)) {
                    delete weekdays[currentPos].second;
                       weekdays[currentPos] = Object.assign({
                         'sameDay': 'green'
                       }, weekdays[currentPos]);
                  }
        }



}
  return weekdays;
    }

    return {
      date1: setDate1,
      date2: setDate2,
      getDay1: getDate1,
      getDay2: getDate2,
      getweek: week,
      getWeekDays: weekday,
      sameDays: sameDay,
      weekdays :weekdayLogic

    }

  }
