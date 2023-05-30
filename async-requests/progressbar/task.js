const progress = document.getElementById( 'progress' );
const form = document.getElementById( 'form');


form.addEventListener( 'submit', function (event) {
    event.preventDefault();
    let fileInput = document.getElementById('file');

    let formData = new FormData();
    formData.append('file', fileInput.files[0]);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

    xhr.upload.onprogress = function(event) {
      let percentLoad = (event.loaded / event.total);
     progress.value = percentLoad;
   }

      xhr.upload.onload = function() {
        alert( 'Данные полностью загружены на сервер!' );
      }

      xhr.send(formData);
})

