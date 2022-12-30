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

    console.log(n);

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

let computerSelection;

//Play a single round of rock paper scissors.
//Compare player and computer's selection
//Determine winner
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(`The computer plays ${computerSelection}.`);

    switch(true) {

        case (playerSelection === 'rock' && computerSelection === 'rock'):
        return 'It\'s a draw.';

        case (playerSelection === 'rock' && computerSelection === 'paper'):
        return 'Paper wraps up Rock, snatching the victory from the jaws of defeat! Humanity loses this round!';

        case (playerSelection === 'rock' && computerSelection === 'scissors'):
        return 'Rock smashes the shit out of scissors til it\'s bent out of shape. Humanity prevails this round!';

        case (playerSelection === 'scissors' && computerSelection === 'scissors'):
        return 'It\'s a draw.';
        
        case (playerSelection === 'scissors' && computerSelection === 'rock'):
        return 'Rock smashes the shit out of scissors til it\'s bent out of shape. Humanity loses this round!';

        case (playerSelection === 'scissors' && computerSelection === 'paper'):
        return 'Scissors slices through paper and creates confetti. Humanity prevails this round!';

        case (playerSelection === 'paper' && computerSelection === 'paper'):
        return 'It\'s a draw.';

        case (playerSelection === 'paper' && computerSelection === 'rock'):
        return 'Paper wraps up Rock, snatching the victory from the jaws of defeat! Humanity prevails this round!';

        case (playerSelection === 'paper' && computerSelection === 'scissors'):
        return 'Scissors slices through paper and creates confetti. Humanity loses this round!';

    }
}

const playerSelection = 'rock';


console.log(`And the players reveal their moves - Rock...Paper...Scissors!`);

//Play a game of 5 rounds
function game(playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}: `);

        console.log(`You play ${playerSelection}.`);
        
        console.log(playRound(playerSelection, computerSelection));
        // console.log(`Round ${i + 1} winner: `);
    }
}

console.log(game(playerSelection, computerSelection));