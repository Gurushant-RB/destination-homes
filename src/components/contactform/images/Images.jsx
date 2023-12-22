import React from "react";
import style from "./images.module.css";
import i1 from './i1.webp'
import i2 from './i2.webp'
import i3 from './i3.webp'

const Images = () => {
  return (
    <div className={style.main}>
      <div className={style.container}>
        <div>
            <img src={i1} alt="" />
        </div>
        <div>
        <img src={i2} alt="" />

        </div>
        <div>
        <img src={i3} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Images;
