import React from 'react'
import { useHistory } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor'
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [{
    dataField: 'id',
    text: 'ITEM',
    headerStyle: () => {
        return { width: "6%" };
    },
    align: "center"
}, {
    dataField: 'descricao',
    text: 'DESCRIÇÃO DO ITEM',
    editor: {
        type: Type.TEXTAREA
    },
    headerStyle: () => {
        return { width: "30%" };
    }
},
{
    dataField: 'tipo',
    text: 'TIPO',
    editor: {
        type: Type.SELECT,
        options: [
            {
                value: "Workflow (Tela)",
                label: "Workflow (Tela)"
            },
            {
                value: "Workflow (Orquestração)",
                label: "Workflow (Orquestração)"
            },
            {
                value: "Customizado",
                label: "Customizado"
            },
            {
                value: "Integra Fácil",
                label: "Integra Fácil"
            }
        ]
    },
    headerStyle: () => {
        return { width: "20%" };
    }
}, {
    dataField: 'requisito',
    text: 'REQUISITO',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}, {
    dataField: 'desenvolvimento',
    text: 'DESENV.',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}, {
    dataField: 'testes',
    text: 'TESTES',
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}, {
    dataField: 'total',
    text: 'TOTAL',
    editable: false,
    headerStyle: () => {
        return { width: "10%" };
    },
    align: "center"
}];

const options = {
    sizePerPage: 6,
    sizePerPageList: [{
        text: '6', value: 6
    }, {
        text: '10', value: 10
    }, {
        text: '20', value: 20
    },{
        text: '30', value: 30
    }]
}

const data = [
    {
        id: 1,
        descricao: "",
        tipo: "",
        requisito: 0,
        desenvolvimento: 0,
        testes: 0,
        total: 0
    },
    {
        id: 2,
        descricao: "",
        tipo: "",
        requisito: 0,
        desenvolvimento: 0,
        testes: 0,
        total: 0
    },
    {
        id: 3,
        descricao: "",
        tipo: "",
        requisito: 0,
        desenvolvimento: 0,
        testes: 0,
        total: 0
    },
    {
        id: 4,
        descricao: "",
        tipo: "",
        requisito: 0,
        desenvolvimento: 0,
        testes: 0,
        total: 0
    }
]


const TableEdite = () => {
    let history = useHistory();

    function addNewRow() {

        const newEstimate = {
            id: data.length + 1,
            descricao: "",
            tipo: "",
            requisito: 0,
            desenvolvimento: 0,
            testes: 0,
            total: 0
        }
        data.push(newEstimate);
        history.push('/nova-estimativa')
    }

    return (
        <>
            <div className="btn-group mb-3">
                <button className="btn btn-primary" onClick={() => addNewRow()}>Nova linha</button>
            </div>
            <div className="col-md-12 mb-3">
                <BootstrapTable
                    keyField="id"
                    bootstrap4
                    data={data}
                    columns={columns}
                    headerWrapperClasses="foo"
                    hover
                    striped
                    pagination={paginationFactory(options)}
                    cellEdit={cellEditFactory({
                        mode: 'click',
                        blurToSave: true
                    })}
                />
            </div>

        </>
    )
}

export default TableEdite
