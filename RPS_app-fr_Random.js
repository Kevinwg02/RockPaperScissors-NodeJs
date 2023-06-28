var player1;
var player2;
var numberp1;
var numberp2;
var namep1;
var namep2 = "bot";
var staygo;
var scorep1 = 0;
var scorep2 = 0;
var random;

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
    "                  BIENVENUE AU PIERRE, FEUILLE, CISEAUX                    "
  );
  uselessStars();
}
function gameRules(player1, player2) {
  if (
    (player1 === "pierre" && player2 === "ciseaux") ||
    (player1 === "feuille" && player2 === "pierre") ||
    (player1 === "ciseaux" && player2 === "feuille")
  ) {
    console.log(
      "                          Felicitation " +
        namep1 +
        "! Tu as gagner                      "
    );
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
    playAgain(namep1, namep2);
  }
}
function associateMove(numberp1, numberp2) {
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
  gameRules(player1, player2);
}

function randomBotmove() {
  random = Math.floor(Math.random() * 4);

  return random;
}

const prompt = require("password-prompt");
async function Game() {
  numberp1 = await prompt(
    namep1 + ": Appuis 1 pour feuille, 2 pour pierres, 3 pour ciseaux: ",
    {
      method: "hide",
    }
  );

  associateMove(parseInt(numberp1), numberp2);
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
function LunchGameNames() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Joueur 1, écris ton nom ", function saveInput(name1) {
    rl.close();
    namep1 = name1;
    numberp2 = random;
    uselessStars();
    console.log(
      "                                 Bonne Chance                                  "
    );
    uselessStars();
    Game();
  });
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
      randomBotmove();
      Game();
    } else if (staygo.toLowerCase() === "n") {
      scoreBoard();
      exitForReal();
    }
  });
}
function scoreBoard() {
  console.log("Scores Final:");
  console.log(namep1 + ": " + scorep1);
  console.log(namep2 + ": " + scorep2);
}
welcomeMSG();
randomBotmove();
LunchGameNames();
