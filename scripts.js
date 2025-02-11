let computerScore = 0;
let humanScore = 0;
let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
    button.addEventListener("click", () => {playRound(button.id)})  //no idea why this works, assuming its calling this function when its clicked, rather than passing function when clicked
});

function getRandomNumber(max){
    return Math.floor(Math.random()*max);   //get a random number between 0 and max
}

function getComputerChoice(){
    let computerHand;
    let x = getRandomNumber(3);  //assign random number to variable x, in this case max
    if(x==0){                     //is 3 as we want a choice of three options
        return computerHand = "rock";
    }else if(x==1){
        return computerHand = "paper";
    }else{
        return computerHand = "scissors";
    }                          
}

/*function getHumanChoice(){      //this will prompt the user to type in their choice
    let humanHand = prompt("What is your choice?");
    return humanHand;
}*/

function playGame(){
    
};

function displayResult(result){
    let resultContainer = document.querySelector(".results"); //reference to results div
    
};

function playRound(playerChoice){    //this will play a round with the assigned choices
    let computerChoice = getComputerChoice();    
    switch(playerChoice){   //nest switch statement to evaluate the humanChoice aginst the computer
        case "rock":
            if(computerChoice == "rock"){
                return console.log("Draw!");                
            }else if(computerChoice == "paper"){
                computerScore = computerScore++;
                return console.log("You lose! Paper beats rock");
            }else{
                humanScore = humanScore++;
                return console.log("You win! Rock beats scissors");
            }
            break;
        case "paper":
            if(computerChoice == "rock"){
                humanScore = humanScore++;
                return console.log("You win! Paper beats rock");
            }else if(computerChoice == "paper"){
                return console.log("Draw!");
            }else{
                computerScore = computerScore++;
                return console.log("You lose! Scissors beats paper");
            }
            break;
        case "scissors":
            if(computerChoice == "rock"){
                computerScore = computerScore++;
                return console.log("You lose! Rock beats scissors");
            }else if(computerChoice == "paper"){
                humanScore = humanScore++;
                return console.log("You win! Scissors beats paper");
            }else{
                return console.log("Draw!");
            }
            break;
    }
}

/*function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        function playRound(humanChoice,computerChoice){
            let text = humanChoice.toLowerCase();    
            switch(text){   
                case "rock":
                    if(computerChoice == "rock"){
                        return console.log("Draw!");                
                    }else if(computerChoice == "paper"){
                        computerScore++;
                        return console.log("You lose! Paper beats rock");
                    }else{
                        humanScore++;
                        return console.log("You win! Rock beats scissors");
                    }
                    break;
                case "paper":
                    if(computerChoice == "rock"){
                        humanScore++;
                        return console.log("You win! Paper beats rock");
                    }else if(computerChoice == "paper"){
                        return console.log("Draw!");
                    }else{
                        computerScore++;
                        return console.log("You lose! Scissors beats paper");
                    }
                    break;
                case "scissors":
                    if(computerChoice == "rock"){
                        computerScore++;
                        return console.log("You lose! Rock beats scissors");
                    }else if(computerChoice == "paper"){
                        humanScore++;
                        return console.log("You win! Scissors beats paper");
                    }else{
                        return console.log("Draw!");
                    }
                    break;
            }
        }
        playRound(humanSelection,computerSelection);
    }
    console.log('Final score, yours: %s and the computers: %s', humanScore, computerScore);
}*/

