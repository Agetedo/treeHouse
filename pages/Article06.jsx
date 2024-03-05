import ArticlePageHeading from "../components/ArticlePageHeading";
import article06Image from "/article06-heading-image.jpeg";
import LatestArticles from "../components/LatestArticles";
import ArticlePoints from "../components/ArticlePoints";
import { article06Points } from "../DataBase/article06Points";
import { article06GreenPoints } from "../DataBase/article06GreenPoints";
import Tend from "../components/Tend";
import "..//styles/Article.scss";

const text01 = <>{"As parents, we know how quickly kids can go through clothes. From playing outside to messy meals, it seems like there's always a stain or tear to contend with. But constantly replacing clothes isn't just tough on our wallets – it's also tough on the environment. Textile production is a major contributor to pollution and waste, and the more clothes we buy, the more we contribute to the problem."}</>;
const title01 = <>{"Why It Matters"}</>;
const text02 = <>{"Perhaps you did not know these facts:"}</>;
const title02 = <>{"Tips for a More Sustainable Laundry Routine"}</>;
const text03 = <>{"Fortunately, there are ways to make our laundry routines more sustainable and extend the life of our kids' clothes."}</>;
const text04 = <>{"By following these simple tips, you can create a laundry routine that not only saves you time and money but also helps the environment by reducing water usage and waste. Plus, your kids' clothes will last longer, saving you the hassle of constantly replacing them. Remember, small changes can have a big impact, and with a little effort, you can create a more sustainable laundry routine that benefits both your family and the planet. So, start implementing these hacks today and see the difference it makes!"}</>;

function ArticleText({ text01 }) {
    return(
       <div className="article-text">
            <div className="conteiner">
                <p className="post" id="article06Text01">{text01}</p>
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

export default function Article06() {
    const pointsList = article06Points.map(point =>
        <div key={point.id} className="article-point__items">
            <img src={point.imgSrc} alt="#" />
            <p className="article-point__text">{point.text}</p>
        </div>
    );
    const greenPointsList = article06GreenPoints.map(point =>
        <div key={point.id} className="article-point__items">
            <img src={point.imgSrc} alt="#" />
            <p className="article-point__text">{point.text}</p>
        </div>
    );
    return (
        <>
            <ArticlePageHeading 
              title={"Laundry Hacks for Eco-Conscious Parents: How to Extend the Life of Your Kids' Clothing and Save Money"}
              imgSrc={article06Image}
              imgAlt={"Basket with laundry"}
            />
            <ArticleText 
              text01={text01}
            />
            <PointsTitle 
              title={title01}
              text={text02}
            />
            <ArticlePoints list={pointsList} />
            <PointsTitle 
              title={title02}
              text={text03}
            />
            <ArticlePoints list={greenPointsList} />
            <ArticleText 
              text01={text04}
            />
            <LatestArticles />
            <Tend />
        </>
    );
}