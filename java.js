

function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.3) {
        return "ROCK"
    } else if (choice <= 0.6) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}
/*function getHumanChoice() {
    let humchoice = prompt("Please enter your choice. Rock, Paper or Scissors: ")
    if (humchoice.length === 0) {
        return "Invalid Input"
    }
    humchoice = humchoice.toLowerCase()
    if (humchoice === "rock") {
        return "ROCK"
    } else if (humchoice === "paper") {
        return "PAPER"
    } else if (humchoice === "scissors") {
        return "SCISSORS"
    } else {
        return "Invalid Input"
    }
}*/

function playRound(humanChoice, compChoice) {
    if (humanChoice === "ROCK") {
        if (compChoice === "SCISSORS") {
            humanScore++
            let result = "You win! Rock beats Scissors!"
            return result
        } else if (compChoice === "PAPER") {
            computerScore++
            return "You lose! Paper beats Rock!"
        } else {
            return "Draw!!!!!!!"
        }
    } else if (humanChoice === "PAPER") {
        if (compChoice === "SCISSORS") {
            computerScore++
            return "You lose! Scissors beats Paper!"
        } else if ( compChoice === "ROCK") {
            humanScore++
            return "You win! Paper beats Rock"
        } else {
            return "Draw!!!!!!"
        }
    } else {
        if (compChoice === "PAPER") {
            humanScore++
            return "You win! Scissors beats Paper!"
        } else if (compChoice === "ROCK") {
            computerScore++
            return "You lose! Rock beats Scissors"
        } else {
            return "Draw!!!!!!"
        }
    }
}

function playGame() {
    let result = playRound(getHumanChoice(), getComputerChoice()) 
    console.log(result)
    console.log("Your Score:", humanScore, ". Computer Score:", computerScore, ".")
    if (humanScore > computerScore) {
        return console.log("You Win! By", humanScore, "points, to", computerScore, "points.")
    } else if (humanScore < computerScore) {
        return console.log("You Lose:( By", computerScore, "points, to", humanScore, "points.")
    } else {
        return console.log("Draw! You both had", humanScore, "points.")
    }
}

let humanScore = 0
let computerScore = 0
let buttonChoice = document.querySelector(".container")
const div = document.querySelector("#results")
const list = document.querySelector("ul")
const listItem = document.createElement("li")
const span = document.createElement("span")


buttonChoice.addEventListener("click", (e) => {
    let target = e.target
    let humanChoice = ""
    /* Find out what button was pressed and assign human choice*/
    switch(target.id) {
        case "rock":
            humanChoice = "ROCK";
            break;
        case "paper":
            humanChoice = "PAPER";
            break;
        case "scissors":
            humanChoice = "SCISSORS";
            break;

    }
    /* play a round after getting computer choice*/
    let result = playRound(humanChoice, getComputerChoice())

    if (humanScore < 5 && computerScore < 5) {
        span.textContent = result
        listItem.appendChild(span)
        list.appendChild(listItem)
    } else if (humanScore === 5) {
        span.textContent = "You Win! By", humanScore, "points, to", computerScore, "points.";
        listItem.appendChild(span)
        list.appendChild(listItem)
    } else {
        span.textContent = "You Lose:( By", computerScore, "points, to", humanScore, "points."
        listItem.appendChild(span)
        list.appendChild(listItem)
    }
})


