import React from "react";
import style from "./navbar.module.css";
import logo from "../logo-header.svg";
import asset from '../asset.svg'

const Navbar = () => {
  return (
    <div className={style.main}>
      <nav className={style.mainnavbar}>
        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={style.redirect}>
          <h4>WHERE WE BUILD</h4>
          <h4>QUICK MOVE-IN HOMES</h4>
          <h4>FLOOR PLANS</h4>
        </div>
        <div className={style.menu}>
          <h4>MENU</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="50px"
            height="50px"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
          </svg>
        </div>
      </nav>
      <nav className={style.subnav}>
        <h1>CONTACT US</h1>
        <div></div>
      </nav>
      <div className={style.asset}>
        <img src={asset} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
