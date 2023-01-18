var clearBtn = document.querySelector("#clear");
var highScoresOl = document.querySelector("#highscores");
var li = document.createElement("li");

var initials = localStorage.getItem("initials");
var finalScore = localStorage.getItem("storedSecondsLeft")


function scoreList() {  
    highScoresOl.appendChild(li);
    li.textContent = initials + " - " + finalScore;
};
scoreList();


// function to "Clear Highscores" 
clearBtn.addEventListener("click", clearAll);
function clearAll() {
    localStorage.clear();
    li.style.display = 'none';
};