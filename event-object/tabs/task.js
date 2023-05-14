let tabs = document.querySelectorAll('.tab');
let tabsContent = document.querySelectorAll('.tab__content');

for(let elem of tabs) { 
  elem.addEventListener('click', tabActive);

  function tabActive() {
    
    tabs.forEach((tab) => {
      tab.classList.remove('tab_active');
    });

    elem.classList.add('tab_active');

    let indexTab = Array.from(tabs).indexOf(elem);

    tabsContent.forEach((content) => {
       content.classList.remove('tab__content_active');
    });

    tabsContent[indexTab].classList.add('tab__content_active');
  }
}
