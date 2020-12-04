import React, { useState, useEffect } from 'react';
import { Spin } from 'antd'
import Main from '../../Components/Main'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Breadcrumb from '../../Components/Breadcrumb'
import { useHistory, Link } from 'react-router-dom'
import api from '../../Utils/api'
import { options } from '../../Components/TableEdite/data'
import Loader from 'react-loader-spinner'
import '../../Utils/styles.scss'
import ButtonIcon from '../../Components/ButtonIcon'

const Clientes = () => {

    const [clientes, setClientes] = useState([])
    const [id, setId] = useState(null)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        getClientes()
    }, [])

    function getClientes() {
        setLoader(true)
        api.get('clientes/?sort=descricao')
            .then(response => {
                //console.log(response.data)
                setClientes(response.data)
                setLoader(false)
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

    const actionFormaterDetails = () => {
        return (
            <Link className='btn btn-default btn-custom'
                to={`/parametrizacoes/clientes/${id}`}>
                <i className='fa fa-eye btn-icon'></i>
            </Link>
        );
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
                return { width: "20%" };
            }
        },
        {
            isDummyField: false,
            formatter: actionFormaterDetails,
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
                <ButtonIcon
                    size={`2 mb-3`}
                    route={'/parametrizacoes/novo-cliente'}
                    color="success">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </ButtonIcon>
                {/*  <button
                        type="button"
                        onClick={(id) => history.push("/parametrizacoes/novo-cliente")}
                        className="btn btn-success">
                        Novo
                    </button> */}
            </div>
            <div className="row">
                <div className="col-md-6 order-md-1">
                    <Spin spinning={loader}>
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
                    </Spin>
                </div>
            </div>
            <hr className="featurette-divider" />
        </Main >
    );
};


export default Clientes;
