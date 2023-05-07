import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
function index() {
  return (
    <div>
      
      <div class="aboutusleftlinks">
   <Link href="/contact-us" class="active">Contact Us</Link>
</div>
      <div class="mainwraper">
        <div class="container">
          <div class="innerwraper">
            <div
              class="aboutus-content clearfix aos-init aos-animate"
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sin"
            >
              <div class="comman-head mb-5">
                <h4 class="heading-3 darkcolor mb-3">
                  <span>Dial in, we are all ears</span>
                </h4>
                <h2 class="heading-1 ">
                  <span class="darkcolor">24 Hour </span>
                  <span class="bluecolor">Customer Support </span>
                </h2>
                <div class="spltext">
                  <p>
                    Experiencing a glitch, twitch or need a new pitch? Don’t
                    hesitate to reach out to our 24 Hour Customer Care Support.
                    Email us on info@Baazigames.com.
                  </p>
                </div>
              </div>
            </div>
            <div class="contact-us-section clearfix">
              <div class="overlapp"></div>

              <div
                class="bottommail aos-init aos-animate"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sin"
              >
                <h4>Email Us on </h4>
                <a class="con-custom" href="mailto:info@baazigames.com">
                  info@baazigames.com
                </a>
                <a
                  class="commanbutton whitebg"
                  href="mailto:info@baazigames.com"
                >
                  <span class="ml-2 mr-2">
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
