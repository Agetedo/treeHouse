import faqImage from "/faq-heading-image.jpg";
import faqImageLabel from "/faq-image-label.png";
import "..//styles/FaqHeading.scss";

function FaqTitle({ caption, title, subTitle}) {
    return(
        <div className="faq-title">
            <p>{caption}</p>
            <h2>{title}</h2>
            <h3>{subTitle}</h3>
        </div>
    );
}
function FaqImage({ imgAlt }) {
    return(
        <div className="faq-image">
          <img src={faqImage} alt={imgAlt} />
          <img id="faqImageLabel" src={faqImageLabel} alt="#" />
        </div>
    );
}

export default function FaqHeading() {
    return (
        <div className="faq-heading">
            <div className="conteiner">
                <FaqTitle 
                  caption={"How can we help?"}
                  title={"Frequently asked questions"}
                  subTitle={"With pleasure"}
                />
                <FaqImage 
                  imgAlt={"Two girls holding hands walk down the road"}
                />
            </div>
        </div>
    );
}