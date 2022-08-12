import React from 'react';
import styles from "./Navbar.module.css"
import userLogo from "../images/userphoto.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className={styles.Header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li><Link to="/" >صفحه اصلی</Link></li>
                        <li><Link to="/products" >محصولات</Link></li>
                        <li><Link to="/aboutus" >درباره ما</Link></li>
                    </ul>
                </div>
                <div className={styles.logo} >
                    <img className={styles.logo} src={userLogo} alt="logo" />
                </div>
            </div>
        </>
    );
};

export default Navbar;