import React from 'react'

const Combobox = ({ label, children, type = "text", placeholder, ...outherProps }) => (
    <div className="form-group">
        <>
            <label>{label}</label>
            <select className="form-control">
                <option value="1">Globo</option>
                <option value="2">Renner</option>
                <option value="3">VLI</option>
            </select>
        </>
    </div>
)


export default Combobox