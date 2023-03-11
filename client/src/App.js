import React from 'react';
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import './App.css';

// pages
import CreateForm from './pages/CreateForm';
import { Patient, Patients } from './pages/Patient';
import Home from './pages/Home';
import ExamSingle  from './pages/ExamSingle';
import ExamAdmin from './pages/ExamAdmin';
import AllExams from './pages/AllExams'
import Register from './pages/Register';
import Login from './pages/Login';
import UpdateExam from './pages/UpdateExam'
// components
import  {Nav}  from './components/Navigation';
import  {Nav2}  from './components/Nav2';
import {useAuthContext} from "./hooks/useAuthContext"


function App() {
  const location = useLocation();
  const { user } = useAuthContext()
  //const { response } = useApi();
  const excludeNavRoutes = ['/', '/login', '/register'];
  const shouldExcludeNav = excludeNavRoutes.includes(location.pathname);


  return (
  
    <>
        {!shouldExcludeNav && <Nav />} 
        {shouldExcludeNav && <Nav2 />} 

     <Routes>

     <Route path="/" element={<Home />} />
     <Route path="/register" element={!user ? <Register  />: <Navigate to="/exams"/>} />
     <Route path="/login" element={!user ? <Login />: <Navigate to="/exams"/>} />

     {/* <Route path="/exams" element={<Exams />} /> */}
     <Route path="/exams" element={user ? <AllExams />: <Navigate to="/login"/>} />
     <Route path="/admin" element={user ? <ExamAdmin />: <Navigate to="/login"/>} />
     <Route path="/create" element={<CreateForm />} />
     <Route path="/exams/:id" element={<ExamSingle />} />
     <Route path="/patient/:id" element={<Patient />} />
     <Route path="/patient" element={user ? <Patients />: <Navigate to="/login"/>} />
     <Route path="/exams/:id/update" element={<UpdateExam />} />
      
    </Routes>
    </>
  );
}

export default App;