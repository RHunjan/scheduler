var hoursArray = [09,10,11,12,13,14,19,20,21];

// Moment date and time
var today = moment().format("dddd, MMMM Do YYYY, h:mma");
var time = moment().format("HH");

console.log(today);
console.log(time);

//display current date
$("#currentDay").text(today);



// save textarea input

var nineAM = $("#9").val(localStorage.getItem("nineAM"));
var tenAM = $("#10").val(localStorage.getItem("tenAM"));
var elevenAM = $("#11").val(localStorage.getItem("elevenAM"));
var twelvePM = $("#12").val(localStorage.getItem("twelvePM"));
var onePM = $("#1").val(localStorage.getItem("onePM"));
var twoPM = $("#2").val(localStorage.getItem("twoPM"));
var threePM = $("#3").val(localStorage.getItem("threePM"));
var fourPM = $("#4").val(localStorage.getItem("fourPM"));
var fivePM = $("#5").val(localStorage.getItem("fivePM"));

// set save buttons

//9am

$("#nine").click(function(){
    nineAM = $("#9").val();
    localStorage.setItem('nineAM', nineAM);
    var savedTask =localStorage.getItem("nineAM");
    $("#9").val(savedTask);

});

//10am

$("#ten").click(function(){
    tenAM = $("#10").val();
    localStorage.setItem('tenAM', tenAM);
    var savedTask =localStorage.getItem("tenAM");
    $("#10").val(savedTask);

});

//11am

$("#eleven").click(function(){
    elevenAM = $("#11").val();
    localStorage.setItem('elevenAM', elevenAM);
    var savedTask =localStorage.getItem("elevenAM");
    $("#11").val(savedTask);

});

//12pm

$("#twelve").click(function(){
    twelvePM = $("#12").val();
    localStorage.setItem('twelvePM', twelvePM);
    var savedTask =localStorage.getItem("twelvePM");
    $("#12").val(savedTask);

});

//1pm

$("#one").click(function(){
    onePM = $("#1").val();
    localStorage.setItem('onePM', onePM);
    var savedTask =localStorage.getItem("onePM");
    $("#1").val(savedTask);

});

//2pm

$("#two").click(function(){
    twoPM = $("#2").val();
    localStorage.setItem('twoPM', twoPM);
    var savedTask =localStorage.getItem("twoPM");
    $("#2").val(savedTask);

});

//3pm

$("#three").click(function(){
    threePM = $("#3").val();
    localStorage.setItem('threePM', threePM);
    var savedTask =localStorage.getItem("threePM");
    $("#3").val(savedTask);

});

//4pm

$("#four").click(function(){
    fourPM = $("#4").val();
    localStorage.setItem('fourPM', fourPM);
    var savedTask =localStorage.getItem("fourPM");
    $("#4").val(savedTask);

});

//5pm

$("#five").click(function(){
    fivePM = $("#5").val();
    localStorage.setItem('fivePM', fivePM);
    var savedTask =localStorage.getItem("fivePM");
    $("#5").val(savedTask);

});

//compare hour with current time and change color of textarea

var timeColor = function(){
    console.log("running function");
    for (var i = 0; i <hoursArray.length; i++){
        if (time < hoursArray[i]){
           $("#" + hoursArray[i]).addClass("future");
      } else if (time == hoursArray[i]){
            $("#" + hoursArray[i]).addClass("present");
      } else {
              console.log(time);
            console.log(hoursArray[i]);
      $("#" + hoursArray[i]).addClass("past");
 }
}
};

setInterval(timeColor, (1000*5));