import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import CreateForm from './pages/CreateForm';
import { Patient, Patients } from './pages/Patient';
import Home from './pages/Home';
import ExamSingle  from './pages/ExamSingle';
// import Exams from './pages/Exams';
import ExamAdmin from './pages/ExamAdmin';
import AllExams from './pages/AllExams'
import Register from './pages/Register';
import Login from './pages/Login';
import UpdateExam from './pages/UpdateExam'
// components
import  {Nav}  from './components/Navigation';
//import { useApi } from './hooks/use-api';

function App() {
  //const { response } = useApi();

  return (
    <>
    <Nav /> 
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<Register  />} />
     <Route path="/login" element={<Login />} />
     {/* <Route path="/exams" element={<Exams />} /> */}
     <Route path="/exams" element={<AllExams />} />
     <Route path="/admin" element={<ExamAdmin />} />
     <Route path="/create" element={<CreateForm />} />
     <Route path="/exams/:id" element={<ExamSingle />} />
     <Route path="/patient/:id" element={<Patient />} />
     <Route path="/patient" element={<Patients />} />
     <Route path="/exams/:id/update" element={<UpdateExam />} />
      
    </Routes>
    </>
  );
}

export default App;