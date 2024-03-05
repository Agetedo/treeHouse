import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Keyboard, EffectCube } from "swiper/modules";
import pressAboutLabel from "/svg/press-about-label.svg";
import pressAboutLabel02 from "/svg/press-about-label02.svg";
import { pressAboutSlides } from "../DataBase/pressAboutSlides";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/keyboard";
import 'swiper/scss/effect-cube';
import "..//styles/PressAbout.scss";

function PressAboutTitle({ title }) {
    return (
        <>
          <img id="pressAboutLabel" src={pressAboutLabel} alt="#" />
          <img id="pressAboutLabel02" src={pressAboutLabel02} alt="#"/>
          <h2 className="press-about__title">{title}</h2>
        </>  
    );
}
const pressList = pressAboutSlides.map(press => 
    <SwiperSlide key={press.id} className="swiper-slide">
        <blockquote cite={press.cite} className="press-about__text">
          {press.blockquoteText}
          <img src={press.autor} alt={press.autorAlt} className="blockquote__autor"/>
        </blockquote>
        <div className="read-link">
            <a rel="noopener" target="_blank" href={press.readLink} className="press-about__link">{press.linkText}</a>
            <img src={press.imgSrc} alt="#" />
        </div>
    </SwiperSlide>
);

export default function PressAbout() {
    return (
        <div className="press-about">
            <div className="conteiner">
                <PressAboutTitle title={"Press about us"} />

                <Swiper modules={[Pagination, Keyboard, EffectCube ]}
                    id="pressAbout" loop={true} speed={1000} grabCursor={true}
                    keyboard={{ enabled: true, onlyInViewport: false }}
                    pagination={{ 
                        el: "#pressAboutPagination", 
                        type: "progressbar",
                    }} 
                    autoHeight={true}
                    effect={"cube"}
                    cubeEffect={{
                        shadow: false,
                        slideShadows: false,
                        shadowOffset: 0,
                        shadowScale: 0,
                    }}>
                        
                  {pressList}
                  <div className="swiper-pagination-progressbar" id="pressAboutPagination"/>
                </Swiper> 
                
            </div>
        </div>     
    );
}