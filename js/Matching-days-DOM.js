var First_date = document.querySelector('.first');
var Second_date = document.querySelector('.second');
//template
var templateSource = document.querySelector(".MatchingDayTemplate").innerHTML;
var MatchingTemplate = Handlebars.compile(templateSource);
var MatchingDayElem = document.querySelector('.wrapper');

window.addEventListener('load', function() {
  MatchingDayElem.innerHTML = MatchingTemplate({
    weekdays: matchingDays.weekdays()
    });
});

var matchingDays = MatchingDay();

First_date.addEventListener("change", function() {
  MatchingDayElem.innerHTML = MatchingTemplate({
    weekdays:matchingDays.weekdays(First_date.value,Second_date.value)
  });
});

Second_date.addEventListener("change", function() {
  MatchingDayElem.innerHTML = MatchingTemplate({
    weekdays:matchingDays.weekdays(First_date.value,Second_date.value)
  });
});
