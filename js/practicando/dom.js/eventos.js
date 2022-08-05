/*

  eventos 00> cualquier cosa que sucede dentro del elemnto 
     
  hay eventos q ocurren automaticamente

     * el contenido se ha leido
     * rl contenido se ha cargado 
     * el usario mueva raton/ tecla 
     * ventna cerrada
     * ....
     * 
     * <p onclick ="saludo()" > soy un parafo </p>
          esto ya no se hace 
        si habia q hacer muchas cosas era un lio

        <p (clic) ="saludo()>soy un parrafo </p>solo en angular


        Element.addEventListener('event', callback)dispara
        */
//eventos de raton
       const button = document.getElementById('button')
        const box = document.getElementById('box')
       /* button.addEventListener('click',()=> {
            console.log('CLIck')
        })*/

/*
 button.addEventListener('dblclick',() => {
    console.log('doble click')
 })
*/
/*
 box.addEventListener('mouseenter',() => {
   box.style.background = 'green'
 })

 box.addEventListener('mouseleave',() => {
   box.style.background = "yellow"
 })
 //equivalente hover pero no es la forma correcta pq es por class

box.addEventListener('mouseenter',() => {
   box.classList.add('green')
})*/
  // box.addEventListener('mouseLeave',() => {
     // box.classList.add('red')
   // el segundo no escribe por cascada css ya q green es el ultimo
// tenemos dos soluciones entonces :
/*  box.classList.add.renove('green') antes opcion red
   PERO mejor opcion: class enhtml box red*/
/*
   box.addEventListener('mouseenter',() => {
      box.classList.replace('red','green')
     })
   box.addEventListener('mouseleave',() => {
    box.classList.replace('green','red')
   })
*/
box.addEventListener('mousedown',() => {
  console.log('caja');//pulsamos boton izq
})
box.addEventListener('mouseup',() => {
  console.log('dia');
}) // soltamos botton izq
    

// se usan ej la api drahandroop!! para arrastrar elementos

/*
box.addEventListener('mousemove',() =>{
  console.log( 'moviendo')
})
*/

/* eVENTOS DE TECLADO 

keydown -- pulsamos
keyup -- soltamos
keypress-- teclapulsada */

const input = document.getElementById('input')

input.addEventListener('keydown',()=>{
  console.log('has pulsado')
})
input.addEventListener('keydoup',()=>{
  console.log('has putocrome')
})
input.addEventListener('keypress',()=>{
  console.log('perdida tiempo pulsado')
})