import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import { Menu } from '../Menu'
const Header = () => {
    return (
        <div>
            <div className={`py-2 ${styles.header}`}>
                <Image className='img-fluid' src="/logo.png" width={114} height={148} alt="" />
                <Menu />
            </div>
        </div>
    )
}

export default Header
