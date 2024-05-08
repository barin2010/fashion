import React from "react";
import css from "./Brands.module.css";
import hm from "../../img/brands/HM.svg";
import obey from "../../img/brands/Obey.svg";
import shopify from "../../img/brands/Shopify.svg";
import lacoste from "../../img/brands/Lacoste.svg";
import levis from "../../img/brands/Levis.svg";
import amazon from "../../img/brands/Amazon.svg";

const Brands = () => {
  return (
    <section className={css.brands}>
      <div className="container">
        <ul className={css.brandsList}>
          <li className={css.brandsItem}>
            <a href="#!">
              <img src={hm} alt="HM" />
            </a>
          </li>
          <li className={css.brandsItem}>
            <a href="#!">
              <img src={obey} alt="Obey" />
            </a>
          </li>
          <li className={css.brandsItem}>
            <a href="#!">
              <img src={shopify} alt="Shopify" />
            </a>
          </li>
          <li className={css.brandsItem}>
            <a href="#!">
              <img src={lacoste} alt="Lacoste" />
            </a>
          </li>
          <li className={css.brandsItem}>
            <a href="#!">
              <img src={levis} alt="Levis" />
            </a>
          </li>
          <li className={css.brandsItem}>
            <a href="#!">
              <img src={amazon} alt="Amazon" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
