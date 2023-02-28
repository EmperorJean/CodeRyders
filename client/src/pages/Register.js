import React from 'react'
import 'react-bootstrap';
import axios from 'axios'
import { useState, } from 'react';
import { Link, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "../css/Exam.css"



export default function Register() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })

    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
 

  
    const handleChange = (e) => {
        const value = e.target.value;
        setUser({
          ...user,
          [e.target.name]: value
        });
      };
    const showToast = () =>{
        //toast('Passwords do not match')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
   
        if (user.password !== user.password2) {
        toast.error('Passwords do not match')
        }
        else{
        const userData = {
            username: user.username,
            email: user.email,
            password: user.password,
            password2: user.password2

        }

        axios.post("https://coderyders.onrender.com/users/register", userData)
        .then(response => {
          console.log(response.data)
          // Handle response
          window.location = "/exams"
        })
    }
    }
  return (
  <>

          <div className="container" >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form action='' id='login' method='POST' onSubmit={handleSubmit}>

                <div className="form-outline mb-4">
                <label className="form-label" >Username</label>
                  <input 
                  type="text" 
                  name='username'
                  value={user.username}
                  onChange={handleChange}
                  id="form3Example1cg" className="form-control form-control-lg"  required/>
                  <br />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" >Your Email</label>
                  <input 
                  type="email" 
                  name='email'
                  value={user.email}
                  onChange={handleChange}
                  id="form3Example3cg" className="form-control form-control-lg" required/>
                  <br />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" >Password</label>
                  <input 
                  type="password" 
                  name='password'
                  value={user.password}
                  onChange={handleChange}
                   className="form-control form-control-lg" required />
                  <br />
                </div>

                <div className="form-outline mb-4">
                <label className="form-label" >Password</label>
                  <input 
                  type="password" 
                  name='password2'
                  value={user.password2}
                  onChange={handleChange}
                  id="form3Example4cg" className="form-control form-control-lg" required />
                  <br />
                </div>

        
                <div >
                  <button type="submit"
                  value='login'
                  onClick={showToast}
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    <ToastContainer />
                </div>
                <br />
                <p className="">Have already an account? <Link to='/login' className='display-5'> Login here </Link>
                
                </p>

              </form>

            </div>
          </div>
    
  </>
  )
}
