import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, } from "swiper/modules";
import { shopGallery } from "../DataBase/shopGallery";
import TitleLeft from "./TitleLeft";
import buttonPrev from "/svg/button-prev.svg";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/keyboard";
import "..//styles/ShopGallery.scss";

function CaptionTopping() {
    return(
        <div className="caption__topping">
          <TitleLeft caption={"your perfect match"} titleFirst={"Shop the look"} />
        </div>
    );
}

function ShopGalleryNavigation() {
    return(
        <div className="shop-gallery__navigation">
            <div className="swiper-button-next">
              <img src={buttonPrev} alt="#" />
            </div>
            <div className="swiper-button-prev">
              <img src={buttonPrev} alt="#" />
            </div>
        </div> 
    );
}

const productList = shopGallery.map(product => 
    <SwiperSlide key={product.id} className="swiper-slide">
        <div className="card__blackout" > 
            <img src={product.imageSrc} alt={product.imageAlt} />

            <div className="image-blackout">
                <div className="product-card__items">
                    <img src={product.imgCard01} alt={product.imgAlt01} />
                    <section className="product-card__depiction">
                      <h5>{product.titleCard01}</h5>
                      <span>{product.priceCard01}</span>
                    </section>
                </div>
                <div className="product-card__items">
                    <img src={product.imgCard02} alt={product.imgAlt02} />
                    <section className="product-card__depiction">
                      <h5>{product.titleCard02}</h5>
                      <span>{product.priceCard02}</span>
                    </section>
                </div>
            </div>
        </div>
        
        <p className="shop-gallery__text">{product.text}</p>
        <div className="shop-gallery__link">
            <img src={product.arrowIcon} alt="#" />
            <Link to={product.linkTo} className="category__link">{product.linkText}</Link>
        </div>
    </SwiperSlide>
);

export default function ShopGallery() {
    return (
        <div className="shop-gallery">
            <div className="conteiner">

                <div className="shop-gallery__topping">
                    <CaptionTopping />
                    <ShopGalleryNavigation />
                </div>

                <Swiper modules={[Navigation, Pagination, Keyboard,]} 
                    id="shopGallery" direction={"horizontal"}
                    slidesPerView={3.3} autoHeight={true}
                    spaceBetween={40} loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    pagination={{
                        el: "#shopGalleryPagination",
                        type: "progressbar",
                    }}
                    keyboard={{ enabled: true, onlyInViewport: false }}
                    breakpoints={{
                        1025: {
                          slidesPerView: 3.3, 
                          spaceBetween: 40,
                        },
                        620: {
                          slidesPerView: 2.5,
                          spaceBetween: 32,
                        },
                        450: {
                          slidesPerView: 1.6,
                          spaceBetween: 20,
                        },
                        319: {
                          slidesPerView: 1.4,
                          spaceBetween: 15,
                        },
                    }}>

                    {productList}
                    <div className="swiper-pagination" id="shopGalleryPagination"></div>
                </Swiper>
            </div>
        </div>
    );
}