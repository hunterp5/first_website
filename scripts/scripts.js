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
    
    const gridGame = document.querySelector('#gridContainer');
    function makeGrid (size) {
        for (let i = 0; i < size * size; i++) {
            gridElement = document.createElement("div");
            gridElement.classList = "grid-element"
            gridGame.appendChild(gridElement);
            gridElement.addEventListener("mouseover", randomRGB)
            function randomRGB () {
            let r = (Math.floor(Math.random() * 255));
            let g = (Math.floor(Math.random() * 255));
            let b = (Math.floor(Math.random() * 255));
            let color = "rgb("+ r + "," + g + "," + b + ")"
            event.target.style.background = color;
        }
    
    }
    }

    function setGridSize(userSize) {
    gridGame.style.gridTemplateColumns = `repeat(${userSize}, 1fr)`;
    }

    function defaultGrid () {
        setGridSize(16);
        makeGrid(16);
    }

    function newGrid16px () {
        setGridSize(16);
        makeGrid(16);
    }

    function newGrid32px () {
        setGridSize(32);
        makeGrid(32);
    }

    function newGrid64px () {
        setGridSize(64);
        makeGrid(64);
    }

    function clearGrid () {
        const gridArray=Array.from(gridContainer.childNodes);
        gridArray.forEach((element) => {
            gridContainer.removeChild(element);
        });
    }

    function randomRGB () {
        let r = (Math.floor(Math.random * 256));
        let g = (Math.floor(Math.random * 256));
        let b = (Math.floor(Math.random * 256));
        gridElement.style.background = 'black';
    }

    defaultGrid();

    const resetButton = document.querySelector('#drawResetButton');
    resetButton.addEventListener('click', clearGrid);

    const makeNew16pxGrid = document.querySelector('#makeGrid16px');
    makeNew16pxGrid.addEventListener('click', newGrid16px);

    const makeNew32pxGrid = document.querySelector('#makeGrid32px');
    makeNew32pxGrid.addEventListener('click', newGrid32px);

    const makeNew64pxGrid = document.querySelector('#makeGrid64px');
    makeNew64pxGrid.addEventListener('click', newGrid64px);
