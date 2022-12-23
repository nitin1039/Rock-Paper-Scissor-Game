const choices = document.querySelectorAll(".choice")
const score = document.querySelector("#score")
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")
console.log(modal)
const scoreboard = {
    player:0,
    computer:0
}

function getComputerChoice(){
    const randomNumber = Math.ceil(Math.random()*100)
        if(randomNumber<=33)
        return "rock"
        else if(randomNumber>33 && randomNumber<=66)
        return "paper"
        else
        return "scissors"
}

function getWinner(p,c){
if(p===c){
    return "draw"
} else if(p==="rock"){
    if(c==="paper"){
        return "computer"
    }else{
        return "player"
    }
}else if(p==="paper"){
    if(c==="rock"){
        return "player"
    }else{
        return "computer"
    }
}else if(p==="scissors"){
    if(c==="paper"){
        return "player"
    }else{
        return "computer"
    }
}
}


function showWinner(winner,computerChoice){
    console.log(computerChoice)
    if(winner == "player"){
        scoreboard.player++;
        result.innerHTML = `
        <h1 class='text-win'>You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }else if(winner==="computer"){
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class='text-lose'>You Lose</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }else{
        result.innerHTML = `
        <h1 class='text-draw'>It's a Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        `
    }
    score.innerHTML = `
        <p>Player : ${scoreboard.player}</p>
        <p>Computer : ${scoreboard.computer}</p>

        `
        modal.style.display = "block"

}

function clearModal(e){
    if(e.target == modal){
        modal.style.display = "none"
    }
}

function restartGame(){
    scoreboard.player = 0
    scoreboard.computer = 0
    score.innerHTML  = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `
    restart.style.display = "none"
}


function play(e){
    // console.log("GAME START",e.target.id)
    restart.style.display = "block"
    let playerChoice = e.target.id
    let computerChoice = getComputerChoice()
    console.log("computerChoice",computerChoice)
    let winner = getWinner(playerChoice,computerChoice)
    showWinner(winner,computerChoice)

}

choices.forEach(function(choice){
    choice.addEventListener("click",play)
})

window.addEventListener("click",clearModal)

restart.addEventListener("click",restartGame)