import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/homepage/BG-Black-and-Black.png";
import { SiMinutemailer } from "react-icons/si";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <div>
      <nav className={styles.mbl_res_nav}>
        <div className={styles.navbar}>
          <div className={styles.nav_container}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id=""
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <div className={styles.hamburger_lines}>
              <span className={`${styles["line"]} ${styles["line1"]}`}></span>
              <span className={`${styles["line"]} ${styles["line2"]}`}></span>
              <span className={`${styles["line"]} ${styles["line3"]}`}></span>
            </div>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  alt="Logo"
                  width={150}
                  height={45}
                  src={Logo}
                  priority={true}
                  className={`${styles.header_logo_web} img-fluid position-fixed`}
                />
              </Link>
            </div>
            <div className={styles.menu_items}>
              <div className={`${styles.mb_nav} d-flex justify-content-evenly`}>
                <div className={`${styles.mbl_div_margin_bottom} text-start`}>
                  <h3 className={`${styles.mb_heading_font} text-white ms-2`}>
                    Explore Baazi Games
                  </h3>
                  <li>
                    <Link href="/" onClick={handleLinkClick}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" onClick={handleLinkClick}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/csr" onClick={handleLinkClick}>
                      CSR
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" onClick={handleLinkClick}>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/incubation" onClick={handleLinkClick}>
                      Incubation
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" onClick={handleLinkClick}>
                      News
                    </Link>
                  </li>
                </div>
                <div className={`${styles.mbl_div_margin_bottom} text-start`}>
                  <h3 className={`${styles.mb_heading_font} text-white ms-2`}>
                    Support
                  </h3>
                  <li>
                    <Link href="/contact-us" onClick={handleLinkClick}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:info@baazigames" onClick={handleLinkClick}>
                      <span>
                        <SiMinutemailer /> info@baazigames
                      </span>
                    </a>
                  </li>
                </div>
                <div className={`${styles.mbl_div_margin_bottom} text-start`}>
                  <h3 className={`${styles.mb_heading_font} text-white ms-2`}>
                    Legal
                  </h3>
                  <li>
                    <Link href="/terms-conditions" onClick={handleLinkClick}>
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" onClick={handleLinkClick}>
                      Privacy Policy
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={styles.mbl_sticky_div} />
      <div className={`${styles.sidesocialfixed} ${styles.advertisement}`}>
        <a href="https://www.linkedin.com/company/baazi-games/" target="_blank">
          <FaLinkedinIn className={styles.icon_color} />
        </a>
        <a href="https://twitter.com/BaaziGames" target="_blank">
          <FaTwitter className={styles.icon_color} />
        </a>
        <a href="https://www.facebook.com/BaaziGames/" target="_blank">
          <FaFacebookF className={styles.icon_color} />
        </a>
        <a href="https://www.instagram.com/baazigames/" target="_blank">
          <FaInstagram className={styles.icon_color} />
        </a>
      </div>
    </div>
  );
}

export default Header;
