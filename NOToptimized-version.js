namep1 = "john";
namep2 = "mia";
let scorep1;
let scorep2;


function playAgain() {
  const readline = require("readline")
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
function exitForReal() {
  const readline = require("readline")
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });
  rl.question("Appuis sur ENTRER", function saveInput(staygo) {
      rl.close();
  });
}
function scoreBoard() {
  console.log("Scores Final:");
  console.log(namep1 + ": " + scorep1);
  console.log(namep2 + ": " + scorep2);
}

const rules = {
  feuille: { ciseaux: false, pierre: true },
  pierre: { ciseaux: true, feuille: false },
  ciseaux: { feuille: true, pierre: false },
};

function determineWinner(player1, player2) {
  if (rules[player1][player2]) {
    return "player1";
  } else if (rules[player2][player1]) {
    return "player2";
  } else {
    return "tie";
  }
}

function playGame(player1, player2) {
  const winner = determineWinner(player1, player2);

  if (winner === "player1") {
    console.log(`Félicitations ${namep1}! Tu as gagné.`);
    scorep1 += 1;
  } else if (winner === "player2") {
    console.log(`Félicitations ${namep2}! Tu as gagné.`);
    scorep2 += 1;
  } else {
    console.log("Égalité.");
  }

  playAgain();
}

const prompt = require('password-prompt');
async function Game() {
    numberp1 = await prompt(namep1 + ': Appuis 1 pour feuille, 2 pour pierres, 3 pour ciseaux: ', {
        method: 'hide'
    });
    numberp2 = await prompt(' et maintenant pour ' + namep2 + ': ', {
        method: 'hide'
    });

}


playGame("pierre", "feuille");