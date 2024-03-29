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
  log(chalk.cyanBright("                  BIENVENUE AU PIERRE, FEUILLE, CISEAUX                    "));
  uselessStars();
}
function exitForReal() {
  // const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Appuyez sur ENTRER", function saveInput(staygo) {
    rl.close();
  });
}
function numberofPlayers() {

  const rl0 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl0.question(
    "Vous jouez seul (1) ou a deux (2) ?   ",
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
  log(chalk.cyanBright("**************                SCORE FINALE        ************************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyanBright("            " + "      " + namep1 + "      " + "            " + "      " + scorep1 + "      " + "            "));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyanBright("            " + "      " + namep2 + "      " + "            " + "      " + scorep2 + "      " + "            "));
  log(chalk.cyan("***************************************************************************"));
  log(chalk.cyan("****************************************************************************"));

  if (scorep1 > scorep2) {
    log(chalk.cyanBright("*******************" + "      " + "Le gagnant est   " + namep1 + "      " + "************************"));
  } else {
    log(chalk.cyanBright("*******************" + "      " + "Le gagnant est   " + namep2 + "      " + "************************"));
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

  rl.question("On joue encore une fois ? o : oui - n : non     ", function saveInput(staygo) {
    rl.close();
    if (staygo.toLowerCase() === "o") {
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

  rl.question("On joue encore une fois ? o : oui - n : non     ", function saveInput(staygo) {
    rl.close();
    if (staygo.toLowerCase() === "o") {
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
    (player1 === "pierre" && player2 === "ciseaux") ||
    (player1 === "feuille" && player2 === "pierre") ||
    (player1 === "ciseaux" && player2 === "feuille")
  ) {
    console.log("                          félicitation  " + namep1 + "!  Tu as gagner!     ");
    scorep1 += 1;
    playAgain();
  } else if (
    (player2 === "pierre" && player1 === "ciseaux") ||
    (player2 === "feuille" && player1 === "pierre") ||
    (player2 === "ciseaux" && player1 === "feuille")
  ) {
    console.log(
      "                        félicitation  " +
      namep2 +
      "! Tu as Gagner !                       "
    );
    scorep2 += 1;
    playAgain();
  } else if (
    (player1 === "pierre" && player2 === "pierre") ||
    (player1 === "feuille" && player2 === "feuille") ||
    (player1 === "ciseaux" && player2 === "ciseaux")
  ) {
    console.log("égalité");
    playAgain();
  }
}

function associateMoveTwoPlayers(numberp1, numberp2) {
  switch (numberp1) {
    case 1:
      player1 = "feuille";
      break;
    case 2:
      player1 = "pierre";
      break;
    case 3:
      player1 = "ciseaux";
      break;
    default:
      console.log(player1 + " fautes de frappes ");
      return;
  }
  switch (numberp2) {
    case 1:
      player2 = "feuille";
      break;
    case 2:
      player2 = "pierre";
      break;
    case 3:
      player2 = "ciseaux";
      break;
    default:
      console.log(player2 + " fautes de frappes ");
      return;
  }
  console.log(player1 + " vs " + player2);

  gameRulesTwoPlayers(player1, player2);
}

async function Game() {
  numberp1 = await Gameprompt(
    namep1 + ": Appuis 1 pour feuille, 2 pour pierres, 3 pour ciseaux: ",
    {
      method: "hide",
    }
  );
  numberp2 = await Gameprompt(' et maintenant au tour de  ' + namep2 + ': ', {
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

  rl.question("Joueur 1, écris ton nom ", function saveInput(name1) {
    rl.question("et maintenant joueur 2: ", function saveInput(name2) {
      rl.close();
      namep1 = name1;
      namep2 = name2;

      uselessStars();
      log(chalk.cyan("                                Bonne Chance                                  "));
      uselessStars();
      Game();
    });
  });
}


function gameRulesOnePlayer(player1, player2) {
  if (
    (player1 === "pierre" && player2 === "ciseaux") ||
    (player1 === "feuille" && player2 === "pierre") ||
    (player1 === "ciseaux" && player2 === "feuille")
  ) {
    console.log("  félicitation  " + namep1 + "!  Tu as gagner!    ");
    scorep1 += 1;
    playAgainwithBot();
  } else if (
    (player2 === "pierre" && player1 === "ciseaux") ||
    (player2 === "feuille" && player1 === "pierre") ||
    (player2 === "ciseaux" && player1 === "feuille")
  ) {
    console.log(
      "                        félicitation  " +
      namep2 +
      "! Tu as gagner!                     "
    );
    scorep2 += 1;
    playAgainwithBot();
  } else if (
    (player1 === "pierre" && player2 === "pierre") ||
    (player1 === "feuille" && player2 === "feuille") ||
    (player1 === "ciseaux" && player2 === "ciseaux")
  ) {
    console.log("égalité");
    playAgainwithBot();
  }
}

function associateMoveOnePlayers(numberp1, numberp2) {

  switch (numberp1) {
    case 1:
      player1 = "feuille";
      break;
    case 2:
      player1 = "pierre";
      break;
    case 3:
      player1 = "ciseaux";
      break;
    default:
      console.log(player1 + " fautes de frappes ");
  }
  switch (numberp2) {
    case 1:
      player2 = "feuille";
      break;
    case 2:
      player2 = "pierre";
      break;
    case 3:
      player2 = "ciseaux";
      break;
    default:
      console.log(player2 + " fautes de frappes ");
  }
  console.log(player1 + " vs " + player2);
  gameRulesOnePlayer(player1, player2);
}

async function GameVersusbot() {
  numberp1 = await Botgameprompt(
    namep1 + ": Appuis 1 pour feuille, 2 pour pierres, 3 pour ciseaux: ",
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

  rl.question("Joueur 1, écris ton nom ", function saveInput(name1) {
    rl.close();
    namep1 = name1;
    numberp2 = randomBotmove();
    uselessStars();
    log(chalk.cyan("                                Bonne Chance                                 "));
    uselessStars();
    GameVersusbot();
  });
}


// includerpsmsg.rpsmsg();

welcomeMSG();
numberofPlayers();
