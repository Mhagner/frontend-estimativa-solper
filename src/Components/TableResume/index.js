 import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'

import { columns, dados } from './data'

const TableResume = ({requisito}) => {

    dados[0].horas = requisito

    return (
        <>
            <BootstrapTable
                keyField="id"
                bootstrap4
                data={dados}
                columns={columns}
                headerWrapperClasses="foo"
                hover
                striped
            />
        </>
    )
}

export default TableResume
