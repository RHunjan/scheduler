var hoursArray = [9,10,11,12,13,14,15,16,17];

// Moment date and time
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var time = moment().format("HH");

console.log(today);
console.log(time);

//display current date
$("#currentDay").text(today);

//compare hour with current time

var timeColor = function(){

    for (var i = 0; i <hoursArray.length; i++){
        if (time < hoursArray[i]){
            $("#" + hoursArray[i]).addClass("future");
      } else if (time == hoursArray[i]){
            $("#" + hoursArray[i]).addClass("present");
      } else {
      $("#" + hoursArray[i]).addClass("past");
 }
}
};

setInterval(timeColor, (1000*60));