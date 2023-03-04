import { Link, Navigate } from "react-router-dom";
import "../css/Nav.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
  //let navigate = useNavigate();

//   const logout = async() =>{

//     await axios.get("http://localhost:9000/users",{withCredentials:true})
//     .then(res => {
//         console.log(res.data);
//         navigate('/login');
//         return;
//     })
// }

const logout = () =>{

  localStorage.clear();
  window.location = "/login"
}
  return (
    
    <nav>
        <ul>
            <li><Link to = "/"><img id = "navLogo" src="favicon.ico"  alt="" srcset="" /></Link></li>
            <li><Link to = "/patient">Patients</Link></li>
            <li><Link to = "/exams">Exams</Link></li>
            <li><Link to = "/admin">Admin</Link></li>
            <li><Link  onClick= {logout} >Logout</Link></li>
          
        
        </ul>
    </nav>
  );
};
