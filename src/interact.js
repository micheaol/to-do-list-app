import printTasks from './getTasks.js';

printTasks();
const threeDotLine = document.querySelector('.dot-line');
const taskCheckBox = document.querySelectorAll('.check-box');

function changeToBin(e) {
  if (e.target.parentNode.className === 'over-line') {
    e.target.nextElementSibling.innerHTML = '&#128465;';
  } else {
    e.target.nextElementSibling.innerHTML = '&#8942;';
  }
}

taskCheckBox.forEach((checking) => {
  checking.addEventListener('change', changeToBin);
});
