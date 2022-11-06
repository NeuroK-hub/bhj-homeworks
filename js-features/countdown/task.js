const startSeconds = document.getElementById("timer");
let startTimer = +(startSeconds.textContent);

function countdown() {
    startTimer -= 1;
    if (startTimer === -1) {
        clearInterval(timer);
        return alert('Вы победили в конкурсе!');
    }
    return startSeconds.textContent = startTimer;
}

const timer = setInterval(countdown, 1000);

