let userscore=0;
let computerscore=0;
const userScore_span = document.getElementById("PlayerScore");
const computerScore= document.getElementById("ComputerScore");

const Scoreboard_div=document.querySelector(".Score-board");
const result_div=document.querySelector(".Result > p");
const result2_div=document.querySelector(".User-Action> p");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


// this is used to generate the computer choices
function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];

}
// Creates the win function for the user input and the computer input
// this also changes the score and keeps track of the choices in the log
function win(userChoice,computerChoice) {
    userscore++;
    userScore_span.innerHTML = userscore;
    computerScore.innerHTML=computerscore;
    console.log(userChoice);
    console.log(computerChoice);

    result_div.innerHTML= "YOU WIN"
}

function lose(userChoice,computerChoice) {
    computerscore++;
    userScore_span.innerHTML = userscore;
    computerScore.innerHTML=computerscore;
    console.log(userChoice);
    console.log(computerChoice);

    result_div.innerHTML= "YOU LOSE"
}

function draw(userChoice,computerChoice) {

    userScore_span.innerHTML = userscore;
    computerScore.innerHTML=computerscore;
    console.log(userChoice);
    console.log(computerChoice);

    result_div.innerHTML="Draw";
}

function game(UserChoice) {

    const computerChoice = getComputerChoice();
// switch statements are better than if
    switch (UserChoice + computerChoice){
        case"rs":
        case "pr":
        case "sp":
           win(UserChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(UserChoice,computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            draw(UserChoice,computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");

    })
    paper_div.addEventListener('click', function () {
        game("p");

    })
    scissors_div.addEventListener('click', function () {
        game("s");

    })
}
main();

