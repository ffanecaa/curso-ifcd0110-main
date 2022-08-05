/*
situarnos en un nodo y saber movernos por el

padre ==> parent-- nodo delque desciende

 * parentNode : devuelve el nodo padre
                   (q puede no ser un elemento)

 *  parentElement: devuelve el nodo elemento padre                  

Nota  los nodos del tipo Document y DocumentFragment nunca
van a tener elemento padres devolversn null


*/


const parent = document.getElementById('parent')

console.log(parent.parentNode);// da nav nav
console.log(parent.parentElement) 

/*
 hijo ==> nodosdescendientes padre

  * childNodes-- dev todos los nodos hijos
  * children --- dev todos los nodos elementos hijos
  * firstChild-- dev el primer nodod hijo
  * firstElementChild-- devel primer nodo ele hijo
  * lastChild---- dev el ultimo nodohijo
  * lastelementchild-- dev el ultimo nodo elem hijo
  * hasChildren--- true si el nodoes hijo false si notien
 

 */