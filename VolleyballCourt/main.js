const Players = document.getElementsByClassName("player")
const Arrow = document.getElementById("arrow")
let ObjDraged = false
let x,y ,prevx,prevy
SetDrag()
Arrow.addEventListener("click",function(){
    const Menu = document.getElementById("menu")
    const Lines = document.getElementsByClassName("arrline")
    Menu.classList.toggle("show")
    Lines[0].classList.toggle("rotateline1")
    Lines[1].classList.toggle("rotateline2")
})

function SetDrag(){

    for(let i=0;i<Players.length;i++){
        let player = Players[i]
        player.onmousedown = StartDrag
    }
    document.onmousemove = Move 
    document.onmouseup = StopDrag
}


function StartDrag(e){
    ObjDraged = e.target

    prevx = x - ObjDraged.offsetLeft;
    
    prevy = y - ObjDraged.offsetTop;
}

function Move(e){

    if(e.pageX && e.pageY){
        x = e.pageX;
        y = e.pageY; 
    }

    if(ObjDraged) {
        ObjDraged.style.left = (x - prevx) + 'px';
        ObjDraged.style.top = (y - prevy) + 'px';
      }

}

function StopDrag(){
    ObjDraged = false
}