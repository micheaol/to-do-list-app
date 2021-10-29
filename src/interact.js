import tasks from './tasks.js';
import showToUi from './shouwToUi.js';

const deleteAllTasks = document.querySelector('#clear-all');

deleteAllTasks.addEventListener('click', () => {
  const filterTask = tasks.filter((task) => task.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(filterTask));

  window.location.reload();
});


window.onload = showToUi;
