
/*

asincrono => 

protocolo http 

wikip 
protocolo dde trnasferencia de hipertexto

http://developer.mozilla.org/es/docs/web/HTTP/status


las peticiones se hacen por php: apache

*/

const button = document.getElementById('button')

button.addEventListener('click',() => {
    let xhr   
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
       
    xhr.open('GET','https://jsonplaceholder.typicode.com/users')
   
   xhr.addEventListener('load',(data) => {
   
    const jsondata =JSON.parse(data.target.response)
    const list = document.getElementById('list')
    for(const userInfo of jsondata){
        const listItem =document.createElement('LI')
        listItem.textContent=`${userInfo.id} ${userInfo.name}`
        list.appendChild(listItem)
    }
   })
  
 
  xhr.send()
    })

    // saber sisoporta version / sin { pq solotiene una sentencia}
    // llamamiento ajax window.X
     // metodo post (debe  crear objecto)  o get 
    //else)//exclusivo explorer
    // usamos ese repositorio para pasar de php por el momento
    //pondremos lugar base datos
   //antes peticion teneomos q decir q hacemos con los datos xp es asincrono
   // console.dir(JSON.parse(data.target.respomse)) lo convertimos en objecto


