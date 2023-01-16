var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionTitleH2 = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var questionsDiv = document.querySelector("#questions");
var buttons = document.getElementsByTagName("button");
var endScreenEl = document.querySelector("#end-screen");

var questionIndex = 0

var endScreenEl = document.querySelector("#end-screen");
var finalScoreP = document.querySelector("#final-score");
var initialsInput = document.querySelector("#initials")
var submitBtn = document.querySelector("#submit");
var remainingSeconds;



startBtn.addEventListener("click", startQuiz)

// function to start the game
function startQuiz() {
    document.getElementById("start-screen").style.display = 'none';
    countdown();
    // to show questions and answers
    questionsDiv.classList.remove('hide');
    showQuestion();
};

// function to start the time
function countdown() {
    secondsLeft = 75;
    var timerCount = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        // when timer is 0 or below 0, it's end of the game
        if (secondsLeft === 0 || secondsLeft < 0) {
            clearInterval(timerCount);
            questionsDiv.style.display = 'none';
            allDone();
        } else if (questionIndex === 5 && secondsLeft > 0) {
            // to stop showing questions when time is up
            clearInterval(timerCount);
            questionsDiv.style.display = 'none';
            allDone();
        };
    }, 1000);
    remainingSeconds = secondsLeft;
};

// function to show a questions
function showQuestion() {
    questionTitleH2.textContent = quizQuestions[questionIndex].question;
    choices();
};

// function to show answers
function choices() {
    choicesDiv.textContent = " "
    for (var j = 0; j < quizQuestions[questionIndex].answers.length; j++) {
        var button = document.createElement("button");
        button.textContent = quizQuestions[questionIndex].answers[j];
        choicesDiv.appendChild(button);
    }
    // creates p tag to show message(correct or wrong) after choosing an answer
    var answerMessage = document.createElement("p");
    answerMessage.setAttribute("id", "message");
    choicesDiv.appendChild(answerMessage);
    checkAnswer();
};

// function to check answers
function checkAnswer() {
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        var correctAnswerIndex = quizQuestions[questionIndex].correctAnswerIndex;

        buttons[i].addEventListener("click", function () {
            var answer = this.textContent
            if (answer === correctAnswerIndex) {
                document.querySelector("#message").textContent = "correct";
                document.querySelector("#message").style.color = "green";
            } else if (answer != correctAnswerIndex) {
                secondsLeft = secondsLeft - 15;
                document.querySelector("#message").textContent = "wrong";
                document.querySelector("#message").style.color = "red";
            };
            questionIndex++;
            // delay to show answer before showing next question
            setTimeout(showQuestion, 500);
        });
    };
};

// function on click of a button "submit" score and to add initials
function allDone() {
    endScreenEl.classList.remove('hide');  // to remove class from end-screen
    finalScoreP.textContent = secondsLeft;
    // score sent to a local storage
    localStorage.setItem("storedSecondsLeft", secondsLeft);
};


// when button clicked
submitBtn.addEventListener("click", function () {
    // initials sent tot local storage
    var initials = initialsInput.value;
    localStorage.setItem("initials", initials);
    window.location.href = "highscores.html";
});