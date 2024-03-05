import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import Conditions from "./Conditions";
import { customerReviews } from "../DataBase/baseReviews";
import { hiddenReviews } from "../DataBase/hiddenReviews";
import CustomerReviews from "./CustomerReviews";
import HintTooltip from "./HintTooltip";
import AmountForm from "./AmountForm";
import giftCardImage from "/gift-card-image.png";
import giftCardLabel01 from "/gift-card-label01.png";
import giftCardLabel02 from "/gift-card-label02.png";
import hintIcon from "/gift-card-hint-icon.png";
import oneStarRating from "/one-star-rating.png";
import twoStarRating from "/two-star-rating.png";
import threeStarRating from "/three-star-rating.png";
import fourStarRating from "/four-star-rating.png";
import fiveStarRating from "/five-star-rating.png";
import modalCloseIcon from "/svg/modal-close-icon.svg";
import "..//styles/SendGiftCard.scss";

function CardView({ imgAlt }) {
    return(
        <div className="gift-card__view">
            <img id="cardView" src={giftCardImage} alt={imgAlt} />
            <img id="giftCardLabel01" src={giftCardLabel01} alt="#" />
            <img id="giftCardLabel02" src={giftCardLabel02} alt="#" />
        </div>
    );
}
function CardHint({ caption }) {
    return(
        <div className="gift-card__hint">
          <span>{caption}</span>
          <img src={hintIcon} alt="#" />
        </div> 
    );
}
function CardTitle({ title, caption01, caption02 }) {
    return(
        <>
          <h1 className="gift-card__title">{title}</h1>
          <p className="gift-card__caption">{caption01}<br />{caption02}</p>     
        </>
    );
}

function ButtonReview({ buttonText, onClick }) {
    return(
        <button id="buttonReview" onClick={onClick}>{buttonText}</button>
    );
}

function FormReviewsHeading({ title01, title02, title03, close, onClick }) {
    return(
        <>
            <p>{title01}<span>{title02}</span>{title03}</p>
            <div id="reviewsClose" onClick={onClick}>
              <span>{close}</span>
              <img src={modalCloseIcon} alt="#" />
            </div>
        </>
    );
}
function ReviewForm({ buttonSave }) {
    const [name, setName] = useState("");
    const [caption, setCaption] = useState("");
    const [reviewText, setReviewText] = useState("");

    const [rating, setRating] = useState(0);
    function starRating() {
        if (rating === 1) {
          return( oneStarRating );
        } else if (rating === 2) {
          return( twoStarRating );
        } else if (rating === 3) {
          return( threeStarRating );
        } else if (rating === 4) {
          return( fourStarRating );
        } else { return( fiveStarRating )}
    }

    const [hover, setHover] = useState(0);

    function handleSave(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const newObject={
            stars: starRating(),
            name: name,
            caption: caption,
            review: reviewText,
            autorIcon: name[0],
        }
        customerReviews.unshift(newObject);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
        console.log(rating); 
    }

    return(
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <form method="post" onSubmit={handleSave} id="formReviews">
                <input type="name" name="name" autoComplete="off"
                  value={name} onChange={e => setName(e.target.value)}
                  placeholder="Your Name" 
                />
                <input type="text" name="caption" autoComplete="off"
                  value={caption || ""} onChange={e => setCaption(e.target.value)}
                  placeholder="What is Your review about?"
                />
                <textarea name="review" autoComplete="off"
                  value={reviewText} onChange={e => setReviewText(e.target.value)}
                  rows={10} cols={40} placeholder="Write Your review here!"
                />
                
                <div className="star__rating" >
                    {[...Array(5)].map((star, index) => {
                    index += 1;
                        return (
                            <button type="button" key={index}
                              className={index <= (hover || rating) ? "on" : "off"}
                              onClick={() => setRating(index)}
                              onMouseEnter={() => setHover(index)}
                              onMouseLeave={() => setHover(rating)}
                            >
                              <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
                <button type="submit" id="buttonSave">{buttonSave}</button>
            </form>
            
        </ErrorBoundary>
    );
}

export default function SendGiftCard({ reviews }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
          document.body.style.overflow = "hidden";
        }else {
          document.body.style.overflowY = "scroll";
        }
    }, [showModal]);

    return (
        <>  
            <div className="gift-card">
                <div className="conteiner">

                    <div className="gift-card__items">
                        <CardView imgAlt={"Tree House gift card"} />

                        <div className="gift-card__send">
                            <HintTooltip text01={"Email"} text02={"Messengers"}text03={"Print"}>
                              <CardHint caption={"SEND a hint"} />
                            </HintTooltip>
                            
                            <CardTitle
                            title={"E-Gift card"}
                            caption01={"A meaningful gift that lasts."}
                            caption02={"Treehouse is love and care."}
                            />

                            <div className="gift-card__reviews">
                                <a href="#reviewsAnchor" className="rating__link">
                                    <img src={fiveStarRating} alt="#"/>
                                    <p className="rating__caption">
                                     {customerReviews.length + hiddenReviews.length}{reviews=" reviews"}
                                    </p>
                                </a>
                                <ButtonReview onClick={() => setShowModal(true)} buttonText={"Write a review"} />
                            </div>
                            <AmountForm />
                        </div>
                    </div>

                    {showModal && createPortal(
                    <div id="reviews" onClose={() => setShowModal(false)}>
                        <div className="form__reviews">
                            <FormReviewsHeading 
                            onClick={() => setShowModal(!showModal)}
                            title01={"Your "} title02={"feedback"} title03={"!"}
                            close={"close"}
                            />
                            <ReviewForm buttonSave={"Save review"} />
                        </div>
                    </div>, document.body )}
                    <Conditions />
                </div>
            </div> 
            <div id="reviewsAnchor"><CustomerReviews /></div>
        </>
    ); 
}