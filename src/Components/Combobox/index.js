import React from 'react'

const Combobox = ({ label, lista, ...outherProps }) => (
    <div className="form-group">
        <>
            <label>{label}</label>
            <select className="form-control" {...outherProps}>
                {lista.map((item) => (
                    <option
                        value={(item.descricao)?item.descricao:item.data}>
                        {(item.descricao)?item.descricao:item.data}
                    </option>
                ))}
            </select>
        </>
    </div>
)


export default Combobox