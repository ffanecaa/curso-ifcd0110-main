// llamamos al modo oscuro

const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors= document.getElementById('toggle-colors');
const rootStyles= document.documentElement.style;
// cambio a modo oscuro.
toggleTheme.addEventListener('click',() =>{ // llamamos
document.body.classList.toggle('dark');//  tiene class dark
  if(toggleIcon.src.includes('moon.svg')){// si tiene iconomoon
     toggleIcon.src='assets/icons/sun.svg';// modificar imagen
     toggleText.textContent= 'Light Mode';// modificar texto
  }else{
    toggleIcon.src='assets/icons/moon.svg';// modificar imagen
     toggleText.textContent= 'Dark Mode';// modificar texto
  }
});

//escuchasmos colores 
toggleColors.addEventListener('click',(e)=>{
    console.dir(e.target.dataset);  // nos salen los colores enconsola cuando hacemos click
                                    // dataset = data ahora localizamos variables css generamosconst arriba
  // tapamos esto q nos ayudo a comprender
  rootStyles.setProperty('--primary-color', e.target.dataset.color);// lo que pusimos en el html data-color si hubieramos puesto data-perro seria dataset.perro
})