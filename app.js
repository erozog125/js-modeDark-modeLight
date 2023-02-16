//By means of javascript we will give the effect of changing the image
//create a variable and through it identified the image inside the button that comes from the html
const btnOnOff = document.querySelector("#btnOnOff");
//I apply an event to the button so that it obtains the function of turning the switch on and off
btnOnOff.addEventListener('click', turnOnOff);
//I create the function turnOnOff
function turnOnOff() {
  //I replace the image of the button,applying a condition to make it dynamic
  console.log(btnOnOff.classList);
  console.log(btnOnOff.classList[0]);
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
// before further, i must call the objects that i need
// the purposes of this exercise i will call it from here
const styles = document.getElementById('styles');
const imgCellphone = document.getElementById('imgLight');
//create a function that is in charge of choosing the style sheet to use
function changeToMode() {
  //we will create a control that helps us decide which style sheet to use
  //it's all matter of use the opposite style sheet to the one that was assigned from MediaStreamAudioDestinationNode.
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
