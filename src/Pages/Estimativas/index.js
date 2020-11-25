import React, { useState, useEffect } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link, useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import api from '../../Utils/api'
import { options } from '../../Components/TableEdite/data'
import Main from '../../Components/Main'
import '../../Utils/styles.scss'


function Estimativas() {

    const [id, setId] = useState(null)
    const [estimativas, setEstimativas] = useState([])
    const [loader, setLoader] = useState(false)


    useEffect(() => {
        getEstimativas()
    }, [])

    function getEstimativas() {
        setLoader(true)
        //setEstimativas(estimativasData)
        api.get('estimativas')
            .then(response => {
                setEstimativas(response.data)
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
                to={`/estimativas/${id}`}>
                <i className='fa fa-eye btn-icon'></i>
            </Link>
        );
    }

    const columns = [
        {
            dataField: '_id',
            text: 'Item',
            headerStyle: () => {
                return { width: "4%" };
            },
            align: "center",
            hidden: true
        },
        {
            dataField: 'numeroDaOportunidade',
            text: 'Oportunidade',
            filter: textFilter(),
            headerStyle: () => {
                return { width: "8%" };
            }
        },
        {
            dataField: 'cliente',
            text: 'Cliente',
            filter: textFilter(),
            headerStyle: () => {

                return { width: "10%" };
            }
        },
        {
            dataField: 'descricaoDaOportunidade',
            text: 'Descrição da oportunidade',
            filter: textFilter(),
            headerStyle: () => {
                return { width: "30%" };
            }
        },
        {
            dataField: 'data',
            text: 'Data',
            filter: textFilter(),
            headerStyle: () => {

                return { width: "10%" };
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
        <Main titlePage="Estimativas Realizadas">
            <div className="col-md-10 order-md-1">
                {(loader) ?
                    <Loader
                        type="TailSpin"
                        color="#00BFFF"
                        height={100}
                        width={100}
                    /> :
                    <BootstrapTable
                        keyField="idEstimativa"
                        bootstrap4
                        data={estimativas}
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
        </Main >
    )
}

export default Estimativas