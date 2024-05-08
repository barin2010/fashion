import React from "react";
import css from "./Payday.module.css";
import payday from "../../img/images/promo-img.png";

const Payday = () => {
  return (
    <section className={css.payDay}>
      <div className="container">
        <div className={css.content}>
          <div className={css.payDayImage}>
            <img src={payday} alt="payday" />
          </div>
          <div className={css.payDayText}>
            <p className={css.payDayTitle}>
              <span className={css.payDaySpan}>
                <span>PAYDAY</span>
              </span>
              SALE NOW
            </p>
            <p className={css.payDayText}>
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className={css.date}>1 June - 10 June 2021</p>
            <p className={css.terms}>*Terms & Conditions apply</p>
            <button className={css.btn}>SHOP NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payday;
