var First_date = document.querySelector('.first');
var Second_date = document.querySelector('.second');
//template
var templateSource = document.querySelector(".MatchingDayTemplate").innerHTML;
var MatchingTemplate = Handlebars.compile(templateSource);
var MatchingDayElem = document.querySelector('.wrapper');

window.addEventListener('load', function() {
   var dateData = {}
  for (let i = 0; i < matchingDays.getWeekDays.length; i++) {
    let current = matchingDays.getWeekDays[i];
    dateData[current] = {
      dayId: matchingDays.getWeekDays[i],
      dayName: matchingDays.getWeekDays[i]
    }
  }
  var dateDataHTML = MatchingTemplate({weekdays:dateData});
  MatchingDayElem.innerHTML = dateDataHTML;
});


var matchingDays = MatchingDay();
First_date.addEventListener("change", function() {
  console.log(First_date.value)
let store= matchingDays.weekdays(First_date.value,Second_date.value);
  MatchingDayElem.innerHTML = MatchingTemplate({weekdays:store});
});


Second_date.addEventListener("change", function() {

  let store= matchingDays.weekdays(First_date.value,Second_date.value);

    console.log({weekdays:store});

 console.log(matchingDays.sameDays(First_date.value,Second_date.value));

    MatchingDayElem.innerHTML = MatchingTemplate({weekdays:store});
});
