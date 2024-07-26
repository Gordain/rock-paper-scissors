let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){      //this will prompt the user to type in their choice
    let humanHand = prompt("What is your choice?");
    return humanHand;
}

function playRound(humanChoice, computerChoice){    //this will play a round with the assigned choices
    let text = toLowerCase(humanChoice);    //parses human choice to make it case-insensitive
    let output;
    switch(text){   //nest switch statement to evaluate the humanChoice aginst the computer
        case rock:
            if(computerChoice == rock){
                return output = "Draw!";                
            }else if(computerChoice == paper){
                computerScore++;
                return output = "You lose! Paper beats rock";
            }else{
                humanScore++;
                return output = "You win! Rock beats scissors";
            }
            break;
        case paper:
            if(computerChoice == rock){
                humanScore++;
                return output = "You win! Paper beats rock";
            }else if(computerChoice == paper){
                return output = "Draw!";
            }else{
                computerScore++;
                return output = "You lose! Scissors beats paper";
            }
            break;
        case scissors:
            if(computerChoice == rock){
                computerScore++;
                return output = "You lose! Rock beats scissors";
            }else if(computerChoice == paper){
                humanScore++;
                return output = "You win! Scissors beats paper";
            }else{
                return output = "Draw!";
            }
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();