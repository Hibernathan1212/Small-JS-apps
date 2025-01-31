let myForm = document.getElementById('imgurl');
let targetImage = document.getElementById('targetimage');
let inputRange = document.querySelectorAll('.slider');

myForm.addEventListener('submit', function(e) {
    let urlImage = document.getElementById('onlineurl');
    let urlImageval = urlImage.value;
    if(urlImageval.length){
      targetImage.setAttribute('src',urlImageval);
        urlImage.value = '';
    }
      
    e.preventDefault();
    // console.log('Image displayed');

    for (let i = 0; i < inputRange.length; i++) {
        inputRange[i].addEventListener('input', editImage);
    }
});

function editImage() {
    let gs = document.getElementById('gs');
    let blur = document.getElementById('blur');
    let huerotate = document.getElementById('hue-rotate');
    let sepia = document.getElementById('sepia');
  
    let gsval = gs.value;
    let blurval = blur.value;
    let huerotateval = huerotate.value;
    let sepiaval = sepia.value;
  
    targetImage.style.filter = 'grayscale('+gsval+'%) blur('+blurval+'px) hue-rotate('+huerotateval+'deg) sepia('+sepiaval+'%)';
}

let sliderForm = document.getElementById('slider-form');

sliderForm.addEventListener('reset', function() {
    sliderForm.reset();
    setTimeout(function() {
        editImage();
    }, 0)
})