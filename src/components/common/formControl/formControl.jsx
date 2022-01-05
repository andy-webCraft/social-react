import React from 'react';
import style from './formControl.module.css'

const FormControl = (Type) => {
    return ({ input, meta, ...props }) => {
        const hasError = meta.touched && meta.error

        return (
            <div className={style.formControl + " " + (hasError ? style.error : undefined)}>
                {hasError ? <p>{meta.error}</p> : undefined}
                <Type {...input} {...props} />
            </div>
        )
    }
}

export const TextArea =  FormControl("textarea")
export const Input =  FormControl("input")
