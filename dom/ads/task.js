let rotators = document.querySelectorAll('.rotator__case');
let rotatorIndex = 0;

let intervalId = setInterval(() => {

    if(rotators[rotatorIndex].classList.contains('rotator__case_active')) {
        rotators[rotatorIndex].classList.remove('rotator__case_active');
        rotatorIndex++;
    } 
    if(rotatorIndex >= rotators.length) {
        rotatorIndex = 0;
    }
    rotators[rotatorIndex].classList.add('rotator__case_active');
}, 1000);

