const X_CLASS = 'xCell'
const CIRCLE_CLASS = 'circleCell'
const X_MSG='X Turn'
const CIRCLE_MSG='Circle Turn'
const CellElements = document.querySelectorAll('[data-cell]')
const TurnMsg = document.getElementById('TurnMsg')
const FinalMsgContainer = document.getElementById('FinalMsgContainer')
const FinalMsg = document.getElementById('FinalMsg')
let CircleTurn = false
let cellsChecked = 0

CellElements.forEach(cell =>{   
    cell.addEventListener('click',CellClicked ,{once: true})
})

function CellClicked(e) {
    const cell = e.target

    if(CircleTurn){
        cell.classList.add(CIRCLE_CLASS)
        TurnMsg.innerHTML=X_MSG
    }
    else {
        cell.classList.add(X_CLASS)
        TurnMsg.innerHTML=CIRCLE_MSG
    }
    if(Verif()){
        FinalMsgContainer.style.display="flex"
        if(CircleTurn)
            FinalMsg.innerHTML="CIRCLE WON!"
        else
            FinalMsg.innerHTML="X WON!"
    }

    CircleTurn=!CircleTurn;
    if( ++cellsChecked == 9){
        FinalMsg.style.display="flex"
        FinalMsg.innerHTML="DRAW!"
    }
}

function Verif(){
    let BoardMatrix = new Array(3);
    let cont=0;
    for(let i=0; i<3; i++){
        BoardMatrix[i] =new Array(3);
        for(let j=0;j<3;j++){
            let cell = CellElements[cont++];
            if(cell.classList.contains(X_CLASS))
                BoardMatrix[i][j] = 1
            else if(cell.classList.contains(CIRCLE_CLASS))
                BoardMatrix[i][j] = 2
            else 
                BoardMatrix[i][j] = 0
        }
    }
    for(let i=0; i<3; i++){
        if(BoardMatrix[i][0] == BoardMatrix[i][1] && BoardMatrix[i][1] == BoardMatrix[i][2] && BoardMatrix[i][0] != 0)
            return true
        if(BoardMatrix[0][i]==BoardMatrix[1][i] && BoardMatrix[1][i]==BoardMatrix[2][i] && BoardMatrix[0][i] != 0)
            return true
    }
    if(BoardMatrix[0][0] == BoardMatrix[1][1] && BoardMatrix[1][1] == BoardMatrix[2][2] && BoardMatrix[0][0] != 0)
        return true
    if(BoardMatrix[0][2] == BoardMatrix[1][1] && BoardMatrix[1][1] == BoardMatrix[2][0] && BoardMatrix[0][2] != 0)
        return true

    return false
}
