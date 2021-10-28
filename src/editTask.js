import getUserData from './getTasks.js';

const threeDotLine = document.querySelectorAll('.dot-line');
const editTable = document.querySelector('.span-desc');
// function to edit the description:

function editTaskDesc(e) {
  e.target.previousSibling.contentEditable = 'true';
  console.log( e.target.previousSibling.innerHTML.length);

  e.target.previousSibling.innerHTML = 'test'
  console.log(editTable.textContent)

}

threeDotLine.forEach((editDot) => {
  editDot.addEventListener('click', editTaskDesc);
});
