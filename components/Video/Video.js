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
import { Autoplay, Pagination } from "swiper";
function Video() {
  return (
    <div>
      {/* Desktop View */}
      <div className={styles.vdo_wrapper_container}>
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
                  logoHref="https://www.pokerbaazi.com/"
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
                  logoHref="https://www.ballebaazi.com/"
                  content="Catering to the country’s craze for Cricket and other sports, and offering them a platform to earn real money with their knowledge of the games, BalleBaazi is India’s one stop for fantasy sports."
                  Img="https://baazigames.com/wp-content/uploads/2022/11/BB_monogram.jpg"
                  Href="https://www.ballebaazi.com/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slider
                  title="CardBaazi"
                  logoHref="https://www.cardbaazi.com/"
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
      {/* Mobile View */}
      <div style={{width:'100% !important'}}>
        <div className="d-block d-sm-none mobilewbannerwarperr">
          <div className="mobilebanneroverlayy"></div>
          <div className="comman-head">
            <h2 className="heading-2 mb-0 text-center"><span className="whitecolor">Let the</span></h2>
            <h2 className="heading-mcusgb mb-0 text-center"><span className="lightbluecolor">Games </span><span className="whitecolor"> Begin!</span></h2>
            {/* <p className="whitecolor">Online gaming is what we do best at Baazi Games. Conceptualized in 2014, Baazi Games set out to be India’s very own technology powerhouse and a trailblazer in the Online Gaming space. Today, we stand tall with a plethora of responsive real money online games. From Poker to Rummy to Fantasy Sports, Baazi Games is a one-stop shop for real money games in India on its way to create a homegrown entertainment ecosystem. Time to hit play.</p> */}
          </div>
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
    type: 'bullets',
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,Pagination]}
              className={'mySwiper'}
            >
          <div className="mobileslierwraper">
            <div className="mobileallbrandsslide">
            <SwiperSlide>
              <div className="item">
                <div className="mobileslider">
                  <div className="mobileslider-thumb text-center"><a href="https://www.pokerbaazi.com/" target="_blank" rel="noopener">
                    <picture>
                    <source srcSet="https://baazigames.com/wp-content/uploads/2022/11/PB.png" type="image/png" />
                    <img src="https://baazigames.com/wp-content/uploads/2022/11/PB.png" className="img-fluid" width="100" alt="PokerBaazi" />
                    </picture>
                    </a></div>
                  <div className="mobileslider-content text-center">
                    <h3 className="text-white">PokerBaazi</h3>
                    <div className="mbslicobten">
                      <p className="text-white">India’s Biggest Poker Platform</p>
                    </div>
                    <a href="https://www.pokerbaazi.com/" target="_blank" className="commanbutton whitebg" rel="noopener">Play Now</a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="item">
                <div className="mobileslider">
                  <div className="mobileslider-thumb text-center"><a href="https://www.ballebaazi.com/" target="_blank" rel="noopener">
                    <picture>
                    <source srcSet="https://baazigames.com/wp-content/uploads/2022/11/bb-logo.png" type="image/png" />
                    <img src="https://baazigames.com/wp-content/uploads/2022/11/bb-logo.png" className="img-fluid " width="100" alt="BalleBaazi" />
                    </picture>
                    </a></div>
                  <div className="mobileslider-content text-center">
                    <h3 className="text-white">BalleBaazi</h3>
                    <div className="mbslicobten">
                      <p className="text-white">Best Sports Gaming Experience</p>
                    </div>
                    <a href="https://www.ballebaazi.com/" target="_blank" className="commanbutton whitebg" rel="noopener">Play Now</a>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="item">
                <div className="mobileslider">
                  <div className="mobileslider-thumb text-center"><a href="https://cardbaazi.com/" target="_blank" rel="noopener">
                    <picture>
                    <source srcSet="https://baazigames.com/wp-content/uploads/2022/11/White_CB_Logo.png" type="image/png" />
                    <img className="cbcusmobimg img-fluid " src="https://baazigames.com/wp-content/uploads/2022/11/White_CB_Logo.png" width="100" alt="RummyBaazi" />
                    </picture></a></div>
                  <div className="mobileslider-content text-center">
                    <h3 className="text-white">CardBaazi</h3>
                    <div className="mbslicobten">
                      <p className="text-white">India's Favourite Card Gaming Destination</p>
                    </div>
                    <a href="https://cardbaazi.com/" target="_blank" className="commanbutton whitebg" rel="noopener">Play Now</a>
                  </div>
                </div>
              </div>
                </SwiperSlide>
            </div>
          </div>
          <div className="swiper-pagination"></div>
          </Swiper>
        </div>
        </div> 
      {/* <div className="d-block d-md-none">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.mobile_slider}>
            <h2
              className="mt-6 pt-4 text-center text-white"
              style={{ marginTop: "90px", fontSize: "20px" }}
            >
              Let the
            </h2>
            <h2 className="text-center">
              <span
                style={{
                  color: "#74aefd",
                  fontSize: "40px",
                  fontWeight: "900",
                  lineHeight: "40px",
                }}
              >
                Games
              </span>
              <span
                className="text-white"
                style={{
                  fontSize: "40px",
                  fontWeight: "900",
                  lineHeight: "40px",
                }}
              >
                Begin!
              </span>
            </h2>
          </SwiperSlide>
          <SwiperSlide className={styles.mobile_slider}>
            <h2
              className="mt-6 pt-4 text-center text-white"
              style={{ marginTop: "90px", fontSize: "20px" }}
            >
              Let the
            </h2>
            <h2 className="text-center">
              <span
                style={{
                  color: "#74aefd",
                  fontSize: "40px",
                  fontWeight: "900",
                  lineHeight: "40px",
                }}
              >
                Games
              </span>
              <span
                className="text-white"
                style={{
                  fontSize: "40px",
                  fontWeight: "900",
                  lineHeight: "40px",
                }}
              >
                Begin!
              </span>
            </h2>
          </SwiperSlide>
          <SwiperSlide className={styles.mobile_slider}>
            <h2
              className="mt-6 pt-4 text-center text-white"
              style={{ marginTop: "90px", fontSize: "20px" }}
            >
              Let the
            </h2>
            <h2 className="text-center">
              <span
                style={{
                  color: "#74aefd",
                  fontSize: "40px",
                  fontWeight: "900",
                  lineHeight: "40px",
                }}
              >
                Games{" "}
              </span>
              <span
                className="text-white"
                style={{
                  fontSize: "40px",
                  fontWeight: "900",
                  lineHeight: "40px",
                }}
              >
                {" "}
                Begin!
              </span>
            </h2>
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
}

export default Video;
