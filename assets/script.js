// Moment date and time
var today = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var time = moment().format("HH");

console.log(today);
console.log(time);

//display current date
var dateEl = document.getElementById("currentDay");
var currentDay = document.createElement("p");
currentDay.textContent = today;
dateEl.append(currentDay);

//compare time


