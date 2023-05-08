let clicker = document.getElementById('clicker__counter');
let Cookie = document.querySelector('.clicker__cookie');

clicker.textContent = 0;

Cookie.onclick = function clickCount() {
    clicker.textContent++;
  if(Cookie.width === 200) {
    Cookie.width = 220;
  } else {
    Cookie.width = 200;
  }
}
