import React from 'react'

const ItemForm = ({ label, children, type = "text", placeholder, readonly, ...outherProps }) => (
    <div className="form-group">
        <>
            <label for="formGroupExampleInput">{label}</label>
            <input type={type} readonly={readonly} {...outherProps} className="form-control" placeholder={placeholder} />
        </>
    </div>
)

export default ItemForm