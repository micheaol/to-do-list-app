import getUserData from './getTasks.js';

const threeDotLine = document.querySelectorAll('.dot-line');
const editTable = document.querySelector('.span-desc');
// function to edit the description:

function editTaskDesc(e) {
  if (!editTable.isContentEditable) {
    editTable.contentEditable = 'true';
    threeDotLine.forEach((saveBtn) => {
      saveBtn.innerHTML = '&#128190;';
    });
  } else {
    editTable.contentEditable = 'false';
    threeDotLine.forEach((saveBtn) => {
      saveBtn.innerHTML = '&#128190;';
    });
  }
  //   let newTaskValue = e.target.previousSibling.innerHTML;
  console.log(editTable);
}

threeDotLine.forEach((editDot) => {
  editDot.addEventListener('click', editTaskDesc);
});
