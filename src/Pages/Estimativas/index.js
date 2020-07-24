import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator';

import { estimativas } from '../../Utils/mocks/mockEstimativas'
import { options } from '../../Components/TableEdite/data'
import Main from '../../Components/Main'

const columns = [
    {
        dataField: 'idEstimativa',
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
        headerStyle: () => {
            return { width: "30%" };
        }
    }
]

function Estimativas() {
    return (
        <Main titlePage="Estimativas Realizadas">
            <BootstrapTable
                keyField="idEstimativa"
                bootstrap4
                data={estimativas}
                columns={columns}
                filter={filterFactory()}
                pagination={paginationFactory(options)}
                noDataIndication="Não existe o dado pesquisado!"
                striped
                hover
            />
        </Main>
    )
}

export default Estimativas