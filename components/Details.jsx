import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import detailsLeaf from "/svg/details-leaf-image.svg";
import detailsImage from "/details-image.jpg";
import letsPlayIcon from "/lets-play-icon.png";
import { detailsPoints } from "../DataBase/detailsPoints";
import "..//styles/Details.scss";

function DetailsButton({ buttonText }) {
    return(
        <div className="details__button">
          <Link to={PathConstants.SHOPPAGE}>{buttonText}</Link>
        </div>
    );
}

function DetailsTitle({ caption, title }) {
    return(
        <>
          <p className="caption__center">{caption}</p>
          <h3 className="title__center">{title}</h3>
        </>
    );
}

function DetailsImages({ captionLabel }) {
    return(
        <>
            <span id="detailsWord">{captionLabel}</span>
            <div className="details-images__items">
              <img src={detailsImage} alt="#" />
              <img src={letsPlayIcon} id="detailsImage" alt="#" />
            </div>
        </>
    );
}

const pointsList = detailsPoints.map(point => 
    <div key={point.id} className="point__item"> 
        <img className={point.className} src={point.imageSrc} alt="#" />
        <div className={point.textBox}>
          <p>{point.text}</p>
        </div>
    </div>
);

export default function Details() {
    return (
        <div className="details">
            <img id="detailsLabel" src={detailsLeaf} alt="#" />
            <div className="conteiner">
                <DetailsTitle caption={"You can trust"} title={"Transparency in every detail"}/>
                <DetailsImages captionLabel={"TreeHouse"}/>
                {pointsList}
                <DetailsButton buttonText={"SHOP NOW"}/>
            </div>
        </div>       
    );
}