console.log("Hello!");

var humanScore = 0;
var computerScore = 0;
var button = document.getElementById("resetBTN");

function getComputerChoice() {
    var randomNumber = 1 + Math.floor(Math.random() * 3);

    if (randomNumber === 1)
        return "Rock";
    else if (randomNumber === 2)
        return "Paper";
    else
        return "Scissors";
};


function getHumanChoice() {
    var defaultPrompth = getComputerChoice();
    var input = prompt("Rock, paper, scissors...", defaultPrompth);
    return input;
};



function playRound(humanChoice, computerChoice) {

    const humanChoiceLower = humanChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();

    const validChoices = ["paper", "scissors", "rock"];

    if (!validChoices.includes(humanChoiceLower)) {
        console.log("Wrong input");
        return;
    }
    if (humanChoiceLower === computerChoiceLower) {
        console.log('Draw!');
        return;
    }

    if (humanChoiceLower === "rock") {
        if (computerChoiceLower === 'paper') {
            console.log("Paper beats rock! Computer wins round.");
            computerScore += 1;
            return;
        }
        if (computerChoiceLower === 'scissors') {
            console.log("Rock beats scissors! Human wins round.");
            humanScore += 1;
            return;
        }
    }

    if (humanChoiceLower === "paper") {
        if (computerChoiceLower === 'rock') {
            console.log("Paper beats rock! Human wins round.");
            humanScore += 1;
            return;
        }
        if (computerChoiceLower === 'scissors') {
            console.log("Scissors beat paper! Computer wins round.");
            computerScore += 1;
            return;
        }
    }

    if (humanChoiceLower === "scissors") {
        if (computerChoiceLower === 'paper') {
            console.log("Scissors beat paper! Human wins round.");
            humanScore += 1;
            return;
        }
        if (computerChoiceLower === 'rock') {
            console.log("Rock beats scissors! Computer wins round.");
            computerScore += 1;
            return;
        }
    }
};


function playGame() {

    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > 2){
        console.log("Human WINS!!!");
    }

    else if(computerScore > 2){
        console.log("Computer WINS!!!");
    }

    humanScore = 0;
    computerScore = 0;
    button.blur();

};

playGame();



button.addEventListener("click", playGame);
