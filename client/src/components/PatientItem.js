import { Link } from "react-router-dom";
import "../css/PatientsItem.css"
export const PatientItem = (props) => {
  return (
    <div>
        <div id>
            <Link id="itemPatients" to = {props.id} >{props.id}</Link>
        </div>
    </div>
  );
};
