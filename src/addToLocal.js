import tasks from "./tasks.js";


 function addtoLocal() {
    tasks.forEach((elem) => {
      const key = elem.description.length;
      localStorage.setItem(key, JSON.stringify(elem));
      
    });
    // printTasks()
  }
  addtoLocal();

  export default addtoLocal;