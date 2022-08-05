//salida con alert entrada datos prompt// ESTE LO HICE YO
/*const number = document.getElementById('ele');
let edad;
edad = prompt('Introduce tu edad');

ele.textContent = `la edad introducida es ${edad}`;*/


/*edad=prompt('introduce tu edad');

document.getElementById('ele').innerHTML=` la edad introducida es <h1> ${edad}</h1>`;*/

//creamos un condicional para saber si han escrito un numero //

/*let edad;
edad = prompt('introduce tu edad');
if(Number (edad) == edad){
  if(edad<18){
    alert('tienes que ser mayor que 18 años');
    window.location.href='http://www.google.com';
  }


document.getElementById('ele').innerHTML=` la edad introducida es <h1> ${edad}</h1>`;
}else {
    alert('tiene que ser un numero ');
    window.location.reload();
}*/
//ejercicio notas  y hacer un alert de suficiente a //

/*sobresaliente;
notable;
bien;
 suficiente;
insuficiente;*/


/*let nota;
nota = prompt ( 'introduce tu nota');
 if( Number(nota) == nota){
    if (nota >0 & nota< 5) alert ( 'tienes un insuficiente');
    if (nota >5 & nota< 7) alert ( 'tienes un suficiente');
    if (nota >6 & nota< 8) alert ( 'tienes un bien');
    if (nota >7 & nota< 9) alert ( 'tienes un notable');
    if (nota >8 ) alert ( 'tienes un sobresaliente');
 }

*/

/*
let nota;
nota = prompt ('introduce tu nota');


switch (Number(nota)){  // funcion incompatibilidad entre prompt //
    case 0:
      nota = 'muy deficiente';
  break;
   case 1: 
    nota = "insuficiente" ;
    break;
    case 2: 
    nota = "insuficiente" ;
    break; 
    case 3: 
    nota = "insuficiente" ;
    break;
    case 4:
      nota = 'insuficiente';
  break;
   case 5: 
    nota = "suficiente" ;
    break;
    case 6: 
    nota = "bien" ;
    break; 
    case 7: 
    nota = "bien" ;
    break;
    case 8:
      nota = 'notable';
  break;
   case 9: 
    nota = "sobre" ;
    break; 
    case 10 :
      nota= "sobresaliente" ;
    break; 
   
    
   
    

}
document.getElementById("ele").innerHTML = nota;*/

let nota;
nota = prompt ('introduce tu nota');
switch (Number(nota)){  // funcion incompatibilidad entre prompt //
  case 0:
  case 1: 
  nota = "insuficiente" ;
  break;
  case 2: 
  
  case 3: 
  
  case 4:
    nota = 'muy deficiente';
break;
 case 5: 
  nota = "suficiente" ;
  break;
  case 6: 
  case 7: 
  nota = "bien" ;
  break;
  case 8:
    nota = 'notable';
  break;
  case 9: 
   case 10 :
    nota= "sobresaliente" ;
    break; 
    default: 
      nota="<span style='color:red'>error</span>:escribe un numero de 1 a 10";
 
  
 
  

}
document.getElementById("ele").innerHTML = nota;

