
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
loadGame();
updateScoreboard();
button0.addEventListener("click", function () {
  getRandomNumberOneToSixForPlayer();
  getRandomNumberOneToSixForAi();
  showPlayerRollResult();
  showAiRollResult();
  evaluate();
  updateScoreboard();
  saveGame();
});

// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  playerRoll = Math.floor(Math.random() * 6) + 1;
}

function getRandomNumberOneToSixForAi() {
  aiRoll = Math.floor(Math.random() * 6) + 1;
}

function evaluate() {
  if (playerRoll > aiRoll) {
    playerScore++;
    result.innerText = "Result: Player wins!";
  } else if (playerRoll < aiRoll) {
    aiScore++;
    result.innerText = "Result: AI wins!";
  } else {
    ties++;
    result.innerText = "Result: It's a draw!";
  }
}

// VIEWS
function showPlayerRollResult() {
  playerRollText.innerText = "Player Roll: " + playerRoll;
}

function showAiRollResult() {
  aiRollText.innerText = "AI Roll: " + aiRoll;
}



function updateScoreboard() {
  scoreboardPlayer.innerText = "Player Score: " + playerScore;
  scoreboardAi.innerText = "AI Score: " + aiScore;
  scoreboardDraw.innerText = "Draws: " + ties;
}

function saveGame() {
// Game saved into 2 cookies
  document.cookie = "playerScore=" + playerScore + ";expires=Thu, 01 Jan 2055 12:00:00 GMT";
  document.cookie = "aiScore=" + aiScore + ";expires=Thu, 01 Jan 2055 12:00:00 GMT";
  document.cookie = "ties=" + ties + ";expires=Thu, 01 Jan 2055 12:00:00 GMT";
}

function loadGame(){
  // Game loaded from 2 cookies
  playerScore = getCookie("playerScore");
  aiScore = getCookie("aiScore");
  ties = getCookie("ties");
  // showScore
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
