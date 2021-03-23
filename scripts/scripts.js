//Start rock paper scissors game

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
        const gameWinner = document.querySelector('#resultInfo');
        gameWinner.textContent = "The player wins!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        const gameWinner = document.querySelector('#resultInfo');
        gameWinner.textContent = "The computer wins!";
        playerScore = 0;
        computerScore = 0;
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

    //Start drawing game
    
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

    //Start calculator

    const numButtons = document.querySelectorAll(".numButton");
        const operatorButtons = document.querySelectorAll(".opButton");
        const equalButton = document.querySelector("#equals");
        const clearButton = document.querySelector("#clear"); //Queries each button

        let resultDisplay = document.querySelector("#calcResultsContainer");
          resultDisplay.textContent = "";
        let userOperator = ""
        let num1 = 0;
        let num2 = 0; 
        let result = 0; //Initializes values

        var i = 0, length = numButtons.length;
        for (i; i < length; i++) {
            numButtons[i].addEventListener("click", function() {
            storeNumber();
        }); 
        } //Adds number functionality, shows numeric values

        var i = 0, length = operatorButtons.length;
        for (i; i < length; i++) {
            operatorButtons[i].addEventListener("click", function() {
            storeOperator();
        }); 
        } //Adds operator functionality, stores operator value

        equalButton.addEventListener("click", function() {
          num2 = resultDisplay.textContent;
          performOperation(num1, num2, userOperator);
        }); //Evaluates the chosen numbers, performs operations

        clearButton.addEventListener("click", function() {
          resetDisplay();
        }) //Resets the display and sets vars to 0 or ""

        function storeNumber () {
          resultDisplay.textContent += event.target.value;
        }

        function storeOperator () {
          if (event.target.className.match('opButton')) {
            num1 = resultDisplay.textContent;
            userOperator = event.target.value;
            resultDisplay.textContent = "";
            return userOperator;
          }
        }

        function add () {
          result = Number(num1) + Number(num2);
          return result;
        }

        function subtract (num1, num2) {
          result = Number(num1) - Number(num2);
          return result;
        }

        function multiply (num1, num2) {
          result = Number(num1) * Number(num2);
          return result;
        }

        function divide (num1, num2) {
          result = Number(num1) / Number(num2);
          return result;
        }

        function performOperation () {
        switch (userOperator) {
          case userOperator = '+':
            console.log(add(num1, num2));
            resultDisplay.textContent = result;
            break;
          case userOperator = '-':
            console.log(subtract(num1, num2));
            resultDisplay.textContent = result;
            break;
          case userOperator = '*':
            console.log(multiply(num1, num2));
            resultDisplay.textContent = result;
            break;
          case userOperator = '/':
            if (num2 == '0') {
              resultDisplay.textContent = "Did you pay attention in school?";
              break;
            } else {
              console.log(divide(num1, num2));
              resultDisplay.textContent = result;
            }
            break;
          default:
              console.log("Not a valid operation")
              break;
        }
        
      }

        function resetDisplay () {
        resultDisplay.textContent = "";
        num1 = 0;
        num2 = 0; 
        result = 0;
        userOperator = ""
        }
