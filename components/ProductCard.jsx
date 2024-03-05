import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import CustomerReviews from "../components/CustomerReviews";
import CardProductShow from "./CardProductShow";
import CardPopUps from "./CardPopUps";
import oneStarRating from "/one-star-rating.png";
import twoStarRating from "/two-star-rating.png";
import threeStarRating from "/three-star-rating.png";
import fourStarRating from "/four-star-rating.png";
import fiveStarRating from "/five-star-rating.png";
import { customerReviews } from "../DataBase/baseReviews";
import { hiddenReviews } from "../DataBase/hiddenReviews";
import modalCloseIcon from "/svg/modal-close-icon.svg";
import CardForm from "./CardForm";
import ProductProperties from "./ProductProperties";
import Cost from "./Cost";
import "..//styles/SendGiftCard.scss";
import "..//styles/ProductCard.scss";

function ProductFeature({ newLabel, title, captionText }) {
    return(
        <>
          <span className="product__label">{newLabel}</span>
          <h2>{title}</h2>
          <p className="product__caption">{captionText}</p>
        </>
    );
}
function ButtonReview({ buttonText, onClick }) {
    return(
        <button id="productReview" onClick={onClick}>{buttonText}</button>
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
function ProductPrice({ price }) {
    return( <><span className="product__price">{price}</span></> );
}

export default function ProductCard({ reviews, newLabel, title, captionText, price, ancor }) {
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
            <div className="card">
                <div className="conteiner">
                    <section className="card__items">
                        <CardProductShow />
                    
                        <div className="product__feature">
                            <ProductFeature newLabel={newLabel} title={title}
                              captionText={captionText}
                            />
                            
                            <div className="product__reviews">
                                <a href={`#${ancor}`} className="rating__link">
                                    <img src={fiveStarRating} alt="#"/>
                                    <p className="rating__caption">
                                        {customerReviews.length + hiddenReviews.length}{reviews=" reviews"}
                                    </p>
                                </a>
                                <ButtonReview onClick={() => setShowModal(true)} buttonText={"Write a review"} />
                            </div> 
                            <ProductPrice price={price} />
                            <CardPopUps />
                            <CardForm />
                        </div>
                    </section>
                    
                    <ProductProperties />
                    <Cost />

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
                    
                </div>
            </div>
            <div id={ancor}><CustomerReviews /></div>
        </>
    );
}