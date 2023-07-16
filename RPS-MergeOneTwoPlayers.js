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

function uselessStars() {
  console.log("********************************************************************************");
  console.log("********************************************************************************");
  console.log("********************************************************************************");
  console.log("********************************************************************************");
  console.log("********************************************************************************");
  console.log("********************************************************************************");
}
function welcomeMSG() {
  uselessStars();
  console.log("                  BIENVENUE AU PIERRE, FEUILLE, CISEAUX                    ");
  uselessStars();
}
function exitForReal() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Appuis sur ENTRER", function saveInput(staygo) {
    rl.close();
  });
}
function numberofPlayers() {
  const readline = require("readline");
  const rl0 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl0.question(
    "Vous jouez a seul ou a deux ?  Appuis sur 1 ou 2 ",
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
  console.log("SCORE FINALE:");
  console.log(namep1 + ": " + scorep1);
  console.log(namep2 + ": " + scorep2);
}
function randomBotmove() {
  const crypto = require('crypto');
  const random = crypto.randomInt(1, 4); // Generate a random number between 0 and 2
  return random;
}



function playAgain() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("On joue encore une fois ? o - n ", function saveInput(staygo) {
    rl.close();
    if (staygo.toLowerCase() === "o") {
      Game();
    } else if (staygo.toLowerCase() === "n") {
      scoreBoard();
      exitForReal();
    }
  });
}

function playAgainwithBot() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("On joue encore une fois ? o - n : ", function saveInput(staygo) {
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
    console.log("  Felicitation " + namep1 + "! Tu as gagner   ");
    scorep1 += 1;
    playAgain();
  } else if (
    (player2 === "pierre" && player1 === "ciseaux") ||
    (player2 === "feuille" && player1 === "pierre") ||
    (player2 === "ciseaux" && player1 === "feuille")
  ) {
    console.log(
      "                        Felicitation " +
      namep2 +
      "! Tu as gagner                        "
    );
    scorep2 += 1;
    playAgain();
  } else if (
    (player1 === "pierre" && player2 === "pierre") ||
    (player1 === "feuille" && player2 === "feuille") ||
    (player1 === "ciseaux" && player2 === "feuille")
  ) {
    console.log("Egaliter");
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
      console.log(player1 + " fautes de frappes");
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
      console.log(player2 + " fautes de frappes");
      return;
  }
  console.log(player1 + " vs " + player2);
  // if (nbplayers === 2) {
  //   gameRulesTwoPlayers(player1, player2);
  // }else {
  //   gameRulesOnePlayer(player1, player2);
  // }
  gameRulesTwoPlayers(player1, player2);
}

const Gameprompt = require("password-prompt");
async function Game() {
  numberp1 = await Gameprompt(
    namep1 + ": Appuis 1 pour feuille, 2 pour pierres, 3 pour ciseaux: ",
    {
      method: "hide",
    }
  );
  numberp2 = await Gameprompt(' et maintenant pour ' + namep2 + ': ', {
    method: 'hide'
  });
  associateMoveTwoPlayers(parseInt(numberp1), parseInt(numberp2));
}
function lunchTwoplayergame() {
  const readline = require("readline")
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
      console.log("                                 Bonne Chance                                  ");
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
    console.log("  Felicitation " + namep1 + "! Tu as gagner   ");
    scorep1 += 1;
    playAgainwithBot();
  } else if (
    (player2 === "pierre" && player1 === "ciseaux") ||
    (player2 === "feuille" && player1 === "pierre") ||
    (player2 === "ciseaux" && player1 === "feuille")
  ) {
    console.log(
      "                        Felicitation " +
      namep2 +
      "! Tu as gagner                        "
    );
    scorep2 += 1;
    playAgainwithBot();
  } else if (
    (player1 === "pierre" && player2 === "pierre") ||
    (player1 === "feuille" && player2 === "feuille") ||
    (player1 === "ciseaux" && player2 === "feuille")
  ) {
    console.log("Egaliter");
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
      console.log(player1 + " fautes de frappes");
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
      console.log(player2 + " fautes de frappes");
  }
  console.log(player1 + " vs " + player2);
  gameRulesOnePlayer(player1, player2);
}
const Botgameprompt = require("password-prompt");
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
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Joueur 1, écris ton nom ", function saveInput(name1) {
    rl.close();
    namep1 = name1;
    numberp2 = randomBotmove();
    uselessStars();
    console.log("                                 Bonne Chance                                  "
    );
    uselessStars();
    GameVersusbot();
  });
}



welcomeMSG();
numberofPlayers();
