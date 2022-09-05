/*

obj WINDOW ==> es el obj global de le descienden 
    todos los objectoS:

    *alert() cosas rapidas
     prompt() 
     confirm()
     // no son buenas pq pausan la recarga pagina
     */

 /*    addEventListener('click',(e) =>{
        console.log(e)
     })*/
// al no ponnerle nada tb lo asocia al window
/*
if(confirm('acepta?')){
    console.log('el usuario acepto')
} else{
    console.log('el usario no acepto')
}

// es un booleano nose usa pq noselepudedar estilo
//se crea una ventana modal

*/
/*

objecto CONSOLE  ==>
        contiene la consola del navegador

        -console.log()
        console.dir() despliega linea es igual
        console.error() */
    //    console.table()

  /*      const person={
            name: 'dorian' ,
            age: 30,
            email:'a@gmail.com'
        }

            console.table(person);
        */
/*
objecto location : es el objecto que contiene la barra de 
             direcciones

    https://devolper.mozzila.org/es/docs/web/API/location
*//*
    location.href
     console.log(location.href) // sale url 
       // nos sirve tb para cambiar la url
       // location.href=https://google.com

     location.protocol
     console.log(location.protocol)//http

     location.host//127.0.0.5500
     console.log(location.host)

     location.pathname//js/practicando/objNativos/objectoNativos.html
     console.log(location.pathname)

     location.hash // #hola
     console.log(location.hash)

     location.reload// reload{ [native code]}
     console.log(location.reload) // suele ponersedentro if

*/
/* objecto HISTORY

   3metodos  back()
             forward()
             go(n|-n))

  propiedad Length

  /*objecto DATE

  para usarlo necesitamos instanciarlo */
  /*const fecha = new Date ();
  console.dir(fecha);

*/// NO ME SALE VIDEO 32 27.29
/*objecto Timers: establecer q una funcion se ejutecuando queramos

  setTimeout(()=>{code},delay-in-milisecond)

  *//*
 const button = document.getElementById('button');

  button.addEventListener('click', () => {
   const timeo =setTimeout(() => {
    console.log('adios');
   },3000)
   clearTimeout(timeo)
  })

  const saludar = () =>{
    console.log('hola')
  }
*//*
const button =document.getElementById('button')
const timeo =setTimeout(()  =>{
    console.log('adios');
}, 3000)

  //button.addEventListener('click',() =>{
    clearTimeout(timeo)
 //})
 */
const bon= document.getElementById('button')

const saludar=() =>{
    console.log('hola')


}

//const interval =setInterval(saludar, 3000)

let cont=0

const timeout=setInterval(()=>{
console.log(cont)
  cont++
 },1000 )

// lo paramos igual

bon.addEventListener('click',() =>{
    clearInterval(timeout)
})




     
