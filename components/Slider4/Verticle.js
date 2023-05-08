import React from "react";
import Slider3 from "../Slider3/Slider3";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import styles from "./Verticle.module.css";
export default function Verticle() {
  return (
    <>
    <div className="mainwraper">
      <section className="baazi-group-Other-Ventures-section">
        <div className="container">
          <div className="comman-head mb-3 mb-sm-5 buttonmargy">
            <h4 className="heading-3 darkcolor mb-3 aplrightbutton">
              <span>Where else do we play?</span>
            </h4>
            <h2 className="heading-1 mb-3">
              <span className="darkcolor">Other Ventures by </span>
              <span className="bluecolor">Baazi</span>{" "}
            </h2>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".swiper-button-next4",
              prevEl: ".swiper-button-prev4",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <div className="ourfamourgames-1">
              <SwiperSlide>
                <Slider3
                  img="https://baazigames.com/wp-content/uploads/2021/04/bpt.jpg"
                  img2="https://baazigames.com/wp-content/uploads/2021/04/bptm.jpg"
                  title="India’s Finest Live Poker Series"
                  verticle="Baazi Poker Tour "
                  content="Experience Live Poker in all its grandness and go head-to-head with India’s finest Poker players at the Baazi Poker Tour, powered by PokerBaazi.  "
                  url="https://baazipokertour.com/"
                  btn_title="View Now"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slider3
                  img="https://baazigames.com/wp-content/uploads/2021/04/casino-kart-.jpg"
                  img2="https://baazigames.com/wp-content/uploads/2021/04/casino-kartmobile.jpg"
                  title="Accessories for the Aces"
                  verticle="CasinoKart "
                  content="Discover your ace zone with CasinoKart, India’s go-to supplier of all Poker accessories, equipment and more.   "
                  url="https://casinokart.com/"
                  btn_title="View Now"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slider3
                  img="https://baazigames.com/wp-content/uploads/2021/06/poker-baazi-school.jpg"
                  img2="https://baazigames.com/wp-content/uploads/2021/06/poker-baazi-school-mobile.jpg"
                  title="Your Personal Poker Teacher"
                  verticle="PB School"
                  content="Learn Poker, the hottest sport in the country on the interactive PokerBaazi School app, power-packed with features to help you develop your Poker skills. "
                  url="https://pokerbaazischool.com/"
                  btn_title="View Now"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slider3
                  img="https://baazigames.com/wp-content/uploads/2021/06/poker-baazi-live.jpg"
                  img2="https://baazigames.com/wp-content/uploads/2021/06/poker-baazi-live-mobile.jpg"
                  title="India’s Premier Live Poker Destination"
                  verticle="PB Live "
                  content="For a one-of-a-kind experience that combines the luxury and excitement of Poker, visit the PokerBaazi Live room at the Majestic Pride Casino, Goa. "
                  url="https://pokerbaazilive.com/"
                  btn_title="View Now"
                />
              </SwiperSlide>
            </div>
            <div className="swiper-button-prev4">
                <BsArrowLeftShort className={styles.swiper_button_prev4}/>
              </div>
              <div className="swiper-button-next4">
                <BsArrowRightShort className={styles.swiper_button_next4}/>
              </div>
            </Swiper>
        </div>
      </section>
      </div>
    </>
  );
}
