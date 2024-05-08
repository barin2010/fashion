import React from "react";
import css from "./Card.module.css";

import arrow from "../../img/icons/Arrow.svg";

const Card = ({ title, img }) => {
  return (
    <div className={css.card}>
      <a className={css.cardLink} href="#!">
        {}
      </a>
      <img className={css.card__image} src={img} alt="image_01" />
      <div className={css.cardBody}>
        <div className={css.cardText}>
          <div className={css.cardTitle}>{title}</div>
          <div className={css.cardMuted}>Explore Now!</div>
        </div>
        <div className={css.cardIcon}>
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Card;
