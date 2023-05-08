let menuLinks = document.querySelectorAll('.menu__link');

for (let link of menuLinks) {
  link.onclick = function() {
    let menuSub = link.closest('.menu__item').querySelector('.menu_sub');
    if (menuSub) {
        let menuActive = document.querySelectorAll('.menu_active');
        menuActive.forEach(function(active) {
        active.classList.remove('menu_active');
        });
    menuSub.classList.toggle('menu_active');
    return false;
      }
    }
}

