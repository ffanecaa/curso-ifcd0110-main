function escribe(cadena,id){  // 
 document.getElementById(id). innerHTML= cadena;
}

//let cadenaDeTexto ='hola que tal estamos';
//cadenaDeTexto=cadenaDeTexto.replace("que tal","macarones")

//escribe(cadenaDeTexto, 'ele');

//escriba usuario repalce taco

let palabraProhibida = "colchoneta";
let cadenaDeTexto =prompt("escribe palabra");

if(cadenaDeTexto.toUpperCase().replace(palabraProhibida,"gf") !== cadenaDeTexto.toUpperCase())  {
    
   cadenaDeTexto = cadenaDeTexto.replace(palabraProhibida,"gf")

   
}
escribe(cadenaDeTexto.toUpperCase(),'ele')


let textoDescompuesto = cadenaDeTexto.split(' '); // lo convierte en array
let primeraPalabra = (textoDescompuesto[0]);
let segundaPalabra = (textoDescompuesto[1]);
let terclPalabra = (textoDescompuesto[2]);
//escribe(cadenaDeTexto.ela);
console.log(textoDescompuesto[0]);
escribe(`${primeraPalabra}<br>${segundaPalabra}<br>${terclPalabra}<br>`,"ella");
escribe( textoDescompuesto.indexOf(m),'ella');

