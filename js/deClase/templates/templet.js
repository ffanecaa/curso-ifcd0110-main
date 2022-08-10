async function inserta(){
     let header = await fetch('header.html');
     let elhtm =await header.text();
     document.getElementById('header').innerHTML=elhtm
     let footer = await fetch('footer.html');
     let elh =await footer.text();
     document.getElementById('footer').innerHTML=elh
     
     
}
window.onload=function(){
    inserta();
}


let atras = new Date("jan 5, 2026 15:56:25").getTime();


let x = setInterval(function() {
let ahora = new Date ().getTime()
let resta = atras-ahora ;
let days = Math.floor(resta /(1000*60*60*24));
let hours= Math.floor((resta%(1000*60*60*24))/(1000*60*60));
let minutes= Math.floor((resta% (1000*60*60))/(1000*60));
let seconds= Math.floor( (resta% (1000*60)/1000));

document.getElementById('ele').innerHTML= days +  "dias" +hours +'h'+ minutes+'m'+seconds+'s';

})




