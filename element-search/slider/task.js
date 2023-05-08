let arrowPrev = document.querySelector('.slider__arrow_prev');
let arrowNext = document.querySelector('.slider__arrow_next');
let slides = document.querySelectorAll('.slider__item');
let currentSlide = 0;


arrowNext.onclick = function() {
    if (slides[currentSlide].classList.contains('slider__item_active')) {
        slides[currentSlide].classList.remove('slider__item_active');
        currentSlide++;
       }
       if(currentSlide >= slides.length) {
        currentSlide = 0;
       }
       slides[currentSlide].classList.add('slider__item_active');
}



arrowPrev.onclick = function() {
    if (slides[currentSlide].classList.contains('slider__item_active')) {
        slides[currentSlide].classList.remove('slider__item_active');
        currentSlide--;
    }
    if( currentSlide < 0) {
        currentSlide = slides.length - 1;
       }
       slides[currentSlide].classList.add('slider__item_active');
}
