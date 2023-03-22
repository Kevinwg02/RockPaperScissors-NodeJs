console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("********************************************************************************");
console.log("                 Bienvenue sur pierre feuille ciseaux                           ");
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
    console.log("                           c'est l'heure de jouer                               ");
    uselessStars();
}
function Timeout() {
    setTimeout(() => {
        console.log("peace, I'm out");
    }, "5000")

}

var player1;
var player2;
var numberp1;
var numberp2;
var namep1;
var namep2;
var name1;
var namep2;


function gameRules(player1, player2) {
    if (player1 === "rock" && player2 === "scissors" || player1 === "paper" && player2 === "rock" || player1 === "scissors" && player2 === "paper") {
        uselessStars();
        console.log("                          Félicitations " + namep1 + "! Tu as gagné                      ");
        uselessStars();
         playAgain()
    } else if (player2 === "rock" && player1 === "scissors" || player2 === "paper" && player1 === "rock" || player2 === "scissors" && player1 === "paper") {
        uselessStars()
        console.log("                        Félicitations " + namep2 + "! Tu as gagné                      ");
        uselessStars();
         playAgain()
    } else if (player1 === "rock" && player2 === "rock" || player1 === "paper" && player2 === "paper" || player1 === "scissors" && player2 === "paper") {
        console.log("égalité");
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
            console.log("mauvaise touche");
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
            console.log("mauvaise touche");
    }
    console.log(player1 + " vs " + player2);
    gameRules(player1, player2)
}

const prompt = require('password-prompt');
async function lunchingGame() {
    const numberp1 = await prompt(namep1 + ': appuis sur 1 pour feuille, 2 pour pierre, 3 pour ciseaux: ', {
        method: 'hide'
    });
    const numberp2 = await prompt(' maintenant au tour de ' + namep2 + ': ', {
        method: 'hide'
    });
    associateMove(parseInt(numberp1), parseInt(numberp2));
}

function playAgain() {
    const readline = require("readline")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Une autre partie ? o - n ", function saveInput(staygo) {
        rl.close();
        if (staygo === "o") {
            lunchingGame();
        } else if (staygo === "n") {
            console.log("bye")
        }
    });
}
function getNames() {
    const readline = require("readline")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("joueur 1: écris ton nom ", function saveInput(name1) {
        rl.question("maintenant joueur 2: ", function saveInput(name2) {
            rl.close();
            namep1 = name1;
            namep2 = name2;
            uselessTimeStar();
            lunchingGame();
        });
    });
}

getNames();
