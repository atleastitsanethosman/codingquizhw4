// Variables to connect to various DOM Elements
var highScores = document.querySelector(".highScores");
var timeLeft = document.querySelector(".timeLeft");
var startButton = document.querySelector("#start");
var questions = document.querySelector(".questions");
var highScores = document.querySelector(".scores")
var introduction = document.querySelector(".introduction")
var headerIntro = document.querySelector(".headerIntro");



// variable to hold questions and answers
var questionsList = [
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

// variables to refference the current question being asked
var currentQuestion = [0]
var currentChallenge = questionsList[currentQuestion];

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

// gets question data and displays it on screen.
function pickQuestion(){
  headerIntro.textContent = currentChallenge.question;
  // wipe out any previous answers
  questions.innerHTML = "";
  currentChallenge.choices.forEach(function(answer, i) {
    var answerBox = document.createElement("li");
    answerBox.setAttribute("class", "answerBox");
    answerBox.textContent = answer;
    questions.appendChild(answerBox);
    });
  // sets variable to move to next questions in list
  currentQuestion ++;
  }


function startQuiz() {
  // hide intro paragraph and start button.
  introduction.setAttribute("hidden","");
  startButton.setAttribute("hidden","")
  pickQuestion();

}


startButton.addEventListener("click", function(event) {
  event.preventDefault();
  setTime();
  startQuiz();
  });
  