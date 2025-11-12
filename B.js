let userscore=0;
let compscore=0;
const choice=document.querySelector(".choice");
const ms=document.querySelector('#msg');
const userscorepara=document.querySelector("#user-score");
const compcorepara=document.querySelector("#comp-score");
const gencomchoice=()=>{
    const opt=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return opt[randIdx];

}
const drawgame=()=>{
    ms.innerText="game is draw";
}
const showinner=(usewin,userChoice,compChoice)=>{
    if(usewin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        ms.innerText=`you win! your ${userChoice} beats ${compChoice}`;
    }
    else{
        compcorepara.innerText=compscore;
          ms.innerText=`you lose! your ${compChoice} beats ${userChoice}`;
    }
}
const playgame=(userChoice)=>{
    console.log("User choice="+userChoice);
}
const compchoice=gencomchoice();
console.log("user choice = ", userChoice);
const compChoice = genCompChoice();
console.log("user choice = ", compChoice);

if (userChoice === compChoice) {
    drawgame();
} else {
    let userWin = true;

    if (userChoice === "rock") {
    
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        
        userWin = compChoice === "scissors" ? false : true;
    } else {
        
        userWin = compChoice === "rock" ? false : true;
    }

    showinner(userWin, userChoice, compChoice);
}
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

