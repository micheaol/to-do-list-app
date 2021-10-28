import printTasks from './getTasks.js';

printTasks();
const threeDotLine = document.querySelectorAll('.dot-line');
const taskCheckBox = document.querySelectorAll('.check-box');
const deleteAllTasks = document.querySelector('#clear-all');

function changeToBin(e) {
  if (e.target.parentNode.className === 'over-line') {
    e.target.parentNode.lastChild.innerHTML = '&#128465;';
    // console.log(e.target.parentNode.lastChild)
  } else {
    e.target.parentNode.lastChild.innerHTML = '&#8942;';
  }
}

//function to delete with three-dots

threeDotLine.forEach((dot) => {
  dot.addEventListener('click', (e) => {
    
    if (e.target.parentNode.className === 'over-line') {
      e.target.parentNode.remove();
    }
    // if (e.target.previousSibling.contentEditable === true) {
    //   console.log(e.target.previousSibling.contentEditable);
    //   e.target.previousSibling.contentEditable = 'false';
    //   console.log(data)
    // }else{
    //   e.target.previousSibling.contentEditable = 'true';
    // }

    // Object.keys(localStorage).forEach((key) => {
    //   if (key) {
    //     const data = JSON.parse(localStorage.getItem(key));
    //     if (data) {
    //      console.log(e.target.parentNode)
    //     }
    //   }
    // });
  });
});

//function to edit the description:
// function editTaskDesc() {
//   Object.keys(localStorage).forEach((key) => {
//     if (key) {
//       const data = JSON.parse(localStorage.getItem(key));
//       if (data) {
//         console.log(data)
//       }
//     }
//   });
// }

// function to deleteAll selected tasks:
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
