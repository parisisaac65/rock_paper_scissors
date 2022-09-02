
const container = document.querySelector('#container');

const round = document.createElement('div');
round.classList.toggle('round');

const content = document.createElement('div');
content.classList.toggle('content');

const score = document.createElement('div'); 
score.classList.toggle('score');

const finalScore = document.createElement('div');
finalScore.classList.toggle('finalScore'); 

round.style.cssText = 'color: white; font-size: 20px;';
content.style.cssText = 'color: white'; 
score.style.cssText = 'color: white';
finalScore.style.cssText = 'color: white; font-size: 30px;'; 

const btn = document.createElement('button');
const txt = document.createTextNode('Play Again');
btn.appendChild(txt);
btn.style.cssText= 'height: 25px; width: 40; font-weight:bold;';
btn.addEventListener('click',resetForm);

function resetForm(){
    document.getElementById("myForm").reset(); 
}

let computerSelection; 
let playerSelection;
let winner = '';
let playerScore = 0; 
let computerScore = 0;
let finalWinner = '';
let currRound = 0; 

// function declaration for the computer to randomly return rock paper, or scissors 
function getComputerChoice(){
    const computer_choices = ['rock', 'paper', 'scissors'];
    return computer_choices[Math.floor(Math.random() * computer_choices.length)]; 
}

// function declaration to play a single round of Rock Paper Scissors 
function playRound(playerSelection, computerSelection){
    // rock beats scissors, paper beats rock , scissors beat paper 
    currRound +=1; 
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
        winner = 'tie'
    }
    round.textContent = `Round: ${currRound}`; 
    container.appendChild(round);
    return winner; 
}

// function declaration to display the results after each game played 
function showRoundMessage(){
    // display the results of each round 
    if (winner === 'tie'){
        content.textContent = "It's a Tie!";
    }else if (winner === 'computer'){
        computerScore += 1; 
        content.textContent = `You Lose This Round! ${computerSelection} beats ${playerSelection}`;
    } else if (winner === 'player'){
        playerScore += 1; 
        content.textContent = `You Win This Round! ${playerSelection} beats ${computerSelection}`;
    }
    
    score.textContent = `Computer Score ${computerScore} : Player Score ${playerScore}`; 

    // container.appendChild(round);
    container.appendChild(content);
    container.appendChild(score);
    
    if (computerScore === 5 || playerScore === 5){
        showGameMessage();
        container.appendChild(btn);
    }
}


// function declaration to display the results of the final winner of game 
function showGameMessage(){
    // display the results of the final winner 
    if (computerScore === 5){
        finalScore.textContent = 'Final Winner: Computer'; 
    } else if (playerScore === 5){
        finalScore.textContent = 'Final Winner: Player';
    } 
    container.appendChild(finalScore);
} 

//Create three buttons, one for rock, paper, and scissors
const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', () => {
    playerSelection = 'rock'; 
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    // playRound(playerSelection, getComputerChoice()); 
}); 

const paperBtn = document.querySelector('.paperBtn'); 
paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}); 

const scissorsBtn  = document.querySelector ('.scissorsBtn');
scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection);
}); 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        showRoundMessage();
    })
})



