import React from 'react';

import styles from "./Banner.module.css"
import banner from "../images/Banner.jpg"
const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="banner" />
            <div className={styles.textContainer}>
                <h1>اپل استور
                </h1>
                <p>
                    <span >راحتی </span>در خرید را <span>تجربه</span> کنید  
                </p>
            </div>
        </div>
    );
};

export default Banner;