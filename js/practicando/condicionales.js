//condiconal compuesto//
/*let num= -5;
if(num>0){
   console.log(`${num} es mayor que 0`);

} else{
    console.log(`${num} es menor que 0`);
} */// va escribir -5 es menor que 0//


//pero si es valor 0 da error pq al no cumplir la priemera escribela segundo simplente por flujo//
/*
let num=0;
if(num<0){
    console.log(`${num}es mayor que 0`);
} else{
    console.log(`${num}es menor que 0`);
} 
******entonces tenemos que usar condicionales mutiples paraevitar este error*/

/*let num=0;

if(num>0){
    console.log(`${num} es mayor que 0`);
} else if(num<0){
    console.log(`${num} es menor que 0`);()
} else{
    console.log(`${num} es igual a 0`);
}

*****Sepueden comprobar mas de una cosaa la vez. necesitamos operadores logicos
&& and y|| o */
 /*let num1= 0;
 let num2= 5;*/

 /*if( num1 >0 && num2 >0){
    console.log(`$(num1) y $(num2) son mayores que 0`)
 }  no imprime nada pq no cumple lacondicion tendriamos que poner 0 para q cumpla*/
 /*if (num1>0|| num2>0){
    console.log(`${num1 } o ${num2} son mayores que 0`);
 }
   ****ahora probaremos anidar if */

/*let num1 = 0;
let num2 = 0;

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y  ${num2} es iguala 0`);
    } 
}else if(num1<0){
    if(num2<0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else if(num2>0){
        console.log(`${num1} es menor que 0 y ${num2} es mayor que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es igual 0`);
    } 
}else {
    if(num2>0){
        console.log(`${num1}es igual a 0 y ${num2} es mayores que 0`);
    }else if(num2<0){
        console.log(`${num1} es igual que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es igual que 0 y ${num2}es igual a 0`);
    } 
}
**** no solo con mumero tb con strings*/
/*let word = 'hola mundo';

if(word.length>4){
    console.log(`${word} tiene mas de 4 letras`);
}
****booleanos  */
/*let respuesta = false;
if(respuesta) console.log(`respuesta tiene el valor true`);
if(!respuesta) console.log(`respuesta tiene el valor false`);

******************************** ejercicio ordena numeros de mayor a menor
numero a b c

*//*
const numbers = document.getElementById('numbers');

const result = document.getElementById('resultado');

let a = prompt('introduzca primer numero');
let b = prompt('introduzca segundo numero');
let c = prompt('introduzca tercer numero');

numbers.textContent = ` los numeros introducidos son ${a},${b},${c}`;
if(a>=b && a>=c){
    if(b>c){
        resultado.textContent =` el orden es: ${a},${b},${c}`;
    }else {
       
            resultado.textContent =` el orden es: ${a},${c},${b}`;
        }
}else if( b>=a && b>=c){
     if(a>=c){
        resultado.textContent = `el orden es ${b}, ${a} ,${c}`;
     }else{
        resultado.textContent = `el orden es ${b}, ${c} ,${a}`;
     }

}else if(c>=a && c>=b){
    if(a>=b){
        resultado.textContent = `el orden es ${c}, ${a} ,${b}`;
     }else{
        resultado.textContent = `el orden es ${c}, ${b} ,${a}`;
     }
}
*/
           
  /*switch 2 tipos :  
  
  simple:  
   switch(evaluacion){
    case n1:
        //codigo
        break;
        //código
        break;
        default:
            //código
  }

multiple : 
  switch(evaluacion){
    case n1:
    case n2:
    case n3:
        //código
        break; evitar que se siga ejecutando 
        default:
            //código
  }
*//*
let num = 4;
switch(num){//variable quevamos a ejecutar//
    case 1: console.log('num tien el valor de 1');
    break;
    case 2: console.log( 'Num tiene el valor 2');
    break;
    default: console.log('Num no vale ni 1 ni 2');


}*/ /*n¡solo sirve de ej pq para parimpar exiteotro metodo q se va a ver
let num = 8;
switch(num){
    case 1: 
    case 3:
    case 5:
        console.log(`${num} es impar`);
        break;
        case 2:
        case 4:
            case 8:
          console.log(`${num} es par`);
}
hay un tercer caso sintaxis multiple encadenada poca infoooo

*/
/* OPERADOOOR TERNARIOOOOOO SE USA
CONDICON SEA TRUE O FALSE
PUEDE TENER 1 O VARIASSENTENCIAS EN CASOSEPARADASPOR COMAS Y ENTREPARENTISIS

SINTAXIS;: 
(CONDICION)? true: false
(condicion)?
    (primerqa sentencia,
     segunda sentencia)
     :
(primerqa sentencia,
     segunda sentencia)


     ejemplo: 

     let num =1254;*/
    //(num % 2 == 0) ? console.log(`${num} es par`): console.log(`${num} es impar`) //
     
    
    // tn lo podriamos hacer con condicionales mejor operador tercieario //
    /* if (num % 2 == 0) console.log(`${num} es par`);//(nopongo llaves pq es solo 1 sentencia)//
     else console.log(`${num} es impar`)*/
    /* (num % 2 == 0) ? 
     (
        console.log(`${num} es par`),
     console.log(`${num} es par 2`)
     )
     :  
     (
        console.log(`${num} es impar`),
        console.log(`${num} es impar 2`) 
     ) */
     /*arrays   permiten almacenar varios datos y agruparlos
     datos validos en js y separados por comas
     se pueden mezclar diferentes tipos pero no recomendable.
  se declaran con corchetes tb pueden ir vacios
  pueden añadirseo elinarse en el momentoque queramos en otors lenguajes no se puede 
  

  hsta ahora 
   let num = 5
   let array = []  sin especificar
   let array = [1,2,3,4]
    cada elemento puede ser identificado por su posicion 0,1,2,3,4...*/

  /*  let numeros = [1,2,3,4,5];
    console.log(numeros[3]); //quierosaber posicion entre corchetes posicion//
    console.log(numeros);
    console.log(numeros[4]+numeros[1]);//asi los suma  7 //
    let palabras = ['hola',' estamos' ,'en' ,'youtube'];
    console.log(palabras[0]+palabras[1]);
    console.log(palabras[1].length);
    //tb escrito condolar//
    console.log(`la palabra ${palabras[1]} tienen ${palabras[1].length} letras`);*/



  //  let number= [1,2,3,4,5];


    //arraysPROPIEDAD
    //.lenght- DEVUELVE EL NUMERO DE POSICIONES   quecontiene el Array

