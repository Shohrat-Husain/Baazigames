import React from "react";
import Slider3 from "./Slider3";
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
import styles from "./Letsplay.module.css";
export default function Letsplay() {
  return (
    <>
      <div className="mainwraper">
        <section className="Baazi-Group-Gaming-Ventures-section letsplayyy">
          <div className="container">
            <div className="comman-head mb-3 mb-sm-5 buttonmargy">
              <h4 className="heading-3 darkcolor mb-3 aplrightbutton">
                <span>Let’s play</span>
              </h4>
              <h2 className="heading-1 mb-3 ">
                <span className="darkcolor">Real Money Games by </span>
                <span className="bluecolor">Baazi</span>
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
                nextEl: ".swiper-button-next3",
                prevEl: ".swiper-button-prev3",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <div className="ourfamourgames-1">
                <SwiperSlide>
                  <Slider3
                    img="https://baazigames.com/wp-content/uploads/2021/05/PB.jpg"
                    img2="https://baazigames.com/wp-content/uploads/2021/05/PBM.png"
                    title="Most Trusted Poker Website"
                    verticle="PokerBaazi"
                    content="Feeling the pulse of the Indian market with a homegrown platform and avant-garde product offerings, PokerBaazi soon became India’s most trusted online poker platform."
                    url="https://www.pokerbaazi.com/"
                    btn_title="Play Now"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Slider3
                    img="https://baazigames.com/wp-content/uploads/2021/04/BB.jpg"
                    img2="https://baazigames.com/wp-content/uploads/2021/04/BBM.png"
                    title="Leading Fantasy Sports Platform"
                    verticle="BalleBaazi"
                    content="With the sole objective of offering the best fantasy sports experience, BalleBaazi sets new benchmarks for innovation in the category. "
                    url="https://www.ballebaazi.com/"
                    btn_title="Play Now"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Slider3
                    img="https://baazigames.com/wp-content/uploads/2021/11/RB.jpg"
                    img2="https://baazigames.com/wp-content/uploads/2021/11/RBM.png"
                    title="India's Favourite Card Gaming Destination"
                    verticle="CardBaazi"
                    content="Play multiple games and enjoy rewarding promotions on India's favourite card gaming destination, CardBaazi!"
                    url="https://cardbaazi.com/"
                    btn_title="Play Now"
                  />
                </SwiperSlide>
              </div>
              <div className="swiper-button-prev3">
                <BsArrowLeftShort className={styles.swiper_button_prev3}/>
              </div>
              <div className="swiper-button-next3">
                <BsArrowRightShort className={styles.swiper_button_next3}/>
              </div>
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
