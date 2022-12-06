const addTaskButton = document.getElementById('tasks__add');
const inputTaskField = document.getElementById('task__input');
const taskList =  document.getElementById('tasks__list');

function addTask(){
    if (inputTaskField.value) {
        taskList.insertAdjacentHTML('beforeEnd', 
            `<div class="task"> 
                <div class="task__title">
                ${inputTaskField.value}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>`);
    }
    inputTaskField.value = null;
}

inputTaskField.addEventListener('keyup', (ev) => {
    if (ev.key === 'Enter') {
        addTask;
    }
})
addTaskButton.addEventListener('click', (ev) => {
    ev.preventDefault();
    addTask();
})

taskList.addEventListener('click', (ev) => {
    ev.preventDefault();
    const deleteTaskButton = document.querySelectorAll('.task__remove');
    deleteTaskButton.forEach(element => {
        if (element === ev.target) {
            element.parentElement.remove();
        }
    });
}) 