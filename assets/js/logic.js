var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var questionTitleH2 = document.querySelector("#question-title");
var choicesDiv = document.querySelector("#choices");
var questionsDiv = document.querySelector("#questions");
var buttons = document.getElementsByTagName("button");  // or querySelector?


// function to start the game
startBtn.addEventListener("click", function () {
    document.getElementById("start-screen").style.display = 'none';
    countdown();
    // to show questions and answers
    questionsDiv.classList.remove('hide');
    showQuestion();
    choices();
    checkAnswer();
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
function showQuestion(event) { 
    for (var i = 0; i < quizQuestions.length; i++) {
        questionTitleH2.textContent = quizQuestions[i].question;
        event.preventDefault() 
    }
};

// function to show answers
function choices(event) {
    for (var j = 0; j < quizQuestions[j].answers.length; j++) {
        var button = document.createElement("button");
        button.textContent = quizQuestions[j].answers;
        choicesDiv.appendChild(button);
        event.preventDefault()
    }
};
choices();


// function to check answers
// function checkAnswer() {
//     for (var i = 0; i < buttons.length; i++) {
//         var correctAnswerIndex = quizQuestions[i].correctAnswerIndex;
//         buttons[i].addEventListener("click", function ()  {
//             if(value == correctAnswerIndex) {
//                 return "correct";
//             } else {
//                 return "wrong";
//             };
//         });
//     };
// };