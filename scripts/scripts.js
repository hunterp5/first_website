function inputConversion () {
    let userPrompt = prompt("Rock, Paper, Scissors!");
        userInput = userPrompt.toLowerCase();
    return userInput;
}

function generateRandom () {
    computerSelection = [Math.floor((Math.random()) * (3))];
    return computerSelection;
}

function playRound (userInput, computerSelection) {
    
    let tie = "This round is a tie,";
        lose = "You lose this round,";
        win = "You win this round,";

    switch (userInput) {
            case userInput = "1":
                if (computerSelection == 0) {
                    result = tie;
                } else if (computerSelection == 1) {
                    result = lose;
                } else if (computerSelection == 2) {
                    result = win;
                }
                break;
        
            case userInput = "2":
                if (computerSelection == 0) {
                    result = win;
                } else if (computerSelection == 1) {
                    result = tie;               
                } else if (computerSelection == 2) {
                    result = lose;
                }
                break;

            case userInput = "3":
                if (computerSelection == 0) {
                    result = lose;
                } else if (computerSelection == 1) {
                    result = win;
                } else if (computerSelection == 2) {
                    result = tie;
                }
                break;
            
            default:
                console.log("You did not make a valid selection");
                break;
    }
    return result;
}

let playerScore = 0;
let computerScore = 0;

function checkWinner () {
    if (playerScore == 5) {
        const winner = document.querySelector('p');
        const gameWinner = document.querySelector('#resultInfo');
        gameWinner.textContent = "The player wins!";
        playerScore = 0;
        computerScore = 0;
        return playerScore;
        return computerScore;
    } else if (computerScore == 5) {
        const winner = document.querySelector('p');
        const gameWinner = document.querySelector('#resultInfo');
        gameWinner.textContent = "The computer wins!";
        playerScore = 0;
        computerScore = 0;
        return playerScore;
        return computerScore;
    } else {
        return playerScore;
        return computerScore;
    }
}

function addScore () {
        let items = ['Rock!', 'Paper!', 'Scissors!'];
        if (result == win) {
                playerScore += 1;
                const score = document.querySelector('p');
                const resultInfo = document.querySelector('#resultInfo');
                resultInfo.textContent = result + " the computer chose " + items[computerSelection]
                score.textContent = "Your score is " + playerScore + "  ||  " + "The computer's score is " + computerScore;
                
            }  else if (result == lose) {
                computerScore += 1;
                const score = document.querySelector('p');
                const resultInfo = document.querySelector('#resultInfo');
                resultInfo.textContent = result + " the computer chose " + items[computerSelection]
                score.textContent = "Your score is " + playerScore + "  ||  " + "The computer's score is " + computerScore;

            }  else {
                const score = document.querySelector('p');
                const resultInfo = document.querySelector('#resultInfo');
                resultInfo.textContent = result + " the computer chose " + items[computerSelection]
                score.textContent = "Your score is " + playerScore + "  ||  " + "The computer's score is " + computerScore;
            }
            return playerScore;
            return computerScore; 
        }


    const button1 = document.querySelector('#chooseRock');
    button1.addEventListener('click', () => {
        userInput = '1';
        generateRandom();
        playRound(userInput, computerSelection);
        addScore();
        checkWinner();
        });
    
    const button2 = document.querySelector('#choosePaper');
    button2.addEventListener('click', () => {
        userInput = '2';
        generateRandom();
        playRound(userInput, computerSelection);
        addScore();
        checkWinner();
        });

    const button3 = document.querySelector('#chooseScissors');
    button3.addEventListener('click', () => {
        userInput = '3';
        generateRandom();
        playRound(userInput, computerSelection);
        addScore();
        checkWinner();
        });


let container = document.querySelector('#drawGame');
let rows = document.getElementsByClassName("gridRow")
let cells = document.getElementsByClassName("gridColumns")

function makeRows (row) {
for (let i=0; i < row; i++) {
let newRow = document.createElement("div");
container.appendChild(newRow).className = "gridRow";
console.log(newRow);
}  
} 

function makeColumns (col) {
for (let a=0; a < col; a++) {
for (b=0; b < col; b++) {
let newColumn = document.createElement("div");
newColumn.textContent = "d"
rows[b].appendChild(newColumn).className = "gridColumns";
}
}
}

function defaultGrid () {
makeRows(30); 
makeColumns(30);
}

defaultGrid()