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


export default function Login() {
  return (
    <>

    <MDBContainer className="my-5 gradient-form">

    <MDBRow className="login-row">

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column ms-1">

          <h1 className="login-title">L O G I N</h1>


          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


          <div className="text-center pt-1 mb-5 pb-1">
            <button className="mb-4 w-100 btn btn-primary">Sign in</button>
            <a className="mb-4 w-100" href="#!">Forgot password?</a>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="login-p">Don't have an account?   <Link to='/login' className='display-5'> Register here </Link></p>

          </div>

        </div>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
    </>
  )
}
