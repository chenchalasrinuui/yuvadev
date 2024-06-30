import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className={`${styles.footer} bg-dark text-center text-white`}>
            &copy;{year} YUVA DEV I TECHNOLOGIES | All Rights Reserved.
        </div>
    )
}

export default Footer
