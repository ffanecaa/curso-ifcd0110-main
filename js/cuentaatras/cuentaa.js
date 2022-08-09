let atras = new Date("jan 5, 2026 15:56:25").getTime();
let ahora = new Date ().getTime();

var x = setInterval(function() {

let resta = atras-ahora ;
let days = Math.floor(resta /(1000*60*60*24));
let hours= Math.floor((resta%(1000*60*60*24))/(1000*60*60));
let minutes= Math.floor((resta% (1000*60*60))/(1000*60));
let seconds= Math.floor( (resta% (1000*60)/1000));

document.getElementById('reloj').innerHTML= days +  "dias" +hours +'h'+ minutes+'m'+seconds+'s';

})



    pendiente 