import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'
import StudentManager from './components/StudentManager'

function App() {


  // state variable 

  const [taskInput , setTaskInput] = useState('');
  const [taskList, setTaskList] = useState([]);




    // function that will add the task in the input to the taskList

  const handleAddTask = () => {

    
    if(taskInput === '') return;
    
    // we create a copy of taskList,
    // we do this because we cant directly change it

    let taskAux = [...taskList];

    //we make the chagnes we need to the copy of the state array
    taskAux.push(taskInput);



    // we update the state array with the copy of itself,
    // now with a new task
    setTaskList(taskAux);


    //clean input
    setTaskInput('');
    

  }



  const removeTask = (taskToRemove) => {

    // we create a copy of taskList, remove the task from the copy and then update the state variable


    const taskAux = taskList.filter(task => task !== taskToRemove); 
    setTaskList(taskAux);
    

  }


  // parse the state array of tasks to html elements
  
  const taskListHtml = taskList.map(task => (
    <li> { task } </li>
));









  return (
    <>

      Please insert your task 



      <input value={taskInput} onChange={(evt) => setTaskInput(evt.target.value)} />

      <br />
      <br />

      <button onClick={() => {
        handleAddTask();
      }}> Add to list </button>


      <br />
      <br />

      <button onClick={() => {
        removeTask(taskInput);
      }}>Remove from List</button>

      <ul>
        { taskListHtml}










      </ul>

      <br />
      <br />
      <br />
      <br />
      <br />

      <StudentManager />
    </>
  )
}

export default App
