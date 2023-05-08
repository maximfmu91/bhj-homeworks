let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let showSuccess = document.querySelector('.show-success');
let modalClose = document.querySelectorAll('.modal__close');


modalMain.classList.add('modal_active');

modalClose.forEach(function(closeButton) {
    closeButton.onclick = function() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
  }
})

showSuccess.onclick = function() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
}




