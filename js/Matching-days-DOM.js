var First_date = document.querySelector('.first');
var Second_date = document.querySelector('.Second');

  function MatchingDay(){
    var dateOne =0;
    var dateTwo = 0;
    const weekday = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function setDate1(value){
       dateOne = value;
    }

    function setDate2(value){
      dateTwo = value;
    }

    function getDate1(){
      return dateOne;
    }

    function getDate2(){
      return dateTwo;
    }

    function sameDay(date,date1){
      var pos= new Date(date).getDay();
      var poss = new Date(date1).getDay();
      return weekday[pos]==weekday[poss];
    }

    function week(value){
   let pos = new Date(value).getDay();
   return  weekday[pos];
    }


  return{

    date1:setDate1,
    date2: setDate2,
    getday1:getDate1,
    getDay2:getDate1,
    getweek : week
  }

  }

       var matchingDays = MatchingDay();

      First_date.addEventListener("change", function() {
          var day1 = document.querySelectorAll('.box');

        for (var i = 0; i < day1.length; i++) {
            day1[i].classList.remove("orange");
          if (day1[i].innerHTML == matchingDays.getweek(First_date.value)) {
            day1[i].classList.add("orange");
          }
       }

      });


 Second_date.addEventListener("change", function() {
   matchingDays.date2(Second_date.value);
});
