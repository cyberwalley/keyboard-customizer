
const keys = document.querySelectorAll('.key');
const toggler = document.querySelector('#switch');
const swatches = document.querySelectorAll('.swatch');


function handleKeyboardClick(e){
    //get the background color from selected swatches
    const selectedColor = document.querySelector('.selected');
    let defaultColor = window.getComputedStyle(selectedColor).getPropertyValue("background-color");

    // set the default color 
    const key = e.currentTarget;
    if (toggler.checked){
        key.style.color = defaultColor;
    }else{
        key.style.backgroundColor = defaultColor;
    }
    
    // add and remove key shadow
    key.classList.toggle('noshadow');
    
}

function handleSwatchClick(e){
    removeOutline();
    const swatch = e.currentTarget;
    swatch.classList.add('selected');
    
}

// select keys on keyboards
keys.forEach( key =>
    key.addEventListener('click', handleKeyboardClick)
);

// Select color swatches
swatches.forEach( swatch =>
    swatch.addEventListener('click', handleSwatchClick)
    
     
 );

// remove outline from previously selected swatch
function removeOutline(){
    swatches.forEach( swatch =>
        swatch.classList.remove('selected')
    );
}


 


   
//js-color- library


