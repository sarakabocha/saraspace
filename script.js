//Randomly return rock, paper, or scissors
//Store computer's choice
//Generate a random number
//If 0 < n ≤ 0.33 => rock
//If 0.33 < n ≤ 0.66 => paper
//If 0.66 < n ≤ 1 => scissors


const selectionText = document.createElement('p');
const resultText = document.createElement('p');
const score = document.createElement('p');
const outcome = document.createElement('p');
container.appendChild(selectionText);
container.appendChild(resultText);
container.appendChild(score);
container.appendChild(outcome);

let computerChoice;

// Get computer choice based on random number
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

// Play a single round of rock paper scissors.
// Compare player and computer's selection
// Determine winner and update score
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    selectionText.textContent = `You play ${playerSelection}. The computer plays ${computerSelection}.`;
    resultText.textContent = '';

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
        commentary = 'Scissors slices through paper and creates confetti. Humanity loses this round!';
        return ++computerScore;

    }
}



console.log(`And the players reveal their moves - Rock...Paper...Scissors!`);

// Create rps buttons
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    
    button.addEventListener('click', () => {
        game(button.id, computerSelection); // Run game with button's id 
        scoreCheck(); // Run score-keeping
    });
});


// Play a game
function game(playerSelection, computerSelection) {
        
        playRound(playerSelection, computerSelection); // Play a round

        resultText.textContent = commentary; // Print outcome

        score.textContent = `Score \b You:${playerScore} Computer:${computerScore}`;

}

// Create a button that appears when game is over and resets game
const resetButton = document.createElement('button');
resetButton.innerText = 'Start over';
resetButton.addEventListener('click', resetGame());

function scoreCheck() {
    if (playerScore === 2 || computerScore === 2) {

        // Disable rps buttons when game over
        buttons.forEach((button) => {
            button.disabled = true;
        })

        // Display game outcome
        if (playerScore > computerScore) {
            outcome.textContent = `You win!`;
        } else {
            outcome.textContent = `You lose!`;
        }

        // Display Start over button
        container.appendChild(resetButton);
        
    } else outcome.textContent = '';
}

// Start over function
function resetGame() {
    selectionText.textContent = '';
    resultText.textContent = '';
    score.textContent = '';
    outcome.textContent = '';
}