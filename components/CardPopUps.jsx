import { useState, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";
import productsIcon from "/product-journey-icon.png";
import fairIcon from "/fair-working-conditions-icon.png";
import sustainableIcon from "/sustainable-icon.png";
import popUpClose from "/pop-up-close-icon.png";
import productsImage from "/products-pop-up-image.jpg";
import fairImage from "/fair-pop-up-image.jpg";
import sustainableImage from "/sustainable-pop-up-image.jpg";
import lineIcon from "/svg/product-line-icon.svg";
import { stepsPopUp } from "../DataBase/stepsPopUp";
import { fairPopUpLinks } from "../DataBase/fairPopUpLinks";
import { sustainablePopUpLinks } from "../DataBase/sustainablePopUpLinks";
import "..//styles/CardPopUps.scss";

function PopUpButton({ src, onClick }) {
    return(
        <button className="popup__button" onClick={onClick}>
          <img src={src} alt="#" />
        </button>
    );
}
function ProductsPopUp({ imgAlt, caption, title, subTitle, onClick }) {
    return(
        <div className="popup__wrapper">
            <img className="popup__close" src={popUpClose} alt="#" onClick={onClick}/>
            <img className="content__image" src={productsImage} alt={imgAlt} />
            <div className="content">
                <p className="caption">{caption}</p>
                <h3>{title}</h3>
                <h4 id="subTitle">{subTitle}</h4>
                <section className="content__items">
                    <img src={lineIcon} alt="#" />
                    <div className="content__steps">
                        {stepsPopUp.map(step =>
                          <Fragment key={step.id}>
                            <h4 className="step__title">{step.caption}</h4>
                            <p>{step.text}</p>
                          </Fragment> 
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
function FairPopUp({ imgAlt, caption, title, text, certificates, onClick }) {
    return(
        <div className="popup__wrapper">
            <img className="popup__close" src={popUpClose} alt="#" onClick={onClick}/>
            <img className="content__image" src={fairImage} alt={imgAlt} />
            <div className="content">
                <p className="caption">{caption}</p>
                <h3>{title}</h3>
                <p className="content__text">{text}</p>
                <p className="content__certificates">{certificates}</p>
                <div className="content__links">
                    {fairPopUpLinks.map(link =>
                        <a key={link.id} rel="noopener" target="_blank" href={link.link}>
                          <img src={link.imgScr} alt={link.imgAlt} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

function SustainablePopUp({ imgAlt, caption, title, text, certificates, onClick }) {
    return(
        <div className="popup__wrapper">
            <img className="popup__close" src={popUpClose} alt="#" onClick={onClick}/>
            <img className="content__image" src={sustainableImage} alt={imgAlt} />
            <div className="content">
                <p className="caption">{caption}</p>
                <h3>{title}</h3>
                <p className="content__text">{text}</p>
                <p className="content__certificates">{certificates}</p>
                <div className="content__links">
                    {sustainablePopUpLinks.map(link =>
                        <a key={link.id} rel="noopener" target="_blank" href={link.link}>
                          <img src={link.imgScr} alt={link.imgAlt} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function CardPopUps() {
    const [showProducts, setShowProducts] = useState(false);
    useEffect(() => {
        if (showProducts) {
          document.body.style.overflow = "hidden";
        }else {
          document.body.style.overflowY = "scroll";
        }
    }, [showProducts]);

    const [showFair, setShowFair] = useState(false);
    useEffect(() => {
        if (showFair) {
          document.body.style.overflow = "hidden";
        }else {
          document.body.style.overflowY = "scroll";
        }
    }, [showFair]);

    const [showSustainable, setShowSustainable] = useState(false);
    useEffect(() => {
        if (showSustainable) {
          document.body.style.overflow = "hidden";
        }else {
          document.body.style.overflowY = "scroll";
        }
    }, [showSustainable]);

    return (
        <div className="card-popups">
            <section className="card-popups__items">
                <PopUpButton src={productsIcon} onClick={() => setShowProducts(true)} />
                <PopUpButton src={fairIcon} onClick={() => setShowFair(true)} />
                <PopUpButton src={sustainableIcon} onClick={() => setShowSustainable(true)} />
            </section>
            
            {showProducts && createPortal(
            <div className="blackoutScreen" onClose={() => setShowProducts(false)}>
                <ProductsPopUp 
                  onClick={() => setShowProducts(!showProducts)}
                  imgAlt={"A boy looks at an open card"}
                  caption={"WHERE I CAME FROM"}
                  title={"Product's journey"} subTitle={"steps and processes"}
                />
            </div>, document.body )}

            {showFair && createPortal(
            <div className="blackoutScreen" onClose={() => setShowFair(false)}>
                <FairPopUp 
                  onClick={() => setShowFair(!showFair)}
                  imgAlt={"Manufacturing with machines"}
                  caption={"We care about people"} title={"Fair Working Conditions"}
                  text={"Good management practices are implemented to ensure and continuously improve the working conditions of factory workers and all employees."}
                  certificates={"Certificates"}
                />
            </div>, document.body )}

            {showSustainable && createPortal(
            <div className="blackoutScreen" onClose={() => setShowSustainable(false)}>
                <SustainablePopUp
                  onClick={() => setShowSustainable(!showSustainable)}
                  imgAlt={"Field with flax flowers"}
                  caption={"In nature we trust"} title={"Sustainable Materials"}
                  text={"More than 98% of the materials used in this product are proven to be sustainable or eco-friendly."}
                  certificates={"Certificates"}
                />
            </div>, document.body )}
        </div>
    );
}