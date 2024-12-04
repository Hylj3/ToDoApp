document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('button');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.createElement('ul');
    document.body.appendChild(taskList);

    addButton.addEventListener('click', () => {
        if (taskInput.value) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskInput.value;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });
});
