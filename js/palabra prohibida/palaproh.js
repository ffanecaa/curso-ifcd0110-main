/*Crea una app web en la que se pide al usuario que introduzca un texto y compruebe si entre las palabras introducidas existe alguna palabra prohibida.

La lista de palabras prohibidas estará en un array declarado en una constante. 

Debes utilizar  for para comprobar si entre el texto introducido está alguna de las palabras prohibidas. 

Debes utilizar funciones, bucles, contantes, variables y prompt, partiendo del ensayo que hemos realizado para una palabra prohibida.

Crea una carpeta para la app y súbela a Git dentro de tu proyecto general de CLASE.

Pega el enlace directo a la carpeta de GitHub donde haya quedado ubicado el ejercicio. 
*/

//}
let textos = prompt("escribe un texto");
const malas = ["pis", "caca", "culo"];
let texto = textos.toLowerCase();

for (const mala of malas) {
  if (texto.replace(mala, ",,") != texto) {
    texto = texto.replaceAll(mala, "***");
  }
}
document.getElementById("ele").innerHTML = texto.toUpperCase();

