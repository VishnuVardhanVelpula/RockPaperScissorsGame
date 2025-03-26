let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const u = document.querySelector("#user-score");
const c = document.querySelector("#comp-score");

drawGame = () => {
    console.log("Draw Game!!");
    msg.innerText = "Game is Draw!"
}

showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        console.log("User Won!");   
        msg.innerText = "Your choice: " + userChoice + ", Computer choice: " + compChoice + ". You Won!";
        user_score +=1;
        u.innerText = user_score;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("Computer Won!");
        msg.innerText = "Your choice: " + userChoice + ", Computer choice: " + compChoice + ". Computer Won!";
        msg.style.backgroundColor = "red";
        computer_score +=1;
        c.innerText = computer_score;
    }
}
const getCompChoice= () => {
    const options = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    console.log(userChoice,compChoice);
    if (userChoice===compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice=="rock") {
            userWin = userChoice=="paper"?false:true;
        }
        else if (userChoice == "paper") {
            userWin = compChoice == "scissors" ? false : true;
        } else if (userChoice == "scissors") {
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}
choices.forEach((choice)=> {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
