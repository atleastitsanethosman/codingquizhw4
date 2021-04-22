// Variables to connect to various DOM Elements
var highScores = document.querySelector(".highScores");
var timeLeft = document.querySelector(".timeLeft");
var startButton = document.querySelector("#start");
var questions = document.querySelector(".questions");
var highScores = document.querySelector(".scores")
var introduction = document.querySelector(".introduction")
var headerIntro = document.querySelector(".headerIntro");

var currentQuestion = [0]

// variable to hold questions and answers
var questions = [
  {
    question: "What does CSS stand for?",
    choices: [ "Cascading Style Sheets","Current Style Sheets","Cascading Sheet Style","Current Sheet Style"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Commonly Used data types DO NOT include:",
    choices: ["strings", "prompts", "booleans", "numbers"],
    answer: "prompts"
},
{
    question: "The condition in an if / else statment is enclosed within _____.",
    choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
    answer: "parentheses"
},
{
    question: "The condition in an if / else statment is enclosed within _____.",
    choices: ["parentheses", "single quotes", "curly brackets", "square brackets"],
    answer: "parentheses"
},
{
    question: "How can we use Javascript to select an html element?",
    choices: ["document.queryselector()", "document.getElementChild", "document.getElementById", "Options 1 and 3"],
    answer: "Options 1 and 3"
},
{
    question: "What is an API?",
    choices: ["Application Programming Interface", "Application Programming Interaction", "Available Programming Interface", "Automatic Programming Interface"],
    answer: "Application Programming Interface"
},
]

// variable to refference the current question being asked
var currentChallenge = questions[currentQuestion];

// function to complete game, need to build out
function gameOver() {
    console.log("game over");
}



// create timer for completing quiz.
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
      gameOver();
    }

  }, 1000);
}

function pickQuestion(){

}


function startQuiz() {
  // hide intro paragraph.
  introduction.setAttribute("hidden","");
  headerIntro.textContent = currentChallenge.question;


}


startButton.addEventListener("click", function(event) {
  event.preventDefault();
  setTime();
  startQuiz();
  });
  