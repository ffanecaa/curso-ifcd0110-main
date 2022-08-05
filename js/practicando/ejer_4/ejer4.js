/*escribe un programaq pida un numero entero mayor q 1 y
 q escriba si el numero es primo divisible por el mismo y la unidad
o no */

let num= parseInt(prompt('escribe un numero natural mayor que 1'))
let divisores =0 
for(let i=2 ; i<num; i++){
    if (num%i==0){
        console.log(`${num}/ ${i}=${num/i}no es primo`)
        //divisores++
        break
    
}}
