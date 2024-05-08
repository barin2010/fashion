import React from "react";
import css from "./Shopping.module.css";

const Shopping = () => {
  return (
    <section className={css.shopping}>
      <div className="container">
        <div className={css.wrapper}>
          <h2 className={css.title}>
            JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
          </h2>
          <p className={css.text}>
            Type your email down below and be young wild generation
          </p>
          <form className={css.form}>
            <input placeholder="Add your email here"></input>
            <button className={css.btn}>SEND</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Shopping;
