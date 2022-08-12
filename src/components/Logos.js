import React from 'react';

import styles from "./Logos.module.css"
import iphone11 from "../images/iphone 11.jpg"
import ipad from "../images/ipad.jpg"
import macbook from "../images/macbook.jpg"

const Logos = () => {
    return (
        <div className={styles.container} >
            <h3>محصولات ما</h3>
            <div>
                <img src={iphone11} alt="logo" />
                <img src={ipad} alt="logo" />
                <img src={macbook}  alt="logo" />
            </div>
            <div>
                <p>IPhone</p>
                <p>IPad</p>
                <p>MacBook</p>
            </div>
        </div>
    );
};

export default Logos;