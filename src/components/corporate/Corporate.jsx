import React from 'react';
import style from './corporate.module.css'

function Corporate() {
  return (
    <div className={style.main}>
        <div className={style.container}>
            <div className={style.office}>
                <h2>CORPORATE OFFICE</h2>
                <h5>9350 150 E #220, Sandy, UT 84070</h5>
                <p>P: (801) 593-9993</p>
                <p>F: (801) 593-9992</p>
                <h5> GET DIRECTIONS</h5>
            </div>
            <div className={style.center}>
                <h2>DESIGN CENTER</h2>
                <h5>2095 W. 200 N., Kaysville, Utah 84037</h5>
                <p>P: (801) 593-9993</p>
                <p>F: (801) 593-9992</p>
                <h5>GET DIRECTIONS</h5>
            </div>
        </div>
      
    </div>
  );
}

export default Corporate;
