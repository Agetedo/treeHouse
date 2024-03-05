import { Link } from "react-router-dom";
import { recommendationsCards01 } from "../DataBase/recommendationsCards";
import { recommendationsCards02 } from "../DataBase/recommendationsCards02";
import "..//styles/Recommendations.scss";

const card01 = recommendationsCards01.map(card =>
    <div key={card.id} className="recommendations__items">
        <div className="card">
            <div className="card__hovered">
                <img src={card.imgSrc} alt={card.imgAlt} />
                <div className="card__quick">
                    <h3>{card.quickTitle}</h3>
                    <span>{card.price}</span>
                    <p className="age__select">
                      <Link to={card.link}>{card.ageSelect2_3}</Link>
                      <Link to={card.link}>{card.ageSelect3_4}</Link>
                      <Link to={card.link}>{card.ageSelect4_5}</Link>
                      <Link to={card.link}>{card.ageSelect5_6}</Link>
                      <Link to={card.link}>{card.ageSelect6_7}</Link>
                      <Link to={card.link}>{card.ageSelect7_8}</Link>
                      <Link to={card.link}>{card.ageSelect9_10}</Link>
                    </p>
                </div>
            </div>
            
            <p className="card__caption">{card.caption}</p>
            <div className="card__reviews">
              <img src={card.stars} alt="#" />
              <p>{card.reviews}</p>
            </div>
            <span className="card__price">{card.price}</span>
        </div>
    </div>
)

const card02 = recommendationsCards02.map(card =>
    <div key={card.id} className="recommendations__items">
        <div className="card">
            <div className="card__hovered">
                <img src={card.imgSrc} alt={card.imgAlt} />
                <div className="card__quick">
                    <h3>{card.quickTitle}</h3>
                    <span>{card.price}</span>
                    <p className="age__select">
                      <Link to={card.link}>{card.ageSelect2_3}</Link>
                      <Link to={card.link}>{card.ageSelect3_4}</Link>
                      <Link to={card.link}>{card.ageSelect4_5}</Link>
                      <Link to={card.link}>{card.ageSelect5_6}</Link>
                      <Link to={card.link}>{card.ageSelect6_7}</Link>
                      <Link to={card.link}>{card.ageSelect7_8}</Link>
                      <Link to={card.link}>{card.ageSelect9_10}</Link>
                    </p>
                </div>
            </div>
           
            <p className="card__caption">{card.caption}</p>
            <div className="card__reviews">
              <img src={card.stars} alt="#" />
              <p>{card.reviews}</p>
            </div>
            <span className="card__price">{card.price}</span>
        </div>
    </div>
)
const recommendationsList = [{
    id: "recom1",
    title: "you might also love…",
    list: <>{card01}</>
},{
    id: "recom2",
    title: "your recently viewed",
    list: <>{card02}</>
}] 

export default function Recommendations() {
    return (
        <div className="recommendations">
            <div className="conteiner">
                {recommendationsList.map(list =>
                    <section key={list.id} className="recommendations__cards">
                      <h2>{list.title}</h2>
                      <div className="list__items">{list.list}</div>
                    </section>
                )}
            </div>
        </div>
    );
}