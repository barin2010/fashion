import React from "react";
import css from "./Download.module.css";
import voucher from "../../img/images/vouchers.png";
import appStore from "../../img/social/app-store.png";
import googlePlay from "../../img/social/google-play.png";

const Download = () => {
  return (
    <section className={css.download}>
      <div className="container">
        <div className={css.downloadWrapper}>
          <div className={css.textWrapper}>
            <p className={css.title}>DOWNLOAD APP & GET THE VOUCHER!</p>
            <p className={css.description}>
              Get 30% off for first transaction using Rondovision mobile app for
              now.
            </p>
            <div className={css.imageWrapper}>
              <img className={css.downloadImg} src={appStore} alt="App Store" />
              <img
                className={css.downloadImg}
                src={googlePlay}
                alt="Gppgle Play"
              />
            </div>
          </div>
          <div className={css.downloadVoucher}>
            <img className={css.voucher} src={voucher} alt="voucher" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
