const THINK_TEXT = "Think of an number between"
const CHOOSE_TEXT = "Is this your number?"
const StartBtn = document.getElementById("startBtn")
const Guess = document.getElementById("guess")
const HiLoContainer = document.getElementById("HiLoContainer")
const HigherBtn = document.getElementById("hiBtn")
const LowerBtn = document.getElementById("loBtn")
const NrGuessedBtn = document.getElementById("gsBtn")
const Text = document.getElementById("text")
const Range= document.getElementById("range")
let playing = false 
let guessNr = 500;
let min = 0;
let max = 1000;


StartBtn.addEventListener("click",StartGame)
HigherBtn.addEventListener("click",GoHigher)
LowerBtn.addEventListener("click",GoLower)
NrGuessedBtn.addEventListener("click",StartGame)

function StartGame(){
    let MinValue = document.getElementById("minValue");
    let MaxValue = document.getElementById("maxValue");
    min = parseInt(MinValue.innerHTML)
    max = parseInt(MaxValue.innerHTML)
    if(!VerifyMinMaxValues()){
        min=0
        max=1000
        MinValue.innerHTML = min
        MaxValue.innerHTML = max
        alert("Write valid min max values")
        return;
    }
    guessNr = Average();
    Guess.innerHTML = guessNr
    StartBtn.classList.toggle("hide")
    Guess.classList.toggle("hide")
    HiLoContainer.classList.toggle("hide")
    Range.classList.toggle("hide")
    if(playing)
        Text.innerHTML = THINK_TEXT;
    else
        Text.innerHTML = CHOOSE_TEXT;
    playing=!playing;
}
function VerifyMinMaxValues(){
    if(min>=max)
        return false
    if(isNaN(min) || isNaN(max))
        return false
    return true
}



function GoHigher(){
    min = guessNr+1;
    guessNr = Average();
    guessNr = Math.floor(guessNr);
    Guess.innerHTML = guessNr
}
function GoLower(){
    max = guessNr - 1;
    guessNr = Average();
    guessNr = Math.ceil(guessNr);
    Guess.innerHTML = guessNr 
}

function Average(){
    return (min+max)/2;
}