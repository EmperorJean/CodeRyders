import { useApi } from "../hooks/use-api";
import { Link } from "react-router-dom";

export const PatientItem = (props) => {
  let route = `patient/${props.id}`  
  return (
    <div>
        {route += props.id}
        <div id="item">
            <Link to = {props.id} >{route}</Link>
        </div>
    </div>
  );
};
