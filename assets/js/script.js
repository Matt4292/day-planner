var container = $(".container");
var hours = [
  {
    time:"9AM",
    hourNumber:09,
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
    hourNumber:15
  },
  {
    time:"4PM",
    hourNumber:16
  },
  {
    time:"5PM",
    hourNumber:17
  }
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
  var listOfHours = $("<label>");
  listOfHours.addClass("hour col-2");
  hourBlock.append(listOfHours);
  listOfHours.text(hours[hour].time);

  //makes the field to enter info
  var textField = $("<input type='text' value='test'>");
  textField.addClass("description col-8");
  hourBlock.append(textField);

  // loads any data in local storage as default text
  textField.attr("id", hrNumber);
  textField.attr("value", localStorage.getItem(hour))

  //styles the field depending on time of day
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
  saveBtn.addClass("far fa-save");
  hourBlock.append(saveBtn);
});


// saves input field text to local storage
$(".saveBtn").on("click", function(event) {
  event.preventDefault();
  var input9 = document.getElementById("9");
  var input10 = document.getElementById("10");
  var input11 = document.getElementById("11");
  var input12 = document.getElementById("12");
  var input1 = document.getElementById("13");
  var input2 = document.getElementById("14");
  var input3 = document.getElementById("15");
  var input4 = document.getElementById("16");
  var input5 = document.getElementById("17");
  localStorage.setItem("0", input9.value)
  localStorage.setItem("1", input10.value)
  localStorage.setItem("2", input11.value)
  localStorage.setItem("3", input12.value)
  localStorage.setItem("4", input1.value)
  localStorage.setItem("5", input2.value)
  localStorage.setItem("6", input3.value)
  localStorage.setItem("7", input4.value)
  localStorage.setItem("8", input5.value)
});