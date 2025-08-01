import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slide3dIframe.module.scss";
import "./swiperSlider.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

/* Importación de la Card de Abril */
/* import { Card } from "../Card"; */

import { CardIframe } from "./CardIframe";

function Slide3dIframe({ list }) {
  return (
    <>
      <div className={styles.container}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          fade={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {list.map((info, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <CardIframe
                img={info.img}
                type={info.type}
                name={info.name}
                description={info.description ? info.description : ""}
              />
            </SwiperSlide>
          ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="arrow-back-outline"
              />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="arrow-forward-outline"
              />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Slide3dIframe;

Slide3dIframe.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array,
};
