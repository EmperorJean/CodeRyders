import { useApi } from "../hooks/use-api";
import "../css/PatientItem.css"

export const PatientExamItem = (props) => {
  return (
    <div>
        <div id="item">

            <div id="itemLeft">
                <img src={props.image} alt="" />
            </div>

            <div id="itemRight">
                <div id="title">{props.exam}</div>
                <div id="desc">{props.desc}</div>
                <div id="bottom">
                    <div id="version">Version: {props.version}</div>
                    <div id="brixia">Brixia Score: {props.brixia}</div>
                </div>
            </div>

        </div>
    </div>
  );
};
