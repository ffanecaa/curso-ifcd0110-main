/*hay varias formas :


1ª 
crear elementoes igual q crear etiqueta  . 

document.createElemement(elemento)
element.textContent ( escribier texto elemento)
element.innertHTML = codigo html  ( escribirhtml en el elemento)
parent.appendchild(elemento)// añadir elemento al dom
document.createdocumentFragment()// fragmento del codigo*/


const days=[ 'lunes','martes','miercoles','jueves','viernes',
'sabado','domingo']


const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')

/*
const itemList=document.createElemement('LI') // creamos el elemento
itemList.textContent ='lunes'
daysList.appendChild = (itemList)*/
/*
title.innerHTML= 'DOM- <span>crear e inserta objectos </span>'// metemos html

console.log(itemList) // generamos el valor asociado a textContent

*/
//ejercicio escribir los dias en doc forma habitial
//lo primero recorrer el array
/*
for (const day of days){ // recorre el array
 // console.log(day);// nos imprime todos los dias del array
 daysList.innerHTML += `<li>${day}</li>` // si solo pongo igualsustituye
 //hayque ponermas // daylist es id ul
}*/
/* si lo hacemos asi estamos llenando eldom de html
cada buble reeescribe el arbol de nodos por eso ahora hay 
 CREATEDOCUMENTFRAGMENT   es un contenedor donde escribimostodo el html que queremos 
        y lo inyectamos en una vez y se optimiza el navegador
        en las 7 vuelta no importa mucho pero en otras.... 
*/
// creamos el contenedor

const fragment = document.createDocumentFragment()


for (const day of days){
const itemList=document.createElement('LI') // creamos el elemento
itemList.textContent = day
fragment.appendChild(itemList)
}
daysList.appendChild(fragment),
console.dir(fragment);





// a cada vuelta generamos una etiquesta de lista