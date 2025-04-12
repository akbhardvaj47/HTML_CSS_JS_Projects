const btn = document.querySelector('#add-button');
const input = document.querySelector('#todo-input');
const ulElement = document.querySelector('#todo-list');

// This is for Stored the user task
btn.addEventListener('click', () => {
  const inputTask = input.value.trim();
  if (inputTask === '') return;

  const li = document.createElement('li');
  li.className = 'todo-item';

  li.innerHTML = `
    <input type="checkbox" class="todo-checkbox">
    <span class="todo-text">${inputTask}</span>
    <input type="button" value="Edit" class="edit">
    <input type="button" value="Delete" class="delete">
  `;

  ulElement.appendChild(li);
  input.value = '';
});

// Event delegation for checkbox, edit and delete
// This is for delete the task
ulElement.addEventListener('click', (e) => {
  const li = e.target.closest('li');

  if (e.target.classList.contains('delete')) {
    li.remove();
  }

  // This is for edit the task
  if (e.target.classList.contains('edit')) {
    const span = li.querySelector('.todo-text');
    const newTask = prompt('Edit your task:', span.textContent);
    if (newTask !== null && newTask.trim() !== '') {
      span.textContent = newTask.trim();
    }
  }

  // This is for complete the task
  if (e.target.classList.contains('todo-checkbox')) {
    const span = li.querySelector('.todo-text');
    span.classList.toggle('completed', e.target.checked);
  }
});