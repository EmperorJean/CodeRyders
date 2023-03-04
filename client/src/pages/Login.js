import React from 'react'
import 'react-bootstrap';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import '../css/Login.css'
import { Link, } from "react-router-dom";
import Footer from '../components/Footer';
import { useState, } from 'react';
import 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',

})


  const handleChange = (e) => {
    const value = e.target.value;
        setUser({
          ...user,
          [e.target.name]: value
        });
  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
     const userData = await axios.post(
       "http://localhost:9000/users/login",
       {
         ...user,
       },
       { withCredentials: true }
     );
    if (!userData){
      throw new Error()
    }
    localStorage.setItem('token', userData.data.token);
    setUser({
      name: `${userData.data.firstname} ${userData.data.lastname}`,
      role: userData.data.role,
      username: userData.data.username,
    });
      navigate("/exams")
   } catch (ex) {
     console.log(ex);
   }


  }
  return (
    <>
  <form  onSubmit={handleSubmit}> 
    <MDBContainer className="my-5 gradient-form">

    <MDBRow className="login-row">

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column ms-1">

          <h1 className="login-title">L O G I N</h1>


          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' 
          type='email'
          name='email'
          value={user.email}
          onChange={handleChange}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' 
          type='password'
          name='password'
          value={user.password}
          onChange={handleChange}/>


          <div className="text-center pt-1 mb-5 pb-1">
            <button className="mb-4 w-100 btn btn-primary" type='submit' >Sign in</button>
            <a className="mb-4 w-100" href="#!">Forgot password?</a>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="login-p">Don't have an account?   <Link to='/register' className='display-5'> Register here </Link></p>

          </div>

        </div>

      </MDBCol>

    </MDBRow>

    <Footer/>
  </MDBContainer>
  </form>
    </>
  )
}
