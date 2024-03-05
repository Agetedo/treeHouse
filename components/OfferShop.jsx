import { Link } from "react-router-dom";
import PathConstants from "../routes/pathConstants";
import offerShopIcon from "/svg/offer-shop-icon.svg";
import offerShopImage01 from "/offer-shop-image01.jpg";
import offerShopImage02 from "/offer-shop-image02.jpg";
import footnoteIcon from "/svg/footnote-icon.svg";
import "..//styles/OfferShop.scss";

function ShopDefinition({ discount, text, buttonLink }) {
    return(
        <div className="offer-shop__definition">
            <img src={offerShopIcon} alt="#" />
            <span>{discount}</span>
            <p className="offer-shop__text">{text}</p>
            <Link to={PathConstants.SHOPPAGE} className="offer-shop__button">{buttonLink}</Link>
        </div>
    );
}

function FootnoteText ({ text }) {
    return(
        <div className="footnote__text">
            <img src={footnoteIcon} alt="#" />
            <p>{text}</p>
        </div> 
    );
}

export default function OfferShop() {
    return (
        <div className="offer-shop">
            <div className="conteiner">

                <div className="offer-shop__items">
                    <ShopDefinition discount={"25% off"} 
                      text={"Save yourself the headache of endless shopping with our Capsule Collection*. Buy all 14 pieces, save 25%, and enjoy endless outfit options, dressing your littles in no time!"}
                      buttonLink={"SHOP NOW"}
                    />
                    <img className="offer-shop__image" src={offerShopImage01} alt="Two children with a toy" />
                </div>
            
                <div className="footnote__items">
                    <img id="offerImage" src={offerShopImage02} alt="Laundry drying outside" />
                    <FootnoteText 
                      text={"The entire collection has a neutral style and every item matches perfectly with the next."}
                    />
                </div>
            </div>
        </div>
    );
}