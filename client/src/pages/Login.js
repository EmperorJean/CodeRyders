import React from "react";
import "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Login.css";

import Footer from "../components/Footer";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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

    const userData = {
      email: user.email,
      password: user.password,
    };

    
    const res = await axios.post("http://localhost:9000/users/login", userData);      
    const data = res.data;
    if (data.message) {
      toast.error(`${data.message}`);
    }
    else {
      window.location = "/exams";
    }
    
 
  };
  return (
    <>
      <div className="container register-row">
        <div className="card-body p-5">
          <h1 className="text-uppercase text-center mb-5 login-title">
            L O G I N
          </h1>

          <form action="" id="login" method="POST" onSubmit={handleSubmit}>
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

            <div>
              <button
                type="submit"
                value="login"
                onClick={showToast}
                className="btn btn-primary"
              >
                Log In
              </button>
              <ToastContainer />
            </div>
            <br />
            <p className="login-p">
              Don't have an account?{" "}
              <Link to="/login" className="display-5">
                {" "}
                Register here{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
