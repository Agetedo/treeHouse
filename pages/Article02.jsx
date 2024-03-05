import ArticlePageHeading from "../components/ArticlePageHeading";
import article02Image from "/article02-heading-image.jpeg";
import LatestArticles from "../components/LatestArticles";
import Tend from "../components/Tend";
import { article02Indicators } from "../DataBase/article02Indicators";
import article02PageImage01 from "/article02-page-image01.jpeg";
import ArticlePoints from "../components/ArticlePoints";
import { article02Points } from "../DataBase/article02Points";
import "..//styles/Article.scss";

const text01 = <>{"As parents, we all want to do what's best for our children. We want to make sure they're healthy, happy, and safe. But have you ever thought about the people who make the clothes our kids wear? Are they being treated fairly and ethically? That's where the Global Organic Textile Standard (GOTS) comes in, and it's making a huge difference."}</>;
const text02 = <>{"GOTS is a certification for textiles that ensures the entire production process is ecologically and socially responsible. This means that the fabrics are made from organic materials, and that the factory conditions for workers are humane and ethical. It's a big deal, and it's making a big difference."}</>;
const title01 = <>{"GOTS changed factory conditions"}</>;
const text03 = <>{"In fact, GOTS has completely changed factory conditions for workers. Let's look at the numbers. According to a report from the Fair Wear Foundation, which works to improve labor conditions in the textile industry, the average wage of a textile worker in Bangladesh is around 64 cents per hour. That's not enough to live on, let alone support a family. But GOTS requires that workers are paid fairly for their labor, which means a living wage that allows them to provide for themselves and their families. It's a small but significant step toward fair and ethical treatment of workers."}</>;
const text04 = <>{"The actual wage paid to GOTS textile workers can vary depending on the country and region, but it is typically higher than the minimum wage and fairer than the wages paid in non-GOTS factories."}</>;
const text05 = <>{"According to a 2019 report from the Fair Wear Foundation, which works to improve labor conditions in the textile industry, GOTS certified factories in India pay an average wage of INR 12,590 (approximately USD 170) per month, compared to the national minimum wage of INR 9,000 (approximately USD 120) per month. That's approximately a 30% higher salary. Not to mention the additional benefits workers receive."}</>;
const title02 = <>{"Partnership with Aadhava Apparel's"}</>;
const text06 = <>{"Treehouse's partner Aadhava Apparel's not only pays their workers a living wat but also ensures:"}</>;
const text07 = <>{"GOTS is not just about ensuring that workers are treated fairly and ethically. It also requires that factories provide safe working conditions, including adequate ventilation and lighting, clean water, and sanitary facilities. These basic requirements are sadly not met in many textile factories around the world, but GOTS is working to change that."}</>;
const title03 = <>{"Gots and fabrics"}</>;
const text08 = <>{"Furthermore, GOTS certification means that the fabrics used in the products we buy are made from organic materials, which is better for the environment and our health. Organic farming practices use fewer pesticides and synthetic fertilizers, which reduces the impact on the land and water systems. It also means that the fabrics are free from harmful chemicals, making them safer for workers to handle and ultimately for our kids to wear."}</>;
const text09 = <>{"By choosing products that are GOTS certified, we're not just making a difference for workers - we're also making a difference for the environment. It's a small but meaningful way to help build a better future for our children."}</>;
const text10 = <>{"So the next time you're shopping for clothes, take a moment to look for the GOTS label. It may not always be easy to find, but it's worth the effort. By supporting brands that prioritize GOTS certification, we can help to create a better world for everyone."}</>;

const aticle02IndicatorList = article02Indicators.map(indicator =>
    <div className="indicator" key={indicator.id}>
      <span>{indicator.indicator}</span>
      <p>{indicator.caption}</p>
    </div>
);
function ArticleText({ text01, text02, text03, text04, text05 }) {
    return(
       <div className="article-text">
            <div className="conteiner">
                <p className="post">{text01}</p>
                <p className="post" id="article02Text02">{text02}</p>
                <h3 className="article-title">{title01}</h3>
                <p className="post" id="article02Text03">{text03}</p>
                <p className="post">{text04}</p>
                <div className="article-indicators__items">
                  {aticle02IndicatorList}
                </div>
                <p className="post">{text05}</p>
            </div>
       </div> 
    );
}
function PostImage01({ imgAlt }) {
    return(
        <div className="post__image">
            <div className="conteiner">
                <img src={article02PageImage01} alt={imgAlt} />
            </div>
        </div>
    );
}

function PostTitle({ title, text06, text07, text08, text09 }) {
    return(
        <div className="post-title">
            <div className="conteiner">
                <h3 className="post__title">{title}</h3>
                <p className="post">{text06}</p>
                <p className="post">{text07}</p>
                <p className="post" id="article02Text08">{text08}</p>
                <p className="post" id="article02Text09">{text09}</p>
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

export default function Article02() {
    const pointsList = article02Points.map(point =>
        <div key={point.id} className="article-point__items">
            <img src={point.imgSrc} alt="#" />
            <p className="article-point__text">{point.text}</p>
        </div>
    );
    return (
        <>
            <ArticlePageHeading 
              title={"From Our Children's Safety to Workers' Rights: The Revolutionary Impact of GOTS Certification in Kids Clothing Factories"}
              imgSrc={article02Image}
              imgAlt={"Cotton and certification mark"}
            />
            <ArticleText 
              text01={text01}
              text02={text02}
              title01={title01}
              text03={text03}
              text04={text04}
              text05={text05}
            />
            <PostImage01 
              imgAlt={"A man sews on a sewing machine in the workshop"}
            />
            <PointsTitle 
              title={title02}
              text={text06}
            />
            <ArticlePoints list={pointsList} />
            <PostTitle 
              title={title03}
              text06={text07}
              text07={text08}
              text08={text09}
              text09={text10}
            />
            <LatestArticles />
            <Tend />
        </>
    );
}