console.log("WELCOME TO A GAME OF ROCK PAPER SCISSORS");
var player1;
var player2;
function gameRules(player1, player2) {
    if (player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock" || player1 === "scissors" && player2 === "paper") {
        console.log("player 1 wins");
    } else if (player1 === "rock" && player2 === "rock" || player1 === "paper" && player2 === "paper" || player1 === "scissors" && player2 === "paper") {
        console.log("tied");
    } else if (player2 === "rock" && player1 === "scissors" || player2 === "paper" && player1 === "rock" || player2 === "scissors" && player1 === "paper") {
        console.log("player 2 wins");
    } else if (player1 && player2 !== "rock" || "paper" || "scissors") {
        console.log("wrong spelling on both players")
    }else if (player1 !== "rock" || "paper" || "scissors") {
        console.log("wrong spelling player 1")
    } else if (player2 !== "rock" || "paper" || "scissors") {
        console.log("wrong spelling player 2")
    }
}

function lunchingGame() {
    const readline = require("readline")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("player 2, you're move ? ", function saveInput(player2) {
        rl.question("player 1, you're move ? ", function saveInput(player1) {
            rl.close();
            gameRules(player1, player2)
        });
    });
}
lunchingGame();
