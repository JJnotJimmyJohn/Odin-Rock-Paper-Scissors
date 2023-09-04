`use strict`

import Math

const choices=['rock','paper','scissors']

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function getPlayerChoice() {
    playerChoice=prompt("What's your choice?")
    if (choices.includes(playerChoice)) {
        return playerChoice;
    } else {
        return;
    }
}


function getResult(playerSelection,computerSelection) {
    if (playerSelection==computerSelection) {
        return [0,0,"Tie!! Your "+ playerSelection + " ties with AI's " + computerSelection];
    } else if ((playerSelection=="rock")&(computerSelection=="scissors")) {
        return [1,0,youWinStatement(playerSelection,computerSelection)];
    } else if ((playerSelection=="paper")&(computerSelection=="rock")) {
        return [1,0,youWinStatement(playerSelection,computerSelection)];
    } else if ((playerSelection=="scissors")&(computerSelection=="paper")) {
        return [1,0,youWinStatement(playerSelection,computerSelection)];
    } else {
        return [0,1,"You lose!! Your "+ playerSelection + " lost to AI's " + computerSelection];
    }
}

function youWinStatement(playerSelection,computerSelection) {
    return "You win!! Your "+ playerSelection + " beats AI's " + computerSelection;
}

function playRound(playerSelection, computerSelection) {
    // your code here!

    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();

    result = getResult(playerSelection,computerSelection)
    
    let body = document.querySelector('body')
    // console.log(body)
    let result_div = document.createElement("div")
    result_div.classList.add('result')
    if (result[0]==1) {
        result_div.innerText = `-- ${playerSelection} > ${computerSelection}!! ${result[2]}!! you get ${result[0]}  point! --`
    } else if (result[1]==1) {
        result_div.innerText = `-- ${playerSelection} < ${computerSelection}!! ${result[2]}!! you get ${result[0]}  point! --`
    } else {
        result_div.innerText = `-- ${playerSelection} = ${computerSelection}!! ${result[2]}!! you get ${result[0]}  point! --`
    }
    body.append(result_div)

    return result
  }


function remove_all() {
    body = document.querySelector('body');
    result_divs = Array.from(body.querySelectorAll('.result'));
    result_divs.forEach(element => {
        console.log('trying to remove')
        element.remove();
        console.log('removed')
    });
}

let running_score = 0;

const rock_button = document.querySelector('#rock')
rock_button.addEventListener("click", () => {
    console.log('Rock is clicked');
    playRound("rock", getComputerChoice());
    
})

const paper_button = document.querySelector('#paper')
paper_button.addEventListener("click", () => {
    console.log('Paper is clicked');
    playRound("paper", getComputerChoice());
})

const scissor_button = document.querySelector('#scissor')
scissor_button.addEventListener("click", () => {
    console.log('Scissor is clicked');
    playRound("scissor", getComputerChoice());
})