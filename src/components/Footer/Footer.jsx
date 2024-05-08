import React from "react";
import css from "./Footer.module.css";
import fb from "../../img/social/fb.svg";
import instagramm from "../../img/social/instagram.svg";
import twitter from "../../img/social/twitter.svg";
import linkedin from "../../img/social/in.svg";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className="container">
        <div className={css.wrapper}>
          <div className={css.social}>
            <p className={css.socialTitle}>FASHION</p>
            <p className={css.socialDescription}>
              Complete your style with awesome clothes from us.
            </p>
            <ul className={css.socialList}>
              <li className={css.socialItem}>
                <a href="#!">
                  <img className={css.socialImg} src={fb} alt="facebook" />
                </a>
              </li>
              <li className={css.socialItem}>
                <a href="#!">
                  <img
                    className={css.socialImg}
                    src={instagramm}
                    alt="instagramm"
                  />
                </a>
              </li>
              <li className={css.socialItem}>
                <a href="#!">
                  <img className={css.socialImg} src={twitter} alt="twitter" />
                </a>
              </li>
              <li className={css.socialItem}>
                <a href="#!">
                  <img className={css.socialImg} src={linkedin} alt="in" />
                </a>
              </li>
            </ul>
          </div>
          <div className={css.socialAbout}>
            <p className={css.socialHeader}>Company</p>
            <ul className={css.socialHeaderList}>
              <li className={css.socialHeaderItem}>
                <a href="#!">About</a>
              </li>
              <li className={css.socialHeaderItem}>
                <a href="#!">Contact us</a>
              </li>
              <li className={css.socialHeaderItem}>
                <a href="#!">Support</a>
              </li>
              <li className={css.socialHeaderItem}>
                <a href="#!">Careers</a>
              </li>
            </ul>
          </div>
          <div className={css.socialAbout}>
            <p className={css.socialHeader}>Quick Link</p>
            <ul className={css.socialHeaderList}>
              <li className={css.socialHeaderItem}>
                <a href="#!">Share Location</a>
              </li>
              <li className={css.socialHeaderItem}>
                <a href="#!">Orders Tracking</a>
              </li>
              <li className={css.socialHeaderItem}>
                <a href="#!">Size Guide</a>
              </li>
              <li className={css.socialHeaderItem}>
                <a href="#!">FAQs</a>
              </li>
            </ul>
          </div>
          <div className={css.socialAbout}>
            <p className={css.socialHeader}>Legal</p>
            <ul className={css.socialHeaderList}>
              <li className={css.socialHeaderItem}>
                <a href="#!">Terms & conditions</a>
              </li>
              <li className={css.socialHeaderItem}>
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
