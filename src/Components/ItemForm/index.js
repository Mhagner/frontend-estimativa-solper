import React from 'react'

const ItemForm = ({ simbol, prepend, label, children, type = "text", placeholder, readonly, ...outherProps }) => (
    <div className="form-group">
        <>
            <label>{label}</label>
            {prepend && <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">{simbol}</span>
            </div>}
            <input type={type} readonly={readonly} {...outherProps} className="form-control" placeholder={placeholder} />
        </>
    </div>
)

export default ItemForm