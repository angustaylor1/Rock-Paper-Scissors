console.log('Hello World!')

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
function getHumanChoice() {
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
            compScore++
            return "You lose! Rock beats Scissors"
        } else {
            return "Draw!!!!!!"
        }
    }
}

function playGame() {
    let result = playRound(getHumanChoice(), getComputerChoice())
    console.log(result)
    console.log("Your Score: ", humanScore, ". Computer Score: ", computerScore, ".")

    result = playRound(getHumanChoice(), getComputerChoice())
    console.log(result)
    console.log("Your Score: ", humanScore, ". Computer Score: ", computerScore, ".")

    result = playRound(getHumanChoice(), getComputerChoice())
    console.log(result)
    console.log("Your Score: ", humanScore, ". Computer Score: ", computerScore, ".")

    result = playRound(getHumanChoice(), getComputerChoice())
    console.log(result)
    console.log("Your Score: ", humanScore, ". Computer Score: ", computerScore, ".")

    result = playRound(getHumanChoice(), getComputerChoice())
    console.log(result)
    console.log("Your Score: ", humanScore, ". Computer Score: ", computerScore, ".")

    if (humanScore > computerScore) {
        return console.log("You Win! By ", humanScore, "points, to", computerScore, "points.")
    } else if (humanScore < computerScore) {
        return console.log("You Lose:( By ", computerScore, "points, to", humanScore, "points.")
    } else {
        return console.log("Draw! You both had ", humanScore, "points.")
    }
}

let humanScore = 0
let computerScore = 0

console.log(playRound(getHumanChoice(), getComputerChoice()))