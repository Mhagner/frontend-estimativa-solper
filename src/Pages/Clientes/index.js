import React, { useState, useEffect } from 'react';
import Main from '../../Components/Main'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Breadcrumb from '../../Components/Breadcrumb'
import { useHistory } from 'react-router-dom'
import api from '../../Utils/api'
import { options } from '../../Components/TableEdite/data'
import './style.css'

const Clientes = () => {

    const [clientes, setClientes] = useState([])
    const [id, setId] = useState(null)

    useEffect(() => {
        getClientes()
    }, [])

    function getClientes() {
        api.get('clientes')
            .then(response => {
                //console.log(response.data)
                setClientes(response.data)
            })
    }

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            setId(row._id)
            //console.log(id)
        },
        onMouseEnter: (e, row, rowIndex) => {
            setId(row._id)
        }
    }

    const actionFormaterUpdate = () => {
        return (
            <button className='btn btn-default btn-custom'
                onClick={() => console.log('editar!')}>
                <i className='fa fa-pencil btn-icon'></i>
            </button>
        );
    }

    const actionFormaterDelete = () => {
        return (
            <button className='btn btn-default btn-custom'
                onClick={() => deleteRow(id)}>
                <i className='fa fa-trash-o btn-icon'></i>
            </button>
        );
    }

    function deleteRow(_id) {
        api.delete(`clientes/${_id}`)
            .then(response => {
                getClientes()
            })
            .catch(error => {
                console.log("deu ruim!")
            })

    }

    let history = useHistory()

    const lista = [
        {
            link: "/parametrizacoes",
            descricao: "Parametrizações"
        },
        {
            descricao: "Clientes",
            current: 'page',
            ativo: "active"
        },
    ]

    const columns = [
        {
            dataField: '_id',
            text: 'ID',
            headerStyle: () => {
                return { width: "20%" };
            },
            align: "center",
            hidden: true
        },
        {
            dataField: 'descricao',
            text: 'Cliente',
            filter: textFilter(),
            headerStyle: () => {
                return { width: "20%" };
            }
        },
        {
            dataField: 'tipo',
            text: 'Tipo',
            filter: textFilter(),
            headerStyle: () => {

                return { width: "16%" };
            }
        },
        {
            dataField: 'colaboradores',
            text: 'Qtde de colaboradores',
            headerStyle: () => {
                return { width: "16%" };
            }
        },
        {
            isDummyField: false,
            formatter: actionFormaterUpdate,
            editable: false,
            formatExtraData: { id },
            headerStyle: () => {
                return { width: "5%" };
            },
            align: 'center'
        },
        {
            isDummyField: false,
            formatter: actionFormaterDelete,
            editable: false,
            formatExtraData: { id },
            headerStyle: () => {
                return { width: "5%" };
            },
            align: 'center'
        }
    ]

    return (
        <Main titlePage="Clientes">
            <div className="row">
                <div className="col-md-6">
                    <Breadcrumb
                        lista={lista}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 mb-3">
                    <button
                        type="button"
                        onClick={() => history.push("/parametrizacoes/novo-cliente")}
                        className="btn btn-success">
                        Novo
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 order-md-1">
                    <BootstrapTable
                        keyField="_id"
                        bootstrap4
                        data={clientes}
                        columns={columns}
                        rowEvents={rowEvents}
                        filter={filterFactory()}
                        pagination={paginationFactory(options)}
                        noDataIndication="Não existe o dado pesquisado!"
                        striped
                        hover
                    />
                </div>
            </div>
            <hr className="featurette-divider" />
        </Main >
    );
};


export default Clientes;