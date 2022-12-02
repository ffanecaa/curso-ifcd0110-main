async function inserta(){
    let header = await fetch('header.html');
    let cabecera =await header.text();
    document.getElementById('header').innerHTML=cabecera
   let footer = await fetch('footer.html');
    let elh =await footer.text();
    document.getElementById('footer').innerHTML=elh
    
    
}
window.onload=function(){
    inserta();
}