document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector('.todo-input');
    const addButton = document.querySelector('.add-button');
    const todosContainer = document.querySelector('.todos');

    addButton.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task) {
            addTodo(task);
            todoInput.value = '';
        }
    });

    todosContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        }
    });

    function addTodo(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const button = document.createElement('button');
        button.textContent = 'Delete';
        li.appendChild(button);
        todosContainer.appendChild(li);
    }
});
