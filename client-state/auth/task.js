const signinForm = document.getElementById('signin__form');
const welcome = document.querySelector('.welcome');
const userId = document.getElementById('user_id');
const signin = document.querySelector('.signin');
const exitButton = document.querySelector('.exit_button');
const controlsArray = Array.from(document.querySelectorAll('.control'));


if (localStorage.getItem('id')) {
    userId.textContent = localStorage.getItem('id');
    welcome.classList.add('welcome_active');
    signin.classList.remove('signin_active');
}

signinForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = new FormData(document.forms.form);

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

    xhr.send(formData);

    xhr.responseType = 'json';

    xhr.onload = function () {
        if (!xhr.response.success) {
            alert('Неверный логин/пароль');
            
            controlsArray.forEach((e) => {
                e.value = '';
            })
        } else {
            localStorage.setItem('id', xhr.response.user_id);
            userId.textContent = xhr.response.user_id;
            welcome.classList.add('welcome_active');
            signin.classList.remove('signin_active');
        }
    }
})

exitButton.addEventListener('click', () => {
    localStorage.clear();

    welcome.classList.remove('welcome_active');

    signin.classList.add('signin_active');

    controlsArray.forEach((e) => {
        e.value = '';
    })
})