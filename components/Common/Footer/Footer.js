import React from "react";
import styles from "./Footer.module.css";
import { SiMinutemailer } from "react-icons/si";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={`${styles.footersocial} `}>
          <a
            href="https://www.linkedin.com/company/baazi-games/"
            target="_blank"
            className={styles.fImgLink}
          >
            <FaLinkedinIn className="text-white" />
          </a>
          <a
            href="https://twitter.com/BaaziGames"
            target="_blank"
            className={styles.fImgLink}
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href="https://www.facebook.com/BaaziGames/"
            target="_blank"
            className={styles.fImgLink}
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/baazigames/"
            target="_blank"
            className={styles.fImgLink}
          >
            <FaInstagram className="text-white" />
          </a>
        </div>
        <div className={`${styles.footerinner} d-none d-md-block`}>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3 mt-3">
                <div className={styles.commannlinkhf}>
                  <a
                    href="https://baazigames.com"
                    className="mb-2"
                    style={{ marginLeft: "-10px" }}
                  >
                    <img
                      src="https://baazigames.com/wp-content/themes/twentytwentyone/images/BG-Black-and-Black.png"
                      className="img-fluid"
                      width="200"
                      alt="bmg"
                    />
                  </a>
                  <div className="pt-1">
                    <h6>Baazi Games Pvt Ltd.</h6>
                    <p>
                      Khullar Farms Road, 7A, Mandi Rd, <br />
                      New Delhi, Delhi - 110070 (India)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-4 mb-3 col-sm-5">
                    <div className={styles.commannlinkhf}>
                      <h4>Explore Baazi Games </h4>
                      <ul>
                        <li>
                          <a href="https://baazigames.com/">Home</a>
                        </li>
                        <li>
                          <a href="https://baazigames.com/about-us/">
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="https://baazigames.com/csr/">CSR</a>
                        </li>
                        <li>
                          <a href="https://baazigames.com/careers/">Careers</a>
                        </li>
                        <li>
                          <a href="https://baazigames.com/incubation/">
                            Incubation
                          </a>
                        </li>
                        <li>
                          <a href="https://baazigames.com/news/">News</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3 mb-3 col-sm-4">
                    <div className={styles.commannlinkhf}>
                      <h4> Support</h4>
                      <ul>
                        <li>
                          <a href="https://baazigames.com/contact-us/">
                            Contact us
                          </a>
                        </li>

                        <li>
                          <a href="mailto:info@baazigames">
                            <span>
                              <SiMinutemailer /> info@baazigames
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-3  mb-3  col-sm-3">
                    <div className={styles.commannlinkhf}>
                      <h4>Legal</h4>
                      <ul>
                        <li>
                          <a href="https://baazigames.com/terms-conditions/">
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="https://baazigames.com/privacy-policy/">
                            Privacy Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-2  mb-3  col-sm-3">
                    <div className={styles.commannlinkhf}>
                      <ul>
                        <li>
                          <img
                            className={`${styles.gptwfoologo} img-fluid`}
                            src="https://baazigames.com/wp-content/uploads/2022/12/gptw_logo_26dec.png"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.footerinner} ${styles.mvinnerfooter} d-block d-md-none`}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mb-3 mt-3">
                <div className="row">
                  <div className={`${styles.commannlinkhf} col-9`}>
                    <div className="pt-1">
                      <h6>Baazi Games Pvt Ltd.</h6>
                      <p>
                        Khullar Farms Road, 7A, Mandi Rd, <br />
                        New Delhi, Delhi - 110070 (India)
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.gptw} col-3`}>
                    <div>
                      <img
                        className={`${styles.gptwfoologomob} img-fluid`}
                        src="https://baazigames.com/wp-content/uploads/2022/12/gptw_logo_26dec.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12 mb-0 col-sm-12">
                    <div className={styles.commannlinkhf}>
                      <div className="row">
                        <div className=" col-6">
                          <ul>
                            <li>
                              <a href="https://baazigames.com/">Home</a>
                            </li>
                            <li>
                              <a href="https://baazigames.com/about-us/">
                                About Us
                              </a>
                            </li>
                            <li>
                              <a href="https://baazigames.com/csr/">CSR</a>
                            </li>
                            <li>
                              <a href="https://baazigames.com/careers/">
                                Careers
                              </a>
                            </li>
                            <li>
                              <a href="https://baazigames.com/incubation/">
                                Incubation
                              </a>
                            </li>
                            <li>
                              <a href="https://baazigames.com/news/">News</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-6">
                          <ul className={styles.emailmobile}>
                            <li>
                              <a href="https://baazigames.com/terms-conditions/">
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a href="https://baazigames.com/privacy-policy/">
                                Privacy Policy
                              </a>
                            </li>
                            <li>
                              <a href="https://baazigames.com/contact-us/">
                                Contact us
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className={`${styles.socialfoo} row`}>
              <div className={styles.mvfooter_socialicons}>
                <a
                  href="https://www.linkedin.com/company/baazi-games/"
                  target="_blank"
                  className={styles.fImgLink}
                >
                  <FaLinkedinIn className="text-white mx-1" />
                </a>
                <a
                  href="https://twitter.com/BaaziGames"
                  target="_blank"
                  className={styles.fImgLink}
                >
                  <FaTwitter className="text-white mx-1" />
                </a>
                <a
                  href="https://www.facebook.com/BaaziGames/"
                  target="_blank"
                  className={styles.fImgLink}
                >
                  <FaFacebookF className="text-white mx-1" />
                </a>
                <a
                  href="https://www.instagram.com/baazigames/"
                  target="_blank"
                  className={styles.fImgLink}
                >
                  <FaInstagram className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerbottom}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-2 text-center ">
                <p className="pt-2">Copyright © 2023 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
