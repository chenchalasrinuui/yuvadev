"use client"
import React, { useState } from 'react'
import { Tabs } from '../Tabs'
import { Login } from '../Login'
import { Register } from '../Register'
import styles from './Auth.module.css'
export const Auth = () => {
    const tabsData = [
        {
            label: 'Login',
            key: 'login'
        },
        {
            label: 'Register',
            key: 'register'
        }
    ]
    const [activeItem, setActiveItem] = useState('login')
    return (
        <div className={styles.auth}>
            <Tabs items={tabsData} activeItem={activeItem} setActiveItem={setActiveItem} />
            {activeItem === 'login' ? <Login /> : <Register />}
        </div>

    )
}

