import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slide3d.module.scss";
import "./swiperSlider.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

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

import { Card } from "./Card";

function Slide3d({ list, type }) {
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
          pagination={{ el: ".swiper-pagination", clickable: true, dynamicBullets: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {type === "person"
            ? list.map((info, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                   <Card
                    img={info.img}
                    type={info.type}
                    name={info.name}
                    description={info.description ? info.description : ""}
                  />

                  {/* Card de Abril */}
                  {/* <Card
                    image={info.img}
                    title={info.name}
                    subtitle={info.description ? info.description : ""}
                  /> */}
                </SwiperSlide>
              ))
            : list.map((info, index) => (
                <SwiperSlide className="swiper-slide" key={index}>
                  {/* En caso de querer solo la imagen */}
                  <SwiperSlide>
                  <Card
                    img={info.img ? info.img : info}
                  />
                  </SwiperSlide>
                </SwiperSlide>
              ))}

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <FontAwesomeIcon icon={faArrowLeft} className="arrow-back-outline" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <FontAwesomeIcon icon={faArrowRight} className="arrow-forward-outline" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
}

export default Slide3d;

Slide3d.propTypes = {
  type: PropTypes.string,
  list: PropTypes.array,
};
