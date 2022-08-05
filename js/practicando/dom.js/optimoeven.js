/*delegacionde eventos

*/



const gallery = document.getElementById('gallery')


/* si quremos hacer un form sise lo tenemos que hacer a cada uno come muchos recursos
asi q esmejor hacerlo poraqui para saber  donde se ha hechoclick
y lo hacemos por el padre 1º div   */
/*
gallery.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
})*/

//con esto nos indican donde hemos hecho click 
// ya  nossale con e target pero si expecificamos 
//con textContent es mas evidente


gallery.addEventListener('click', (e)=>{
    e.target.classList.add('red');
})

/* con un formulario añadir un eventoes un coñazo 
vuelvo al eventos 2 para aplicar en  formularios*/