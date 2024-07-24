document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const completedList = document.getElementById('completed-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const listItem = document.createElement('li');
        const date = new Date();
        listItem.innerHTML = `${task} <span class="date">${date.toLocaleString()}</span>`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', () => {
            completeTask(listItem);
        });

        listItem.appendChild(completeButton);
        taskList.appendChild(listItem);
    }

    function completeTask(taskItem) {
        taskItem.classList.add('completed');
        taskItem.removeChild(taskItem.querySelector('button'));
        completedList.appendChild(taskItem);
    }
});
