"use strict"

/*
getComputerChoice randomly returns 'Rock', 'Paper', or 'Scissors'

create function called getComputerChoice
no need for it to have any parameters or pass in arguments, just need to invoke it when needed
there are three possible options for the function to output
use some sort of random number generator to output 1 out of 3 options
since there are three possible outputs, there should be a 1/3 chance between each option or 33% chance overall
return the result of the output



*/

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 100) + 1;
    
    if (compChoice <= 33) {
        compChoice = 'rock';
    } else if (compChoice <= 66) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    };

    return compChoice;
};




/*
Write a function that plays a single round of Rock, Paper, Scissors.
Function takes two parameters: playerSelection and computerSelection.
Hard code the playerSelection, computerSelection will just be invoked from getComputerChoice
Player selection should be case insensitve, so should use .toLowerCase() when examining playerSelection
When comparing the two choices, should use the logical operater && to examine and determine the outcome.
Use an if statement as well to return the statement of who one the round.
Return a string that declares the winner of the round ('You lose, Rock beats Scissors');

*/

// let playerSelection;

// let computerSelection = getComputerChoice();

// function playRound(playerSelection, computerSelection) {
//     // playerSelection = playerSelection.toLowerCase();
//     let outcome;

//     if (playerSelection === 'rock' && computerSelection === 'rock') {
//         outcome = 'Draw! Both players tie!';
//     } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
//         outcome = 'You win! Rock beats scissors!';
//     } else if (playerSelection === 'rock' && computerSelection === 'paper') {
//         outcome = 'You lose! Rock loses to paper!';
//     };

//     if (playerSelection === 'paper' && computerSelection === 'paper') {
//         outcome = 'Draw! Both players tie!';
//     } else if (playerSelection === 'paper' && computerSelection === 'rock') {
//         outcome = 'You win! Paper beats rock!';
//     } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
//         outcome = 'You lose! Paper loses to scissors!';
//     };

//     if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//         outcome = 'Draw! Both players tie!';
//     } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//         outcome = 'You win! Scissors beats paper!';
//     } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//         outcome = 'You lose! Scissors loses to rock!';
//     };

//     return outcome;
    
// }

let playerScore = 0;
let computerScore = 0;

function playRoundRock() {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    let resultText = document.createElement('p');
    let winnerText = document.createElement('p');
    
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        resultText.innerText = `Draw! Both players tie! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        resultText.innerText = `You win! Rock beats scissors! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        resultText.innerText = `You lose! Rock loses to paper! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    };

    if (playerScore == 5 && computerScore < 5) {
        winnerText.innerText = `You are the winner! Score: ${playerScore}-${computerScore}`;
        winnerText.style.color = 'green';
        div.appendChild(winnerText);
    } else if (playerScore < 5 && computerScore == 5) {
        winnerText.innerText = `You are the loser! Score: ${playerScore}-${computerScore}`;
        winnerText.style.color = 'red';
        div.appendChild(winnerText);
    }
}

function playRoundPaper() {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    let resultText = document.createElement('p');
    let winnerText = document.createElement('p');
    
    if (playerSelection === 'paper' && computerSelection === 'paper') {
        resultText.innerText = `Draw! Both players tie! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        resultText.innerText = `You win! Paper beats rock! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        resultText.innerText = `You lose! Paper loses to scissors! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    };

    if (playerScore == 5 && computerScore < 5) {
        winnerText.innerText = `You are the winner! Score: ${playerScore}-${computerScore}`;
        winnerText.style.color = 'green';
        div.appendChild(winnerText);
    } else if (playerScore < 5 && computerScore == 5) {
        winnerText.innerText = `You are the loser! Score: ${playerScore}-${computerScore}`;
        winnerText.style.color = 'red';
        div.appendChild(winnerText);
    }
}

function playRoundScissors() {
    let playerSelection = 'scissors';
    let computerSelection = getComputerChoice();
    let resultText = document.createElement('p');
    let winnerText = document.createElement('p');
    
    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        resultText.innerText = `Draw! Both players tie! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        resultText.innerText = `You win! Scissors beats paper! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        resultText.innerText = `You lose! Scissors loses to rock! Player: ${playerScore} Computer: ${computerScore}`;
        div.appendChild(resultText);
    };

    if (playerScore == 5 && computerScore < 5) {
        winnerText.innerText = `You are the winner! Score: ${playerScore}-${computerScore}`;
        winnerText.style.color = 'green';
        div.appendChild(winnerText);
    } else if (playerScore < 5 && computerScore == 5) {
        winnerText.innerText = `You are the loser! Score: ${playerScore}-${computerScore}`;
        winnerText.style.color = 'red';
        div.appendChild(winnerText);
    }
}


/*

Write a new function called game()
use the previous function inside to play a 5 round game that keeps score and reports a winner or loser at the end
need to call playRound function 5 times in a row
use a for loop to call the function 5 times.
use console.log to display the results of each round and the winner at the end
use prompt() to get input from the user

*/

// function game() {
//     let result;
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//     playerSelection = prompt('Rock, paper, or scissors?');
//     computerSelection = getComputerChoice();
//     result = playRound(playerSelection, computerSelection);
    
//     switch(result) {
//         case 'Draw! Both players tie!': playerScore = playerScore + 0;
//         break;

//         case 'You win! Rock beats scissors!': playerScore++;
//         break;

//         case 'You win! Paper beats rock!': playerScore++;
//         break;

//         case 'You win! Scissors beats paper!': playerScore++;
//         break;

//         default: computerScore++;
//     }

//     resultText.innerText = `${result} Player Score: ${playerScore} - Computer Score ${computerScore}`);
// }
//     if (playerScore > computerScore) {
//         resultText.innerText = `Player wins! ${playerScore} - ${computerScore}`);
//     } else if (playerScore < computerScore) {
//         resultText.innerText = `Computer wins! ${playerScore} - ${computerScore}`);
//     } else {
//         resultText.innerText = `Tie! Nobody won! ${playerScore} - ${computerScore}`);
//     };
// }


/*
Create three buttons, one for each selection. 
Add an event listener to the buttons that call your playRound 
function with the correct playerSelection every time a button is clicked. 
(you can keep the console.logs for this step)
*/

const body = document.querySelector('body');
const buttonsDiv = document.querySelector('.buttons');

const results = document.querySelector('#results');

const button1 = document.querySelector('#rock');
button1.addEventListener('click', playRoundRock);

const button2 = document.querySelector('#paper');
button2.addEventListener('click', playRoundPaper);


const button3 = document.createElement('button');
button3.setAttribute('id', 'scissors');
button3.setAttribute('class', 'button');
button3.textContent = 'Scissors'; 

button3.addEventListener('click', playRoundScissors);
buttonsDiv.appendChild(button3);


const div = document.querySelector('#results');

