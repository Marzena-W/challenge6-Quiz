var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionTitleH2 = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var wrapper = document.querySelector(".wrapper");
var questionsDiv = document.querySelector("#questions");


// function to start the game
startBtn.addEventListener("click", function () {
    document.getElementById("start-screen").style.display = 'none';
    countdown();
    questionsDiv.classList.remove('hide');
    showQuestion();
        
});
console.log(questionsDiv.classList);


// function to start timer 90 sec
function countdown() {
    var secondsLeft = 5;
    var timerCount = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        // when timer is 0 or below 0, it's end of the game
        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerCount);
            // calls function to show page with final score 
            // scorePage();  
        };
    }, 1000);
};

// function to show a questions
function showQuestion() {
    for (var i = 0; i < quizQuestions.length; i++) {
    questionTitleH2.textContent = quizQuestions[i].question;
    console.log("question", quizQuestions[i].question);
    }
};