import tasks from "./tasks.js";
import printTasks from "./getTasks.js";


 function addtoLocal() {
    tasks.forEach((elem) => {
      const key = tasks.length;
      localStorage.setItem(key, JSON.stringify(elem));
      
    });
    // printTasks()
  }

  export default addtoLocal;