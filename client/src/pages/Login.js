import React from "react";
import "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Login.css";
import { useLogin } from "../hooks/useLogin";

import Footer from "../components/Footer";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, error, isLoading } = useLogin();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };
  const showToast = () => {
    //toast('Authenticating...')
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(user.email, user.password);
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
                disabled={isLoading}
              >
                Log in
              </button>
              
              <ToastContainer />
            </div>
            {error && <div className="error">{error}</div>}
            <br />

            <p className="">
              Don't have an account?{" "}
              <Link to="/register" className="display-5">
                {" "}
                Sign up here{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
    
  );
}
