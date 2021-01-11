import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const studentList1 = [
  {id:"1", name:"Abdu", place: "IND"},
  {id:"2", name:"Basil", place: "US"},
  {id:"3", name:"Darshan", place: "SIN"},
  {id:"4", name:"Razi", place: "UK"}
];

const studentList2 = [
  {id:"1", name:"Abu", place: "RUS"},
  {id:"2", name:"Bilal", place: "AUS"},
  {id:"3", name:"Don", place: "NIG"},
  {id:"4", name:"Jill", place: "ARG"}
];


function Student({ students }){
  return(
    <div>
      {students.map(student => (
        <div key={student.id}>
          <h2>{student.id}  {student.name}</h2>
          <p>Lives in {student.place}</p>
        </div>
      ))}
    </div>
  );
}

function App(props){
  if (props.pick === "1"){
    return <Student  students={studentList1} />;
  }
  else if (props.pick === "2"){
    return <Student  students={studentList2} />;
  }
}

ReactDOM.render(
    <App pick="1"/>,
  document.getElementById('root')
);

