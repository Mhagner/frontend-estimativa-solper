import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'

const columns = [{
    dataField: 'id',
    text: 'item'
}, {
    dataField: 'descricao',
    text: 'Descrição do item'
}, {
    dataField: 'requisito',
    text: 'Requisito'
}, {
    dataField: 'desenvolvimento',
    text: 'Desenvolvimento'
}, {
    dataField: 'testes',
    text: 'Testes'
}, {
    dataField: 'total',
    text: 'Total'
}];

const products = [{
    id: 1,
    descricao: "Workflow Customizado de Benefícios",
    requisito: 20,
    desenvolvimento: 24,
    testes: 12,
    total: 56
},{
    id: 2,
    descricao: "Interface de Integração de Funcionários",
    requisito: 20,
    desenvolvimento: 24,
    testes: 12,
    total: 56
}]

const TableEdite = () => {
    return (
        <>
            <BootstrapTable
                keyField="id"
                data={products}
                columns={columns}
                headerWrapperClasses="foo"
                hover
                striped
                cellEdit={cellEditFactory({ mode: 'click' })}
            />
        </>
    )
}

export default TableEdite
