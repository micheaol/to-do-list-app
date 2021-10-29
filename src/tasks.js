/* eslint-disable import/no-cycle */

import printTasks from './getTasks.js';
import addtoLocal from './addToLocal';

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
const enterTasksForm = getMyElement('#add-task-form')
const enterIcon = getMyElement('#enter-icon');

function getUserData(e) {
  // e.preventDefault();
  const newTask = new UserTask(enterTasks.value);
  if (enterTasks.value.length === 0) {
    enterTasks.placeholder = 'Your task can not be EMPTY......';
  } else {
    // newTask.index = enterTasks.value.length;
    tasks.push(newTask);

    // window.location.reload();
  }
  // printTasks()
}

enterIcon.addEventListener('click', getUserData);
// enterTasksForm.addEventListener('submit', getUserData)

export default tasks;
