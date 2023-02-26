import React from 'react'
import 'react-bootstrap';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';


export default function Login() {
  return (
    <>

    <MDBContainer className="my-5 gradient-form">

    <MDBRow>

      <MDBCol col='6' className="mb-5">
        <div className="d-flex flex-column ms-5">

          <h1>Please login to your account</h1>


          <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>


          <div className="text-center pt-1 mb-5 pb-1">
            <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
            <a className="mb-4 w-100" href="#!">Forgot password?</a>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <h4 className="mb-0">Don't have an account?</h4>
            <MDBBtn outline className='mx-2' color='danger'>
              Register
            </MDBBtn>
          </div>

        </div>

      </MDBCol>

    </MDBRow>

  </MDBContainer>
    </>
  )
}
