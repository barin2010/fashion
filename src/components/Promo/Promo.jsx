import React from "react";
import css from "./Promo.module.css";
import promoImg from "../../img/images/header-img.jpg";
import vector from "../../img/icons/Vector 9.png";

const Promo = () => {
  return (
    <section className={css.promo}>
      <div className="container">
        <div className={css.promoContent}>
          <div classname={css.promoText}>
            <div className={css.promoTitle}>
              <span className={css.highLight}>
                <span>LET’S</span>
              </span>
              EXPLORE
              <span className={`${css.highLight} ${css.yellow}`}>
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className={css.promoDesc}>
              Live for Influential and Innovative fashion!
            </div>
            <div className={css.promoBtnWrapper}>
              <img className={css.promoImg} src={vector} alt="vector" />
              <a className={css.promoBtn} href="#!">
                Shop Now
              </a>
            </div>
          </div>
          <div classname={css.promoImage}>
            <img src={promoImg} alt="promo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
