import React, { useState, useEffect } from 'react';
import Main from '../../Components/Main'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Breadcrumb from '../../Components/Breadcrumb'
import { useHistory, Link } from 'react-router-dom'
import api from '../../Utils/api'
import { options } from '../../Components/TableEdite/data'
import Loader from 'react-loader-spinner'
import './style.css'

const Clientes = () => {

    const [clientes, setClientes] = useState([])
    const [id, setId] = useState(null)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        getClientes()
    }, [])

    function getClientes() {
        setLoader(true)
        api.get('clientes')
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
                <div className="col-md-8 mb-3">
                    <button
                        type="button"
                        onClick={(id) => history.push("/parametrizacoes/novo-cliente")}
                        className="btn btn-success">
                        Novo
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 order-md-1">
                    {(loader) ?
                        <Loader
                            type="TailSpin"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        /> :
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
                    }
                </div>
            </div>
            <hr className="featurette-divider" />
        </Main >
    );
};


export default Clientes;
