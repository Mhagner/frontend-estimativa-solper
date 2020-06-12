import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'

import { columns, data } from './data'

const TableResume = () => {

    return (
        <>
            <BootstrapTable
                keyField="id"
                bootstrap4
                data={data}
                columns={columns}
                headerWrapperClasses="foo"
                hover
                striped
                cellEdit={cellEditFactory({
                    mode: 'click',
                    blurToSave: true
                })}
            />
        </>
    )
}

export default TableResume
