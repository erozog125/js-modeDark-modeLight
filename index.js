
const btnDayNight = document.querySelector('#img-on-off');
//Seleccionar la impagen que se va a manipular como in boton al clickear en ella

btnDayNight.addEventListener('click',turnDayNight);
//Creamos el evento y apartir de esto le diremos que si se da click pasara a modo noche

function turnDayNight() {
    if (btnDayNight.classList[0] === 'img-on'){
        //Manipulamos la imagen y le decimos que si el boton esta encendido, que haga lo siguiente

        btnDayNight.src = 'on-png';
        // Manipulamos el atributo de este elemento por medio de la clase y lo cambiamos al que deseemos

        btnDayNight.classList.remove("img-on");
        //Eliminamos la clase de este elemento
        btnDayNight.classList.add('img-off');
        //Agregamos una clase nueva que maniipularemos luego   
    } else { // Y si su imagen esta encendida que haga lo siguiente
    btnOnOff.src = 'off.png'
    btnOnOff.classList.remove('img-off');
    btnOnOff.classList.add('img-on');
    }
    changeToMode();
}

const styles = document.getElementById('styles');
//Manipulamos el elemento link que se encarga de conectar el html con la hoja de estilos

const phoneImg = document.getElementById("img-light");
//Manipulamos el elemento que contiene el fondo del celular

function changeToMode(){
    if (styles.classList[0] === "styles-dark") {
      //Si el elemento link css tiene como clase on-style le vamos a decir que haga lo siguiente
        styles.href = "example/dark.css";
      //Le cambiamos la hoja de estilos de la cual se alimenta a la de modo noche
        styles.classList.remove("styles-dark");
      //Eliminamos la clase actual
        styles.classList.add("styles-light");
      //Le agregamos una clase nueva
        phoneImg.src = "example/imgDark.jpg";
      //Cambiamos la imagen de la cual se alimenta el fondo del celular
    } else {
    styles.href = "example/light.css";
    styles.classList.remove("styles-light");
    styles.classList.add("styles-dark");
    imgCellphone.src = "example/imgLight.jpg";
      // y si no que se queden los atributos del modo dia
    }
}