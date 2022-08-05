
/*
estructura datos q representan propiedades,valores y acciones que pueden realizar objetos

  
todos los objetos tienen propiedades o atributos y comportamientps o acciones representados por 
pares de clave (key): valor(value)


  mesa  : propiedad color, anchura    se representa objetos
  coche; acciones :arrancar,frenar ....serepresnta por funciones


  ob ej 
  const computer =´{
    scrennsize:17,
    model: 'macBook pro'
  }

  cont table = {
    material: 'wood',
    width: 160;
  }

acceder a propiedades y acciones ==== se usa nomenclatura del .

ej cont person ={
    name: 'Juan',
    agr : 26,
    son: [ 'laura', 'diego']
}

accedemos : console.log(person.name);
            console.log(person.age);
            console.log(person.son[0]);
            console.log(person.son[1]);

            cuando son pocas guay  pero cuando son muchas propiedades usamos bucle para recorrer elobjeto
 
              for(cont key in person){
                console.log(key);
              }  imprime la clave ( name age y son )

              for(const key in person){
                console.log(person[key]);
              } si queremos que imprima valores

              lo asume comoarray pero no loes */
            /*  const person={
                name:'juan',
                age: 26,
                son:['laura', 'diego']
              }
              console.log(person); // indica todo
             // console.log(person.name);// referencia nombre
              console.log(person['name']); //lo ponemos como string pq sino sale erro indefinido pq lo considera variable

              for(const key in person){
                console.log(key);
              }

                for(const key in person){
                console.log(person[key]);
              }
*/

  const person ={
    name: 'juan',
    age: 26,
    sons: ['laura','diego', 'pablo','marta','rosa']
  }

   /* 
   for(const son in person.sons){
        console.log(son);
    }// nos salen las posiciones  pq for in es lo q hace

    //para que salgan los nombres tiene q ser of

    for(const son of person.sons){
        console.log(son); // nos sale los valores  pq for of es lo q hace
    }
*/
//para imprimir el objecto como una frase 

console.log (`Hola ${person.name} tienes ${person.age} y tus hijos se llaman ${person.sons.join(',')}`); // join metodo especifico array



  






