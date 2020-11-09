const THINK_TEXT = "Think of an number between"
const CHOOSE_TEXT = "Is this your number?"
const Guess = document.getElementById("guess")
let playing = false 
let guessNr = 500;
let min = 0;
let max = 1000;

const StartBtn = document.getElementById("startBtn")
StartBtn.addEventListener("click",StartGame)

const HigherBtn = document.getElementById("hiBtn")
HigherBtn.addEventListener("click",GoHigher)
const LowerBtn = document.getElementById("loBtn")
LowerBtn.addEventListener("click",GoLower)

const NrGuessedBtn = document.getElementById("gsBtn")
NrGuessedBtn.addEventListener("click",StartGame)

function StartGame(){
    const HiLoContainer = document.getElementById("HiLoContainer")
    const Text = document.getElementById("text")
    const Range= document.getElementById("range")
    const MinValue = document.getElementById("minValue");
    const MaxValue = document.getElementById("maxValue");
    
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
    guessNr = Math.floor(guessNr);
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