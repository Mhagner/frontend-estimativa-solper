import React from 'react'

const Combobox = ({ label, lista, ...outherProps }) => (
    <div className="form-group">
        <>
            <label>{label}</label>
            <select className="form-control" {...outherProps}>
                {lista.map((cliente) => (
                    <option
                        value={cliente.descricao}>
                        {cliente.descricao}
                    </option>
                ))}
            </select>
        </>
    </div>
)


export default Combobox