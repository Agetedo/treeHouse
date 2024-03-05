import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import articlePageLabel from "/article-page-label.png";
import pageTitleArrow from "/svg/page-title-arrow.svg";
import "..//styles/ArticlePageHeading.scss";

function JournalPageLink({ journalLink }) {
    return(
        <div className="page-link__items">
          <img id="ArticleArrow" src={pageTitleArrow} alt="#" />
          <Link to={PathConstants.JOURNALPAGE}>{journalLink}</Link>
        </div>
    );
}

function HeadingTitle ({ title }) {
    return(
        <div className="article-heading__title">
          <h2>{title}</h2>
          <img src={articlePageLabel} alt="#" />
        </div>
    );
}

function HeadingImage ({ imgSrc, imgAlt }) {
    return(
        <div className="article-heading__image">
          <img src={imgSrc} alt={imgAlt} />
        </div>
    );
}

export default function ArticlePageHeading({ title, imgSrc, imgAlt }) {
    return(
        <div className="article-heading">
            <div className="conteiner">
                <JournalPageLink journalLink={"Back to Journal"}/>
                <HeadingTitle title={title} />
                <HeadingImage imgSrc={imgSrc} imgAlt={imgAlt} />
            </div>
        </div>
    );
}