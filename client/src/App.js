import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

// pages
import CreateForm from './pages/CreateForm';
import { Patient } from './pages/Patient';
import Home from './pages/Home';
import ExamSingle from './pages/ExamSingle';
import Exams from './pages/Exams';
import ExamAdmin from './pages/ExamAdmin';

// components
import { Nav } from './components/Navigation';
//import { useApi } from './hooks/use-api';

function App() {
  //const { response } = useApi();

  return (
    <>
    <Nav />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/exams" element={<Exams />} />
     <Route path="/admin" element={<ExamAdmin />} />
     <Route path="/create" element={<CreateForm />} />
     <Route path="/exams/:id" element={<ExamSingle />} />
     <Route path="/patient/:id" element={<Patient />} />
      
    </Routes>
    </>
  );
}

export default App;
