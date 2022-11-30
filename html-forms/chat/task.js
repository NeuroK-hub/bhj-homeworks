const [chat] = document.getElementsByClassName('chat-widget')
chat.addEventListener('click', ()=> chat.classList.add('chat-widget_active'))
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.querySelector('.chat-widget__input')
let d = new Date;

const bot = [
  'Где ваша совесть?',
  'Кто тут?',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
  'Добрый день! До свидания!',
  'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
  'Мы ничего не будем вам продавать!'
];

input.addEventListener('keypress', ()=>{
    if (event.key === 'Enter' && input.value){
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${d.getHours() +':'+ d.getMinutes()} </div>
          <div class="message__text">
            ${input.value}
          </div>
        </div>`

  if (event.key === 'Enter' && input.value){
    let rand = Math.floor(Math.random() * bot.length);
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${d.getHours() +':'+ d.getMinutes()} </div>
        <div class="message__text">
          ${bot[rand]}
        </div>
      </div>`
input.value = ''
    }
  }
})


