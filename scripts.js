function getRandomNumber(max){
    return Math.floor(Math.random()*max);   //get a random number between 0 and max
}

function getComputerChoice(){
    let hand;
    let x = getRandomNumber(3);  //assign random number to variable x, in this case max
    if(x=0){                     //is 3 as we want a choice of three options
        return hand = "rock";
    }else if(x=1){
        return hand = "paper";
    }else{
        return hand = "scissors";
    }                          
}