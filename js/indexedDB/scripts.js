const indexedDB = window.indexedDB // si la constante y propiedada de window no puede llamarse igual asi que ponemos window o cambiamos nombre a la variable
const form = document.getElementById('form')// 2ª ponemos lugar formulario

if(indexedDB && form){ // pregunto si existe 
  //vamos a preguntar por precaucion si existe form
  let db  // genero variable guardar datos
const preguntal = indexedDB.open('nameBase',1)
//metodo que nos permite acceder base de datos tiene 2 parametros
//1o nombre base de datos y un numero entero 
//ahora vamos a usar metodos asincronos que nos da laapi 

preguntal.onsuccess= () => {
// todo ha ido bien
// si bien guardamos en la base de datos esto es para abrila
db = preguntal.result
console.log('OPEN',db)
}
preguntal.onupgradeneeded = () => {
//si necesita actualizacion/ este es para ir creandola
db = preguntal.result
console.log('Create',db)
const objectStorel = db.createObjectStore('Cosas')//genera alamcenes 
const objectStorel1 = db.createObjectStore('dias')
}

preguntal.onerror = (error) =>{
// si hay error le pasamos parametro error
   console.log('Error', error)
}
// ponemos el formulario a la escucha para saber cuando se ha enviado
form.addEventListener ('submit',(e) =>{
 e.preventDefault()
 //generamos un objecto de envio a añadir base da datos
 const data = {

 }
})
}