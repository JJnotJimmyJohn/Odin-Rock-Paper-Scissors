`use strict`

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
    
    console.log(result[2],'!! you get '+result[0]+ ' point!');

    return result
  }

function game(nRound=5) {
    let yourPoint=0
    let aiPoint=0
    for (let i=0;i<nRound-1;i++) {
        roundResult=playRound(getPlayerChoice(),getComputerChoice())
        yourPoint=yourPoint+roundResult[0]
        aiPoint=aiPoint+roundResult[1]
        console.log('Game--'+(i+1),'\nCurrent Scores: '+yourPoint+' : '+ aiPoint)
    }
    if (yourPoint>aiPoint) {
        console.log(': ) You won!!!!')
    } else if (yourPoint<aiPoint) {
        console.log(':( You Lost!!!!')
    } else {
        console.log('Thats a tie!!!!')
    }
}