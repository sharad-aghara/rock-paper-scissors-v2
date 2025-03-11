const actions = ['rock', 'paper', 'scissors'];
const imgItemUrl = ['../icons/stone.png', '../icons/paper.png', '../icons/scissors.png'];
const imgItemAlt = ['rock', 'paper', 'scissors'];

let scores = [0, 0, 0]; // 0: tie, 1: player, 2; cpu
const scoreFormat = ['Player: ', 'CPU: ', 'Tie: '];

function getCPUChoice(numberOfActions) {
    return Math.floor(Math.random() * numberOfActions);
}

function getPlayerChoice(buttonValue) {
    let playerChoice = parseInt(buttonValue.value);
    let cpuChoice = getCPUChoice(actions.length);

    displayChoices(playerChoice, cpuChoice);
    chooseWinner(playerChoice, cpuChoice);   
}

function chooseWinner(playerChoice, cpuChoice) {
    // tie
    if (playerChoice == cpuChoice) {
        scores[2] += 1;
    } 
    // player wins
    else if((cpuChoice == 0 && playerChoice == 1) || (cpuChoice == 1 && playerChoice == 2) && (cpuChoice == 2 && playerChoice == 0)) {
        scores[0] += 1;
    } 
    // cpu wins
    else {
        scores[1] += 1;
    }

    checkWinner();
    updateScore();
}

function checkWinner() {
    scores.forEach(element => {
        if (element > 4) {
            setTimeout(() => {
                alert(scoreFormat[scores.indexOf(element)] + ' wins!');
                scores = [0, 0, 0];
                updateScore();
            }, 1000);
        }
    });
}

function displayChoices(playerChoice, cpuChoice) {
    console.log('displayChoices' + playerChoice + ' ' + cpuChoice);
    
    let imgCPU = document.querySelector('#imgCPU');
    let imgPlayer = document.querySelector('#imgPlayer');

    imgCPU.src = imgItemUrl[cpuChoice];
    imgCPU.alt = imgItemAlt[cpuChoice];

    imgPlayer.src = imgItemUrl[playerChoice];
    imgPlayer.alt = imgItemAlt[playerChoice];

    showGrid();
}

function updateScore() {
    let playerScore = document.querySelector('#txtPlayerScore');
    let cpuScore = document.querySelector('#txtCPUScore');
    let tieScore = document.querySelector('#txtTieScore');

    playerScore.textContent = scores[0];
    cpuScore.textContent = scores[1];
    tieScore.textContent = scores[2];
}

function showGrid() {
    let choiceGrid = document.querySelector('#choiceGrid');
    choiceGrid.style.display = '';
    let imgGrid = document.querySelector('#imgGrid');
    imgGrid.style.display = '';
}

function hideGrid() {
    let choiceGrid = document.querySelector('#choiceGrid');
    choiceGrid.style.display = 'none';
    let imgGrid = document.querySelector('#imgGrid');
    imgGrid.style.display = 'none';
}