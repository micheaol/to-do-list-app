import tasks from './tasks.js';

function getMyElement(para) {
  return document.querySelector(para);
}

function createMyElement(para) {
  return document.createElement(para);
}

function addtoLocal() {
    localStorage.setItem('key', JSON.stringify(tasks));
  }
  
  

function getTasks() {
  tasks.forEach((task) => {
    const li = createMyElement('li');
    li.innerHTML = task.description;
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
        console.log(task.completed = true)
      } else {
        console.log(task.completed = false)
      }
    });
    
    if(task.completed === false){
        li.classList.toggle('over-line')
    }
  
    addtoLocal()
    ul.appendChild(li);

  });
}



export default getTasks;
