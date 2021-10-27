import tasks from './tasks.js';

function getMyElement(para) {
  return document.querySelector(para);
}

function createMyElement(para) {
  return document.createElement(para);
}


function addtoLocal() {
  tasks.forEach((elem) => {
    const key = elem.index;
    localStorage.setItem(key, JSON.stringify(elem));
  });
}

addtoLocal();

function getTasks() {
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
           li.classList.toggle('over-line');
           console.log(data)
         
          if (e.target.parentNode.classList === 'over-line') {
            
            console.log(data)
          }
        } else {
          li.classList.remove('over-line');
        }
      });

      ul.appendChild(li);
    }
  });
}

export default getTasks;
