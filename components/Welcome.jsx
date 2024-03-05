import { Link } from "react-router-dom";
import welcomeImage from "/welcome-image.png";
import TitleLeft from "./TitleLeft";
import PathConstants from "../routes/pathConstants";
import "..//styles/Welcome.scss";

function WelcomeImage({ imageAlt, wordDesign }) {
    return(
        <div className="welcome__image">
          <img src={welcomeImage} alt={imageAlt}/>
          <span id="wordDesign">{wordDesign}</span>
        </div>
    );
}
function WelcomeContent({ contentText, linkText }) {
    return(
        <section className="welcome__content">
          <TitleLeft caption={"welcome"} titleFirst={"Hi, meet"} titleSecond={"TreeHouse."}/>  
          <p id="contentText">{contentText}</p>  
          <Link to={PathConstants.OURTEAMPAGE} className="read-team__link">{linkText}</Link> 
        </section>
    );
}

export default function Welcome() {
    return(
        <div className="welcome">
            <div className="conteiner">
                <div className="welcome__items">
                    <WelcomeImage imageAlt={"Сollage of three photos"} wordDesign={"TreeHouse"} />
                    <WelcomeContent 
                      contentText={"Mindfully crafted children's clothing focused on your little one and designed with great care for our planet and the people on it."}
                      linkText={"READ MORE"}
                    />
                </div>
            </div>
        </div>
    );
}