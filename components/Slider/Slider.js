import React from "react";
import styles from "./Slider.module.css";
// import Image from "next/image";
// import MedalsImg from "../../assets/homepage/medals/medalFront.png";
function Slider(props) {
  return (
    <div>
      <div className={styles.slider_container}>
        <div className={styles.slider_logo}>
          <a
            href={props.logoHref}
            target="_blank"
            rel="noopener"
            tabIndex="0"
          >
            <img
              src={props.Img}
              className="img-fluid"
              width="130"
              height="auto"
              alt="PokerBaazi"
            />
          </a>
        </div>
        <div className={styles.slider_content}>
          {" "}
          <section className={styles.rummy_baazi_add_section}>
            <div className={styles.rummybaazi_inner}>
              <h3 className={`${styles.swiper_h} text-white`}>{props.title}</h3>
              <p className={`${styles.swiper_p} text-white`}>
                {props.content}
                <br /> <br />
              </p>
              <a
                href={props.Href}    
                target="_blank"
                className={`${styles["commanbutton"]} ${styles["whitebg"]}`}
                rel="noopener"
                tabIndex="0"
              >
                Play Now
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* <div className={styles.item} style={{ width: "100%", display: "inline-block" }}>
        
      </div> */}
    </div>
  );
}

export default Slider;
