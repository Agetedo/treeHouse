import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay, Keyboard,} from "swiper/modules";
import { categoryGallery } from "../DataBase/categoryGallery";
import leafLabel from "/svg/leaf-label.svg";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/effect-fade";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import "swiper/scss/keyboard";
import "..//styles/Category.scss";

function CategoryTitle({ caption, title }) {
    return(
        <>
          <p className="caption__center">{caption}</p>
          <h3 className="title__center">{title}</h3>
        </>
    );
}

const slidesList = categoryGallery.map(slide => 
    <SwiperSlide key={slide.id} className="swiper-slide">
        <Link to={slide.linkTo} className="category__link">
          <img src={slide.imageSrc} alt={slide.imageAlt}/>
        </Link>
    </SwiperSlide>
);

export default function Category() {
    return (
        <div className="category">
            <div className="conteiner">

                <img src={leafLabel} alt="#" id="leafLabel" />
                <CategoryTitle caption={"let's make shopping"} title={"What are you looking for?"} />

                <Swiper modules={[Navigation, EffectFade, Pagination, Autoplay, Keyboard,]} 
                    id="categoryGallery"
                    direction={"horizontal"}
                    slidesPerView={1} autoHeight={true}
                    loop={true} speed={1000}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    effect={"fade"} 
                    pagination={{ clickable: true,
                        el: ".category__pagination",
                        renderBullet: function(index, categorys) {
                          let labels = ['TOPS', 'BOTTOMS', 'ROOMPERS', 'HATS', 'ALL COLLECTION'];
                          return ('<span class="'+categorys+'">' + (labels[index]) + "</span>");
                        },
                    }}
                    keyboard={{ enabled: true, onlyInViewport: false }}>

                    {slidesList}
                    <div className="category__pagination"></div>
                </Swiper>
                
            </div>
        </div>
    );
}