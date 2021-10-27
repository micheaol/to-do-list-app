import './style.css';

function getMyElement(para) {
  return document.querySelector(para);
}

function createMyElement(para) {
  return document.createElement(para);
}

let tasks = [
  {
    description: 'I want to go to the gym on Saturday',
    completed: true,
    index: 1,
  },
  {
    description: 'I want to go to the gym on Saturday',
    completed: true,
    index: 2,
  },
  {
    description: 'I want to go to the gym on Saturday',
    completed: true,
    index: 3,
  },
  {
    description: 'I want to go to the gym on Saturday',
    completed: true,
    index: 4,
  },
  {
    description: 'I want to go to the gym on Saturday',
    completed: true,
    index: 5,
  },
];

function getTasks() {
  tasks.forEach((task) => {
    const li = createMyElement('li');
    li.innerHTML = task.description;
    const ul = getMyElement('#inner-tasks');

    const checkBox = createMyElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'check-box'
    li.prepend(checkBox);

    const dots = createMyElement('span');
    dots.innerHTML = '⋮';
    dots.className = 'dot-line'
    li.appendChild(dots)

    ul.appendChild(li);
  });
}

getTasks();
