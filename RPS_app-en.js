var player1;
var player2;
var numberp1;
var numberp2;
var namep1;
var namep2 = "Jerry";
var nbplayers;
var scorep1 = 0;
var scorep2 = 0;
var random;

//useless text for presentation
function uselessStars() {
  console.log(
    "********************************************************************************"
  );
  console.log(
    "********************************************************************************"
  );
  console.log(
    "********************************************************************************"
  );
  console.log(
    "********************************************************************************"
  );
  console.log(
    "********************************************************************************"
  );
  console.log(
    "********************************************************************************"
  );
}
function welcomeMSG() {
  uselessStars();
  console.log(
    "                   WELCOME TO A GAME OF ROCK PAPER SCISSORS                   "
  );
  uselessStars();
}
function exitForReal() {
  //dumy entry to force the terminal to stop and not close 
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Press ENTRER", function saveInput() {
    rl.close();
  });
}
function gameRules(player1, player2) {

  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    console.log(
      "                          Congrats " +
      namep1 +
      "! Tu as gagner                      "
    );
    //up the score by one for the scoreboard
    scorep1 += 1;
    playAgain();
  } else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissors" && player1 === "paper")
  ) {
    console.log(
      "                        Congrats " +
      namep2 +
      "! Tu as gagner                        "
    );
    scorep2 += 1;
    playAgain();
  } else if (
    (player1 === "rock" && player2 === "rock") ||
    (player1 === "paper" && player2 === "paper") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    console.log("Egaliter");
    playAgain(namep1, namep2);
  }
}
function associateMove(numberp1, numberp2) {
  switch (numberp1) {
    case 1:
      player1 = "paper";
      break;
    case 2:
      player1 = "rock";
      break;
    case 3:
      player1 = "scissors";
      break;
    default:
      console.log(player1 + " wrong input");
  }
  switch (numberp2) {
    case 1:
      player2 = "paper";
      break;
    case 2:
      player2 = "rock";
      break;
    case 3:
      player2 = "scissors";
      break;
    default:
      console.log(player2 + " wrong input");
  }
  console.log(player1 + " vs " + player2);
  gameRules(player1, player2);
}
function randomBotmove() {
  const crypto = require('crypto');
  const random = crypto.randomInt(1, 4); // Generate a random number between 0 and 2
  return random;
}
const Gameprompt = require("password-prompt");
async function Game() {
  //using a password prompt to hide the imput 
  numberp1 = await Gameprompt(
    namep1 + ": press 1 for paper, 2 for rocks, 3 for scissors: ",
    {
      method: "hide",
    }
  );
  numberp2 = await Gameprompt(' and now ' + namep2 + ': ', {
    method: 'hide'
  });

  associateMove(parseInt(numberp1), parseInt(numberp2));
}
const Botgameprompt = require("password-prompt");
async function GameVersusbot() {
  numberp1 = await Botgameprompt(
    namep1 + ": press 1 for paper, 2 for rocks, 3 for scissors: ",
    {
      method: "hide",
    }
  );

  associateMove(parseInt(numberp1), numberp2);
}
function lunchTwoplayergame() {
  const readline = require("readline")
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("player 1: write your name ", function saveInput(name1) {
    rl.question("and now for player 2: ", function saveInput(name2) {
      rl.close();
      namep1 = name1;
      namep2 = name2;

      uselessStars();
      console.log("                                 Good luck                                  ");
      uselessStars();
      Game();
    });
  });
}
function lunchBotgame() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("player 1: write your name ", function saveInput(name1) {
    rl.close();
    namep1 = name1;
    numberp2 = randomBotmove();
    uselessStars();
    console.log(
      "                                 GOOD LUCK                                 "
    );
    uselessStars();
    GameVersusbot();
  });
}
function numberofGames() {

  const readline = require("readline");
  const rl0 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl0.question("Would you like to play alone or with someone: PRESS 1 or 2", function saveInput(nbplayers) {
    nbplayers = parseInt(nbplayers);
    rl0.close();

    //decide if we play alone or against a someone
    if (nbplayers === 1) {
      lunchBotgame();
    } else if (nbplayers === 2) {
      lunchTwoplayergame();
    }
  });
}

function playAgain() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Shall we play again ? Y - N ", function saveInput(staygo) {
    rl.close();
    if (staygo.toLowerCase() === "o") {
      numberp2 = randomBotmove();
      Game();
    } else if (staygo.toLowerCase() === "n") {
      scoreBoard();
      exitForReal();
    }
  });
}
function scoreBoard() {
  console.log("FINALE SCORE:");
  console.log(namep1 + ": " + scorep1);
  console.log(namep2 + ": " + scorep2);
}

welcomeMSG();
numberofGames();
// lunchTwoplayergame();