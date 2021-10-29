
import tasks from './tasks.js';
import showToUi from './shouwToUi.js';

const deleteAllTasks = document.querySelector('#clear-all');
const reloadTasks = document.querySelector('#reload-icon');


deleteAllTasks.addEventListener('click', (e) => {
  let filterTask = tasks.filter((task) => task.completed !== true);
  localStorage.setItem('tasks', JSON.stringify(filterTask));
});

// reloadTasks.addEventListener('click', (e) => {
// //  showToUi()
 
// });

window.onload = showToUi;