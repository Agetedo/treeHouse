import { Link } from "react-router-dom";
import Header from "./Header";
import arrowLink from "/svg/white-arrow-link-icon.svg";
import PathConstants from "../routes/pathConstants";
import scrollIcon from "/svg/scroll-down-icon.svg";
import "..//styles/Heading.scss";

function HeadingButtons({ textLink }) {
    return(
        <div className="heading__buttons">
          <Link to={PathConstants.SHOPPAGE} className="button__link">{textLink}</Link>
          <Link to={PathConstants.SHOPPAGE} className="arrow__link"><img src={arrowLink} alt="#" /></Link>
        </div>
    );
}

function ScrollDown({ scrollText, onClick}) {
    return(
        <div id="scrollDown" onClick={onClick}>
            <span>{scrollText}</span>
            <img src={scrollIcon} alt="#" />
        </div>
    );
}

export default function Heading({ onClick }) {
    return(
        <div className="heading">
            <Header indexHeader={{ backgroundColor: "transparent", }} />
            
            <div className="heading__conteiner">
                <section className="heading__content">
                    <span id="headingCaption">Treehouse:</span>
                    <h2>Little Clothes.</h2>
                    <h2 id="titleDesign">Big Impact.</h2>
                    <p>
                        High-quality children&apos;s clothing, crafted with care from sustainable materials that are kind to the planet. These timeless styles are the
                        perfect companions for your little adventurer, wherever their imagination takes them.
                    </p>
                    
                    <HeadingButtons textLink={"SHOP NOW"} />
                </section>
            </div>
            <ScrollDown scrollText={"Scroll"} onClick={onClick}/>
        </div>
    );
}