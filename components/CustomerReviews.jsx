import { useState } from "react";
import uuid from "react-uuid";
import { customerReviews } from "../DataBase/baseReviews";
import { hiddenReviews } from "../DataBase/hiddenReviews";
import "..//styles/CustomerReviews.scss";

function ReviewsTitle({ reviewsTitle, caption, quantity }) {
    return(
        <>
          <h2 className="reviews__title">{reviewsTitle}</h2>
          <h3 className="subtitle">{caption}({quantity})</h3>
        </>
    );
}

export default function CustomerReviews() {
    const [seeMore, setSeeMore] = useState(false);

    function handleSeeMoreClick() {
      setSeeMore(!seeMore);
    }
    return (
        <div className="customer-reviews">
            <div className="conteiner">
                <ReviewsTitle
                  reviewsTitle={"Customer reviews"} caption={"Reviews "}
                  quantity={customerReviews.length + hiddenReviews.length} 
                />

                {customerReviews.map(review => 
                    <div key={uuid()} className="review__items">
                        <div className="autor">
                          <span>{review.autorIcon}</span>
                        </div>
                        <div className="review">
                          <img src={review.stars} alt="#" />
                          <span>{review.name}</span>
                          <p className="review__caption">{review.caption}</p>
                          <p className="review__text">{review.review}</p>
                        </div>
                    </div>
                )}
                
                {seeMore && hiddenReviews.map(hidden => 
                    <div key={hidden.id} className="review__items">
                        <div className="autor">
                          <span>{hidden.autorIcon}</span>
                        </div>
                        <div className="review">
                          <img src={hidden.stars} alt="#" />
                          <span>{hidden.name}</span>
                          <p className="review__caption">{hidden.caption}</p>
                          <p className="review__text">{hidden.review}</p>
                        </div>
                    </div>
                )}
                <button id="reviewsButton" onClick={handleSeeMoreClick}>
                    {seeMore ? "HIDE REVIEWS" : "SEE MORE"}
                </button>
            </div>
        </div>
    );
}