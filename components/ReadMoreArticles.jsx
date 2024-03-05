import { useState } from "react";
import { Link } from "react-router-dom";
import { latestArticles } from "../DataBase/latestArticles";
import "..//styles/LatestArticles.scss";
import "..//styles/ReadMoreArticles.scss";

export default function ReadMoreArticles() {
    const [readMore, setReadMore] = useState(false);

    function handleReadMoreClick() {
      setReadMore(!readMore);
    }

    return (
        <div className="read-articles">
            <div className="conteiner">
                <div className="read-articles__items">
                    {readMore && latestArticles.map(article =>
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
                    )}
                </div>
                
                <button id="readMoreButton" onClick={handleReadMoreClick}>
                    {readMore ? "CLOSE ARTICLES" : "READ MORE ARTICLES"}
                </button>
            </div>
        </div>
    );
}