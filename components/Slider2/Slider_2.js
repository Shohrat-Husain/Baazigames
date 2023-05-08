import React from "react";
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
import styles from "./Slider2.module.css";
export default function Slider_2() {
  return (
    <>
      <div className="mainwraper">
        <div className="container">
        <section className="Organization-mainsection">
          <div className="Organization-inner">
            <div>
              <div className="comman-head">
                <h4 className="heading-3 darkcolor mb-3">
                  <span>Who are we?</span>
                </h4>
                <h2 className="heading-1 mb-3">
                  <span className="darkcolor">The </span>
                  <span className="bluecolor">
                    Baazi <br />
                    Group
                  </span>
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
                  nextEl: "#swiper-button-next",
                  prevEl: "#swiper-button-prev",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <div className="slider slider-for">
                  <SwiperSlide>
                    <div className="ogoslider">
                      <picture>
                      <source srcSet="https://baazigames.com/wp-content/uploads/2021/03/the-baazi-group-organation-banner-scaled.jpg" type="image/jpg" />
                      <img
                        src="https://baazigames.com/wp-content/uploads/2021/03/the-baazi-group-organation-banner-scaled.jpg"
                        className="img-fluid w-100 h-auto d-none d-md-block"
                        alt="Baazi Games"
                      />
                      </picture>
                      <picture>
                      <source srcSet="https://baazigames.com/wp-content/uploads/2021/04/Team_Mobile.jpg" type="image/jpg" />
                      <img
                        src="https://baazigames.com/wp-content/uploads/2021/04/Team_Mobile.jpg"
                        className="img-fluid w-100 h-auto d-block d-md-none"
                        alt="Baazi Games"
                      />
                      </picture>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="ogoslider">
                      <picture>
                      <source srcSet="https://baazigames.com/wp-content/uploads/2021/03/the-baazi-group-organation-banner-1-scaled.jpg" type="image/jpg" />
                      <img
                        src="https://baazigames.com/wp-content/uploads/2021/03/the-baazi-group-organation-banner-1-scaled.jpg"
                        className="img-fluid w-100 h-auto"
                        alt="Baazi Games"
                      />
                      </picture>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
              <div className="Organization-overlapcontent">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={{
                    nextEl: "#swiper-button-next",
                    prevEl: "#swiper-button-prev",
                  }}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <div
                    className="slider slider-nav opFeature slidernavcontent"
                    data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                  >
                    <SwiperSlide>
                      <div className="opcItem">
                        <h2>Where we play </h2>
                        <p className="d-none d-md-block">
                          The Baazi Games office stands tall in a sprawling
                          farmhouse property in the heart of New Delhi. The open
                          space, lush greens and great ergonomics make for just
                          the right ambience to foster your creativity. An open
                          floor culture at Baazi Games definitely makes it a
                          playground for any Game Lover to work at. The standing
                          cafeteria is an added perk that&apos;s ticking the right
                          boxes for this work environment.
                        </p>
                        <p className="d-block d-sm-none">
                          The Baazi Games office stands tall in a sprawling
                          farmhouse property in the heart of New Delhi. The open
                          space, lush greens and great ergonomics make for just
                          the right ambience to foster your creativity.
                        </p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="opcItem">
                        <h2>Jack is never dull </h2>
                        <p className="d-none d-md-block">
                          Working with the pioneers in the real money games
                          sector comes with the atmosphere of always pushing for
                          innovation. Automation, design thinking and innovation
                          remain at the heart of the work environment at Baazi
                          Games. Flexible working hours, cross-collaboration and
                          a harmonious work environment are the fluids that keep
                          this beast churning the industry. Just the right
                          balance for work and play we&apos;d say.
                        </p>
                        <p className="d-block d-sm-none">
                          Working with the pioneers in the real money games
                          sector comes with the atmosphere of always pushing for
                          innovation. Automation, design thinking and innovation
                          remain at the heart of the work environment at Baazi
                          Games.
                        </p>
                      </div>
                    </SwiperSlide>
                  </div>
                  <div id="swiper-button-prev">
                    <BsArrowLeftShort className={styles.swiper_button_prev}/>
                  </div>
                  <div id="swiper-button-next">
                    <BsArrowRightShort className={styles.swiper_button_next}/>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
}
