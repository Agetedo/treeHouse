import ArticlePageHeading from "../components/ArticlePageHeading";
import article03Image from "/article03-heading-image.jpeg";
import LatestArticles from "../components/LatestArticles";
import ArticleGallery from "../components/ArticleGallery";
import { SwiperSlide } from "swiper/react";
import { shopGallery } from "../DataBase/shopGallery";
import Tend from "../components/Tend";
import "..//styles/Article.scss";

const text01 = <>{"As a parent, you want the best for your child, and that includes their clothing. You want them to look cute, feel comfortable, and be protected from the elements. However, children grow quickly, and before you know it, they've outgrown their favorite outfits. That's why it's essential to take good care of your children's clothing so that it lasts longer and can be passed down to siblings or friends"}</>;
const text02 = <>{"One more thing to keep in mind while taking care of your child's clothing is to consider buying sustainable organic or OEKO-tex certified fabrics. Organic fabrics for example, are grown without the use of harmful chemicals or pesticides, which not only makes them better for the environment but also safer for your child's skin."}</>;
const title01 = <>{"Washing and Drying tips"}</>;
const text03 = <>{"To ensure that your children's clothes last longer, it's essential to wash them correctly. This means washing them on the appropriate temperature, using the right amount of detergent, and avoiding harsh chemicals like bleach or fabric softener. Also, make sure to turn the clothes inside out to prevent fading or damage to any prints or appliques."}</>;
const text04 = <>{"Drying clothes correctly is just as important as washing them properly. Avoid putting clothes in the dryer on high heat as it can cause shrinkage or damage to the fabric. Instead, hang the clothes to dry or use a drying rack. If you must use a dryer, use the low heat setting."}</>;
const title02 = <>{"Mending clothes"}</>;
const text05 = <>{"By taking care of your children's clothes, you can save money, reduce waste, and teach your child valuable life skills. With a little bit of effort, you can ensure that their clothes last long enough to be passed down, look great, and are kind to the environment. Remember, taking care of our children's clothes is not just about the clothes themselves, but also about the lessons we teach them. By making conscious choices and taking good care of what we have, we can help create a better future for our children and the planet."}</>;
const text06 = <>{"For example, if your child's favorite pair of jeans have a hole in the knee, you can sew on a patch in a fun shape or design. You can use fabric scraps, old clothes, or even purchase iron-on patches. Mending clothes not only extends their life but also reduces waste, which is better for the environment."}</>;
const title03 = <>{"Storing clothes"}</>;
const text07 = <>{"Storing clothes correctly is important to prevent damage from moths and other pests. Moths are attracted to natural fibers like wool, cotton, and silk, so it's crucial to store these items correctly. Firstly, ensure that clothes are clean before storing them, as any dirt or food stains can attract pests. Then, fold them neatly and store them in airtight containers, such as plastic bins or vacuum-sealed bags. Adding cedar blocks or lavender sachets can also help repel moths and keep clothes smelling fresh"}</>;
const text08 = <>{"When storing delicate items like dresses, it's best to hang them up. However, avoid using wire hangers, as they can damage the fabric. Instead, use padded hangers or wooden hangers to avoid stretching or distortion. Also, keep them covered with a breathable garment bag to protect them from dust and moths."}</>;
const title04 = <>{"Let's make conscious choices"}</>;
const text09 = <>{"By taking care of your children's clothes, you can save money, reduce waste, and teach your child valuable life skills. With a little bit of effort, you can ensure that their clothes last long enough to be passed down, look great, and are kind to the environment. Remember, taking care of our children's clothes is not just about the clothes themselves, but also about the lessons we teach them. By making conscious choices and taking good care of what we have, we can help create a better future for our children and the planet."}</>;

function ArticleText({ text01, text02, text03, text04, title02, text05, text06 }) {
  return(
    <div className="article-text">
      <div className="conteiner">
        <p className="post">{text01}</p>
        <p className="post" id="article03Text02">{text02}</p>
        <h3 className="article-title">{title01}</h3>
        <p className="post" id="article03Text03">{text03}</p>
        <p className="post">{text04}</p>
        <h3 className="article-title">{title02}</h3>
        <p className="post" id="article03Text05">{text05}</p>
        <p className="post">{text06}</p>
      </div>
    </div> 
  );
}

function PostTitle({ title, text07, text08 }) {
  return(
    <div className="post-title">
      <div className="conteiner">
        <h3 className="post__title">{title}</h3>
        <p className="post">{text07}</p>
        <p className="post">{text08}</p>
      </div>
    </div>
  );
}

export default function Article03() {
  const productList = shopGallery.map(product => 
    <SwiperSlide key={product.id} className="swiper-slide">
      <img src={product.imageSrc} alt={product.imageAlt} />
    </SwiperSlide>
  );
  return (
    <>
      <ArticlePageHeading 
        title={"Secrets to Long-Lasting Children's Clothes: Tips to Keep Them in Great Shape and Pass Them Down for Generations"}
        imgSrc={article03Image}
        imgAlt={"Stack of fabrics"}
      />
      <ArticleText 
        text01={text01}
        text02={text02}
        title01={title01}
        text03={text03}
        text04={text04}
        title02={title02}
        text05={text05}
        text06={text06}
      />
      <ArticleGallery list={productList} />
      <PostTitle 
        title={title03}
        text07={text07}
        text08={text08}
      />
      <PostTitle 
        title={title04}
        text08={text09}
      />
      <LatestArticles />
      <Tend />
    </>
  );
}