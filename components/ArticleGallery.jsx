import { Swiper } from "swiper/react";
import { Scrollbar, Keyboard, } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/scrollbar";
import "swiper/scss/keyboard";
import "..//styles/ArticleGallery.scss";

export default function ArticleGallery({ list }) {
    return (
        <div className="article-gallery">
            <div className="conteiner">
                <Swiper modules={[ Scrollbar, Keyboard,]}
                    id="articleGallery"
                    slidesPerView={3} grabCursor={true}
                    spaceBetween={30} loop={true} 
                    scrollbar={{
                    hide: false,
                    }}
                    keyboard={{ enabled: true, onlyInViewport: false }}
                    breakpoints={{
                        769: {
                          slidesPerView: 3,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        450: {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        319: {
                          slidesPerView: 1.4,
                          spaceBetween: 15,
                        },
                    }}
                >
                {list}
                </Swiper>
            </div>  
        </div>
    );
}