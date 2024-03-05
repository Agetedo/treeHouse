import costTitleImage from "/cost-title-image.png";
import costImg01 from "/cost-image01.jpg";
import costImg02 from "/cost-image02.jpg";
import costImg03 from "/cost-image03.jpg";
import "..//styles/Cost.scss";

function CostTitle({ title, rubric }) {
    return(
        <div className="cost-title">
          <h3>{title}</h3>
          <p className="rubric">{rubric}</p>
        </div>
    );
}
const costText01 = <>{"Check out the cost breakdown of what you'll pay for this item every time your child wears it. We did the math for you (USD)."}</>;
const costText02 = <>{"Calculating the true cost of your purchase in order to become a more conscious consumer and avoid overspending."}</>;
function CostText({ text01, text02 }) {
    return(
        <div className="cost-text">
          <p>{text01}</p><p>{text02}</p>
        </div>
    );
}

function CostImages({ img01Alt, img02Alt, img03Alt }) {
    return(
        <div className="cost__images">
          <div className="cost__month"><img src={costImg01} alt={img01Alt} /></div>
          <div className="cost__week"><img src={costImg02} alt={img02Alt} /></div>
          <div className="cost__everyday"><img src={costImg03} alt={img03Alt} /></div>
        </div> 
    );
}

export default function Cost() {
    return (
        <div className="cost">
            
            <section className="cost-title__items">
                <CostTitle 
                  title= {"Cost per wear"}
                  rubric={"Slow fashion isn't just KINDER to THE PLANET: it's KINDER ON your wallet, too!"}
                />
                <CostText text01={costText01} text02={costText02} />
                <img id="costTitleImage" src={costTitleImage} alt="#" />
            </section>

            <CostImages 
              img01Alt={"Once a month 8.00 USD"}
              img02Alt={"Once a week 1.85 USD"}
              img03Alt={"Everyday 0.26 USD"}
            />
        </div>
    );
}