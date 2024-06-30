"use client"
import React, { useState } from 'react'
import Input from '../common/inputControls/Input'
import Textarea from '../common/inputControls/TextArea/TextArea'
import { config } from './configuration'
import styles from './Login.module.css'
import { fieldLevelValidation, formLevelValidation } from '@/common/validations'

export const Login = () => {
    const [formControls, setFormControls] = useState(config)
    const handleChange = (eve) => {
        fieldLevelValidation(eve, formControls, setFormControls)
    }
    const handleSubmit = () => {
        const [isFormValid, dataObj] = formLevelValidation(formControls, setFormControls)
        if (!isFormValid) return;
    }
    return (
        <div>
            {
                formControls.map((obj, ind) => {
                    switch (obj.tag) {
                        case 'input':
                            return <Input key={`Input_${ind}`} {...obj} handleChange={handleChange} />
                        case 'textarea':
                            return <Textarea key={`Input_${ind}`} {...obj} handleChange={handleChange} />
                        case 'default':
                            return <div />
                    }
                })
            }
            <button onClick={handleSubmit} className='btn btn-dark'>Login</button>
        </div>

    )
}

