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

let playerSelection = 'sCISSORS';

let computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let outcome;

    if (playerSelection === 'rock' && computerSelection === 'rock') {
        outcome = 'Draw! Both players tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        outcome = 'You win! Rock beats scissors!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        outcome = 'You lose! Rock loses to paper!';
    };

    if (playerSelection === 'paper' && computerSelection === 'paper') {
        outcome = 'Draw! Both players tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        outcome = 'You win! Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        outcome = 'You lose! Paper loses to scissors!';
    };

    if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        outcome = 'Draw! Both players tie!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        outcome = 'You win! Scissors beats paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        outcome = 'You lose! Scissors loses to rock!';
    };

    return outcome;
    
}

console.log(playRound(playerSelection, computerSelection));