//console.log(number.length); nos da 5 
 
 // METODOS:
// Array.isArray() devuelve true si la variable es array 
//let numbers = 4;

/* console.log(Array.isArray(numbers));  nos da false pq nolo es 
 console.log(Array.isArray(number));  nos da true pqlo es */


              /*   Eliminar un elemento :
    .shift()  el primer elemenot 
   .pop()  el ultimo elemento  */

/*
   console.log(number);
   number.shift();
   console.log(number);
   number.pop();
   console.log(number);

   */

        /*añadir elementos:
        .push() alfinal
        .unsshift()  al principio  */

     /*   console.log(number);
        let newLenght = number.push(6);
        console.log(number);
        let newLenght2= number.unshift(0);
        console.log(number);  */
 
        /* buscar :
         .indexOf-primernumeroque coincide con elsolicitado 
         .lastIndexOf-ultimo q coincide */

      /*   console.log(number);
         console.log(number.indexOf(2));  */

         /* invertir colocacion 
         .reverse() */ 

       /*  console.log(number);
         number.reverse();
         console.log(number);  */

     /*
        d.join()  evuelve string con el separador que indicamos, sinoindicamos son comas
          */

       /* console.log(number);
        
        console.log(number.join('bb'));*/

       /* .splice elimina tiene 3 praametro
       a 
           console.log(number);
           number.splice(3);
           console.log(number); elimina todo a partir posicion3 1,2,3*/
     // b con segundo valor 
     /* console.log(number);
      number.splice(2,2);
      console.log(number);1,2,5  borra 2 valores a partir posicion 2  */


      //c   damos 3 valores : añade el 3 elementos

   /*   console.log(number);
      number.splice(3, 2, 6,25);
      console.log(number);  1,2,3,6,25; posicon 3 tantos items com oqueramos  */

// si en segunda posicon sino queremos quequite elemntos ponemos 0//


 /*.slice extrae eleentosde un array desddeel indice a hasta bsi noexiste b lo hace hasta el final y sino exite a hace opia del origuinal */
  
 /* let newNumber = number.slice(2,4);
     console.log(number);
    
     console.log(newNumber); */


     /* BUCLEEEEEEESSSSSSSSS
     
     QUEREMOS CODIGO SE REPITA
     LOS HAY   * DETERMINADOS -   ESPECIFICAMOS NUMERO DE VECES


              * INDETERMINADOS   NO SABEMOS EJ INTRODUCCION CONTRASEÑA

     ESTRUCTURA
      
         BUCLE{
            CODIGO A EJECUTAR
         }

     WHILE ( INDET)  SINTAXIS SOLO  CONDCION SALIDA

     WHILE (CONDICON){
        CODIGO A EJECUTAR         sino se cumple no se ejecuta
     }

     DO WHILE     SINTAXIS            CODIGO A EJECUTAR
                                       CONDICON SALIDA

            EJ  do{
                // codigo a ejecutar
            }  while ( condicon)  siempre como minimo se ejecuta una vez se cumpla o no 
                             
*/   
/*

let pass  = ' ';
/*
while(pass !=  'hola'){
    pass = prompt(' introduzca contraseña');
}
console.log('fin de bucle?');*/
  /*  let pass 
       
      do{
        pass = prompt(' introduzca contraseña')
      }
      while(pass != 'hola')*/



