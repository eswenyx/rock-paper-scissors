function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {

    let playerChoice = prompt("Enter your choice (rock, paper, scissors): ");
    return playerChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        let humanChoice= getHumanChoice().toLowerCase();
        let computerChoice = getComputerChoice(); 

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        
        if (humanChoice === computerChoice) {
            console.log("Draw!");
        } else if ((humanChoice === "rock" && computerChoice == "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        console.log(`Your Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        console.log("----------------------------------");
        return;
    }

    for (let i = 0; i < 5; i++) {
        playRound();
    }
}   

playGame();

