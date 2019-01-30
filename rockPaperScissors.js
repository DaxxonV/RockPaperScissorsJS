// Rock paper scissors game in Javascript
// A program which simulates a game of rock, paper, scissors where the computer has a randomly generated choice which is compared with the user choice.


let computerChoice = Math.random();
let computerSelection = '';
if (computerChoice < 0.33) computerSelection = 'rock';
if (computerChoice < 0.66) computerSelection = 'scissors';
if (computerChoice < 1) computerSelection = 'paper';


/* User input version 
let userChoice = prompt("What is your choice? (Rock/paper/scissors)").toLowerCase();
let validChoice = ['rock', 'paper', 'scissors'];
while (validChoice.indexOf(userChoice) === -1) {
    userChoice = prompt(`${userChoice} is not an option (Rock/paper/scissors)`).toLowerCase();
} */


// image click version
let userChoice = '';
let clicked = false;
let winCount = 0;
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


let images = document.getElementsByClassName("image-box")[0];
for (let image of images.children) {
    image.addEventListener("mouseover", function() {
        this.style.cursor = "pointer";
        // this.style.backgroundColor = "Beige";
    })
    
    image.addEventListener("click", function() {
        userChoice = image.alt;

        let results = {
            paper: {rock: 'You win', scissors: 'You lose', paper: 'Tie'},
            rock: {scissors: 'You win', paper: 'You lose', rock: 'Tie'},
            scissors: {paper: 'You win', rock: 'You lose', scissors: 'Tie'}
        }

        let result = results[userChoice][computerSelection];
        if (result === "You win") winCount++;


        document.getElementById('winCount').innerHTML = `Total wins: ${winCount}`;
        
        document.getElementById('result').innerHTML = (`Your choice: ${userChoice} <br> Computers choice: ${computerSelection}<h2>${result}</h2>`);

    })

}




