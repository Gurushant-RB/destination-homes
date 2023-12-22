import React from 'react';
import style from './contactform.module.css'

const Contactform = () => {
  return (
    <div className={style.main}>
      <h1>CONTACT FORM</h1>
      <div className={style.container}>
        <div className={style.sec1}>
          <div className={style.form}>
            <label htmlFor="">FIRST NAME</label>
            <input type="text" />
          </div>
          <div className={style.form}>
            <label htmlFor="">EMAIL</label>
            <input type="text" />
          </div>
          <div className={style.form}>
            <label htmlFor="">CITY OF INTEREST</label>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
          <div className={style.form}>
            <label htmlFor="">HOW DID YOU HEAR ABOUT US?</label>
            <select name="" id="">
              <option value="">select one</option>
            </select>
          </div>
          <div className={style.form}>
            <label htmlFor="">COMMENTS/QUESTIONS</label>
            <textarea id={style.comment} cols="50" rows="50"></textarea>
          </div>
          <div className={style.form}>
            <button id={style.btn}>SUBMIT</button>
          </div>
        </div>



        <div className={style.sec2}>
        <div className={style.form}>
            <label htmlFor="">LAST NAME</label>
            <input type="text" />
          </div>
          <div className={style.form}>
            <label htmlFor="">PHONE</label>
            <input type="numeric" />
          </div>
          <div className={style.form}>
            <label htmlFor="">COMMUNITY OF INTEREST</label>
            <select name="" id="">
              <option value=""></option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contactform;
