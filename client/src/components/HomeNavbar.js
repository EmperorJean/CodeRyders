import { Link } from "react-router-dom";
import "../css/Nav.css"
export const Nav2 = (props) => {

  return (
    <nav>
        <ul>
        <li><Link to = "/"><img id = "navLogo" src="favicon.ico"  alt="" srcset="" /></Link></li>
            {/* <li><Link to = "/patient">Patients</Link></li>
            <li><Link to = "/exams">Exams</Link></li>
            <li><Link to = "/admin">Admin</Link></li> */}
            <li><Link to = "/login">Login</Link></li>
            <li><Link to = "/register">Register</Link></li>
        </ul>
    </nav>
  );
};
