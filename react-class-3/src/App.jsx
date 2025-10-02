import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './components/Student'

function App() {
 


  // data could be from an API/database 

  const listStudents = [
    {name: 'Joao', age: 29},
    {name: 'Diogo', age: 49},
    {name: 'Jorge', age: 0}
  ];


  // variable that will contain HTML that we will show on screen

  const listStudentsHtml = [];

  //for each element of listStudents, we will create a Student

  


listStudents.forEach((student) => {

  listStudentsHtml.push(
  <Student name={student.name} 
  age ={student.age} /> 
  
);


  
  
});

  return (
    <>
      <h1>hello class 3</h1>
      {listStudentsHtml}
    </>
  )
}

export default App
