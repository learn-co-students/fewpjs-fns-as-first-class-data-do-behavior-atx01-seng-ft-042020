/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  const timeParsed = parseInt(timeString.split(':').join(''));
  if (timeParsed < 1200) {
    return "Good Morning";
  } else if (timeParsed < 1700) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function displayMessage(message) {
  document.querySelector('#greeting').innerText = message;
}
