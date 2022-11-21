// This is a paper rock scissors game made for Odin Project 11/14/2022 
//and technically the first game I will have programmed (at least in Javascript) - Andy Gauger

//BEGINNING OF GAME/MAIN GAMEFLOW
//gameFlow();

//getting the elements by id (from the buttons)
const rockButton = document.querySelector("rockButton");

//adding event listeners to them
rockButton.addEventlistener("click", gameFlow);

function gameFlow() {
let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();
//console.log("Player Choice: " + playerChoice + " Computer Choice: " + computerChoice);
showdown(playerChoice, computerChoice);
}

//Get the player's choice
function getPlayerChoice() {
    let playerChoice = prompt("Would you like to choose paper, rock or scissors?: ");
    //make sure the player doesn't just hit cancel
    if (playerChoice == null || playerChoice == undefined) {
        console.log("Thanks for hitting cancel, dick! Pick a real answer, coward!"); 
        gameFlow();
    } 
    let playerChoiceLower = playerChoice.toLowerCase();
    console.log("You chose: " + playerChoiceLower);

    if (playerChoiceLower == "paper") {
        return playerChoiceLower;
    } else if (playerChoiceLower == "rock") {
        return playerChoiceLower;
    } else if (playerChoiceLower == "scissors") {
        return playerChoiceLower;
    } else {
        console.log("You didn't make a correct choice. Please type 'Paper', 'Rock', or 'Scissors'.")
        getPlayerChoice();
    }
}

//Get the computer's choice
function getComputerChoice(answer) {
    answer = Math.floor(Math.random() * 3);
    return answer
    
}

//Run the match
function showdown(playerChoiceLower, computerChoice) {
    if (computerChoice == 0 && playerChoiceLower == "paper") {
        console.log("Computer chooses: Rock! You win!");
    } else if (computerChoice == 1 && playerChoiceLower == "paper") {
    console.log("Computer chooses: Paper! You tied!");
    } else if (computerChoice == 2 && playerChoiceLower == "paper") {
        console.log("Computer chooses: Scissors! You lose!");
    } else if (computerChoice == 0 && playerChoiceLower == "rock") {
        console.log("Computer chooses: Rock! You tied!");
    } else if (computerChoice == 1 && playerChoiceLower == "rock") {
        console.log("Computer chooses: Paper! You lose!");
    } else if (computerChoice == 2 && playerChoiceLower == "rock") {
        console.log("Computer chooses: Scissors! You win!");
    } else if (computerChoice == 0 && playerChoiceLower == "scissors") {
        console.log("Computer chooses: Rock! You lose!");
    } else if (computerChoice == 1 && playerChoiceLower == "scissors") {
        console.log("Computer chooses: Paper! You win!");
    } else if (computerChoice == 2 && playerChoiceLower == "scissors") {
        console.log("Computer chooses: Scissors! You tied!");
    }

    endGame();

}


//The End-game function
function endGame() {
    console.log("...........");
    let choice = prompt("Would you like to play again? (y/n) ");

    //Make sure the person didn't just hit "cancel"
    if (choice == null || choice == undefined) {
        console.log("Thanks for hitting cancel, dick!");
    } else {
        let choiceLower = choice.toLowerCase();
        
        if (choiceLower == "y") {
            //go back to the beginning of the game if they pick Y
            gameFlow();
        } else if (choiceLower == "n") {
            //fake escape if they pick no
            console.log("Later!");
        } else {   
            //go back to the top if they don't do Y or N
            console.log("You have entered an inccorect choice.")
            endGame();
        }
    }
}
