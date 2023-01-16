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