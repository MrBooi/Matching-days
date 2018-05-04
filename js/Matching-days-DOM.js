var First_date = document.querySelector('.first');
var Second_date = document.querySelector('.second');

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
    return dateTwo ;
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
    if(date1 !='' && date2 !=''){
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
    sameDays: sameDay
  }

}

 var matchingDays = MatchingDay();

 First_date.addEventListener("change", function() {
  var day1 = document.querySelectorAll('.box');
  for (var i = 0; i < day1.length; i++) {
    day1[i].classList.remove("orange","green");
    if (day1[i].innerHTML == matchingDays.getweek(First_date.value)) {
      day1[i].classList.add("orange");
      if (matchingDays.sameDays(matchingDays.date1(First_date.value),matchingDays.getDay2())) {
         day1[i].classList.remove("orange" ,"blue");
         day1[i].classList.add("green");
     }
    }
  }
});


  Second_date.addEventListener("change", function(){
  var day2 = document.querySelectorAll('.box');
  for (var i = 0; i < day2.length; i++) {
    day2[i].classList.remove("blue", "green");
    if (day2[i].innerHTML == matchingDays.getweek(Second_date.value)) {
      day2[i].classList.add("blue");

      if (matchingDays.sameDays(matchingDays.getDay1(),matchingDays.date2(Second_date.value))) {
           day2[i].classList.remove("blue" ,"orange");
           day2[i].classList.add("green");
     }
   }

  }
});
