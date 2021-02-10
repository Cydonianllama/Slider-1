let root = document.documentElement;
let radioButtons = document.querySelectorAll("input[name = 'slider']");
let slidesContainer = document.querySelector(".slides");

const btnNext = document.getElementById('btn-next');
const btnPrevious = document.getElementById('btn-previous');

let stateSlider = {
    currentSlidePos : 1,
    quantitySlides : 4
}

// @in number - number 
function calculateWidthSlides(container,qtyItems,meassurementContainer){
    let meassurement = meassurementContainer;
    container.style.setProperty('--width-container-slides',(meassurement*qtyItems).toString() + '%');
}

function getStatesSlider(){
    return stateSlider;
}

function MoveSlides(slidesContainer, states, direction){

    function move(simbol){
        console.log(stateSlider)
        slidesContainer.style.left = simbol + (100 * (states.currentSlidePos - 1)).toString() + "%";
    }

    if (direction === 'right'){
        if (states.currentSlidePos<states.quantitySlides) states.currentSlidePos = states.currentSlidePos + 1;
        else states.currentSlidePos = 1
        move("-");
    }else if (direction === 'left'){
        if (states.currentSlidePos === 1) states.currentSlidePos = states.quantitySlides;
        else states.currentSlidePos = states.currentSlidePos - 1
        move("-")
    }else{
        console.log('an error has ocurred into move slides')
    }
    
}

calculateWidthSlides(root,getStatesSlider().quantitySlides,100);

btnNext.addEventListener('click',(event)=>{
    MoveSlides(slidesContainer,getStatesSlider(),'right')
    event.preventDefault();
})

btnPrevious.addEventListener('click',(event)=>{
    MoveSlides(slidesContainer, getStatesSlider(), 'left')
    event.preventDefault();
})

radioButtons.forEach((radio,index) => {
    radio.addEventListener('click',(event)  => {
        let states = getStatesSlider();
        states.currentSlidePos = index + 1;
        slidesContainer.style.left = "-" + (100 * (states.currentSlidePos - 1)).toString() + "%";
        event.preventDefault();
    })
})
