import { Link, useNavigate } from "react-router-dom";
import { useAuthContext} from "../hooks/useAuthContext";
import "../css/Nav.css";
import { useLogout } from "../hooks/useLogout";
import { useState } from "react";
import {CgProfile} from "react-icons/cg"
import {MdLogout, MdAdminPanelSettings, MdAddCircle, MdPeople} from "react-icons/md"
export const Nav = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleCLick = () => {
    logout();
  };

  const[open, setOpen] = useState(false)

  return (
    <nav>
      <ul>
        <li>
          <Link to="/exams">
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
           
    
            <span id = "username-box">
                <div className={`hol ${open ? 'active' : 'inactive'}`} onClick={() => {setOpen(!open)}} >
                <span id = "username" >{user.username} </span>
                <CgProfile id = "ico" />
                </div>
                 <div className={`dropDown ${open ? 'active' : 'inactive'}`} >
                 <div onClick={() => setOpen(!open)}>
                      <DropDownItem icon={<MdAdminPanelSettings id = "icon"/>} label = "Admin Panel" click={"/admin"} />
                      <DropDownItem icon={<MdAddCircle id = "icon"/>} label = "Create Exam" click={"/create"}/>
                      <DropDownItem icon={<MdPeople id = "icon"/>} label = "Patient List" click={"/patient"}/>
                      <DropDownItem2 icon={<MdLogout id = "icon"/>} label = "Logout" click={handleCLick}/>
                  </div>
                 </div>
              </span>
          </li>
        )}
      </ul>
    </nav>
  );
};


const DropDownItem = (props) => {

  let navigate = useNavigate(); 

  const routeChange = (path) =>{ 
    navigate(path);
  }

  let a = props.click
  const handleCLick = () => {
    routeChange(a)
  };

  return (
      <li className="dropDownItem" onClick={handleCLick}>
          {props.icon}
          <span>{props.label}</span>
      </li>
      
  );
}
const DropDownItem2 = (props) => {
  return (
      <li className="dropDownItem2" onClick={props.click}>
          {props.icon}
          <span>{props.label}</span>
      </li>
      
  );
}