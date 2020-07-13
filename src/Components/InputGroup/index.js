import React from 'react'

const InputGroup = ({ simbol, prepend, label, children, type = "text", placeholder, readonly, ...outherProps }) => (
    <div className="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">{simbol}</span>
        </div>
        <input type={type} readonly={readonly} {...outherProps} className="form-control" placeholder={placeholder} />
    </div>
)

export default InputGroup