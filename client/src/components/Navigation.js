import { Link } from "react-router-dom";
import "../css/Nav.css"
import { useLogout } from "../hooks/useLogout"

export const Nav = (props) => {
  const { logout } = useLogout();

  const handleCLick = () => {
    logout();
  }

  return (
    <nav>
        <ul>
            <li><Link to = "/"><img id = "navLogo" src="favicon.ico" alt="" srcset="" /></Link></li>
            <li><Link to = "/patient">Patients</Link></li>
            <li><Link to = "/exams">Exams</Link></li>
            <li><Link to = "/admin">Admin</Link></li>
            <li><button onClick = {handleCLick}>Log out</button></li>
        </ul>
        
    </nav>
  );
};
