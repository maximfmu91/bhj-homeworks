
let input = document.querySelector('.tasks__input');
let tasksList = document.querySelector('.tasks__list');
let taskForm = document.getElementById('tasks__form');


function createTask (text) {

    let task = document.createElement('div');
      task.className = 'task';

    let taskTitle = document.createElement('div');
      taskTitle.className = 'task__title';
      taskTitle.textContent = text;
      task.appendChild(taskTitle); 

    let taskRemove = document.createElement('a');
      taskRemove.href = '#';
      taskRemove.className = 'task__remove';
      taskRemove.innerHTML = '&times';
      task.appendChild(taskRemove);  

      tasksList.appendChild(task);

      taskRemove.addEventListener('click', function() {
        task.remove();
      })

}


taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value.length > 0) {
       let message = input.value;
       createTask(message); 
       input.value = '';
    }
})