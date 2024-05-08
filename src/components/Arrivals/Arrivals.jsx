import React from "react";
import css from "./Arrivals.module.css";
import vector from "../../img/icons/Vector 9.png";
import image_01 from "../../img/images/01.jpg";
import image_02 from "../../img/images/02.png";
import image_03 from "../../img/images/03.png";
import Card from "../Card/Card";

const Arrivals = () => {
  return (
    <section className={css.arrivals}>
      <div className="container">
        <div className={css.arrivalsHeader}>
          <img className={css.arrivalsImg} src={vector} alt="vector" />
          <h2 className={css.arrivalsTitle_2}>NEW ARRIVALS</h2>
        </div>
        <div className={css.arrivalsCards}>
          <Card title={"Hoodies & Sweetshirt"} img={image_01} />
          <Card title={"Coats & Parkas"} img={image_02} />
          <Card title={"Tees & T-Shirt"} img={image_03} />
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
