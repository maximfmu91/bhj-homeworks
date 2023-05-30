let poll = document.querySelector('.poll');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let title = response.data.title;
      let answers = response.data.answers;

      let pollTitle = document.getElementById('poll__title');
      pollTitle.textContent = title;
      let pollAnswers = document.getElementById('poll__answers');

      for (let i = 0; i < answers.length; i++) {
        let answer = answers[i];
        let buttonAnswer = document.createElement('button');
        buttonAnswer.className = 'poll__answer';
        buttonAnswer.textContent = answer;
        pollAnswers.appendChild(buttonAnswer);
        buttonAnswer.addEventListener('click', function() {
          alert('Спасибо, ваш голос засчитан!');
        });
      }

    }
});

xhr.send();