/* la diferencia entre while y do while se observa si partimos de unavariable asignada

 ej  let pass = 'hola' laprimera ya no se ejecuta lasegunda  si pq ejecuta primero el do y no llega al while donde 
 le decimos  q es hola  */

/*
 DETERMINADOS BUCLE FOR  
 HAY QUE DETERMINAR EL NUMERO DE VUELTAS
 existen 4  vamoscon el primero

 SINTAXIS  EN 3 PARTES:
   INCIACION variabel..... let i = 0
   numro de VUELTAS        i <=10 ( son 11 vueltas recordar priemr valor es 0)
   INcremento o DECREmento  i++  ( aumentando 1 )
     
     la variable de for se le suele llamar i  ( viene de incremento)
     hay casos en que usamos un segundo for y ese caso j

       for ( let i=0;i<=10; i++){   //separados por punto y coma
        codigo a ejecutar

        ejemplo : */

     /*   for(let i=0;i<=3;i++){
            console.log(i)
        }  */
        /*
el programa procesa asi: mandamos q imprima valor i  

     1ª vuelta  i=0 ¿<= 3? la respuesta es si e imprime 0 (i++)
     2ª vuelta  i=1   ¿<=3? la resp es si  imprime 1 (i++)
     3º vuelta  i=2   ¿<=3? la resp es si  imprime 2 (i++)
     4º vuelta  i=3   ¿<=3? la resp es si  imprime 3 (i++)   
   5ª vuelta  i=4   ¿<=3? la resp es no  FIN DE BUCLE
*/
    //  otro ejemplo 
/*
    for(let0 i =0;i<=10; i++){
        console.log(i);
    }
       //imprime del 0 al 10 

     for(let i =9;i>=0; i--){
        if(i!=5){
        console.log(i);}
     } // imprime del 9 al 0
       // añadiendo el if podemos alterar en este caso noimprime el 5
       si le quitamos el i ++ lo que creamos un bucle infinito */


//creamos array y vincula i a la posicion del cada termino del array por la propiedad length depues punto
 /*  let numbers = [56,1,2,3,4,5]

       for(let i =0;i<numbers.; i++){
        console.log(`i vale${i} y el valor de esa posicionen el array es ${numbers[i]}`);
       } 
       */
     // incorporaron 2 tipos de for mas para simplificar la tradicional  de Antes:

     // FOR OF   y FOR IN: 
     /*

      let names = ['Paco','Jose','paula','marta']
      // FOR (creamos variable sin igual y OF variable que queremos recorrer)
      //estilo recomiendad variable a recorrer en plural 
      //variable inventada en singular
      for (let name of names){
        console.log(name)
      }
      /* nos recorre la variable dando
        paco
        jose
        ...*/
        /*

        for (let name in names){
            console.log(name) 
        } 

        // con for in cojemos la posicion del array generalmete se usa para objetos
// tb con for of podemos sacar indices 

for (let name of names){
    console.log(names.indexOf(name))
  }

  for(let i=0; i< names.lenght; i++){
    if(names[i] === 'paula'){
        break
    }
    console.log(names[i]);
  }


  for(let i=0; i< names.lenght; i++){
    if(names[i] === 'paula'){
        continue  // hace algo parecido abreak pero se salta el indicado Paula
    }
       console.log(names[i]);
  }

  // antes en ven contiunue se ponia i++ y hacia lo mismo pero daba problemas
  for(let i=0; i< names.lenght; i++){
    if(names[i] === 'paula'){
        i++
    }
    console.log(names[i]);
  }
  
  */
//EJERCICIOS DE REPASO 


//SOLICITA NOMBRE, EDAD Y nUESTRA EN CONSOLA 
//EL MENSAJE  HOLA____ TIENES___ AÑOSY EL AÑO QUE VIENE TRNDRAS ___AÑOS
/*
let nombre = prompt( 'pon tu nombre')
let edad = prompt('que edad tienes')
let age = (edad--);

console.log(`hola ${nombre} tienes ${edad} años y el proximo tendras ${age} años`)

*/

let nome = prompt( 'pon tu nombre')
let age = parseInt(prompt('que edad tienes'))



console.log(`hola ${nome} tienes ${age} años y el proximo tendras ${age+1} años`);




  // parseInt para comvertir string en numero 