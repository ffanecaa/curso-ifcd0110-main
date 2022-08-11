

  
    
  let numerosList=[];
  for(let i=0; i<=9;i++){
    let lista=prompt('ingresa un numero');
    numerosList.push(lista)
  }

document.getElementById('ele').innerHTML= `has indicado los siguientes numeros ${numerosList}`
let lis=(numerosList.sort((a,b)=>b-a)); // ordena de mayor a menor
console.log(lis)

document.getElementById('ele').innerHTML+=` el segundo numero mas alto es ${lis[1]}`
