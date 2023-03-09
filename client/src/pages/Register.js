
import React from 'react'
import 'react-bootstrap';
import { useState, } from 'react';
import { Link, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "../css/Login.css"
import Footer from '../components/Footer'
import { useRegister } from "../hooks/useRegister";


export default function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { register, error, isLoading } = useRegister();

  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const showToast = () => {
    //toast('Passwords do not match')
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      
      if (!user.username){
        toast.error('Please enter a valid Username')
      }
      if (!user.password){
        toast.error('Please enter a Password')
      }
     if (user.password !== user.password2) {
      toast.error("Passwords do not match");
      }
    else {
    await register(user.username, user.email, user.password);
    }
    
  };

  return (
    <>
      <div className="container register-row">
        <div className="card-body p-5">
          <h1 className="text-uppercase text-center mb-5 login-title">
            R E G I S T E R
          </h1>

          <form action="" id="login" method="POST" onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleChange}
                id="form3Example1cg"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Username</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                id="form3Example3cg"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Your Email</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Password</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                name="password2"
                value={user.password2}
                onChange={handleChange}
                id="form3Example4cg"
                className="form-control form-control-lg"
                required
              />
              <label className="form-label">Re-Enter Password</label>
            </div>

            <div>
              <button
                type="submit"
                value="login"
                onClick={showToast}
                className="btn btn-primary"
                disabled={isLoading}
              >
                Register
              </button>
              <ToastContainer />
            </div>
            {error && <div className="error">{error}</div>}
            <br />

            <p className="">
              Have already an account?{" "}
              <Link to="/login" className="display-5">
                {" "}
                Login here{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
