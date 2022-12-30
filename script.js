//Randomly return rock, paper, or scissors
//Store computer's choice
//Generate a random number
//If 0 < n ≤ 0.33 => rock
//If 0.33 < n ≤ 0.66 => paper
//If 0.66 < n ≤ 1 => scissors

let computerChoice;

function getComputerChoice() {
    let n = Math.random()

    console.log(n);

    switch(true) {
        case n <= 0.33:
        computerChoice = 'rock'
        break;

        case n <= 0.66:
        computerChoice = 'paper'
        break;

        case n <= 1:
        computerChoice = 'scissors'
        break;
    }
    
    console.log(computerChoice);
}

getComputerChoice();

//Play a single round of rock paper scissors.
//Take player's selection

//Take computer's selection

//Determine winner

//Declare winner


//Keep track of 5 rounds