/*

   Spread Operator ( operador de expansion)

   sintaxis es ...

   */
  // ejemplos 


    const num = [-12,2,3,23,43,2,3]


console.log(num);//    [ -12],2,3,23,43,2,3]
// si ponemos:
//console.log(...num); // 12,2,3,23,43,2,3


// *** enviar un array a una funcion****

const addNum = ( a,b,c) => {
    console.log(a+b+c)
}
addNum (1,2,3)  // resultado 6

// pero si tenemos un array no resultaria pq no lo reconoce como numero

let numAdd = [1,2,3]

addNum(...numAdd); // con los puntos funcionnan

//   ** añadir un array a otro array***
//ej chat con nuevos usuarios

 let newUsers = [ 'marta',' jaime','laura']
 let users =[ 'javier','david','rosa','juan','mercedes']

 users.push(newUsers[0],newUsers[1],newUsers[2])
 console.log(users)

  //es mas facil con spread operato px si entran200 
  let users1=['pablo','pedro']
  users.push (...users1)
  console.log(users)

  // ***  copiar arrays ***

     let arra1 = [1,2,3,4,5]
     let arra2 = [...arra1]// tb let arra2= arra1  8 pero da problemas en situciones especificas
     console.log (arra2)

   // ***  concatenar array ****

 let arra3 = [ 6,7,8]

 let arrConcat = arra1.concat(arra3)
 console.log(arrConcat)// 1,2,3,4,5,6,7,8

 let arra4=[22,30,25,26]
 let spreadconca=[...arra1,...arra4]
 console.log(spreadconca)// 1,2,3,4,5,22,30,25,26

//   **** enviar un numero indefinido de argumentos a una funcion(parametros REST)

      const restParms= ( ...loqquiera) =>{
        console.log(loqquiera);
      }
      restParms(1,2,3,4,5)// lepodemos poner tantos comoqueramos
      //y devuelve un array

//    ****libreria math *******

const numa =[-12,5,2,25,28]
console.log(Math.max(1,2,25));// nos da el 25
console.log(Math.max(numa));//error array asi q

 console.log(Math.max(...numa));//28


 //    **** eliminar elementos duplicado ****
const dupli = [2,3,4,5,26,3]// antes habia que hacer buvle

// llego set 

console.log(new Set(dupli))
  //  nos saca objecto sin elrepetido
  console.log([...new Set(dupli)]);// puntos y corchetes devuelve array
  


















  