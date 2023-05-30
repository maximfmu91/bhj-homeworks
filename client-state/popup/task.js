let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);  
  }
  
const getCookie = (name) => {
  const value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts
      .pop()
      .split(";")
      .shift();
  }
};

if (!getCookie("modalClosed")) {
  modal.classList.add('modal_active');
}

modalClose.addEventListener('click', function() {
  modal.classList.remove('modal_active');
  setCookie('modalClosed', true);
});



