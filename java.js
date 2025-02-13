

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

let humanScore = 0
let computerScore = 0
let buttonChoice = document.querySelector("#container")
const div = document.querySelector("#results")
const resultList = document.querySelector("#round-results")
const scoreList = document.querySelector("#round-scores")
const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


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
        const resultItem = document.createElement("li")
        const scoreItem = document.createElement("li")
        const roundResult = document.createElement("span")
        const currentScore = document.createElement("span")
        roundResult.textContent = result
        currentScore.textContent = (`Your Score: ${humanScore} Computer Score: ${computerScore}.`)
        resultItem.appendChild(roundResult)
        resultList.appendChild(resultItem)
        scoreItem.appendChild(currentScore)
        scoreList.prepend(scoreItem)
    
    } else if (humanScore === 5) {
        const resultItem = document.createElement("li")
        const scoreItem = document.createElement("li")
        const roundResult = document.createElement("span")
        const currentScore = document.createElement("span")
        roundResult.textContent = (`You Win! By ${humanScore} points, to ${computerScore} points.`)
        resultItem.appendChild(roundResult)
        resultList.prepend(resultItem)
        buttonChoice.removeChild(rock)
        buttonChoice.removeChild(paper)
        buttonChoice.removeChild(scissors)
        const reset = document.createElement("button")
        reset.textContent = "Reset?"
        reset.setAttribute("style", "padding: 5px 10px; background-color: black; color: white;")
        buttonChoice.append(reset)
        reset.addEventListener("click", () => {
            location.reload();
        })
    } else {
        const resultItem = document.createElement("li")
        const scoreItem = document.createElement("li")
        const roundResult = document.createElement("span")
        const currentScore = document.createElement("span")
        roundResult.textContent = (`You Lose:( By ${computerScore} points, to ${humanScore}`)
        resultItem.appendChild(roundResult)
        resultList.prepend(resultItem)
        buttonChoice.removeChild(rock)
        buttonChoice.removeChild(paper)
        buttonChoice.removeChild(scissors)
        const reset = document.createElement("button")
        reset.textContent = "Reset?"
        reset.setAttribute("style", "padding: 5px 10px; background-color: black; color: white;")
        buttonChoice.append(reset)
        reset.addEventListener("click", () => {
            location.reload();
        })
    }
})



