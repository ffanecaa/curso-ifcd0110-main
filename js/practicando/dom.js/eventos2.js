/*

objeto evento: nosda info sobre  */

const form = document.getElementById('form')
const input = document.getElementById('input')
//const button = document.getElementById('button')
/*
input.addEventListener('keyup', () => {
    console.log(input.value);
})



input.addEventListener('keyup', () => {
    console.log(event); 
})
  no funcionaen moz asi que podemos enviar
 el evento como parametro.

 input.addEventListener('keyup', (e) => {
    console.log(e);
})*/
//saleinfo evento
//otra opcion mas burra

/*

addEventListener('click',(e)=>{
    console.log(e);
})   */   // tendria q ir window como en alert perono se pone

/* en la lista que nos despliega tenemos 
a key independiente que nos da el valor de  latecla pulsada
asique poniendo console.log(e.key) accedemos a llea addEventListener
   input.addEventListener('keyup',(e)=>{
  console.log(e.key);
    })*/  /*  importante para trabajar la api de los mas usados target
    punto donde se origina el evento */
/*
 button.addEventListener('click',(e)=>{
    console.dir(e.target.textContent);// si no funciona .log
 })  */


 /*
el comportamiento por defecto es enviarse yasea pdf mail ... asi q se reinicie
sino queremos q se reenvie por ejemplo en ajax
 escuchamos submit
 */
form.addEventListener('submit',(e)=>{
    e.preventDefault()// le ponemos para romper comportamiento
    console.log('el formulario se ha enviado')
})  // si hacemosesto es un suspiro elmensaje en la consola 

//para estos casos tenemos a  preventDefault   para decirle 
//el elemnto que no se ejecute 
// automaticamenrt*/


const link=document.getElementById('link')

link.addEventListener('click',(e)=>{
    e.preventDefault()  
    button.click()//conveti al link en funcion del formulario
    //podriaservir para disparar a un envento y noqueremos esperar
  //  a q lohaga el usario si  loponemos alfinal se activaria lafuncion
  //cada vex q se recarge la pagina
})
// no iria a google pq no hace su comportamiento por defecto
// util si queremos que elusuario vaya al link enun det momento


/* los enventos los podemos escuchar o forzar que sedispare*/

//  form.submit()const button = document.getElementById('button')
const button = document.getElementById('button')

 button.addEventListener('click',() => {
    input.value = 'has hecho click'
})


