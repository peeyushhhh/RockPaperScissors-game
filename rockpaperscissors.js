let userScore = 0;
let compScore = 0;
const userScorep = document.querySelector("#count");
const compScorep = document.querySelector("#count2");
const msgDisplay = document.querySelector("#msgDisplay");
console.log(msgDisplay);
const draw = () => {
    console.log("game was draw");
     msgDisplay.innerText= "it was a draw play again :)";
     msgDisplay.style.backgroundColor = "grey";
     msgDisplay.style.Color = "white";

};
const whoWon = (userwin) => {
    if (userwin) {
      
        userScore++;
        userScorep.innerText = userScore;
        msgDisplay.innerText = "you won";
        msgDisplay.style.backgroundColor = "green";
         msgDisplay.style.Color = "white";

    } else {
       
        compScore++;
        compScorep.innerText = compScore;
         msgDisplay.innerText = "you lose";
         msgDisplay.style.backgroundColor = "red";
         msgDisplay.style.Color = "white";
    }
};
const compi = (userChoice) =>{
    console.log("userChoice", userChoice);
    const compChoice= genCompiChoice ();
    console.log("compChoice", compChoice);
    if (userChoice===compChoice){
      draw(); 
    } else {
        let userwin = true;
        if(userChoice==="rock") {
          userwin = compChoice === "paper" ? false:true;
        } else if (userChoice==="paper") {
            userwin = compChoice==="scissor" ? false:true;
        } else if (userChoice==="scissor") {
            userwin = compChoice==="rock" ? false:true;
        }
        whoWon(userwin);
    }
};
    const genCompiChoice = () => {
        const options = ["rock","paper","scissor"];
       const random = Math.floor(Math.random()*3);
       return options[random];
    };
   
const choices = document.querySelectorAll(".game");
choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
       
        compi(userChoice);
    });
});