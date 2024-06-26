let userScore = 0 ;
let compScore = 0 ;
const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    // rock ,paper scissors
    const options = ["rock" , "paper" , "scissors"];
   const randomIndx = Math.floor(Math.random()*3);
   return options[randomIndx];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = " Game was draw.\n Play again" ;
    msg.style.backgroundColor = "crimson";

}

const showWinner = (userWin ,userChoice,compChoice) =>{
    if(userWin){
        userScore ++ ;
        userScorePara.innerText = userScore ;
        console.log("you win");
        msg.innerText = `You win ! \n  your ${userChoice} beats ${compChoice}` ;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore ;
        msg.innerText = `You Lost.. \n ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor = "orange";
    }
}
const playGame = (userChoice)=>{
    console.log("user Choice =" , userChoice)
    const compChoice = genCompChoice();
    console.log("computer Choice =" , compChoice)


    if (userChoice === compChoice){
        // Draw game
        drawGame();
    }
    else{
        let userWin = true ;
        if (userChoice === "rock"){
            // scissors ,paper
            userWin = compChoice ==="paper" ? true : false ;
        }else if(userChoice === "paper"){
            //rock , scissors 
            userWin = compChoice === "scissors" ? true : false ;
        }else{
            // rock , paper 
            userWin = compChoice === "rock" ? true : false ;
        }
        showWinner(userWin , userChoice , compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener('click', ()=> {
        const userChoice = choice.getAttribute("id");
       playGame(userChoice);
    });
});
