
// function declaration for the computer to randomly return rock paper, or scissors
function computerPlay(){
    const options = ['rock', 'paper', 'scissors']; 
    return options[Math.floor(Math.random() * options.length)]; 
}

//declare global variables playerWin and playerTie 
let playerWin; 
let playerTie; 

//function declaration to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    playerWin = false; 
    playerTie = false;

    //make playSelection parameter case-insensitive 
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection){
        playerTie = true;
        return playerTie;
        //return `TIE! You both entered ${playerSelection}`; 
    } else if (playerSelection=== 'rock' && computerSelection === 'scissors'){
        playerWin = true; 
        // return 'You Win! Rock beats Scissors'; 
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        playerWin = false; 
        // return 'You Lose! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        playerWin = true;  
        // return 'You Win! Paper beats Rock'; 
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        playerWin = false; 
        // return 'You Lose! Paper beats Rock'; 
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        playerWin = true; 
        // return 'You Win! Scissors beat Paper'; 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        playerWin = false; 
        // return 'You Lose! Scissors beat Paper';
    }
    return playerWin; 
}

function isValid(playerSelection){
    if (playerSelection === null || playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
        return false;
    }
    return true; 
}

function showMessage(){
    if (playerTie) {
        console.log(`TIE! You both entered ${computerSelection}`);}
    else if (playerWin) {
        console.log(`You Win! ${playerSelection} beat(s) ${computerSelection}`);}
    else{
        console.log(`You Lose! ${computerSelection} beat(s) ${playerSelection}`);}
}


// function declaration to play a 5 round game that keeps score and reports winner or loser at end 
function game(){
    // create two score variables: one for computer and one for user 
    let playerScore = 0; 
    let computerScore = 0; 
    // use for loop to play 5 rounds 
    for (let i = 1; i < 6; i++){
    //call playRound function inside for loop 
        playerSelection = prompt('Please enter rock, paper, scissors to play: ');
        if (isValid(playerSelection)) {
            playerSelection = playerSelection;
        }
        else {
            playerSelection = prompt('INVALID: Please enter rock, paper, scissors to play: ');
        }
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        showMessage(); 
 
    //if player wins, increment the playerScore by 1 
        if (playerWin){
            playerScore++;
    //if computer wins, increment the computerScore by 1 
        } else if (playerWin === false && playerTie === false) {
            computerScore++; 
        } 
    //display the results of each round
        console.log(`Round: ${i} Player Score: ${playerScore}   Computer Score: ${computerScore}`); 
    }

    //display the results of the final winner 
    if (playerScore > computerScore){
        console.log('Final Winner: YOU!');
    }
    else if (playerScore < computerScore){
        console.log('Final Winner: Computer!');
    }
    else if (playerScore === computerScore){
        console.log('No Winner. TIED');
    }
}



// Ask the user to input either rock, paper, or scissors 
// let playerSelection = prompt('Please enter rock, paper, scissors to play: ');
// let computerSelection = computerPlay();
console.log(game()); 