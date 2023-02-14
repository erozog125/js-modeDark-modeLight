let author = 'Mateo Henao Martinez';

// Por medio de javascript daremos el efecto de cambio de botón en el toggle, cambiando la imagen.
// * creo una variable y por medio de ella identifico la imagen dentro del botón que viene del HTML.
const btnOnOff = document.querySelector('#img-on-off');
//Aplico al botón AddEventListener para que haga la función de encender y apagar el switch(toggle button) .
btnOnOff.addEventListener('click',turnOnOff);
//Creo la función turnOnOff
function turnOnOff() {
  //Reemplazo la imagen del botón, aplicando una condición para que sea dinámico.}
  // console.log(btnOnOff.classList);
  // console.log(btnOnOff.classList[0]);
  if (btnOnOff.classList[0] === 'img-on') {
    btnOnOff.src = 'on.png';
    btnOnOff.classList.remove('img-on');
    btnOnOff.classList.add('img-off');    
  } else {
    btnOnOff.src = 'off.png'
    btnOnOff.classList.remove('img-off');
    btnOnOff.classList.add('img-on');
  }
  changeToMode();    
}

// Antes del punto 5, debo llamar los objetos que requiero.
//Para efectos de este ejercicio lo voy a llamr desde acá.
const styles = document.getElementById('styles');
const imgCellphone = document.getElementById('img-light');
// 5. Crear una función que se encargue de elegir la hoja de estilos a utilizar
function changeToMode() {
  // 6. Crearemos un control que nos ayude a decidir cuál hoja de estilos utilizar.
  // Todo es cuestión de utilizar el estilo contrario al que esté asignado de MediaStreamAudioDestinationNode.
  if (styles.classList[0] === 'styles-dark') {
    styles.href = 'dark.css';
    styles.classList.remove('styles-dark')
    styles.classList.add('styles-light')
    imgCellphone.src = './imgDark.jpg'
    console.log(styles);
  } else {
    styles.href = 'light.css';
    styles.classList.remove('styles-light')
    styles.classList.add('styles-dark')
    imgCellphone.src = './imgLight.jpg'
    console.log(styles);
  }
}


