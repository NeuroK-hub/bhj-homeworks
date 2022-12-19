const inputElement = document.querySelector('.tasks__input');
const addButton = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');
const tasksInput = document.querySelector('.tasks__input');
let tasksArray;
let i = 0;

function addTaskHTML() {
    if (inputElement.value) {
        tasksList.insertAdjacentHTML('afterbegin', `<div class="task number_${i}">
        <div class="task__title">
          ${inputElement.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`);

        inputElement.value = '';

        let element = document.querySelector(`.number_${i + ''}`);

        tasksList.firstElementChild.querySelector('.task__remove').addEventListener('click', (event) => {
            event.preventDefault();

            element.remove();
        })

        i++;
    }
}

function setLocalStorage() {
    localStorage.setItem('tasksListHTML', document.querySelector('.tasks__list').innerHTML)
}

function getLocalStorage() {
    if (localStorage.getItem('tasksListHTML')) {
        document.querySelector('.tasks__list').innerHTML = localStorage.getItem('tasksListHTML');
    }

    tasksArray = Array.from(document.querySelectorAll('.task'));

    tasksArray.forEach((e) => {
        e.className = 'task';

        e.querySelector('.task__remove').addEventListener('click', (event) => {
            event.preventDefault();
            e.remove();
        })
    })
}

addButton.addEventListener('click', (event) => {
    event.preventDefault();

    addTaskHTML();
})

tasksInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTaskHTML();
    }
})

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)