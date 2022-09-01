const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')

//añadimos escucha tareas pendientes
pendingTasks.addEventListener('dragstart',(e) =>{
  e.dataTransfer.setData('text/plain', e.target.id)
  //e.dataTransfer.getData('text') // hace q tranfiera texto 
})
//dataTransfer
//setData: establece la informacion a compartir ( lo qpasamos txto plano)
// getData: establece ia info a obtener
pendingTasks.addEventListener('drag',(e)=>{
    e.target.classList.add('active')
})

pendingTasks.addEventListener('dragend',(e)=>{
  e.target.classList.remove('active')
})

//hay q poner evento pq sino no funciona dragover

finishedTasks.addEventListener('dragover',(e)=>{
    e.preventDefault()
})

finishedTasks.addEventListener('drop', (e)=>{
    e.preventDefault()
       const element=document.getElementById( e.dataTransfer.getData('text'))
       element.classList.remove('active')
   finishedTasks.appendChild(pendingTasks.removeChild(element))
})



finishedTasks.addEventListener('dragstart',(e) =>{
    e.dataTransfer.setData('text/plain', e.target.id)
    //e.dataTransfer.getData('text') // hace q tranfiera texto 
  })
  //dataTransfer
  //setData: establece la informacion a compartir ( lo qpasamos txto plano)
  // getData: establece ia info a obtener
  finishedTasks.addEventListener('drag',(e)=>{
      e.target.classList.add('active')
  })
  
  finishedTasks.addEventListener('dragend',(e)=>{
    e.target.classList.remove('active')
  })
  
  //hay q poner evento pq sino no funciona dragover
  
  pendingTasks.addEventListener('dragover',(e)=>{
      e.preventDefault()
  })
  
  pendingTasks.addEventListener('drop', (e)=>{
      e.preventDefault()
         const element=document.getElementById( e.dataTransfer.getData('text'))
         element.classList.remove('active')
     pendingTasks.appendChild(finishedTasks.removeChild(element))
  })