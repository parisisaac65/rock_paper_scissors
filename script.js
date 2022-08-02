
// declare global variables computerSelection, playerSelection, winner and tie 
let computerSelection = getComputerChoice();
let playerSelection;
let winner = '';
let tie = false; 

// function declaration for the computer to randomly return rock paper, or scissors 
function getComputerChoice(){
    const computer_choices = ['rock', 'paper', 'scissors'];
    return computer_choices[Math.floor(Math.random() * computer_choices.length)]; 
}

// function declaration to play a single round of Rock Paper Scissors 
function playRound(playerSelection, computerSelection){
    computerSelection = getComputerChoice(); 
    // rock beats scissors, paper beats rock , scissors beat paper 
    if (computerSelection === 'rock' && playerSelection === 'scissors'){
        winner = 'computer';
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
        winner = 'computer';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
        winner = 'computer';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
        winner = 'player';
    } else if (computerSelection === 'rock' && playerSelection === 'paper'){
        winner = 'player';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors'){
        winner = 'player';
    } else {
        tie = true; 
    }
    return winner;
}


// function declaration to display the results after each game played 
function showRoundMessage(){
    // display the results of each round 
    if (winner === 'computer'){
        console.log(`You Lose This Round! ${computerSelection} beats ${playerSelection}`); 
    } else if (winner === 'player'){
        console.log(`You Win This Round! ${playerSelection} beats ${computerSelection}`);
    } else if (tie === true){
        console.log("It's a Tie!");
    } 
}

// function declaration to display the results of the final winner of game 
function showGameMessage(){
        // display the results of the final winner 
        if (computerScore > playerScore){
            console.log(`Final Winner: Computer. Score ${computerScore} : ${playerScore}`);
        } else if (computerScore < playerScore){
            console.log(`Final Winner: Player. Score ${playerScore} : ${computerScore}`);
        } else {
            console.log(`TIE. No one wins. Score ${computerScore} : ${playerScore}`); 
        }
}

//Create three buttons, one for rock, paper, and scissors
const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock'; 
    playRound(playerSelection, computerSelection);
    showRoundMessage();
}); 

const paperBtn = document.querySelector('.paperBtn'); 
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection); 
    showRoundMessage();
}); 

const scissorsBtn  = document.querySelector ('.scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection); 
    showRoundMessage();
}); 



// create two score variables: one for player and one for computer 
let playerScore = 0; 
let computerScore = 0;  

// function declaration to play a 5 round game that keeps score and reports winner or loser at end
// function game(){
//     // use a for loop to play 5 rounds 
//     for (let i = 0; i < 5; i++){
//         // let playerSelection = prompt('Please enter rock, paper, or scissors'); 
//         playerSelection = prompt('Please enter rock, paper, or scissors'); 
//         computerSelection = getComputerChoice();
//         // call playRound function inside for loop 
//         playRound(playerSelection,computerSelection);
//         // if computer wins, increment the computerScore by 1
//         if (winner === 'computer'){
//             computerScore += 1;
//         // if player wins, increment the playerScore by 1 
//         } else if (winner === 'player'){
//             playerScore += 1; 
//         } 
//         showRoundMessage(); 
//     }
//     showGameMessage(); 

    
// }

// call the game function 
// game(); 


