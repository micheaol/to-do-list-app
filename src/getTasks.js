/* eslint-disable import/no-cycle */
import tasks from './tasks.js';

function getMyElement(para) {
  return document.querySelector(para);
}

function createMyElement(para) {
  return document.createElement(para);
}

function printTasks() {
 
  Object.keys(localStorage).forEach((key) => {
    if (key) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        const li = createMyElement('li');
        const spanDec = createMyElement('span');
        spanDec.innerHTML = data.description;
        spanDec.className = 'span-desc'
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

        checkBox.addEventListener('change', (e) => {
          if (e.target.checked) {
            data.completed = true;
            li.classList.add('over-line');
            const key = data.description.length;
            localStorage.setItem(key, JSON.stringify(data));
            li.classList.add('over-line');
          } else {
            data.completed = false;
            li.classList.remove('over-line');
            const key = data.description.length;
            localStorage.setItem(key, JSON.stringify(data));
            li.classList.remove('over-line');
          }
        });
        if (data.completed === true) {
          li.classList.add('over-line');
          checkBox.checked = true;
          dots.innerHTML = '&#128465;';
          ul.prepend(li);
        } else {
          li.classList.remove('over-line');
          checkBox.checked = false;
          ul.prepend(li);
        }
        
      }
    }
  });
}

// printTasks();

export default printTasks;
