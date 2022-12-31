//Randomly return rock, paper, or scissors
//Store computer's choice
//Generate a random number
//If 0 < n ≤ 0.33 => rock
//If 0.33 < n ≤ 0.66 => paper
//If 0.66 < n ≤ 1 => scissors

const resultText = document.querySelector('p');

let playerChoice;
let computerChoice;

function getComputerChoice() {
    let n = Math.random()

    switch(true) {

        case n <= 0.33:
        return computerChoice = 'rock'


        case n <= 0.66:
        return computerChoice = 'paper'

        case n <= 1:
        return computerChoice = 'scissors'

    }
    
    console.log(computerChoice);
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let commentary;

//Play a single round of rock paper scissors.
//Compare player and computer's selection
//Determine winner
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    
    console.log(`The computer plays ${computerSelection}.`);

    switch(true) {

        case (playerSelection === 'rock' && computerSelection === 'rock'):
        commentary = 'It\'s a draw.';
        return;

        case (playerSelection === 'rock' && computerSelection === 'paper'):
        commentary = 'Paper wraps up Rock, snatching the victory from the jaws of defeat! Humanity loses this round!';
        return ++computerScore;

        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        commentary = 'Rock smashes the shit out of scissors til it\'s bent out of shape. Humanity prevails this round!'
        return ++playerScore;

        case (playerSelection === 'scissors' && computerSelection === 'scissors'):
        commentary = 'It\'s a draw.';
        return;
        
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
        commentary = 'Rock smashes the shit out of scissors til it\'s bent out of shape. Humanity loses this round!';
        return ++computerScore;

        case (playerSelection === 'scissors' && computerSelection === 'paper'):
        commentary = 'Scissors slices through paper and creates confetti. Humanity prevails this round!'
        return ++playerScore;

        case (playerSelection === 'paper' && computerSelection === 'paper'):
        commentary = 'It\'s a draw.';
        return;

        case (playerSelection === 'paper' && computerSelection === 'rock'):
        commentary = 'Paper wraps up Rock, snatching the victory from the jaws of defeat! Humanity prevails this round!';
        return ++playerScore;

        case (playerSelection === 'paper' && computerSelection === 'scissors'):
        console.log('Scissors slices through paper and creates confetti. Humanity loses this round!');
        return ++computerScore;

    }
}

function getPlayerChoice() {
    return playerChoice = (prompt('Make a choice').toLowerCase());
    console.log(playerChoice);
}



console.log(`And the players reveal their moves - Rock...Paper...Scissors!`);

//Play a game of 5 rounds
function game(playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {

        console.log(`——————————————————————Round ${i + 1}: ——————————————————————`);
    
        playerSelection = getPlayerChoice(); //Prompt user to type in choice
        console.log(`You play ${playerSelection}.`);
        
        
        playRound(playerSelection, computerSelection); //Play a round
        console.log(commentary); //Print outcome
        console.log(`Score \b You:${playerScore} Computer:${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log(`You win!`);
    } else {
        console.log(`You lose!`);
    }
}

console.log(game(playerSelection, computerSelection));