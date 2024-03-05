import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import teamChooseImage from "/team-choose-image.png";
import "..//styles/TeamChoose.scss";

function ChooseButton({ linkText }) {
    return (
        <div className="team-choose__button">
            <Link to={PathConstants.SHOPPAGE}>{linkText}</Link>
        </div>  
    );
}

function ChooseContent({ title, rubric, text01, text02 }) {
    return (
        <section className="team-choose__content">
            <h3>{title}</h3>
            <p className="rubric">{rubric}</p>
            <p className="team-choose__text01">{text01}</p>
            <p className="team-choose__text02">{text02}</p>
            <ChooseButton linkText={"SHOP NOW"} />
        </section>  
    );
}

function ChooseImage() {
    return (
       <div id="chooseImage">
          <img src={teamChooseImage} alt="#" />
       </div>
    );
}

export default function TeamChoose() {
    return (
        <div className="team-choose">
            <div className="conteiner">

                <div className="team-choose__items">
                    <ChooseContent title={"Let's chat"} 
                      rubric={"if you don't know where to start, we're here to help you on your journey"}
                      text01={"Whether it's a question about different types of fabric and their properties or the best way to wash your garment, we're here to support you every step of the way."}
                      text02={"We're excited to share our knowledge and answer any and all questions!"}
                    />
                    <ChooseImage />
                </div>
            </div>
        </div>      
    );
}