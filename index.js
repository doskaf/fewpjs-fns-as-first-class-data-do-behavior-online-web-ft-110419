/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let time = parseInt(string);
  let hour = string.split(':')[0];
  if (hour > 0 && hour < 12)
<<<<<<< HEAD
    return "Good Morning";
=======
    return "Good Morning.";
>>>>>>> 397ea82b2c9564ce42348019151a763e2a0a9d0e
  else if (hour > 11 && hour < 18)
    return "Good Afternoon";
  else
    return "Good Evening";
}

<<<<<<< HEAD
function displayMessage(greeting) {
  document.getElementById("greeting").innerText = greeting;
}
=======
/* Write your implementation of displayMessage() */
>>>>>>> 397ea82b2c9564ce42348019151a763e2a0a9d0e
