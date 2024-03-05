import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import Cost from "./Cost";
import "..//styles/Tend.scss";

function TendText({ text }) {
    return( <p className="tend__text">{text}</p> );
}
function TendButton({ buttonText }) {
    return( 
        <div className="tend__button">
          <Link to={PathConstants.SHOPPAGE}>{buttonText}</Link>
        </div>
    );
}

export default function Tend() {
    return (
        <div className="tend">
            <div className="conteiner">
              <TendText text={"We care for the environmental as much as we care for the people involved in manufacturing our collections. It's a commitment we take seriously."} />
              <TendButton buttonText={"SHOP NOW"} /> 
              <Cost />
            </div>
        </div>
    );
}