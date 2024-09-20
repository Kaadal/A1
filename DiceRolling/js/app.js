// VARIABLES
let result = document.getElementById('result');
// Buttons
let button0 = document.getElementById("button0");

// Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");

// Data
let playerRoll = 0;
let aiRoll = 0;

// PROCESSES
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForAi();
  showPlayerRollResult();
  showAiRollResult();
  showWinner();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomNumberOneToSixForAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
}


// VIEWS
function showPlayerRollResult() {
  playerRollText.innerText = "Player Roll: " + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerText = "AI Roll: " + aiRoll;
}


