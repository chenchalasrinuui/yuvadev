"use client"
import React, { useState } from 'react'
import styles from './LeftSideBar.module.css';

export const LeftSideBar = ({ data }) => {
    const [active, setActive] = useState(data[0]?.name)
    const handleClick = (name) => {
        setActive(name)
    }
    const handleChange = (eve) => {
        setActive(eve.target.value)
    }
    return (
        <div className='mx-3 my-3'>
            <div className='row'>
                <div className='d-sm-none col-12 my-3  text-center'>
                    <select onChange={handleChange} className='form-control'>
                        <option>---Please select---</option>
                        {
                            data.map(({ name }, ind) => {
                                return <option key={ind}>{name}</option>
                            })
                        }
                    </select>
                </div>
                <div className={`d-none d-sm-block col-sm-4 col-md-3 col-lg-2`}>
                    {
                        data.map(({ name }, ind) => {
                            return <div className={`${styles.leftSideItems} ${name === active ? styles.active : ''}`} onClick={() => handleClick(name)} key={ind}>{name}</div>
                        })
                    }
                </div>
                <div className='col-12 col-sm-8 col-md-9 col-lg-10'>
                    {
                        data.map(({ name, component }, ind) => {
                            return <div key={ind}>{name === active && component}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
