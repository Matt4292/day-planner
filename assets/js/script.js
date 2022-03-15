
var container = $(".container");


var hours = [
  {
    time:"9AM",
    hourNumber:09
  },
  {
    time:"10AM",
    hourNumber:10
  },
  {
    time:"11AM",
    hourNumber:11
  },
  {
    time:"12AM",
    hourNumber:12
  },
  {
    time:"1PM",
    hourNumber:13
  },
  {
    time:"2PM",
    hourNumber:14
  },
  {
    time:"3PM",
    hourNumber:20
  },
  {
    time:"4PM",
    hourNumber:16
  },
  {
    time:"5PM",
    hourNumber:17
  },
  ];




// Displays current day and date in the header
$("#currentDay").text(moment().format("dddd, MMMM Do"));


var currentHour = 0

// Makes row for each hour
hours.forEach(function(hour){

  var hour = currentHour++
  var hrNumber = hours[hour].hourNumber

  //makes the block each hour is built on
  var hourBlock = $("<div>");
  hourBlock.addClass("row");
  container.append(hourBlock);

  //lists the hours on the left side
  var listOfHours = $("<div>");
  listOfHours.addClass("hour col-2");
  hourBlock.append(listOfHours);
  listOfHours.text(hours[hour].time);

  //makes the field to enter info
  var textField = $("<input type='text'>");
  textField.addClass("description col-8");
  hourBlock.append(textField);

  //styles the field depending on time of day
  console.log(moment().hour())
  if (hrNumber<moment().hour()){
    textField.addClass("past");
  } else if (hrNumber>moment().hour()){
    textField.addClass("future");
  } else {
    textField.addClass("present");
  } 

  //makes save button
  var saveBtn = $("<button>");
  saveBtn.addClass("saveBtn col-2");
  hourBlock.append(saveBtn);


});





