/* eslint-disable import/no-cycle */
import tasks from './tasks.js';

function getMyElement(para) {
  return document.querySelector(para);
}

function createMyElement(para) {
  return document.createElement(para);
}

export function addtoLocal() {
  tasks.forEach((elem) => {
    const key = elem.index;
    localStorage.setItem(key, JSON.stringify(elem));
  });
}

function printTasks() {
  addtoLocal();
  Object.keys(localStorage).forEach((key) => {
    const data = JSON.parse(localStorage.getItem(key));
    if (data) {
      const li = createMyElement('li');
      li.innerHTML = data.description;
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

      checkBox.addEventListener('change', (e) => {
        if (e.target.checked) {
          data.completed = true;
          li.classList.add('over-line');
          const key = data.index;
          localStorage.setItem(key, JSON.stringify(data));
          li.classList.add('over-line');
        } else {
          data.completed = false;
          li.classList.remove('over-line');
          const key = data.index;
          localStorage.setItem(key, JSON.stringify(data));
          li.classList.remove('over-line');
        }
      });
      if (data.completed === true) {
        li.classList.add('over-line');
        checkBox.checked = true;
        ul.prepend(li);
      } else {
        li.classList.remove('over-line');
        checkBox.checked = false;
        ul.prepend(li);
      }
    }
  });
}

export default printTasks;
