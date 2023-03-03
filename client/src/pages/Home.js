import React from 'react'
import { Link, } from "react-router-dom";
import 'react-bootstrap'
import "../css/Home.css"




function Home(){
    return(
        
        <>

  <div className="container ">

      <div className="col-10 col-lg-6">
        <img src="https://res.cloudinary.com/amunoali/image/upload/v1677763058/medbar-removebg-preview_nfkv2p.png" className="image" alt="Bootstrap Themes"  />
      </div>
      <div className="col-lg-6 ">
        <h1 className="display-5 "> <strong class=" fw-bold" >MedBay </strong> </h1>
        <p className="lead"> Your number ONE resource to access your patient record during COVID-19.</p>
      
        <div className="btn btn-header btn-primary">
   

          <Link to="/register" type="button" className="btn btn-header btn-lg mt-3">
            Register for MedBay
          </Link>
        </div>
        
        <p className="login">Already have an account <strong>  <Link to="/login"> Login Here</Link> </strong> </p>
    
    </div>

  </div>
<footer className="footer">
<p>&copy;2023 CodeRyders | All Rights Reserved</p>
</footer>
 

        </>
    )
}
export default Home;