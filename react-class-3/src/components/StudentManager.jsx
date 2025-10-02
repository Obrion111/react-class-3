import Student from "./Student";


function StudentManager(){

    // data could be from an API/database 

  const listStudents = [
    { fullName: 'Joao', age: 29 },
    { fullName: 'Diogo', age: 49 },
    { fullName: 'Jorge', age: 0 },
    { fullName: 'Margarida', age: 24 },
    { fullName: 'Jorgina', age: 99 }
  ];


  // variable that will contain HTML that we will show on screen

  const listStudentsHtml = [];

  //for each element of listStudents, we will create a Student




  listStudents.forEach((student) => {

    listStudentsHtml.push(
      <Student name={student.fullName}
        age={student.age} />

    );




  });
    

  return <>

      
      {listStudentsHtml}
    </>

}

export default StudentManager;