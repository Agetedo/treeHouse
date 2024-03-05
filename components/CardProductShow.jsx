import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";
import { productShow } from "../DataBase/productShow";
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";
import 'swiper/scss/pagination';
import "..//styles/CardProductShow.scss";

const showImgList = productShow.map(show => 
    <SwiperSlide key={show.id} className="show-slide">
        <img src={show.imageSrc} alt={show.imageAlt} /> 
    </SwiperSlide>
);

export default function CardProductShow() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="product__appearance">
            <Swiper modules={[FreeMode, Navigation, Thumbs, Pagination]} 
                loop={true} spaceBetween={10} pagination={{ type: "fraction" }}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                id="productShow">
                {showImgList}
            </Swiper>

            <Swiper modules={[FreeMode, Navigation, Thumbs, Pagination]}
                onSwiper={setThumbsSwiper} loop={true}
                spaceBetween={8} slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                id="imgSelect">
                {showImgList}    
            </Swiper>
        </div>
    );
}