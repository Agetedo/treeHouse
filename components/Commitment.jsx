import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import commitmentLabel from "/commitment-leaf-label.png";
import "..//styles/Commitment.scss";

function CommitmentText({ text }) {
    return( <p className="commitment__text">{text}</p> );
}
function CommitmentButton({ buttonText }) {
    return( 
        <div className="commitment__button">
          <Link to={PathConstants.SHOPPAGE}>{buttonText}</Link>
        </div>
    );
}
function CommitmentLabel() {
    return( <><img id="commitmentLabel" src={commitmentLabel} alt="#" /></>);
}

export default function Commitment() {
    return (
        <div className="commitment">
            <div className="conteiner">
                <CommitmentText text={"Our commitment to the health of our children and the planet they'll inherit from us is sewn into every piece we put out into this world."} />
                <CommitmentButton buttonText={"SHOP NOW"} />
                <CommitmentLabel />
            </div>
       </div>      
    );
}