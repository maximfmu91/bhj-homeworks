let reveals = document.querySelectorAll('.reveal');

let revealVisible = function() {
    for (let reveal of reveals) {

    let revealTop = reveal.getBoundingClientRect().top;
    let revealBottom = reveal.getBoundingClientRect().bottom;

    if (revealTop < window.innerHeight && revealBottom >= 0) {
     reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    } 
  }
}

window.addEventListener('scroll', revealVisible);



