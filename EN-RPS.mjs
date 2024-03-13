import chalk from 'chalk';
import Botgameprompt from "password-prompt";
import Gameprompt from "password-prompt";
import readline from "readline";
import crypto from "crypto";

// the require got remplaced by the import

// const crypto = require('crypto');
// const readline = require("readline");
// const Gameprompt = require("password-prompt");
// const Botgameprompt = require("password-prompt");

const log = console.log;
chalk.level = 1;



var player1;
var player2;
var numberp1;
var numberp2;
var namep1;
var namep2 = "Jerry";
var staygo;
var scorep1 = 0;
var scorep2 = 0;
var random;
var nbplayers;

// var includerpsmsg = require('./js/rpstitre.js');
// var scoreboardincluded = require('./js/nicescoreboard.js');


function uselessStars() {
  log(chalk.cyan("********************************************************************************"));
  log(chalk.cyan("********************************************************************************"));
  log(chalk.cyan("********************************************************************************"));
  log(chalk.cyan("********************************************************************************"));
  log(chalk.cyan("********************************************************************************"));
}

function welcomeMSG() {
  uselessStars();
  log(chalk.cyanBright("                       Welcome to rock, paper, scissors                    "));
  uselessStars();
}
function exitForReal() {
  // const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Press ENTRER", function saveInput(staygo) {
    rl.close();
  });
}
function numberofPlayers() {

  const rl0 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl0.question(
    "Are you playing alone (1) or with a friend (2)?",
    function saveInput(nbplayers) {
      nbplayers = parseInt(nbplayers);
      rl0.close();

      //decide if we play alone or against a someone
      if (nbplayers === 1) {
        lunchBotgame();
      } else if (nbplayers === 2) {
        lunchTwoplayergame();
      }
      return nbplayers;
    }
  );
}


function scoreBoard() {
  log(chalk.cyanBright("**************                FINALE SCORE:        ************************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyanBright("**************" + "      " + namep1 + "      " + "            " + "      " + scorep1 + "      " + "*******************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyanBright("**************" + "      " + namep2 + "      " + "            " + "      " + scorep2 + "      " + "*******************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyan("****************************************************************************"));

  if (scorep1 > scorep2) {
    log(chalk.cyanBright("*******************" + "      " + "The winner is  " + namep1 + "      " + "************************"));
  } else {
    log(chalk.cyanBright("*******************" + "      " + "The winner is  " + namep2 + "      " + "************************"));
  }
}

function randomBotmove() {

  const random = crypto.randomInt(1, 4); // Generate a random number between 0 and 2
  return random;
}
function playAgain() {
  // const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Shall we play again ? y - n", function saveInput(staygo) {
    rl.close();
    if (staygo.toLowerCase() === "y") {
      Game();
    } else if (staygo.toLowerCase() === "n") {
      scoreBoard();
      // scoreboardincluded.scoreboardincluded();
      exitForReal();
    }
  });
}

function playAgainwithBot() {
  // const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Shall we play again ? y - n: ", function saveInput(staygo) {
    rl.close();
    if (staygo.toLowerCase() === "y") {
      numberp2 = randomBotmove();
      GameVersusbot();
    } else if (staygo.toLowerCase() === "n") {
      scoreBoard();
      exitForReal();
    }
  });
}



function gameRulesTwoPlayers(player1, player2) {
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    console.log("                          Congrats " + namep1 + "! You've won   ");
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
      "! You've won                        "
    );
    scorep2 += 1;
    playAgain();
  } else if (
    (player1 === "rock" && player2 === "rock") ||
    (player1 === "paper" && player2 === "paper") ||
    (player1 === "scissors" && player2 === "scissors")
  ) {
    console.log("Tie");
    playAgain();
  }
}

function associateMoveTwoPlayers(numberp1, numberp2) {
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
      console.log(player1 + " typo ");
      return;
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
      console.log(player2 + " typo ");
      return;
  }
  console.log(player1 + " vs " + player2);

  gameRulesTwoPlayers(player1, player2);
}

async function Game() {
  numberp1 = await Gameprompt(
    namep1 + ": Press 1 for paper, 2 for rocks, 3 for scissors: ",
    {
      method: "hide",
    }
  );
  numberp2 = await Gameprompt(' and now for ' + namep2 + ': ', {
    method: 'hide'
  });
  associateMoveTwoPlayers(parseInt(numberp1), parseInt(numberp2));
}
function lunchTwoplayergame() {
  // const readline = require("readline")
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Player 1, Write your name :  ", function saveInput(name1) {
    rl.question("and now player 2: ", function saveInput(name2) {
      rl.close();
      namep1 = name1;
      namep2 = name2;

      uselessStars();
      log(chalk.cyan("                                Good Luck                                  "));
      uselessStars();
      Game();
    });
  });
}


function gameRulesOnePlayer(player1, player2) {
  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    console.log("  Congrats " + namep1 + "! You've won   ");
    scorep1 += 1;
    playAgainwithBot();
  } else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissors" && player1 === "paper")
  ) {
    console.log(
      "                        Congrats " +
      namep2 +
      "! You've won                        "
    );
    scorep2 += 1;
    playAgainwithBot();
  } else if (
    (player1 === "rock" && player2 === "rock") ||
    (player1 === "paper" && player2 === "paper") ||
    (player1 === "scissors" && player2 === "scissors")
  ) {
    console.log("Tie");
    playAgainwithBot();
  }
}

function associateMoveOnePlayers(numberp1, numberp2) {

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
      console.log(player1 + " typo ");
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
      console.log(player2 + " typo ");
  }
  console.log(player1 + " vs " + player2);
  gameRulesOnePlayer(player1, player2);
}

async function GameVersusbot() {
  numberp1 = await Botgameprompt(
    namep1 + ": Press 1 for paper, 2 for rocks, 3 for scissors: ",
    {
      method: "hide",
    }
  );
  associateMoveOnePlayers(parseInt(numberp1), numberp2);
}

function lunchBotgame() {
  // const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Player 1, Write your name  ", function saveInput(name1) {
    rl.close();
    namep1 = name1;
    numberp2 = randomBotmove();
    uselessStars();
    log(chalk.cyan("                                Good Luck                                  "));
    uselessStars();
    GameVersusbot();
  });
}


// includerpsmsg.rpsmsg();

welcomeMSG();
numberofPlayers();
