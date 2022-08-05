/*
solicita un numero eimprime todoslos pares e impares hasta ese numero con el mensaje es par o
es impar:
si es 5
1. es impar
2 es par
3 es impar
4 es par
5 es impar
*/ // operador ternerio 


/*(CONDICION)? true: false
(condicion)?
    (primerqa sentencia,
     segunda sentencia)
     :
(primerqa sentencia,
     segunda sentencia)
*/

//let num = parseInt prompt(`escribe un numero para saber si es par o impar`)
//(num % 2 == 0)? console.log(`el numero ${num} es par`): console.log(`el numero ${num} es impar`)
//(num % 2 == 0) ? console.log(`${num} es par`): console.log(`${num} es impar`)

// como queremos imprimir listado tenemos q hacer bucle con for
let num = parseInt(prompt(' Introduce el numero'))



for(let i=1; i<num; i++){
    if(i%2==0){
        console.log( `${i} - es par`); 
       
    } else{
    
       console.log(`${i} - es impar`);
    }

    }