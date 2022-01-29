const container = document.querySelector(".container")
const main = document.querySelector(".main")
const gamePlayMain = document.querySelector(".gameplay-main")
const currentScore = document.getElementById("score")
const rulesBtn = document.getElementById("rules")
const yourPick = document.querySelector(".your-pick")
const opponentPick = document.querySelector(".opponent-pick")
const playAgainContainer = document.querySelector(".play-again-container")
const Status = document.querySelector(".status")
const playAgainBtn = document.getElementById("play-again")
const allChoices = document.querySelectorAll(".main .box")
const rulesBox = document.querySelector(".rules-box")
const closeBtn = document.querySelector(".close-rules-btn")

const opponentPlay = ["rock","paper","scissors"]

allChoices.forEach(choice => {
    displayGame(choice)
})

function displayGame(choice) {
    choice.addEventListener("click",() => {
        let status = ""
        let randomNumber = Math.floor(Math.random() * 3)
        let chosen = choice.classList[0]
        main.style.display = "none"
        gamePlayMain.style.display = "flex"
        yourPick.src = `./images/icon-${chosen}.svg`
        opponentPick.src = `./images/icon-${opponentPlay[randomNumber]}.svg`

        if (chosen === "rock" && randomNumber === 0) {
            status = "draw"
        }else if (chosen === "rock" && randomNumber === 1) {
            status = "lost"
        }else if (chosen === "rock" && randomNumber === 2) {
            status = "won"
        }

        if (chosen === "paper" && randomNumber === 0) {
            status = "won"
        }else if (chosen === "paper" && randomNumber === 1) {
            status = "draw"
        }else if (chosen === "paper" && randomNumber === 2){
            status = "lost"
        }

        if (chosen === "scissors" && randomNumber === 0) {
            status = "lost"
        }else if (chosen === "scissors" && randomNumber === 1){
            status = "won"
        }else if (chosen === "scissors" && randomNumber === 2){
            status = "draw"
        }

        displayPlayAgain(status)
        addScore()
    })
}
function displayPlayAgain(status) {
    playAgainContainer.style.display = "flex"
    if (status !== "draw") {
        Status.innerHTML = `YOU ${status.toUpperCase()}`
    }else {
        Status.innerHTML = `DRAW`
    }
    if (status === "won") {
        playAgainBtn.style.color = "#4bb543"

    }else if(status === "lost"){
        playAgainBtn.style.color = "hsl(349, 70%, 56%)"
    }else {
        playAgainBtn.style.color = "#000"
    }
}

function addScore() {
    if (Status.innerHTML === "YOU WON") {
        currentScore.innerText++
    }else {
        return;
    }
    localStorage.setItem("score",currentScore.innerText)
}

getScoreFromLS()

function getScoreFromLS() {
    if (localStorage.getItem("score")) {
        currentScore.innerText = localStorage.getItem("score")
    }else {
        currentScore.innerText = 0
    }
}

playAgainBtn.addEventListener("click" , displayMain)

function displayMain() {
    main.style.display = "flex"
    gamePlayMain.style.display = "none"
}

rulesBtn.addEventListener("click" , showRules)

function showRules() {
    rulesBox.style.display = "flex"
    container.style.cssText = "filter:blur(3px); z-index:-1"
}

closeBtn.addEventListener("click" , removeRules)

function removeRules() {
    rulesBox.style.display = "none"
    container.style.cssText = "filter:unset; z-index:unset"
}