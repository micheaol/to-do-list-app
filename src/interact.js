import printTasks from './getTasks.js';

printTasks();
const threeDotLine = document.querySelectorAll('.dot-line');
const taskCheckBox = document.querySelectorAll('.check-box');
const deleteAllTasks = document.querySelector('#clear-all');

function changeToBin(e) {
  if (e.target.parentNode.className === 'over-line') {
    e.target.nextElementSibling.innerHTML = '&#128465;';
  } else {
    e.target.nextElementSibling.innerHTML = '&#8942;';
  }
}

//function to delete with three-dots

threeDotLine.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    e.target.parentNode.remove();
  });
});

//function to deleteAll selected tasks:
function deleteSelectedTasks(e) {
  Object.keys(localStorage).forEach((key) => {
    if (key) {
      const dataDele = JSON.parse(localStorage.getItem(key));
      if (dataDele.completed === true) {
        let key = dataDele.index;
        localStorage.removeItem(key);
      }
    }
  });
}

deleteAllTasks.addEventListener('click', deleteSelectedTasks);

taskCheckBox.forEach((checking) => {
  checking.addEventListener('change', changeToBin);
});
