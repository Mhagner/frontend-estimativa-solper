import React from 'react'
import './style.scss'

function RadioButton({ onChange, checked, value, label, name, children, type = "radio", ...outherProps }) {
    return (
        <div>
            <label>
                <input
                    type={type}
                    checked={checked}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                {'  '}{label}
            </label>
        </div>
    )
}

export default RadioButton