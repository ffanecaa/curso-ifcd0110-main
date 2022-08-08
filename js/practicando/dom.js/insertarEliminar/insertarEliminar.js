/*

parent.insertBefore(newelement,reference element)
parent.insertAdjacentElemenL(position,element)
parent.insertAdjacenHTML(position,HTML)
parent.inseradjacentText(position,text)
    |
b   |
    |
positions:
beforebegin- antes de q empiece (hermano anterior)
afterbegin-- desoues de q empiece (primer hijo)
befordend--- antes de q acabe (ultimo hijo)
afterend---- despues de q acabe (hermano siguiente)


parent.replaceChild(newChild, oldchild) remplaza un hijo por otro
*/






const list = document.getElementById('list')
const newElementoo = document.createElement('li')
newElementoo.textContent= 'soy el elementooo nuevo'

//list.appendChild(newElementoo)// con appenchild nos lo poneel ultimo
// por eso tenemos otrosllamdas

//parent.insertBefore(newelement,reference element
//list.insertBefore(newElementoo,list.children[0]);


//parent.insertAdjacentElemenL(position,element)

//list.insertAdjacentElement('beforebegin', newElementoo)
//lo mete como padre tendriamos que introducicr dependencia
//list.children[0].insertAdjacentElement('beforebegin',newElementoo)

// video 31


//remplazar nodo por otro
//list.replaceChild(newElementoo,list.children[1])

// otros
/* usa estos por q los considera mas faciles
parent.before()  
      antes q empiece hermano Anterior
parent.prepend()
      despeus de q empiece 1 hijo
parent.append()
      antes de qacabe ultimo hijo
parent.after() despues de q acabe hermano siguiente

child.replacewith(newChild)//


list.before(newElementoo) //ponemos children[0]

clonary eliminar ===>>

element.cloneNode(true of alse)
    true clona elemento e hijos
    fALSE CLONA ELELEMNTO SI NHIJOS
    -*/
//list.after(list.cloneNode(true))// cuidado si repite id 
/*
Element.remove()
    elimina NodeIterator*/

    Element.renoveChild(child[1]) eelomina nodo hijo




