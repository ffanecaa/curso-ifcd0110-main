/* 
queremos q un trozo de codigo se repita
los hay   determinados:
              sabemos el numero de veces q va a rep

          indeterminados:
              no sabemos veces rep ( ej contraseña no sabemos 

sintaxis ===>

   .bucle{
       codigo a ejecutar
   }




   indeterminados:(muy parecido if)

    *  while (condicion rompe bucle){
        codigo a ejecutar
    }  " mientras esto sea verdad haz lo que hay en elcodigo
    
    * do  while"
      do{  codigo a ejecutar
    } while(condicion)

    */
          // mientras no se de contraseña hola sigue pidiendolo
      /* let pass= '';
       while(pass != 'hola'){
        pass =prompt('introduzca la contraseña')
       }
       console.log ('finde bucle');  */

    /*   do{
        pass =prompt('introduzca la contraseña')
       } while(pass != 'hola')
   
*/

       //si declaramos a let pass= 'hola' 
      // while  no se ejecuta mientra do while si pq  
     // la condicion esta despues de introduce contraseña
/*
   determinado 

   FOR  : especificamos vueltas

     sintAXIS:   * INICIA VARIBLE () i x incremnto 
                 * NUMERO VUELTAS
                 * INCREMENTO O DECREMENTO
                 * 
        for( let i=0; i<=3; i++){
            codigo a ejecutar 8 console.log(i)
        }
1 vuelta i=0 ¿i<3 - i++
2 vuelta i=1 ¿i<3 - i++
3 vuelta i=2 ¿i<3 - i++
4 vuelta i=3 ¿i<3 - i++
5  vuelta i=1 ¿i<3 - i++ no cumple fin de bucle

 for(let i=0; i<=10; i++){
    console.log(i);
} // 0 1 2 3 4 5 6 7 8 9 10 (en vertical)

    for(let i=0; i<=10; i++){
        if (i!=5){
            console.log(i);
        }
    } //se salta el 5:  0 1 2 3 4 6 7 8 9 10
    */



let numeros =[0,1,2,3,4,5,6]

for(let i=0; i<numeros.length; i++){
    console.log(numeros[i]);
}





