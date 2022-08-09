/*function displayDate() {
    document.getElementById("ele").innerHTML = Date();
  }

  function posicion(e) {
    document.getElementById("ella").innerHTML =' el ejemplo esta' 
    +e.clientX+ e.clientY;
  }
  let elemento =document.getElementById('boton');
  elemento.addEventListener('mouseover',function(e){
    posicion(e)
    
  }) // mouseover con tocar ya activa 
     // clic *//*
*/  /console.log(documentelement)
     const numeros= [];
     for (let i=1 ;i<50;  i++){
        numeros.push(i);
     }
     
console.log(numeros)
function prueba(numeros){  //des ordena aleatoriamente la cadena algortimo fisher yates
 for ( let i = numeros.length- 1; i>0; i--){
  let j = Math.floor(Math.random()*(i+1));
  [numeros[i], numeros[j]] =[numeros[j], numeros[i]]
 }
 return numeros;

}
function premiado (numeros, quantity){
  return prueba([...numeros]).slice(0,quantity)
}
console.log(premiado(numeros,6))
document.getElementById('sumar').innerHTML=((premiado(numeros,6)))
    

//mas facil para mi :pero no vale pq podria repetir el mismo numero 
/*
const numeros= [];
     for (let i=1 ;i<50;  i++){
        numeros.push(i);
     }


let creando1 = Math.floor(Math.random()*49);
let creando2 = Math.floor(Math.random()*49);
let creando3 = Math.floor(Math.random()*49);
let creando4 = Math.floor(Math.random()*49);
let creando5 = Math.floor(Math.random()*49);
let creando6 = Math.floor(Math.random()*49);

console.log(numeros[creando1])
console.log(numeros[creando2])
console.log(numeros[creando3])
console.log(numeros[creando4])
console.log(numeros[creando5])
console.log(numeros[creando6])


document.getElementById('ele').innerHTML=(`los numeros premiados son el ${numeros[creando1]},${(numeros[creando2])},${(numeros[creando3])},${(numeros [creando4])},${numeros[creando5]},${(numeros[creando6])}`)
*/


const num [45,4,9,16,25 ]
const num2 [ 45,4 16]



const dife = users.reduce((cont,user)=>{
  if(user.online) cont++
  return cont
},0) 

/* fech()  devuelve un objecto es una api // sustituye XMLHRequest