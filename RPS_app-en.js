var player1;
var player2;
var numberp1;
var numberp2;
var namep1;
var scorep1 = 0;
var scorep2 = 0;

//useless text for presentation
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
  console.log("                   WELCOME TO A GAME OF ROCK PAPER SCISSORS                   "
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
    console.log("                          Congrats " + namep1 + "! You've won                      "
    );
    //up the score by one for the scoreboard
    scorep1 += 1;
    playAgain();
  } else if (
    (player2 === "rock" && player1 === "scissors") ||
    (player2 === "paper" && player1 === "rock") ||
    (player2 === "scissors" && player1 === "paper")
  ) {
    console.log("                        Congrats " + namep2 + "! You've won                        "
    );
    scorep2 += 1;
    playAgain();
  } else if (
    (player1 === "rock" && player2 === "rock") ||
    (player1 === "paper" && player2 === "paper") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    console.log("Tie");
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
      console.log(player1 + " Wrong Spelling");
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
      console.log(player2 + " Wrong Spelling");
      return;
  }
  console.log(player1 + " vs " + player2);
  gameRules(player1, player2);
}

const Gameprompt = require("password-prompt");
async function Game() {
  //using a password prompt to hide the imput 
  numberp1 = await Gameprompt(
    namep1 + ": Press 1 for paper, 2 for rocks, 3 for scissors: ",
    {
      method: "hide",
    }
  );
  numberp2 = await Gameprompt(' and now for ' + namep2 + ': ', {
    method: 'hide'
  });

  associateMove(parseInt(numberp1), parseInt(numberp2));
}

function lunchTwoplayergame() {
  const readline = require("readline")
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("player 1, write your name ", function saveInput(name1) {
    rl.question("and now player 2: ", function saveInput(name2) {
      rl.close();
      namep1 = name1;
      namep2 = name2;

      uselessStars();
      console.log("                                 Good Luck                                  ");
      uselessStars();
      Game();
    });
  });
}

function playAgain() {
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Shall we play again ? y(yes) - n(no) : ", function saveInput(staygo) {
    rl.close();
    if (staygo.toLowerCase() === "y") {
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
lunchTwoplayergame();