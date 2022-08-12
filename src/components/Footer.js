import React from 'react';

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container} >
            <p>
                &copy; All Rights Reserved 2022
            </p>
        </div>
    );
};

export default Footer;