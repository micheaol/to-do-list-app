import tasks from './tasks.js';

function addtoLocal() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default addtoLocal;
