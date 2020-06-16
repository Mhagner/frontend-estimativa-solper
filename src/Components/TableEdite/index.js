import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory from 'react-bootstrap-table2-editor'
import paginationFactory from 'react-bootstrap-table2-paginator';

const TableEdite = (props) => {

    function load(dados, item) {
        const req = dados.map(req => (
            req[item]
        ))
        const sumDado = req.reduce((acc, item) => acc + item, 0)
        return sumDado
    }

    return (
        <>
            <div className="col-md-12 mb-3">
                <BootstrapTable
                    keyField="id"
                    bootstrap4
                    data={props.defaultData}
                    columns={props.columns}
                    hover
                    striped
                    pagination={paginationFactory(props.options)}
                    cellEdit={cellEditFactory({
                        mode: 'click',
                        blurToSave: true,
                        afterSaveCell:
                            (oldValue, newValue, row, column) => {
                                props.setRequisito(load(props.dados, props.type))
                            }
                    })}
                />
            </div>
        </>
    )
}

export default TableEdite
