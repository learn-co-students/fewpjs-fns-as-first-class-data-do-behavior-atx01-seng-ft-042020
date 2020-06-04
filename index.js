/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  let timeSplit = time.split(":");
  let timeFull = parseInt((timeSplit[0] + timeSplit[1]), 10);

  if (timeFull < 1200){
    return "Good Morning";
  } else if (timeFull > 1200 && timeFull < 1700){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  };

};
/* Write your implementation of displayMessage() */

function displayMessage(message){
  document.getElementById("greeting").innerText = message;
};
