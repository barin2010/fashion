import React from "react";
import css from "./Favorite.module.css";
import vector from "../../img/icons/Vector 9.png";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
import brand_04 from "../../img/images/04.jpg";
import brand_05 from "../../img/images/05.png";

const Favorite = () => {
  return (
    <section className={css.favorite}>
      <div className="container">
        <div className={css.favoriteWrapper}>
          <div className={css.favoriteTitle}>
            <p className={css.favoriteText}>Young’s Favourite</p>
            <img className={css.decor} src={vector} alt="vector" />
          </div>
          <div className={css.wrapperImg}>
            <FavoriteCard title={"Trending on instagram"} img={brand_04} />
            <FavoriteCard title={"All Under $40"} img={brand_05} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorite;
