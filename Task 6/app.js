const left=document.querySelector('.left')
const right=document.querySelector('.right')
const slider=document.querySelector('.slider')
const images=document.querySelectorAll('.image')


let slideNumber=1;
const length= images.length;

const nextSlide=() =>{
    slider.style.transform=`translateX(-${slideNumber*800}px)`;
    slideNumber++;
}

const prevSlide=() =>{
    slider.style.transform=`translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--;
}

const getFirstSLide =()=>{
    slider.style.transform=`translateX(0px)`;
    slideNumber=1
}

const getLastSLide =()=>{
    slider.style.transform=`translateX(-${(length-1)*800}px)`;
    slideNumber=length;
}


right.addEventListener('click',()=>{
    if(slideNumber<length){
    nextSlide()}
    else{
       getFirstSLide()
    }
})

left.addEventListener('click',()=>{
    if(slideNumber>1){
    prevSlide()}
    else{
       getLastSLide()
    }
})