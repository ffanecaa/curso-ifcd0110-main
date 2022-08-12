const form = document.getElementById('form')
const characters = document.getElementById('characters')
const table = document.getElementById('table')

const getData = (id) =>{
    let xhr
    if(window.XMLHttpRequest) xhr= new XMLHttpRequest()
    else xhr = new ActiveXObject('Microsoft.XMLHTTP')

    // tenemos q preguntar si id existe
    if ( id == undefined){
       xhr.open('GET', 'marvel.php')
       xhr.addEventListener('load', (data)=>{
        const dataJSON = JSON.parse(data.target.response)
        console.log(dataJSON)
       })
    }else{

    }
  xhr.send()
}
getData()