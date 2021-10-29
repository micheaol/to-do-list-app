import addtoLocal from './addToLocal.js';

import tasks from './tasks.js';

function getMyElement(para) {
  return document.querySelector(para);
}

function createMyElement(para) {
  return document.createElement(para);
}

const enterTaskInput = getMyElement('#enter-tasks');
const taskForm = getMyElement('#add-task-form');

function printTasks(e) {
  e.preventDefault();
  const li = createMyElement('li');
  const spanDec = createMyElement('span');
  spanDec.innerHTML = enterTaskInput.value;
  spanDec.className = 'span-desc';
  li.appendChild(spanDec);
  const ul = getMyElement('#inner-tasks');

  const checkBox = createMyElement('input');
  checkBox.type = 'checkbox';
  checkBox.name = 'checkbox';
  checkBox.className = 'check-box';
  li.prepend(checkBox);

  const dots = createMyElement('span');
  dots.innerHTML = '⋮';
  dots.className = 'dot-line';
  li.appendChild(dots);

  dots.addEventListener('click', (e) => {
    if (tasks.length > 0) {
      tasks.map((task) => {
        if (task.description === spanDec.innerHTML) {
          if (dots.innerHTML === '⋮') {
            dots.innerHTML = '&#x1F4BE;';
            spanDec.contentEditable = 'true';
            spanDec.addEventListener('input', () => {
              task.description = spanDec.innerHTML;
              localStorage.setItem('tasks', JSON.stringify(tasks));
            });
          } else {
            dots.innerHTML = '⋮';
            spanDec.contentEditable = 'false';
          }
        }
      });
    }
  });

  checkBox.addEventListener('change', (e) => {
    if (tasks.length > 0) {
      tasks.map((task) => {
        if (task.description === spanDec.innerHTML) {
          if (checkBox.checked) {
            task.completed = true;
            dots.innerHTML = '&#128465;';
            spanDec.classList.add('over-line');
            localStorage.setItem('tasks', JSON.stringify(tasks));
            dots.addEventListener('click', () => {
              dots.innerHTML = '&#128465;';

              if (task.completed === true) {
                let conIndex = tasks.indexOf(task);
                tasks.splice(conIndex, 1);
                e.target.parentNode.remove();
                localStorage.setItem('tasks', JSON.stringify(tasks));
              }
            });
          } else {
            task.completed = false;
            dots.innerHTML = '⋮';
            spanDec.classList.remove('over-line');
            localStorage.setItem('tasks', JSON.stringify(tasks));
          }
        }
      });
    }
  });

  ul.appendChild(li);

  addtoLocal();
}

taskForm.addEventListener('submit', printTasks);

export default printTasks;
