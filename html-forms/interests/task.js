let interests = document.querySelectorAll('.interest__check');


for (elem of interests) {
   elem.addEventListener('click', function() {
   let checkboxElem = this;
   let parentCheckBox = checkboxElem.closest('.interest');
   let childCheckBox = parentCheckBox.querySelectorAll('.interest__check');

   for (elem of childCheckBox) {
    elem.checked = checkboxElem.checked;
    }
});
}
