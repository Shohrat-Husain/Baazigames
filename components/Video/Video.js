import React from "react";
import styles from "./Video.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Slider from "../Slider/Slider";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { BsArrowRightShort } from "react-icons/bs";
function Video() {
  return (
    <div>
      <div className={styles.vdo_wrapper}>
        <video autoPlay loop muted playsInline className="videogif">
          <source
            src="https://web.pokerbaazicdn.com/bg/bg-video-compressed-new.mp4"
            type="video/mp4"
          />
          <p>Your browser does not support the video element.</p>
        </video>
      </div>
      <div className={styles.swiper_main_wrapper}>
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next",
            }}
            modules={[Navigation]}
            className={`${styles.swiper_parent} mySwiper`}
          >
            <SwiperSlide>
              <Slider
                title="PokerBaazi"
                content="Renowned as India’s Most Trusted, PokerBaazi is a flagship
                online gaming platform of Baazi Games that caters to India’s
                growing poker population."
                Img="https://baazigames.com/wp-content/uploads/2021/04/PB-flat.png"
                Href="https://www.pokerbaazi.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                title="BalleBaazi"
                content="Catering to the country’s craze for Cricket and other sports, and offering them a platform to earn real money with their knowledge of the games, BalleBaazi is India’s one stop for fantasy sports."
                Img="https://baazigames.com/wp-content/uploads/2022/11/BB_monogram.jpg"
                Href="https://www.ballebaazi.com/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slider
                title="CardBaazi"
                content="Card gaming is getting a brand new avatar in the Indian online gaming industry! Enjoy top notch gaming experience with CardBaazi, your one stop shop for all things card gaming."
                Img="https://baazigames.com/wp-content/uploads/2022/11/Color_CB_Logo.png"
                Href="https://www.cardbaazi.com/"
              />
            </SwiperSlide>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next">
              <span className={styles.span_btn_conatiner}>
                <BsArrowRightShort className={styles.span_btn} />
              </span>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Video;
