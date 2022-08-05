/*


alamcenar datos y agruparlos
separados por comas [, , , ] se  puden mezclar tipos no recomendble
puden estar vacios o con contenido 
se le pueden añadir elememtos o quitar ( especifico de js )


let array =[]
let numeros= [1,2,3,4]  (0  1 2 3 empiezaa contar 0)  */


let numeros =[1,2,3,4,5];

console.log(numeros[0]);// daria 1 pq es su posicion
console.log(numeros[0]+ numeros[2])  //  4

let palabras = [ "leon", "sandia", "melocoton", "renata"];

console.log( `la palabra ${palabras[2]} tiene ${palabras[2].length} letras`);



/*PROPIEDADES  array ( HAY 2 MAS )


.length   longuitud

*/
/*

METODOS::

  *   Array.isArray => saber  si es array da falso o verdadero */

                  let number = 4;
                  console.log(Array.isArray(number));  // false
                  console.log(Array.isArray(numeros)); //true
/*
*   eliminar un elemento => 

      -  .shift ()--- elimina 1º elemento y lo devuelve
      -  .pop()------- elimina el ultimo  y lo devuelve
*/
                 console.log(numeros); // 1,2,3,4,5
                
                 console.log(numeros.shift()); //2,3,4,5  e indica 1
                 let elementoelim = numeros.shift(); // guardamos elemento  eliminado en variable 2
                console.log(elementoelim); //   muestra 2 q es el eliminado
                
                 console.log(numeros.pop());  //   indica 5
                 console.log(numeros);// 3,4 

      
/*
 *     añadir elementos =>
        
      - .push(element1, element2,...)  al final y devuelve longuitud nueva
      - unshift(element1. elem22,...)  al ppio  y devuelve longuitud 
*/
                console.log(numeros.push(6,3)); // indica 4 
                console.log(numeros.unshift(-1,-2));  // indica 6
                console.log(numeros);  // aparece nuevo array -1,-2,,3,4,6,3
                let newLength = numeros.push(12); // guardamos la nueva longuitud
                console.log(newLength); // imprime la nueva longuitud 7

                /*
   
*      buscar elementos

         - indexOf() -------devuelve el primer indice del elememento q coincida con el elemmtp 
                   especificado si no lo encuentra -1
        -  lastIndexOf------ devuelve el ultimo
      */
                console.log(numeros); //-1,-2,3,4,6,3,12
                console.log(numeros.indexOf(3));//devuelve posicion 2 
                console.log(numeros.lastIndexOf(3)); //dev posicion 5

     /*
*      .reverse()  =>

            invierte orden 
       */
             console.log(numeros.reverse());// 12,3,6,4,3,-2,-1

         /*
*     .join('separador') =>

              devuelve un string indicamos como queremos q sesepare sino pone comas 
              hay q poner comillas sino da fallo
        */
              // console.log(numeros.join('=>'));
         /*
*       .splice(a,b,item)=>

              sustituye elemento
                  a indica posicon inicia borrado
                  b cuantos borran sino 0
                  item se añaden en esas posiciones 
        */
               console.log(numeros.splice(2,1,19,20,21));// 12 3 6 4 3 -2 -1
               console.log(numeros);   //  12 3 (6)eliminado 19 20 21 4 3 -2 -1

            /*
  *       .slice(a,b)   => 
            
                 extrae elemenots desde a hsta b, si no existe b hasta el final sino
                si no existe a yb hace copia array
                */

                console.log(numeros);// 12 3 19 20 21 4 3 -2 -1
                console.log(numeros.slice(2,5));  //19 20 21
                console.log(numeros);  // 12 3 19 20 21 4 3 -2 -1
                console.log(numeros.slice(4)); //21 4 3 -2 -1


        /*
        
        
    *       . from(iterable) convierte al array en iterable.( muy usado con el DOM )
*/

                  let word = 'hola mundo' 

                  console.log(Array.from(word));// convertido array['h,'o','l','a','m','u','n','d','o']
                  
                  console.log(word.split(""));// conseguimos lo mismo, si dejamos espaciosale 2 palabras
/*
    *     .sort(callback / funcion que ejecuta otra funcion)   =>
                  
                  ordena elementos array alfabeticamente(x valor unicode)
                  */

                  const letters =['b','c','z','a']
                  const numbers =[ 1,100,200,60]
                  console.log(letters); // tal como escribo
                  console.log(letters.sort()); // ordenada alfab unicode
                  console.log(numbers.sort()); // ordenada  unicode 1 100 200 60 entonces para ordenar =>

                  console.log(numbers.sort((a,b)=>a-b));// ordena menor a mayor
                  console.log(numbers.sort((a,b)=>b-a)); // ordena de mayor a menor
            // lo recorre por medio de pares resta a- b da 0 son iguales si a-b da negatibo b es mayor y si positivo
          //  es a mayor... 

                  /* esquema de loq hace sort((a,b)=>a+b

                            funcion menorMayor(a,b){
                                if (a-b<0) return -1;
                               if(a-b>0)  return 1;    ===> .sort((a,b)=>a-b));
                                  if( b==a) return 0
                                      }
                         
    *       .forEach(callback(currentValue,[index])) =>
                    ejecuta la funcion indicada unavez por cada elemento del Array.

    */ 

                      const num = [12,25,47,84,9]
                      num.forEach((loqquiera)=> console.log(loqquiera))

                      num.forEach((numa,index) =>
                      console.log (`${numa} esta en la posicion ${index}`))
                     
                     
                     
                     // console.log(num.indexOf(25));
                     // console.log(num[0])
/*

  *          .some(callback)  ==>

                  comprueba q al menos un elemento del array cumpla condicion
         
            .every(callback)  ==>

                comprueba q TODOS un elemento del array cumpla condicion

*/
           
                      const paroles= [ 'html','css','javascript','php']
                        console.log(paroles)
                     console.log(paroles.some(parole=>parole.length >3));//true
                     console.log(paroles.every(parole=>parole.length <3));//false

                     /*
             mas comodos quelos bucles   
             
             const num = [12,25,47,84,9]
             .map(callback) ===>

                 trasforma todos los elementos de un array y devuelven un nuevo array
                 */
               console.log(num) ; // 12,25,47,84,9
              num.map((numa => console.log(numa +2)))// 14,27,49,86,11

           //   seria lo mismo q este for:
               console.log(num)
                for(const numa of num){
                console.log(numa+2)
                }
          // tb si quisieramos guardar el resultado en un segundo array

          const num2 = num.map(numa=> numa+2)
          console.log(num2);


/*     .filter(callback) ==>

           filtra todoslos elemntos del array q cumplan la condicion devuelve nuevo array

*/
        const num3 = num.filter(numa => numa>40)   
        console.log(num3); // array [47, 84]

/*    .reduce    ==> lo hace por pares g
               
          filtra elementos y los reduce
          */
         console.log(num)
         console.log(num.reduce((a,b) => a+b)); // sumatodo el array 177

         const users = [
            { name: 'user1',
            online:true

            },
            { name: 'user2',
            online:true

            }, 
            { name: 'user3',
            online:false

            },
            { name: 'user4',
            online:true
        },
         ]
      const usersOnline = users.reduce((cont,user)=>{
        if(user.online) cont++
        return cont
      },0)  // ,0 indicamos dedonde parte cont
      console.log(usersOnline)



            



             
             