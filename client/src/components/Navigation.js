import { Link } from "react-router-dom";
import { useApi } from "../hooks/use-api";
import "../css/Nav.css"
export const Nav = (props) => {

  return (
    <nav>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/patient">Patients</Link></li>
            <li><Link to = "/create">CreateForm</Link></li>
            <li><Link to = "/exams">Exams</Link></li>
            <li><Link to = "/login">Login</Link></li>
            <li><Link to = "/register">Register</Link></li>

        </ul>
    </nav>
  );
};
