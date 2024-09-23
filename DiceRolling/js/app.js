// VARIABLES
let result = document.getElementById('result');
// Buttons
let button0 = document.getElementById("button0");

// Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let scoreboardDraw = document.getElementById("scoreboardDraw");
let scoreboardPlayer = document.getElementById("scoreboardPlayer");
let scoreboardAi = document.getElementById("scoreboardAi");

// Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0
let ties = 0
let aiScore = 0;

// PROCESSES (Allt här inne händer när jag trycker på knappen
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForAi();
  showPlayerRollResult();
  showAiRollResult();
  showWinner();
  updateScoreboard()
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

function showWinner() {
  if (playerRoll > aiRoll) {
    result.innerText = "Result: Player wins!";
  } else if (playerRoll < aiRoll) {
    result.innerText = "Result: AI wins!";
  } else {
    result.innerText = "Result: It's a draw!";
  }
}

function updateScoreboard() {
  // Update the scores based on the result of the roll
  if (playerRoll > aiRoll) {
    playerScore++;
  } else if (playerRoll < aiRoll) {
    aiScore++;
  } else {
    ties++;
  }

  // Update the text on the scoreboard
  scoreboardPlayer.innerText = "Player Score: " + playerScore;
  scoreboardAi.innerText = "AI Score: " + aiScore;
  scoreboardDraw.innerText = "Draws: " + ties;
}
