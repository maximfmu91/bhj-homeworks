let dropList = document.querySelector('.dropdown__list');
let dropDown = document.querySelector('.dropdown__value');
let dropdownLinks = document.querySelectorAll('.dropdown__link');

function drop() {
    dropList.classList.toggle('dropdown__list_active');
}

dropDown.addEventListener('click', drop);

for(let link of dropdownLinks) {
   link.addEventListener('click', chosen);
   function chosen(event) {
    event.preventDefault();
    dropDown.textContent = link.textContent;
    dropList.classList.remove('dropdown__list_active');
   }
} 





