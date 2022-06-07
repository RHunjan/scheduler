var hoursArray = [09,10,11,12,13,14,15,16,17];

// Moment date and time
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var time = moment().format("HH");

console.log(today);
console.log(time);

//display current date
$("#currentDay").text(today);

//compare hour with current time

var checkTime = function (){
 console.log(hoursArray[0]);
 console.log(time);
 if (time < hoursArray[0]){
    $("#" + hoursArray[0]).addClass("future");
 } else if (time == hoursArray[0]){
     $("#" + hoursArray[0]).addClass("present");
 } else {
      $("#" + hoursArray[0]).addClass("past");
 }
};

checkTime();