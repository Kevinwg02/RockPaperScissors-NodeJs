console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("                   WELCOME TO A GAME OF ROCK PAPER SCISSORS                     ");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");


function uselessStars() {
    console.log("********************************************************************************");
    console.log("********************************************************************************");
    console.log("********************************************************************************");
    console.log("********************************************************************************");
    console.log("********************************************************************************");
    console.log("********************************************************************************");
}

function uselessTimeStar() {
    uselessStars(); 
    console.log("                                 TIME TO PLAY                                  ");
    uselessStars();
}

var player1;
var player2;
var numberp1;
var numberp2;
var namep1;
var namep2;
var name1;
var namep2;
var staygo;

function Timeout() {
    setTimeout(() => {
        console.log("peace, I'm out");
    }, "5000")

}

function gameRules(player1, player2) {
    if (player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock" || player1 === "scissors" && player2 === "paper") {
        uselessStars();
        console.log("                          Congrats " + namep1 + "! You win                      ");
        uselessStars();
        // Timeout();
        playAgain()
    } else if (player2 === "rock" && player1 === "scissors" || player2 === "paper" && player1 === "rock" || player2 === "scissors" && player1 === "paper") {
        uselessStars()
        console.log("                        Congrats " + namep2 + "! You win                        ");
        uselessStars();
        // Timeout();
        playAgain()
    } else if (player1 === "rock" && player2 === "rock" || player1 === "paper" && player2 === "paper" || player1 === "scissors" && player2 === "paper") {
        console.log("tied");
        // Timeout();
        playAgain()
    }
}

function associateMove(numberp1, numberp2) {

    switch (numberp1) {
        // case 0:
        //     break
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
    console.log(player1 + " vs " + player2);
    gameRules(player1, player2)
}


const prompt = require('password-prompt');
async function lunchingGame() {
    const numberp1 = await prompt(namep1 + ': press 1 for paper, 2 for rocks, 3 for scissors: ', {
        method: 'hide'
    });
    const numberp2 = await prompt(' and now for ' + namep2 + ': ', {
        method: 'hide'
    });
    associateMove(parseInt(numberp1), parseInt(numberp2));
}

function getNames() {
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
            uselessTimeStar();
            lunchingGame();
        });
    });
}


function playAgain() {
    const readline = require("readline")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Shall we play again ? Y - N ", function saveInput(staygo) {
        rl.close();
        if (staygo === "y") {
            lunchingGame();
        } else if (staygo === "n") {
            console.log("bye")
        }
    });
}
getNames();