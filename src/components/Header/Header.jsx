import React from "react";
import css from "./Header.module.css";
import logoImg from "../../img/icons/icon.svg";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.headerRow}>
          <div className={css.headerLOgo}>
            <img src={logoImg} alt="logo" />
            <span>Fashion</span>
          </div>
          <nav className={css.headerNav}>
            <ul className={css.headerList}>
              <li>
                <a href="#!">CATALOGUE</a>
              </li>
              <li>
                <a href="#!">FASHION</a>
              </li>
              <li>
                <a href="#!">FAVOURITE</a>
              </li>
              <li>
                <a href="#!">LIFESTYLE</a>
              </li>
              <li>
                <a className={css.headerNavBtn} href="#!">SIGN UP</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
