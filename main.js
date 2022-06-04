const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const screenContent = document.getElementById("winner");
const screenInfo = document.getElementById("info");

let botWinsCount = 0;
let userWinsCount = 0;
let tiesCount = 0;

const userWinsDisplay = document.getElementById("userWins")
const botWinsDisplay = document.getElementById("botWins")
const tiesDisplay = document.getElementById("ties")

function optionGenerator(){
    let options = ["rock", "paper", "scissors", "rock", "paper", "scissors", "rock", "paper", "scissors"];
    let ranNum = Math.floor(Math.random() * 8 + 1)

    let botChoice = options[ranNum];
    console.log(ranNum)
    
    return botChoice;
}

function updateStats() {
    userWinsDisplay.innerHTML = "User Wins: " + userWinsCount;
    botWinsDisplay.innerHTML = "Bot Wins: " + botWinsCount;
    tiesDisplay.innerHTML = "Ties: " + tiesCount;
}
function botWins(userInput, botInput) {
    screenContent.innerHTML = "Bot Wins";
    info.innerHTML = "User choosed: " + "<span class=\"inputs\">" + userInput + "</span>" + " \n " + "Bot choosed: " + "<span class=\"inputs\"> " + botInput + "</span>";
    botWinsCount += 1;
    updateStats();
}

function userWins(userInput, botInput) {
    screenContent.innerHTML = "User Wins";
    info.innerHTML = "User choosed: " + "<span class=\"inputs\">" + userInput + "</span>" + " \n " + "Bot choosed: " + "<span class=\"inputs\"> " + botInput + "</span>";
    userWinsCount += 1;
    updateStats();
}

function tie(userInput, botInput) {
    screenContent.innerHTML = "Tie"
    info.innerHTML = "User choosed: " + "<span class=\"inputs\">" + userInput + "</span>" + " \n " + "Bot choosed: " + "<span class=\"inputs\"> " + botInput + "</span>";
    tiesCount += 1;
    updateStats();
}

rockBtn.onclick = function(){
    let userInput = "rock";
    let botChoice = optionGenerator();
    switch (botChoice) {
        case ("rock"):
            tie(userInput, botChoice);
            break;
        case ("paper"):
            botWins(userInput, botChoice);
            break;
        case ("scissors"):
            userWins(userInput, botChoice);
            break;
    }
    console.log(botChoice);
}

    paperBtn.onclick = function(){
        let userInput = "paper";
        let botChoice = optionGenerator();
        switch (botChoice) {
            case ("rock"):
                userWins(userInput, botChoice);
                break;
            case ("paper"):
                tie(userInput, botChoice);
                break;
            case ("scissors"):
                botWins(userInput, botChoice);
                break;
        }
        console.log(botChoice);
}

scissorsBtn.onclick = function(){
    let userInput = "scissors";
    let botChoice = optionGenerator();
    switch (botChoice) {
        case ("rock"):
            botWins(userInput, botChoice);
            break;
        case ("paper"):
            userWins(userInput, botChoice);
            break;
        case ("scissors"):
            tie(userInput, botChoice);
            break;
    }
    console.log(botChoice);
}




// themes
const redTheme = document.getElementById("red");
const normalTheme = document.getElementById("normal");
const greenTheme = document.getElementById("green");

themeStyle = document.getElementById("style")

redTheme.onclick = function(){
    themeStyle.href = "css/red.css";
}

normalTheme.onclick = function(){
    themeStyle.href = "css/general.css";
}

greenTheme.onclick = function(){
    themeStyle.href = "css/green.css";
}