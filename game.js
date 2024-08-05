console.log("Hello!");

var humanScore = 0;
var computerScore = 0;
var button = document.getElementById("resetBTN");

const result = document.querySelector("#result");

const human = document.querySelector("#humanScore");
human.innerText ="Human: 0";

const computer = document.querySelector("#computerScore");
computer.innerText = "Computer: 0";

function getComputerChoice() {
    var randomNumber = 1 + Math.floor(Math.random() * 3);

    if (randomNumber === 1)
        return "Rock";
    else if (randomNumber === 2)
        return "Paper";
    else
        return "Scissors";
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceLower = humanChoice.toLowerCase();
    const computerChoiceLower = computerChoice.toLowerCase();


    if (humanChoiceLower === computerChoiceLower) {
        result.innerHTML += '<p>Draw!</p>';
        return;
    }

    if (humanChoiceLower === "rock") {
        if (computerChoiceLower === 'paper') {
            result.innerHTML += '<p>Paper beats rock! Computer wins round.</p>';
            computerScore += 1;
            computer.innerText = `Computer: ${computerScore}`;
            return;
        }
        if (computerChoiceLower === 'scissors') {
            result.innerHTML += '<p>Rock beats scissors! Human wins round.</p>';
            humanScore += 1;
            human.innerText = `Human: ${humanScore}`;
            return;
        }
    }

    if (humanChoiceLower === "paper") {
        if (computerChoiceLower === 'rock') {
            result.innerHTML += '<p>Paper beats rock! Human wins round.</p>';
            humanScore += 1;
            human.innerText = `Human: ${humanScore}`;
            return;
        }
        if (computerChoiceLower === 'scissors') {
            result.innerHTML += '<p>Scissors beat paper! Computer wins round.</p>';
            computerScore += 1;
            computer.innerText = `Computer: ${computerScore}`;
            return;
        }
    }

    if (humanChoiceLower === "scissors") {
        if (computerChoiceLower === 'paper') {
            result.innerHTML += '<p>Scissors beat paper! Human wins round.</p>';
            humanScore += 1;
            human.innerText = `Human: ${humanScore}`;
            return;
        }
        if (computerChoiceLower === 'rock') {
            result.innerHTML += '<p>Rock beats scissors! Computer wins round.</p>';
            computerScore += 1;
            computer.innerText = `Computer: ${computerScore}`;
            return;
        }
    }


};

const rockBTN = document.querySelector("#rockBTN");
const paperBTN = document.querySelector("#paperBTN");
const scissorsBTN = document.querySelector("#scissorsBTN");

rockBTN.addEventListener("click", function () {    
    playRound("rock", getComputerChoice());
    if (humanScore >= 5 || computerScore>=5) {
        alert(`Result: ${humanScore} - human\n${computerScore} - computer`);
        humanScore = 0;
        computerScore = 0;
        result.innerHTML += '<p>Game reset.</p>';
        return;
    }
});

paperBTN.addEventListener("click", function () {
    playRound("paper", getComputerChoice());
    if (humanScore >= 5 || computerScore>=5) {
        alert(`Result: ${humanScore} - human\n${computerScore} - computer`);
        humanScore = 0;
        computerScore = 0;
        result.innerHTML += '<p>Game reset.</p>';
        return;
    }
});

scissorsBTN.addEventListener("click", function () {
    playRound("scissors", getComputerChoice());
    if (humanScore >= 5 || computerScore>=5) {
        alert(`Result: ${humanScore} - human\n${computerScore} - computer`);
        humanScore = 0;
        computerScore = 0;
        result.innerHTML += '<p>Game reset.</p>';
        return;
    }
});
