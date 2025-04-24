const getComputerChoice = function(){
    let randomNum = Math.floor(Math.random() * 3) + 1
    switch(randomNum){
        case 1:
            return "rock";
        case 2:
            return "paper"
        case 3:
            return "sccisors" 
    }
}

const getHumanChoice = function(){
    return prompt(`"rock","paper" or "sccisors"?`);
}

const playRound = function(computerChoice,humanChoice){
    if((computerChoice === "rock" && humanChoice === "paper")||(computerChoice === "paper" && humanChoice === "sccisors")||(computerChoice === "sccisors" && humanChoice === "rock")){
        humanScore++;
        console.log(`You win! Your ${humanChoice} beats ${computerChoice}`);
    } else if((humanChoice === "rock" && computerChoice === "paper")||(humanChoice === "paper" && computerChoice === "sccisors")||(humanChoice === "sccisors" && computerChoice === "rock")){
        computerScore++;
        console.log(`You lose! Computers ${computerChoice} beats ${humanChoice}`);
    } else{
        console.log("It's a draw.")
    }
}

const checkWinner = function(computerScore, humanScore){
    if(computerScore > humanScore){
        console.log(`Computer won. Human ${humanScore} : Computer ${computerScore}`)
    } else if(humanScore > computerScore){
        console.log(`You won. Human ${humanScore} : Computer ${computerScore}`)
    } else{
        console.log(`It's a draw. Human ${humanScore} : Computer ${computerScore}`)
    }
}

const playGame = function(){
for(let i = 0; i < 5; i++){
    playRound(getComputerChoice(),getHumanChoice())
}
checkWinner(computerScore,humanScore)
}

let humanScore = 0;
let computerScore = 0;

playGame()