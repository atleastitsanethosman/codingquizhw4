// Variables to connect to various DOM Elements
var highScores = document.querySelector(".highScores");
var timeLeft = document.querySelector(".timeLeft");
var startButton = document.querySelector("#start");
var questions = document.querySelector(".questions");
var feedback = document.querySelector(".feedback");
var introduction = document.querySelector(".introduction");
var headerIntro = document.querySelector(".headerIntro");
var submitScore = document.querySelector("#submitScore");
var submitButton = document.querySelector("#submit-button");
var initialsBox = document.querySelector("#initials");
var homeButton = document.querySelector("#homescreen");
var listScores = document.querySelector(".listScores");

var score = 0

// variable to hold questions and answers
var questionsList = [
  {
    question: "What does javascript let the user do?",
    choices: [ "break the internet","hack the matrix","interact with the webpage","cage the elephant"],
    answer: "interact with the webpage"
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
    question: "Who Created Javascript?",
    choices: ["Microsoft", "Sun Microsystems", "Oracle", "Netscape"],
    answer: "Netscape"
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
var currentQuestion = 0;
var currentChallenge = questionsList[currentQuestion];

// variable to note if game is over to check in functions
var gameEnded = false

// function to complete game, need to build out
function gameOver() {
    gameEnded = true;
    questions.innerHTML = "";
    timeLeft.setAttribute("class", "hide")
    homeButton.setAttribute("class", "show")
    if (score > 0) {
      score += secondsLeft
      }  else score = 0;
    headerIntro.textContent = "Your score was " + score;
    submitScore.setAttribute("class", "show");
}

// add event listener and function for submitting scores.
submitButton.addEventListener("click", function(event){
  event.preventDefault();
  
  // variable to record current score list.
  var currentScore = {
    finalScore: score,
    playerInitials: initialsBox.value.trim()
  };
  
  // make variable for score list by either checking to see if there is an array or making an empty one.
  var allScores = [];
  var allScores = JSON.parse(window.localStorage.getItem("scoresList")) || [];
  
  // append current score to array.
  allScores.push(currentScore);
  
  // send scores and initials to local storage.
  localStorage.setItem("scoresList", JSON.stringify(allScores));
  location.reload();
});


// create timer for completing quiz.
var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
      gameOver();
    } else if (gameEnded == true) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

// gets question data and displays it on screen.
function pickQuestion(){
  // check if user has reached end of questions.
  if (currentQuestion + 1 > questionsList.length) {
      gameOver();
  } else {
  headerIntro.textContent = questionsList[currentQuestion].question;
  // wipe out any previous answers
  questions.innerHTML = "";
  // create list item for each possible answer.
  questionsList[currentQuestion].choices.forEach(function(answer, i) {
    var answerBox = document.createElement("li");
    answerBox.setAttribute("class", "answerBox");
    answerBox.textContent = answer;
    questions.appendChild(answerBox);
    });
  }
}
// flash feedback for half second then up variable and move to next questions in list
function response(){
  setTimeout(function() {
    feedback.firstChild.textContent = "";
    // currentQuestion ++;
    console.log(score)
    console.log(currentQuestion)
  }, 500);
};

// event listener with function to check answer.
questions.addEventListener("click", function(event) {
    var selection = event.target.textContent;
    if (selection == questionsList[currentQuestion].answer) {
      feedback.firstChild.textContent = "correct!"
      score += 10;
      currentQuestion ++;
      response();
      pickQuestion();
    }  else {
        feedback.firstChild.textContent = "incorrect!"
        if (secondsLeft <= 10) {
          response();
          secondsLeft = 0;
          gameOver();
        } else {
          secondsLeft -= 10;
          response();
          currentQuestion ++;
          pickQuestion();
        }
    }
});



// function to start the various functions that run during quiz.
function startQuiz() {
  // hide intro paragraph and start button.
  introduction.setAttribute("hidden","");
  startButton.setAttribute("hidden","");
  highScores.setAttribute("hidden","")
  pickQuestion();

}

// add event listener for homescreen button
homeButton.addEventListener("click", function(event){
  event.preventDefault();
  location.reload();
});

// add event listener for View Scores button to build score list
highScores.addEventListener("click", function(event){
  event.preventDefault();
  introduction.setAttribute("hidden","");
  startButton.setAttribute("hidden","");
  highScores.setAttribute("hidden","")
  headerIntro.textContent = "List of Previous Scores"
  homeButton.setAttribute("class", "show")
  var scoreBoard = JSON.parse(window.localStorage.getItem("scoresList"));
  console.log(scoreBoard.playerInitials);
  for (let i =0; i < scoreBoard.length; i++) {
        var scoreLine = document.createElement("li");
        scoreLine.setAttribute("class","scoreLine")
        scoreLine.textContent = scoreBoard[i].playerInitials + " had a score of: " + scoreBoard[i].finalScore;
        listScores.appendChild(scoreLine);
  };
  
});

// add event listener for buttom to start quiz.
startButton.addEventListener("click", function(event) {
  event.preventDefault();
  timeLeft.setAttribute("class", "show")
  setTime();
  startQuiz();
  });
  