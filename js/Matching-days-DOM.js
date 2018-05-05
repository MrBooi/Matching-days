var First_date = document.querySelector('.first');
var Second_date = document.querySelector('.second');

var templateSource = document.querySelector(".MatchingDayTemplate").innerHTML;
// compile the template
var MatchingTemplate = Handlebars.compile(templateSource);
var MatchingDayElem = document.querySelector('.wrapper');



window.addEventListener('load', function() {
  console.log(matchingDays.getWeekDay)

  var dateData = {}
  for (let i = 0; i < matchingDays.getWeekDay.length; i++) {
    let current = matchingDays.getWeekDay[i];
    console.log(current);
    dateData[current] = {
      dayId: matchingDays.getWeekDay[i],
      dayName: matchingDays.getWeekDay[i],
      first: false,
      second: false
    }
  }
  var dateDataHTML = MatchingTemplate({weekdays:dateData});
  MatchingDayElem.innerHTML = dateDataHTML;
});






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
    if (date1 != '' && date2 != '') {
      return weekday[pos] == weekday[poss];
    }
  }

  function week(value) {
    let pos = new Date(value).getDay();
    return weekday[pos];
  }


  return {
    date1: setDate1,
    date2: setDate2,
    getDay1: getDate1,
    getDay2: getDate2,
    getweek: week,
    getWeekDay: weekday,
    sameDays: sameDay
  }

}

var matchingDays = MatchingDay();

First_date.addEventListener("change", function() {
  var day1 = document.querySelectorAll('.box');
  let fdate = matchingDays.date1(First_date.value)
  var firstDate = matchingDays.getweek(fdate);
  var getsecond = matchingDays.getDay2();

  var weekdays = {};

  for (var i = 0; i < day1.length; i++) {
    let currentPos = day1[i].innerHTML;
     weekdays[currentPos] = {
      dayId: currentPos,
      dayName: currentPos
    }
    if (currentPos === firstDate) {
      day1[i].classList.add("orange");
      weekdays[currentPos] = Object.assign({
        'first': 'orange'
      }, weekdays[currentPos]);

      if (matchingDays.sameDays(matchingDays.date1(First_date.value), matchingDays.getDay2())) {
      
      }
    }
  }
  var dateData = {
    weekdays
  }
  MatchingDayElem.innerHTML = MatchingTemplate(dateData);
});


Second_date.addEventListener("change", function() {
  var day2 = document.querySelectorAll('.box');
  for (var i = 0; i < day2.length; i++) {
    day2[i].classList.remove("blue", "green");
    if (day2[i].innerHTML == matchingDays.getweek(Second_date.value)) {
      day2[i].classList.add("blue");
      if (matchingDays.sameDays(matchingDays.getDay1(), matchingDays.date2(Second_date.value))) {
        day2[i].classList.remove("blue", "orange");
        day2[i].classList.add("green");
      }
    }

  }
});
