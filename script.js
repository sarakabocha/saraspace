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

//Play a single round of rock paper scissors.
//Take player's selection
function playRound(playerSelection, computerSelection) {
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
const computerSelection = getComputerChoice();

console.log(`And the players reveal their moves - Rock...Paper...Scissors!`);
console.log(`You play ${playerSelection}.`);
console.log(`The computer plays ${computerSelection}.`);


console.log(playRound(playerSelection, computerSelection));

//Take computer's selection

//Determine winner

//Declare winner


//Keep track of 5 rounds