import ArticlePageHeading from "../components/ArticlePageHeading";
import article05Image from "/article05-heading-image.jpeg";
import LatestArticles from "../components/LatestArticles";
import article05PageImage01 from "/article05-page-image01.jpeg";
import ArticlePoints from "../components/ArticlePoints";
import { article05Points } from "../DataBase/article05Points";
import Tend from "../components/Tend";
import "..//styles/Article.scss";

const text01 = <>{"As parents, we all know the struggle of getting our kids dressed every day. From mismatched outfits to piles of clothes on the floor, it can be overwhelming and time-consuming. But what if there was a solution that not only simplified the process but also helped contribute to a more sustainable lifestyle? Enter the capsule wardrobe."}</>;
const title01 = <>{"What is a capsule wardrobe?"}</>;
const text02 = <>{"A capsule wardrobe is a curated collection of clothing that consists of a few essential pieces that can be mixed and matched to create a variety of outfits (just like Treehouse's Spring Summer Collection!). The concept was popularized by fashion designer Donna Karan in the 1980s and has since gained popularity as a way to simplify dressing and reduce waste."}</>;
const text03 = <>{"The idea is to have a smaller number of high-quality pieces that can be worn in many different ways, rather than a large number of low-quality items that only have one or two uses. This approach can simplify the process of getting dressed, reduce the clutter in your child's closet, and contribute to more sustainable living by promoting conscious consumption."}</>;
const title02 = <>{"Why does a capsule wardrobe make dressing easier?"}</>;
const text04 = <>{"By limiting the number of clothes in your child's wardrobe to a few essential pieces, you eliminate decision fatigue and simplify the process of getting dressed. No more rifling through piles of clothes or trying to find a matching outfit. With a capsule wardrobe, every piece is carefully chosen to work together, making dressing quick and easy."}</>;
const title03 = <>{"How does a capsule wardrobe contribute to sustainable living?"}</>;
const text05 = <>{"Fast fashion has contributed to a culture of overconsumption, where clothing is purchased and discarded at an alarming rate. A capsule wardrobe helps combat this by encouraging intentional purchases and reducing waste. By investing in high-quality, versatile pieces that can be worn for multiple seasons, you not only reduce the amount of clothing going into landfills but also save money in the long run."}</>;
const title04 = <>{"Top tips for creating a capsule wardrobe for your child"}</>;
const text06 = <>{"A capsule wardrobe saves not only energy and time, but also money. A thoughtful capsule is an antidote to unsuccessful purchases, returns and pointless spending."}</>;
const text07 = <>{"At the very least you'll have less stress associated with getting your kids dressed in the morning. You will have to do less laundry because the children will have less clothes and they will not have the physical ability to change sets 5 times a day. This teaches frugality, by the way too!"}</>;

function ArticleText({ text01 }) {
    return(
       <div className="article-text">
            <div className="conteiner">
                <p className="post" id="article05Text01">{text01}</p>
            </div>
       </div> 
    );
}
function PostTitle({ title, text02, text03 }) {
    return(
        <div className="post-title">
            <div className="conteiner">
                <h3 className="post__title">{title}</h3>
                <p className="post">{text02}</p>
                <p className="post">{text03}</p>
            </div>
        </div>
    );
}
function PostImage01({ imgAlt }) {
    return(
        <div className="post__image">
            <div className="conteiner">
                <img src={article05PageImage01} alt={imgAlt} />
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

export default function Article05() {
    const pointsList = article05Points.map(point =>
        <div key={point.id} className="article-point__items">
            <img src={point.imgSrc} alt="#" />
            <p className="article-point__text">{point.text}</p>
        </div>
    );
    return (
        <>
            <ArticlePageHeading 
              title={"Creating a Sustainable and Stress-Free Wardrobe for Your Kids: The Ultimate Guide to Building a Capsule Wardrobe"}
              imgSrc={article05Image}
              imgAlt={"Girl in a shelf of dandelions"}
            />
            <ArticleText
              text01={text01} 
            />
            <PostTitle 
              title={title01}
              text02={text02}
              text03={text03}
            /> 
            <PostTitle 
              title={title02}
              text02={text04}
            />
            <PostImage01
              imgAlt={"Children sitting under a tree"} 
            />
            <PostTitle 
              title={title03}
              text02={text05}
            />
            <PointsTitle 
              title={title04}
              text={text06}
            />
            <ArticlePoints list={pointsList} />
            <ArticleText
              text01={text07} 
            />
            <LatestArticles />
            <Tend />
        </>
    );
}