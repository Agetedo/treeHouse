import ArticlePageHeading from "../components/ArticlePageHeading";
import article01Image from "/article01-heading-image.jpeg";
import { article01Indicators } from "../DataBase/article01Indicators";
import article01PageImage01 from "/article01-page-image01.jpeg";
import ArticleGallery from "../components/ArticleGallery";
import { SwiperSlide } from "swiper/react";
import { articleGallery } from "../DataBase/articleGallery";
import LatestArticles from "../components/LatestArticles";
import Tend from "../components/Tend";
import "..//styles/Article.scss";

const text01 = <>{"Are you interested in making more sustainable fashion choices but feeling overwhelmed by where to start? Don't worry; you're not alone. It can be challenging to navigate the many choices out there, but remember that every small change can make a significant impact."}</>;
const text02 = <>{"In this blog post, we're here to support you with practical tips on how to make easy and achievable sustainable choices that can have a positive effect on the environment and society. Our goal is to help you take the first steps towards shopping more sustainably, without feeling intimidated or discouraged."}</>;
const text03 = <>{"Sustainability is a crucial topic that affects us all, and the fashion industry plays a significant role in environmental pollution and waste. According to recent reports, the fashion industry contributes 10% of global carbon emissions and 20% of global wastewater, with an estimated 92 million tons of textile waste generated annually."}</>;
const text04 = <>{"However, choosing to purchase sustainably can have a positive impact on the environment and support the fashion industry's transition towards more sustainable practices. By being more conscious about our purchasing habits and buying only sustainable clothing, we can contribute to a better future for our planet and future generations."}</>;
const title01 = <>{"Certifications and Labels"}</>;
const text05 = <>{"When shopping for sustainable clothing, certifications and labels are an essential guide to ensure that what we purchase is genuinely sustainable. Some of the certifications to look out for include GOTS (Global Organic Textile Standard), Fair Trade, and Oeko-Tex. These certifications guarantee that clothing is made with sustainable materials, under fair labor conditions, and without harmful chemicals."}</>;
const text06 = <>{"For example, according to the Textile Exchange's 2020 Organic Cotton Market Report, the production of organic cotton has saved 218 billion liters of water, reduced global CO2 emissions by 46,000 metric tons, and eliminated the use of 40 million pounds of pesticides and fertilizers since 2013. When purchasing clothes for your children, keep an eye out for these certifications to ensure that what you buy meets sustainable standards."}</>;
const title02 = <>{"Sustainable Fabrics"}</>;
const text07 = <>{"Choosing sustainable fabrics is another easy step towards a more sustainable wardrobe. Organic cotton, hemp, linen, and Tencel are excellent options as they require less water and pesticides than conventional cotton. These fabrics are eco-friendly and produced using sustainable practices, making them great choices for sustainable clothing."}</>;
const text08 = <>{"It's essential to note that no fabric production is completely sustainable, but by choosing sustainable fabrics, we can make a positive difference. So next time you're shopping for your little ones' clothes, consider choosing clothes made from these sustainable fabrics."}</>;
const title03 = <>{"Why Switch to Sustainable Clothing?"}</>;
const text09 = <>{"Apart from the environmental and social benefits, sustainable clothing can also save you money in the long run. While sustainable clothing may have a higher upfront cost, they are designed to last longer and are made from higher quality materials than fast fashion items. This means that you'll spend less money over time replacing worn-out items, ultimately saving you money. To make the most of your investment, consider the cost per wear of each item when deciding which pieces to purchase."}</>;
const text10 = <>{"Choosing to purchase sustainable clothing is a small but powerful way to make a positive impact on the environment and support the fashion industry's shift towards more sustainable practices. By looking for sustainable certifications and labels and choosing eco-friendly fabrics, we can reduce waste and pollution, support fair labor practices, and save money in the long run. Remember, sustainability is a journey, so take it one step at a time and enjoy the process of making a positive change towards a more sustainable lifestyle."}</>;

const aticle01IndicatorList = article01Indicators.map(indicator =>
    <div className="indicator" key={indicator.id}>
      <span>{indicator.indicator}</span>
      <p>{indicator.caption}</p>
    </div>
);

function ArticleText({ text01, text02, text03, text04, title01, text05, text06 }) {
    return(
       <div className="article-text">
            <div className="conteiner">
                <p className="post">{text01}</p>
                <p className="post">{text02}</p>
                <p className="post">{text03}</p>
                <div className="article-indicators__items">
                  {aticle01IndicatorList}
                </div>
                <p className="post">{text04}</p>
                <h3 className="article-title">{title01}</h3>
                <p className="post" id="article01Text05">{text05}</p>
                <p className="post">{text06}</p>
            </div>
       </div> 
    );
}

function PostImage01({ imgAlt }) {
    return(
        <div className="post__image">
            <div className="conteiner">
                <img src={article01PageImage01} alt={imgAlt} />
            </div>
        </div>
    );
}

function PostTitle({ title, text07, text08 }) {
    return(
        <div className="post-title">
            <div className="conteiner">
                <h3 className="post__title">{title}</h3>
                <p className="post" id="article01Text07">{text07}</p>
                <p className="post">{text08}</p>
            </div>
        </div>
    );
}

export default function Article01() {
    const articleImageList = articleGallery.map(image => 
        <SwiperSlide key={image.id} className="swiper-slide">
            <img src={image.imageSrc} alt={image.imageAlt} />
        </SwiperSlide>
    );
    return (
        <>
            <ArticlePageHeading 
              title={"Start Your Sustainable Fashion Journey: Practical Tips for Everyone"}
              imgSrc={article01Image}
              imgAlt={"Woman choosing clothes in showroom"}
            />
            <ArticleText 
              text01={text01}
              text02={text02}
              text03={text03}
              text04={text04}
              title01={title01}
              text05={text05}
              text06={text06}
            />
            <PostImage01 
              imgAlt={"Standards labels on clothing labels"}
            />
            <PostTitle 
              title={title02}
              text07={text07}
              text08={text08}
            />
            <ArticleGallery list={articleImageList}/>
            <PostTitle 
              title={title03}
              text07={text09}
              text08={text10}
            />
            <LatestArticles />
           <Tend />
        </>
    );
}