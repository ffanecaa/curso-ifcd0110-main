const fileInput = document.getElementById('file')
const dropZone =document.getElementById('drop-zone')

dropZone.addEventListener('click', ()=> fileInput.click())
dropZone.addEventListener('dragover',(e)=> {
    e.preventDefault() // lo prevenimos
    dropZone.classList.add('drop-Zone--active')
})


dropZone.addEventListener('dragleave',(e)=> {
    e.preventDefault() // lo prevenimos
    dropZone.classList.remove('drop-Zone--active')
})
dropZone.addEventListener('drop',(e)=> {
    e.preventDefault() // lo prevenimos
    fileInput.files =e.dataTransfer.files
    console.log(fileInput.files);
})

fileInput.addEventListener('change',(e) =>{
    console.log(fileInput.files);
}
)
