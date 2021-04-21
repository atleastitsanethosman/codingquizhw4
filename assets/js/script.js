var highScores = document.querySelector(".highScores");
var timeLeft = document.querySelector(".timeLeft");
var startButton = document.querySelector("#start");

// function to complete game, need to build out
function gameOver() {
    console.log("game over");
}

// create timer for completing quiz.
var secondsLeft = 60;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      
      gameOver();
    }

  }, 1000);
}

startButton.addEventListener("click", function(event) {
  event.preventDefault();
  setTime();
  });
  