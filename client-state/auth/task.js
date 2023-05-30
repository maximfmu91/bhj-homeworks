let form = document.getElementById('signin__form');

function updateBlocks (){
    let signinBlock = document.getElementById('signin');
    let welcomeBlock = document.getElementById('welcome');
    let userIdSpan = document.getElementById('user_id');
    let localId = localStorage.getItem('user_id'); 
    if (localId) {
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
        userIdSpan.textContent = localId;
      } else {
        welcomeBlock.classList.remove('welcome_active');
        signinBlock.classList.add('signin_active');             
      }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');    
    xhr.responseType = 'json';
    xhr.addEventListener('readystatechange', function(){
        if(xhr.readyState === xhr.DONE && xhr.status >= 200 && xhr.status < 300){
        let response = xhr.response; 
        if (response.success) {
            let userId = response.user_id;
            localStorage.setItem('user_id', userId); 
            updateBlocks ();
            } else {
                alert('Неверный логин/пароль');
            }}
    });
    xhr.send(formData);
});

window.addEventListener('load', updateBlocks);
