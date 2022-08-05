/* 
atributos 
  element.getAttribute('attribute')
  element.setAttribute('atribute',value)00> modifica el valor
*/
               /*
const title = document.getElementById('title')
const name = document.getElementById('names')

console.log(title)

console.log(names.getAttribute('type'));// tip text acceder atributo 

names.setAttribute('type','number')// va cambiando el tipo de input
//en el desplegable Date, number,radio

console.log(names)
                                 */
/* clases
element.classList.add ('class', 'class'...) añadir clases 
element.classList.remove ('class', 'class'...) eliminar
element.classList.toggle ('class', '[,force]) mira si la tiene sino no 
element.classList.contains ('class')
element.classList.replace ('oldclass', 'newclass'...)


*/
/*

title.classList.add('main-title')
//title.classList.renove('title')
console.log(title) // h1#title.title.main-title
title.classList.remove('title')
console.log(title)//h1#title.main-title

if(title.classList.contains('title')){
    console.log('tiene la class title')
}else{
    console.log( 'no tiene la clase title')// no tiene la classe title
}
title.classList.replace('main-title','title')
console.log(title)// h1#title.title se carga main-title y sustituye por title

*/
/* atributos 'directos' sin que se despleguen en  la relacion console */ 
//console.log(title.innerHTML) // atributos desde js
//console.log(title.textContent)// atributos desde js 

    /* aunq inner  ytextc dan lo mismo no innert recogeria tb las etiquetas de existir
    textconten no solo texto plano*/

    console.log(names.value.length)// dorian lo esqrive dentro del cuadrado del formulario
