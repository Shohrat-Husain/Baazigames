import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import Head from "next/head";
function index() {
  return (
    <div>
      <Head>
      <title>Contact Us | Baazi Games</title>
        <meta
          name="description"
          content="Contact us via an email to our 24 Hour Customer Care Support. Email us on info@Baazigames.com."
        />
        <link
          rel="icon"
          href="https://baazigames.com/wp-content/uploads/2022/11/cropped-BG-Blue-logo-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://baazigames.com/wp-content/uploads/2022/11/cropped-BG-Blue-logo-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://baazigames.com/wp-content/uploads/2022/11/cropped-BG-Blue-logo-180x180.png"
        />
      </Head>
      <div className="aboutusleftlinks">
        <Link href="/contact-us" className="active">
          Contact Us
        </Link>
      </div>
      <div className="mainwraper">
        <div className="container">
          <div className="innerwraper">
            <div
              className="aboutus-content clearfix aos-init aos-animate"
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sin"
            >
              <div className="comman-head mb-5">
                <h4 className="heading-3 darkcolor mb-3">
                  <span>Dial in, we are all ears</span>
                </h4>
                <h2 className="heading-1 ">
                  <span className="darkcolor">24 Hour </span>
                  <span className="bluecolor">Customer Support </span>
                </h2>
                <div className="spltext">
                  <p>
                    Experiencing a glitch, twitch or need a new pitch? Don’t
                    hesitate to reach out to our 24 Hour Customer Care Support.
                    Email us on info@Baazigames.com.
                  </p>
                </div>
              </div>
            </div>
            <div className="contact-us-section clearfix">
              <div className="overlapp"></div>

              <div
                className="bottommail aos-init aos-animate"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sin"
              >
                <h4>Email Us on </h4>
                <a className="con-custom" href="mailto:info@baazigames.com">
                  info@baazigames.com
                </a>
                <a
                  className="commanbutton whitebg"
                  href="mailto:info@baazigames.com"
                >
                  <span className="ml-2 mr-2">
                    <b>Click Here</b>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
