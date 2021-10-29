import tasks from './tasks.js';

function getMyElement(para) {
  return document.querySelector(para);
}

function createMyElement(para) {
  return document.createElement(para);
}

function showToUi() {
  Object.keys(localStorage).forEach((key) => {
    if (key) {
      const data = JSON.parse(localStorage.getItem(key));
      if (data) {
        data.map((data) => {
          const li = createMyElement('li');
          const spanDec = createMyElement('span');
          spanDec.innerHTML = data.description;
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
          tasks.push(data);

          dots.addEventListener('click', () => {
            if (tasks.length > 0) {
              tasks.map((task) => {
                if (task.description === spanDec.innerHTML) {
                  if (dots.innerHTML === '⋮') {
                    dots.innerHTML = '&#x1F4BE;';
                    spanDec.contentEditable = 'true';
                    spanDec.addEventListener('input', () => {
                      task.description = spanDec.textContent;
                      localStorage.setItem('tasks', JSON.stringify(tasks));
                    });
                  } else {
                    dots.innerHTML = '⋮';
                    spanDec.contentEditable = 'false';
                  }
                }
                return task;
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
                        const conIndex = tasks.indexOf(task);
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
                return task;
              });
            }
          });
          if (data.completed === true) {
            spanDec.classList.add('over-line');
            checkBox.checked = true;
            dots.innerHTML = '&#128465;';
            dots.addEventListener('click', (e) => {
              tasks.map((task) => {
                const conIndex = tasks.indexOf(task);
                tasks.splice(conIndex, 1);
                e.target.parentNode.remove();
                localStorage.setItem('tasks', JSON.stringify(tasks));
                return task;
              });
            });
            ul.appendChild(li);
          } else {
            spanDec.classList.remove('over-line');
            checkBox.checked = false;
            ul.appendChild(li);
          }
          return data;
        });
      }
    }
  });
}

export default showToUi;
