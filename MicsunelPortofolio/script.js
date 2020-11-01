const Header = document.getElementById("Header")
const Hamburger = document.getElementById("hamburger")
const Nav = document.getElementById("nav_links")
let lastScroll=0
let ContainedNav=false


window.addEventListener("scroll",function(){
    let Scroll= window.pageYOffset
    if(Scroll>lastScroll){
        Header.style.top="-10vh"
        if(Nav.classList.contains("visible")){
                Nav.classList.remove("visible")
                ContainedNav=true
        }
    }
    else{
        Header.style.top="0"
        if(ContainedNav){
            Nav.classList.add("visible")  
            ContainedNav = false
        }     
    }
    lastScroll=Scroll;
})

Hamburger.addEventListener("click",function(){
    const lines = document.getElementsByClassName('line')
    Nav.classList.toggle("visible")
    for(let i=0;i < lines.length;i++)
        lines[i].classList.toggle("whitebg")
})