// Por medio de javascript daremos el efecto de cambio de botón en el toggle, cambiando la imagen.
// * creo una variable y por medio de ella identifico la imagen dentro del botón que viene del HTML.
const btnOnOff = document.querySelector('#buttonOff');
//Aplico al botón AddEventListener para que haga la función de encender y apagar el switch(toggle button) .
btnOnOff.addEventListener('click',turnOnOff);
const htmlTag = document.getElementById("htmlTAG");
const styles = document.getElementById('styles');
const imgCellphone = document.getElementById('img-light');
//Creo la función turnOnOff
function turnOnOff() {
  if (htmlTag.dataset.theme === "light") {
    htmlTag.dataset.theme = "dark";
    imgCellphone.src = './assets/img/imgDark.jpg'
  } else {
    htmlTag.dataset.theme = "light";
    imgCellphone.src = './assets/img/imgLight.jpg'
  }  
}


