const Header = document.getElementById("Header")
let lastScroll=0


window.addEventListener("scroll",function(){
    let Scroll= window.pageYOffset
    if(Scroll>lastScroll)
        Header.style.top="-10vh"
    else
        Header.style.top="0"
    lastScroll=Scroll;
})