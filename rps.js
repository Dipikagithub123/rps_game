let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");
const drawGame=() => {
    console.log("game was draw");
    msg.innerText="Game was draw,Play again!";
    msg.style.backgroundColor="#081b31";
}
const genCompChoice=() => {
    const options = ["rock" ,"paper" ,"scissor"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}
const showWinner =(userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userscorePara.innerText = userScore;
        
        msg.innerText= `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorePara.innerText= compScore;
        
        msg.innerText=`You Lose!  computer ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor="red";
    }
}
const playGame= (userChoice) =>{
    console.log("user choice=" ,userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice=" , compChoice);

    if(userChoice===compChoice){
        //game draw
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice === "rock") {
            //scissor,paper
            userWin= compChoice ==="paper" ? false: true;
        }else if(userChoice=== "paper"){
            //scissor,rock
            userWin = compChoice === "rock" ? true: false;
        }else{
            //rock,paper
            userWin= compChoice=== "rock" ? false: true;
        }
        showWinner(userWin, userChoice ,compChoice);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice= choice.getAttribute("id")
       console.log("choice was clicked", userChoice);
       playGame(userChoice);
    })
})