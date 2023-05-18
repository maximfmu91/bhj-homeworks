const chat = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );


chat.addEventListener('click', function() {
  chat.classList.add('chat-widget_active');
});


function sendMessage(text, isClient = true) {
    let messageClass;
    if (isClient) {
      messageClass = 'message message_client';
    } else {
      messageClass = 'message';
    }

    let time = new Date().toLocaleTimeString('ru-RU', {hour: 'numeric', minute: 'numeric'});
    let comment = `<div class="${messageClass}">
    <div class="message__time">${time}</div>
    <div class="message__text">${text}</div>
    </div>`;
    messages.innerHTML += comment;
}

function botAnswer() {
  let answers = [
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Что вас интересует?',
    'Все операторы сейчас заняты, обратитесь через неделю',
    'Извините, но мы не можем вам помочь.',
    'Мы всегда рады помочь нашим клиентам!',
    'Кто тут?',
  ];
  let randomAnswer = Math.floor(Math.random() * answers.length);
  return answers[randomAnswer];
}



input.addEventListener('keydown', function (event) {
  if (event.code == "Enter" && input.value.length > 0) {
  let clientMessage = input.value;
  sendMessage(clientMessage, true);

  setTimeout(function () {
  let botMessage = botAnswer();
  sendMessage(botMessage, false);
  }, 1000)
}
})

