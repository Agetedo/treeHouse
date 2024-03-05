import { Link } from "react-router-dom";
import latestArticlesLabel from "/vision-label-image.png";
import { latestArticles } from "../DataBase/latestArticles";
import "..//styles/LatestArticles.scss";

function LatestArticlesTitle({ title }) {
    return(<> <h3 className="latest-articles__title">{title}</h3> </>);
}

const latestAticlesList = latestArticles.map(article =>
    <section key={article.id} className="latest-article">
        <div className="latest-article__image">
            <img src={article.imageSrc} alt={article.imageAlt} />
        </div>
        <div className="latest-article__wrapper">
            <span className="latest-article__date">{article.date}</span>
            <h4 className="latest-article__title">
                <Link to={article.linkTitle}>{article.title}</Link>
            </h4>
            <p className="latest-article__text">{article.text}</p>

            <Link to={article.readLink} className="read__link">
                <p>{article.linkText}</p> 
                <img src={article.readLinkSrc} alt="#" />
            </Link>       
        </div>
    </section>  
);
function LatestAticlesList() {
    return(
        <div className="latest-articles__items">
          {latestAticlesList}
        </div>
    );
}

export default function LatestArticles() {
    return (
        <div className="latest-articles">
            <img id="latestArticlesLabel" src={latestArticlesLabel} alt="#" />
            <div className="conteiner">
                <LatestArticlesTitle 
                  title={"our latest articles"} 
                />
                <LatestAticlesList />
            </div>
        </div>
    );
}