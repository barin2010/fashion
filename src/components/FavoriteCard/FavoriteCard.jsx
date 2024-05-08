import React from "react";
import css from "./FavoriteCard.module.css";

import arrow from "../../img/icons/Arrow.svg";

const FavoriteCard = ({ title, img }) => {
  return (
    <div className={css.wrapper}>
      <a className={css.link} href="#!">
        {}
      </a>
      <img className={css.favoriteCardImg} src={img} alt="brand_1" />
      <div className={css.wrapperBox}>
        <div className={css.wrapperText}>
          <p className={css.social}>{title}</p>
          <p className={css.explore}>Explore Now!</p>
        </div>
        <div className={css.arrowWrapper}>
          <img className={css.arrow} src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
