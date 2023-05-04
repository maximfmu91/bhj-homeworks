let timer = document.querySelector('#timer');
timer.textContent = 59;
intervalId = setInterval(() => {
    let start = +timer.textContent;
  if(start > 0) {
    timer.textContent = start - 1;
  } else {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');    
  }
}, 1000);