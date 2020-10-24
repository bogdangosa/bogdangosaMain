var date = new Date();
var query = window.matchMedia("(max-width:850px)");
var mode24h = true; 
//alert(date.getHours());

function ChangeMode(clicked_element){
    var Btn12h = document.getElementById('12hMode');
    var Btn24h = document.getElementById('24hMode');

    if(query.matches){
        Btn12h.classList.toggle('selected');
        Btn24h.classList.toggle('selected');
        mode24h =!mode24h;
        return;
    }

    if(document.getElementById(clicked_element).classList[1] != "selected"){
        Btn12h.classList.toggle('selected');
        Btn24h.classList.toggle('selected');
        mode24h =!mode24h;
    }

}


function SetDate(){
    date = new Date();


    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();
    var am_pm="";
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturnday'];
    
    if(!mode24h){
        am_pm=" AM";
        if(hours > 12){
            hours -= 12;
            am_pm=" PM"
        }
        if(hours==0)
            hours = 12;
    }
    
    if(hours < 10)
        hours = "0"+ hours;
    if(minutes < 10)
        minutes = "0"+ minutes;
    if(seconds < 10)
        seconds = "0"+ seconds;

    document.getElementById(days[day]).style.color ='#54ff7c';

    if(query.matches)
        document.getElementById(days[day]).style.display = "block"
  
    document.getElementById('create_date').innerHTML= (hours + ':' + minutes + ':' + seconds + am_pm);  
    document.getElementById('create_date').textContent= (hours + ':' + minutes + ':' + seconds + am_pm);  
 
}

setInterval(SetDate,100); 