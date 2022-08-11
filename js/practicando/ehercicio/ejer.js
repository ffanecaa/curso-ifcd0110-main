// segundo numero mayor

//let numa = prompt('escribe 10 numeros ')
//let lista = nua.push()
/*
let numeros=[]
for ( let i=0; i<=4;i++) {
 numeros=prompt( 'pon un numero')
 console.log(numeros)
} 

const num =() =>{
 prompt('escribe un numero')}
 
    }


for ( let i=0; i<=4;i++) {
  let num = "prompt('escrbe un numero')"
  console.log(num)
}*/
//const num =() =>{
  //  prompt('escribe un numero')}
  /*
function numeros(){
    let cont ='';
    let arra=[];
     let  x;

for ( let i=0; i<=4;i++){
   x=prompt('escribe tu nombre','')
     arra.push(x);
   
 } console.log(arra)}
 numeros()*/
 /*
  for(let i=0 ; i<=4; i++){
    cont+= arra[i]+'';
  }
 console.log(cont)}*/


 ////function arra(){
    
  let numerosList=[];
  for(let i=0; i<=9;i++){
    let lista=prompt('ingresa un numero');
    numerosList.push(lista)
  }
 // console.log(numerosList)


// }

//console.log(numbers.sort((a,b)=>b-a)); // ordena de mayor a menor
//arra()


document.getElementById('ele').innerHTML= `has indicado los siguientes numeros ${numerosList}`
let lis=(numerosList.sort((a,b)=>b-a)); // ordena de mayor a menor
console.log(lis)

document.getElementById('ele').innerHTML+=`  el segundo numero mas alto es ${lis[1]}`
/*

let maximo =(Math.max(...numerosList))
console.log(maximo)
let quita = numerosList.replace(maximo,'0')

let final =(Math.max(...quita))
console.log(final)
*/
