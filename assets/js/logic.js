var timeEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");
var secondsLeft = 6;


// function to start the game
startBtn.addEventListener("click", function() {
    countdown();
});


// function to start timer 90 sec
function countdown() {
    var timetimeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        // when timer goes to or below 0 end of game
        if(secondsLeft === 0 || secondsLeft < 0) {
        clearInterval(timetimeInterval);
        //calls function to show page with final score 
        scorePage();
        }
    }, 1000);
}
// countdown();




// function to show a question (for loop) 
    // button changes from blue to pink when hover over (pointer)

// function startGame() {
//     for (i = 0; i < quizQuestions.length; i++) {
//         quizQuestions[i].question;
//     }
// }

// function to check answer
    // function to deduct 15sec if answer is wrong
    // show below the answers if function is "wrong" or "correct"


// function scorePage
    // show final score
    // add initials
    // submit to local storage

// high scores page
    // shows all scores saved to local storage
    // go back function
    // clear score function

// go back function

// clear score function


// startGame()