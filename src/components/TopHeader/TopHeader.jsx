import React from 'react'
import styles from './TopHeader.module.css'

const TopHeader = () => {
    return (
        <div className={`py-1 bg-dark text-end ${styles.topHeader}`}>
            <span className='me-3'>
                <i className="bi bi-phone me-2"></i>
                +91 9383838334
            </span>
            <span>
                <i className="bi bi-mailbox me-2"></i>
                support@yuvadevitech.com
            </span>
        </div>
    )
}

export default TopHeader
