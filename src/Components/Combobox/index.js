import React from 'react'
//import { clientes } from './data'
import { clientes } from '../../Utils/mocks/mockClientes'


const Combobox = ({ label, ...outherProps }) => (
    <div className="form-group">
        <>
            <label>{label}</label>
            <select className="form-control" {...outherProps}>
                {clientes.map((cliente) => (
                    <option value={cliente.descricao}>{cliente.descricao}</option>
                ))}
                {/* {clientes.map(([value, name])=>(
                    <option value={value}>{name}</option>
                ))} */}
            </select>
        </>
    </div>
)


export default Combobox