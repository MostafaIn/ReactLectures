import React from 'react';
import './App.css';
import Header from './components/Header';
import Student from './components/Student';
import studentData from './studentData';
import Footer from './components/Footer';
function App() {
  const studentComponents = studentData.map(student =>
    <Student picture={student.src} name={student.firstName + student.lastName}
      title={student.title} skills= {student.skills}/>)
  return (
    <div className="App">
      <Header
        const firstName='Asabeneh'
        const lastName='Yatayeh'
        const year={new Date().getFullYear()}
      />
      {studentComponents}
      <Footer />
    </div>
  );
}

export default App;
