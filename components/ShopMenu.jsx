import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Keyboard, Pagination, } from "swiper/modules";
import { shopMenu } from "../DataBase/shopMenu";
import { shopMobile } from "../DataBase/shopMobile";
import shopMenuLabel from "/shop-menu-label.png";
import closeIcon from "/svg/firsr-order-close-icon.svg";
import firsrOrderImage from "/firsr-order-image.jpg";
import "swiper/scss";
import 'swiper/scss/effect-creative';
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/keyboard";
import "..//styles/ShopMenu.scss";

const shopMenuList = shopMenu.map(shop => 
    <SwiperSlide key={shop.id} className="swiper-slide">
        <Link to={shop.linkTo} className="shop-menu__link"> 
          <img src={shop.imageSrc} alt={shop.imageAlt} /> 
        </Link> 
        <p>{shop.text}</p>
    </SwiperSlide>
);

function ShopMenuItems({ deliveryLink, deliveryLinkText, contactsLink, contactsLinkText }) {
    return(
        <div className="shop-menu__items">
          <Link to={deliveryLink}>{deliveryLinkText}</Link>
          <Link to={contactsLink}>{contactsLinkText}</Link>
        </div>
    );
}

const shopMobileList = shopMobile.map(mobile => 
    <section key={mobile.id} className="shop-mobile__division">
        <h3 className="shop-division__caption">
            <span>{mobile.caption}</span>
        </h3>
        <Link to={mobile.linkTo} className="shop-division__link"> 
          <img src={mobile.imageSrc} alt={mobile.imageAlt} /> 
        </Link>              
    </section>
);
function ShopMobile() {
    return(
        <div className="shop-mobile">
            <div className="shop-mobile__items">
              {shopMobileList}
            </div>
        </div> 
    );
}

function FirstOrderCaption({ title01, percent, title02, text }) {
    return(
        <>
          <h3>{title01}<span>{percent}</span><br />{title02}</h3>
          <p>{text}</p>
        </>
    );
}

function FirstOrderForm({ signUpText }) {
    const [signUp, setSignUp] = useState("");

    function handleSingUp(e) {
     e.preventDefault();

     const form = e.target;
     const formData = new FormData(form);

     fetch('/some-api', { method: form.method, body: formData });

     const formJson = Object.fromEntries(formData.entries());
     console.log(formJson);
    }

    return(
        <ErrorBoundary fallback={<p style={{ color: "red", textAlign: "center", fontSize: 20, paddingTop: 30, }}>
          There was an error while submitting the form</p>}
        >
            <form method="post" onSubmit={handleSingUp} id="form3">
                <input type="email" id="signEmail" name="email" 
                  value={signUp} onChange={e => setSignUp(e.target.value)}
                  placeholder="Enter your email" 
                />
                <button>{signUpText}</button>
            </form>
        </ErrorBoundary>
    );
}

export default function ShopMenu() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (showModal) {
          document.body.style.overflow = "hidden";
        }
        else {
          document.body.style.overflowY = "scroll";
        }
    }, [showModal]);

    return(
        <div className="shop-menu">
            <div className="conteiner">

                <Swiper modules={[EffectCreative, Autoplay, Keyboard, Pagination,]} 
                    id="shopMenu" direction={"horizontal"}
                    slidesPerView={1} speed={1000}
                    keyboard={{ enabled: true, onlyInViewport: false, }}
                    autoplay={{delay: 4000, disableOnInteraction: false, }}
                    pagination={{
                        clickable: true,
                        el: ".shop-pagination",
                        renderBullet: function(index, categorys) {
                            let labels = ['Shirts', 'T-Shirts', 'Bottoms', 'Roompers', 'Hats', 'Shop all collection'];
                            return ('<span class="'+categorys+'">' + (labels[index]) + "</span>");
                        },
                    }}
                    effect={'creative'}
                    creativeEffect={{
                        prev: {
                          shadow: true,
                          origin: "left center",
                          translate: ['-5%', 0, -200],
                          rotate: [0, 100, 0],
                        },
                        next: {
                          origin: "right center",
                          translate: ['5%', 0, -200],
                          rotate: [0, -100, 0],
                        },
                    }}>

                    <div className="shop-pagination" />
                    {shopMenuList}
                    <img className="shop-menu__label" src={shopMenuLabel} alt="#" />
                </Swiper>

                <ShopMenuItems 
                  deliveryLink={"/coming-soon-page"} deliveryLinkText={"Delivery & return"}
                  contactsLink={"/contacts-page"} contactsLinkText={"Contacts"}
                />
                <ShopMobile />

                <div className="shop-menu__button">
                    <button onClick={() => setShowModal(true)}>First order</button>
                </div>

                {showModal && createPortal(
                <div id="firstOrder" onClose={() => setShowModal(false)}>
                    <div className="firsr-order__content">

                        <div id="firstOrderClose" onClick={() => setShowModal(!showModal)}>
                            <img src={closeIcon} alt="#" />
                        </div>

                        <div className="firsr-order__items">
                            <img src={firsrOrderImage} alt="Girl with red hair" />

                            <section className="email__form">
                                <FirstOrderCaption 
                                  title01={"Want to save "} percent={"15%"}
                                  title02={" on your first order?"}
                                  text={"Sign up here and take part in something truly special, receive exclusive offers, updates, new arrivals and inspiration. Unsubscribe any time."}
                                />
                                <FirstOrderForm signUpText={"SIGN UP"} />
                            </section>
                        </div>
                    </div>
                </div>, document.body )}

            </div>
        </div>
    );
}