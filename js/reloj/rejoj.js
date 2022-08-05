/*momentoActual= new Date()
hora = momentoActual.getHours()
minuto= momentoActual.getMinutes()
segundo= momentoActual.getSegundos()

let horaImpr =hora+ '': '' + minuto +'' :'' + segundo

document.form_reloj.reloj.value = horaImpr*/

//incluir reloj pagina web

function mueveReloj(){
    momentoActual = new Date()  // pedimos hora de nuestro computador
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    //document.ele.reloj.value = horaImprimible
    document.getElementById("ele").innerHTML = `hora: ${horaImprimible}`;

    setTimeout("mueveReloj()",1000)
}

//La función setTimeout sirve para hacer el retardo antes de ejecutar 
//la sentencia. La sentencia es una simple llamada a la función y el retardo es de 1000 milisegundos (un segundo).


/*
let nTurno;
nTurno = 0;
function sumar(n1) {
  console.log("aqui");
  if (n1 == 1) {
    nTurno++;
  }
  if (n1 == -1) {
    nTurno--;
  }

  document.getElementById("ele").innerHTML = `contador: ${nTurno}`;
}*/
