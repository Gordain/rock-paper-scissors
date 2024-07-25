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
    let humanHand;
}

console.log(getComputerChoice());