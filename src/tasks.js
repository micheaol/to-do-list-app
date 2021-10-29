

const tasks = [];

class UserTask {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = tasks.length + 1;
  }
}

function getMyElement(para) {
  return document.querySelector(para);
}

const enterTasks = getMyElement('#enter-tasks');
const enterIcon = getMyElement('#enter-icon');

function getUserData(e) {
  // e.preventDefault();
  const newTask = new UserTask(enterTasks.value);
  if (enterTasks.value.length === 0) {
    enterTasks.placeholder = 'Your task can not be EMPTY......';
  } else {
    tasks.push(newTask);
  }
}

enterIcon.addEventListener('click', getUserData);

export default tasks;
