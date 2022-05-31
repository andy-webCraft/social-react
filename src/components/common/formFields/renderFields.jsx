import React from 'react';
import { Field } from 'redux-form';
import { maxLengthCreator } from '../../../tools/validators';
import { Input } from '../formControl/formControl';
import style from './renderFields.module.scss'

const maxLength20 = maxLengthCreator(30)

const renderFields = (obj, typeField, fieldNamePrefix = null) => {
    switch (typeField) {
        case "text": {
            return Object.entries(obj).map(([key, value]) => {
                if (typeof value !== 'object' && value !== "") {
                    let valueField = value
                    if (typeof valueField === "boolean") {
                        valueField = valueField === true ? "yes" : "no"
                    }
                    return <li key={key} className={style.item}>
                        <b>{key}:</b>
                        <span>{valueField}</span>
                    </li>
                }
                else return null
            })
        }
        case "input": {
            return Object.entries(obj).map(([key, value]) => {
                if (typeof value !== 'object' | value === null) {
                    return <li key={key} className={style.item}><b>{key}:</b>
                        <Field
                            component={Input}
                            type={typeof value === "boolean" ? "checkbox" : "text"}
                            name={fieldNamePrefix ? fieldNamePrefix + '.' + key : key}
                            value={value}
                            validate={maxLength20}
                        />
                    </li>
                } else return null
            })
        }
        default: return null
    }
}

export default renderFields