"use client"
import React, { useState } from 'react'
import Input from '../common/inputControls/Input'
import Textarea from '../common/inputControls/TextArea/TextArea'
import { config } from './configuration.js'
import styles from './Contact.module.css'
import { fieldLevelValidation, formLevelValidation } from '@/common/validations'


export const Contact = () => {
    const [formControls, setFormControls] = useState(config)
    const handleChange = (eve) => {
        fieldLevelValidation(eve, formControls, setFormControls)
    }
    const handleSubmit = () => {
        const [isFormValid, dataObj] = formLevelValidation(formControls, setFormControls)
        if (!isFormValid) return;
    }
    return (
        <div className='mt-3'>
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
            <div className='row'>
                <div className='offset-5 col-7'>
                    <button onClick={handleSubmit} className='btn btn-dark'>Submit</button>
                </div>
            </div>
            <div className='mt-3'>
                <iframe className='w-100 iframe-h400' src="https://google.com/maps?q=44.444,3343&output=embed" ></iframe>
            </div>
        </div >

    )
}


