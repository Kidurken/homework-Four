// variables
var startBtn = document.querySelector("#startButton");
var currentQuestion = 0;
var correctQuestion = 0;
var ansBtn = document.getElementsByClassName("ans");
var timeEl = document.querySelector(".time");
var secondsLeft = 45;
var playerScore = 0;
var correct = new Audio('assets/sfx/correct.wav');
var wrong = new Audio('assets/sfx/wrong.wav');
var incorrectQuestion;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      gotoEndScreen();
    }
  }, 1000);
}

// questions
var questions = [
    {
        Q: "which of the fallowing is a commonly used data type:",
        choices: ["strings","yarn","rope","chains"],
        A: "strings"
    },
    {
        Q: "The condition in an if / else statement is enclosed within ____.",
        choices: ["parentheses", "quotes", "curly brackets", "square brackets"],
        A: "parentheses"
    },
    {
        Q: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        A: "all of the above"
    },
    {
        Q: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "quotes", "curly brackets", "parentheses"],
        A: "quotes"
    },
    {
        Q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "console.log", "for loops"],
        A: "console.log"
    },
]

function startQuiz() {
  var startEl = document.getElementById("start");
  startEl.style.display = "none";

  var questionEl = document.getElementById("quiz");
  questionEl.style.display = "inline";

  setTime();

  displayQuestion(currentQuestion);
};

function displayQuestion(question) {
  
  if (question > 4) {
    gotoEndScreen()
  }else{
    document.getElementById("questionTitle").innerHTML = questions[question].Q;

    for(let i=0; i<4; i++){
      document.getElementById("ans" + i.toString()).innerHTML = questions[question].choices[i];
        if(questions[question].choices[i] = questions[question].A){
          correctQuestion = i;
          ansBtn[correctQuestion].addEventListener("click", gainPoint);
        }else {
          ansBtn[i].addEventListener("click", noPoint);
        }
    }
  }
};

function gotoEndScreen() {
  var questionEl = document.getElementById("quiz");
  questionEl.style.display = "none";
  var endScreenEl = document.getElementById("endScreen")
  endScreenEl.style.display = "inline";
};

function nextQuestion() {
  currentQuestion++;
  displayQuestion(currentQuestion);
};

startBtn.addEventListener("click", startQuiz);

for (let i = 0; i < ansBtn.length; i++) {
  ansBtn[i].addEventListener("click", nextQuestion);
};

function gainPoint() {
  playerScore++;
  correct.play();
};

function noPoint() {
  wrong.play();
}