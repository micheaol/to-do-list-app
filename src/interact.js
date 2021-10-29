import printTasks from './getTasks.js';
import addtoLocal from './addToLocal.js';

printTasks();
const threeDotLine = document.querySelectorAll('.dot-line');
const taskCheckBox = document.querySelectorAll('.check-box');
const deleteAllTasks = document.querySelector('#clear-all');
const reloadTasks = document.querySelector('#reload-icon');
const allRoot = document.querySelector('#parent-div');

function changeToBin(e) {
  if (e.target.parentNode.className === 'over-line') {
    e.target.parentNode.lastChild.innerHTML = '&#128465;';
    // console.log(e.target.parentNode.lastChild)
  } else {
    e.target.parentNode.lastChild.innerHTML = '&#8942;';
  }
}

// function to deleteAll selected tasks:
function deleteSelectedTasks(e) {
  Object.keys(localStorage).forEach((key) => {
    if (key) {
      const dataDele = JSON.parse(localStorage.getItem(key));
      if (dataDele.completed === true) {
        const key = dataDele.index;
        localStorage.removeItem(key);
      }
    }
  });
  window.location.reload();
}

//function to delete with three-dots

threeDotLine.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    if (e.target.parentNode.className === 'over-line') {
      e.target.parentNode.remove();
      deleteSelectedTasks();
    }
  });
});

deleteAllTasks.addEventListener('click', deleteSelectedTasks);

taskCheckBox.forEach((checking) => {
  checking.addEventListener('change', changeToBin);
});

reloadTasks.addEventListener('click', (e) => {
  allRoot.textContent = '';
  window.setTimeout(() => {
    allRoot.reload(true);
  }, 200);
});
