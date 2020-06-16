import React from 'react'

const ItemForm = ({ label, children, type = "text", placeholder, ...outherProps }) => (
    <div className="form-group">
        <>
            <label for="formGroupExampleInput">{label}</label>
            <input type={type} {...outherProps} className="form-control" placeholder={placeholder} />
        </>
    </div>
)

export default ItemForm