/*
no es javaScipt es una Api pero muy usada
documento objecto modelo
es dom  toda la estructura HTML del doc
se genera arbol documento (nodo)


NODO  =====>

   CADA PARTE DEL ARBOL DEL DOC ES UN NODO

     12 TIPOS DE NODO ===>( MAS USADOS SON==>)
       ELEMENT NODE -1 --->  CUALQUIER ETIQUETA HTML
       TEXT NODE-3 ------->  ELCONTENIDODE LA ETIQUETA
       COMMENT NODE-8 ----> CUALQUIER COMENTQRIO ENHTML

       */

// ejemplos node

/* acceder en consola $0  nos sale h1
$0.id  accedemos a la id h1
$0.nodetype  nos devuelve el tipo de node
$0.nodeName ( imp el nombre mayuscula empiece)


Acceder a los nodos===> MRTODOD

A*** document.getElementByID('id') ==> accedemos por id, por eso reservamos 
las id para js y usamos class para css

B***document |elemento.querySelector('selectorCSS')==> accede al primer elemento que coincida
con un selector CSS

C*** document.querySelectorAll('selectorCSS')==> accede a todos loselementos que coincidan
con el selector css, DEVUELVE UN NODELIST */

//ejemplo de A
      //const title = document.getElementById('title')
//guardamos asi acceso a id title html con la constante

// podemos buscar por ocnsola laspropiedades 
//vamos a acceder al texto por la propiedad textContent

     //title.textContent='tengo lio con la consola'

//ejemplo de B
//********   Accedo por      console.dir($0)
   
//const paragraph = document.querySelector('.paragraph')//indicamos aqui que es una class
//en ppiono podemos acceder pseudoelementos
// podemos usar elemto.querySelector
/*
const paragraph = document.querySelector(".paragraph")
const span =document.getElementById('title').querySelector("span")
console.log(span.textContent);*/
/*
const paragraphs = document.querySelectorAll('.paragraph')
paragraphs[0].style.color ='red'
console.log(paragraphs);
*/
/*
const paragraph = document.querySelector('.paragraph')

console.log(paragraph)*/
/*
const paragraph = document.querySelector('.paragraph')
const span = paragraph.querySelector('span')
console.log(span.textContent);  */

//**************video 25 pendiente pq no me sale ************************