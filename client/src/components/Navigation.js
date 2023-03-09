import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import "../css/Nav.css";
import { useLogout } from "../hooks/useLogout";
import {FaUserCircle} from "react-icons/fa"
export const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleCLick = () => {
    logout();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img id="navLogo" src="favicon.ico" alt="" srcset="" />
          </Link>
        </li>
        <li>
          <Link to="/patient">Patients</Link>
        </li>
        <li>
          <Link to="/exams">Exams</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        {user && (
          <li>
           
      
            <button onClick={handleCLick}>Log out</button>
            <span id = "username-box">
              <span id = "username">{user.username} </span>
             <FaUserCircle/>
              </span>
          </li>
        )}
      </ul>
    </nav>
  );
};