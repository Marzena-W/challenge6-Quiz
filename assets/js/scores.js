var clearBtn = document.querySelector("#clear");
var highScoresOl = document.querySelector("#highscores");

var li = document.createElement("li");
highScoresOl.appendChild(li);

var initials = localStorage.getItem("initials");
var finalScore = localStorage.getItem("storedSecondsLeft")


li.textContent = initials + " - " + finalScore;


// function to "Clear Highscores" 
clearBtn.addEventListener("click", clearAll);
function clearAll() {
    localStorage.clear();
    li.style.display = 'none';
}







// var scores = []; 

// init();


// function renderScores () {
//     highScoresOl.innerHTML = "";
//     for (var i =0; i < scores.length; i++) {
//         var scores = scores[i];
//         var li = document.createElement("li");
//         li.textContent = initials + " - " + finalScore;
//         li.setAttribute("data-index", i);

//         highScoresOl.appendChild(li);
//     }
// }

// function init() {
//     var storedScores = JSON.parse(localStorage.getItem("scores"));

//     if(storedScores !== null) {
//         scores = storedScores;
//     }
//     renderScores();
// }

// function storeScores() {

// }




