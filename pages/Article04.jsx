import ArticlePageHeading from "../components/ArticlePageHeading";
import article04Image from "/article04-heading-image.jpeg";
import LatestArticles from "../components/LatestArticles";
import ArticlePoints from "../components/ArticlePoints";
import { article04Points } from "../DataBase/article04Points";
import Tend from "../components/Tend";
import "..//styles/Article.scss";

const text01 = <>{"As parents, we always want the best for our children. This includes not only their health and well-being but also the impact we have on the environment, the environment THEY are going to inherit from us after we are gone."}</>;
const text02 = <>{"Unfortunately, synthetic fabrics, which make up approximately 60% of the global textile market, can pose a significant risk to both our children's health and the planet. Yes they're cheaper than natural fibre clothing and definitely more affordable than organic options, but there is a reason for that, one that should be discussed and considered."}</>;
const title01 = <>{"Greenpeace says"}</>;
const text03 = <>{"According to Greenpeace, polyester, one of the most common synthetic fabrics, takes over 200 years to decompose, and flame retardants used in synthetic fabrics have been found in high concentrations in children's blood and urine (Environmental Working Group). Synthetic fabrics leave a significant environmental and health impact including:"}</>;
const text04 = <>{"It's important to consider the potential risks of synthetic fabrics when choosing clothes for our children. Opting for natural and better still certified organic or OEKO-tex certified fabrics such as cotton, linen, and wool can be a safer and more sustainable option. By choosing these fabrics, we can reduce the risk of skin irritation and respiratory problems, avoid exposure to harmful chemicals, and make a positive impact on the environment."}</>;
const text05 = <>{"As caring parents, we all want what's best for our children, regardless of our background or income. While natural and organic fabrics may seem more expensive at first, their benefits far outweigh the cost (not to mention their longevity credentials and thus cost per wear considerations). Not only are they of higher quality and more durable, but they also pose fewer health risks compared to synthetic fabrics. "}</>;
const text06 = <>{"In addition, their production is more sustainable and contributes less to pollution and greenhouse gas emissions. By choosing sustainable clothing options for our little ones, we are not only making a smart investment but also taking a step towards a healthier and more sustainable future"}</>;

function ArticleText({ text01, text02, text03 }) {
    return(
       <div className="article-text">
            <div className="conteiner">
                <p className="post">{text01}</p>
                <p className="post" id="article04Text02">{text02}</p>
                <p className="post" id="article04Text03">{text03}</p>
            </div>
       </div> 
    );
}
function PointsTitle({ title, text }) {
    return(
        <div className="points-title">
            <div className="conteiner">
                <h3 className="points__title">{title}</h3>
                <p className="points__post">{text}</p>
            </div>
        </div>
    );
}

export default function Article04() {
    const pointsList = article04Points.map(point =>
        <div key={point.id} className="article-point__items">
            <img src={point.imgSrc} alt="#" />
            <p className="article-point__text">{point.text}</p>
        </div>
    );
    return (
        <>
            <ArticlePageHeading 
              title={"Protecting Your Children: The Hidden Dangers of Synthetic Fabrics You Need to Know About"}
              imgSrc={article04Image}
              imgAlt={"Fabric recycling"}
            />
            <ArticleText
              text01={text01} 
              text02={text02}
            />
            <PointsTitle 
              title={title01}
              text={text03}
            />
            <ArticlePoints list={pointsList}/>
            <ArticleText
              text01={text04} 
              text02={text05}
              text03={text06}
            />
            <LatestArticles />
            <Tend />
        </>
    );
}