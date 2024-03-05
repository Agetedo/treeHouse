import { Link } from "react-router-dom";
import TitleLeft from "./TitleLeft";
import journalLabel01 from "/cotton-label01.png";
import journalArticleImg from "/journal-article-image.jpg";
import PathConstants from "../routes/pathConstants";
import readLinkIcon from "/svg/shop-gallery-link-arrow.svg";
import { popularArticles } from "../DataBase/popularArticles";
import "..//styles/OurJournal.scss";

function JournalTitle({ caption, titleFirst, rubric }) {
    return(
        <div className="journal__title">
            <TitleLeft 
              caption={caption} titleFirst={titleFirst}
            />
            <p className="rubric">{rubric}</p>
        </div>
    );
}

function ReadLink({ linkText }) {
    return(
        <Link to={PathConstants.ARTICLE01PAGE} className="read-link__button">
          {linkText}
          <img src={readLinkIcon} alt="#" />
        </Link>
    );
}

function JournalArticle({ imgAlt, date, title, text, linkText }) {
    return(
        <section className="journal-article">
          <img src={journalArticleImg} alt={imgAlt} />
          <div className="journal-article__wrapper">
            <span className="journal-article__date">{date}</span>
            <h4 className="journal-article__title">
              <Link to={PathConstants.ARTICLE01PAGE}>{title}</Link>
            </h4>
            <p className="journal-article__text">
              <Link to={PathConstants.ARTICLE01PAGE}>{text}</Link>
            </p>
            <ReadLink linkText={linkText} />
          </div>
        </section>  
    );
} 

const popularAticlesList = popularArticles.map(article =>
    <section key={article.id} className="popular-article">
        <img src={article.imageSrc} alt={article.imageAlt} />
        <div className="popular-article__items">
            <span className="popular-article__date">{article.date}</span>
            <h4 className="popular-article__title">
              <Link to={article.linkTo}>{article.title}</Link>   
            </h4>
        </div>
    </section>
);

function PopularArticles({ title }) {
    return(
        <div className="popular__items">
            <h3 className="popular__title">{title}</h3>
            {popularAticlesList}
        </div>  
    );
} 

export default function OurJournal() {
    return (
        <div className="journal">
            <img id="journalLabel01" src={journalLabel01} alt="#" />
            <div className="conteiner">
                <JournalTitle 
                  caption={"Only helpful thoughts"}
                  titleFirst={"Our journal"}
                  rubric={"Here you can read our thoughts all things sustainable kids fashion. Just a bit of inspiration."}
                />

                <div className="journal__items">
                    <JournalArticle 
                      imgAlt={"Woman choosing clothes in showroom"}
                      date={"02.06.2023"}
                      title={"Start Your Sustainable Fashion Journey: Practical Tips for Everyone"}
                      text={"Are you interested in making more sustainable fashion choices but feeling overwhelmed by where to start? Don't worry; you're not alone."}
                      linkText={"Read more"}
                    />
                    <PopularArticles title={"Most popular"}/>
                </div>
            </div>
        </div>
    );
}