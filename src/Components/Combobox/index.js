import React from 'react'
import { clientes } from './data'

const Combobox = ({ label, ...outherProps }) => (
    <div className="form-group">
        <>
            <label>{label}</label>
            <select className="form-control" {...outherProps}>
                {clientes.map(([value, name])=>(
                    <option value={value}>{name}</option>
                ))}
            </select>
        </>
    </div>
)


export default Combobox