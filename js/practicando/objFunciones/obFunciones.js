/*
programacion orientada a objetos

unparadigma de programcion que actualiza laforma de progrmaar anterior

conceptos fundamentale:

clase aparecio ultima actualizacion
herencia
objeto
metodo
evento 
.... 

** CLASE  se usa cuando tenemos objetos con la misma "estructura"
const person ={
    name: 'juan',
    age: 26,
    sons: ['laura','diego', 'pablo','marta','rosa']
  }
  const person2 ={
    name: 'pablo',
    age: 36,
    sons: ['laura','diego', 'pablo','marta','rosa']
  }






cuando creamos un objecto se denomina INSTANCIAR
necesitamos una funcion constructora . 
    se tiene que llamar constructor yse ejecuta cada vez q creamos un objecto


    class Persona{  // recomendado empiece mayus

        constructor(nombre,apellido,edad){           // obligatorio la palabra constructor

             this.nombre = nombre
             this.apellido = apellido  // this palabra reservada del lenguaje
             this.edad = edad
        }
    }


    this hace referencia al objecto 
    nombre del objecto =nombre del parametro
    apellido del objecto = apellido del parametro... 

    se le puede asignar propiedades  q nohaya en los parametros,pero siempre usando this

        this.datos=`${nombre} ${apellido} ${edad}`



        los objetos pueden tener funciones asociadas a el pero seles denomina METODOS

        se pone fuera constructor

        saludar(){
            return `hola me llamo ${this.nombre} ytengo ${this.edad} años`;
        }


        para crear objto usando Clase o Plantilla se hace con la palabra reservada 
        NEW y el nombre de la clase que queremos usar

          const juan = new Persona ('juan', 'garcia', 23)

          una vez INSTANCIADO el objeto podremos acceder a su propiedades y metodos usando
          la nomenclaturadel puntoo buscando su propiedad en el objeto

           juan.apellido
           juan.apellido
           juan.edad
           juan.saludar()

           juan['nombre']
           juan['apellido']
           juan['edad'] 
           juan['saludar']()   // es especial la llamada

           */

class Persona {
    constructor(nombre,apellido,edad){
        this.nombre= nombre
        this.apellido = apellido
        this.edad = edad

        this.datos= `  me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    } // podriamos eliminar el this pq esta dentro de la funcion



saludar(){  // siempre con this pq estamos fuera
    return ` hola me llamo ${this.nombre} y tengo ${this.edad} años`
}
}

const juan =new Persona('juan','garcia',25)
const marta = new Persona ('marta','garcia',36)
console.log(juan);
console.log(juan.saludar())
console.log(marta)
















