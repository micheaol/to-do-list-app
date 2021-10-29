import tasks from './tasks.js';
import showToUi from './shouwToUi.js';

const deleteAllTasks = document.querySelector('#clear-all');

deleteAllTasks.addEventListener('click', () => {
  const filterTask = tasks.filter((task) => task.completed !== true);
  // filterTask.forEach((data, i) => {
  //   data.index = i + 1;

  // });
  localStorage.setItem('tasks', JSON.stringify(filterTask));

  window.location.reload();
});

// reloadTasks.addEventListener('click', (e) => {
// //  showToUi()

// });

window.onload = showToUi;
