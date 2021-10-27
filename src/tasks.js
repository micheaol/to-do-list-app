/* eslint-disable import/no-cycle */

import { addtoLocal } from './getTasks.js';

const tasks = [];

class UserTask {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = localStorage.length;
  }
}

function getMyElement(para) {
  return document.querySelector(para);
}

const enterTasks = getMyElement('#enter-tasks');
const enterIcon = getMyElement('#enter-icon');

function getUserData() {
  const newTask = new UserTask(enterTasks.value);
  if (enterTasks.value.length === 0) {
    enterTasks.placeholder = 'Your task can not be EMPTY......';
  } else {
    newTask.index = enterTasks.value.length;
    tasks.push(newTask);
    addtoLocal();
    window.location.reload();
  }
}

enterIcon.addEventListener('click', getUserData);

export default tasks;
