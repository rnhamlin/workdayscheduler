var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

var containerEl = document.querySelector(".container");
var todaysDate = document.querySelector("#currentDay");
todaysDate.textContent = new Date().toLocaleString("en-US", {
  day: "numeric",
  weekday: "long",
  month: "long",
});
var currentHour = new Date().getHours()
console.log(currentHour)

// For Loop is making the chart to organize time/user input/button.
//Tell Javascipt to change the hour according to the actual hour user opens the page during.
//Tell it to render the text the user inputs on the screen/in the text area they typed in. Because it's when it's rendered that we need the command to be read from local storage. Local storage only gets info when a button is clicked (w/ user input)
for (var i = 0; i < hours.length; i++) {
  var rowEl = document.createElement("div");
  rowEl.classList.add("time-block", "row");
  rowEl.innerHTML = `<div class="col-md-1 hour">${getTime(hours[i])}</div>
    <textarea class="col-md-10 description ${getClass(hours[i])}">${
      localStorage.getItem(hours[i]) || ""
    }</textarea>
    <button class="col-md-1 saveBtn btn" id="${hours[i]}">
      <i class="fas fa-save"></i>
    </button>`;
  containerEl.append(rowEl);
}
// Retrieves the time and displays it in the chart the way we want to view it.
function getTime(hour) {
  switch (hour) {
    case "09":
      return "9 AM";
    case "10":
      return "10 AM";
    case "11":
      return "11 AM";
    case "12":
      return "12 PM";
    case "13":
      return "1 PM";
    case "14":
      return "2 PM";
    case "15":
      return "3 PM";
    case "16":
      return "4 PM";
    case "17":
      return "5 PM";
  }
}

// Compares rows' hours to the current hour, and then returns the class name (this color-codes according to past/present/future).
function getClass(rowHour){
    if (rowHour < currentHour) return 'past'
    else if (rowHour == currentHour) return 'present'
    else return 'future'
}
// generates an array of 9 buttons
var buttons = document.querySelectorAll(".saveBtn");
buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    var hourUserInput = e.currentTarget.id;
    var text = e.currentTarget.previousElementSibling.value;
    localStorage.setItem(hourUserInput, text);
  });
});
