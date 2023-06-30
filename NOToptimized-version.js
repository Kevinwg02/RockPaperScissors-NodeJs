const prompt = require("password-prompt");
const readline = require("readline");

const moves = {
  1: "feuille",
  2: "pierre",
  3: "ciseaux",
};

let player1;
let player2;
let namep1;
let namep2 = "bot";
let scorep1 = 0;
let scorep2 = 0;

function uselessStars() {
  console.log("********************************************************************************");
}

function welcomeMSG() {
  uselessStars();
  console.log("                  BIENVENUE AU PIERRE, FEUILLE, CISEAUX                    ");
  uselessStars();
}

function gameRules(player1, player2) {
  if (
    (player1 === "pierre" && player2 === "ciseaux") ||
    (player1 === "feuille" && player2 === "pierre") ||
    (player1 === "ciseaux" && player2 === "feuille")
  ) {
    console.log(`Felicitation ${namep1}! Tu as gagné`);
    scorep1 += 1;
    playAgain();
  } else if (
    (player2 === "pierre" && player1 === "ciseaux") ||
    (player2 === "feuille" && player1 === "pierre") ||
    (player2 === "ciseaux" && player1 === "feuille")
  ) {
    console.log(`Felicitation ${namep2}! Tu as gagné`);
    scorep2 += 1;
    playAgain();
  } else if (
    (player1 === "pierre" && player2 === "pierre") ||
    (player1 === "feuille" && player2 === "feuille") ||
    (player1 === "ciseaux" && player2 === "ciseaux")
  ) {
    console.log("Egalité");
    playAgain();
  }
}

function randomBotMove() {
  const random = Math.floor(Math.random() * 3) + 1;
  return moves[random];
}

async function game() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const numberp1 = await prompt(`${namep1}: Appuie 1 pour feuille, 2 pour pierre, 3 pour ciseaux: `, {
    method: "hide",
  });

  player1 = moves[parseInt(numberp1)];
  player2 = randomBotMove();

  console.log(`${player1} vs ${player2}`);
  gameRules(player1, player2);

  rl.close();
}

function exitForReal() {
  readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  }).question("Appuie sur ENTRER", () => {
    process.exit();
  });
}

function lunchGameNames() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Joueur 1, écris ton nom: ", (name1) => {
    namep1 = name1;

    uselessStars();
    console.log("Bonne chance");
    uselessStars();

    game();

    rl.close();
  });
}

function playAgain() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("On joue encore une fois ? (o/n): ", (staygo) => {
    if (staygo.toLowerCase() === "o") {
      game();
    } else if (staygo.toLowerCase() === "n") {
      scoreBoard();
      exitForReal();
    }

    rl.close();
  });
}

function scoreBoard() {
  console.log("Scores finaux:");
  console.log(`${namep1}: ${scorep1}`);
  console.log(`${namep2}: ${scorep2}`);
}

welcomeMSG();
lunchGameNames();
