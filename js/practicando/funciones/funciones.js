/*


son fragmentos de codigo para ejecutrar una tarea y no tener que volver a escribir el mismo codigo
(error tipico repetir codigo)
    nos ayudan a modularizar el codigo
    las funciones deben realizar una sola tarea

    sintaxis:

    function nombreFuncion(){
        codigo a ejecutar
    }

ahora se hace asi :
    const nombreFuncion =() =>{
        codigo a ejecutar
    }


    ***  PUEDEN RECIBIR PARAMETROSSSS
    ej 


    function nombreFuncion(parametro1,parametro2){
        codigo a jecutar
    }

      const nombreFuncion =(parametro 1, parametro2)=>{
        codigo a e ejecutar
      }  ( se llaman funciones de flecha)
no hay limite de parametros 

    * ***PUEDEN DEVOLVER VALORES ( lo mas normal en algunos  casos no )

escribimos RETURN

function nombreFuncion(parametro1,parametro2){
        return parametro1+parametro2
    }

      const nombreFuncion =(parametro 1, parametro2)=>
        parametro1+parametro2  
        
        si solo tiene una funcion no es necesario return aunq
        hay muchas excepciones ( nolleva llaves pq si es una sola linea no es necesario)
      } 
      */
/*
        function saludar(){
            console.log('holaa');  // si queremos usarla hay q invocarla

        } 
        saludar() // parentisis importantes  es la llamada

  // forma actual de funcion 
      const saludo = () => console.log("hola");
     saludo()
          
       // saludar() // parentisis importantes 

       const saludoUser = (user) =>
     console.log(`hola ${user}`); // cuando solo 1 parametro no hace falta parentesis
       saludoUser('pepe')
       saludoUser('lolo')
*/
/*
const suma =(num1, num2) => {
    num1+num2
}

console.log(suma(2,3)) // nos da indefinido pq con lasllaves espera otro parametro
//si quitamos las llaves funciona
*/
const suma =(num1, num2) => num1+num2


console.log(suma(2,3))


//para poder dejar llaves tenemos que proporcionar return

const sumar =(num1, num2) => {
   return  num1+num2
}
console.log(sumar(8,3))


const resta =(num1, num2) =>{
    if (num1 ==2){
        return  num1+num2
    }
    console.log('esto no se ejecuta pq la funcion para en return sinocumple continua ');
    return num1
}

console.log(resta(3,6));

//   *** se denomina objetos de primera clase
const sumada =(num1, num2) => num1+num2 // podemos guardarlo en una variable

 let result = sumada(6,1)
 console.log(result); // creamos una variable paraguardar la funcion