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
        compChoice = 'Rock';
    } else if (compChoice <= 66) {
        compChoice = 'Paper';
    } else {
        compChoice = 'Scissors';
    };

    return compChoice;
};

console.log(getComputerChoice());




