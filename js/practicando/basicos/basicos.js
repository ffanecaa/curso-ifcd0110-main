//let nombre = "mara";
//let altura = "150";

/*let datos = document.getElementById("datos");


datos.innerHTML=
`<h1>soy ${nombre}</h1>
<h2>mido ${altura}</h2>`


if (altura> 180){
    datos.innerHTML += // hace que no borre lo anteriordel div se lo sume
   ` <h3>eres alta</h3>`
} else{
    datos.innerHTML+=
    ` <h3>eres baja </h3>`
}


for( let i=0;  i<=200; i++){
    datos.innerHTML +=
    "<h4>estamos en el año"+" " +i ;
}
*/  /*
function MuestaMiNombre(nombre, altura){
  let datos = document.getElementById("datos");
  datos.innerHTML=`
  <h1>soy ${nombre}</h1>
  <h2>mido ${altura} cm </h2>
  `;
}

// las funciones tienen qser invocadas
 MuestaMiNombre("pepita de los...", 150)

*/


//area circulo trianguloy cuadrado

let figura = prompt("hallaremos el area de una de las siguientes figuras elige: triangulo cuadrado o circulo ");
let base;
let altura;
let lado;
let radio;


switch (figura){
    case "triangulo":
    base = prompt ("introduce valor de base en cm")
    altura = prompt ("introduce valor altura en cm")
    document.getElementById("datos").innerHTML=(`el area del triangulo es ${(base*altura)/2}`);
    break;
    case "cuadrado":
    lado = prompt ("introduce el valo del lado en cm")
    document.getElementById("datos"). innerHTML=(`el area del cuadrado es ${lado*lado}`);
    break;
    case "circulo":
        radio = prompt("indica el radio en cm")
        document.getElementById("datos"). innerHTML=(`el area del circulo es ${radio*3.1416}`);
        break;
}