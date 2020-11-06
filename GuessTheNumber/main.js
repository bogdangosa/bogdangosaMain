
const StartBtn = document.getElementById("startBtn");
const Guess = document.getElementById("guess");
const HiLoContainer = document.getElementById("HiLoContainer");
const HigherBtn = document.getElementById("hiBtn");
const LowerBtn = document.getElementById("loBtn");
let guessNr = 500;
let min = 0;
let max = 1000;
StartBtn.addEventListener("click",StartGame);
HigherBtn.addEventListener("click",GoHigher);
LowerBtn.addEventListener("click",GoLower);

function StartGame(){
    StartBtn.classList.add("hide");
    Guess.classList.remove("hide");
    HiLoContainer.classList.remove("hide");
}


function GoHigher(){
    min = guessNr+1;
    guessNr = (min+max)/2;
    guessNr = Math.round(guessNr);
    Guess.innerHTML = guessNr
}
function GoLower(){
    max = guessNr - 1;
    guessNr = (min+max)/2;
    guessNr = Math.round(guessNr);
    Guess.innerHTML = guessNr 
}
