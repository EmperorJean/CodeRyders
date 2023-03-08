import { Link, Navigate } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
import "../css/Nav.css";
import { useLogout } from "../hooks/useLogout";


export const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleCLick = () => {
    logout();
    return <Navigate to="/"/>
  };



export const Nav = () => {


const logout = () =>{

  localStorage.clear();
  window.location = "/login"
}
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
            <span>{user.username}</span>
            <button onClick={handleCLick}>Log out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
