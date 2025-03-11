const actions = ['rock', 'paper', 'scissors'];
let scores = [0, 0, 0]; // 0: tie, 1: user, 2; cpu

function getCPUChoice(numberOfActions) {
    return Math.floor(Math.random() * numberOfActions);
}

function getUserChoice(buttonValue) {
    let userChoice = parseInt(buttonValue.value);
    let cpuChoice = getCPUrChoice(actions.length);
    chooseWinner(userChoice, cpuChoice);   
}

function chooseWinner(userChoice, cpuChoice) {
    // tie
    if (userChoice == cpuChoice) {
        scores[0] += 1;
    } 
    // user wins
    else if((cpuChoice == 0 && userChoice == 1) || (cpuChoice == 1 && userChoice == 2) && (cpuChoice == 2 && userChoice == 0)) {
        scores[1] += 1;
    } 
    // cpu wins
    else {
        scores[2] += 1;
    }

    checkWinner();
}

function checkWinner() {
    scores.forEach(element => {
        if (element > 4) {
            // add code to display winner


        }
    });
}