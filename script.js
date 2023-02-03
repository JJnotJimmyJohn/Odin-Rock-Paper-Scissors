// alert("here you are!!")

// console.log("Logging.............")

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
        return "Tie!! Your "+ playerSelection + " ties with AI's " + computerSelection;
    } else if ((playerSelection=="rock")&(computerSelection=="scissors")) {
        return youWinStatement(playerSelection,computerSelection);
    } else if ((playerSelection=="paper")&(computerSelection=="rock")) {
        return youWinStatement(playerSelection,computerSelection);
    } else if ((playerSelection=="scissors")&(computerSelection=="paper")) {
        return youWinStatement(playerSelection,computerSelection);
    } else {
        return "You lose!! Your "+ playerSelection + " lost to AI's " + computerSelection;
    }
}

function youWinStatement(playerSelection,computerSelection) {
    return "You win!! Your "+ playerSelection + " beats AI's " + computerSelection
}

function playRound(playerSelection, computerSelection) {
    // your code here!

    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    
    console.log(getResult(playerSelection,computerSelection));
  }


// playRound(getPlayerChoice(),getComputerChoice())
