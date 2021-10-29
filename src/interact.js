import printTasks from './getTasks.js';
import addtoLocal from './addToLocal.js';
import tasks from './tasks';

// printTasks();
const threeDotLine = document.querySelectorAll('.dot-line');
const taskCheckBox = document.querySelectorAll('.check-box');
const deleteAllTasks = document.querySelector('#clear-all');
const reloadTasks = document.querySelector('#reload-icon');
const allRoot = document.querySelector('#parent-div');
const specDes = document.querySelector('.span-desc');

let filterTasks = [];
// function to deleteAll selected tasks:
function deleteSelectedTasks(e) {
  tasks = tasks.filter((task) => {
    if (task.completed !== true) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });
  // window.location.reload();
}

//function to delete with three-dots

threeDotLine.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    tasks.map((task) => {
      if (task.description === specDes.innerHTML) {
        // if (dots.innerHTML === '&#x1F4BE;') {
        //   console.log(task)
        // }
        console.log()
      }
    });
  });
});

deleteAllTasks.addEventListener('click', deleteSelectedTasks);

reloadTasks.addEventListener('click', (e) => {
  allRoot.textContent = '';
  window.setTimeout(() => {
    allRoot.reload(true);
  }, 200);
});
