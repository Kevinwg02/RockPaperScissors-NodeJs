console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("*****************  WELCOME TO A GAME OF ROCK PAPER SCISSORS  *******************");
console.log("********************************************************************************");
console.log("********************************************************************************");


function gameRules(player1, player2) {
    if (player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock" || player1 === "scissors" && player2 === "paper") {
        console.log("player 1 wins");
    } else if (player2 === "rock" && player1 === "scissors" || player2 === "paper" && player1 === "rock" || player2 === "scissors" && player1 === "paper") {
        console.log("player 2 wins");
    } else if (player1 === "rock" && player2 === "rock" || player1 === "paper" && player2 === "paper" || player1 === "scissors" && player2 === "paper") {
        console.log("tied");
    }
}

function associateMove(numberp1, numberp2) {
    var player1;
    var player2;
    var numberp1;
    var numberp2;
    
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
            console.log("p1 wrong input");
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
            console.log("p2 wrong input");
    }
    console.log(player1 +" vs " +player2);
    gameRules(player1, player2)
}
const prompt = require('password-prompt');

async function lunchingGame() {
    const numberp1 = await prompt('player 1: press 1 for paper, 2 for rocks, 3 for scissors: ', { method: 'hide' });
    const numberp2 = await prompt('and now for player 2: ', { method: 'hide' });
    associateMove(parseInt(numberp1), parseInt(numberp2));
}

// function lunchingGame() {
//     const readline = require("readline")
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });
    
//     rl.question("player 1: press 1 for rocks, 2 for paper, 3 for scissors: ", function saveInput(numberp1) {
//         rl.question("and now for player 2: ", function saveInput(numberp2) {
//             associateMove(parseInt(numberp1), parseInt(numberp2));
//             rl.close();
//         });
//     });
// }



lunchingGame();